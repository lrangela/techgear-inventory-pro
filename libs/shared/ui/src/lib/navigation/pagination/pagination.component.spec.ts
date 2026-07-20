import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  it('is defined', () => {
    expect(PaginationComponent).toBeDefined();
  });

  it('emits previous output when triggered', () => {
    TestBed.configureTestingModule({});
    const component = TestBed.runInInjectionContext(() => new PaginationComponent());
    const spy = vi.fn();
    component.previous.subscribe(spy);
    component.previous.emit();
    expect(spy).toHaveBeenCalledOnce();
  });

  it('emits next output when triggered', () => {
    TestBed.configureTestingModule({});
    const component = TestBed.runInInjectionContext(() => new PaginationComponent());
    const spy = vi.fn();
    component.next.subscribe(spy);
    component.next.emit();
    expect(spy).toHaveBeenCalledOnce();
  });

  it('has required page input signal', () => {
    TestBed.configureTestingModule({});
    const component = TestBed.runInInjectionContext(() => new PaginationComponent());
    expect(typeof component.page).toBe('function');
  });

  it('has disablePrev and disableNext input signals with defaults', () => {
    TestBed.configureTestingModule({});
    const component = TestBed.runInInjectionContext(() => new PaginationComponent());
    expect(typeof component.disablePrev).toBe('function');
    expect(typeof component.disableNext).toBe('function');
  });
});
