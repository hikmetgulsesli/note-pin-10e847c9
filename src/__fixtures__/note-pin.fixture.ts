/**
 * Deterministic fixture data for the Note Pin feature.
 *
 * Used by the repository (when storage is empty or in tests) and by unit
 * tests for the store and the test bridge.
 */

import type {
  NotePinPersistedState,
  NotePinRecord,
} from '../features/note-pin/note-pin.types';

export const NOTE_PIN_FIXTURE_RECORDS: NotePinRecord[] = [
  {
    id: 'note-fixture-1',
    title: 'Grocery list',
    body: 'Milk, eggs, bread, butter, fruit.',
    createdAt: '2026-01-04T09:00:00.000Z',
    updatedAt: '2026-01-05T11:30:00.000Z',
    pinned: true,
  },
  {
    id: 'note-fixture-2',
    title: 'Project ideas',
    body: 'Sketch the dashboard layout, decide on the data model.',
    createdAt: '2026-01-02T14:15:00.000Z',
    updatedAt: '2026-01-06T08:00:00.000Z',
    pinned: false,
  },
  {
    id: 'note-fixture-3',
    title: 'Reading list',
    body: 'Designing Data-Intensive Applications, Domain Modeling Made Functional.',
    createdAt: '2025-12-21T19:45:00.000Z',
    updatedAt: '2026-01-03T20:10:00.000Z',
    pinned: false,
  },
];

export const NOTE_PIN_FIXTURE_PREFERENCES = {
  activeSurface: 'SURF_RECORD_OPERATIONS' as const,
  activePanel: 'list' as const,
  sortBy: 'updatedAt' as const,
  filterQuery: '',
};

export const NOTE_PIN_FIXTURE_STATE: NotePinPersistedState = {
  version: 1,
  records: NOTE_PIN_FIXTURE_RECORDS,
  preferences: NOTE_PIN_FIXTURE_PREFERENCES,
};