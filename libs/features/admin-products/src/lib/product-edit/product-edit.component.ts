import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoriesStore } from '@techgear/data-access/categories';
import { isSafeProductImageUrl, ProductsStore } from '@techgear/data-access/products';
import { Product, ProductCreateRequest } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';
import { PendingChangesComponent } from '@techgear/util';

@Component({
  selector: 'lib-product-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditComponent implements OnInit, PendingChangesComponent {
  private readonly fallbackPreviewUrl = 'https://placehold.co/900x360/e2e8f0/475569?text=Preview';
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly categoriesStore = inject(CategoriesStore);
  private readonly productsStore = inject(ProductsStore);
  private readonly confirmDialog = inject(ConfirmDialogService);

  readonly categories = this.categoriesStore.items;
  readonly selectedStatus = this.productsStore.selectedStatus;
  readonly selectedError = this.productsStore.selectedError;
  readonly mutationStatus = this.productsStore.mutationStatus;
  readonly mutationError = this.productsStore.mutationError;
  readonly hasPendingMutations = this.productsStore.hasPendingMutations;
  readonly isDemoMode = this.productsStore.isDemoMode;
  readonly demoModeMessage = this.productsStore.demoModeMessage;
  readonly isSubmitting = computed(() => this.mutationStatus() === 'pending');
  readonly isDetailLoading = computed(
    () =>
      !this.isNew &&
      (this.selectedStatus() === 'loading' || this.selectedStatus() === 'reloading')
  );

  isNew = false;
  private currentProductId: number | null = null;

  form = this.fb.group({
    title: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    images: [
      'https://placehold.co/600x400',
      [Validators.required, Validators.maxLength(2048), Validators.pattern(/^https?:\/\/\S+$/i)],
    ],
  });

  ngOnInit(): void {
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
    this.categoriesStore.loadList();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isNew = false;
      this.currentProductId = Number(id);
      this.productsStore.loadOne(this.currentProductId);
      return;
    }

    this.isNew = true;
  }

  constructor() {
    effect(() => {
      const product = this.productsStore.selected();
      if (!product || this.isNew || this.currentProductId !== product.id) {
        return;
      }

      this.loadProduct(product);
    });
  }

  private loadProduct(product: Product): void {
    if (!product) {
      return;
    }

    this.form.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      categoryId:
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId ?? '',
      images: product.images[0],
    });
    this.form.markAsPristine();
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.toPayload();
    if (!payload) {
      return;
    }

    try {
      if (this.isNew) {
        await this.productsStore.createOptimistic(payload);
      } else if (this.currentProductId) {
        await this.productsStore.updateOptimistic(this.currentProductId, payload);
      }
      this.form.markAsPristine();
      void this.router.navigate(['/products']);
    } catch (error: any) {
      if (error?.status === 400 || error?.status === 422) {
        const validationErrors = error?.error?.errors;
        if (validationErrors && typeof validationErrors === 'object') {
          Object.keys(validationErrors).forEach((key) => {
            const control = this.form.get(key);
            if (control) {
              control.setErrors({ serverError: validationErrors[key] });
            }
          });
        }
      }
      return;
    }
  }

  async onDelete(): Promise<void> {
    if (this.isNew || !this.currentProductId || this.isSubmitting()) {
      return;
    }

    const productName = this.form.getRawValue().title?.trim() || `#${this.currentProductId}`;
    const confirmed = await this.confirmDialog.open({
      title: 'Delete product',
      message: `Are you sure you want to delete "${productName}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      variant: 'danger',
    });

    if (!confirmed) {
      return;
    }

    try {
      await this.productsStore.deleteOptimistic(this.currentProductId);
      void this.router.navigate(['/products']);
    } catch {
      return;
    }
  }

  async canDeactivate(): Promise<boolean> {
    if (this.isSubmitting() || !this.form.dirty) {
      return true;
    }

    return this.confirmDialog.open({
      title: 'Discard unsaved changes',
      message: 'You have unsaved changes in this form. Leave without saving?',
      confirmLabel: 'Leave',
      cancelLabel: 'Stay',
      variant: 'danger',
    });
  }

  private toPayload(): ProductCreateRequest | null {
    const raw = this.form.getRawValue();
    const title = raw.title?.trim() ?? '';
    const description = raw.description?.trim() ?? '';
    const category = raw.categoryId?.trim() ?? '';
    const image = raw.images?.trim() ?? '';
    const price = Number(raw.price);

    if (!title || !description || !category || Number.isNaN(price)) {
      return null;
    }

    return {
      title,
      description,
      price,
      category,
      images: image ? [image] : undefined,
    };
  }

  getPreviewImageUrl(): string {
    const image = this.form.controls.images.value;
    return isSafeProductImageUrl(image) ? image : this.fallbackPreviewUrl;
  }
}
