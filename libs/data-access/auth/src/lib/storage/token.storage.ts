import { Injectable, InjectionToken } from '@angular/core';

export interface TokenStorage {
  getAccess(): string | null;
  setAccess(token: string | null): void;
  getRefresh(): string | null;
  setRefresh(token: string | null): void;
  clear(): void;
}

export const TOKEN_STORAGE = new InjectionToken<TokenStorage>('TOKEN_STORAGE');

const ACCESS_KEY = 'tg_access_token';
const REFRESH_KEY = 'tg_refresh_token';

@Injectable({ providedIn: 'root' })
export class LocalStorageTokenStorage implements TokenStorage {
  getAccess(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  setAccess(token: string | null): void {
    if (token) {
      localStorage.setItem(ACCESS_KEY, token);
    } else {
      localStorage.removeItem(ACCESS_KEY);
    }
  }

  getRefresh(): string | null {
    return localStorage.getItem(REFRESH_KEY);
  }

  setRefresh(token: string | null): void {
    if (token) {
      localStorage.setItem(REFRESH_KEY, token);
    } else {
      localStorage.removeItem(REFRESH_KEY);
    }
  }

  clear(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  }
}

export const provideTokenStorage = () => ({
  provide: TOKEN_STORAGE,
  useExisting: LocalStorageTokenStorage,
});
