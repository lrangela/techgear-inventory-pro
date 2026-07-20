import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { z } from 'zod';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { ProductsApiService } from '../api/products.api';
import { PRODUCTS_STORAGE, ProductsStorage } from '../storage/products.storage';
import {
  applyProductUpdate,
  createProductFromRequest,
  isSafeProductImageUrl,
  Product,
  ProductCreateRequest,
  ProductsListResult,
  ProductsListParams,
  ProductUpdateRequest,
} from '../models/products.models';
import { AppConfigService } from '@techgear/util';

export type ProductsMutationStatus = 'idle' | 'pending' | 'error';
export type MutationType = 'create' | 'update' | 'delete';

export interface PendingMutation {
  previousItem: Product | null;
  mutationType: MutationType;
}

const PRODUCTS_LOCAL_STATE_KEY = 'techgear_products_local_state_v1';
const MAX_PRODUCTS_LOCAL_STATE_BYTES = 200_000;
const MAX_PERSISTED_PRODUCTS = 250;

const CategoryCacheSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  image: z.string().nullable().optional(),
}).nullable().optional();

interface ProductsState {
  items: Product[];
  total: number;
  skip: number;
  limit: number;
  listStatus: 'idle' | 'loading' | 'resolved' | 'error';
  listError: string | null;
  selectedId: number | null;
  selected: Product | null;
  selectedStatus: 'idle' | 'loading' | 'resolved' | 'error';
  selectedError: string | null;
  mutationStatus: ProductsMutationStatus;
  mutationError: string | null;
  pendingMutations: Record<number, PendingMutation>;
  tempIdSeed: number;
  listParams: ProductsListParams | null;
}

const initialState: ProductsState = {
  items: [],
  total: 0,
  skip: 0,
  limit: 0,
  listStatus: 'idle',
  listError: null,
  selectedId: null,
  selected: null,
  selectedStatus: 'idle',
  selectedError: null,
  mutationStatus: 'idle',
  mutationError: null,
  pendingMutations: {},
  tempIdSeed: -1,
  listParams: null,
};

function nextTempId(seed: number): number {
  return seed - 1;
}

function formatMutationError(error: unknown): string {
  if (error instanceof Error) {
    return `Demo mode rollback: ${error.message}`;
  }
  return 'Demo mode rollback: unable to persist product changes. Local state was reverted.';
}

function omitKey<T>(record: Record<number, T>, key: number): Record<number, T> {
  const { [key]: _, ...rest } = record;
  void _;
  return rest;
}

