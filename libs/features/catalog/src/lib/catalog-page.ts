import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesStore } from '@techgear/data-access/categories';
import { ProductsStore } from '@techgear/data-access/products';
import { InventoryStore } from '@techgear/data-access/inventory';
import { AppErrorState } from '@techgear/util';
import { CategoryFilterComponent, PaginationComponent, ProductCardComponent } from '@techgear/ui';

@Component({
  selector: 'lib-catalog-page',
  imports: [CategoryFilterComponent, ProductCardComponent, PaginationComponent],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent {
  private readonly router = inject(Router);
  private readonly productsStore = inject(ProductsStore);
  private readonly categoriesStore = inject(CategoriesStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly appErrorState = inject(AppErrorState);

  readonly page = signal(1);
  readonly pageSize = signal(12);
  readonly selectedCategoryId = signal<string | null>(null);

  readonly categories = this.categoriesStore.items;
  readonly products = this.productsStore.items;

  readonly categoriesError = computed(() => this.categoriesStore.error());
  readonly isCategoriesLoading = computed(
    () => this.categoriesStore.status() === 'loading' || this.categoriesStore.status() === 'reloading'
  );

  readonly productsError = computed(() => this.productsStore.listError());
  readonly isProductsLoading = computed(
    () =>
      this.productsStore.listStatus() === 'loading' ||
      this.productsStore.listStatus() === 'reloading'
  );

  readonly filteredProducts = computed(() => {
    const selected = this.selectedCategoryId();
    const items = this.productsStore.items();

    if (selected === null) {
      return items;
    }

    return items.filter((product) => {
      const categoryId = product.category?.id ?? product.categoryId ?? null;
      return categoryId === selected;
    });
  });

  readonly productsWithStock = computed(() => {
    return this.filteredProducts().map((product) => ({
      ...product,
      stock: this.inventoryStore.getStock(product.id)
    }));
  });

  readonly isEmpty = computed(
    () =>
      !this.isProductsLoading() &&
      !this.productsError() &&
      this.filteredProducts().length === 0
  );

  readonly canGoPrev = computed(() => this.page() > 1);
  readonly canGoNext = computed(
    () => this.products().length >= this.pageSize() && !this.isProductsLoading()
  );

  constructor() {
    this.categoriesStore.loadList();
    effect(() => {
      const page = this.page();
      const limit = this.pageSize();
      const offset = (page - 1) * limit;
      this.productsStore.loadList({ limit, offset });
    });

    effect(() => {
      const products = this.productsStore.items();
      const listStatus = this.productsStore.listStatus();
      const isLoading = listStatus === 'loading' || listStatus === 'reloading';

      if (!isLoading && products.length > 0) {
        this.inventoryStore.seedMissingProducts(products, 5);
      }
    });

    effect(() => {
      const productsError = this.productsError();
      const categoriesError = this.categoriesError();

      if (productsError) {
        this.appErrorState.report(productsError);
      }

      if (categoriesError) {
        this.appErrorState.report(categoriesError);
      }
    });
  }

  onCategoryChange(categoryId: string | null): void {
    this.selectedCategoryId.set(categoryId);
    this.page.set(1);
  }

  onPrevPage(): void {
    if (!this.canGoPrev()) {
      return;
    }
    this.page.update((current) => current - 1);
  }

  onNextPage(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.page.update((current) => current + 1);
  }

  onRetryProducts(): void {
    this.productsStore.reloadList();
  }

  onRetryCategories(): void {
    this.categoriesStore.loadList();
  }

  openProduct(productId: number): void {
    void this.router.navigate(['/products', productId]);
  }
}
