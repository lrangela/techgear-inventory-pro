import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { InventoryStore } from './inventory.store';

describe('InventoryStore', () => {
  let store: InstanceType<typeof InventoryStore>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryStore, provideHttpClient(), provideHttpClientTesting()],
    });
    store = TestBed.inject(InventoryStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('adjustStock should create an item and persist via HTTP', () => {
    store.adjustStock(7, 'Headphones', 3, 'Seed');

    expect(store.getStock(7)).toBe(3);
    expect(store.items()).toHaveLength(1);
    expect(store.movements()).toHaveLength(1);

    const req = httpMock.expectOne('/api/inventory/adjust');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.items).toHaveLength(1);
    expect(req.request.body.movements).toHaveLength(1);
    req.flush({ items: req.request.body.items, movements: req.request.body.movements });
  });

  it('syncWithCatalog should keep only catalog products and preserve existing stock', () => {
    store.adjustStock(7, 'Headphones', 3, 'Seed');
    httpMock.expectOne('/api/inventory/adjust').flush({});

    store.adjustStock(8, 'Legacy Product', 2, 'Legacy');
    httpMock.expectOne('/api/inventory/adjust').flush({});

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

    httpMock.expectOne('/api/inventory/adjust').flush({});
  });

  it('adjustStock should keep only the most recent 500 movements', () => {
    for (let index = 1; index <= 550; index += 1) {
      store.adjustStock(7, 'Headphones', 1, `Movement ${index}`);
      httpMock.expectOne('/api/inventory/adjust').flush({});
    }

    expect(store.movements()).toHaveLength(500);
    expect(store.movements()[0]?.reason).toBe('Movement 51');
    expect(store.movements()[499]?.reason).toBe('Movement 550');
  });

  it('loadFromStorage should fetch inventory from HTTP and patch state', async () => {
    const mockData = {
      items: [
        { productId: 1, productName: 'Test Product', stock: 10, lastUpdated: new Date().toISOString() },
      ],
      movements: [
        { id: 'abc', productId: 1, productName: 'Test Product', delta: 10, timestamp: new Date().toISOString(), reason: 'Seed' },
      ],
    };

    const promise = store.loadFromStorage();

    const req = httpMock.expectOne('/api/inventory');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    await promise;

    expect(store.items()).toHaveLength(1);
    expect(store.getStock(1)).toBe(10);
    expect(store.movements()).toHaveLength(1);
  });
});
