import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { of } from 'rxjs';
import { ProductsApiService } from '../api/products.api';
import {
  applyProductUpdate,
  createProductFromRequest,
  Product,
  ProductCreateRequest,
  ProductsListParams,
  ProductUpdateRequest,
} from '../models/products.models';

export type ProductsMutationStatus = 'idle' | 'pending' | 'error';
const PRODUCTS_LOCAL_STATE_KEY = 'techgear_products_local_state_v1';

@Injectable({ providedIn: 'root' })
export class ProductsStore {
  private readonly api = inject(ProductsApiService);

  private readonly listParams = signal<ProductsListParams | null>(null);
  private readonly selectedId = signal<number | null>(null);
  private readonly localItems = signal<Product[] | null>(null);
  private readonly selectedOverride = signal<Product | null | undefined>(undefined);
  private readonly pendingById = signal<Record<number, true>>({});
  private readonly tempIdSeed = signal(-1);
  private readonly mutationStatusState = signal<ProductsMutationStatus>('idle');
  private readonly mutationErrorState = signal<string | null>(null);

  constructor() {
    this.loadLocalProjection();

    effect(() => {
      this.persistLocalProjection(this.localItems());
    });
  }

  private readonly listResource = rxResource<Product[], ProductsListParams | null>({
    params: () => this.listParams(),
    defaultValue: [],
    stream: ({ params }) =>
      params === null ? of([]) : this.api.getProducts(params),
  });

  private readonly selectedResource = rxResource<Product | null, number | null>({
    params: () => this.selectedId(),
    defaultValue: null,
    stream: ({ params }) =>
      params === null ? of(null) : this.api.getProductById(params),
  });

  readonly items = computed(() => this.localItems() ?? this.listResource.value());
  readonly listStatus = computed(() => this.listResource.status());
  readonly listError = computed(() => this.listResource.error());
  readonly isLoading = this.listResource.isLoading;
  readonly error = this.listResource.error;

  readonly selected = computed(() => {
    const id = this.selectedId();
    if (id !== null) {
      const localSelected = this.items().find((item) => item.id === id);
      if (localSelected) {
        return localSelected;
      }
    }

    const override = this.selectedOverride();
    return override === undefined ? this.selectedResource.value() : override;
  });
  readonly selectedStatus = computed(() => this.selectedResource.status());
  readonly selectedError = computed(() => this.selectedResource.error());
  readonly mutationStatus = computed(() => this.mutationStatusState());
  readonly mutationError = computed(() => this.mutationErrorState());
  readonly isDemoMode = computed(() => true);
  readonly demoModeMessage = computed(
    () =>
      'Demo mode: CRUD calls use DummyJSON simulated mutations. Changes are optimistic and only persisted in local UI state.'
  );
  readonly hasPendingMutations = computed(
    () => Object.keys(this.pendingById()).length > 0
  );

  setListParams(params: ProductsListParams): void {
    this.listParams.set({ ...params });
  }

  loadList(params?: ProductsListParams): void {
    this.listParams.set({ ...(params ?? {}) });
  }

  ensureListLoaded(params: ProductsListParams): void {
    const currentParams = this.listParams();
    const hasLocalProjection = this.localItems() !== null;
    const hasResourceData = this.listStatus() === 'resolved' && this.listResource.value().length >= 0;

    if (currentParams && areSameParams(currentParams, params) && (hasLocalProjection || hasResourceData)) {
      return;
    }

    this.loadList(params);
  }

  reloadList(): void {
    this.listResource.reload();
  }

  loadOne(id: number): void {
    this.selectedId.set(id);
    this.selectedOverride.set(undefined);
  }

  clearSelected(): void {
    this.selectedId.set(null);
    this.selectedOverride.set(null);
  }

  reloadSelected(): void {
    this.selectedOverride.set(undefined);
    this.selectedResource.reload();
  }

  isMutationPending(id: number): boolean {
    return !!this.pendingById()[id];
  }

