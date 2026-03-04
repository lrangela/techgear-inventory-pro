/* eslint-disable @nx/enforce-module-boundaries */
import { resolve } from 'node:path';
import { createVitestConfig } from '../../../vitest.config.base';

export default createVitestConfig(resolve(__dirname), {
  '@techgear/catalog': './src/index.ts',
  '@techgear/data-access/products': '../../data-access/products/src/index.ts',
  '@techgear/data-access/categories': '../../data-access/categories/src/index.ts',
  '@techgear/data-access/inventory': '../../data-access/inventory/src/index.ts',
});
