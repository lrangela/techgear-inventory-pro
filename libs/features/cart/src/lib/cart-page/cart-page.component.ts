import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';
import { ConfirmDialogService } from '@techgear/ui';

@Component({
    selector: 'lib-cart-page',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {
    readonly cartStore = inject(CartStore);
    private readonly cartFacade = inject(CartInventoryFacade);
    private readonly confirmDialog = inject(ConfirmDialogService);

    onUpdateQuantity(productId: number, quantity: number): void {
        this.cartFacade.setQty(productId, quantity);
    }

    onRemoveItem(productId: number): void {
        this.cartFacade.removeFromCart(productId);
    }

    async onClearCart(): Promise<void> {
        const confirmed = await this.confirmDialog.open({
            title: 'Clear cart',
            message: 'Remove all items from the cart? This demo does not support order recovery.',
            confirmLabel: 'Clear cart',
            cancelLabel: 'Keep items',
            variant: 'danger',
        });

        if (!confirmed) {
            return;
        }

        this.cartFacade.clearCart();
    }
}
