import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';
import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  it('delegates quantity and removal actions to the cart facade', () => {
    const setQty = vi.fn();
    const removeFromCart = vi.fn();
    const clearCart = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        { provide: CartStore, useValue: { items: () => [], totalItems: () => 0, totalPrice: () => 0 } },
        { provide: CartInventoryFacade, useValue: { setQty, removeFromCart, clearCart } },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new CartPageComponent());

    component.onUpdateQuantity(7, 3);
    component.onRemoveItem(7);
    component.onClearCart();

    expect(setQty).toHaveBeenCalledWith(7, 3);
    expect(removeFromCart).toHaveBeenCalledWith(7);
    expect(clearCart).toHaveBeenCalled();
  });
});
