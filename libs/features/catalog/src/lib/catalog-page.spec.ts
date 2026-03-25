import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { CategoriesStore } from '@techgear/data-access/categories';
import { CartInventoryFacade } from '@techgear/data-access-cart';
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
    const addToCart = vi.fn().mockReturnValue(true);

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
            total: signal(24),
            listStatus: signal<'resolved'>('resolved'),
            listError: signal<null>(null),
            loadList: loadProducts,
            reloadList: reloadProducts,
          },
        },
        {
          provide: CartInventoryFacade,
          useValue: {
            addToCart,
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
    expect(loadProducts).toHaveBeenCalledWith({ limit: 12, offset: 0, categoryId: null });
    expect(seedMissingProducts).toHaveBeenCalledWith(products(), 5);
    expect(component.filteredProducts()).toHaveLength(2);

    component.page.set(3);
    component.onCategoryChange('audio');
    TestBed.flushEffects();

    expect(component.page()).toBe(1);
    expect(loadProducts).toHaveBeenLastCalledWith({
      limit: 12,
      offset: 0,
      categoryId: 'audio',
    });
    expect(component.filteredProducts()).toEqual(products());
    expect(component.productsWithStock()[0].stock).toBe(7);

    component.pageSize.set(1);
    component.onNextPage();
    TestBed.flushEffects();
    expect(component.page()).toBe(2);
    expect(loadProducts).toHaveBeenLastCalledWith({
      limit: 1,
      offset: 1,
      categoryId: 'audio',
    });

    component.onPrevPage();
    TestBed.flushEffects();
    expect(component.page()).toBe(1);

    component.onRetryProducts();
    expect(reloadProducts).toHaveBeenCalled();

    component.addProductToCart(1);
    expect(addToCart).toHaveBeenCalledWith({
      productId: 1,
      title: 'Wireless Headphones',
      price: 199,
      imageUrl: undefined,
    });
    expect(component.addToCartFeedback()).toBe('Wireless Headphones added to cart.');

    component.openProduct(2);
    expect(navigate).toHaveBeenCalledWith(['/products', 2]);
    expect(report).not.toHaveBeenCalled();
  });
});
