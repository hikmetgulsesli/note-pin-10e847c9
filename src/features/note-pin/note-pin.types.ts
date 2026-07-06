// Note Pin shared types — US-001: app shell, state, persistence
// Owned surface: state store type definitions.

export type ActivePanel = 'records' | 'editor' | 'insights';

export type StorageStatus = 'idle' | 'loading' | 'ready' | 'error';

export type NotePinRoute = 'records' | 'editor' | 'insights';

export interface NoteItem {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotePinAppState {
  activePanel: ActivePanel;
  route: NotePinRoute;
  selectedEntityId: string | null;
  storageStatus: StorageStatus;
  lastError: string | null;
  itemCount: number;
  records: NoteItem[];
  ready: boolean;
  recoveryAvailable: boolean;
}

export interface NotePinAppApi {
  state: () => NotePinAppState;
  navigate: (panel: ActivePanel) => void;
  selectRecord: (id: string | null) => void;
  reload: () => void;
  clearError: () => void;
}

declare global {
  interface Window {
    app?: NotePinAppApi & {
      // intent: stable test/runner bridge; intentional exposed surface for US-001.
    };
  }
}

export const STORAGE_KEY = 'note-pin:records:v1';

export const INITIAL_STATE: NotePinAppState = {
  activePanel: 'records',
  route: 'records',
  selectedEntityId: null,
  storageStatus: 'idle',
  lastError: null,
  itemCount: 0,
  records: [],
  ready: false,
  recoveryAvailable: false,
};
