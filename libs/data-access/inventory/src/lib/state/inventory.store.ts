import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { createId } from '@techgear/util';
import { InventoryStorageService } from '../storage/inventory.storage';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

interface InventoryState {
    items: InventoryItem[];
    movements: StockMovement[];
}

const initialState: InventoryState = {
    items: [],
    movements: [],
};

export const InventoryStore = signalStore(
    { providedIn: 'root' },
    withState<InventoryState>(initialState),
    withMethods((store, storage = inject(InventoryStorageService)) => ({
        adjustStock(productId: number, productName: string, delta: number, reason?: string) {
            const existing = store.items().find((i: InventoryItem) => i.productId === productId);
            const newStock = (existing?.stock ?? 0) + delta;

            const newItems = existing
                ? store.items().map((i: InventoryItem) => i.productId === productId ? { ...i, stock: newStock, lastUpdated: new Date() } : i)
                : [...store.items(), { productId, productName, stock: newStock, lastUpdated: new Date() }];

            const movement: StockMovement = {
                id: createId(),
                productId,
                productName,
                delta,
                timestamp: new Date(),
                reason,
            };

            const newMovements = [...store.movements(), movement];

            patchState(store, { items: newItems, movements: newMovements });
            storage.save({ items: newItems, movements: newMovements });
        },
        getStock(productId: number): number {
            return store.items().find((i: InventoryItem) => i.productId === productId)?.stock ?? 0;
        },
        seedMissingProducts(products: { id: number; title: string }[], defaultStock = 5) {
            const existingIds = new Set(store.items().map((item) => item.productId));
            const missingProducts = products.filter((product) => !existingIds.has(product.id));

            if (missingProducts.length === 0) {
                return;
            }

            const seededItems: InventoryItem[] = missingProducts.map((p) => ({
                productId: p.id,
                productName: p.title,
                stock: defaultStock,
                lastUpdated: new Date(),
            }));

            const newItems = [...store.items(), ...seededItems];

            patchState(store, { items: newItems });
            storage.save({ items: newItems, movements: store.movements() });
        },
        seedIfEmpty(products: { id: number; title: string }[], defaultStock = 5) {
            if (store.items().length > 0) {
                return;
            }

            this.seedMissingProducts(products, defaultStock);
        },
        loadFromStorage() {
            const data = storage.load();
            patchState(store, data);
        },
    }))
);
