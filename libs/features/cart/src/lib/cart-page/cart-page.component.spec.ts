import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';
import { ConfirmDialogService } from '@techgear/ui';
import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('delegates quantity and removal actions to the cart facade', async () => {
    const setQty = vi.fn();
    const removeFromCart = vi.fn();
    const clearCart = vi.fn();
    const checkout = vi.fn().mockReturnValue(of(true));
    const open = vi.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        { provide: CartStore, useValue: { items: () => [], totalItems: () => 0, totalPrice: () => 0 } },
        { provide: CartInventoryFacade, useValue: { setQty, removeFromCart, clearCart, checkout } },
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

  it('onCheckout: sets isCheckingOut, calls facade.checkout observable, then sets checkoutSuccess', async () => {
    const checkout = vi.fn().mockReturnValue(of(true));

    TestBed.configureTestingModule({
      providers: [
        { provide: CartStore, useValue: { items: () => [], totalItems: () => 0, totalPrice: () => 0 } },
        { provide: CartInventoryFacade, useValue: { setQty: vi.fn(), removeFromCart: vi.fn(), clearCart: vi.fn(), checkout } },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new CartPageComponent());

    expect(component.isCheckingOut()).toBe(false);

    await component.onCheckout();

    expect(checkout).toHaveBeenCalledOnce();
    expect(component.isCheckingOut()).toBe(false);
    expect(component.checkoutSuccess()).toBe(true);
  });

  it('onContinueShopping: resets checkoutSuccess to false and navigates to /catalog', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CartStore, useValue: { items: () => [], totalItems: () => 0, totalPrice: () => 0 } },
        { provide: CartInventoryFacade, useValue: { setQty: vi.fn(), removeFromCart: vi.fn(), clearCart: vi.fn(), checkout: vi.fn() } },
        { provide: ConfirmDialogService, useValue: { open: vi.fn() } },
      ],
    });

    const router = TestBed.inject(Router);
    vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const component = TestBed.runInInjectionContext(() => new CartPageComponent());
    component.checkoutSuccess.set(true);

    component.onContinueShopping();

    expect(component.checkoutSuccess()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/catalog']);
  });
});
