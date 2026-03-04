import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoriesListDtoSchema } from '../contracts/categories.contracts';
import { mapCategories } from '../models/categories.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const CATEGORIES_API_BASE_URL = new InjectionToken<string>(
  'CATEGORIES_API_BASE_URL'
);

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(CATEGORIES_API_BASE_URL);

  getCategories() {
    return this.http.get<unknown>(`${this.baseUrl}/products/categories`).pipe(
      map((response) => {
        const dto = parseWithZod(
          CategoriesListDtoSchema,
          response,
          'categories.list'
        );
        return mapCategories(dto);
      })
    );
  }
}
