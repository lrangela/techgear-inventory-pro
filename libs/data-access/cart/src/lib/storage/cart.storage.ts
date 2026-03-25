import { Injectable } from '@angular/core';
import { getBrowserStorage, readJsonFromStorage, writeJsonToStorage } from '@techgear/util';
import type { CartItem } from '../models/cart.models';

const CART_KEY = 'techgear_cart';

@Injectable({ providedIn: 'root' })
export class CartStorageService {
    private readonly sessionStorageRef = getBrowserStorage('session');

    save(items: CartItem[]): void {
        writeJsonToStorage(this.sessionStorageRef, CART_KEY, items);
    }

    load(): CartItem[] {
        return readJsonFromStorage<CartItem[]>(this.sessionStorageRef, CART_KEY, []);
    }

    clear(): void {
        this.sessionStorageRef?.removeItem(CART_KEY);
    }
}
