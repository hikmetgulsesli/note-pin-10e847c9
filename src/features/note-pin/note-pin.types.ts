/**
 * Domain types for the Note Pin feature.
 *
 * The app shell owns navigation between the three surfaces declared in
 * stitch/SCREEN_MAP.json. These types are the single source of truth for the
 * surface IDs, app shell state, and the persisted record shape that flows
 * between store, repository, and the generated screen components.
 */

export type NotePinSurfaceId =
  | 'SURF_RECORD_OPERATIONS'
  | 'SURF_RECORD_EDITOR'
  | 'SURF_INSIGHTS';

export const NOTE_PIN_SURFACE_IDS: readonly NotePinSurfaceId[] = [
  'SURF_RECORD_OPERATIONS',
  'SURF_RECORD_EDITOR',
  'SURF_INSIGHTS',
] as const;

export type NotePinActivePanel =
  | 'list'
  | 'editor'
  | 'insights'
  | 'filter'
  | 'sort';

export type NotePinStorageStatus =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'error';

export interface NotePinRecord {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

export interface NotePinPreferences {
  activeSurface: NotePinSurfaceId;
  activePanel: NotePinActivePanel;
  sortBy: 'updatedAt' | 'createdAt' | 'title';
  filterQuery: string;
}

export interface NotePinPersistedState {
  version: 1;
  records: NotePinRecord[];
  preferences: NotePinPreferences;
}

export interface NotePinShellState {
  activeSurface: NotePinSurfaceId;
  selectedRecordId: string | null;
  storageStatus: NotePinStorageStatus;
  lastError: string | null;
  activePanel: NotePinActivePanel;
  records: NotePinRecord[];
  itemCount: number;
  isHydrated: boolean;
}

export type NotePinBootstrapAction = {
  type: 'note-pin/bootstrap';
};

export type NotePinSetSurfaceAction = {
  type: 'note-pin/set-surface';
  surface: NotePinSurfaceId;
};

export type NotePinSetSelectedAction = {
  type: 'note-pin/set-selected';
  recordId: string | null;
};

export type NotePinSetPanelAction = {
  type: 'note-pin/set-panel';
  panel: NotePinActivePanel;
};

export type NotePinRecordsLoadedAction = {
  type: 'note-pin/records-loaded';
  records: NotePinRecord[];
};

export type NotePinRecordUpsertedAction = {
  type: 'note-pin/record-upserted';
  record: NotePinRecord;
};

export type NotePinRecordDeletedAction = {
  type: 'note-pin/record-deleted';
  recordId: string;
};

export type NotePinStorageErrorAction = {
  type: 'note-pin/storage-error';
  message: string;
};

export type NotePinHydratedAction = {
  type: 'note-pin/hydrated';
};

export type NotePinAction =
  | NotePinBootstrapAction
  | NotePinSetSurfaceAction
  | NotePinSetSelectedAction
  | NotePinSetPanelAction
  | NotePinRecordsLoadedAction
  | NotePinRecordUpsertedAction
  | NotePinRecordDeletedAction
  | NotePinStorageErrorAction
  | NotePinHydratedAction;

export const DEFAULT_NOTE_PIN_PREFERENCES: NotePinPreferences = {
  activeSurface: 'SURF_RECORD_OPERATIONS',
  activePanel: 'list',
  sortBy: 'updatedAt',
  filterQuery: '',
};

export const DEFAULT_NOTE_PIN_STATE: NotePinShellState = {
  activeSurface: DEFAULT_NOTE_PIN_PREFERENCES.activeSurface,
  selectedRecordId: null,
  storageStatus: 'idle',
  lastError: null,
  activePanel: DEFAULT_NOTE_PIN_PREFERENCES.activePanel,
  records: [],
  itemCount: 0,
  isHydrated: false,
};