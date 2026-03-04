import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { CategoriesStore } from '@techgear/data-access/categories';
import { InventoryStore } from '@techgear/data-access/inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { AppErrorState } from '@techgear/util';
import { CatalogPageComponent } from './catalog-page';

describe('CatalogPageComponent', () => {
  it('loads initial data, filters products, and navigates to the detail page', async () => {
    const navigate = vi.fn().mockResolvedValue(true);
    const loadCategories = vi.fn();
    const loadProducts = vi.fn();
    const reloadProducts = vi.fn();
    const report = vi.fn();
    const seedMissingProducts = vi.fn();
    const getStock = vi.fn().mockReturnValue(7);

    const products = signal([
      {
        id: 1,
        title: 'Wireless Headphones',
        price: 199,
        description: 'Noise-cancelling over-ear headphones.',
        images: [],
        category: { id: 'audio', name: 'Audio', image: null },
        categoryId: 'audio',
      },
      {
        id: 2,
        title: 'Mechanical Keyboard',
        price: 129,
        description: 'Compact keyboard with tactile switches.',
        images: [],
        category: { id: 'accessories', name: 'Accessories', image: null },
        categoryId: 'accessories',
      },
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate } },
        {
          provide: CategoriesStore,
          useValue: {
            items: signal([{ id: 'audio', slug: 'audio', name: 'Audio' }]),
            status: signal<'resolved'>('resolved'),
            error: signal<null>(null),
            loadList: loadCategories,
          },
        },
        {
          provide: ProductsStore,
          useValue: {
            items: products,
            listStatus: signal<'resolved'>('resolved'),
            listError: signal<null>(null),
            loadList: loadProducts,
            reloadList: reloadProducts,
          },
        },
        {
          provide: InventoryStore,
          useValue: {
            seedMissingProducts,
            getStock,
          },
        },
        { provide: AppErrorState, useValue: { report } },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new CatalogPageComponent());
    TestBed.flushEffects();

    expect(loadCategories).toHaveBeenCalled();
    expect(loadProducts).toHaveBeenCalledWith({ limit: 12, offset: 0 });
    expect(seedMissingProducts).toHaveBeenCalledWith(products(), 5);
    expect(component.filteredProducts()).toHaveLength(2);

    component.page.set(3);
    component.onCategoryChange('audio');

    expect(component.page()).toBe(1);
    expect(component.filteredProducts()).toEqual([products()[0]]);
    expect(component.productsWithStock()[0].stock).toBe(7);

    component.pageSize.set(1);
    component.onNextPage();
    TestBed.flushEffects();
    expect(component.page()).toBe(2);

    component.onPrevPage();
    TestBed.flushEffects();
    expect(component.page()).toBe(1);

    component.onRetryProducts();
    expect(reloadProducts).toHaveBeenCalled();

    component.openProduct(2);
    expect(navigate).toHaveBeenCalledWith(['/products', 2]);
    expect(report).not.toHaveBeenCalled();
  });
});
