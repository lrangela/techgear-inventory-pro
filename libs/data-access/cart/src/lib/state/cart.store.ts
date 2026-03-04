import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CartStorageService } from '../storage/cart.storage';
import type { Cart, CartItem } from '../models/cart.models';

const initialState: Cart = {
    items: [],
};

export const CartStore = signalStore(
    { providedIn: 'root' },
    withState<Cart>(initialState),
    withComputed(({ items }) => ({
        totalItems: computed(() => items().reduce((sum: number, item: CartItem) => sum + item.quantity, 0)),
        totalPrice: computed(() => items().reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)),
    })),
    withMethods((store, storage = inject(CartStorageService)) => ({
        addItem(product: Omit<CartItem, 'quantity'>, quantity = 1) {
            const safeQty = Math.max(1, Math.floor(quantity));
            const existing = store.items().find((i: CartItem) => i.productId === product.productId);
            const newItems = existing
                ? store.items().map((i: CartItem) => i.productId === product.productId ? { ...i, quantity: i.quantity + safeQty } : i)
                : [...store.items(), { ...product, quantity: safeQty }];

            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        removeItem(productId: number) {
            const newItems = store.items().filter((i: CartItem) => i.productId !== productId);
            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        updateQuantity(productId: number, quantity: number) {
            if (quantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const newItems = store.items().map((i: CartItem) => i.productId === productId ? { ...i, quantity } : i);
            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        clear() {
            patchState(store, initialState);
            storage.clear();
        },
        loadFromStorage() {
            // Hydrate only once while state is empty to avoid overwriting runtime changes.
            if (store.items().length > 0) {
                return;
            }
            const items = storage.load();
            patchState(store, { items });
        },
    }))
);
