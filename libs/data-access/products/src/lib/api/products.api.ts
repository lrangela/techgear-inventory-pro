import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  ProductDeleteResponseSchema,
  ProductDtoSchema,
  ProductsListDtoSchema,
} from '../contracts/products.contracts';
import {
  ProductCreateRequest,
  ProductsListResult,
  ProductUpdateRequest,
  ProductsListParams,
  mapProduct,
  mapProducts,
} from '../models/products.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const PRODUCTS_API_BASE_URL = new InjectionToken<string>('PRODUCTS_API_BASE_URL');

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(PRODUCTS_API_BASE_URL);

  getProducts(params?: ProductsListParams) {
    const endpoint = params?.categoryId
      ? `${this.baseUrl}/products/category/${encodeURIComponent(params.categoryId)}`
      : `${this.baseUrl}/products`;

    return this.http
      .get<unknown>(endpoint, {
        params: buildProductsParams(params),
      })
      .pipe(
        map((response) => {
          const dto = parseWithZod(ProductsListDtoSchema, response, 'products.list');
          return {
            items: mapProducts(dto.products),
            total: dto.total,
            skip: dto.skip,
            limit: dto.limit,
          } satisfies ProductsListResult;
        })
      );
  }

  getProductById(id: number) {
    return this.http.get<unknown>(`${this.baseUrl}/products/${id}`).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.getOne');
        return mapProduct(dto);
      })
    );
  }

  createProduct(payload: ProductCreateRequest) {
    return this.http.post<unknown>(`${this.baseUrl}/products/add`, payload).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.create');
        return mapProduct(dto);
      })
    );
  }

  updateProduct(id: number, payload: ProductUpdateRequest) {
    return this.http.put<unknown>(`${this.baseUrl}/products/${id}`, payload).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.update');
        return mapProduct(dto);
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<unknown>(`${this.baseUrl}/products/${id}`).pipe(
      map((response) => {
        parseWithZod(ProductDeleteResponseSchema, response, 'products.delete');
        return true;
      })
    );
  }
}

function buildProductsParams(params?: ProductsListParams): HttpParams {
  const query: Record<string, string> = {};

  if (params?.limit !== undefined) {
    query['limit'] = String(params.limit);
  }

  if (params?.offset !== undefined) {
    query['skip'] = String(params.offset);
  }

  return new HttpParams({ fromObject: query });
}
