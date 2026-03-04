/* eslint-disable @nx/enforce-module-boundaries */
import { resolve } from 'node:path';
import { createVitestConfig } from '../../../vitest.config.base';

export default createVitestConfig(resolve(__dirname), {
  '@techgear/features/cart': './src/index.ts',
  '@techgear/features-cart': './src/index.ts',
  '@techgear/data-access/auth': '../../data-access/auth/src/index.ts',
  '@techgear/data-access/products': '../../data-access/products/src/index.ts',
  '@techgear/data-access/categories': '../../data-access/categories/src/index.ts',
  '@techgear/data-access/cart': '../../data-access/cart/src/index.ts',
  '@techgear/data-access-cart': '../../data-access/cart/src/index.ts',
  '@techgear/data-access/inventory': '../../data-access/inventory/src/index.ts',
  '@techgear/data-access-inventory': '../../data-access/inventory/src/index.ts',
  '@techgear/features/auth': '../auth/src/index.ts',
  '@techgear/features-admin-inventory': '../admin-inventory/src/index.ts',
  '@techgear/features-admin-products': '../admin-products/src/index.ts',
  '@techgear/catalog': '../catalog/src/index.ts',
  '@techgear/product-detail': '../product-detail/src/index.ts',
});
