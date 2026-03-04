import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InventoryStore } from '@techgear/data-access-inventory';

type ProductMode = 'existing' | 'new';
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
  readonly inventoryStore = inject(InventoryStore);
  private readonly fb = inject(FormBuilder);
  private formValueSub?: Subscription;

  readonly movementForm = this.fb.nonNullable.group({
    productMode: 'existing' as ProductMode,
    selectedProductId: 0,
    newProductId: 0,
    newProductName: '',
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
  readonly selectableProducts = computed(() =>
    [...this.inventoryStore.items()].sort((a, b) =>
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

  ngOnInit(): void {
    this.inventoryStore.loadFromStorage();
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
    const { productMode, selectedProductId } = this.movementForm.getRawValue();
    if (productMode !== 'existing' || !selectedProductId) {
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
      productMode,
      selectedProductId,
      newProductId,
      newProductName,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    const resolvedProduct =
      productMode === 'existing'
        ? this.selectableProducts().find((item) => item.productId === selectedProductId)
        : undefined;

    const productId =
      productMode === 'existing' ? selectedProductId : Number(newProductId);
    const productName =
      productMode === 'existing'
        ? (resolvedProduct?.productName ?? '')
        : newProductName.trim();
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

    if (productMode === 'new') {
      this.movementForm.patchValue({
        productMode: 'existing',
        selectedProductId: productId,
        newProductId: 0,
        newProductName: '',
      });
    }

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
      productMode,
      selectedProductId,
      newProductId,
      newProductName,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    if (productMode === 'existing' && !selectedProductId) {
      return 'Select a product.';
    }

    if (productMode === 'new' && (!newProductId || newProductId < 1)) {
      return 'Enter a valid ID for the new product.';
    }

    if (productMode === 'new' && !newProductName.trim()) {
      return 'Enter a name for the new product.';
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

    if (productMode === 'existing' && movementType === 'out') {
      const currentStock = this.inventoryStore.getStock(selectedProductId);
      if (quantity > currentStock) {
        return `Insufficient stock. Current available: ${currentStock}.`;
      }
    }

    return null;
  }
}
