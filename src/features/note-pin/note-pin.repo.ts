// Note Pin persistence adapter — US-001
// Owns: localStorage read/write of records with corruption recovery.

import type { NoteItem } from './note-pin.types';
import { STORAGE_KEY } from './note-pin.types';

export interface RepoLoadResult {
  records: NoteItem[];
  error: string | null;
  recoveryAvailable: boolean;
}

export interface NotePinRepo {
  load: () => RepoLoadResult;
  save: (records: NoteItem[]) => void;
  clear: () => void;
  key: string;
}

function hasStorage(): boolean {
  try {
    return typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined';
  } catch {
    return false;
  }
}

export function createNotePinRepo(): NotePinRepo {
  const key = STORAGE_KEY;

  function load(): RepoLoadResult {
    if (!hasStorage()) {
      return {
        records: [],
        error: 'localStorage unavailable',
        recoveryAvailable: false,
      };
    }
    const raw = globalThis.localStorage.getItem(key);
    if (raw === null) {
      return { records: [], error: null, recoveryAvailable: false };
    }
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        throw new Error('persisted payload is not an array');
      }
      const records: NoteItem[] = parsed.filter((entry): entry is NoteItem => {
        return (
          entry &&
          typeof entry === 'object' &&
          typeof entry.id === 'string' &&
          typeof entry.title === 'string' &&
          typeof entry.body === 'string' &&
          typeof entry.createdAt === 'string' &&
          typeof entry.updatedAt === 'string'
        );
      });
      if (records.length !== parsed.length) {
        return {
          records,
          error: 'Some persisted records were invalid and skipped',
          recoveryAvailable: true,
        };
      }
      return { records, error: null, recoveryAvailable: false };
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      return {
        records: [],
        error: `Persisted notes corrupted (${reason}); starting fresh`,
        recoveryAvailable: true,
      };
    }
  }

  function save(records: NoteItem[]): void {
    if (!hasStorage()) {
      throw new Error('localStorage unavailable');
    }
    globalThis.localStorage.setItem(key, JSON.stringify(records));
  }

  function clear(): void {
    if (!hasStorage()) {
      return;
    }
    globalThis.localStorage.removeItem(key);
  }

  return { load, save, clear, key };
}

export const notePinRepo: NotePinRepo = createNotePinRepo();
