import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { CategoryFilterComponent } from './category-filter.component';

describe('CategoryFilterComponent', () => {
  it('emits null when all categories is selected', () => {
    const component = TestBed.runInInjectionContext(() => new CategoryFilterComponent());
    const emitSpy = vi.spyOn(component.selectedCategoryIdChange, 'emit');

    component.onCategoryChange('');

    expect(emitSpy).toHaveBeenCalledWith(null);
  });

  it('emits the selected category id', () => {
    const component = TestBed.runInInjectionContext(() => new CategoryFilterComponent());
    const emitSpy = vi.spyOn(component.selectedCategoryIdChange, 'emit');

    component.onCategoryChange('audio');

    expect(emitSpy).toHaveBeenCalledWith('audio');
  });
});
