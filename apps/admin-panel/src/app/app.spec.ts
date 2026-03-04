import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { App } from './app';

describe('AdminPanel App Shell', () => {
  it('loads products and seeds inventory for authenticated admins', () => {
    const authStore = {
      isAuthenticated: vi.fn(() => true),
      user: vi.fn(() => ({ name: 'Admin User', email: 'admin@test.dev' })),
      logout: vi.fn(),
    };
    const productsStore = {
      ensureListLoaded: vi.fn(),
      items: vi.fn(() => [{ id: 10, title: 'Keyboard' }]),
      listStatus: vi.fn(() => 'resolved'),
    };
    const inventoryStore = {
      seedIfEmpty: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: authStore },
        { provide: ProductsStore, useValue: productsStore },
        { provide: InventoryStore, useValue: inventoryStore },
        { provide: Router, useValue: { navigateByUrl: vi.fn() } },
      ],
    });

    const instance = TestBed.runInInjectionContext(() => new App());
    TestBed.flushEffects();

    expect(instance).toBeTruthy();
    expect(productsStore.ensureListLoaded).toHaveBeenCalledWith({
      limit: 100,
      offset: 0,
    });
    expect(inventoryStore.seedIfEmpty).toHaveBeenCalledWith(
      [{ id: 10, title: 'Keyboard' }],
      5
    );
  });

  it('logs out and redirects to login', async () => {
    const navigateByUrl = vi.fn().mockResolvedValue(true);
    const authStore = {
      isAuthenticated: vi.fn(() => false),
      user: vi.fn(() => null),
      logout: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: authStore },
        {
          provide: ProductsStore,
          useValue: {
            ensureListLoaded: vi.fn(),
            items: vi.fn(() => []),
            listStatus: vi.fn(() => 'idle'),
          },
        },
        {
          provide: InventoryStore,
          useValue: {
            seedIfEmpty: vi.fn(),
          },
        },
        { provide: Router, useValue: { navigateByUrl } },
      ],
    });

    const instance = TestBed.runInInjectionContext(() => new App());
    await instance.logout();

    expect(authStore.logout).toHaveBeenCalledTimes(1);
    expect(navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
