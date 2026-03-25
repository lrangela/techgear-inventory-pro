import { Injectable } from '@angular/core';
import { getBrowserStorage, readJsonFromStorage, writeJsonToStorage } from '@techgear/util';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

const INVENTORY_KEY = 'techgear_inventory';

interface StoredInventory {
    items: InventoryItem[];
    movements: StockMovement[];
}

@Injectable({ providedIn: 'root' })
export class InventoryStorageService {
    private readonly sessionStorageRef = getBrowserStorage('session');

    save(data: StoredInventory): void {
        writeJsonToStorage(this.sessionStorageRef, INVENTORY_KEY, data);
    }

    load(): StoredInventory {
        const parsed = readJsonFromStorage<{
            items?: Array<InventoryItem & { lastUpdated: string | Date }>;
            movements?: Array<StockMovement & { timestamp: string | Date }>;
        } | null>(this.sessionStorageRef, INVENTORY_KEY, null);

        if (!parsed) {
            return { items: [], movements: [] };
        }

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
