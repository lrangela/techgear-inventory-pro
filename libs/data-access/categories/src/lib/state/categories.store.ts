import { Injectable, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoriesApiService } from '../api/categories.api';
import { Category } from '../models/categories.models';

@Injectable({ providedIn: 'root' })
export class CategoriesStore {
  private readonly api = inject(CategoriesApiService);

  private readonly listResource = rxResource<Category[], void>({
    defaultValue: [],
    stream: () => this.api.getCategories(),
  });

  readonly items = computed(() => this.listResource.value());
  readonly status = computed(() => this.listResource.status());
  readonly error = computed(() => this.listResource.error());

  ensureLoaded(force = false): void {
    const currentStatus = this.listResource.status();
    if (!force && (currentStatus === 'resolved' || currentStatus === 'loading')) {
      return;
    }
    this.listResource.reload();
  }
}
