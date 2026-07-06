// Note Pin test bridge — US-001
// Documented helpers for unit tests that depend on the NotePin store.
// This is the test_contract surface: reads window.app, mounts the provider
// around a tree, and exposes read-only selectors.

import { createElement, type ReactElement, type ReactNode } from 'react';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import {
  NotePinProvider,
  useNotePinApi,
  type NotePinProviderProps,
} from '../features/note-pin/note-pin.store';
import type { NoteItem, NotePinAppApi } from '../features/note-pin/note-pin.types';

export interface RenderWithStoreOptions extends Omit<RenderOptions, 'wrapper'> {
  initialRecords?: NoteItem[];
}

function StoreWrapper({
  children,
  initialRecords,
}: {
  children: ReactNode;
  initialRecords?: NoteItem[];
}) {
  const providerProps: NotePinProviderProps = { children, initialRecords };
  return createElement(NotePinProvider, providerProps);
}

export function renderWithStore(
  ui: ReactElement,
  options: RenderWithStoreOptions = {},
): RenderResult {
  const { initialRecords, ...rest } = options;
  // Forward initialRecords to NotePinProvider so tests can seed the store with
  // deterministic mock data without touching real localStorage.
  return render(ui, {
    wrapper: ({ children }) =>
      createElement(StoreWrapper, { initialRecords, children }),
    ...rest,
  });
}

export function readWindowApp(): NotePinAppApi | null {
  if (typeof globalThis === 'undefined' || !globalThis.window) {
    return null;
  }
  return globalThis.window.app ?? null;
}

export function useAppApiOrThrow(): NotePinAppApi {
  return useNotePinApi();
}

export const TEST_BRIDGE_TAG = 'note-pin-test-bridge' as const;
