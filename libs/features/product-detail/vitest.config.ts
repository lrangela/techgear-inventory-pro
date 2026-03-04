/* eslint-disable @nx/enforce-module-boundaries */
import { resolve } from 'node:path';
import { createVitestConfig } from '../../../vitest.config.base';

export default createVitestConfig(resolve(__dirname), {
  '@techgear/product-detail': './src/index.ts',
  '@techgear/data-access/products': '../../data-access/products/src/index.ts',
});
