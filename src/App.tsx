import { useEffect, useMemo } from 'react';
import {
  NotePinProvider,
  useNotePinApi,
  useNotePinStore,
} from './features/note-pin/note-pin.store';
import {
  InsightsNotePin,
  RecordEditorNotePin,
  RecordOperationsNotePin,
} from './screens';
import type { ActivePanel, NotePinAppApi } from './features/note-pin/note-pin.types';

function Shell(): JSX.Element {
  const { state, dispatch } = useNotePinStore();
  const api = useNotePinApi();

  // Expose window.app — stable bridge for tests and runtime probes.
  // Per test_contract: window.app exposes active screen/route, selected record,
  // counts, storage status, last error, and active panel.
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const exposed: NotePinAppApi = {
      state: () => state,
      navigate: (panel) => dispatch({ type: 'NAVIGATE', panel }),
      selectRecord: (id) => dispatch({ type: 'SELECT', id }),
      reload: () => api.reload(),
      clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
    };
    window.app = exposed;
    return () => {
      if (window.app === exposed) {
        delete window.app;
      }
    };
  }, [state, dispatch, api]);

  const actions = useMemo(() => {
    return {
      // Stable navigation contract for screen-owner stories.
      'records-3': () => api.navigate('records'),
      'editor-4': () => api.navigate('editor'),
      'insights-5': () => api.navigate('insights'),
      'records-1': () => api.navigate('records'),
      'editor-2': () => api.navigate('editor'),
      'insights-3': () => api.navigate('insights'),
      // Recovery / retry escape hatches that bootstrap exposes for sibling stories.
      'retry-load-10': () => api.reload(),
      'refresh-list-11': () => api.reload(),
      'clear-error': () => api.clearError(),
    };
  }, [api]);

  return (
    <main
      data-testid="setfarm-app-root"
      data-active-panel={state.activePanel}
      data-route={state.route}
      data-storage-status={state.storageStatus}
      data-item-count={String(state.itemCount)}
      data-recovery-available={state.recoveryAvailable ? 'true' : 'false'}
      className="note-pin-shell min-h-screen bg-slate-50 text-slate-950"
    >
      <Banner lastError={state.lastError} recoveryAvailable={state.recoveryAvailable} onClearError={() => api.clearError()} />
      <TabBar activePanel={state.activePanel} onNavigate={(panel) => api.navigate(panel)} />
      <ActiveSurface activePanel={state.activePanel} actions={actions} />
    </main>
  );
}

interface BannerProps {
  lastError: string | null;
  recoveryAvailable: boolean;
  onClearError: () => void;
}

function Banner({ lastError, recoveryAvailable, onClearError }: BannerProps): JSX.Element | null {
  if (!lastError) {
    return null;
  }
  return (
    <div
      role="alert"
      data-testid="note-pin-error-banner"
      data-recovery-available={recoveryAvailable ? 'true' : 'false'}
      className="note-pin-banner"
    >
      <span data-testid="note-pin-error-message">{lastError}</span>
      {recoveryAvailable ? (
        <button
          type="button"
          data-action-id="clear-error"
          onClick={onClearError}
          className="note-pin-banner__dismiss"
        >
          Dismiss
        </button>
      ) : null}
    </div>
  );
}

interface TabBarProps {
  activePanel: ActivePanel;
  onNavigate: (panel: ActivePanel) => void;
}

function TabBar({ activePanel, onNavigate }: TabBarProps): JSX.Element {
  return (
    <nav data-testid="note-pin-tabbar" aria-label="Note Pin sections" className="note-pin-tabbar">
      {(['records', 'editor', 'insights'] as const).map((panel) => (
        <button
          key={panel}
          type="button"
          data-action-id={`navigate-${panel}`}
          aria-current={activePanel === panel ? 'page' : undefined}
          onClick={() => onNavigate(panel)}
          className="note-pin-tabbar__tab"
        >
          {panel[0].toUpperCase() + panel.slice(1)}
        </button>
      ))}
    </nav>
  );
}

interface ActiveSurfaceProps {
  activePanel: ActivePanel;
  actions: Record<string, () => void>;
}

function ActiveSurface({ activePanel, actions }: ActiveSurfaceProps): JSX.Element {
  switch (activePanel) {
    case 'editor':
      return <RecordEditorNotePin actions={actions} />;
    case 'insights':
      return <InsightsNotePin actions={actions} />;
    case 'records':
    default:
      return <RecordOperationsNotePin actions={actions} />;
  }
}

export default function App(): JSX.Element {
  return (
    <NotePinProvider>
      <Shell />
    </NotePinProvider>
  );
}
