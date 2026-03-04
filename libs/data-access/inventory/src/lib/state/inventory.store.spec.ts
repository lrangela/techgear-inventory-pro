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
});
