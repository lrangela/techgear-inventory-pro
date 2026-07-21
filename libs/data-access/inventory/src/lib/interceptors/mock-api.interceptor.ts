import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { switchMap, of, delay } from 'rxjs';
import {
  getBrowserStorage,
  readJsonFromStorage,
  writeJsonToStorage,
  createId,
} from '@techgear/util';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

const INVENTORY_KEY = 'techgear_inventory';
const MOCK_LATENCY_MS = 200;

function loadInventoryFromStorage(): { items: InventoryItem[]; movements: StockMovement[] } {
  const storage = getBrowserStorage('session');
  const parsed = readJsonFromStorage<{
    items?: Array<InventoryItem & { lastUpdated: string | Date }>;
    movements?: Array<StockMovement & { timestamp: string | Date }>;
  } | null>(storage, INVENTORY_KEY, null);

  if (!parsed) {
    return { items: [], movements: [] };
  }

  return {
    items: (Array.isArray(parsed.items) ? parsed.items : []).map((item) => ({
      ...item,
      lastUpdated: new Date(item.lastUpdated),
    })),
    movements: (Array.isArray(parsed.movements) ? parsed.movements : []).map((m) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    })),
  };
}

function saveInventoryToStorage(data: {
  items: InventoryItem[];
  movements: StockMovement[];
}): void {
  const storage = getBrowserStorage('session');
  writeJsonToStorage(storage, INVENTORY_KEY, data);
}

export const mockApiInterceptor: HttpInterceptorFn = (request, next) => {
  const { url, method, body } = request;

  // GET /api/inventory → return current inventory state
  if (method === 'GET' && url.endsWith('/api/inventory')) {
    return of(null).pipe(
      delay(MOCK_LATENCY_MS),
      switchMap(() => {
        const data = loadInventoryFromStorage();
        return of(new HttpResponse({ status: 200, body: data }));
      }),
    );
  }

  // POST /api/inventory/adjust → persist adjusted inventory
  if (method === 'POST' && url.endsWith('/api/inventory/adjust')) {
    return of(null).pipe(
      delay(MOCK_LATENCY_MS),
      switchMap(() => {
        const payload = body as {
          items: InventoryItem[];
          movements: StockMovement[];
        };
        saveInventoryToStorage(payload);
        return of(new HttpResponse({ status: 200, body: payload }));
      }),
    );
  }

  // POST /api/checkout → deduct stock permanently, record Sale movements
  if (method === 'POST' && url.endsWith('/api/checkout')) {
    return of(null).pipe(
      delay(MOCK_LATENCY_MS),
      switchMap(() => {
        const cartItems = body as Array<{
          productId: number;
          title: string;
          quantity: number;
        }>;

        if (!Array.isArray(cartItems) || cartItems.length === 0) {
          return of(
            new HttpResponse({ status: 400, body: { success: false, error: 'Empty cart' } }),
          );
        }

        const inventory = loadInventoryFromStorage();
        const itemsMap = new Map(inventory.items.map((i) => [i.productId, { ...i }]));
        const newMovements: StockMovement[] = [];

        for (const item of cartItems) {
          const existing = itemsMap.get(item.productId);
          const currentStock = existing?.stock ?? 0;
          const newStock = Math.max(0, currentStock - item.quantity);

          if (existing) {
            existing.stock = newStock;
            existing.lastUpdated = new Date();
          } else {
            itemsMap.set(item.productId, {
              productId: item.productId,
              productName: item.title,
              stock: newStock,
              lastUpdated: new Date(),
            });
          }

          newMovements.push({
            id: createId(),
            productId: item.productId,
            productName: item.title,
            delta: -item.quantity,
            timestamp: new Date(),
            reason: 'Compra en línea efectuada',
          });
        }

        const updatedData = {
          items: Array.from(itemsMap.values()),
          movements: [...inventory.movements, ...newMovements].slice(-500),
        };

        saveInventoryToStorage(updatedData);

        return of(new HttpResponse({ status: 200, body: { success: true } }));
      }),
    );
  }

  // Not a mock endpoint — pass through to next interceptor
  return next(request);
};
