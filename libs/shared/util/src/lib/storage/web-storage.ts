export type BrowserStorageKind = 'local' | 'session';

export function getBrowserStorage(kind: BrowserStorageKind): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return kind === 'local' ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function readJsonFromStorage<T>(
  storage: Storage | null,
  key: string,
  fallback: T,
  validator?: (data: unknown) => boolean
): T {
  if (!storage) {
    return fallback;
  }

  const raw = storage.getItem(key);
  if (!raw) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw) as T;
    if (validator && !validator(parsed)) {
      storage.removeItem(key);
      return fallback;
    }
    return parsed;
  } catch {
    storage.removeItem(key);
    return fallback;
  }
}

export function writeJsonToStorage(
  storage: Storage | null,
  key: string,
  value: unknown
): void {
  if (!storage) {
    return;
  }

  storage.setItem(key, JSON.stringify(value));
}
