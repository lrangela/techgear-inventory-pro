import { ProductDto } from '../contracts/products.contracts';

export type ProductsListParams = {
  limit?: number;
  offset?: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  image: string | null;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ProductCategory | null;
  categoryId: string | null;
};

export type ProductCreateRequest = {
  title: string;
  price: number;
  description: string;
  category?: string;
  images?: string[];
};

export type ProductUpdateRequest = Partial<ProductCreateRequest>;

function humanizeSlug(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function mapCategory(slug: string | undefined): ProductCategory | null {
  if (!slug) {
    return null;
  }

  return {
    id: slug,
    name: humanizeSlug(slug),
    image: null,
  };
}

export function mapCategoryFromSlug(slug: string | undefined): ProductCategory | null {
  return mapCategory(slug);
}

function normalizeImages(dto: ProductDto): string[] {
  const images = Array.isArray(dto.images)
    ? dto.images.filter((image) => typeof image === 'string' && image.length > 0)
    : [];

  if (dto.thumbnail && !images.includes(dto.thumbnail)) {
    return [dto.thumbnail, ...images];
  }

  return images;
}

export function mapProduct(dto: ProductDto): Product {
  const category = mapCategory(dto.category);

  return {
    id: dto.id,
    title: dto.title,
    price: dto.price,
    description: dto.description,
    images: normalizeImages(dto),
    category,
    categoryId: category?.id ?? null,
  };
}

export function mapProducts(dtos: ProductDto[]): Product[] {
  return dtos.map(mapProduct);
}

export function createProductFromRequest(
  id: number,
  payload: ProductCreateRequest
): Product {
  return {
    id,
    title: payload.title,
    price: payload.price,
    description: payload.description,
    images: payload.images?.filter(Boolean) ?? [],
    category: mapCategory(payload.category),
    categoryId: payload.category ?? null,
  };
}

export function applyProductUpdate(
  current: Product,
  patch: ProductUpdateRequest
): Product {
  return {
    ...current,
    title: patch.title ?? current.title,
    price: patch.price ?? current.price,
    description: patch.description ?? current.description,
    images: patch.images?.filter(Boolean) ?? current.images,
    category: patch.category !== undefined ? mapCategory(patch.category) : current.category,
    categoryId: patch.category ?? current.categoryId,
  };
}
