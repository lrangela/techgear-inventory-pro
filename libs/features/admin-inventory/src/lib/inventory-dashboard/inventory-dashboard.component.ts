import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  effect,
  inject,
  linkedSignal,
  OnInit,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
export class InventoryDashboardComponent implements OnInit {
  private readonly maxRenderedMovements = 150;
  readonly inventoryStore = inject(InventoryStore);
  readonly productsStore = inject(ProductsStore);
  private readonly fb = inject(FormBuilder);

  readonly movementForm = this.fb.nonNullable.group({
    selectedProductId: 0,
    movementType: 'out' as MovementType,
    quantity: 1,
    reasonPreset: '' as '' | ReasonPreset,
    reasonOther: '',
  });

  private readonly formValue: Signal<{
    selectedProductId: number;
    movementType: MovementType;
    quantity: number;
    reasonPreset: '' | ReasonPreset;
    reasonOther: string;
  }> = toSignal(
    this.movementForm.valueChanges,
    { initialValue: this.movementForm.getRawValue() }
  ) as Signal<{
    selectedProductId: number;
    movementType: MovementType;
    quantity: number;
    reasonPreset: '' | ReasonPreset;
    reasonOther: string;
  }>;

  readonly successMessage = linkedSignal({
    source: this.formValue,
    computation: () => null as string | null,
  });

  readonly formError = computed(() => {
    const val = this.formValue();
    const selectedProductId = val.selectedProductId;
    const movementType = val.movementType;
    const quantity = val.quantity;
    const reasonPreset = val.reasonPreset;
    const reasonOther = val.reasonOther;

    if (!selectedProductId) {
      return 'Select a product.';
    }

    if (!quantity || quantity < 1) {
      return 'Quantity must be greater than zero.';
    }

    if (!reasonPreset) {
      return 'Select a reason.';
    }

    if (reasonPreset === 'other' && !reasonOther?.trim()) {
      return 'Describe the reason when selecting "Other".';
    }

    if (movementType === 'out') {
      const currentStock = this.inventoryStore.getStock(selectedProductId);
      if (quantity > currentStock) {
        return `Insufficient stock. Current available: ${currentStock}.`;
      }
    }

    return null;
  });

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
    () => this.totalMovements() > this.maxRenderedMovements
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
      const isLoading = status === 'loading';

      if (isLoading || products.length === 0) {
        return;
      }

      this.inventoryStore.syncWithCatalog(products, 5);
    });
  }

  ngOnInit(): void {
    this.inventoryStore.loadFromStorage();
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
  }

  previewDelta(): number {
    const val = this.formValue();
    return val.movementType === 'in' ? val.quantity : -val.quantity;
  }

  selectedStock(): number | null {
    const val = this.formValue();
    if (!val.selectedProductId) {
      return null;
    }
    return this.inventoryStore.getStock(val.selectedProductId);
  }

  onAdjustStockSubmit(): void {
    const errorVal = this.formError();
    this.successMessage.set(null);

    if (errorVal) {
      return;
    }

    const val = this.formValue();
    const resolvedProduct = this.selectableProducts().find(
      (item) => item.productId === val.selectedProductId
    );
    const productId = val.selectedProductId;
    const productName = resolvedProduct?.productName ?? '';
    const delta = val.movementType === 'in' ? val.quantity : -val.quantity;
    const reason =
      val.reasonPreset === 'other'
        ? val.reasonOther.trim()
        : this.reasonLabels[val.reasonPreset as Exclude<ReasonPreset, 'other'>];

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
  }
}
