import { ProductDto } from '../contracts/products.contracts';

export type ProductsListParams = {
  limit?: number;
  offset?: number;
  categoryId?: string | null;
};

export type ProductsListResult = {
  items: Product[];
  total: number;
  skip: number;
  limit: number;
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

const MAX_PRODUCT_IMAGE_URL_LENGTH = 2048;

export function isSafeProductImageUrl(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false;
  }

  const trimmed = value.trim();
  if (!trimmed || trimmed.length > MAX_PRODUCT_IMAGE_URL_LENGTH) {
    return false;
  }

  try {
    const url = new URL(trimmed);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

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
    ? dto.images.filter((image) => isSafeProductImageUrl(image))
    : [];

  if (isSafeProductImageUrl(dto.thumbnail) && !images.includes(dto.thumbnail)) {
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
    images: payload.images?.filter((image) => isSafeProductImageUrl(image)) ?? [],
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
    images: patch.images?.filter((image) => isSafeProductImageUrl(image)) ?? current.images,
    category: patch.category !== undefined ? mapCategory(patch.category) : current.category,
    categoryId: patch.category ?? current.categoryId,
  };
}
