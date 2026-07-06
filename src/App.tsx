import { useEffect, useMemo } from 'react';
import {
  InsightsNotePin,
  RecordEditorNotePin,
  RecordOperationsNotePin,
} from './screens';
import {
  NotePinStoreProvider,
  useNotePinState,
  useNotePinStore,
} from './features/note-pin/note-pin.store';
import { installNotePinBridge } from './test/bridge';
import type { NotePinSurfaceId } from './features/note-pin/note-pin.types';

function SurfaceRouter() {
  const state = useNotePinState();
  const surface: NotePinSurfaceId = state.activeSurface;

  const content = useMemo(() => {
    switch (surface) {
      case 'SURF_RECORD_EDITOR':
        return <RecordEditorNotePin />;
      case 'SURF_INSIGHTS':
        return <InsightsNotePin />;
      case 'SURF_RECORD_OPERATIONS':
      default:
        return <RecordOperationsNotePin />;
    }
  }, [surface]);

  return (
    <div
      data-setfarm-surface={surface}
      data-testid="setfarm-surface"
      className="min-h-screen bg-background text-on-surface"
    >
      {content}
    </div>
  );
}

function BridgeSync() {
  const api = useNotePinStore();
  useEffect(() => {
    installNotePinBridge(api);
  }, [api]);
  return null;
}

function AppShell() {
  return (
    <>
      <BridgeSync />
      <SurfaceRouter />
    </>
  );
}

export default function App() {
  return (
    <NotePinStoreProvider>
      <div
        data-setfarm-root="note-pin"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-background text-on-surface"
      >
        <AppShell />
      </div>
    </NotePinStoreProvider>
  );
}