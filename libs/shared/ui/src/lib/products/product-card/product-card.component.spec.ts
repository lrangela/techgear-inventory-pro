import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { ProductCardComponent, ProductCardItem } from './product-card.component';

function makeCardItem(overrides: Partial<ProductCardItem> = {}): ProductCardItem {
  return {
    id: 42,
    title: 'Keyboard',
    price: 99,
    description: 'Mechanical keyboard',
    images: ['https://img.example/keyboard.png'],
    category: { name: 'Accessories' },
    ...overrides,
  };
}

function createComponentWithProduct(product: ProductCardItem) {
  TestBed.configureTestingModule({});
  const component = TestBed.runInInjectionContext(() => new ProductCardComponent());
  Object.defineProperty(component, 'product', {
    get: () => () => product,
    configurable: true,
  });
  return component;
}

describe('ProductCardComponent', () => {
  it('is defined', () => {
    expect(ProductCardComponent).toBeDefined();
  });

  it('canAddToCart defaults to true', () => {
    TestBed.configureTestingModule({});
    const component = TestBed.runInInjectionContext(() => new ProductCardComponent());
    expect(component.canAddToCart()).toBe(true);
  });

  it('emits view output with product id when onView is called', () => {
    const component = createComponentWithProduct(makeCardItem({ id: 42 }));
    const spy = vi.spyOn(component.view, 'emit');

    component.onView();

    expect(spy).toHaveBeenCalledWith(42);
  });

  it('emits addToCart output with product id when onAddToCart is called', () => {
    const component = createComponentWithProduct(makeCardItem({ id: 7 }));
    const spy = vi.spyOn(component.addToCart, 'emit');

    component.onAddToCart();

    expect(spy).toHaveBeenCalledWith(7);
  });

  it('does not emit addToCart when canAddToCart is false', () => {
    const component = createComponentWithProduct(makeCardItem({ id: 1 }));
    Object.defineProperty(component, 'canAddToCart', {
      get: () => () => false,
      configurable: true,
    });
    const spy = vi.spyOn(component.addToCart, 'emit');

    component.onAddToCart();

    expect(spy).not.toHaveBeenCalled();
  });

  it('computes imageUrl from product images', () => {
    const component = createComponentWithProduct(makeCardItem({
      images: ['https://img.example/keyboard.png'],
    }));
    const url = component.imageUrl();
    expect(url).toBeTruthy();
    expect(typeof url).toBe('string');
  });

  it('falls back to placeholder when product has no images', () => {
    const component = createComponentWithProduct(makeCardItem({ images: [] }));
    const url = component.imageUrl();
    expect(url).toBeTruthy();
    expect(typeof url).toBe('string');
  });
});
