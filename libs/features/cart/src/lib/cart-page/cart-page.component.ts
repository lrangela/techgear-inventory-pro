import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
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
    private readonly router = inject(Router);

    readonly isCheckingOut = signal(false);
    readonly checkoutSuccess = signal(false);

    onUpdateQuantity(productId: number, quantity: number): void {
        this.cartFacade.setQty(productId, quantity);
    }

    onRemoveItem(productId: number): void {
        this.cartFacade.removeFromCart(productId);
    }

    async onCheckout(): Promise<void> {
        this.isCheckingOut.set(true);

        const success = await firstValueFrom(this.cartFacade.checkout());

        this.isCheckingOut.set(false);
        this.checkoutSuccess.set(success);
    }

    onContinueShopping(): void {
        this.checkoutSuccess.set(false);
        this.router.navigate(['/catalog']);
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
