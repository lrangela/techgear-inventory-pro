import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { CategoriesStore } from '@techgear/data-access/categories';
import { ProductsStore } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';
import { ProductsListComponent } from './products-list.component';

function makeStoreMock(overrides: Record<string, unknown> = {}) {
  return {
    ensureListLoaded: vi.fn(),
    loadList: vi.fn(),
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
    total: () => 2,
    isLoading: () => false,
    error: () => null,
    mutationError: () => null,
    mutationStatus: () => 'idle',
    hasPendingMutations: () => false,
    isDemoMode: () => true,
    demoModeMessage: () => 'demo',
    isMutationPending: () => () => false,
    deleteOptimistic: vi.fn(),
    ...overrides,
  };
}

function makeCategoriesStoreMock(overrides: Record<string, unknown> = {}) {
  return {
    items: () => [],
    ensureLoaded: vi.fn(),
    isLoading: () => false,
    error: () => null,
    ...overrides,
  };
}

describe('ProductsListComponent', () => {
  it('is defined', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock() },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );
    expect(component).toBeDefined();
  });

  it('invokes store.loadList when navigating to next page', () => {
    const loadList = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock({ loadList, total: () => 30 }) },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    loadList.mockClear();
    component.onNextPage();

    expect(loadList).toHaveBeenCalledWith({
      limit: 9,
      offset: 9,
      categoryId: null,
    });
  });

  it('invokes store.loadList with category when category changes', () => {
    const loadList = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock({ loadList, total: () => 50 }) },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    loadList.mockClear();
    component.onCategoryChange('audio');

    expect(component.page()).toBe(1);
    expect(loadList).toHaveBeenCalledWith({
      limit: 9,
      offset: 0,
      categoryId: 'audio',
    });
  });

  it('resets to page 1 when category changes', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock({ total: () => 50 }) },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    component.onNextPage();
    expect(component.page()).toBe(2);

    component.onCategoryChange('accessories');
    expect(component.page()).toBe(1);
  });

  it('invokes store.deleteOptimistic on confirmed deletion', async () => {
    const deleteOptimistic = vi.fn().mockResolvedValue(undefined);

    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock({ deleteOptimistic }) },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn().mockResolvedValue(true) } },
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

  it('does not invoke deleteOptimistic when confirmation is cancelled', async () => {
    const deleteOptimistic = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsStore, useValue: makeStoreMock({ deleteOptimistic }) },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock() },
        { provide: ConfirmDialogService, useValue: { open: vi.fn().mockResolvedValue(false) } },
      ],
    });

    const component = TestBed.runInInjectionContext(
      () => new ProductsListComponent()
    );

    await component.onDelete({
      id: 5,
      title: 'Mouse',
      price: 50,
      description: 'desc',
      images: [],
      category: null,
      categoryId: null,
    });

    expect(deleteOptimistic).not.toHaveBeenCalled();
  });

  it('calls ensureListLoaded and categoriesStore.ensureLoaded on construction', () => {
    const ensureListLoaded = vi.fn();
    const categoriesEnsureLoaded = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProductsStore,
          useValue: makeStoreMock({ ensureListLoaded }),
        },
        { provide: CategoriesStore, useValue: makeCategoriesStoreMock({ ensureLoaded: categoriesEnsureLoaded }) },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    TestBed.runInInjectionContext(() => new ProductsListComponent());

    expect(ensureListLoaded).toHaveBeenCalledWith({
      limit: 9,
      offset: 0,
      categoryId: null,
    });
    expect(categoriesEnsureLoaded).toHaveBeenCalled();
  });
});
