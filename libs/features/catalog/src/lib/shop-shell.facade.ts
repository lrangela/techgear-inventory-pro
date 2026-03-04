import { computed, effect, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { CartStore } from '@techgear/data-access-cart';

@Injectable({ providedIn: 'root' })
export class ShopShellFacade {
  private readonly authStore = inject(AuthStore);
  private readonly productsStore = inject(ProductsStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly cartStore = inject(CartStore);
  private readonly router = inject(Router);

  private initialized = false;

  constructor() {
    effect(() => {
      if (this.authStore.isAuthenticated()) {
        this.init();
      }
    });

    effect(() => {
      const products = this.productsStore.items();
      const isLoading = this.productsStore.isLoading();

      if (!isLoading && products.length > 0) {
        this.inventoryStore.seedMissingProducts(products, 5);
      }
    });
  }

  init(): void {
    if (this.initialized || !this.authStore.isAuthenticated()) {
      return;
    }

    this.initialized = true;
    this.productsStore.loadList({ limit: 50, offset: 0 });
  }

  readonly isAuthenticated = computed(() => this.authStore.isAuthenticated());
  readonly currentUser = computed(() => this.authStore.user());
  readonly userName = computed(
    () => this.currentUser()?.name?.trim() || 'Signed User'
  );
  readonly userInitials = computed(() => {
    const name = this.userName();
    const initials = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');

    return initials || 'U';
  });
  readonly cartCount = computed(() => this.cartStore.totalItems());

  async logout(): Promise<void> {
    this.authStore.logout();
    await this.router.navigateByUrl('/login');
  }
}
