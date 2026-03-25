import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';
import { ConfirmDialogService } from '@techgear/ui';
import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  it('delegates quantity and removal actions to the cart facade', async () => {
    const setQty = vi.fn();
    const removeFromCart = vi.fn();
    const clearCart = vi.fn();
    const open = vi.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        { provide: CartStore, useValue: { items: () => [], totalItems: () => 0, totalPrice: () => 0 } },
        { provide: CartInventoryFacade, useValue: { setQty, removeFromCart, clearCart } },
        { provide: ConfirmDialogService, useValue: { open } },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new CartPageComponent());

    component.onUpdateQuantity(7, 3);
    component.onRemoveItem(7);
    await component.onClearCart();

    expect(setQty).toHaveBeenCalledWith(7, 3);
    expect(removeFromCart).toHaveBeenCalledWith(7);
    expect(open).toHaveBeenCalled();
    expect(clearCart).toHaveBeenCalled();
  });
});
