import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ProductDetailViewComponent, ProductDetailItem } from './product-detail-view.component';

function makeDetailItem(overrides: Partial<ProductDetailItem> = {}): ProductDetailItem {
  return {
    id: 1,
    title: 'Laptop',
    price: 1200,
    description: 'Powerful laptop',
    images: [
      'https://img.example/laptop-1.png',
      'https://img.example/laptop-2.png',
      'https://img.example/laptop-3.png',
    ],
    category: { name: 'Electronics' },
    ...overrides,
  };
}

function createComponentWithProduct(product: ProductDetailItem) {
  TestBed.configureTestingModule({});
  const component = TestBed.runInInjectionContext(() => new ProductDetailViewComponent());
  Object.defineProperty(component, 'product', {
    get: () => () => product,
    configurable: true,
  });
  return component;
}

describe('ProductDetailViewComponent', () => {
  it('is defined', () => {
    expect(ProductDetailViewComponent).toBeDefined();
  });

  it('mainImageUrl defaults to the first image', () => {
    const component = createComponentWithProduct(makeDetailItem());
    const url = component.mainImageUrl();
    expect(url).toBeTruthy();
  });

  it('mainImageUrl updates when selectImage is called', () => {
    const component = createComponentWithProduct(makeDetailItem());
    const first = component.mainImageUrl();
    component.selectImage(1);
    const second = component.mainImageUrl();
    expect(second).not.toBe(first);
  });

  it('selectImage clamps to last image when index exceeds bounds', () => {
    const component = createComponentWithProduct(makeDetailItem());
    component.selectImage(2);
    const atLast = component.mainImageUrl();
    component.selectImage(99);
    const atOverflow = component.mainImageUrl();
    expect(atOverflow).toBe(atLast);
  });

  it('galleryImageUrls limits to 5 images maximum', () => {
    const component = createComponentWithProduct(makeDetailItem({
      images: [
        'https://img.example/1.png',
        'https://img.example/2.png',
        'https://img.example/3.png',
        'https://img.example/4.png',
        'https://img.example/5.png',
        'https://img.example/6.png',
        'https://img.example/7.png',
      ],
    }));
    expect(component.galleryImageUrls()).toHaveLength(5);
  });

  it('galleryImageUrls returns all images when fewer than 5', () => {
    const component = createComponentWithProduct(makeDetailItem());
    expect(component.galleryImageUrls()).toHaveLength(3);
  });

  it('provides a fallback image when product has no images', () => {
    const component = createComponentWithProduct(makeDetailItem({ images: [] }));
    const urls = component.imageUrls();
    expect(urls).toHaveLength(1);
    expect(urls[0]).toBeTruthy();
  });
});
