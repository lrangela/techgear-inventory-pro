/* eslint-disable @nx/enforce-module-boundaries */
import { resolve } from 'node:path';
import { createVitestConfigApps } from '../../vitest.config.base';

export default createVitestConfigApps(resolve(__dirname), {
  '@techgear/ui': '../../libs/shared/ui/src/index.ts',
  '@techgear/util': '../../libs/shared/util/src/index.ts',
  '@techgear/data-access/auth': '../../libs/data-access/auth/src/index.ts',
  '@techgear/data-access/products': '../../libs/data-access/products/src/index.ts',
  '@techgear/data-access/categories': '../../libs/data-access/categories/src/index.ts',
  '@techgear/catalog': '../../libs/features/catalog/src/index.ts',
  '@techgear/product-detail': '../../libs/features/product-detail/src/index.ts',
  '@techgear/features/auth': '../../libs/features/auth/src/index.ts',
  '@techgear/data-access-cart': '../../libs/data-access/cart/src/index.ts',
  '@techgear/features-cart': '../../libs/features/cart/src/index.ts',
  '@techgear/data-access-inventory': '../../libs/data-access/inventory/src/index.ts',
  '@techgear/features-admin-inventory': '../../libs/features/admin-inventory/src/index.ts',
  '@techgear/features-admin-products': '../../libs/features/admin-products/src/index.ts',
});
