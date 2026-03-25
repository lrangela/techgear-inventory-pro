import { Injectable, InjectionToken } from '@angular/core';
import { getBrowserStorage } from '@techgear/util';

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
export class SessionStorageTokenStorage implements TokenStorage {
  private readonly sessionStorageRef = getBrowserStorage('session');
  private readonly memoryStorage = new Map<string, string>();

  getAccess(): string | null {
    return this.getItem(ACCESS_KEY);
  }

  setAccess(token: string | null): void {
    this.setItem(ACCESS_KEY, token);
  }

  getRefresh(): string | null {
    return this.getItem(REFRESH_KEY);
  }

  setRefresh(token: string | null): void {
    this.setItem(REFRESH_KEY, token);
  }

  clear(): void {
    this.removeItem(ACCESS_KEY);
    this.removeItem(REFRESH_KEY);
  }

  private getItem(key: string): string | null {
    return this.sessionStorageRef?.getItem(key) ?? this.memoryStorage.get(key) ?? null;
  }

  private setItem(key: string, value: string | null): void {
    if (value) {
      this.sessionStorageRef?.setItem(key, value);
      this.memoryStorage.set(key, value);
      return;
    }

    this.removeItem(key);
  }

  private removeItem(key: string): void {
    this.sessionStorageRef?.removeItem(key);
    this.memoryStorage.delete(key);
  }
}

export const provideTokenStorage = () => ({
  provide: TOKEN_STORAGE,
  useExisting: SessionStorageTokenStorage,
});
