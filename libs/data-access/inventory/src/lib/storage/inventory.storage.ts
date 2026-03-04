import { Injectable } from '@angular/core';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

const INVENTORY_KEY = 'techgear_inventory';

interface StoredInventory {
    items: InventoryItem[];
    movements: StockMovement[];
}

@Injectable({ providedIn: 'root' })
export class InventoryStorageService {
    save(data: StoredInventory): void {
        localStorage.setItem(INVENTORY_KEY, JSON.stringify(data));
    }

    load(): StoredInventory {
        const data = localStorage.getItem(INVENTORY_KEY);
        if (!data) return { items: [], movements: [] };

        const parsed = JSON.parse(data) as {
            items?: Array<InventoryItem & { lastUpdated: string | Date }>;
            movements?: Array<StockMovement & { timestamp: string | Date }>;
        };

        const parsedItems = Array.isArray(parsed.items) ? parsed.items : [];
        const parsedMovements = Array.isArray(parsed.movements) ? parsed.movements : [];

        return {
            items: parsedItems.map((item) => ({
                ...item,
                lastUpdated: new Date(item.lastUpdated),
            })),
            movements: parsedMovements.map((movement) => ({
                ...movement,
                timestamp: new Date(movement.timestamp),
            })),
        };
    }
}
