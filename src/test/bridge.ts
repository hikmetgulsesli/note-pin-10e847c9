/**
 * Test bridge exposing the Note Pin app shell state on `window.app`.
 *
 * The app shell story's test contract requires `window.app` to expose:
 *   - activeSurface / activeRoute
 *   - selectedRecordId / selectedRecord
 *   - itemCount
 *   - storageStatus
 *   - lastError
 *   - activePanel
 *   - records
 *   - actions (setSurface, setSelected, setPanel, upsertRecord, deleteRecord)
 *
 * Tests can pull this object without re-rendering the full app tree. In
 * production the bridge is a thin, read-only view onto the store API.
 */

import type { NotePinStoreApi } from '../features/note-pin/note-pin.store';
import type {
  NotePinActivePanel,
  NotePinSurfaceId,
  NotePinRecord,
} from '../features/note-pin/note-pin.types';

export interface NotePinWindowApp {
  activeSurface: NotePinSurfaceId;
  activeRoute: NotePinSurfaceId;
  selectedRecordId: string | null;
  selectedRecord: NotePinRecord | null;
  itemCount: number;
  storageStatus: NotePinStoreApi['state']['storageStatus'];
  lastError: string | null;
  activePanel: NotePinActivePanel;
  records: NotePinRecord[];
  isHydrated: boolean;
  actions: {
    setSurface: (surface: NotePinSurfaceId) => void;
    setSelected: (recordId: string | null) => void;
    setPanel: (panel: NotePinActivePanel) => void;
    upsertRecord: (record: NotePinRecord) => void;
    deleteRecord: (recordId: string) => void;
    bootstrap: () => void;
  };
}

interface GlobalWithApp {
  app?: NotePinWindowApp | undefined;
}

export function installNotePinBridge(api: NotePinStoreApi): NotePinWindowApp {
  const bridge: NotePinWindowApp = {
    get activeSurface() {
      return api.state.activeSurface;
    },
    get activeRoute() {
      return api.state.activeSurface;
    },
    get selectedRecordId() {
      return api.state.selectedRecordId;
    },
    get selectedRecord() {
      if (!api.state.selectedRecordId) return null;
      return (
        api.state.records.find((r) => r.id === api.state.selectedRecordId) ?? null
      );
    },
    get itemCount() {
      return api.state.itemCount;
    },
    get storageStatus() {
      return api.state.storageStatus;
    },
    get lastError() {
      return api.state.lastError;
    },
    get activePanel() {
      return api.state.activePanel;
    },
    get records() {
      return api.state.records;
    },
    get isHydrated() {
      return api.state.isHydrated;
    },
    actions: {
      setSurface: api.setSurface,
      setSelected: api.setSelected,
      setPanel: api.setPanel,
      upsertRecord: api.upsertRecord,
      deleteRecord: api.deleteRecord,
      bootstrap: api.bootstrap,
    },
  };

  const globalScope = globalThis as unknown as GlobalWithApp;
  globalScope.app = bridge;
  return bridge;
}

export function getNotePinBridge(): NotePinWindowApp | null {
  const globalScope = globalThis as unknown as GlobalWithApp;
  return globalScope.app ?? null;
}