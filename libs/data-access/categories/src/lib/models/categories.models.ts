import { CategoryDto } from '../contracts/categories.contracts';

export type Category = {
  id: string;
  slug: string;
  name: string;
};

function humanizeSlug(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function mapCategoryFromSlug(slug: string): Category {
  return {
    id: slug,
    slug,
    name: humanizeSlug(slug),
  };
}

export function mapCategory(dto: CategoryDto): Category {
  if (typeof dto === 'string') {
    return mapCategoryFromSlug(dto);
  }

  const slug = dto.slug;
  return {
    id: slug,
    slug,
    name: dto.name ?? humanizeSlug(slug),
  };
}

export function mapCategories(dtos: CategoryDto[]): Category[] {
  return dtos.map(mapCategory);
}
