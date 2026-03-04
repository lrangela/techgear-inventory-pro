import { ApplicationInitStatus } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { CartStorageService, CartStore } from '@techgear/data-access-cart';
import { describe, expect, it, vi } from 'vitest';

describe('shop-web bootstrap cart hydration', () => {
  it('given storage items, cart store is hydrated at boot', async () => {
    const storedItems = [
      {
        productId: 7,
        title: 'Headphones',
        price: 120,
        quantity: 2,
      },
    ];

    await TestBed.configureTestingModule({
      providers: [
        ...appConfig.providers,
        {
          provide: AuthStore,
          useValue: { initFromStorage: vi.fn(), isAuthenticated: () => false },
        },
        { provide: InventoryStore, useValue: { loadFromStorage: vi.fn() } },
        {
          provide: CartStorageService,
          useValue: {
            load: vi.fn(() => storedItems),
            save: vi.fn(),
            clear: vi.fn(),
          },
        },
      ],
    });

    const initStatus = TestBed.inject(ApplicationInitStatus);
    await initStatus.donePromise;

    const cartStore = TestBed.inject(CartStore);
    expect(cartStore.items()).toEqual(storedItems);
  });
});