  async createOptimistic(payload: ProductCreateRequest): Promise<Product> {
    const snapshot = this.ensureMutableList();
    const tempId = this.nextTempId();
    const optimistic = createProductFromRequest(tempId, payload);

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(tempId, true);
    this.localItems.set([optimistic, ...snapshot]);

    try {
      const created = await firstValueFrom(this.api.createProduct(payload));
      const committed = { ...optimistic, ...created };
      const next = this.items().map((item) => (item.id === tempId ? committed : item));
      this.localItems.set(next);
      this.setPending(tempId, false);
      if (committed.id !== tempId) {
        this.setPending(committed.id, false);
      }
      this.mutationStatusState.set('idle');
      return committed;
    } catch (error) {
      this.localItems.set(snapshot);
      this.setPending(tempId, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  async updateOptimistic(id: number, payload: ProductUpdateRequest): Promise<Product> {
    const snapshot = this.ensureMutableList();
    const current = snapshot.find((item) => item.id === id);
    if (!current) {
      throw new Error('Product not found in current list');
    }

    const optimistic = applyProductUpdate(current, payload);

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(id, true);
    this.localItems.set(snapshot.map((item) => (item.id === id ? optimistic : item)));
    if (this.selected()?.id === id) {
      this.selectedOverride.set(optimistic);
    }

    try {
      const updated = await firstValueFrom(this.api.updateProduct(id, payload));
      const committed = { ...optimistic, ...updated, id };
      const next = this.items().map((item) => (item.id === id ? committed : item));
      this.localItems.set(next);
      if (this.selected()?.id === id) {
        this.selectedOverride.set(committed);
      }
      this.setPending(id, false);
      this.mutationStatusState.set('idle');
      return committed;
    } catch (error) {
      this.localItems.set(snapshot);
      if (this.selected()?.id === id) {
        this.selectedOverride.set(current);
      }
      this.setPending(id, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  async deleteOptimistic(id: number): Promise<void> {
    const snapshot = this.ensureMutableList();
    const exists = snapshot.some((item) => item.id === id);
    if (!exists) {
      return;
    }

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(id, true);
    this.localItems.set(snapshot.filter((item) => item.id !== id));
    if (this.selected()?.id === id) {
      this.selectedOverride.set(null);
    }

    try {
      await firstValueFrom(this.api.deleteProduct(id));
      this.setPending(id, false);
      this.mutationStatusState.set('idle');
    } catch (error) {
      this.localItems.set(snapshot);
      this.setPending(id, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  private ensureMutableList(): Product[] {
    const current = this.items();
    const snapshot = current.map((item) => ({ ...item, images: [...item.images] }));
    this.localItems.set(snapshot);
    return snapshot;
  }

  private setPending(id: number, pending: boolean): void {
    this.pendingById.update((current) => {
      if (!pending) {
        const next = { ...current };
        delete next[id];
        return next;
      }

      return {
        ...current,
        [id]: true,
      };
    });
  }

  private nextTempId(): number {
    const next = this.tempIdSeed();
    this.tempIdSeed.set(next - 1);
    return next;
  }

  private formatMutationError(error: unknown): string {
    if (error instanceof Error) {
      return `Demo mode rollback: ${error.message}`;
    }

    return 'Demo mode rollback: unable to persist product changes. Local state was reverted.';
  }

  private loadLocalProjection(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const raw = localStorage.getItem(PRODUCTS_LOCAL_STATE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Product[];
      if (Array.isArray(parsed)) {
        this.localItems.set(
          parsed.map((item) => ({
            ...item,
            images: Array.isArray(item.images) ? item.images : [],
          }))
        );
      }
    } catch {
      localStorage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
    }
  }

  private persistLocalProjection(items: Product[] | null): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    if (!items || items.length === 0) {
      localStorage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
      return;
    }

    localStorage.setItem(PRODUCTS_LOCAL_STATE_KEY, JSON.stringify(items));
  }
}

function areSameParams(
  current: ProductsListParams,
  next: ProductsListParams
): boolean {
  return (current.limit ?? null) === (next.limit ?? null) &&
    (current.offset ?? null) === (next.offset ?? null);
}
