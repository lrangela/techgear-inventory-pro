import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CategoriesApiService } from '../api/categories.api';
import { CategoriesStore } from './categories.store';

function makeCategories() {
  return [
    { id: 'beauty', slug: 'beauty', name: 'Beauty' },
    { id: 'electronics', slug: 'electronics', name: 'Electronics' },
  ];
}

describe('CategoriesStore', () => {
  let apiMock: { getCategories: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    apiMock = {
      getCategories: vi.fn(() => of([])),
    };

    TestBed.configureTestingModule({
      providers: [
        CategoriesStore,
        { provide: CategoriesApiService, useValue: apiMock },
      ],
    });
  });

  it('should expose an empty list by default', () => {
    const store = TestBed.inject(CategoriesStore);

    expect(store.items()).toEqual([]);
  });

  it('should load categories from API into state on ensureLoaded', async () => {
    const categories = makeCategories();
    apiMock.getCategories.mockReturnValue(of(categories));

    const store = TestBed.inject(CategoriesStore);
    store.ensureLoaded();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(store.items()).toEqual(categories);
    expect(apiMock.getCategories).toHaveBeenCalled();
  });

  it('should handle API errors gracefully', async () => {
    apiMock.getCategories.mockReturnValue(
      throwError(() => new Error('Network error'))
    );

    const store = TestBed.inject(CategoriesStore);
    store.ensureLoaded();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(store.status()).toBe('error');
    expect(store.error()).toBeTruthy();
  });
});
