import { beforeEach, describe, expect, it, vi } from 'vitest';

const memoryMap = new Map<string, string>();

vi.mock('@techgear/util', async (importOriginal) => {
  const mod = await importOriginal<Record<string, unknown>>();
  return {
    ...mod,
    getBrowserStorage: () => ({
      getItem: (key: string) => memoryMap.get(key) ?? null,
      setItem: (key: string, value: string) => { memoryMap.set(key, value); },
      removeItem: (key: string) => { memoryMap.delete(key); },
      clear: () => { memoryMap.clear(); },
      get length() { return memoryMap.size; },
      key: (index: number) => Array.from(memoryMap.keys())[index] ?? null,
    }),
  };
});

import { CartStorageService } from './cart.storage';

describe('CartStorageService', () => {
  beforeEach(() => {
    memoryMap.clear();
  });

  it('returns an empty cart and clears corrupted storage payloads', () => {
    memoryMap.set('techgear_cart', '{broken-json');

    const service = new CartStorageService();

    expect(service.load()).toEqual([]);
    expect(memoryMap.get('techgear_cart')).toBeUndefined();
  });

  it('saves and retrieves valid cart items', () => {
    const service = new CartStorageService();
    const items = [
      { productId: 1, title: 'Keyboard', price: 99, quantity: 2 },
      { productId: 2, title: 'Mouse', price: 49, quantity: 1 },
    ];

    service.save(items);

    expect(service.load()).toEqual(items);
  });

  it('returns empty array when storage is empty', () => {
    const service = new CartStorageService();

    expect(service.load()).toEqual([]);
  });

  it('clear removes cart data from storage', () => {
    const service = new CartStorageService();
    service.save([{ productId: 1, title: 'Keyboard', price: 99, quantity: 1 }]);

    service.clear();

    expect(memoryMap.has('techgear_cart')).toBe(false);
  });
});
