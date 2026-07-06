/**
 * State store for the Note Pin app shell.
 *
 * Owns the shared app shell state (active surface, selected record, storage
 * status, last error, active panel, item count) and the persisted records.
 * The store is intentionally framework-agnostic in its core (pure reducer)
 * and provides a React context for components to subscribe to it.
 *
 * The bootstrap action (ACT_APP_STATE_BOOTSTRAP) initializes the shell from
 * the persistence adapter so the first rendered surface is the actual
 * product workflow, not a landing page.
 */

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';
import {
  DEFAULT_NOTE_PIN_STATE,
  NOTE_PIN_SURFACE_IDS,
  type NotePinAction,
  type NotePinPersistedState,
  type NotePinRecord,
  type NotePinShellState,
  type NotePinSurfaceId,
} from './note-pin.types';
import { createNotePinRepo, notePinRepo } from './note-pin.repo';

export function notePinReducer(
  state: NotePinShellState,
  action: NotePinAction,
): NotePinShellState {
  switch (action.type) {
    case 'note-pin/bootstrap':
      return state;

    case 'note-pin/hydrated':
      return { ...state, isHydrated: true };

    case 'note-pin/set-surface': {
      if (!NOTE_PIN_SURFACE_IDS.includes(action.surface)) return state;
      return {
        ...state,
        activeSurface: action.surface,
      };
    }

    case 'note-pin/set-panel':
      return { ...state, activePanel: action.panel };

    case 'note-pin/set-selected':
      return { ...state, selectedRecordId: action.recordId };

    case 'note-pin/records-loaded':
      return {
        ...state,
        records: action.records,
        itemCount: action.records.length,
      };

    case 'note-pin/record-upserted': {
      const records = upsertRecord(state.records, action.record);
      return {
        ...state,
        records,
        itemCount: records.length,
        selectedRecordId: action.record.id,
      };
    }

    case 'note-pin/record-deleted': {
      const records = state.records.filter((r) => r.id !== action.recordId);
      const selectedRecordId =
        state.selectedRecordId === action.recordId ? null : state.selectedRecordId;
      return {
        ...state,
        records,
        itemCount: records.length,
        selectedRecordId,
      };
    }

    case 'note-pin/storage-error':
      return {
        ...state,
        storageStatus: 'error',
        lastError: action.message,
      };

    default:
      return state;
  }
}

function upsertRecord(
  records: NotePinRecord[],
  next: NotePinRecord,
): NotePinRecord[] {
  const index = records.findIndex((r) => r.id === next.id);
  if (index === -1) return [...records, next];
  const copy = records.slice();
  copy[index] = next;
  return copy;
}

function buildPersistedState(state: NotePinShellState): NotePinPersistedState {
  return {
    version: 1,
    records: state.records,
    preferences: {
      activeSurface: state.activeSurface,
      activePanel: state.activePanel,
      sortBy: 'updatedAt',
      filterQuery: '',
    },
  };
}

export interface NotePinStoreApi {
  state: NotePinShellState;
  dispatch: (action: NotePinAction) => void;
  bootstrap: () => void;
  setSurface: (surface: NotePinSurfaceId) => void;
  setSelected: (recordId: string | null) => void;
  setPanel: (panel: NotePinShellState['activePanel']) => void;
  upsertRecord: (record: NotePinRecord) => void;
  deleteRecord: (recordId: string) => void;
  getPersisted: () => NotePinPersistedState;
}

const NotePinStoreContext = createContext<NotePinStoreApi | null>(null);

export interface NotePinStoreProviderProps {
  children: ReactNode;
  repo?: ReturnType<typeof createNotePinRepo>;
  initialState?: NotePinShellState;
  /** Skip the bootstrap effect (useful for tests that drive the store manually). */
  skipBootstrap?: boolean;
}

export function NotePinStoreProvider({
  children,
  repo,
  initialState,
  skipBootstrap = false,
}: NotePinStoreProviderProps) {
  const repoRef = useRef(repo ?? notePinRepo);
  const [state, dispatch] = useReducer(
    notePinReducer,
    initialState ?? DEFAULT_NOTE_PIN_STATE,
  );

  // Dispatch ref so effects don't capture stale dispatch identities.
  const dispatchRef = useRef(dispatch);
  dispatchRef.current = dispatch;

  const bootstrap = useCallback(() => {
    const result = repoRef.current.load();
    if (result.status === 'empty') {
      dispatchRef.current({ type: 'note-pin/records-loaded', records: [] });
      dispatchRef.current({ type: 'note-pin/hydrated' });
      return;
    }
    if (result.status === 'corrupt') {
      dispatchRef.current({ type: 'note-pin/storage-error', message: result.error });
      dispatchRef.current({ type: 'note-pin/records-loaded', records: [] });
      dispatchRef.current({ type: 'note-pin/hydrated' });
      return;
    }
    dispatchRef.current({
      type: 'note-pin/records-loaded',
      records: result.state.records,
    });
    dispatchRef.current({
      type: 'note-pin/set-surface',
      surface: result.state.preferences.activeSurface,
    });
    dispatchRef.current({
      type: 'note-pin/set-panel',
      panel: result.state.preferences.activePanel,
    });
    dispatchRef.current({ type: 'note-pin/hydrated' });
  }, []);

  useEffect(() => {
    if (skipBootstrap) return;
    bootstrap();
  }, [bootstrap, skipBootstrap]);

  // Persist on relevant state changes (after hydration so we don't overwrite
  // stored data with the default empty state).
  useEffect(() => {
    if (!state.isHydrated) return;
    repoRef.current.save(buildPersistedState(state));
  }, [state]);

  const api = useMemo<NotePinStoreApi>(
    () => ({
      state,
      dispatch,
      bootstrap,
      setSurface: (surface) => dispatch({ type: 'note-pin/set-surface', surface }),
      setSelected: (recordId) =>
        dispatch({ type: 'note-pin/set-selected', recordId }),
      setPanel: (panel) => dispatch({ type: 'note-pin/set-panel', panel }),
      upsertRecord: (record) =>
        dispatch({ type: 'note-pin/record-upserted', record }),
      deleteRecord: (recordId) =>
        dispatch({ type: 'note-pin/record-deleted', recordId }),
      getPersisted: () => buildPersistedState(state),
    }),
    [state, bootstrap],
  );

  return createElement(NotePinStoreContext.Provider, { value: api }, children);
}

export function useNotePinStore(): NotePinStoreApi {
  const ctx = useContext(NotePinStoreContext);
  if (!ctx) {
    throw new Error('useNotePinStore must be used inside <NotePinStoreProvider>');
  }
  return ctx;
}

export function useNotePinState(): NotePinShellState {
  return useNotePinStore().state;
}

export { NotePinStoreContext };