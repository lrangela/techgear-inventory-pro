import { Injectable, InjectionToken } from '@angular/core';
import { getBrowserStorage } from '@techgear/util';

export interface ProductsStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const PRODUCTS_STORAGE = new InjectionToken<ProductsStorage>('PRODUCTS_STORAGE');

@Injectable({ providedIn: 'root' })
export class LocalStorageProductsStorage implements ProductsStorage {
  private readonly memoryStorage = new Map<string, string>();
  private readonly storageRef = getBrowserStorage('local');

  getItem(key: string): string | null {
    if (this.storageRef) {
      try {
        return this.storageRef.getItem(key) ?? this.memoryStorage.get(key) ?? null;
      } catch {
        return this.memoryStorage.get(key) ?? null;
      }
    }
    return this.memoryStorage.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.memoryStorage.set(key, value);
    if (this.storageRef) {
      try {
        this.storageRef.setItem(key, value);
      } catch {
        // Storage full or unavailable — memory fallback already set above.
      }
    }
  }

  removeItem(key: string): void {
    this.memoryStorage.delete(key);
    if (this.storageRef) {
      try {
        this.storageRef.removeItem(key);
      } catch {
        // Ignore removal errors in SSR or restricted environments.
      }
    }
  }
}

export const provideProductsStorage = () => ({
  provide: PRODUCTS_STORAGE,
  useExisting: LocalStorageProductsStorage,
});