function areSameParams(
  current: ProductsListParams,
  next: ProductsListParams
): boolean {
  return (
    (current.limit ?? null) === (next.limit ?? null) &&
    (current.offset ?? null) === (next.offset ?? null) &&
    (current.categoryId ?? null) === (next.categoryId ?? null)
  );
}

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState<ProductsState>(initialState),
  withComputed((store, config = inject(AppConfigService)) => ({
    isLoading: computed(() => store.listStatus() === 'loading'),
    error: computed(() => store.listError()),
    isDemoMode: computed(() => config.authMode === 'mock'),
    demoModeMessage: computed(() =>
      config.authMode === 'mock'
        ? 'Demo mode: CRUD calls use DummyJSON simulated mutations. Changes are optimistic and only persisted in local UI state.'
        : ''
    ),
    hasPendingMutations: computed(
      () => Object.keys(store.pendingMutations()).length > 0
    ),
    isMutationPending: computed(() => (id: number): boolean => !!store.pendingMutations()[id]),
  })),
  withMethods((store, api = inject(ProductsApiService), storage: ProductsStorage = inject(PRODUCTS_STORAGE)) => {
    loadLocalProjection();

    function loadLocalProjection(): void {
      const raw = storage.getItem(PRODUCTS_LOCAL_STATE_KEY);
      if (!raw) {
        return;
      }
      try {
        const parsed = JSON.parse(raw);

        const result = z.array(z.object({
          id: z.number().int().positive(),
          title: z.string().min(1),
          price: z.number(),
          description: z.string().min(1),
          images: z.array(z.string()),
          category: CategoryCacheSchema,
          categoryId: z.string().nullable().optional(),
        })).safeParse(parsed);

        if (result.success) {
          const items = result.data
            .slice(0, MAX_PERSISTED_PRODUCTS)
            .map((item) => ({
              ...item,
              images: item.images.filter((image) => isSafeProductImageUrl(image)),
              category: item.category
                ? { id: item.category.id, name: item.category.name, image: item.category.image ?? null }
                : null,
              categoryId: item.categoryId ?? item.category?.id ?? null,
            }));
          patchState(store, { items, total: items.length });
        } else {
          storage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
        }
      } catch {
        storage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
      }
    }

    function persistLocalProjection(items: Product[]): void {
      if (items.length === 0) {
        storage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
        return;
      }
      try {
        const serialized = JSON.stringify(
          items.slice(0, MAX_PERSISTED_PRODUCTS).map((item) => ({
            ...item,
            images: item.images.filter((image) => isSafeProductImageUrl(image)),
          }))
        );
        if (serialized.length > MAX_PRODUCTS_LOCAL_STATE_BYTES) {
          storage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
          return;
        }
        storage.setItem(PRODUCTS_LOCAL_STATE_KEY, serialized);
      } catch {
        storage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
      }
    }

    function batchStateAndPersist(patch: Partial<ProductsState>): void {
      const newItems = patch.items ?? store.items();
      patchState(store, patch);
      persistLocalProjection(newItems);
    }

    function nextId(): number {
      const next = nextTempId(store.tempIdSeed());
      patchState(store, { tempIdSeed: next });
      return next;
    }

    return {
      async loadList(params: ProductsListParams): Promise<void> {
        patchState(store, {
          listStatus: 'loading',
          listError: null,
          listParams: { ...params },
        });

        try {
          const result: ProductsListResult = await firstValueFrom(api.getProducts(params));
          batchStateAndPersist({
            items: result.items,
            total: result.total,
            skip: result.skip,
            limit: result.limit,
            listStatus: 'resolved',
            listError: null,
          });
        } catch (err: unknown) {
          patchState(store, {
            listStatus: 'error',
            listError: err instanceof Error ? err.message : 'Failed to load products',
          });
        }
      },

      async ensureListLoaded(params: ProductsListParams): Promise<void> {
        const currentParams = store.listParams();
        if (
          currentParams &&
          areSameParams(currentParams, params) &&
          store.listStatus() === 'resolved'
        ) {
          return;
        }
        await this.loadList(params);
      },

      async reloadList(): Promise<void> {
        const params = store.listParams();
        if (params) {
          await this.loadList(params);
        }
      },

      async loadOne(id: number): Promise<void> {
        patchState(store, {
          selectedId: id,
          selected: null,
          selectedStatus: 'loading',
          selectedError: null,
        });
        try {
          const product = await firstValueFrom(api.getProductById(id));
          patchState(store, {
            selected: product,
            selectedStatus: 'resolved',
            selectedError: null,
          });
        } catch (err: unknown) {
          patchState(store, {
            selectedStatus: 'error',
            selectedError: err instanceof Error ? err.message : 'Failed to load product',
          });
        }
      },

      clearSelected(): void {
        patchState(store, {
          selectedId: null,
          selected: null,
          selectedStatus: 'idle',
          selectedError: null,
        });
      },

      async reloadSelected(): Promise<void> {
        const id = store.selectedId();
        if (id !== null) {
          await this.loadOne(id);
        }
      },

      resetMutationStatus(): void {
        patchState(store, { mutationStatus: 'idle', mutationError: null });
      },

      async createOptimistic(payload: ProductCreateRequest): Promise<Product> {
        const tempId = nextId();
        const optimistic = createProductFromRequest(tempId, payload);

        patchState(store, {
          mutationStatus: 'pending',
          mutationError: null,
          pendingMutations: {
            ...store.pendingMutations(),
            [tempId]: { previousItem: null, mutationType: 'create' },
          },
        });
        batchStateAndPersist({
          items: [optimistic, ...store.items()],
          total: store.total() + 1,
        });

        try {
          const created = await firstValueFrom(api.createProduct(payload));
          const committed = { ...optimistic, ...created };
          const nextMutations = omitKey(store.pendingMutations(), tempId);
          batchStateAndPersist({
            items: store.items().map((item) => (item.id === tempId ? committed : item)),
            pendingMutations: nextMutations,
            mutationStatus: 'idle',
            mutationError: null,
          });
          return committed;
        } catch (error) {
          const nextMutations = omitKey(store.pendingMutations(), tempId);
          batchStateAndPersist({
            items: store.items().filter((item) => item.id !== tempId),
            total: Math.max(0, store.total() - 1),
            pendingMutations: nextMutations,
            mutationStatus: 'error',
            mutationError: formatMutationError(error),
          });
          throw error;
        }
      },

      async updateOptimistic(id: number, payload: ProductUpdateRequest): Promise<Product> {
        const current = store.items().find((item) => item.id === id);
        if (!current) {
          throw new Error('Product not found in current list');
        }

        const optimistic = applyProductUpdate(current, payload);

        patchState(store, {
          mutationStatus: 'pending',
          mutationError: null,
          pendingMutations: {
            ...store.pendingMutations(),
            [id]: { previousItem: current, mutationType: 'update' },
          },
        });
        batchStateAndPersist({
          items: store.items().map((item) => (item.id === id ? optimistic : item)),
          selected: store.selected()?.id === id ? optimistic : store.selected(),
        });

        try {
          const updated = await firstValueFrom(api.updateProduct(id, payload));
          const committed = { ...optimistic, ...updated, id };
          const nextMutations = omitKey(store.pendingMutations(), id);
          batchStateAndPersist({
            items: store.items().map((item) => (item.id === id ? committed : item)),
            selected: store.selected()?.id === id ? committed : store.selected(),
            pendingMutations: nextMutations,
            mutationStatus: 'idle',
            mutationError: null,
          });
          return committed;
        } catch (error) {
          const nextMutations = omitKey(store.pendingMutations(), id);
          batchStateAndPersist({
            items: store.items().map((item) => (item.id === id ? current : item)),
            selected: store.selected()?.id === id ? current : store.selected(),
            pendingMutations: nextMutations,
            mutationStatus: 'error',
            mutationError: formatMutationError(error),
          });
          throw error;
        }
      },

      async deleteOptimistic(id: number): Promise<void> {
        const current = store.items().find((item) => item.id === id);
        if (!current) {
          return;
        }

        patchState(store, {
          mutationStatus: 'pending',
          mutationError: null,
          pendingMutations: {
            ...store.pendingMutations(),
            [id]: { previousItem: current, mutationType: 'delete' },
          },
        });
        batchStateAndPersist({
          items: store.items().filter((item) => item.id !== id),
          total: Math.max(0, store.total() - 1),
          selected: store.selected()?.id === id ? null : store.selected(),
        });

        try {
          await firstValueFrom(api.deleteProduct(id));
          const nextMutations = omitKey(store.pendingMutations(), id);
          patchState(store, {
            pendingMutations: nextMutations,
            mutationStatus: 'idle',
            mutationError: null,
          });
        } catch (error) {
          const nextMutations = omitKey(store.pendingMutations(), id);
          batchStateAndPersist({
            items: store.items().filter((item) => item.id !== id).concat(current).sort((a, b) => a.id - b.id),
            total: store.total() + 1,
            selected: store.selected()?.id === id ? current : store.selected(),
            pendingMutations: nextMutations,
            mutationStatus: 'error',
            mutationError: formatMutationError(error),
          });
          throw error;
        }
      },
    };
  })
);
