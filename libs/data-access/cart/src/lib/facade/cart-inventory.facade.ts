import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay, switchMap, tap, map, catchError } from 'rxjs';
import { InventoryStore } from '@techgear/data-access-inventory';
import type { CartItem } from '../models/cart.models';
import { CartStore } from '../state/cart.store';

export interface SetQtyResult {
  success: boolean;
  requestedQty: number;
  appliedQty: number;
  limitedByStock: boolean;
}

export interface AddToCartResult {
  success: boolean;
  requestedQty: number;
  appliedQty: number;
  limitedByStock: boolean;
}

@Injectable({ providedIn: 'root' })
export class CartInventoryFacade {
  private readonly cartStore = inject(CartStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly http = inject(HttpClient);

  getStock(productId: number): number {
    return this.inventoryStore.getStock(productId);
  }

  addToCart(product: Omit<CartItem, 'quantity'>): boolean {
    return this.addToCartQty(product, 1).success;
  }

  addToCartQty(product: Omit<CartItem, 'quantity'>, requestedQty: number): AddToCartResult {
    const safeRequestedQty = Math.max(1, Math.floor(requestedQty));

    // Validate against physical inventory minus what's already in cart for this product
    const inventoryStock = this.inventoryStore.getStock(product.productId);
    const currentQtyInCart = this.cartStore.items().find((i) => i.productId === product.productId)?.quantity ?? 0;
    const available = Math.max(0, inventoryStock - currentQtyInCart);
    const appliedQty = Math.min(safeRequestedQty, available);

    if (appliedQty <= 0) {
      return { success: false, requestedQty: safeRequestedQty, appliedQty: 0, limitedByStock: true };
    }

    this.cartStore.addItem(product, appliedQty);

    return {
      success: appliedQty === safeRequestedQty,
      requestedQty: safeRequestedQty,
      appliedQty,
      limitedByStock: appliedQty !== safeRequestedQty,
    };
  }

  removeFromCart(productId: number): boolean {
    const item = this.cartStore.items().find((i) => i.productId === productId);
    if (!item) {
      return false;
    }

    this.cartStore.removeItem(productId);
    return true;
  }

  setQty(productId: number, nextQty: number): SetQtyResult {
    const item = this.cartStore.items().find((i) => i.productId === productId);
    if (!item) {
      return { success: false, requestedQty: nextQty, appliedQty: 0, limitedByStock: false };
    }

    const prevQty = item.quantity;

    if (nextQty <= 0) {
      this.removeFromCart(productId);
      return { success: true, requestedQty: nextQty, appliedQty: 0, limitedByStock: false };
    }

    if (nextQty > prevQty) {
      const delta = nextQty - prevQty;
      const inventoryStock = Math.max(this.inventoryStore.getStock(productId), 0);
      const availableForIncrease = Math.max(0, inventoryStock - prevQty);
      const appliedDelta = Math.min(delta, availableForIncrease);
      const appliedQty = prevQty + appliedDelta;

      if (appliedDelta === 0) {
        return { success: false, requestedQty: nextQty, appliedQty: prevQty, limitedByStock: true };
      }

      this.cartStore.updateQuantity(productId, appliedQty);

      return {
        success: appliedQty === nextQty,
        requestedQty: nextQty,
        appliedQty,
        limitedByStock: appliedQty !== nextQty,
      };
    }

    if (nextQty < prevQty) {
      this.cartStore.updateQuantity(productId, nextQty);
    }

    return { success: true, requestedQty: nextQty, appliedQty: nextQty, limitedByStock: false };
  }

  clearCart(): boolean {
    const items = this.cartStore.items();
    if (items.length === 0) {
      return false;
    }

    this.cartStore.clear();
    return true;
  }

  checkout(): Observable<boolean> {
    const items = this.cartStore.items();
    if (items.length === 0) {
      return of(false);
    }

    return of(true).pipe(
      delay(1500),
      switchMap(() =>
        this.http.post<{ success: boolean }>('/api/checkout', items),
      ),
      tap(() => this.cartStore.clear()),
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
