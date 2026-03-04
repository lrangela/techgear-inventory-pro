import { Injectable } from '@angular/core';
import type { CartItem } from '../models/cart.models';

const CART_KEY = 'techgear_cart';

@Injectable({ providedIn: 'root' })
export class CartStorageService {
    save(items: CartItem[]): void {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    }

    load(): CartItem[] {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    }

    clear(): void {
        localStorage.removeItem(CART_KEY);
    }
}
