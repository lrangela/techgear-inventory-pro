import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { createId } from '@techgear/util';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

interface InventoryState {
    items: InventoryItem[];
    movements: StockMovement[];
}

export interface StockBatchMovement {
    productId: number;
    productName: string;
    delta: number;
    reason?: string;
}

const MAX_STORED_MOVEMENTS = 500;

const initialState: InventoryState = {
    items: [],
    movements: [],
};

export const InventoryStore = signalStore(
    { providedIn: 'root' },
    withState<InventoryState>(initialState),
    withMethods((store, http = inject(HttpClient)) => ({
        adjustStock(productId: number, productName: string, delta: number, reason?: string) {
            const existing = store.items().find((i: InventoryItem) => i.productId === productId);
            const newStock = Math.max(0, (existing?.stock ?? 0) + delta);

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

            const newMovements = [...store.movements(), movement].slice(-MAX_STORED_MOVEMENTS);

            patchState(store, { items: newItems, movements: newMovements });
            http.post('/api/inventory/adjust', { items: newItems, movements: newMovements }).subscribe();
        },
        adjustStockBatch(batchMovements: StockBatchMovement[]) {
            const itemsMap = new Map(store.items().map((i: InventoryItem) => [i.productId, i]));
            const newMovementsList: StockMovement[] = [];

            for (const m of batchMovements) {
                const existing = itemsMap.get(m.productId);
                const newStock = Math.max(0, (existing?.stock ?? 0) + m.delta);
                const updatedItem: InventoryItem = existing
                    ? { ...existing, stock: newStock, lastUpdated: new Date() }
                    : { productId: m.productId, productName: m.productName, stock: newStock, lastUpdated: new Date() };
                itemsMap.set(m.productId, updatedItem);

                newMovementsList.push({
                    id: createId(),
                    productId: m.productId,
                    productName: m.productName,
                    delta: m.delta,
                    timestamp: new Date(),
                    reason: m.reason,
                });
            }

            const newItems = Array.from(itemsMap.values());
            const newMovements = [...store.movements(), ...newMovementsList].slice(-MAX_STORED_MOVEMENTS);

            patchState(store, { items: newItems, movements: newMovements });
            http.post('/api/inventory/adjust', { items: newItems, movements: newMovements }).subscribe();
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
            http.post('/api/inventory/adjust', { items: newItems, movements: store.movements() }).subscribe();
        },
        syncWithCatalog(products: { id: number; title: string }[], defaultStock = 5) {
            const currentItems = store.items();
            const nextItems: InventoryItem[] = products.map((product) => {
                const existing = currentItems.find((item) => item.productId === product.id);

                return existing
                    ? { ...existing, productName: product.title }
                    : {
                        productId: product.id,
                        productName: product.title,
                        stock: defaultStock,
                        lastUpdated: new Date(),
                    };
            });

            const hasSameItems =
                currentItems.length === nextItems.length &&
                currentItems.every((item, index) => {
                    const next = nextItems[index];
                    return !!next &&
                        item.productId === next.productId &&
                        item.productName === next.productName &&
                        item.stock === next.stock;
                });

            if (hasSameItems) {
                return;
            }

            patchState(store, { items: nextItems });
            http.post('/api/inventory/adjust', { items: nextItems, movements: store.movements() }).subscribe();
        },
        loadFromStorage() {
            return firstValueFrom(
                http.get<{ items: InventoryItem[]; movements: StockMovement[] }>('/api/inventory')
            ).then((data) => {
                patchState(store, data);
            });
        },
    }))
);
