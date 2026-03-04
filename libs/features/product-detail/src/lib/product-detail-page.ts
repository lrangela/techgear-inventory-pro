import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  effect,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsStore } from '@techgear/data-access/products';
import { CartInventoryFacade } from '@techgear/data-access-cart';
import { ProductDetailViewComponent } from '@techgear/ui';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-product-detail-page',
  imports: [ProductDetailViewComponent],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsStore = inject(ProductsStore);
  private readonly cartFacade = inject(CartInventoryFacade);

  readonly product = this.productsStore.selected;
  readonly error = this.productsStore.selectedError;
  readonly isLoading = computed(
    () =>
      this.productsStore.selectedStatus() === 'loading' ||
      this.productsStore.selectedStatus() === 'reloading'
  );

  private readonly productId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: 0 }
  );

  readonly stock = computed(() => this.cartFacade.getStock(this.productId()));
  readonly qty = signal(1);
  readonly addedQty = signal(0);
  readonly limitedByStock = signal(false);
  readonly canAdd = computed(() => this.stock() > 0 && this.qty() > 0);

  constructor() {
    effect(() => {
      const available = this.stock();
      if (available <= 0) {
        this.qty.set(1);
        return;
      }

      if (this.qty() > available) {
        this.qty.set(available);
      }
    });
  }

  decreaseQty(): void {
    this.qty.update((current) => Math.max(1, current - 1));
  }

  increaseQty(): void {
    this.qty.update((current) => Math.min(Math.max(1, this.stock()), current + 1));
  }

  addToCart(): void {
    const product = this.product();
    if (!product) return;

    const result = this.cartFacade.addToCartQty({
      productId: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.images?.[0],
    }, this.qty());

    if (!result.success && result.appliedQty <= 0) {
      return;
    }

    this.addedQty.set(result.appliedQty);
    this.limitedByStock.set(result.limitedByStock);
    this.qty.set(1);
    setTimeout(() => {
      this.addedQty.set(0);
      this.limitedByStock.set(false);
    }, 2200);
  }

  ngOnInit(): void {
    const id = this.productId();

    if (!Number.isInteger(id) || id <= 0) {
      void this.router.navigate(['/catalog']);
      return;
    }

    this.productsStore.loadOne(id);
  }

  ngOnDestroy(): void {
    this.productsStore.clearSelected();
  }

  onBack(): void {
    void this.router.navigate(['/catalog']);
  }

  onRetry(): void {
    this.productsStore.reloadSelected();
  }
}
