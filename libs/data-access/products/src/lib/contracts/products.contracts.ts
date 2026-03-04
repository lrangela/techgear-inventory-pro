import { z } from 'zod';

export const ProductDtoSchema = z
  .object({
    id: z.number().int().positive('Product ID is invalid'),
    title: z.string().min(1, 'Product title is required'),
    price: z.number(),
    description: z.string().min(1, 'Product description is required'),
    images: z.array(z.string().url()).optional(),
    thumbnail: z.string().url().optional(),
    category: z.string().min(1).optional(),
  })
  .passthrough();

export type ProductDto = z.infer<typeof ProductDtoSchema>;

export const ProductsListDtoSchema = z
  .object({
    products: z.array(ProductDtoSchema),
    total: z.number().int().nonnegative(),
    skip: z.number().int().nonnegative(),
    limit: z.number().int().positive(),
  })
  .passthrough();

export type ProductsListDto = z.infer<typeof ProductsListDtoSchema>;

export const ProductDeleteResponseSchema = z.unknown();

export type ProductDeleteResponse = z.infer<typeof ProductDeleteResponseSchema>;
