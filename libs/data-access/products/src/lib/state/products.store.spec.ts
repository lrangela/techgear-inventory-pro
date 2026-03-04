import { TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductsApiService } from '../api/products.api';
import { Product, ProductCreateRequest, ProductUpdateRequest } from '../models/products.models';
import { ProductsStore } from './products.store';

const LOCAL_STATE_KEY = 'techgear_products_local_state_v1';

function makeProduct(id: number, title = `Product ${id}`): Product {
  return {
    id,
    title,
    price: id * 10,
    description: `Description ${id}`,
    images: [`https://img.example/${id}.png`],
    category: { id: 'beauty', name: 'Beauty', image: null },
    categoryId: 'beauty',
  };
}

describe('ProductsStore optimistic mutations', () => {
  let store: ProductsStore;
  let apiMock: {
    getProducts: ReturnType<typeof vi.fn>;
    getProductById: ReturnType<typeof vi.fn>;
    createProduct: ReturnType<typeof vi.fn>;
    updateProduct: ReturnType<typeof vi.fn>;
    deleteProduct: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    localStorage.removeItem(LOCAL_STATE_KEY);

    apiMock = {
      getProducts: vi.fn(() => of([])),
      getProductById: vi.fn(() => of(null)),
      createProduct: vi.fn(),
      updateProduct: vi.fn(),
      deleteProduct: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProductsStore,
        { provide: ProductsApiService, useValue: apiMock },
      ],
    });
  });

  function initStoreWith(items: Product[]): ProductsStore {
    localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(items));
    return TestBed.inject(ProductsStore);
  }

  it('create optimistic success: inserts immediately and keeps committed product (updated id)', async () => {
    store = initStoreWith([makeProduct(1)]);
    const payload: ProductCreateRequest = {
      title: 'New Product',
      price: 99,
      description: 'New product description',
      category: 'beauty',
      images: ['https://img.example/new.png'],
    };

    const create$ = new Subject<Product>();
    apiMock.createProduct.mockReturnValue(create$.asObservable());

    const promise = store.createOptimistic(payload);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items()[0].title).toBe('New Product');
    expect(store.items()[0].id).toBeLessThan(0);

    create$.next({ ...makeProduct(100), title: payload.title });
    create$.complete();

    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().some((p) => p.id === 100 && p.title === 'New Product')).toBe(true);
  });

  it('create optimistic failure: inserts immediately then rollbacks and sets mutationError', async () => {
    const base = [makeProduct(1)];
    store = initStoreWith(base);

    const create$ = new Subject<Product>();
    apiMock.createProduct.mockReturnValue(create$.asObservable());

    const promise = store.createOptimistic({
      title: 'Failing Product',
      price: 50,
      description: 'Will fail',
      category: 'beauty',
      images: ['https://img.example/fail.png'],
    });

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().length).toBe(2);
    expect(store.items()[0].title).toBe('Failing Product');

    create$.error(new Error('create failed'));

    await expect(promise).rejects.toThrow('create failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('create failed');
    expect(store.items()).toEqual(base);
  });

  it('update optimistic success: updates immediately and keeps committed value', async () => {
    store = initStoreWith([makeProduct(1), makeProduct(2)]);
    const patch: ProductUpdateRequest = { title: 'Updated Product', price: 123 };

    const update$ = new Subject<Product>();
    apiMock.updateProduct.mockReturnValue(update$.asObservable());

    const promise = store.updateOptimistic(1, patch);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Updated Product');
    expect(store.items().find((p) => p.id === 1)?.price).toBe(123);

    update$.next({ ...makeProduct(1), title: 'Updated Product', price: 123 });
    update$.complete();

    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Updated Product');
  });

  it('update optimistic failure: updates immediately then rollbacks to previous value', async () => {
    const original = [makeProduct(1), makeProduct(2)];
    store = initStoreWith(original);

    const update$ = new Subject<Product>();
    apiMock.updateProduct.mockReturnValue(update$.asObservable());

    const promise = store.updateOptimistic(1, { title: 'Transient title' });

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Transient title');

    update$.error(new Error('update failed'));

    await expect(promise).rejects.toThrow('update failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('update failed');
    expect(store.items()).toEqual(original);
  });

  it('delete optimistic success: removes immediately and keeps removed on confirm', async () => {
    store = initStoreWith([makeProduct(1), makeProduct(2)]);
    const del$ = new Subject<boolean>();
    apiMock.deleteProduct.mockReturnValue(del$.asObservable());

    const promise = store.deleteOptimistic(1);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().some((p) => p.id === 1)).toBe(false);

    del$.next(true);
    del$.complete();
    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().some((p) => p.id === 1)).toBe(false);
  });

  it('delete optimistic failure: removes immediately then rollbacks reinserting product', async () => {
    const original = [makeProduct(1), makeProduct(2)];
    store = initStoreWith(original);

    const del$ = new Subject<boolean>();
    apiMock.deleteProduct.mockReturnValue(del$.asObservable());

    const promise = store.deleteOptimistic(1);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().some((p) => p.id === 1)).toBe(false);

    del$.error(new Error('delete failed'));

    await expect(promise).rejects.toThrow('delete failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('delete failed');
    expect(store.items()).toEqual(original);
  });
});
