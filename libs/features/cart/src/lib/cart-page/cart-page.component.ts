import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';

@Component({
    selector: 'lib-cart-page',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
    readonly cartStore = inject(CartStore);
    private readonly cartFacade = inject(CartInventoryFacade);

    onUpdateQuantity(productId: number, quantity: number): void {
        this.cartFacade.setQty(productId, quantity);
    }

    onRemoveItem(productId: number): void {
        this.cartFacade.removeFromCart(productId);
    }

    onClearCart(): void {
        this.cartFacade.clearCart();
    }
}
