import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InventoryStore } from '@techgear/data-access-inventory';
import { ProductsStore } from '@techgear/data-access/products';

type MovementType = 'in' | 'out';
type ReasonPreset =
  | 'purchase'
  | 'sale'
  | 'restock'
  | 'return'
  | 'damage'
  | 'audit'
  | 'other';

@Component({
  selector: 'lib-inventory-dashboard',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './inventory-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryDashboardComponent implements OnInit, OnDestroy {
  private readonly maxRenderedMovements = 150;
  readonly inventoryStore = inject(InventoryStore);
  readonly productsStore = inject(ProductsStore);
  private readonly fb = inject(FormBuilder);
  private formValueSub?: Subscription;

  readonly movementForm = this.fb.nonNullable.group({
    selectedProductId: 0,
    movementType: 'out' as MovementType,
    quantity: 1,
    reasonPreset: '' as '' | ReasonPreset,
    reasonOther: '',
  });

  readonly formError = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly totalProducts = computed(() => this.inventoryStore.items().length);
  readonly totalMovements = computed(() => this.inventoryStore.movements().length);
  readonly totalUnits = computed(() =>
    this.inventoryStore.items().reduce((sum, item) => sum + item.stock, 0)
  );
  readonly inventoryItems = computed(() =>
    [...this.inventoryStore.items()].sort((a, b) => a.productName.localeCompare(b.productName))
  );
  readonly recentMovements = computed(() =>
    [...this.inventoryStore.movements()]
      .slice(-this.maxRenderedMovements)
      .reverse()
  );
  readonly hasTrimmedMovements = computed(
    () => this.totalMovements() > this.recentMovements().length
  );
  readonly selectableProducts = computed(() =>
    this.productsStore
      .items()
      .map((product) => ({
        productId: product.id,
        productName: product.title,
        stock: this.inventoryStore.getStock(product.id),
      }))
      .sort((a, b) =>
        a.productName.localeCompare(b.productName)
    )
  );

  private readonly reasonLabels: Record<Exclude<ReasonPreset, 'other'>, string> =
    {
      purchase: 'Purchase',
      sale: 'Sale',
      restock: 'Restock',
      return: 'Return',
      damage: 'Damage/Loss',
      audit: 'Inventory audit',
    };

  constructor() {
    effect(() => {
      const products = this.productsStore.items();
      const status = this.productsStore.listStatus();
      const isLoading = status === 'loading' || status === 'reloading';

      if (isLoading || products.length === 0) {
        return;
      }

      this.inventoryStore.syncWithCatalog(products, 5);
    });
  }

  ngOnInit(): void {
    this.inventoryStore.loadFromStorage();
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
    this.formValueSub = this.movementForm.valueChanges.subscribe(() => {
      this.successMessage.set(null);
      this.formError.set(this.buildFormError());
    });
    this.formError.set(this.buildFormError());
  }

  ngOnDestroy(): void {
    this.formValueSub?.unsubscribe();
  }

  previewDelta(): number {
    const { movementType, quantity } = this.movementForm.getRawValue();
    return movementType === 'in' ? quantity : -quantity;
  }

  selectedStock(): number | null {
    const { selectedProductId } = this.movementForm.getRawValue();
    if (!selectedProductId) {
      return null;
    }
    return this.inventoryStore.getStock(selectedProductId);
  }

  onAdjustStockSubmit(): void {
    const formError = this.buildFormError();
    this.formError.set(formError);
    this.successMessage.set(null);

    if (formError) {
      return;
    }

    const {
      selectedProductId,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    const resolvedProduct = this.selectableProducts().find(
      (item) => item.productId === selectedProductId
    );
    const productId = selectedProductId;
    const productName = resolvedProduct?.productName ?? '';
    const delta = movementType === 'in' ? quantity : -quantity;
    const reason =
      reasonPreset === 'other'
        ? reasonOther.trim()
        : this.reasonLabels[reasonPreset as Exclude<ReasonPreset, 'other'>];

    this.inventoryStore.adjustStock(
      productId,
      productName,
      delta,
      reason
    );

    this.movementForm.patchValue({
      movementType: 'out',
      quantity: 1,
      reasonPreset: '',
      reasonOther: '',
    });
    this.successMessage.set('Movement recorded successfully.');
    this.formError.set(this.buildFormError());
  }

  private buildFormError(): string | null {
    const {
      selectedProductId,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    if (!selectedProductId) {
      return 'Select a product.';
    }

    if (!quantity || quantity < 1) {
      return 'Quantity must be greater than zero.';
    }

    if (!reasonPreset) {
      return 'Select a reason.';
    }

    if (reasonPreset === 'other' && !reasonOther.trim()) {
      return 'Describe the reason when selecting "Other".';
    }

    if (movementType === 'out') {
      const currentStock = this.inventoryStore.getStock(selectedProductId);
      if (quantity > currentStock) {
        return `Insufficient stock. Current available: ${currentStock}.`;
      }
    }

    return null;
  }
}
