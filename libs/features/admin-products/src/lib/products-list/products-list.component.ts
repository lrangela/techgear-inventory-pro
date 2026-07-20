import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriesStore } from '@techgear/data-access/categories';
import { ProductsStore } from '@techgear/data-access/products';
import { isSafeProductImageUrl, Product } from '@techgear/data-access/products';
import { CategoryFilterComponent, CategoryFilterOption, ConfirmDialogService, PaginationComponent } from '@techgear/ui';

@Component({
  selector: 'lib-products-list',
  imports: [CurrencyPipe, RouterLink, CategoryFilterComponent, PaginationComponent],
  templateUrl: './products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  readonly productsStore = inject(ProductsStore);
  readonly categoriesStore = inject(CategoriesStore);
  readonly confirmDialog = inject(ConfirmDialogService);

  readonly fallbackImage = 'https://placehold.co/160x160/e2e8f0/475569?text=No+Image';
  readonly selectedCategory = signal<string | null>(null);
  readonly page = signal(1);
  readonly pageSize = 9;

  readonly categories = this.categoriesStore.items;

  readonly categoryOptions = computed<CategoryFilterOption[]>(() =>
    this.categories().map((c) => ({ id: c.id, name: c.name }))
  );

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.productsStore.total() / this.pageSize))
  );

  readonly canGoPrev = computed(() => this.page() > 1);
  readonly canGoNext = computed(() => this.page() < this.totalPages());
  readonly mutationError = this.productsStore.mutationError;
  readonly mutationStatus = this.productsStore.mutationStatus;
  readonly hasPendingMutations = this.productsStore.hasPendingMutations;
  readonly isDemoMode = this.productsStore.isDemoMode;
  readonly demoModeMessage = this.productsStore.demoModeMessage;

  constructor() {
    this.productsStore.ensureListLoaded({
      limit: this.pageSize,
      offset: 0,
      categoryId: null,
    });
    this.categoriesStore.ensureLoaded();
  }

  getCategoryLabel(product: Product): string {
    return product.category?.name ?? 'Uncategorized';
  }

  getProductImage(product: Product): string {
    const image = product.images?.[0];
    return isSafeProductImageUrl(image) ? image : this.fallbackImage;
  }

  onCategoryChange(categoryId: string | null): void {
    this.selectedCategory.set(categoryId);
    this.page.set(1);
    this.loadCurrentPage();
  }

  onPrevPage(): void {
    if (!this.canGoPrev()) {
      return;
    }
    this.page.update((value) => value - 1);
    this.loadCurrentPage();
  }

  onNextPage(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.page.update((value) => value + 1);
    this.loadCurrentPage();
  }

  isDeletePending(productId: number): boolean {
    return this.productsStore.isMutationPending()(productId);
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

  private loadCurrentPage(): void {
    const offset = (this.page() - 1) * this.pageSize;
    this.productsStore.loadList({
      limit: this.pageSize,
      offset,
      categoryId: this.selectedCategory(),
    });
  }
}
