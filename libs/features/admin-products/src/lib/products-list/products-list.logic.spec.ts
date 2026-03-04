import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { ProductsStore } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';
import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent logic', () => {
  it('builds sorted category options from products', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductsStore,
          useValue: {
            ensureListLoaded: vi.fn(),
            items: () => [
              {
                id: 1,
                title: 'Keyboard',
                price: 100,
                description: 'desc',
                images: [],
                category: { id: 'accessories', name: 'Accessories', image: null },
                categoryId: 'accessories',
              },
              {
                id: 2,
                title: 'Headphones',
                price: 120,
                description: 'desc',
                images: [],
                category: { id: 'audio', name: 'Audio', image: null },
                categoryId: 'audio',
              },
            ],
            mutationError: () => null,
            mutationStatus: () => 'idle',
            hasPendingMutations: () => false,
            isDemoMode: () => true,
            demoModeMessage: () => 'demo',
            isMutationPending: () => false,
          },
        },
        {
          provide: ConfirmDialogService,
          useValue: { open: vi.fn() },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    expect(component.categories()).toEqual([
      { id: 'accessories', name: 'Accessories' },
      { id: 'audio', name: 'Audio' },
    ]);
  });

  it('requests deletion only when confirmation is accepted', async () => {
    const deleteOptimistic = vi.fn().mockResolvedValue(undefined);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductsStore,
          useValue: {
            ensureListLoaded: vi.fn(),
            items: () => [],
            mutationError: () => null,
            mutationStatus: () => 'idle',
            hasPendingMutations: () => false,
            isDemoMode: () => true,
            demoModeMessage: () => 'demo',
            isMutationPending: () => false,
            deleteOptimistic,
          },
        },
        {
          provide: ConfirmDialogService,
          useValue: { open: vi.fn().mockResolvedValue(true) },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    await component.onDelete({
      id: 7,
      title: '4K Monitor',
      price: 300,
      description: 'desc',
      images: [],
      category: null,
      categoryId: null,
    });

    expect(deleteOptimistic).toHaveBeenCalledWith(7);
  });
});
