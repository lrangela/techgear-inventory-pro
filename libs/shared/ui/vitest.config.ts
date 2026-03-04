/* eslint-disable @nx/enforce-module-boundaries */
import { resolve } from 'node:path';
import { createVitestConfig } from '../../../vitest.config.base';

export default createVitestConfig(resolve(__dirname), {
  '@techgear/ui': './src/index.ts',
});
