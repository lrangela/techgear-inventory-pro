import { Injector, runInInjectionContext } from '@angular/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { InventoryStorageService } from '../storage/inventory.storage';
import { InventoryStore } from './inventory.store';

describe('InventoryStore', () => {
  let injector: Injector;
  let storageMock: {
    load: ReturnType<typeof vi.fn>;
    save: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    storageMock = {
      load: vi.fn(() => ({ items: [], movements: [] })),
      save: vi.fn(),
    };

    injector = Injector.create({
      providers: [
        InventoryStore,
        { provide: InventoryStorageService, useValue: storageMock },
      ],
    });
  });

  it('adjustStock should create an item and persist the movement', () => {
    const store = runInInjectionContext(injector, () => injector.get(InventoryStore));

    store.adjustStock(7, 'Headphones', 3, 'Seed');

    expect(store.getStock(7)).toBe(3);
    expect(store.items()).toHaveLength(1);
    expect(store.movements()).toHaveLength(1);
    expect(storageMock.save).toHaveBeenCalledTimes(1);
  });

  it('seedIfEmpty should populate inventory only when there are no items', () => {
    const store = runInInjectionContext(injector, () => injector.get(InventoryStore));

    store.seedIfEmpty([{ id: 10, title: 'Keyboard' }], 5);
    store.seedIfEmpty([{ id: 11, title: 'Mouse' }], 5);

    expect(store.items()).toEqual([
      expect.objectContaining({
        productId: 10,
        productName: 'Keyboard',
        stock: 5,
      }),
    ]);
    expect(storageMock.save).toHaveBeenCalledTimes(1);
  });

  it('syncWithCatalog should keep only catalog products and preserve existing stock', () => {
    const store = runInInjectionContext(injector, () => injector.get(InventoryStore));

    store.adjustStock(7, 'Headphones', 3, 'Seed');
    store.adjustStock(8, 'Legacy Product', 2, 'Legacy');

    store.syncWithCatalog(
      [
        { id: 7, title: 'Headphones Pro' },
        { id: 9, title: 'Mechanical Keyboard' },
      ],
      5
    );

    expect(store.items()).toEqual([
      expect.objectContaining({
        productId: 7,
        productName: 'Headphones Pro',
        stock: 3,
      }),
      expect.objectContaining({
        productId: 9,
        productName: 'Mechanical Keyboard',
        stock: 5,
      }),
    ]);
  });

  it('adjustStock should keep only the most recent 500 movements', () => {
    const store = runInInjectionContext(injector, () => injector.get(InventoryStore));

    for (let index = 1; index <= 550; index += 1) {
      store.adjustStock(7, 'Headphones', 1, `Movement ${index}`);
    }

    expect(store.movements()).toHaveLength(500);
    expect(store.movements()[0]?.reason).toBe('Movement 51');
    expect(store.movements()[499]?.reason).toBe('Movement 550');
  });
});
