// Note Pin state store — US-001
// Owns: shared app shell state, navigation handlers, persistence bootstrap.
// Exposes: NotePinProvider, useNotePinStore.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';
import {
  INITIAL_STATE,
  STORAGE_KEY,
  type ActivePanel,
  type NoteItem,
  type NotePinAppApi,
  type NotePinAppState,
  type StorageStatus,
} from './note-pin.types';
import { notePinRepo } from './note-pin.repo';

export type NotePinAction =
  | { type: 'LOAD_START' }
  | { type: 'LOAD_OK'; records: NoteItem[]; error: string | null; recoveryAvailable: boolean }
  | { type: 'LOAD_FAIL'; error: string }
  | { type: 'NAVIGATE'; panel: ActivePanel }
  | { type: 'SELECT'; id: string | null }
  | { type: 'CLEAR_ERROR' }
  | { type: 'RESET' };

export function notePinReducer(state: NotePinAppState, action: NotePinAction): NotePinAppState {
  switch (action.type) {
    case 'LOAD_START':
      return {
        ...state,
        storageStatus: 'loading' satisfies StorageStatus,
        ready: false,
      };
    case 'LOAD_OK':
      return {
        ...state,
        storageStatus: action.error ? ('error' satisfies StorageStatus) : ('ready' satisfies StorageStatus),
        ready: true,
        records: action.records,
        itemCount: action.records.length,
        lastError: action.error,
        recoveryAvailable: action.recoveryAvailable,
      };
    case 'LOAD_FAIL':
      return {
        ...state,
        storageStatus: 'error',
        ready: true,
        lastError: action.error,
      };
    case 'NAVIGATE':
      return {
        ...state,
        activePanel: action.panel,
        route: action.panel,
      };
    case 'SELECT':
      return { ...state, selectedEntityId: action.id };
    case 'CLEAR_ERROR':
      return { ...state, lastError: null };
    case 'RESET':
      return { ...INITIAL_STATE, ready: true };
    default:
      return state;
  }
}

export interface NotePinStoreValue {
  state: NotePinAppState;
  api: NotePinAppApi;
  dispatch: (action: NotePinAction) => void;
}

const NotePinStoreContext = createContext<NotePinStoreValue | null>(null);

export interface NotePinProviderProps {
  children: ReactNode;
  initialRecords?: NoteItem[];
  windowTarget?: (typeof globalThis)['window'];
}

export function NotePinProvider({ children, initialRecords }: NotePinProviderProps): JSX.Element {
  // `useReducer` guarantees that `dispatch` retains a stable identity for the
  // lifetime of the provider, which lets the `api` memo below avoid depending on
  // `state` (and therefore avoid being rebuilt on every state transition).
  // This is the fix for the gemini-code-assist review comment on
  // `src/features/note-pin/note-pin.store.tsx`: any consumer of
  // `useNotePinApi()` (e.g. the `actions` memo in `App.tsx`) now sees a
  // referentially-stable API object.
  const [state, dispatch] = useReducer(notePinReducer, INITIAL_STATE);
  const bootstrappedRef = useRef(false);

  // Bootstrap on mount: load persisted records once.
  useEffect(() => {
    if (bootstrappedRef.current) {
      return;
    }
    bootstrappedRef.current = true;
    dispatch({ type: 'LOAD_START' });
    if (initialRecords) {
      // Test override: caller-provided seed avoids touching storage in tests.
      // Defined-check (not length>0) so an explicit empty array also bypasses localStorage.
      dispatch({
        type: 'LOAD_OK',
        records: initialRecords,
        error: null,
        recoveryAvailable: false,
      });
      return;
    }
    try {
      const result = notePinRepo.load();
      dispatch({
        type: 'LOAD_OK',
        records: result.records,
        error: result.error,
        recoveryAvailable: result.recoveryAvailable,
      });
    } catch (err) {
      dispatch({ type: 'LOAD_FAIL', error: err instanceof Error ? err.message : String(err) });
    }
  }, [dispatch, initialRecords]);

  // Keep the latest state in a ref so the `api` object can stay referentially
  // stable across renders while still returning the latest snapshot from
  // `api.state()`. Without this sync effect, callers would observe a frozen
  // snapshot rather than a live read of the most recent state.
  const stateRef = useRef<NotePinAppState>(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const api = useMemo<NotePinAppApi>(
    () => ({
      state: () => stateRef.current,
      navigate: (panel) => dispatch({ type: 'NAVIGATE', panel }),
      selectRecord: (id) => dispatch({ type: 'SELECT', id }),
      reload: () => {
        dispatch({ type: 'LOAD_START' });
        try {
          const result = notePinRepo.load();
          dispatch({
            type: 'LOAD_OK',
            records: result.records,
            error: result.error,
            recoveryAvailable: result.recoveryAvailable,
          });
        } catch (err) {
          dispatch({ type: 'LOAD_FAIL', error: err instanceof Error ? err.message : String(err) });
        }
      },
      clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
    }),
    // `dispatch` from `useReducer` is referentially stable for the entire
    // lifetime of the provider, so the `api` object is built exactly once.
    [],
  );

  return (
    <NotePinStoreContext.Provider value={{ state, api, dispatch }}>
      {children}
    </NotePinStoreContext.Provider>
  );
}

export function useNotePinStore(): NotePinStoreValue {
  const ctx = useContext(NotePinStoreContext);
  if (!ctx) {
    throw new Error('useNotePinStore must be used within a NotePinProvider');
  }
  return ctx;
}

export function useNotePinApi(): NotePinAppApi {
  return useNotePinStore().api;
}

export function getStorageKey(): string {
  return STORAGE_KEY;
}
