// Note Pin fixtures — US-001
// Stable seed data for tests and Story demos. Pure data, no side effects.

import type { NoteItem } from '../features/note-pin/note-pin.types';

export const sampleNoteItems: NoteItem[] = [
  {
    id: 'note-fixture-1',
    title: 'Grocery list',
    body: 'Milk, bread, eggs, apples.',
    createdAt: '2026-01-04T09:00:00.000Z',
    updatedAt: '2026-01-04T09:00:00.000Z',
  },
  {
    id: 'note-fixture-2',
    title: 'Reading notes',
    body: 'Chapter 3: pull quotes on focus and deep work.',
    createdAt: '2026-01-05T10:15:00.000Z',
    updatedAt: '2026-01-05T10:15:00.000Z',
  },
  {
    id: 'note-fixture-3',
    title: 'Sprint retrospective',
    body: 'Stop / start / continue outcomes for the team.',
    createdAt: '2026-01-06T14:45:00.000Z',
    updatedAt: '2026-01-06T14:45:00.000Z',
  },
];

export const emptyNoteItems: NoteItem[] = [];

export const corruptedPayload = '{not-valid-json';
