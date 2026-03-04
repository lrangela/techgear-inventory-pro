import { Injectable, inject } from '@angular/core';
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

  getStock(productId: number): number {
    return this.inventoryStore.getStock(productId);
  }

  addToCart(product: Omit<CartItem, 'quantity'>): boolean {
    return this.addToCartQty(product, 1).success;
  }

  addToCartQty(product: Omit<CartItem, 'quantity'>, requestedQty: number): AddToCartResult {
    const safeRequestedQty = Math.max(1, Math.floor(requestedQty));
    const available = this.inventoryStore.getStock(product.productId);
    const appliedQty = Math.min(safeRequestedQty, Math.max(available, 0));

    if (appliedQty <= 0) {
      return { success: false, requestedQty: safeRequestedQty, appliedQty: 0, limitedByStock: true };
    }

    this.cartStore.addItem(product, appliedQty);
    this.inventoryStore.adjustStock(product.productId, product.title, -appliedQty, 'Added to cart');

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
    this.inventoryStore.adjustStock(productId, item.title, item.quantity, 'Removed from cart');
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
      const available = Math.max(this.inventoryStore.getStock(productId), 0);
      const appliedDelta = Math.min(delta, available);
      const appliedQty = prevQty + appliedDelta;

      if (appliedDelta === 0) {
        return { success: false, requestedQty: nextQty, appliedQty: prevQty, limitedByStock: true };
      }

      this.cartStore.updateQuantity(productId, appliedQty);
      this.inventoryStore.adjustStock(productId, item.title, -appliedDelta, 'Qty increased');

      return {
        success: appliedQty === nextQty,
        requestedQty: nextQty,
        appliedQty,
        limitedByStock: appliedQty !== nextQty,
      };
    }

    if (nextQty < prevQty) {
      const delta = prevQty - nextQty;
      this.cartStore.updateQuantity(productId, nextQty);
      this.inventoryStore.adjustStock(productId, item.title, delta, 'Qty decreased');
    }

    return { success: true, requestedQty: nextQty, appliedQty: nextQty, limitedByStock: false };
  }

  clearCart(): boolean {
    const items = this.cartStore.items();
    if (items.length === 0) {
      return false;
    }

    for (const item of items) {
      this.inventoryStore.adjustStock(item.productId, item.title, item.quantity, 'Cart cleared');
    }

    this.cartStore.clear();
    return true;
  }
}
