import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

type AliasMap = Record<string, string>;

function findWorkspaceRoot(projectRoot: string): string {
  let currentDir = projectRoot;

  while (currentDir !== dirname(currentDir)) {
    if (
      existsSync(resolve(currentDir, 'nx.json')) &&
      existsSync(resolve(currentDir, 'package.json'))
    ) {
      return currentDir;
    }

    currentDir = dirname(currentDir);
  }

  throw new Error(`Could not locate Nx workspace root from "${projectRoot}".`);
}

function resolveAliases(
  projectRoot: string,
  workspaceRoot: string,
  extraAliases?: AliasMap
): AliasMap {
  const baseAliases: AliasMap = {
    '@techgear/ui': resolve(workspaceRoot, 'libs/shared/ui/src/index.ts'),
    '@techgear/util': resolve(workspaceRoot, 'libs/shared/util/src/index.ts'),
  };

  const resolvedExtraAliases = Object.fromEntries(
    Object.entries(extraAliases ?? {}).map(([alias, aliasPath]) => [
      alias,
      resolve(projectRoot, aliasPath),
    ])
  );

  return {
    ...baseAliases,
    ...resolvedExtraAliases,
  };
}

function createBaseConfig(projectRoot: string, extraAliases?: AliasMap) {
  const workspaceRoot = findWorkspaceRoot(projectRoot);
  const setupFile = resolve(projectRoot, 'src/test-setup.ts');

  return defineConfig({
    root: projectRoot,
    resolve: {
      alias: resolveAliases(projectRoot, workspaceRoot, extraAliases),
    },
    plugins: [
      tsconfigPaths({
        root: workspaceRoot,
        projects: ['tsconfig.base.json'],
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      passWithNoTests: true,
      setupFiles: existsSync(setupFile) ? [setupFile] : [],
      include: ['src/**/*.spec.ts'],
    },
  });
}

export function createVitestConfig(
  projectRoot: string,
  extraAliases?: AliasMap
) {
  return createBaseConfig(projectRoot, extraAliases);
}

export function createVitestConfigApps(
  projectRoot: string,
  extraAliases?: AliasMap
) {
  return createBaseConfig(projectRoot, extraAliases);
}
