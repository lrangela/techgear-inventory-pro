import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { ConfirmDialogHostComponent, ErrorBannerComponent } from '@techgear/ui';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ErrorBannerComponent,
    ConfirmDialogHostComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly authStore = inject(AuthStore);
  private readonly productsStore = inject(ProductsStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly router = inject(Router);

  readonly isAuthenticated = computed(() => this.authStore.isAuthenticated());
  readonly currentUser = computed(() => this.authStore.user());

  constructor() {
    effect(() => {
      if (!this.authStore.isAuthenticated()) {
        return;
      }

      this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
    });

    effect(() => {
      if (!this.authStore.isAuthenticated()) {
        return;
      }

      const products = this.productsStore.items();
      const listStatus = this.productsStore.listStatus();
      const isLoading = listStatus === 'loading' || listStatus === 'reloading';

      if (!isLoading && products.length > 0) {
        this.inventoryStore.seedIfEmpty(products, 5);
      }
    });
  }

  async logout(): Promise<void> {
    this.authStore.logout();
    await this.router.navigateByUrl('/login');
  }
}
