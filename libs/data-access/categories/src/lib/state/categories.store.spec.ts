import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CategoriesApiService } from '../api/categories.api';
import { CategoriesStore } from './categories.store';

describe('CategoriesStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoriesStore,
        {
          provide: CategoriesApiService,
          useValue: {
            getCategories: vi.fn(() => of([])),
          },
        },
      ],
    });
  });

  it('should expose an empty list by default', () => {
    const store = TestBed.inject(CategoriesStore);

    expect(store.items()).toEqual([]);
  });
});
