import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { InventoryStore } from '@techgear/data-access-inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { InventoryDashboardComponent } from './inventory-dashboard.component';

describe('InventoryDashboardComponent logic', () => {
  it('shows an error when quantity exceeds current stock for an exit movement', () => {
    const inventoryStore = {
      loadFromStorage: vi.fn(),
      items: () => [
        {
          productId: 10,
          productName: 'Keyboard',
          stock: 2,
          lastUpdated: new Date(),
        },
      ],
      movements: () => [],
      getStock: vi.fn().mockReturnValue(2),
      adjustStock: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: InventoryStore, useValue: inventoryStore },
        {
          provide: ProductsStore,
          useValue: {
            items: () => [{ id: 10, title: 'Keyboard' }],
            ensureListLoaded: vi.fn(),
            listStatus: () => 'resolved',
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new InventoryDashboardComponent()
    );

    component.ngOnInit();
    component.movementForm.patchValue({
      selectedProductId: 10,
      movementType: 'out',
      quantity: 5,
      reasonPreset: 'sale',
    });

    expect(component.formError()).toBe('Insufficient stock. Current available: 2.');

    component.ngOnDestroy();
  });

  it('records a movement when the form is valid', () => {
    const adjustStock = vi.fn();
    const inventoryStore = {
      loadFromStorage: vi.fn(),
      items: () => [
        {
          productId: 10,
          productName: 'Keyboard',
          stock: 8,
          lastUpdated: new Date(),
        },
      ],
      movements: () => [],
      getStock: vi.fn().mockReturnValue(8),
      adjustStock,
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: InventoryStore, useValue: inventoryStore },
        {
          provide: ProductsStore,
          useValue: {
            items: () => [{ id: 10, title: 'Keyboard' }],
            ensureListLoaded: vi.fn(),
            listStatus: () => 'resolved',
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new InventoryDashboardComponent()
    );

    component.ngOnInit();
    component.movementForm.patchValue({
      selectedProductId: 10,
      movementType: 'out',
      quantity: 3,
      reasonPreset: 'sale',
    });
    component.onAdjustStockSubmit();

    expect(adjustStock).toHaveBeenCalledWith(10, 'Keyboard', -3, 'Sale');
    expect(component.successMessage()).toBe('Movement recorded successfully.');

    component.ngOnDestroy();
  });
});
