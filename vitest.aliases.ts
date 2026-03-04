import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Root absoluto del workspace (funciona en ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workspaceRoot = resolve(__dirname);

/**
 * Obtiene todos los aliases del monorepo para un proyecto
 * @param _projectDir - Directorio del proyecto (ej: 'libs/features/cart') - actualmente no usado
 */
export function getMonorepoAliases(_projectDir?: string): Record<string, string> {
  return {
    '@techgear/ui': resolve(workspaceRoot, 'libs/shared/ui/src/index.ts'),
    '@techgear/util': resolve(workspaceRoot, 'libs/shared/util/src/index.ts'),
    '@techgear/data-access/auth': resolve(workspaceRoot, 'libs/data-access/auth/src/index.ts'),
    '@techgear/data-access/products': resolve(workspaceRoot, 'libs/data-access/products/src/index.ts'),
    '@techgear/data-access/categories': resolve(workspaceRoot, 'libs/data-access/categories/src/index.ts'),
    '@techgear/data-access/cart': resolve(workspaceRoot, 'libs/data-access/cart/src/index.ts'),
    '@techgear/data-access/inventory': resolve(workspaceRoot, 'libs/data-access/inventory/src/index.ts'),
    '@techgear/data-access-cart': resolve(workspaceRoot, 'libs/data-access/cart/src/index.ts'),
    '@techgear/data-access-inventory': resolve(workspaceRoot, 'libs/data-access/inventory/src/index.ts'),
    '@techgear/features/auth': resolve(workspaceRoot, 'libs/features/auth/src/index.ts'),
    '@techgear/features/cart': resolve(workspaceRoot, 'libs/features/cart/src/index.ts'),
    '@techgear/features-admin-inventory': resolve(workspaceRoot, 'libs/features/admin-inventory/src/index.ts'),
    '@techgear/features-admin-products': resolve(workspaceRoot, 'libs/features/admin-products/src/index.ts'),
    '@techgear/catalog': resolve(workspaceRoot, 'libs/features/catalog/src/index.ts'),
    '@techgear/product-detail': resolve(workspaceRoot, 'libs/features/product-detail/src/index.ts'),
  };
}
