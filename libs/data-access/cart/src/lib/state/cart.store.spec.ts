import {
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { type CartItem } from '../models/cart.models';
import { CartStorageService } from '../storage/cart.storage';
import { CartStore } from './cart.store';

describe('CartStore', () => {
  const productA: Omit<CartItem, 'quantity'> = {
    productId: 10,
    title: 'Gucci Bloom Eau de',
    price: 79.99,
    imageUrl: 'https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom/1.webp',
  };

  const productB: Omit<CartItem, 'quantity'> = {
    productId: 11,
    title: "Dior J'adore",
    price: 95,
    imageUrl: 'https://cdn.dummyjson.com/product-images/fragrances/dior-jadore/1.webp',
  };

  let injector: Injector;
  let store: ReturnType<typeof createStore>;
  let storageMock: {
    save: ReturnType<typeof vi.fn>;
    load: ReturnType<typeof vi.fn>;
    clear: ReturnType<typeof vi.fn>;
  };

  function createStore() {
    injector = Injector.create({
      providers: [CartStore, { provide: CartStorageService, useValue: storageMock }],
    });
    return runInInjectionContext(injector, () => injector.get(CartStore));
  }

  beforeEach(() => {
    storageMock = {
      save: vi.fn(),
      load: vi.fn(() => []),
      clear: vi.fn(),
    };

    store = createStore();
  });

  afterEach(() => {
    const maybeDestroyable = injector as Injector & { destroy?: () => void };
    maybeDestroyable.destroy?.();
  });

  it('storage vacío => estado inicial vacío', () => {
    store.loadFromStorage();

    expect(storageMock.load).toHaveBeenCalledTimes(1);
    expect(store.items()).toEqual([]);
    expect(store.totalItems()).toBe(0);
    expect(store.totalPrice()).toBe(0);
  });

  it('storage con items => loadFromStorage() hidrata', () => {
    const persistedItems: CartItem[] = [
      { ...productA, quantity: 2 },
      { ...productB, quantity: 1 },
    ];
    storageMock.load.mockReturnValue(persistedItems);

    store.loadFromStorage();

    expect(store.items()).toEqual(persistedItems);
    expect(store.totalItems()).toBe(3);
    expect(store.totalPrice()).toBe(254.98);
  });

  it('addItem => item presente + persiste', () => {
    store.addItem(productA, 2);

    expect(store.items()).toEqual([{ ...productA, quantity: 2 }]);
    expect(store.totalItems()).toBe(2);
    expect(store.totalPrice()).toBe(159.98);
    expect(storageMock.save).toHaveBeenCalledWith([{ ...productA, quantity: 2 }]);
  });

  it('updateQuantity => cantidad cambia + persiste + total recalcula', () => {
    store.addItem(productA, 1);
    store.addItem(productB, 1);

    store.updateQuantity(productA.productId, 3);

    expect(store.items()).toEqual([
      { ...productA, quantity: 3 },
      { ...productB, quantity: 1 },
    ]);
    expect(store.totalItems()).toBe(4);
    expect(store.totalPrice()).toBeCloseTo(334.97, 2);
    expect(storageMock.save).toHaveBeenLastCalledWith([
      { ...productA, quantity: 3 },
      { ...productB, quantity: 1 },
    ]);
  });

  it('removeItem => desaparece + persiste', () => {
    store.addItem(productA, 1);
    store.addItem(productB, 2);

    store.removeItem(productA.productId);

    expect(store.items()).toEqual([{ ...productB, quantity: 2 }]);
    expect(store.totalItems()).toBe(2);
    expect(store.totalPrice()).toBe(190);
    expect(storageMock.save).toHaveBeenLastCalledWith([{ ...productB, quantity: 2 }]);
  });
});
