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

import { InventoryStorageService } from './inventory.storage';

describe('InventoryStorageService', () => {
  beforeEach(() => {
    memoryMap.clear();
  });

  it('returns an empty inventory and clears corrupted storage payloads', () => {
    memoryMap.set('techgear_inventory', '{broken-json');

    const service = new InventoryStorageService();

    expect(service.load()).toEqual({ items: [], movements: [] });
    expect(memoryMap.get('techgear_inventory')).toBeUndefined();
  });

  it('saves and retrieves valid inventory data', () => {
    const service = new InventoryStorageService();
    const data = {
      items: [
        { productId: 1, productName: 'Keyboard', stock: 5, lastUpdated: new Date('2025-01-01') },
      ],
      movements: [
        { id: 'mov-1', productId: 1, productName: 'Keyboard', delta: 5, timestamp: new Date('2025-01-01'), reason: 'Seed' },
      ],
    };

    service.save(data);
    const loaded = service.load();

    expect(loaded.items).toHaveLength(1);
    expect(loaded.items[0].productId).toBe(1);
    expect(loaded.items[0].productName).toBe('Keyboard');
    expect(loaded.items[0].stock).toBe(5);
    expect(loaded.items[0].lastUpdated).toBeInstanceOf(Date);
    expect(loaded.movements).toHaveLength(1);
    expect(loaded.movements[0].id).toBe('mov-1');
    expect(loaded.movements[0].timestamp).toBeInstanceOf(Date);
  });

  it('returns empty structure when storage is empty', () => {
    const service = new InventoryStorageService();

    expect(service.load()).toEqual({ items: [], movements: [] });
  });

  it('handles missing items or movements arrays gracefully', () => {
    memoryMap.set('techgear_inventory', JSON.stringify({ items: null, movements: null }));

    const service = new InventoryStorageService();

    expect(service.load()).toEqual({ items: [], movements: [] });
  });
});
