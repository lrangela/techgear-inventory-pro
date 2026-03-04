import { z } from 'zod';

export const CategoryObjectDtoSchema = z
  .object({
    slug: z.string().min(1),
    name: z.string().min(1).optional(),
    url: z.string().url().optional(),
  })
  .passthrough();

export const CategoryDtoSchema = z.union([
  z.string().min(1),
  CategoryObjectDtoSchema,
]);

export type CategoryDto = z.infer<typeof CategoryDtoSchema>;

export const CategoriesListDtoSchema = z.array(CategoryDtoSchema);

export type CategoriesListDto = z.infer<typeof CategoriesListDtoSchema>;
