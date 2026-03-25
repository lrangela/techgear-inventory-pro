import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductsStore } from '@techgear/data-access/products';
import { isSafeProductImageUrl, Product } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';

type CategoryOption = { id: string; name: string };

@Component({
  selector: 'lib-products-list',
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  readonly productsStore = inject(ProductsStore);
  readonly confirmDialog = inject(ConfirmDialogService);

  readonly fallbackImage = 'https://placehold.co/160x160/e2e8f0/475569?text=No+Image';
  readonly selectedCategory = signal<string | null>(null);
  readonly page = signal(1);
  readonly pageSize = 9;

  readonly categories = computed<CategoryOption[]>(() => {
    const map = new Map<string, string>();

    for (const product of this.productsStore.items()) {
      const id =
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId;
      const name =
        typeof product.category === 'string'
          ? product.category
          : product.category?.name ?? product.categoryId;

      if (id && name) {
        map.set(id, name);
      }
    }

    return Array.from(map.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  readonly filteredProducts = computed(() => {
    const selectedCategory = this.selectedCategory();
    const items = this.productsStore.items();

    if (!selectedCategory) {
      return items;
    }

    return items.filter((product: Product) => {
      const productCategory =
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId;
      return productCategory === selectedCategory;
    });
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredProducts().length / this.pageSize))
  );

  readonly paginatedProducts = computed(() => {
    const page = this.page();
    const start = (page - 1) * this.pageSize;
    return this.filteredProducts().slice(start, start + this.pageSize);
  });

  readonly canGoPrev = computed(() => this.page() > 1);
  readonly canGoNext = computed(() => this.page() < this.totalPages());
  readonly mutationError = this.productsStore.mutationError;
  readonly mutationStatus = this.productsStore.mutationStatus;
  readonly hasPendingMutations = this.productsStore.hasPendingMutations;
  readonly isDemoMode = this.productsStore.isDemoMode;
  readonly demoModeMessage = this.productsStore.demoModeMessage;

  constructor() {
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
  }

  getCategoryLabel(product: Product): string {
    if (!product.category) {
      return 'Uncategorized';
    }

    if (typeof product.category === 'string') {
      return product.category;
    }

    return product.category.name ?? 'Uncategorized';
  }

  getProductImage(product: Product): string {
    const image = product.images?.[0];
    return isSafeProductImageUrl(image) ? image : this.fallbackImage;
  }

  onCategoryChange(categoryId: string): void {
    this.selectedCategory.set(categoryId || null);
    this.page.set(1);
  }

  onPrevPage(): void {
    if (!this.canGoPrev()) {
      return;
    }
    this.page.update((value) => value - 1);
  }

  onNextPage(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.page.update((value) => value + 1);
  }

  isDeletePending(productId: number): boolean {
    return this.productsStore.isMutationPending(productId);
  }

  async onDelete(product: Product): Promise<void> {
    const confirmed = await this.confirmDialog.open({
      title: 'Delete product',
      message: `Delete "${product.title}" from demo list?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      variant: 'danger',
    });
    if (!confirmed) {
      return;
    }

    try {
      await this.productsStore.deleteOptimistic(product.id);
    } catch {
      // Error state is exposed by the store for UI rendering.
    }
  }
}
