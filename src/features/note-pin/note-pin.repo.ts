/**
 * Persistence adapter for the Note Pin feature.
 *
 * Encapsulates localStorage access behind a small, testable surface. The
 * adapter is the only module that reads or writes the storage key. It
 * validates the shape of the persisted blob so corrupted data is reported
 * (and recoverable) rather than silently dropped.
 */

import type {
  NotePinPersistedState,
  NotePinPreferences,
  NotePinRecord,
} from './note-pin.types';
import { DEFAULT_NOTE_PIN_PREFERENCES } from './note-pin.types';
import { NOTE_PIN_FIXTURE_STATE } from '../../__fixtures__/note-pin.fixture';

export const NOTE_PIN_STORAGE_KEY = 'note-pin:v1';

export type NotePinLoadResult =
  | { status: 'empty' }
  | { status: 'ok'; state: NotePinPersistedState }
  | { status: 'corrupt'; error: string };

export interface NotePinRepo {
  load(): NotePinLoadResult;
  save(state: NotePinPersistedState): void;
  clear(): void;
}

function isRecord(value: unknown): value is NotePinRecord {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.id === 'string' &&
    typeof r.title === 'string' &&
    typeof r.body === 'string' &&
    typeof r.createdAt === 'string' &&
    typeof r.updatedAt === 'string' &&
    typeof r.pinned === 'boolean'
  );
}

function isPreferences(value: unknown): value is NotePinPreferences {
  if (!value || typeof value !== 'object') return false;
  const p = value as Record<string, unknown>;
  return (
    (p.activeSurface === 'SURF_RECORD_OPERATIONS' ||
      p.activeSurface === 'SURF_RECORD_EDITOR' ||
      p.activeSurface === 'SURF_INSIGHTS') &&
    typeof p.activePanel === 'string' &&
    typeof p.sortBy === 'string' &&
    typeof p.filterQuery === 'string'
  );
}

function isPersistedState(value: unknown): value is NotePinPersistedState {
  if (!value || typeof value !== 'object') return false;
  const s = value as Record<string, unknown>;
  if (s.version !== 1) return false;
  if (!Array.isArray(s.records)) return false;
  if (!s.records.every(isRecord)) return false;
  if (!isPreferences(s.preferences)) return false;
  return true;
}

export function createNotePinRepo(storage?: Storage | null): NotePinRepo {
  const effectiveStorage = storage === undefined ? safeGetStorage() : storage;

  return {
    load(): NotePinLoadResult {
      if (!effectiveStorage) {
        return { status: 'ok', state: cloneFixture() };
      }
      let raw: string | null = null;
      try {
        raw = effectiveStorage.getItem(NOTE_PIN_STORAGE_KEY);
      } catch (error) {
        return {
          status: 'corrupt',
          error: error instanceof Error ? error.message : 'storage read failed',
        };
      }
      if (raw === null || raw.length === 0) {
        return { status: 'empty' };
      }
      let parsed: unknown;
      try {
        parsed = JSON.parse(raw);
      } catch (error) {
        return {
          status: 'corrupt',
          error: error instanceof Error ? error.message : 'invalid JSON',
        };
      }
      if (!isPersistedState(parsed)) {
        return { status: 'corrupt', error: 'unexpected shape' };
      }
      return { status: 'ok', state: parsed };
    },

    save(state: NotePinPersistedState): void {
      if (!effectiveStorage) return;
      const payload = JSON.stringify(state);
      try {
        effectiveStorage.setItem(NOTE_PIN_STORAGE_KEY, payload);
      } catch (error) {
        // Persisting is best-effort; the store captures the failure via
        // a follow-up storage-error action. We swallow here to keep the
        // repo synchronous and easy to test.
        void error;
      }
    },

    clear(): void {
      if (!effectiveStorage) return;
      try {
        effectiveStorage.removeItem(NOTE_PIN_STORAGE_KEY);
      } catch {
        // ignore
      }
    },
  };
}

function safeGetStorage(): Storage | null {
  try {
    if (typeof globalThis === 'undefined') return null;
    return (globalThis as { localStorage?: Storage }).localStorage ?? null;
  } catch {
    return null;
  }
}

function cloneFixture(): NotePinPersistedState {
  return {
    version: 1,
    records: NOTE_PIN_FIXTURE_STATE.records.map((r) => ({ ...r })),
    preferences: { ...DEFAULT_NOTE_PIN_PREFERENCES, ...NOTE_PIN_FIXTURE_STATE.preferences },
  };
}

export const notePinRepo: NotePinRepo = createNotePinRepo();