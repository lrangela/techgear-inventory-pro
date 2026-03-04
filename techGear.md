This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.editorconfig
.github/workflows/ci.yml
.github/workflows/deploy-pages.yml
.gitignore
.husky/commit-msg
.husky/pre-commit
.prettierignore
.prettierrc
apps/admin-panel/eslint.config.mjs
apps/admin-panel/project.json
apps/admin-panel/public/favicon.ico
apps/admin-panel/src/app/app.config.ts
apps/admin-panel/src/app/app.html
apps/admin-panel/src/app/app.routes.ts
apps/admin-panel/src/app/app.scss
apps/admin-panel/src/app/app.spec.ts
apps/admin-panel/src/app/app.ts
apps/admin-panel/src/environments/environment.development.ts
apps/admin-panel/src/environments/environment.ts
apps/admin-panel/src/index.html
apps/admin-panel/src/main.ts
apps/admin-panel/src/styles.scss
apps/admin-panel/src/test-setup.ts
apps/admin-panel/tailwind.config.js
apps/admin-panel/tsconfig.app.json
apps/admin-panel/tsconfig.json
apps/admin-panel/tsconfig.spec.json
apps/admin-panel/vitest.config.ts
apps/shop-web/eslint.config.mjs
apps/shop-web/project.json
apps/shop-web/public/favicon.ico
apps/shop-web/src/app/app.config.spec.ts
apps/shop-web/src/app/app.config.ts
apps/shop-web/src/app/app.html
apps/shop-web/src/app/app.routes.ts
apps/shop-web/src/app/app.scss
apps/shop-web/src/app/app.spec.ts
apps/shop-web/src/app/app.ts
apps/shop-web/src/environments/environment.development.ts
apps/shop-web/src/environments/environment.ts
apps/shop-web/src/index.html
apps/shop-web/src/main.ts
apps/shop-web/src/styles.scss
apps/shop-web/src/test-setup.ts
apps/shop-web/tailwind.config.js
apps/shop-web/tsconfig.app.json
apps/shop-web/tsconfig.json
apps/shop-web/tsconfig.spec.json
apps/shop-web/vitest.config.ts
commitlint.config.js
docs/adr/ADR-0001-architecture.md
docs/README.md
eslint.config.mjs
fake-backend-alternatives.md
libs/data-access/auth/eslint.config.mjs
libs/data-access/auth/ng-package.json
libs/data-access/auth/package.json
libs/data-access/auth/project.json
libs/data-access/auth/README.md
libs/data-access/auth/src/index.ts
libs/data-access/auth/src/lib/api/auth.api.ts
libs/data-access/auth/src/lib/contracts/auth.contracts.ts
libs/data-access/auth/src/lib/guards/auth.guard.ts
libs/data-access/auth/src/lib/guards/role.guard.ts
libs/data-access/auth/src/lib/interceptors/auth.interceptor.ts
libs/data-access/auth/src/lib/models/auth.models.ts
libs/data-access/auth/src/lib/state/auth.store.spec.ts
libs/data-access/auth/src/lib/state/auth.store.ts
libs/data-access/auth/src/lib/storage/token.storage.ts
libs/data-access/auth/src/lib/validation/parse-with-zod.spec.ts
libs/data-access/auth/src/lib/validation/parse-with-zod.ts
libs/data-access/auth/src/test-setup.ts
libs/data-access/auth/tsconfig.json
libs/data-access/auth/tsconfig.lib.json
libs/data-access/auth/tsconfig.lib.prod.json
libs/data-access/auth/tsconfig.spec.json
libs/data-access/auth/vitest.config.ts
libs/data-access/cart/ng-package.json
libs/data-access/cart/package.json
libs/data-access/cart/project.json
libs/data-access/cart/src/index.ts
libs/data-access/cart/src/lib/facade/cart-inventory.facade.ts
libs/data-access/cart/src/lib/models/cart.models.ts
libs/data-access/cart/src/lib/state/cart.store.spec.ts
libs/data-access/cart/src/lib/state/cart.store.ts
libs/data-access/cart/src/lib/storage/cart.storage.ts
libs/data-access/cart/src/test-setup.ts
libs/data-access/cart/tsconfig.json
libs/data-access/cart/tsconfig.lib.json
libs/data-access/cart/tsconfig.lib.prod.json
libs/data-access/cart/tsconfig.spec.json
libs/data-access/cart/vitest.config.ts
libs/data-access/categories/eslint.config.mjs
libs/data-access/categories/ng-package.json
libs/data-access/categories/package.json
libs/data-access/categories/project.json
libs/data-access/categories/README.md
libs/data-access/categories/src/index.ts
libs/data-access/categories/src/lib/api/categories.api.ts
libs/data-access/categories/src/lib/contracts/categories.contracts.ts
libs/data-access/categories/src/lib/models/categories.models.ts
libs/data-access/categories/src/lib/state/categories.store.spec.ts
libs/data-access/categories/src/lib/state/categories.store.ts
libs/data-access/categories/src/lib/validation/parse-with-zod.ts
libs/data-access/categories/src/test-setup.ts
libs/data-access/categories/tsconfig.json
libs/data-access/categories/tsconfig.lib.json
libs/data-access/categories/tsconfig.lib.prod.json
libs/data-access/categories/tsconfig.spec.json
libs/data-access/categories/vitest.config.ts
libs/data-access/inventory/ng-package.json
libs/data-access/inventory/package.json
libs/data-access/inventory/project.json
libs/data-access/inventory/src/index.ts
libs/data-access/inventory/src/lib/models/inventory.models.ts
libs/data-access/inventory/src/lib/state/inventory.store.spec.ts
libs/data-access/inventory/src/lib/state/inventory.store.ts
libs/data-access/inventory/src/lib/storage/inventory.storage.ts
libs/data-access/inventory/src/test-setup.ts
libs/data-access/inventory/tsconfig.json
libs/data-access/inventory/tsconfig.lib.json
libs/data-access/inventory/tsconfig.lib.prod.json
libs/data-access/inventory/tsconfig.spec.json
libs/data-access/inventory/vitest.config.ts
libs/data-access/products/eslint.config.mjs
libs/data-access/products/ng-package.json
libs/data-access/products/package.json
libs/data-access/products/project.json
libs/data-access/products/README.md
libs/data-access/products/src/index.ts
libs/data-access/products/src/lib/api/products.api.ts
libs/data-access/products/src/lib/contracts/products.contracts.ts
libs/data-access/products/src/lib/models/products.models.ts
libs/data-access/products/src/lib/state/products.store.spec.ts
libs/data-access/products/src/lib/state/products.store.ts
libs/data-access/products/src/lib/validation/parse-with-zod.ts
libs/data-access/products/src/test-setup.ts
libs/data-access/products/tsconfig.json
libs/data-access/products/tsconfig.lib.json
libs/data-access/products/tsconfig.lib.prod.json
libs/data-access/products/tsconfig.spec.json
libs/data-access/products/vitest.config.ts
libs/features/admin-inventory/ng-package.json
libs/features/admin-inventory/package.json
libs/features/admin-inventory/project.json
libs/features/admin-inventory/src/index.ts
libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.html
libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.spec.ts
libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.ts
libs/features/admin-inventory/src/test-setup.ts
libs/features/admin-inventory/tsconfig.json
libs/features/admin-inventory/tsconfig.lib.json
libs/features/admin-inventory/tsconfig.lib.prod.json
libs/features/admin-inventory/tsconfig.spec.json
libs/features/admin-inventory/vitest.config.ts
libs/features/admin-products/ng-package.json
libs/features/admin-products/package.json
libs/features/admin-products/project.json
libs/features/admin-products/src/index.ts
libs/features/admin-products/src/lib/product-edit/product-edit.component.html
libs/features/admin-products/src/lib/product-edit/product-edit.component.ts
libs/features/admin-products/src/lib/products-list/products-list.component.html
libs/features/admin-products/src/lib/products-list/products-list.component.spec.ts
libs/features/admin-products/src/lib/products-list/products-list.component.ts
libs/features/admin-products/src/test-setup.ts
libs/features/admin-products/tsconfig.json
libs/features/admin-products/tsconfig.lib.json
libs/features/admin-products/tsconfig.lib.prod.json
libs/features/admin-products/tsconfig.spec.json
libs/features/admin-products/vitest.config.ts
libs/features/auth/eslint.config.mjs
libs/features/auth/ng-package.json
libs/features/auth/package.json
libs/features/auth/project.json
libs/features/auth/README.md
libs/features/auth/src/index.ts
libs/features/auth/src/lib/login-page.config.ts
libs/features/auth/src/lib/login-page.html
libs/features/auth/src/lib/login-page.scss
libs/features/auth/src/lib/login-page.spec.ts
libs/features/auth/src/lib/login-page.ts
libs/features/auth/src/test-setup.ts
libs/features/auth/tsconfig.json
libs/features/auth/tsconfig.lib.json
libs/features/auth/tsconfig.lib.prod.json
libs/features/auth/tsconfig.spec.json
libs/features/auth/vitest.config.ts
libs/features/cart/ng-package.json
libs/features/cart/package.json
libs/features/cart/project.json
libs/features/cart/src/index.ts
libs/features/cart/src/lib/cart-page/cart-page.component.css
libs/features/cart/src/lib/cart-page/cart-page.component.html
libs/features/cart/src/lib/cart-page/cart-page.component.spec.ts
libs/features/cart/src/lib/cart-page/cart-page.component.ts
libs/features/cart/src/test-setup.ts
libs/features/cart/tsconfig.json
libs/features/cart/tsconfig.lib.json
libs/features/cart/tsconfig.lib.prod.json
libs/features/cart/tsconfig.spec.json
libs/features/cart/vitest.config.ts
libs/features/catalog/eslint.config.mjs
libs/features/catalog/project.json
libs/features/catalog/README.md
libs/features/catalog/src/index.ts
libs/features/catalog/src/lib/catalog-page.html
libs/features/catalog/src/lib/catalog-page.scss
libs/features/catalog/src/lib/catalog-page.spec.ts
libs/features/catalog/src/lib/catalog-page.ts
libs/features/catalog/src/lib/provide-catalog-shell-initializer.ts
libs/features/catalog/src/lib/shop-shell-page.html
libs/features/catalog/src/lib/shop-shell-page.scss
libs/features/catalog/src/lib/shop-shell-page.ts
libs/features/catalog/src/lib/shop-shell.facade.ts
libs/features/catalog/src/test-setup.ts
libs/features/catalog/tsconfig.json
libs/features/catalog/tsconfig.lib.json
libs/features/catalog/tsconfig.spec.json
libs/features/catalog/vitest.config.ts
libs/features/product-detail/eslint.config.mjs
libs/features/product-detail/project.json
libs/features/product-detail/README.md
libs/features/product-detail/src/index.ts
libs/features/product-detail/src/lib/product-detail-page.html
libs/features/product-detail/src/lib/product-detail-page.scss
libs/features/product-detail/src/lib/product-detail-page.spec.ts
libs/features/product-detail/src/lib/product-detail-page.ts
libs/features/product-detail/src/test-setup.ts
libs/features/product-detail/tsconfig.json
libs/features/product-detail/tsconfig.lib.json
libs/features/product-detail/vitest.config.ts
libs/shared/ui/eslint.config.mjs
libs/shared/ui/ng-package.json
libs/shared/ui/package.json
libs/shared/ui/project.json
libs/shared/ui/README.md
libs/shared/ui/src/index.ts
libs/shared/ui/src/lib/auth/login-form/login-form.component.css
libs/shared/ui/src/lib/auth/login-form/login-form.component.html
libs/shared/ui/src/lib/auth/login-form/login-form.component.spec.ts
libs/shared/ui/src/lib/auth/login-form/login-form.component.ts
libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.css
libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.html
libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.ts
libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog.service.ts
libs/shared/ui/src/lib/feedback/error-banner/error-banner.component.html
libs/shared/ui/src/lib/feedback/error-banner/error-banner.component.ts
libs/shared/ui/src/lib/header/header.component.html
libs/shared/ui/src/lib/header/header.component.ts
libs/shared/ui/src/lib/navigation/pagination/pagination.component.css
libs/shared/ui/src/lib/navigation/pagination/pagination.component.html
libs/shared/ui/src/lib/navigation/pagination/pagination.component.spec.ts
libs/shared/ui/src/lib/navigation/pagination/pagination.component.ts
libs/shared/ui/src/lib/products/category-filter/category-filter.component.css
libs/shared/ui/src/lib/products/category-filter/category-filter.component.html
libs/shared/ui/src/lib/products/category-filter/category-filter.component.spec.ts
libs/shared/ui/src/lib/products/category-filter/category-filter.component.ts
libs/shared/ui/src/lib/products/product-card/product-card.component.css
libs/shared/ui/src/lib/products/product-card/product-card.component.html
libs/shared/ui/src/lib/products/product-card/product-card.component.spec.ts
libs/shared/ui/src/lib/products/product-card/product-card.component.ts
libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.css
libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.html
libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.spec.ts
libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.ts
libs/shared/ui/src/test-setup.ts
libs/shared/ui/tsconfig.json
libs/shared/ui/tsconfig.lib.json
libs/shared/ui/tsconfig.lib.prod.json
libs/shared/ui/tsconfig.spec.json
libs/shared/ui/vitest.config.ts
libs/shared/util/eslint.config.mjs
libs/shared/util/ng-package.json
libs/shared/util/package.json
libs/shared/util/project.json
libs/shared/util/README.md
libs/shared/util/src/index.ts
libs/shared/util/src/lib/errors/app-error.ts
libs/shared/util/src/lib/errors/data-contract.error.ts
libs/shared/util/src/lib/errors/http-error.interceptor.ts
libs/shared/util/src/lib/id/id.generator.ts
libs/shared/util/src/lib/image/image-url.ts
libs/shared/util/src/test-setup.ts
libs/shared/util/tsconfig.json
libs/shared/util/tsconfig.lib.json
libs/shared/util/tsconfig.lib.prod.json
libs/shared/util/tsconfig.spec.json
libs/shared/util/vitest.config.ts
nx.json
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.base.json
```

# Files

## File: .github/workflows/ci.yml
````yaml
name: CI

on:
  pull_request:
  push:

permissions:
  contents: read

concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

env:
  NODE_VERSION: '20'

jobs:
  lint:
    name: Lint (Nx affected)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect package manager
        id: pm
        shell: bash
        run: |
          set -euo pipefail
          if [[ -f package-lock.json ]]; then
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=package-lock.json" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm ci" >> "$GITHUB_OUTPUT"
          elif [[ -f pnpm-lock.yaml ]]; then
            echo "manager=pnpm" >> "$GITHUB_OUTPUT"
            echo "lockfile=pnpm-lock.yaml" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=pnpm install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          elif [[ -f yarn.lock ]]; then
            echo "manager=yarn" >> "$GITHUB_OUTPUT"
            echo "lockfile=yarn.lock" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=yarn install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          else
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=" >> "$GITHUB_OUTPUT"
            echo "use_cache=false" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm install" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node.js (with cache)
        if: steps.pm.outputs.use_cache == 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: ${{ steps.pm.outputs.manager }}
          cache-dependency-path: ${{ steps.pm.outputs.lockfile }}

      - name: Setup Node.js (without cache)
        if: steps.pm.outputs.use_cache != 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        shell: bash
        run: ${{ steps.pm.outputs.install_cmd }}

      - name: Resolve NX base/head
        shell: bash
        run: |
          set -euo pipefail
          if [[ "${{ github.event_name }}" == "pull_request" ]]; then
            echo "NX_BASE=origin/${{ github.base_ref }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          else
            echo "NX_BASE=${{ github.event.before }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          fi

      - name: Lint affected
        shell: bash
        run: |
          set -euo pipefail
          npx nx affected --target=lint --base="$NX_BASE" --head="$NX_HEAD" --parallel=3 | tee lint.log

      - name: Upload lint logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: lint-logs
          path: lint.log
          if-no-files-found: warn

  test:
    name: Test (Nx affected)
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect package manager
        id: pm
        shell: bash
        run: |
          set -euo pipefail
          if [[ -f package-lock.json ]]; then
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=package-lock.json" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm ci" >> "$GITHUB_OUTPUT"
          elif [[ -f pnpm-lock.yaml ]]; then
            echo "manager=pnpm" >> "$GITHUB_OUTPUT"
            echo "lockfile=pnpm-lock.yaml" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=pnpm install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          elif [[ -f yarn.lock ]]; then
            echo "manager=yarn" >> "$GITHUB_OUTPUT"
            echo "lockfile=yarn.lock" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=yarn install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          else
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=" >> "$GITHUB_OUTPUT"
            echo "use_cache=false" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm install" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node.js (with cache)
        if: steps.pm.outputs.use_cache == 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: ${{ steps.pm.outputs.manager }}
          cache-dependency-path: ${{ steps.pm.outputs.lockfile }}

      - name: Setup Node.js (without cache)
        if: steps.pm.outputs.use_cache != 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        shell: bash
        run: ${{ steps.pm.outputs.install_cmd }}

      - name: Resolve NX base/head
        shell: bash
        run: |
          set -euo pipefail
          if [[ "${{ github.event_name }}" == "pull_request" ]]; then
            echo "NX_BASE=origin/${{ github.base_ref }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          else
            echo "NX_BASE=${{ github.event.before }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          fi

      - name: Test affected
        shell: bash
        run: |
          set -euo pipefail
          npx nx affected --target=test --base="$NX_BASE" --head="$NX_HEAD" --parallel=3 | tee test.log

      - name: Upload test logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-logs
          path: test.log
          if-no-files-found: warn

  build:
    name: Build (Nx affected)
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect package manager
        id: pm
        shell: bash
        run: |
          set -euo pipefail
          if [[ -f package-lock.json ]]; then
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=package-lock.json" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm ci" >> "$GITHUB_OUTPUT"
          elif [[ -f pnpm-lock.yaml ]]; then
            echo "manager=pnpm" >> "$GITHUB_OUTPUT"
            echo "lockfile=pnpm-lock.yaml" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=pnpm install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          elif [[ -f yarn.lock ]]; then
            echo "manager=yarn" >> "$GITHUB_OUTPUT"
            echo "lockfile=yarn.lock" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=yarn install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          else
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=" >> "$GITHUB_OUTPUT"
            echo "use_cache=false" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm install" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node.js (with cache)
        if: steps.pm.outputs.use_cache == 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: ${{ steps.pm.outputs.manager }}
          cache-dependency-path: ${{ steps.pm.outputs.lockfile }}

      - name: Setup Node.js (without cache)
        if: steps.pm.outputs.use_cache != 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        shell: bash
        run: ${{ steps.pm.outputs.install_cmd }}

      - name: Resolve NX base/head
        shell: bash
        run: |
          set -euo pipefail
          if [[ "${{ github.event_name }}" == "pull_request" ]]; then
            echo "NX_BASE=origin/${{ github.base_ref }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          else
            echo "NX_BASE=${{ github.event.before }}" >> "$GITHUB_ENV"
            echo "NX_HEAD=${{ github.sha }}" >> "$GITHUB_ENV"
          fi

      - name: Build affected
        shell: bash
        run: |
          set -euo pipefail
          npx nx affected --target=build --base="$NX_BASE" --head="$NX_HEAD" --parallel=2 | tee build.log

      - name: Upload build logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: build-logs
          path: build.log
          if-no-files-found: warn

      - name: Upload dist artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: dist-affected
          path: dist/
          if-no-files-found: warn
````

## File: .github/workflows/deploy-pages.yml
````yaml
name: Deploy GitHub Pages

on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages-${{ github.workflow }}
  cancel-in-progress: true

env:
  NODE_VERSION: '20'

jobs:
  deploy:
    if: >-
      ${{
        github.event.workflow_run.conclusion == 'success' &&
        github.event.workflow_run.head_branch == 'main'
      }}
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          ref: ${{ github.event.workflow_run.head_sha }}

      - name: Detect package manager
        id: pm
        shell: bash
        run: |
          set -euo pipefail
          if [[ -f package-lock.json ]]; then
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=package-lock.json" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm ci" >> "$GITHUB_OUTPUT"
          elif [[ -f pnpm-lock.yaml ]]; then
            echo "manager=pnpm" >> "$GITHUB_OUTPUT"
            echo "lockfile=pnpm-lock.yaml" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=pnpm install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          elif [[ -f yarn.lock ]]; then
            echo "manager=yarn" >> "$GITHUB_OUTPUT"
            echo "lockfile=yarn.lock" >> "$GITHUB_OUTPUT"
            echo "use_cache=true" >> "$GITHUB_OUTPUT"
            echo "install_cmd=yarn install --frozen-lockfile" >> "$GITHUB_OUTPUT"
          else
            echo "manager=npm" >> "$GITHUB_OUTPUT"
            echo "lockfile=" >> "$GITHUB_OUTPUT"
            echo "use_cache=false" >> "$GITHUB_OUTPUT"
            echo "install_cmd=npm install" >> "$GITHUB_OUTPUT"
          fi

      - name: Setup Node.js (with cache)
        if: steps.pm.outputs.use_cache == 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: ${{ steps.pm.outputs.manager }}
          cache-dependency-path: ${{ steps.pm.outputs.lockfile }}

      - name: Setup Node.js (without cache)
        if: steps.pm.outputs.use_cache != 'true'
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install dependencies
        shell: bash
        run: ${{ steps.pm.outputs.install_cmd }}

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Build apps for Pages
        shell: bash
        run: |
          set -euo pipefail
          REPO_NAME="${GITHUB_REPOSITORY#*/}"
          npx nx build shop-web --configuration=production --base-href="/${REPO_NAME}/"
          npx nx build admin-panel --configuration=production --base-href="/${REPO_NAME}/admin/"

      - name: Assemble site directory
        shell: bash
        run: |
          set -euo pipefail

          find_output_dir() {
            local app="$1"
            local candidates=(
              "dist/apps/${app}/browser"
              "dist/apps/${app}"
              "dist/${app}/browser"
              "dist/${app}"
            )

            for candidate in "${candidates[@]}"; do
              if [[ -f "${candidate}/index.html" ]]; then
                echo "${candidate}"
                return 0
              fi
            done

            echo "Could not find build output for ${app}. Expected an index.html in one of: ${candidates[*]}" >&2
            return 1
          }

          SHOP_DIST="$(find_output_dir shop-web)"
          ADMIN_DIST="$(find_output_dir admin-panel)"

          rm -rf site
          mkdir -p site/admin

          cp -a "${SHOP_DIST}/." site/
          cp -a "${ADMIN_DIST}/." site/admin/

          cp site/index.html site/404.html
          cp site/admin/index.html site/admin/404.html

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: site

      - name: Upload deploy artifact snapshot
        uses: actions/upload-artifact@v4
        with:
          name: pages-site
          path: site/

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

## File: .husky/commit-msg
````
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx commitlint --edit $1
````

## File: .husky/pre-commit
````
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# Detectar si existe commit previo
BASE=$(git rev-parse --verify HEAD~1 2>/dev/null && echo "HEAD~1" || echo "HEAD")

npx nx affected --target=lint --base=$BASE
npx nx affected --target=test --base=$BASE
````

## File: apps/admin-panel/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/admin-panel/project.json
````json
{
  "name": "admin-panel",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/admin-panel/src",
  "tags": ["type:feature"],
  "targets": {
    "build": {
      "executor": "@angular/build:application",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/apps/admin-panel",
        "browser": "apps/admin-panel/src/main.ts",
        "tsConfig": "apps/admin-panel/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/admin-panel/public"
          }
        ],
        "styles": ["apps/admin-panel/src/styles.scss"]
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "650kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "4kb",
              "maximumError": "8kb"
            }
          ],
          "outputHashing": "all"
        },
        "development": {
          "fileReplacements": [
            {
              "replace": "apps/admin-panel/src/environments/environment.ts",
              "with": "apps/admin-panel/src/environments/environment.development.ts"
            }
          ],
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        },
        "local": {
          "fileReplacements": [
            {
              "replace": "apps/admin-panel/src/environments/environment.ts",
              "with": "apps/admin-panel/src/environments/environment.local.ts"
            }
          ],
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "continuous": true,
      "executor": "@angular/build:dev-server",
      "configurations": {
        "production": {
          "buildTarget": "admin-panel:build:production"
        },
        "development": {
          "buildTarget": "admin-panel:build:development"
        },
        "local": {
          "buildTarget": "admin-panel:build:local"
        }
      },
      "defaultConfiguration": "development"
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c apps/admin-panel/vitest.config.ts --run"
      }
    },
    "serve-static": {
      "continuous": true,
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "admin-panel:build",
        "staticFilePath": "dist/apps/admin-panel/browser",
        "spa": true
      }
    }
  }
}
````

## File: apps/admin-panel/src/app/app.config.ts
````typescript
import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  inject,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  AUTH_API_BASE_URL,
  AuthStore,
  authInterceptor,
  provideTokenStorage,
} from '@techgear/data-access/auth';
import { LOGIN_PAGE_CONFIG } from '@techgear/features/auth';
import { PRODUCTS_API_BASE_URL } from '@techgear/data-access/products';
import { CATEGORIES_API_BASE_URL } from '@techgear/data-access/categories';
import { httpErrorInterceptor } from '@techgear/util';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptors([httpErrorInterceptor, authInterceptor])),
    provideTokenStorage(),
    {
      provide: AUTH_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: PRODUCTS_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: CATEGORIES_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: LOGIN_PAGE_CONFIG,
      useValue: {
        appTitle: 'TechGear Admin Panel',
        subtitle: 'Sign in to review the inventory dashboard and product management flows.',
        defaultRedirectUrl: '/products',
        demoAccount: {
          email: 'emily.johnson@x.dummyjson.com',
          username: 'emilys',
          password: 'emilyspass',
        },
      },
    },
    provideAppInitializer(() => {
      const authStore = inject(AuthStore);
      authStore.initFromStorage();
    }),
    provideRouter(appRoutes),
  ],
};
````

## File: apps/admin-panel/src/app/app.html
````html
<main class="tg-min-h-screen tg-bg-slate-50">
  <lib-error-banner />
  <header class="tg-border-b tg-border-slate-200 tg-bg-white">
    <div
      class="tg-mx-auto tg-flex tg-max-w-7xl tg-items-center tg-justify-between tg-gap-4 tg-px-6 tg-py-4"
    >
      <div>
        <h1 class="tg-text-xl tg-font-semibold tg-text-slate-900">
          TechGear Inventory Pro
        </h1>
        <p class="tg-text-sm tg-text-slate-500">Admin Panel</p>
      </div>

      <nav class="tg-flex tg-items-center tg-gap-2">
        <a
          routerLink="/products"
          routerLinkActive="tg-bg-slate-900 tg-text-white"
          class="tg-rounded-md tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 tg-transition hover:tg-bg-slate-100"
          >Products</a
        >
        <a
          routerLink="/inventory"
          routerLinkActive="tg-bg-slate-900 tg-text-white"
          class="tg-rounded-md tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 tg-transition hover:tg-bg-slate-100"
          >Inventory</a
        >
      </nav>
    </div>
  </header>

  <section class="tg-mx-auto tg-max-w-7xl tg-p-6">
    <router-outlet></router-outlet>
  </section>
</main>

<lib-confirm-dialog-host />
````

## File: apps/admin-panel/src/app/app.routes.ts
````typescript
import { Route } from '@angular/router';
import { authGuard } from '@techgear/data-access/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@techgear/features/auth').then(
        (module) => module.LoginPageComponent
      ),
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductsListComponent
      ),
  },
  {
    path: 'products/new',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'products/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'inventory',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-inventory').then(
        (module) => module.InventoryDashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
````

## File: apps/admin-panel/src/app/app.scss
````scss

````

## File: apps/admin-panel/src/app/app.spec.ts
````typescript
import { App } from './app';

describe('AdminPanel App Shell', () => {
  it('should expose the app class', () => {
    expect(App).toBeDefined();
  });

  it('should instantiate the app class', () => {
    const instance = new App();
    expect(instance).toBeTruthy();
  });
});
````

## File: apps/admin-panel/src/app/app.ts
````typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ConfirmDialogHostComponent, ErrorBannerComponent } from '@techgear/ui';

@Component({
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    ErrorBannerComponent,
    ConfirmDialogHostComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'admin-panel';
}
````

## File: apps/admin-panel/src/environments/environment.development.ts
````typescript
export const environment = {
  apiBaseUrl: 'https://dummyjson.com',
};
````

## File: apps/admin-panel/src/environments/environment.ts
````typescript
export const environment = {
  apiBaseUrl: 'https://dummyjson.com',
};
````

## File: apps/admin-panel/src/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>admin-panel</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
````

## File: apps/admin-panel/src/main.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
````

## File: apps/admin-panel/src/styles.scss
````scss
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add global styles to this file, and also import other style files */
````

## File: apps/admin-panel/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __adminPanelVitestInitDone__: boolean | undefined;
}

if (!globalThis.__adminPanelVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__adminPanelVitestInitDone__ = true;
}
````

## File: apps/admin-panel/tailwind.config.js
````javascript
module.exports = require('../../tailwind.config.js');
````

## File: apps/admin-panel/tsconfig.app.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: apps/admin-panel/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: apps/admin-panel/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "files": ["src/test-setup.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
````

## File: apps/admin-panel/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../libs/shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../libs/shared/util/src/index.ts'),
      '@techgear/data-access/auth': resolve(__dirname, '../../libs/data-access/auth/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../libs/data-access/products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../../libs/data-access/categories/src/index.ts'),
      '@techgear/catalog': resolve(__dirname, '../../libs/features/catalog/src/index.ts'),
      '@techgear/product-detail': resolve(__dirname, '../../libs/features/product-detail/src/index.ts'),
      '@techgear/features/auth': resolve(__dirname, '../../libs/features/auth/src/index.ts'),
      '@techgear/data-access-cart': resolve(__dirname, '../../libs/data-access/cart/src/index.ts'),
      '@techgear/features-cart': resolve(__dirname, '../../libs/features/cart/src/index.ts'),
      '@techgear/data-access-inventory': resolve(__dirname, '../../libs/data-access/inventory/src/index.ts'),
      '@techgear/data-access/inventory': resolve(__dirname, '../../libs/data-access/inventory/src/index.ts'),
      '@techgear/features-admin-inventory': resolve(__dirname, '../../libs/features/admin-inventory/src/index.ts'),
      '@techgear/features-admin-products': resolve(__dirname, '../../libs/features/admin-products/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: apps/shop-web/src/app/app.config.spec.ts
````typescript
import { ApplicationInitStatus } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { appConfig } from './app.config';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { CartStorageService, CartStore } from '@techgear/data-access-cart';

describe('shop-web bootstrap cart hydration', () => {
  it('given storage items, cart store is hydrated at boot', async () => {
    const storedItems = [
      {
        productId: 7,
        title: 'Headphones',
        price: 120,
        quantity: 2,
      },
    ];

    await TestBed.configureTestingModule({
      providers: [
        ...appConfig.providers,
        {
          provide: AuthStore,
          useValue: { initFromStorage: vi.fn(), isAuthenticated: () => false },
        },
        { provide: InventoryStore, useValue: { loadFromStorage: vi.fn() } },
        {
          provide: CartStorageService,
          useValue: {
            load: vi.fn(() => storedItems),
            save: vi.fn(),
            clear: vi.fn(),
          },
        },
      ],
    });

    const initStatus = TestBed.inject(ApplicationInitStatus);
    await initStatus.donePromise;

    const cartStore = TestBed.inject(CartStore);
    expect(cartStore.items()).toEqual(storedItems);
  });
});
````

## File: apps/shop-web/src/environments/environment.development.ts
````typescript
export const environment = {
  apiBaseUrl: 'https://dummyjson.com',
};
````

## File: apps/shop-web/src/environments/environment.ts
````typescript
export const environment = {
  apiBaseUrl: 'https://dummyjson.com',
};
````

## File: apps/shop-web/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __shopWebVitestInitDone__: boolean | undefined;
}

if (!globalThis.__shopWebVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__shopWebVitestInitDone__ = true;
}
````

## File: apps/shop-web/tailwind.config.js
````javascript
module.exports = require('../../tailwind.config.js');
````

## File: apps/shop-web/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../libs/shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../libs/shared/util/src/index.ts'),
      '@techgear/data-access/auth': resolve(__dirname, '../../libs/data-access/auth/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../libs/data-access/products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../../libs/data-access/categories/src/index.ts'),
      '@techgear/catalog': resolve(__dirname, '../../libs/features/catalog/src/index.ts'),
      '@techgear/product-detail': resolve(__dirname, '../../libs/features/product-detail/src/index.ts'),
      '@techgear/features/auth': resolve(__dirname, '../../libs/features/auth/src/index.ts'),
      '@techgear/data-access-cart': resolve(__dirname, '../../libs/data-access/cart/src/index.ts'),
      '@techgear/features-cart': resolve(__dirname, '../../libs/features/cart/src/index.ts'),
      '@techgear/data-access-inventory': resolve(__dirname, '../../libs/data-access/inventory/src/index.ts'),
      '@techgear/data-access/inventory': resolve(__dirname, '../../libs/data-access/inventory/src/index.ts'),
      '@techgear/features-admin-inventory': resolve(__dirname, '../../libs/features/admin-inventory/src/index.ts'),
      '@techgear/features-admin-products': resolve(__dirname, '../../libs/features/admin-products/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: commitlint.config.js
````javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert'],
    ],
  },
};
````

## File: docs/adr/ADR-0001-architecture.md
````markdown
# ADR-0001: TechGear Project Architecture

Status: Accepted  
Date: 2026-02-26

## Context

TechGear Inventory Pro needs an architecture that can scale across two frontend applications (`shop-web` and `admin-panel`) while keeping business behavior consistent.

The project must support:

- Shared domain rules between customer and admin experiences.
- Fast iteration in a monorepo with clear module boundaries.
- Reliable frontend state management with predictable update patterns.
- Runtime safety for external payloads from a demo backend (`dummyjson.com`).

Because DummyJSON is used as a non-owned backend, the frontend must defend itself with strict contract validation and explicit error handling instead of trusting API responses.

## Decision

The project adopts the following architectural decisions:

- Use Nx monorepo as the workspace backbone for project graph, affected execution, and scalable tooling.
- Use DDD-inspired separation across `apps`, `libs/features`, `libs/data-access`, and `libs/shared`.
- Use Angular 21 standalone APIs with zoneless and signal-first patterns as the default runtime model.
- Use apps (`shop-web`, `admin-panel`) as composition roots; keep reusable domain logic in libraries.
- Use optimistic UI updates where user experience benefits from immediate feedback, with API reconciliation afterward.
- Use `zod` in data-access boundaries to validate and parse external payloads before state mutation.
- Use `@ngrx/signals` and Angular signals to keep state local, explicit, and test-friendly.

## Consequences

Positive:

- Better scalability as modules and teams grow.
- Stronger testability due to explicit boundaries and deterministic state updates.
- Improved maintainability through reusable domain libraries and clear ownership.
- Faster CI via Nx affected execution.

Negative:

- Higher initial complexity compared with a single-app Angular setup.
- Additional Nx configuration and governance overhead (tags, boundaries, target conventions).
- Team onboarding requires understanding monorepo and DDD layering conventions.

## Alternatives Considered

1. Angular CLI single app (no Nx):
   - Simpler startup, but weaker scaling and dependency governance for dual-app growth.
2. Classic NgRx store/effects instead of signals:
   - Mature ecosystem, but higher boilerplate for this project scope.
3. Hand-crafted mock backend instead of DummyJSON:
   - More control, but more maintenance overhead and less realistic payload variability.

## Future Considerations

- Replace DummyJSON with a real backend and versioned API contracts.
- Evaluate event-sourcing style audit flows for inventory operations.
- Assess microfrontend boundaries if team structure or release cadence requires independent deployments.
- Add observability standards: tracing, metrics, and centralized error intelligence.
````

## File: docs/README.md
````markdown
# Docs

## English

This folder contains project-level documentation that should stay aligned with the current Nx workspace.

Current contents:

- `adr/ADR-0001-architecture.md`: accepted architecture decision for the monorepo structure, Angular runtime model, and library boundaries.

Related documents outside this folder:

- `../README.md`: bilingual project overview and current tooling status.
- `../fake-backend-alternatives.md`: notes about evaluated backend options for the demo environment.

## Espanol

Esta carpeta contiene documentacion del proyecto que debe mantenerse alineada con el estado actual del workspace de Nx.

Contenido actual:

- `adr/ADR-0001-architecture.md`: decision de arquitectura aceptada para la estructura del monorepo, el modelo runtime de Angular y los limites entre librerias.

Documentos relacionados fuera de esta carpeta:

- `../README.md`: vision general bilingue del proyecto y estado actual del tooling.
- `../fake-backend-alternatives.md`: notas sobre alternativas de backend evaluadas para el entorno demo.
````

## File: fake-backend-alternatives.md
````markdown
## Evaluated Fake Backend Alternatives

### 1) JSON Server
- **Type:** Local self-hosted mock REST API based on a `db.json` file.
- **Pros:**
  - Very fast setup for local development.
  - Instant REST CRUD without building a real backend.
  - Great for early frontend prototyping.
- **Cons:**
  - Not intended for production use.
  - Limited built-in auth/security.
  - Requires running and maintaining a local service.
- **When to use it:**
  - Rapid local prototypes.
  - Frontend teams unblocking development while backend is in progress.
- **Why it was NOT selected:**
  - This project prioritized a public, ready-to-use API with zero local infrastructure overhead.
- **Official link:** https://github.com/typicode/json-server

### 2) Supabase
- **Type:** Backend-as-a-Service (PostgreSQL, Auth, Storage, Realtime, Functions).
- **Pros:**
  - Complete backend platform with modern DX.
  - Strong relational database foundation (PostgreSQL).
  - Good scalability path for production systems.
- **Cons:**
  - More setup complexity than a public fake API.
  - Requires schema design, policies, and initial backend configuration.
  - Can be overkill for simple mock-data consumption.
- **When to use it:**
  - MVPs/products needing real auth, persistence, and scalable backend capabilities.
- **Why it was NOT selected:**
  - Current scope focuses on immediate fake data consumption, not standing up a full backend platform.
- **Official link:** https://supabase.com/

### 3) Firebase
- **Type:** Managed BaaS by Google (Firestore/Realtime DB, Auth, Hosting, Functions).
- **Pros:**
  - Mature and robust ecosystem.
  - Strong integration with Google Cloud services.
  - Excellent support for realtime and mobile-centric apps.
- **Cons:**
  - NoSQL data modeling tradeoffs depending on use case.
  - Potentially variable costs as usage grows.
  - Higher provider lock-in.
- **When to use it:**
  - Products requiring managed auth, realtime features, analytics, and fast cloud delivery.
- **Why it was NOT selected:**
  - For a fake backend requirement, Firebase introduces unnecessary setup and operational scope.
- **Official link:** https://firebase.google.com/

### 4) PocketBase
- **Type:** Lightweight open-source backend in a single binary (SQLite, Auth, Files, Realtime).
- **Pros:**
  - Very quick to bootstrap.
  - Small footprint and easy local hosting.
  - Built-in admin UI speeds up data iteration.
- **Cons:**
  - Limited scalability for enterprise-grade workloads.
  - Hosting/operations are still team responsibilities.
  - Smaller ecosystem than larger BaaS options.
- **When to use it:**
  - Small-to-medium projects needing a simple backend under team control.
- **Why it was NOT selected:**
  - The project aimed to avoid deployment/operations and use a publicly available fake API immediately.
- **Official link:** https://pocketbase.io/

### 5) Appwrite
- **Type:** Open-source BaaS (Auth, Database, Storage, Functions, Realtime).
- **Pros:**
  - Full-featured backend capabilities.
  - Cloud or self-hosted deployment options.
  - Good balance between control and managed services.
- **Cons:**
  - Broader setup than required for fake API needs.
  - Additional operational effort when self-hosted.
  - More complexity than needed for frontend-only mock integration.
- **When to use it:**
  - Products that need real backend functionality with platform control.
- **Why it was NOT selected:**
  - Current project phase prioritizes speed and minimal backend overhead.
- **Official link:** https://appwrite.io/

## Technical Rationale for Choosing DummyJSON
DummyJSON was selected because it provides realistic, ready-to-consume HTTP data with zero infrastructure setup, zero backend modeling effort, and no initial operational cost.

For the current objective (frontend development, flow validation, and rapid testing), it maximizes delivery speed while minimizing technical complexity, and still allows a clean migration path to a real backend later.

**Reference:** https://dummyjson.com/
````

## File: libs/data-access/auth/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/data-access/auth/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/data-access/auth",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/data-access/auth/package.json
````json
{
  "name": "@techgear/data-access/auth",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@angular/router": "^21.1.0",
    "@techgear/util": "*",
    "rxjs": "~7.8.0",
    "zod": "^4.3.6"
  },
  "sideEffects": false
}
````

## File: libs/data-access/auth/project.json
````json
{
  "name": "auth",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/auth/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["type:data-access"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/data-access/auth/ng-package.json",
        "tsConfig": "libs/data-access/auth/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/data-access/auth/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/data-access/auth/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/data-access/auth/README.md
````markdown
# auth

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test auth` to execute the unit tests.
````

## File: libs/data-access/auth/src/index.ts
````typescript
export * from './lib/api/auth.api';
export * from './lib/models/auth.models';
export * from './lib/storage/token.storage';
export * from './lib/state/auth.store';
export * from './lib/interceptors/auth.interceptor';
export * from './lib/guards/auth.guard';
export * from './lib/guards/role.guard';

// Contracts (opcional, si otras libs necesitan schemas)
export { AuthTokensDtoSchema, AuthUserDtoSchema } from './lib/contracts/auth.contracts';
export type { AuthTokensDto, AuthUserDto } from './lib/contracts/auth.contracts';
````

## File: libs/data-access/auth/src/lib/api/auth.api.ts
````typescript
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthTokensDtoSchema, AuthUserDtoSchema } from '../contracts/auth.contracts';
import { LoginRequest, mapAuthTokens, mapAuthUser } from '../models/auth.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const AUTH_API_BASE_URL = new InjectionToken<string>('AUTH_API_BASE_URL');

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(AUTH_API_BASE_URL);

  login(payload: LoginRequest) {
    return this.http
      .post<unknown>(`${this.baseUrl}/auth/login`, payload)
      .pipe(
        map((response) => {
          const dto = parseWithZod(AuthTokensDtoSchema, response, 'auth.login');
          return mapAuthTokens(dto);
        })
      );
  }

  profile() {
    return this.http.get<unknown>(`${this.baseUrl}/auth/me`).pipe(
      map((response) => {
        const dto = parseWithZod(AuthUserDtoSchema, response, 'auth.profile');
        return mapAuthUser(dto);
      })
    );
  }

  refresh(refreshToken: string) {
    return this.http
      .post<unknown>(`${this.baseUrl}/auth/refresh`, { refreshToken })
      .pipe(
        map((response) => {
          const dto = parseWithZod(AuthTokensDtoSchema, response, 'auth.refresh');
          return mapAuthTokens(dto);
        })
      );
  }
}
````

## File: libs/data-access/auth/src/lib/contracts/auth.contracts.ts
````typescript
import { z } from 'zod';

export const AuthTokensDtoSchema = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export type AuthTokensDto = z.infer<typeof AuthTokensDtoSchema>;

export const AuthUserDtoSchema = z
  .object({
    id: z.number().int().positive('User ID is invalid'),
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Email is invalid').optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    image: z.string().url().optional(),
    role: z.string().optional(),
  })
  .passthrough();

export type AuthUserDto = z.infer<typeof AuthUserDtoSchema>;
````

## File: libs/data-access/auth/src/lib/guards/auth.guard.ts
````typescript
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../state/auth.store';

export const authGuard: CanActivateFn = (_, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.isAuthenticated()) {
    return true;
  }

  const returnUrl = state?.url || router.url;
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl },
  });
};
````

## File: libs/data-access/auth/src/lib/guards/role.guard.ts
````typescript
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../state/auth.store';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const roles = (route.data?.['roles'] as string[] | undefined) ?? [];

  if (!authStore.isAuthenticated()) {
    return router.parseUrl('/login');
  }

  if (roles.length === 0) {
    return true;
  }

  const user = authStore.user();
  if (!user?.role) {
    return router.parseUrl('/login');
  }

  return roles.includes(user.role);
};
````

## File: libs/data-access/auth/src/lib/interceptors/auth.interceptor.ts
````typescript
import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthStore } from '../state/auth.store';

const isAuthEndpoint = (request: HttpRequest<unknown>) => {
  return (
    request.url.includes('/auth/login') ||
    request.url.includes('/auth/refresh')
  );
};

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authStore = inject(AuthStore);
  const accessToken = authStore.accessToken();

  const authRequest =
    accessToken && !isAuthEndpoint(request)
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      : request;

  return next(authRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || isAuthEndpoint(request)) {
        return throwError(() => error);
      }

      return from(authStore.refresh()).pipe(
        switchMap((newToken) => {
          if (!newToken) {
            return throwError(() => error);
          }

          const retryRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`,
            },
          });

          return next(retryRequest);
        }),
        catchError((refreshError) => throwError(() => refreshError))
      );
    })
  );
};
````

## File: libs/data-access/auth/src/lib/models/auth.models.ts
````typescript
export interface AuthTokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUserDto {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  role?: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: string | null;
  avatar: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const mapAuthTokens = (dto: AuthTokensDto): AuthTokens => ({
  accessToken: dto.accessToken,
  refreshToken: dto.refreshToken,
});

export const mapAuthUser = (dto: AuthUserDto): AuthUser => {
  const fullName = [dto.firstName, dto.lastName].filter(Boolean).join(' ').trim();

  return {
    id: dto.id,
    email: dto.email ?? '',
    name: fullName || dto.username,
    role: dto.role ?? null,
    avatar: dto.image ?? null,
  };
};
````

## File: libs/data-access/auth/src/lib/state/auth.store.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { describe, beforeEach, expect, it, vi } from 'vitest';
import { AuthApiService } from '../api/auth.api';
import { AuthTokens, AuthUser } from '../models/auth.models';
import { AuthStore } from './auth.store';
import { TOKEN_STORAGE, TokenStorage } from '../storage/token.storage';

describe('AuthStore', () => {
  const mockUser: AuthUser = {
    id: 1,
    email: 'qa@example.com',
    name: 'QA User',
    avatar: 'https://example.com/avatar.png',
    role: 'admin',
  };

  const mockTokens: AuthTokens = {
    accessToken: 'access-token-1',
    refreshToken: 'refresh-token-1',
  };

  let store: AuthStore;
  let authApiMock: {
    login: ReturnType<typeof vi.fn>;
    profile: ReturnType<typeof vi.fn>;
    refresh: ReturnType<typeof vi.fn>;
  };
  let storageMock: {
    getAccess: ReturnType<typeof vi.fn>;
    setAccess: ReturnType<typeof vi.fn>;
    getRefresh: ReturnType<typeof vi.fn>;
    setRefresh: ReturnType<typeof vi.fn>;
    clear: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    authApiMock = {
      login: vi.fn(),
      profile: vi.fn(),
      refresh: vi.fn(),
    };

    storageMock = {
      getAccess: vi.fn(() => null),
      setAccess: vi.fn(),
      getRefresh: vi.fn(() => null),
      setRefresh: vi.fn(),
      clear: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthStore,
        { provide: AuthApiService, useValue: authApiMock },
        { provide: TOKEN_STORAGE, useValue: storageMock as TokenStorage },
      ],
    });

    store = TestBed.inject(AuthStore);
  });

  it('initFromStorage() should restore access token and load profile', async () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(of(mockUser));

    store.initFromStorage();

    await Promise.resolve();

    expect(store.status()).toBe('authenticated');
    expect(store.accessToken()).toBe(mockTokens.accessToken);
    expect(store.refreshToken()).toBe(mockTokens.refreshToken);
    expect(store.user()).toEqual(mockUser);
    expect(authApiMock.profile).toHaveBeenCalledTimes(1);
  });

  it('initFromStorage() should logout when profile load fails', async () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(
      throwError(() => new Error('profile failed'))
    );

    store.initFromStorage();

    await Promise.resolve();
    await Promise.resolve();

    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
    expect(store.error()).toBeNull();
  });

  it('login() should move status idle -> loading -> authenticated and load profile', async () => {
    const loginSubject = new Subject<AuthTokens>();

    authApiMock.login.mockReturnValue(loginSubject.asObservable());
    authApiMock.profile.mockReturnValue(of(mockUser));
    const applyTokensSpy = vi.spyOn(storageMock, 'setAccess');

    const loginPromise = store.login('qa-user', 'secret');

    expect(store.status()).toBe('loading');

    loginSubject.next(mockTokens);
    loginSubject.complete();

    await loginPromise;

    expect(store.status()).toBe('authenticated');
    expect(applyTokensSpy).toHaveBeenCalledWith(mockTokens.accessToken);
    expect(storageMock.setRefresh).toHaveBeenCalledWith(mockTokens.refreshToken);
    expect(store.accessToken()).toBe(mockTokens.accessToken);
    expect(store.refreshToken()).toBe(mockTokens.refreshToken);
    expect(store.user()).toEqual(mockUser);
    expect(authApiMock.profile).toHaveBeenCalledTimes(1);
  });

  it('login() should set error status when login fails', async () => {
    authApiMock.login.mockReturnValue(
      throwError(() => new Error('invalid credentials'))
    );

    await expect(store.login('qa-user', 'wrong')).rejects.toThrow(
      'invalid credentials'
    );

    expect(store.status()).toBe('error');
    expect(store.error()).toBeTruthy();
  });

  it('refresh() should call api.refresh(refreshToken) and update tokens', async () => {
    const refreshedTokens: AuthTokens = {
      accessToken: 'access-token-2',
      refreshToken: 'refresh-token-2',
    };

    storageMock.getRefresh.mockReturnValue('refresh-token-1');
    authApiMock.refresh.mockReturnValue(of(refreshedTokens));

    const result = await store.refresh();

    expect(result).toBe('access-token-2');
    expect(authApiMock.refresh).toHaveBeenCalledWith('refresh-token-1');
    expect(store.accessToken()).toBe('access-token-2');
    expect(store.refreshToken()).toBe('refresh-token-2');
    expect(storageMock.setAccess).toHaveBeenCalledWith('access-token-2');
    expect(storageMock.setRefresh).toHaveBeenCalledWith('refresh-token-2');
  });

  it('refresh() should avoid concurrent refresh calls', async () => {
    const refreshSubject = new Subject<AuthTokens>();
    authApiMock.refresh.mockReturnValue(refreshSubject.asObservable());
    storageMock.getRefresh.mockReturnValue('refresh-token-1');

    const call1 = store.refresh();
    const call2 = store.refresh();

    expect(authApiMock.refresh).toHaveBeenCalledTimes(1);

    refreshSubject.next({
      accessToken: 'access-token-concurrent',
      refreshToken: 'refresh-token-concurrent',
    });
    refreshSubject.complete();

    await expect(call1).resolves.toBe('access-token-concurrent');
    await expect(call2).resolves.toBe('access-token-concurrent');
  });

  it('refresh() should logout and clear storage when refresh fails', async () => {
    storageMock.getRefresh.mockReturnValue('refresh-token-1');
    authApiMock.refresh.mockReturnValue(
      throwError(() => new Error('refresh failed'))
    );

    await expect(store.refresh()).resolves.toBeNull();

    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
  });

  it('logout() should clear storage and reset to initial state', () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(of(mockUser));
    store.initFromStorage();

    store.logout();

    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
    expect(store.error()).toBeNull();
  });
});
````

## File: libs/data-access/auth/src/lib/state/auth.store.ts
````typescript
import { inject, Injectable, computed, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthApiService } from '../api/auth.api';
import { AuthTokens, AuthUser } from '../models/auth.models';
import { TOKEN_STORAGE } from '../storage/token.storage';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  status: AuthStatus;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  status: 'idle',
  error: null,
};

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly api = inject(AuthApiService);
  private readonly storage = inject(TOKEN_STORAGE);

  private readonly state = signal<AuthState>({ ...initialState });
  private refreshPromise: Promise<AuthTokens | null> | null = null;

  readonly accessToken = computed(() => this.state().accessToken);
  readonly refreshToken = computed(() => this.state().refreshToken);
  readonly user = computed(() => this.state().user);
  readonly status = computed(() => this.state().status);
  readonly error = computed(() => this.state().error);
  readonly isAuthenticated = computed(() => !!this.state().accessToken);

  initFromStorage(): void {
    const access = this.storage.getAccess();
    const refresh = this.storage.getRefresh();

    this.state.set({
      accessToken: access,
      refreshToken: refresh,
      user: null,
      status: access ? 'authenticated' : 'idle',
      error: null,
    });

    if (access) {
      void this.loadProfile().catch(() => {
        // Stored tokens may belong to a previous API/session. Reset safely on bootstrap.
        this.logout();
      });
    }
  }

  async login(username: string, password: string): Promise<void> {
    this.state.update((current) => ({
      ...current,
      status: 'loading',
      error: null,
    }));

    try {
      const tokens = await firstValueFrom(this.api.login({ username, password }));
      this.applyTokens(tokens);
      this.state.update((current) => ({
        ...current,
        status: 'authenticated',
      }));
      await this.loadProfile();
    } catch (error) {
      this.state.update((current) => ({
        ...current,
        status: 'error',
        error: this.formatError(error),
      }));
      throw error;
    }
  }

  async loadProfile(): Promise<void> {
    if (!this.state().accessToken) {
      return;
    }

    try {
      const user = await firstValueFrom(this.api.profile());
      this.state.update((current) => ({
        ...current,
        user,
      }));
    } catch (error) {
      this.state.update((current) => ({
        ...current,
        status: 'error',
        error: this.formatError(error),
      }));
      throw error;
    }
  }

  async refresh(): Promise<string | null> {
    if (this.refreshPromise) {
      const tokens = await this.refreshPromise;
      return tokens?.accessToken ?? null;
    }

    const refreshToken = this.state().refreshToken ?? this.storage.getRefresh();
    if (!refreshToken) {
      this.logout();
      return null;
    }

    this.refreshPromise = firstValueFrom(this.api.refresh(refreshToken))
      .then((tokens) => {
        this.applyTokens(tokens);
        return tokens;
      })
      .catch(() => {
        this.logout();
        return null;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    const tokens = await this.refreshPromise;
    return tokens?.accessToken ?? null;
  }

  logout(): void {
    this.storage.clear();
    this.state.set({ ...initialState });
  }

  private applyTokens(tokens: AuthTokens): void {
    this.storage.setAccess(tokens.accessToken);
    this.storage.setRefresh(tokens.refreshToken);

    this.state.update((current) => ({
      ...current,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }));
  }

  private formatError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    return 'Auth error';
  }
}
````

## File: libs/data-access/auth/src/lib/storage/token.storage.ts
````typescript
import { Injectable, InjectionToken } from '@angular/core';

export interface TokenStorage {
  getAccess(): string | null;
  setAccess(token: string | null): void;
  getRefresh(): string | null;
  setRefresh(token: string | null): void;
  clear(): void;
}

export const TOKEN_STORAGE = new InjectionToken<TokenStorage>('TOKEN_STORAGE');

const ACCESS_KEY = 'tg_access_token';
const REFRESH_KEY = 'tg_refresh_token';

@Injectable({ providedIn: 'root' })
export class LocalStorageTokenStorage implements TokenStorage {
  getAccess(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  setAccess(token: string | null): void {
    if (token) {
      localStorage.setItem(ACCESS_KEY, token);
    } else {
      localStorage.removeItem(ACCESS_KEY);
    }
  }

  getRefresh(): string | null {
    return localStorage.getItem(REFRESH_KEY);
  }

  setRefresh(token: string | null): void {
    if (token) {
      localStorage.setItem(REFRESH_KEY, token);
    } else {
      localStorage.removeItem(REFRESH_KEY);
    }
  }

  clear(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  }
}

export const provideTokenStorage = () => ({
  provide: TOKEN_STORAGE,
  useExisting: LocalStorageTokenStorage,
});
````

## File: libs/data-access/auth/src/lib/validation/parse-with-zod.spec.ts
````typescript
import { describe, expect, it } from 'vitest';
import { DataContractError } from '@techgear/util';
import { AuthTokensDtoSchema } from '../contracts/auth.contracts';
import { parseWithZod } from './parse-with-zod';

describe('parseWithZod', () => {
  it('should throw DataContractError when contract validation fails', () => {
    const invalidPayload = { accessToken: '' };

    expect(() =>
      parseWithZod(AuthTokensDtoSchema, invalidPayload, 'auth.login')
    ).toThrow(DataContractError);
  });
});
````

## File: libs/data-access/auth/src/lib/validation/parse-with-zod.ts
````typescript
import { z } from 'zod';
import { DataContractError, ContractIssue } from '@techgear/util';

/**
 * Maps ZodIssue to ContractIssue without leaking Zod outside data-access.
 */
function mapZodIssues(issues: z.core.$ZodIssue[]): ContractIssue[] {
    return issues.map(issue => ({
        path: issue.path.filter((p): p is string | number => typeof p !== 'symbol'),
        message: issue.message,
    }));
}

/**
 * Parses payload with a Zod schema.
 * @param schema - Zod schema used to validate payload.
 * @param payload - Data to validate.
 * @param source - Source identifier (for example: 'auth.login').
 * @returns Validated and transformed data.
 * @throws DataContractError when validation fails.
 */
export function parseWithZod<T>(
    schema: z.ZodType<T>,
    payload: unknown,
    source: string
): T {
    const result = schema.safeParse(payload);

    if (!result.success) {
        throw new DataContractError(source, mapZodIssues(result.error.issues));
    }

    return result.data;
}
````

## File: libs/data-access/auth/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __authVitestInitDone__: boolean | undefined;
}

if (!globalThis.__authVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__authVitestInitDone__ = true;
}
````

## File: libs/data-access/auth/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/data-access/auth/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/data-access/auth/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/data-access/auth/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "files": ["src/test-setup.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
````

## File: libs/data-access/auth/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/data-access/cart/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/data-access/cart",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/data-access/cart/package.json
````json
{
  "name": "@techgear/data-access-cart",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/data-access-inventory": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
````

## File: libs/data-access/cart/project.json
````json
{
  "name": "data-access-cart",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/cart/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:cart", "type:data-access"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/libs/data-access/cart"],
      "options": {
        "project": "libs/data-access/cart/ng-package.json",
        "tsConfig": "libs/data-access/cart/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/data-access/cart/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "libs/data-access/cart/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/data-access/cart/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/data-access/cart/src/index.ts
````typescript
export * from './lib/models/cart.models';
export * from './lib/state/cart.store';
export * from './lib/storage/cart.storage';
export * from './lib/facade/cart-inventory.facade';
````

## File: libs/data-access/cart/src/lib/facade/cart-inventory.facade.ts
````typescript
import { Injectable, inject } from '@angular/core';
import { InventoryStore } from '@techgear/data-access-inventory';
import type { CartItem } from '../models/cart.models';
import { CartStore } from '../state/cart.store';

export interface SetQtyResult {
  success: boolean;
  requestedQty: number;
  appliedQty: number;
  limitedByStock: boolean;
}

export interface AddToCartResult {
  success: boolean;
  requestedQty: number;
  appliedQty: number;
  limitedByStock: boolean;
}

@Injectable({ providedIn: 'root' })
export class CartInventoryFacade {
  private readonly cartStore = inject(CartStore);
  private readonly inventoryStore = inject(InventoryStore);

  getStock(productId: number): number {
    return this.inventoryStore.getStock(productId);
  }

  addToCart(product: Omit<CartItem, 'quantity'>): boolean {
    return this.addToCartQty(product, 1).success;
  }

  addToCartQty(product: Omit<CartItem, 'quantity'>, requestedQty: number): AddToCartResult {
    const safeRequestedQty = Math.max(1, Math.floor(requestedQty));
    const available = this.inventoryStore.getStock(product.productId);
    const appliedQty = Math.min(safeRequestedQty, Math.max(available, 0));

    if (appliedQty <= 0) {
      return { success: false, requestedQty: safeRequestedQty, appliedQty: 0, limitedByStock: true };
    }

    this.cartStore.addItem(product, appliedQty);
    this.inventoryStore.adjustStock(product.productId, product.title, -appliedQty, 'Added to cart');

    return {
      success: appliedQty === safeRequestedQty,
      requestedQty: safeRequestedQty,
      appliedQty,
      limitedByStock: appliedQty !== safeRequestedQty,
    };
  }

  removeFromCart(productId: number): boolean {
    const item = this.cartStore.items().find((i) => i.productId === productId);
    if (!item) {
      return false;
    }

    this.cartStore.removeItem(productId);
    this.inventoryStore.adjustStock(productId, item.title, item.quantity, 'Removed from cart');
    return true;
  }

  setQty(productId: number, nextQty: number): SetQtyResult {
    const item = this.cartStore.items().find((i) => i.productId === productId);
    if (!item) {
      return { success: false, requestedQty: nextQty, appliedQty: 0, limitedByStock: false };
    }

    const prevQty = item.quantity;

    if (nextQty <= 0) {
      this.removeFromCart(productId);
      return { success: true, requestedQty: nextQty, appliedQty: 0, limitedByStock: false };
    }

    if (nextQty > prevQty) {
      const delta = nextQty - prevQty;
      const available = Math.max(this.inventoryStore.getStock(productId), 0);
      const appliedDelta = Math.min(delta, available);
      const appliedQty = prevQty + appliedDelta;

      if (appliedDelta === 0) {
        return { success: false, requestedQty: nextQty, appliedQty: prevQty, limitedByStock: true };
      }

      this.cartStore.updateQuantity(productId, appliedQty);
      this.inventoryStore.adjustStock(productId, item.title, -appliedDelta, 'Qty increased');

      return {
        success: appliedQty === nextQty,
        requestedQty: nextQty,
        appliedQty,
        limitedByStock: appliedQty !== nextQty,
      };
    }

    if (nextQty < prevQty) {
      const delta = prevQty - nextQty;
      this.cartStore.updateQuantity(productId, nextQty);
      this.inventoryStore.adjustStock(productId, item.title, delta, 'Qty decreased');
    }

    return { success: true, requestedQty: nextQty, appliedQty: nextQty, limitedByStock: false };
  }

  clearCart(): boolean {
    const items = this.cartStore.items();
    if (items.length === 0) {
      return false;
    }

    for (const item of items) {
      this.inventoryStore.adjustStock(item.productId, item.title, item.quantity, 'Cart cleared');
    }

    this.cartStore.clear();
    return true;
  }
}
````

## File: libs/data-access/cart/src/lib/models/cart.models.ts
````typescript
export interface CartItem {
    productId: number;
    title: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}

export interface Cart {
    items: CartItem[];
}
````

## File: libs/data-access/cart/src/lib/state/cart.store.spec.ts
````typescript
import {
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { type CartItem } from '../models/cart.models';
import { CartStorageService } from '../storage/cart.storage';
import { CartStore } from './cart.store';

describe('CartStore', () => {
  const productA: Omit<CartItem, 'quantity'> = {
    productId: 10,
    title: 'Gucci Bloom Eau de',
    price: 79.99,
    imageUrl: 'https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom/1.webp',
  };

  const productB: Omit<CartItem, 'quantity'> = {
    productId: 11,
    title: "Dior J'adore",
    price: 95,
    imageUrl: 'https://cdn.dummyjson.com/product-images/fragrances/dior-jadore/1.webp',
  };

  let injector: Injector;
  let store: ReturnType<typeof createStore>;
  let storageMock: {
    save: ReturnType<typeof vi.fn>;
    load: ReturnType<typeof vi.fn>;
    clear: ReturnType<typeof vi.fn>;
  };

  function createStore() {
    injector = Injector.create({
      providers: [CartStore, { provide: CartStorageService, useValue: storageMock }],
    });
    return runInInjectionContext(injector, () => injector.get(CartStore));
  }

  beforeEach(() => {
    storageMock = {
      save: vi.fn(),
      load: vi.fn(() => []),
      clear: vi.fn(),
    };

    store = createStore();
  });

  afterEach(() => {
    const maybeDestroyable = injector as Injector & { destroy?: () => void };
    maybeDestroyable.destroy?.();
  });

  it('storage vacío => estado inicial vacío', () => {
    store.loadFromStorage();

    expect(storageMock.load).toHaveBeenCalledTimes(1);
    expect(store.items()).toEqual([]);
    expect(store.totalItems()).toBe(0);
    expect(store.totalPrice()).toBe(0);
  });

  it('storage con items => loadFromStorage() hidrata', () => {
    const persistedItems: CartItem[] = [
      { ...productA, quantity: 2 },
      { ...productB, quantity: 1 },
    ];
    storageMock.load.mockReturnValue(persistedItems);

    store.loadFromStorage();

    expect(store.items()).toEqual(persistedItems);
    expect(store.totalItems()).toBe(3);
    expect(store.totalPrice()).toBe(254.98);
  });

  it('addItem => item presente + persiste', () => {
    store.addItem(productA, 2);

    expect(store.items()).toEqual([{ ...productA, quantity: 2 }]);
    expect(store.totalItems()).toBe(2);
    expect(store.totalPrice()).toBe(159.98);
    expect(storageMock.save).toHaveBeenCalledWith([{ ...productA, quantity: 2 }]);
  });

  it('updateQuantity => cantidad cambia + persiste + total recalcula', () => {
    store.addItem(productA, 1);
    store.addItem(productB, 1);

    store.updateQuantity(productA.productId, 3);

    expect(store.items()).toEqual([
      { ...productA, quantity: 3 },
      { ...productB, quantity: 1 },
    ]);
    expect(store.totalItems()).toBe(4);
    expect(store.totalPrice()).toBeCloseTo(334.97, 2);
    expect(storageMock.save).toHaveBeenLastCalledWith([
      { ...productA, quantity: 3 },
      { ...productB, quantity: 1 },
    ]);
  });

  it('removeItem => desaparece + persiste', () => {
    store.addItem(productA, 1);
    store.addItem(productB, 2);

    store.removeItem(productA.productId);

    expect(store.items()).toEqual([{ ...productB, quantity: 2 }]);
    expect(store.totalItems()).toBe(2);
    expect(store.totalPrice()).toBe(190);
    expect(storageMock.save).toHaveBeenLastCalledWith([{ ...productB, quantity: 2 }]);
  });
});
````

## File: libs/data-access/cart/src/lib/state/cart.store.ts
````typescript
import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CartStorageService } from '../storage/cart.storage';
import type { Cart, CartItem } from '../models/cart.models';

const initialState: Cart = {
    items: [],
};

export const CartStore = signalStore(
    { providedIn: 'root' },
    withState<Cart>(initialState),
    withComputed(({ items }) => ({
        totalItems: computed(() => items().reduce((sum: number, item: CartItem) => sum + item.quantity, 0)),
        totalPrice: computed(() => items().reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0)),
    })),
    withMethods((store, storage = inject(CartStorageService)) => ({
        addItem(product: Omit<CartItem, 'quantity'>, quantity = 1) {
            const safeQty = Math.max(1, Math.floor(quantity));
            const existing = store.items().find((i: CartItem) => i.productId === product.productId);
            const newItems = existing
                ? store.items().map((i: CartItem) => i.productId === product.productId ? { ...i, quantity: i.quantity + safeQty } : i)
                : [...store.items(), { ...product, quantity: safeQty }];

            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        removeItem(productId: number) {
            const newItems = store.items().filter((i: CartItem) => i.productId !== productId);
            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        updateQuantity(productId: number, quantity: number) {
            if (quantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const newItems = store.items().map((i: CartItem) => i.productId === productId ? { ...i, quantity } : i);
            patchState(store, { items: newItems });
            storage.save(newItems);
        },
        clear() {
            patchState(store, initialState);
            storage.clear();
        },
        loadFromStorage() {
            // Hydrate only once while state is empty to avoid overwriting runtime changes.
            if (store.items().length > 0) {
                return;
            }
            const items = storage.load();
            patchState(store, { items });
        },
    }))
);
````

## File: libs/data-access/cart/src/lib/storage/cart.storage.ts
````typescript
import { Injectable } from '@angular/core';
import type { CartItem } from '../models/cart.models';

const CART_KEY = 'techgear_cart';

@Injectable({ providedIn: 'root' })
export class CartStorageService {
    save(items: CartItem[]): void {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    }

    load(): CartItem[] {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    }

    clear(): void {
        localStorage.removeItem(CART_KEY);
    }
}
````

## File: libs/data-access/cart/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __dataAccessCartVitestInitDone__: boolean | undefined;
}

if (!globalThis.__dataAccessCartVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__dataAccessCartVitestInitDone__ = true;
}
````

## File: libs/data-access/cart/tsconfig.json
````json
{
    "extends": "../../../tsconfig.base.json",
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true
    },
    "files": [],
    "include": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        },
        {
            "path": "./tsconfig.spec.json"
        }
    ]
}
````

## File: libs/data-access/cart/tsconfig.lib.json
````json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "outDir": "../../../dist/out-tsc",
        "types": []
    },
    "files": [
        "src/index.ts"
    ],
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test-setup.ts",
        "**/*.spec.ts"
    ]
}
````

## File: libs/data-access/cart/tsconfig.lib.prod.json
````json
{
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
        "declarationMap": false
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
````

## File: libs/data-access/cart/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/data-access/cart/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/data-access/categories/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/data-access/categories/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/data-access/categories",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/data-access/categories/package.json
````json
{
  "name": "@techgear/data-access/categories",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/util": "*",
    "rxjs": "~7.8.0",
    "zod": "^4.3.6"
  },
  "sideEffects": false
}
````

## File: libs/data-access/categories/project.json
````json
{
  "name": "categories",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/categories/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["type:data-access"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/data-access/categories/ng-package.json",
        "tsConfig": "libs/data-access/categories/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/data-access/categories/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/data-access/categories/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/data-access/categories/README.md
````markdown
# categories

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test categories` to execute the unit tests.
````

## File: libs/data-access/categories/src/index.ts
````typescript
export * from './lib/api/categories.api';
export * from './lib/contracts/categories.contracts';
export * from './lib/models/categories.models';
export * from './lib/state/categories.store';
````

## File: libs/data-access/categories/src/lib/api/categories.api.ts
````typescript
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoriesListDtoSchema } from '../contracts/categories.contracts';
import { mapCategories } from '../models/categories.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const CATEGORIES_API_BASE_URL = new InjectionToken<string>(
  'CATEGORIES_API_BASE_URL'
);

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(CATEGORIES_API_BASE_URL);

  getCategories() {
    return this.http.get<unknown>(`${this.baseUrl}/products/categories`).pipe(
      map((response) => {
        const dto = parseWithZod(
          CategoriesListDtoSchema,
          response,
          'categories.list'
        );
        return mapCategories(dto);
      })
    );
  }
}
````

## File: libs/data-access/categories/src/lib/contracts/categories.contracts.ts
````typescript
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
````

## File: libs/data-access/categories/src/lib/models/categories.models.ts
````typescript
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
````

## File: libs/data-access/categories/src/lib/state/categories.store.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CategoriesApiService } from '../api/categories.api';
import { CategoriesStore } from './categories.store';

describe('CategoriesStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoriesStore,
        {
          provide: CategoriesApiService,
          useValue: {
            getCategories: vi.fn(() => of([])),
          },
        },
      ],
    });
  });

  it('should expose an empty list by default', () => {
    const store = TestBed.inject(CategoriesStore);

    expect(store.items()).toEqual([]);
  });
});
````

## File: libs/data-access/categories/src/lib/state/categories.store.ts
````typescript
import { Injectable, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoriesApiService } from '../api/categories.api';
import { Category } from '../models/categories.models';

@Injectable({ providedIn: 'root' })
export class CategoriesStore {
  private readonly api = inject(CategoriesApiService);

  private readonly listResource = rxResource<Category[], void>({
    defaultValue: [],
    stream: () => this.api.getCategories(),
  });

  readonly items = computed(() => this.listResource.value());
  readonly status = computed(() => this.listResource.status());
  readonly error = computed(() => this.listResource.error());

  loadList(): void {
    this.listResource.reload();
  }
}
````

## File: libs/data-access/categories/src/lib/validation/parse-with-zod.ts
````typescript
import { z } from 'zod';
import { ContractIssue, DataContractError } from '@techgear/util';

/**
 * Note: temporary duplicate of the auth/products helper to avoid creating a shared lib now.
 * It will be consolidated in a later phase.
 */

function mapZodIssues(issues: z.core.$ZodIssue[]): ContractIssue[] {
  return issues.map((issue) => ({
    path: issue.path.filter((p): p is string | number => typeof p !== 'symbol'),
    message: issue.message,
  }));
}

export function parseWithZod<T>(
  schema: z.ZodType<T>,
  payload: unknown,
  source: string
): T {
  const result = schema.safeParse(payload);

  if (!result.success) {
    throw new DataContractError(source, mapZodIssues(result.error.issues));
  }

  return result.data;
}
````

## File: libs/data-access/categories/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __categoriesVitestInitDone__: boolean | undefined;
}

if (!globalThis.__categoriesVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__categoriesVitestInitDone__ = true;
}
````

## File: libs/data-access/categories/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/data-access/categories/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/data-access/categories/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/data-access/categories/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/data-access/categories/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/data-access/inventory/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/data-access/inventory",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/data-access/inventory/package.json
````json
{
  "name": "@techgear/data-access-inventory",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/util": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
````

## File: libs/data-access/inventory/project.json
````json
{
  "name": "data-access-inventory",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/inventory/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:inventory", "type:data-access"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/libs/data-access/inventory"],
      "options": {
        "project": "libs/data-access/inventory/ng-package.json",
        "tsConfig": "libs/data-access/inventory/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/data-access/inventory/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "libs/data-access/inventory/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/data-access/inventory/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/data-access/inventory/src/index.ts
````typescript
export * from './lib/models/inventory.models';
export * from './lib/state/inventory.store';
export * from './lib/storage/inventory.storage';
````

## File: libs/data-access/inventory/src/lib/models/inventory.models.ts
````typescript
export interface InventoryItem {
    productId: number;
    productName: string;
    stock: number;
    lastUpdated: Date;
}

export interface StockMovement {
    id: string;
    productId: number;
    productName: string;
    delta: number;
    timestamp: Date;
    reason?: string;
}
````

## File: libs/data-access/inventory/src/lib/state/inventory.store.spec.ts
````typescript
import { Injector, runInInjectionContext } from '@angular/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { InventoryStorageService } from '../storage/inventory.storage';
import { InventoryStore } from './inventory.store';

describe('InventoryStore', () => {
  let injector: Injector;
  let storageMock: {
    load: ReturnType<typeof vi.fn>;
    save: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    storageMock = {
      load: vi.fn(() => ({ items: [], movements: [] })),
      save: vi.fn(),
    };

    injector = Injector.create({
      providers: [
        InventoryStore,
        { provide: InventoryStorageService, useValue: storageMock },
      ],
    });
  });

  it('adjustStock should create an item and persist the movement', () => {
    const store = runInInjectionContext(injector, () => injector.get(InventoryStore));

    store.adjustStock(7, 'Headphones', 3, 'Seed');

    expect(store.getStock(7)).toBe(3);
    expect(store.items()).toHaveLength(1);
    expect(store.movements()).toHaveLength(1);
    expect(storageMock.save).toHaveBeenCalledTimes(1);
  });
});
````

## File: libs/data-access/inventory/src/lib/state/inventory.store.ts
````typescript
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { createId } from '@techgear/util';
import { InventoryStorageService } from '../storage/inventory.storage';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

interface InventoryState {
    items: InventoryItem[];
    movements: StockMovement[];
}

const initialState: InventoryState = {
    items: [],
    movements: [],
};

export const InventoryStore = signalStore(
    { providedIn: 'root' },
    withState<InventoryState>(initialState),
    withMethods((store, storage = inject(InventoryStorageService)) => ({
        adjustStock(productId: number, productName: string, delta: number, reason?: string) {
            const existing = store.items().find((i: InventoryItem) => i.productId === productId);
            const newStock = (existing?.stock ?? 0) + delta;

            const newItems = existing
                ? store.items().map((i: InventoryItem) => i.productId === productId ? { ...i, stock: newStock, lastUpdated: new Date() } : i)
                : [...store.items(), { productId, productName, stock: newStock, lastUpdated: new Date() }];

            const movement: StockMovement = {
                id: createId(),
                productId,
                productName,
                delta,
                timestamp: new Date(),
                reason,
            };

            const newMovements = [...store.movements(), movement];

            patchState(store, { items: newItems, movements: newMovements });
            storage.save({ items: newItems, movements: newMovements });
        },
        getStock(productId: number): number {
            return store.items().find((i: InventoryItem) => i.productId === productId)?.stock ?? 0;
        },
        seedMissingProducts(products: { id: number; title: string }[], defaultStock = 5) {
            const existingIds = new Set(store.items().map((item) => item.productId));
            const missingProducts = products.filter((product) => !existingIds.has(product.id));

            if (missingProducts.length === 0) {
                return;
            }

            const seededItems: InventoryItem[] = missingProducts.map((p) => ({
                productId: p.id,
                productName: p.title,
                stock: defaultStock,
                lastUpdated: new Date(),
            }));

            const newItems = [...store.items(), ...seededItems];

            patchState(store, { items: newItems });
            storage.save({ items: newItems, movements: store.movements() });
        },
        seedIfEmpty(products: { id: number; title: string }[], defaultStock = 5) {
            if (store.items().length > 0) {
                return;
            }

            this.seedMissingProducts(products, defaultStock);
        },
        loadFromStorage() {
            const data = storage.load();
            patchState(store, data);
        },
    }))
);
````

## File: libs/data-access/inventory/src/lib/storage/inventory.storage.ts
````typescript
import { Injectable } from '@angular/core';
import type { InventoryItem, StockMovement } from '../models/inventory.models';

const INVENTORY_KEY = 'techgear_inventory';

interface StoredInventory {
    items: InventoryItem[];
    movements: StockMovement[];
}

@Injectable({ providedIn: 'root' })
export class InventoryStorageService {
    save(data: StoredInventory): void {
        localStorage.setItem(INVENTORY_KEY, JSON.stringify(data));
    }

    load(): StoredInventory {
        const data = localStorage.getItem(INVENTORY_KEY);
        if (!data) return { items: [], movements: [] };

        const parsed = JSON.parse(data) as {
            items?: Array<InventoryItem & { lastUpdated: string | Date }>;
            movements?: Array<StockMovement & { timestamp: string | Date }>;
        };

        const parsedItems = Array.isArray(parsed.items) ? parsed.items : [];
        const parsedMovements = Array.isArray(parsed.movements) ? parsed.movements : [];

        return {
            items: parsedItems.map((item) => ({
                ...item,
                lastUpdated: new Date(item.lastUpdated),
            })),
            movements: parsedMovements.map((movement) => ({
                ...movement,
                timestamp: new Date(movement.timestamp),
            })),
        };
    }
}
````

## File: libs/data-access/inventory/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __dataAccessInventoryVitestInitDone__: boolean | undefined;
}

if (!globalThis.__dataAccessInventoryVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__dataAccessInventoryVitestInitDone__ = true;
}
````

## File: libs/data-access/inventory/tsconfig.json
````json
{
    "extends": "../../../tsconfig.base.json",
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true
    },
    "files": [],
    "include": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        },
        {
            "path": "./tsconfig.spec.json"
        }
    ]
}
````

## File: libs/data-access/inventory/tsconfig.lib.json
````json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "outDir": "../../../dist/out-tsc",
        "types": []
    },
    "files": [
        "src/index.ts"
    ],
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test-setup.ts",
        "**/*.spec.ts"
    ]
}
````

## File: libs/data-access/inventory/tsconfig.lib.prod.json
````json
{
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
        "declarationMap": false
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
````

## File: libs/data-access/inventory/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/data-access/inventory/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/data-access/products/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/data-access/products/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/data-access/products",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/data-access/products/package.json
````json
{
  "name": "@techgear/data-access/products",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/util": "*",
    "rxjs": "~7.8.0",
    "zod": "^4.3.6"
  },
  "sideEffects": false
}
````

## File: libs/data-access/products/project.json
````json
{
  "name": "products",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/products/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:products", "type:data-access"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/data-access/products/ng-package.json",
        "tsConfig": "libs/data-access/products/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/data-access/products/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/data-access/products/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/data-access/products/README.md
````markdown
# products

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test products` to execute the unit tests.
````

## File: libs/data-access/products/src/index.ts
````typescript
export * from './lib/api/products.api';
export * from './lib/contracts/products.contracts';
export * from './lib/models/products.models';
export * from './lib/state/products.store';
````

## File: libs/data-access/products/src/lib/api/products.api.ts
````typescript
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  ProductDeleteResponseSchema,
  ProductDtoSchema,
  ProductsListDtoSchema,
} from '../contracts/products.contracts';
import {
  ProductCreateRequest,
  ProductUpdateRequest,
  ProductsListParams,
  mapProduct,
  mapProducts,
} from '../models/products.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const PRODUCTS_API_BASE_URL = new InjectionToken<string>('PRODUCTS_API_BASE_URL');

@Injectable({ providedIn: 'root' })
export class ProductsApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(PRODUCTS_API_BASE_URL);

  getProducts(params?: ProductsListParams) {
    return this.http
      .get<unknown>(`${this.baseUrl}/products`, {
        params: buildProductsParams(params),
      })
      .pipe(
        map((response) => {
          const dto = parseWithZod(ProductsListDtoSchema, response, 'products.list');
          return mapProducts(dto.products);
        })
      );
  }

  getProductById(id: number) {
    return this.http.get<unknown>(`${this.baseUrl}/products/${id}`).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.getOne');
        return mapProduct(dto);
      })
    );
  }

  createProduct(payload: ProductCreateRequest) {
    return this.http.post<unknown>(`${this.baseUrl}/products/add`, payload).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.create');
        return mapProduct(dto);
      })
    );
  }

  updateProduct(id: number, payload: ProductUpdateRequest) {
    return this.http.put<unknown>(`${this.baseUrl}/products/${id}`, payload).pipe(
      map((response) => {
        const dto = parseWithZod(ProductDtoSchema, response, 'products.update');
        return mapProduct(dto);
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<unknown>(`${this.baseUrl}/products/${id}`).pipe(
      map((response) => {
        parseWithZod(ProductDeleteResponseSchema, response, 'products.delete');
        return true;
      })
    );
  }
}

function buildProductsParams(params?: ProductsListParams): HttpParams {
  const query: Record<string, string> = {};

  if (params?.limit !== undefined) {
    query['limit'] = String(params.limit);
  }

  if (params?.offset !== undefined) {
    query['skip'] = String(params.offset);
  }

  return new HttpParams({ fromObject: query });
}
````

## File: libs/data-access/products/src/lib/contracts/products.contracts.ts
````typescript
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
````

## File: libs/data-access/products/src/lib/models/products.models.ts
````typescript
import { ProductDto } from '../contracts/products.contracts';

export type ProductsListParams = {
  limit?: number;
  offset?: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  image: string | null;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ProductCategory | null;
  categoryId: string | null;
};

export type ProductCreateRequest = {
  title: string;
  price: number;
  description: string;
  category?: string;
  images?: string[];
};

export type ProductUpdateRequest = Partial<ProductCreateRequest>;

function humanizeSlug(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function mapCategory(slug: string | undefined): ProductCategory | null {
  if (!slug) {
    return null;
  }

  return {
    id: slug,
    name: humanizeSlug(slug),
    image: null,
  };
}

export function mapCategoryFromSlug(slug: string | undefined): ProductCategory | null {
  return mapCategory(slug);
}

function normalizeImages(dto: ProductDto): string[] {
  const images = Array.isArray(dto.images)
    ? dto.images.filter((image) => typeof image === 'string' && image.length > 0)
    : [];

  if (dto.thumbnail && !images.includes(dto.thumbnail)) {
    return [dto.thumbnail, ...images];
  }

  return images;
}

export function mapProduct(dto: ProductDto): Product {
  const category = mapCategory(dto.category);

  return {
    id: dto.id,
    title: dto.title,
    price: dto.price,
    description: dto.description,
    images: normalizeImages(dto),
    category,
    categoryId: category?.id ?? null,
  };
}

export function mapProducts(dtos: ProductDto[]): Product[] {
  return dtos.map(mapProduct);
}

export function createProductFromRequest(
  id: number,
  payload: ProductCreateRequest
): Product {
  return {
    id,
    title: payload.title,
    price: payload.price,
    description: payload.description,
    images: payload.images?.filter(Boolean) ?? [],
    category: mapCategory(payload.category),
    categoryId: payload.category ?? null,
  };
}

export function applyProductUpdate(
  current: Product,
  patch: ProductUpdateRequest
): Product {
  return {
    ...current,
    title: patch.title ?? current.title,
    price: patch.price ?? current.price,
    description: patch.description ?? current.description,
    images: patch.images?.filter(Boolean) ?? current.images,
    category: patch.category !== undefined ? mapCategory(patch.category) : current.category,
    categoryId: patch.category ?? current.categoryId,
  };
}
````

## File: libs/data-access/products/src/lib/state/products.store.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductsApiService } from '../api/products.api';
import { Product, ProductCreateRequest, ProductUpdateRequest } from '../models/products.models';
import { ProductsStore } from './products.store';

const LOCAL_STATE_KEY = 'techgear_products_local_state_v1';

function makeProduct(id: number, title = `Product ${id}`): Product {
  return {
    id,
    title,
    price: id * 10,
    description: `Description ${id}`,
    images: [`https://img.example/${id}.png`],
    category: { id: 'beauty', name: 'Beauty', image: null },
    categoryId: 'beauty',
  };
}

describe('ProductsStore optimistic mutations', () => {
  let store: ProductsStore;
  let apiMock: {
    getProducts: ReturnType<typeof vi.fn>;
    getProductById: ReturnType<typeof vi.fn>;
    createProduct: ReturnType<typeof vi.fn>;
    updateProduct: ReturnType<typeof vi.fn>;
    deleteProduct: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    localStorage.removeItem(LOCAL_STATE_KEY);

    apiMock = {
      getProducts: vi.fn(() => of([])),
      getProductById: vi.fn(() => of(null)),
      createProduct: vi.fn(),
      updateProduct: vi.fn(),
      deleteProduct: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProductsStore,
        { provide: ProductsApiService, useValue: apiMock },
      ],
    });
  });

  function initStoreWith(items: Product[]): ProductsStore {
    localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(items));
    return TestBed.inject(ProductsStore);
  }

  it('create optimistic success: inserts immediately and keeps committed product (updated id)', async () => {
    store = initStoreWith([makeProduct(1)]);
    const payload: ProductCreateRequest = {
      title: 'New Product',
      price: 99,
      description: 'New product description',
      category: 'beauty',
      images: ['https://img.example/new.png'],
    };

    const create$ = new Subject<Product>();
    apiMock.createProduct.mockReturnValue(create$.asObservable());

    const promise = store.createOptimistic(payload);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items()[0].title).toBe('New Product');
    expect(store.items()[0].id).toBeLessThan(0);

    create$.next({ ...makeProduct(100), title: payload.title });
    create$.complete();

    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().some((p) => p.id === 100 && p.title === 'New Product')).toBe(true);
  });

  it('create optimistic failure: inserts immediately then rollbacks and sets mutationError', async () => {
    const base = [makeProduct(1)];
    store = initStoreWith(base);

    const create$ = new Subject<Product>();
    apiMock.createProduct.mockReturnValue(create$.asObservable());

    const promise = store.createOptimistic({
      title: 'Failing Product',
      price: 50,
      description: 'Will fail',
      category: 'beauty',
      images: ['https://img.example/fail.png'],
    });

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().length).toBe(2);
    expect(store.items()[0].title).toBe('Failing Product');

    create$.error(new Error('create failed'));

    await expect(promise).rejects.toThrow('create failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('create failed');
    expect(store.items()).toEqual(base);
  });

  it('update optimistic success: updates immediately and keeps committed value', async () => {
    store = initStoreWith([makeProduct(1), makeProduct(2)]);
    const patch: ProductUpdateRequest = { title: 'Updated Product', price: 123 };

    const update$ = new Subject<Product>();
    apiMock.updateProduct.mockReturnValue(update$.asObservable());

    const promise = store.updateOptimistic(1, patch);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Updated Product');
    expect(store.items().find((p) => p.id === 1)?.price).toBe(123);

    update$.next({ ...makeProduct(1), title: 'Updated Product', price: 123 });
    update$.complete();

    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Updated Product');
  });

  it('update optimistic failure: updates immediately then rollbacks to previous value', async () => {
    const original = [makeProduct(1), makeProduct(2)];
    store = initStoreWith(original);

    const update$ = new Subject<Product>();
    apiMock.updateProduct.mockReturnValue(update$.asObservable());

    const promise = store.updateOptimistic(1, { title: 'Transient title' });

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().find((p) => p.id === 1)?.title).toBe('Transient title');

    update$.error(new Error('update failed'));

    await expect(promise).rejects.toThrow('update failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('update failed');
    expect(store.items()).toEqual(original);
  });

  it('delete optimistic success: removes immediately and keeps removed on confirm', async () => {
    store = initStoreWith([makeProduct(1), makeProduct(2)]);
    const del$ = new Subject<boolean>();
    apiMock.deleteProduct.mockReturnValue(del$.asObservable());

    const promise = store.deleteOptimistic(1);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().some((p) => p.id === 1)).toBe(false);

    del$.next(true);
    del$.complete();
    await promise;

    expect(store.mutationStatus()).toBe('idle');
    expect(store.mutationError()).toBeNull();
    expect(store.items().some((p) => p.id === 1)).toBe(false);
  });

  it('delete optimistic failure: removes immediately then rollbacks reinserting product', async () => {
    const original = [makeProduct(1), makeProduct(2)];
    store = initStoreWith(original);

    const del$ = new Subject<boolean>();
    apiMock.deleteProduct.mockReturnValue(del$.asObservable());

    const promise = store.deleteOptimistic(1);

    expect(store.mutationStatus()).toBe('pending');
    expect(store.items().some((p) => p.id === 1)).toBe(false);

    del$.error(new Error('delete failed'));

    await expect(promise).rejects.toThrow('delete failed');
    expect(store.mutationStatus()).toBe('error');
    expect(store.mutationError()).toContain('delete failed');
    expect(store.items()).toEqual(original);
  });
});
````

## File: libs/data-access/products/src/lib/state/products.store.ts
````typescript
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { of } from 'rxjs';
import { ProductsApiService } from '../api/products.api';
import {
  applyProductUpdate,
  createProductFromRequest,
  Product,
  ProductCreateRequest,
  ProductsListParams,
  ProductUpdateRequest,
} from '../models/products.models';

export type ProductsMutationStatus = 'idle' | 'pending' | 'error';
const PRODUCTS_LOCAL_STATE_KEY = 'techgear_products_local_state_v1';

@Injectable({ providedIn: 'root' })
export class ProductsStore {
  private readonly api = inject(ProductsApiService);

  private readonly listParams = signal<ProductsListParams | null>(null);
  private readonly selectedId = signal<number | null>(null);
  private readonly localItems = signal<Product[] | null>(null);
  private readonly selectedOverride = signal<Product | null | undefined>(undefined);
  private readonly pendingById = signal<Record<number, true>>({});
  private readonly tempIdSeed = signal(-1);
  private readonly mutationStatusState = signal<ProductsMutationStatus>('idle');
  private readonly mutationErrorState = signal<string | null>(null);

  constructor() {
    this.loadLocalProjection();

    effect(() => {
      this.persistLocalProjection(this.localItems());
    });
  }

  private readonly listResource = rxResource<Product[], ProductsListParams | null>({
    params: () => this.listParams(),
    defaultValue: [],
    stream: ({ params }) =>
      params === null ? of([]) : this.api.getProducts(params),
  });

  private readonly selectedResource = rxResource<Product | null, number | null>({
    params: () => this.selectedId(),
    defaultValue: null,
    stream: ({ params }) =>
      params === null ? of(null) : this.api.getProductById(params),
  });

  readonly items = computed(() => this.localItems() ?? this.listResource.value());
  readonly listStatus = computed(() => this.listResource.status());
  readonly listError = computed(() => this.listResource.error());
  readonly isLoading = this.listResource.isLoading;
  readonly error = this.listResource.error;

  readonly selected = computed(() => {
    const id = this.selectedId();
    if (id !== null) {
      const localSelected = this.items().find((item) => item.id === id);
      if (localSelected) {
        return localSelected;
      }
    }

    const override = this.selectedOverride();
    return override === undefined ? this.selectedResource.value() : override;
  });
  readonly selectedStatus = computed(() => this.selectedResource.status());
  readonly selectedError = computed(() => this.selectedResource.error());
  readonly mutationStatus = computed(() => this.mutationStatusState());
  readonly mutationError = computed(() => this.mutationErrorState());
  readonly isDemoMode = computed(() => true);
  readonly demoModeMessage = computed(
    () =>
      'Demo mode: CRUD calls use DummyJSON simulated mutations. Changes are optimistic and only persisted in local UI state.'
  );
  readonly hasPendingMutations = computed(
    () => Object.keys(this.pendingById()).length > 0
  );

  setListParams(params: ProductsListParams): void {
    this.listParams.set({ ...params });
  }

  loadList(params?: ProductsListParams): void {
    this.listParams.set({ ...(params ?? {}) });
  }

  ensureListLoaded(params: ProductsListParams): void {
    const currentParams = this.listParams();
    const hasLocalProjection = this.localItems() !== null;
    const hasResourceData = this.listStatus() === 'resolved' && this.listResource.value().length >= 0;

    if (currentParams && areSameParams(currentParams, params) && (hasLocalProjection || hasResourceData)) {
      return;
    }

    this.loadList(params);
  }

  reloadList(): void {
    this.listResource.reload();
  }

  loadOne(id: number): void {
    this.selectedId.set(id);
    this.selectedOverride.set(undefined);
  }

  clearSelected(): void {
    this.selectedId.set(null);
    this.selectedOverride.set(null);
  }

  reloadSelected(): void {
    this.selectedOverride.set(undefined);
    this.selectedResource.reload();
  }

  isMutationPending(id: number): boolean {
    return !!this.pendingById()[id];
  }

  async createOptimistic(payload: ProductCreateRequest): Promise<Product> {
    const snapshot = this.ensureMutableList();
    const tempId = this.nextTempId();
    const optimistic = createProductFromRequest(tempId, payload);

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(tempId, true);
    this.localItems.set([optimistic, ...snapshot]);

    try {
      const created = await firstValueFrom(this.api.createProduct(payload));
      const committed = { ...optimistic, ...created };
      const next = this.items().map((item) => (item.id === tempId ? committed : item));
      this.localItems.set(next);
      this.setPending(tempId, false);
      if (committed.id !== tempId) {
        this.setPending(committed.id, false);
      }
      this.mutationStatusState.set('idle');
      return committed;
    } catch (error) {
      this.localItems.set(snapshot);
      this.setPending(tempId, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  async updateOptimistic(id: number, payload: ProductUpdateRequest): Promise<Product> {
    const snapshot = this.ensureMutableList();
    const current = snapshot.find((item) => item.id === id);
    if (!current) {
      throw new Error('Product not found in current list');
    }

    const optimistic = applyProductUpdate(current, payload);

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(id, true);
    this.localItems.set(snapshot.map((item) => (item.id === id ? optimistic : item)));
    if (this.selected()?.id === id) {
      this.selectedOverride.set(optimistic);
    }

    try {
      const updated = await firstValueFrom(this.api.updateProduct(id, payload));
      const committed = { ...optimistic, ...updated, id };
      const next = this.items().map((item) => (item.id === id ? committed : item));
      this.localItems.set(next);
      if (this.selected()?.id === id) {
        this.selectedOverride.set(committed);
      }
      this.setPending(id, false);
      this.mutationStatusState.set('idle');
      return committed;
    } catch (error) {
      this.localItems.set(snapshot);
      if (this.selected()?.id === id) {
        this.selectedOverride.set(current);
      }
      this.setPending(id, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  async deleteOptimistic(id: number): Promise<void> {
    const snapshot = this.ensureMutableList();
    const exists = snapshot.some((item) => item.id === id);
    if (!exists) {
      return;
    }

    this.mutationStatusState.set('pending');
    this.mutationErrorState.set(null);
    this.setPending(id, true);
    this.localItems.set(snapshot.filter((item) => item.id !== id));
    if (this.selected()?.id === id) {
      this.selectedOverride.set(null);
    }

    try {
      await firstValueFrom(this.api.deleteProduct(id));
      this.setPending(id, false);
      this.mutationStatusState.set('idle');
    } catch (error) {
      this.localItems.set(snapshot);
      this.setPending(id, false);
      this.mutationStatusState.set('error');
      this.mutationErrorState.set(this.formatMutationError(error));
      throw error;
    }
  }

  private ensureMutableList(): Product[] {
    const current = this.items();
    const snapshot = current.map((item) => ({ ...item, images: [...item.images] }));
    this.localItems.set(snapshot);
    return snapshot;
  }

  private setPending(id: number, pending: boolean): void {
    this.pendingById.update((current) => {
      if (!pending) {
        const { [id]: _, ...rest } = current;
        return rest;
      }

      return {
        ...current,
        [id]: true,
      };
    });
  }

  private nextTempId(): number {
    const next = this.tempIdSeed();
    this.tempIdSeed.set(next - 1);
    return next;
  }

  private formatMutationError(error: unknown): string {
    if (error instanceof Error) {
      return `Demo mode rollback: ${error.message}`;
    }

    return 'Demo mode rollback: unable to persist product changes. Local state was reverted.';
  }

  private loadLocalProjection(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const raw = localStorage.getItem(PRODUCTS_LOCAL_STATE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Product[];
      if (Array.isArray(parsed)) {
        this.localItems.set(
          parsed.map((item) => ({
            ...item,
            images: Array.isArray(item.images) ? item.images : [],
          }))
        );
      }
    } catch {
      localStorage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
    }
  }

  private persistLocalProjection(items: Product[] | null): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    if (!items || items.length === 0) {
      localStorage.removeItem(PRODUCTS_LOCAL_STATE_KEY);
      return;
    }

    localStorage.setItem(PRODUCTS_LOCAL_STATE_KEY, JSON.stringify(items));
  }
}

function areSameParams(
  current: ProductsListParams,
  next: ProductsListParams
): boolean {
  return (current.limit ?? null) === (next.limit ?? null) &&
    (current.offset ?? null) === (next.offset ?? null);
}
````

## File: libs/data-access/products/src/lib/validation/parse-with-zod.ts
````typescript
import { z } from 'zod';
import { DataContractError, ContractIssue } from '@techgear/util';

/**
 * Note: temporary duplicate of the auth helper to avoid creating a shared lib now.
 * It will be consolidated in a later phase.
 */

function mapZodIssues(issues: z.core.$ZodIssue[]): ContractIssue[] {
  return issues.map((issue) => ({
    path: issue.path.filter((p): p is string | number => typeof p !== 'symbol'),
    message: issue.message,
  }));
}

export function parseWithZod<T>(
  schema: z.ZodType<T>,
  payload: unknown,
  source: string
): T {
  const result = schema.safeParse(payload);

  if (!result.success) {
    throw new DataContractError(source, mapZodIssues(result.error.issues));
  }

  return result.data;
}
````

## File: libs/data-access/products/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __dataAccessProductsVitestInitDone__: boolean | undefined;
}

if (!globalThis.__dataAccessProductsVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__dataAccessProductsVitestInitDone__ = true;
}
````

## File: libs/data-access/products/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/data-access/products/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/data-access/products/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/data-access/products/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/data-access/products/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../categories/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/admin-inventory/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/features/admin-inventory",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/features/admin-inventory/package.json
````json
{
  "name": "@techgear/features-admin-inventory",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/data-access-inventory": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
````

## File: libs/features/admin-inventory/project.json
````json
{
  "name": "features-admin-inventory",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/admin-inventory/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:inventory", "type:feature"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/libs/features/admin-inventory"],
      "options": {
        "project": "libs/features/admin-inventory/ng-package.json",
        "tsConfig": "libs/features/admin-inventory/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/features/admin-inventory/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "libs/features/admin-inventory/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/admin-inventory/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/admin-inventory/src/index.ts
````typescript
export * from './lib/inventory-dashboard/inventory-dashboard.component';
````

## File: libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.html
````html
<section class="tg-space-y-6">
  <div
    class="tg-flex tg-flex-col tg-gap-4 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 sm:tg-flex-row sm:tg-items-center sm:tg-justify-between"
  >
    <div>
      <h2 class="tg-text-2xl tg-font-semibold tg-text-slate-900">Inventory Dashboard</h2>
      <p class="tg-mt-1 tg-text-sm tg-text-slate-500">
        Data source: localStorage (key <code class="tg-font-mono">techgear_inventory</code>) through
        <code class="tg-font-mono">InventoryStore</code>.
      </p>
    </div>
  </div>

  <div class="tg-grid tg-gap-4 sm:tg-grid-cols-3">
    <article class="tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-4">
      <p class="tg-text-sm tg-text-slate-500">Products in inventory</p>
      <p class="tg-mt-2 tg-text-2xl tg-font-bold tg-text-slate-900">{{ totalProducts() }}</p>
    </article>
    <article class="tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-4">
      <p class="tg-text-sm tg-text-slate-500">Total units</p>
      <p class="tg-mt-2 tg-text-2xl tg-font-bold tg-text-slate-900">{{ totalUnits() }}</p>
    </article>
    <article class="tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-4">
      <p class="tg-text-sm tg-text-slate-500">Recorded movements</p>
      <p class="tg-mt-2 tg-text-2xl tg-font-bold tg-text-slate-900">{{ totalMovements() }}</p>
    </article>
  </div>

  <form
    class="tg-grid tg-gap-4 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 md:tg-grid-cols-2"
    [formGroup]="movementForm"
    (ngSubmit)="onAdjustStockSubmit()"
  >
    <div class="md:tg-col-span-2 tg-rounded-lg tg-bg-slate-50 tg-p-3 tg-text-sm tg-text-slate-600">
      Select movement details instead of entering free text. This reduces mistakes and speeds up inventory updates.
    </div>

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Product source</span>
      <select
        formControlName="productMode"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      >
        <option value="existing">Existing product</option>
        <option value="new">New product</option>
      </select>
    </label>

    @if (movementForm.controls.productMode.value === 'existing') {
    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Product</span>
      <select
        formControlName="selectedProductId"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      >
        <option [value]="0">Select a product</option>
        @for (item of selectableProducts(); track item.productId) {
        <option [value]="item.productId">
          #{{ item.productId }} - {{ item.productName }} (stock: {{ item.stock }})
        </option>
        }
      </select>
    </label>
    } @else {
    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">New product ID</span>
      <input
        type="number"
        min="1"
        formControlName="newProductId"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      />
    </label>

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">New product name</span>
      <input
        type="text"
        formControlName="newProductName"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      />
    </label>
    }

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Movement type</span>
      <select
        formControlName="movementType"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      >
        <option value="in">Entry (+)</option>
        <option value="out">Exit (-)</option>
      </select>
    </label>

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Quantity</span>
      <input
        type="number"
        min="1"
        formControlName="quantity"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      />
    </label>

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Reason</span>
      <select
        formControlName="reasonPreset"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      >
        <option value="">Select a reason</option>
        <option value="purchase">Purchase</option>
        <option value="sale">Sale</option>
        <option value="restock">Restock</option>
        <option value="return">Return</option>
        <option value="damage">Damage/Loss</option>
        <option value="audit">Inventory audit</option>
        <option value="other">Other</option>
      </select>
    </label>

    @if (movementForm.controls.reasonPreset.value === 'other') {
    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Other reason</span>
      <input
        type="text"
        formControlName="reasonOther"
        class="tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      />
    </label>
    }

    <div class="md:tg-col-span-2 tg-flex tg-flex-wrap tg-gap-2 tg-text-sm">
      <span class="tg-rounded-md tg-bg-slate-100 tg-px-3 tg-py-1 tg-text-slate-700">
        Delta preview:
        <strong [class.tg-text-emerald-600]="previewDelta() > 0" [class.tg-text-rose-600]="previewDelta() < 0">
          {{ previewDelta() > 0 ? '+' : '' }}{{ previewDelta() }}
        </strong>
      </span>
      @if (selectedStock() !== null) {
      <span class="tg-rounded-md tg-bg-slate-100 tg-px-3 tg-py-1 tg-text-slate-700">
        Current stock: <strong>{{ selectedStock() }}</strong>
      </span>
      }
    </div>

    @if (formError()) {
    <p class="md:tg-col-span-2 tg-rounded-md tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-3 tg-text-sm tg-text-rose-700">
      {{ formError() }}
    </p>
    }

    @if (successMessage()) {
    <p class="md:tg-col-span-2 tg-rounded-md tg-border tg-border-emerald-200 tg-bg-emerald-50 tg-p-3 tg-text-sm tg-text-emerald-700">
      {{ successMessage() }}
    </p>
    }

    <div class="md:tg-col-span-2 tg-flex tg-justify-end">
      <button
        type="submit"
        [disabled]="!!formError()"
        class="tg-rounded-md tg-bg-slate-900 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-white hover:tg-bg-slate-700 disabled:tg-cursor-not-allowed disabled:tg-bg-slate-300 disabled:tg-text-slate-500"
      >
        Record movement
      </button>
    </div>
  </form>

  <div class="tg-grid tg-gap-6 xl:tg-grid-cols-2">
    <section class="tg-overflow-hidden tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white">
      <header class="tg-border-b tg-border-slate-200 tg-p-4">
        <h3 class="tg-text-lg tg-font-semibold tg-text-slate-900">Current stock</h3>
      </header>

      @if (inventoryStore.items().length === 0) {
      <p class="tg-p-6 tg-text-sm tg-text-slate-500">No products in inventory yet.</p>
      } @else {
      <div class="tg-overflow-x-auto">
        <table class="tg-min-w-full">
          <thead class="tg-bg-slate-50">
            <tr>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">ID</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Product</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Stock</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Updated</th>
            </tr>
          </thead>
          <tbody>
            @for (item of inventoryStore.items(); track item.productId) {
            <tr class="tg-border-t tg-border-slate-100">
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-text-slate-700">{{ item.productId }}</td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-font-medium tg-text-slate-900">{{ item.productName }}</td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-font-semibold tg-text-slate-900">{{ item.stock }}</td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-text-slate-500">{{ item.lastUpdated | date:'short' }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
      }
    </section>

    <section class="tg-overflow-hidden tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white">
      <header class="tg-border-b tg-border-slate-200 tg-p-4">
        <h3 class="tg-text-lg tg-font-semibold tg-text-slate-900">Movement history</h3>
      </header>

      @if (inventoryStore.movements().length === 0) {
      <p class="tg-p-6 tg-text-sm tg-text-slate-500">No movement records yet.</p>
      } @else {
      <div class="tg-max-h-[460px] tg-overflow-auto">
        <table class="tg-min-w-full">
          <thead class="tg-sticky tg-top-0 tg-bg-slate-50">
            <tr>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Date</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Product</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Delta</th>
              <th class="tg-px-4 tg-py-3 tg-text-left tg-text-xs tg-font-semibold tg-uppercase tg-text-slate-500">Reason</th>
            </tr>
          </thead>
          <tbody>
            @for (movement of inventoryStore.movements(); track movement.id) {
            <tr class="tg-border-t tg-border-slate-100">
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-text-slate-500">{{ movement.timestamp | date:'short' }}</td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-font-medium tg-text-slate-900">{{ movement.productName }}</td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-font-semibold" [class.tg-text-emerald-600]="movement.delta > 0" [class.tg-text-rose-600]="movement.delta < 0">
                {{ movement.delta > 0 ? '+' : '' }}{{ movement.delta }}
              </td>
              <td class="tg-px-4 tg-py-3 tg-text-sm tg-text-slate-500">{{ movement.reason || '-' }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
      }
    </section>
  </div>
</section>
````

## File: libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { InventoryStore } from '@techgear/data-access-inventory';
import { InventoryDashboardComponent } from './inventory-dashboard.component';

describe('InventoryDashboardComponent', () => {
  let fixture: ComponentFixture<InventoryDashboardComponent>;
  let component: InventoryDashboardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryDashboardComponent],
      providers: [
        {
          provide: InventoryStore,
          useValue: {
            items: vi.fn(() => []),
            movements: vi.fn(() => []),
            loadFromStorage: vi.fn(),
            getStock: vi.fn(() => 0),
            adjustStock: vi.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/features/admin-inventory/src/lib/inventory-dashboard/inventory-dashboard.component.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InventoryStore } from '@techgear/data-access-inventory';

type ProductMode = 'existing' | 'new';
type MovementType = 'in' | 'out';
type ReasonPreset =
  | 'purchase'
  | 'sale'
  | 'restock'
  | 'return'
  | 'damage'
  | 'audit'
  | 'other';

@Component({
  selector: 'lib-inventory-dashboard',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './inventory-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryDashboardComponent implements OnInit, OnDestroy {
  readonly inventoryStore = inject(InventoryStore);
  private readonly fb = inject(FormBuilder);
  private formValueSub?: Subscription;

  readonly movementForm = this.fb.nonNullable.group({
    productMode: 'existing' as ProductMode,
    selectedProductId: 0,
    newProductId: 0,
    newProductName: '',
    movementType: 'out' as MovementType,
    quantity: 1,
    reasonPreset: '' as '' | ReasonPreset,
    reasonOther: '',
  });

  readonly formError = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly totalProducts = computed(() => this.inventoryStore.items().length);
  readonly totalMovements = computed(() => this.inventoryStore.movements().length);
  readonly totalUnits = computed(() =>
    this.inventoryStore.items().reduce((sum, item) => sum + item.stock, 0)
  );
  readonly selectableProducts = computed(() =>
    [...this.inventoryStore.items()].sort((a, b) =>
      a.productName.localeCompare(b.productName)
    )
  );

  private readonly reasonLabels: Record<Exclude<ReasonPreset, 'other'>, string> =
    {
      purchase: 'Purchase',
      sale: 'Sale',
      restock: 'Restock',
      return: 'Return',
      damage: 'Damage/Loss',
      audit: 'Inventory audit',
    };

  ngOnInit(): void {
    this.inventoryStore.loadFromStorage();
    this.formValueSub = this.movementForm.valueChanges.subscribe(() => {
      this.successMessage.set(null);
      this.formError.set(this.buildFormError());
    });
    this.formError.set(this.buildFormError());
  }

  ngOnDestroy(): void {
    this.formValueSub?.unsubscribe();
  }

  previewDelta(): number {
    const { movementType, quantity } = this.movementForm.getRawValue();
    return movementType === 'in' ? quantity : -quantity;
  }

  selectedStock(): number | null {
    const { productMode, selectedProductId } = this.movementForm.getRawValue();
    if (productMode !== 'existing' || !selectedProductId) {
      return null;
    }
    return this.inventoryStore.getStock(selectedProductId);
  }

  onAdjustStockSubmit(): void {
    const formError = this.buildFormError();
    this.formError.set(formError);
    this.successMessage.set(null);

    if (formError) {
      return;
    }

    const {
      productMode,
      selectedProductId,
      newProductId,
      newProductName,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    const resolvedProduct =
      productMode === 'existing'
        ? this.selectableProducts().find((item) => item.productId === selectedProductId)
        : undefined;

    const productId =
      productMode === 'existing' ? selectedProductId : Number(newProductId);
    const productName =
      productMode === 'existing'
        ? (resolvedProduct?.productName ?? '')
        : newProductName.trim();
    const delta = movementType === 'in' ? quantity : -quantity;
    const reason =
      reasonPreset === 'other'
        ? reasonOther.trim()
        : this.reasonLabels[reasonPreset as Exclude<ReasonPreset, 'other'>];

    this.inventoryStore.adjustStock(
      productId,
      productName,
      delta,
      reason
    );

    if (productMode === 'new') {
      this.movementForm.patchValue({
        productMode: 'existing',
        selectedProductId: productId,
        newProductId: 0,
        newProductName: '',
      });
    }

    this.movementForm.patchValue({
      movementType: 'out',
      quantity: 1,
      reasonPreset: '',
      reasonOther: '',
    });
    this.successMessage.set('Movement recorded successfully.');
    this.formError.set(this.buildFormError());
  }

  private buildFormError(): string | null {
    const {
      productMode,
      selectedProductId,
      newProductId,
      newProductName,
      movementType,
      quantity,
      reasonPreset,
      reasonOther,
    } = this.movementForm.getRawValue();

    if (productMode === 'existing' && !selectedProductId) {
      return 'Select a product.';
    }

    if (productMode === 'new' && (!newProductId || newProductId < 1)) {
      return 'Enter a valid ID for the new product.';
    }

    if (productMode === 'new' && !newProductName.trim()) {
      return 'Enter a name for the new product.';
    }

    if (!quantity || quantity < 1) {
      return 'Quantity must be greater than zero.';
    }

    if (!reasonPreset) {
      return 'Select a reason.';
    }

    if (reasonPreset === 'other' && !reasonOther.trim()) {
      return 'Describe the reason when selecting "Other".';
    }

    if (productMode === 'existing' && movementType === 'out') {
      const currentStock = this.inventoryStore.getStock(selectedProductId);
      if (quantity > currentStock) {
        return `Insufficient stock. Current available: ${currentStock}.`;
      }
    }

    return null;
  }
}
````

## File: libs/features/admin-inventory/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __featuresAdminInventoryVitestInitDone__: boolean | undefined;
}

if (!globalThis.__featuresAdminInventoryVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__featuresAdminInventoryVitestInitDone__ = true;
}
````

## File: libs/features/admin-inventory/tsconfig.json
````json
{
    "extends": "../../../tsconfig.base.json",
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true
    },
    "files": [],
    "include": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        },
        {
            "path": "./tsconfig.spec.json"
        }
    ]
}
````

## File: libs/features/admin-inventory/tsconfig.lib.json
````json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "outDir": "../../../dist/out-tsc",
        "types": []
    },
    "files": [
        "src/index.ts"
    ],
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test-setup.ts",
        "**/*.spec.ts"
    ]
}
````

## File: libs/features/admin-inventory/tsconfig.lib.prod.json
````json
{
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
        "declarationMap": false
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
````

## File: libs/features/admin-inventory/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/features/admin-inventory/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../data-access/products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../../data-access/categories/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/admin-products/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/features/admin-products",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/features/admin-products/package.json
````json
{
  "name": "@techgear/features-admin-products",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@angular/router": "^21.1.0",
    "@techgear/data-access/products": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
````

## File: libs/features/admin-products/project.json
````json
{
  "name": "features-admin-products",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/admin-products/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:products", "type:feature"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/libs/features/admin-products"],
      "options": {
        "project": "libs/features/admin-products/ng-package.json",
        "tsConfig": "libs/features/admin-products/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/features/admin-products/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "libs/features/admin-products/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/admin-products/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/admin-products/src/index.ts
````typescript
export * from './lib/products-list/products-list.component';
export * from './lib/product-edit/product-edit.component';
````

## File: libs/features/admin-products/src/lib/product-edit/product-edit.component.html
````html
<section class="tg-mx-auto tg-max-w-4xl tg-space-y-6">
  @if (isDemoMode()) {
  <div class="tg-rounded-2xl tg-border tg-border-amber-200 tg-bg-amber-50 tg-p-4 tg-text-sm tg-text-amber-800">
    <p class="tg-font-semibold">Demo mode</p>
    <p class="tg-mt-1">{{ demoModeMessage() }}</p>
  </div>
  }

  <div
    class="tg-flex tg-flex-col tg-gap-4 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 sm:tg-flex-row sm:tg-items-center sm:tg-justify-between"
  >
    <div>
      <h2 class="tg-text-2xl tg-font-semibold tg-text-slate-900">{{ isNew ? 'New Product' : 'Edit Product' }}</h2>
      <p class="tg-mt-1 tg-text-sm tg-text-slate-500">Update the main product information.</p>
    </div>
    <a
      routerLink="/products"
      [class.tg-pointer-events-none]="isSubmitting()"
      [class.tg-opacity-60]="isSubmitting()"
      class="tg-inline-flex tg-items-center tg-justify-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
    >
      Back
    </a>
  </div>

  @if (mutationStatus() === 'pending') {
  <div class="tg-rounded-2xl tg-border tg-border-blue-200 tg-bg-blue-50 tg-p-4 tg-text-sm tg-text-blue-800">
    Applying changes...
  </div>
  }

  @if (isDetailLoading()) {
  <div class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-10 tg-text-center">
    <p class="tg-text-sm tg-font-medium tg-text-slate-700">Loading product details...</p>
    <p class="tg-mt-2 tg-text-xs tg-text-slate-500">Please wait while the form is populated.</p>
  </div>
  } @else if (!isNew && selectedError()) {
  <div class="tg-rounded-2xl tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-4 tg-text-sm tg-text-rose-700">
    Unable to load the product details. Please return to the list and try again.
  </div>
  } @else if (mutationError()) {
  <div class="tg-rounded-2xl tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-4 tg-text-sm tg-text-rose-700">
    {{ mutationError() }}
  </div>
  } @else {
  <form
    [formGroup]="form"
    (ngSubmit)="onSubmit()"
    class="tg-grid tg-gap-6 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6"
  >
    <div class="tg-grid tg-gap-5 md:tg-grid-cols-2">
      <label class="tg-grid tg-gap-1">
        <span class="tg-text-sm tg-font-medium tg-text-slate-700">Title</span>
        <input
          type="text"
          formControlName="title"
          class="tg-w-full tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
        />
      </label>

      <label class="tg-grid tg-gap-1">
        <span class="tg-text-sm tg-font-medium tg-text-slate-700">Price</span>
        <input
          type="number"
          formControlName="price"
          class="tg-w-full tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
        />
      </label>
    </div>

    <label class="tg-grid tg-gap-1">
      <span class="tg-text-sm tg-font-medium tg-text-slate-700">Description</span>
      <textarea
        formControlName="description"
        rows="4"
        class="tg-w-full tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      ></textarea>
    </label>

    <div class="tg-grid tg-gap-5 md:tg-grid-cols-2">
      <label class="tg-grid tg-gap-1">
        <span class="tg-text-sm tg-font-medium tg-text-slate-700">Category</span>
        <select
          formControlName="categoryId"
          class="tg-w-full tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
        >
          <option value="">Select a category</option>
          @for (category of categories(); track category.id) {
          <option [value]="category.id">{{ category.name }}</option>
          }
        </select>
      </label>

      <label class="tg-grid tg-gap-1">
        <span class="tg-text-sm tg-font-medium tg-text-slate-700">Image URL</span>
        <input
          type="text"
          formControlName="images"
          class="tg-w-full tg-rounded-md tg-border tg-border-slate-300 tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
        />
      </label>
    </div>

    <div class="tg-overflow-hidden tg-rounded-xl tg-border tg-border-slate-200 tg-bg-slate-50">
      <img
        [src]="form.value.images || 'https://placehold.co/900x360/e2e8f0/475569?text=Preview'"
        alt="Preview"
        class="tg-h-52 tg-w-full tg-object-cover"
      />
    </div>

    <div class="tg-flex tg-justify-end tg-gap-3 tg-border-t tg-border-slate-100 tg-pt-4">
      @if (!isNew) {
      <button
        type="button"
        (click)="onDelete()"
        [disabled]="isSubmitting()"
        class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-rose-300 tg-bg-rose-50 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-rose-700 hover:tg-bg-rose-100 disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
      >
        {{ isSubmitting() ? 'Deleting...' : 'Delete' }}
      </button>
      }
      <a
        routerLink="/products"
        [class.tg-pointer-events-none]="isSubmitting()"
        [class.tg-opacity-60]="isSubmitting()"
        class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
      >
        Cancel
      </a>
      <button
        type="submit"
        [disabled]="form.invalid || isSubmitting()"
        class="tg-inline-flex tg-items-center tg-rounded-md tg-bg-slate-900 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-white hover:tg-bg-slate-700 disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
      >
        {{ isSubmitting() ? 'Saving...' : 'Save' }}
      </button>
    </div>
  </form>
  }
</section>
````

## File: libs/features/admin-products/src/lib/product-edit/product-edit.component.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsStore } from '@techgear/data-access/products';
import { Product, ProductCreateRequest } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';

@Component({
  selector: 'lib-product-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly productsStore = inject(ProductsStore);
  private readonly confirmDialog = inject(ConfirmDialogService);

  readonly categories = computed(() => {
    const map = new Map<string, string>();

    for (const product of this.productsStore.items()) {
      const id =
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId;
      const name =
        typeof product.category === 'string'
          ? product.category
          : product.category?.name ?? product.categoryId;

      if (id && name) {
        map.set(id, name);
      }
    }

    return Array.from(map.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });
  readonly selectedStatus = this.productsStore.selectedStatus;
  readonly selectedError = this.productsStore.selectedError;
  readonly mutationStatus = this.productsStore.mutationStatus;
  readonly mutationError = this.productsStore.mutationError;
  readonly hasPendingMutations = this.productsStore.hasPendingMutations;
  readonly isDemoMode = this.productsStore.isDemoMode;
  readonly demoModeMessage = this.productsStore.demoModeMessage;
  readonly isSubmitting = computed(() => this.mutationStatus() === 'pending');
  readonly isDetailLoading = computed(
    () =>
      !this.isNew &&
      (this.selectedStatus() === 'loading' || this.selectedStatus() === 'reloading')
  );

  isNew = false;
  private currentProductId: number | null = null;

  form = this.fb.group({
    title: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    images: ['https://placehold.co/600x400', Validators.required],
  });

  ngOnInit(): void {
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isNew = false;
      this.currentProductId = Number(id);
      this.productsStore.loadOne(this.currentProductId);
      return;
    }

    this.isNew = true;
  }

  constructor() {
    effect(() => {
      const product = this.productsStore.selected();
      if (!product || this.isNew || this.currentProductId !== product.id) {
        return;
      }

      this.loadProduct(product);
    });
  }

  private loadProduct(product: Product): void {
    if (!product) {
      return;
    }

    this.form.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      categoryId:
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId ?? '',
      images: product.images[0],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      return;
    }

    const payload = this.toPayload();
    if (!payload) {
      return;
    }

    try {
      if (this.isNew) {
        await this.productsStore.createOptimistic(payload);
      } else if (this.currentProductId) {
        await this.productsStore.updateOptimistic(this.currentProductId, payload);
      }
    } catch {
      return;
    }

    void this.router.navigate(['/products']);
  }

  async onDelete(): Promise<void> {
    if (this.isNew || !this.currentProductId || this.isSubmitting()) {
      return;
    }

    const productName = this.form.getRawValue().title?.trim() || `#${this.currentProductId}`;
    const confirmed = await this.confirmDialog.open({
      title: 'Delete product',
      message: `Are you sure you want to delete "${productName}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      variant: 'danger',
    });

    if (!confirmed) {
      return;
    }

    try {
      await this.productsStore.deleteOptimistic(this.currentProductId);
    } catch {
      return;
    }

    void this.router.navigate(['/products']);
  }

  private toPayload(): ProductCreateRequest | null {
    const raw = this.form.getRawValue();
    const title = raw.title?.trim() ?? '';
    const description = raw.description?.trim() ?? '';
    const category = raw.categoryId?.trim() ?? '';
    const image = raw.images?.trim() ?? '';
    const price = Number(raw.price);

    if (!title || !description || !category || Number.isNaN(price)) {
      return null;
    }

    return {
      title,
      description,
      price,
      category,
      images: image ? [image] : undefined,
    };
  }
}
````

## File: libs/features/admin-products/src/lib/products-list/products-list.component.html
````html
<section class="tg-space-y-6">
  @if (isDemoMode()) {
  <div class="tg-rounded-2xl tg-border tg-border-amber-200 tg-bg-amber-50 tg-p-4 tg-text-sm tg-text-amber-800">
    <p class="tg-font-semibold">Demo mode</p>
    <p class="tg-mt-1">{{ demoModeMessage() }}</p>
  </div>
  }

  <div
    class="tg-flex tg-flex-col tg-gap-4 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 sm:tg-flex-row sm:tg-items-center sm:tg-justify-between"
  >
    <div>
      <h2 class="tg-text-2xl tg-font-semibold tg-text-slate-900">Manage Products</h2>
      <p class="tg-mt-1 tg-text-sm tg-text-slate-500">Filter by category and browse by pages.</p>
    </div>
    <a
      routerLink="new"
      [class.tg-pointer-events-none]="hasPendingMutations()"
      [class.tg-opacity-60]="hasPendingMutations()"
      class="tg-inline-flex tg-items-center tg-justify-center tg-rounded-lg tg-bg-slate-900 tg-px-4 tg-py-2.5 tg-text-sm tg-font-medium tg-text-white tg-transition hover:tg-bg-slate-700"
    >
      + New Product
    </a>
  </div>

  @if (mutationStatus() === 'pending') {
  <div class="tg-rounded-2xl tg-border tg-border-blue-200 tg-bg-blue-50 tg-p-4 tg-text-sm tg-text-blue-800">
    Applying changes...
  </div>
  }

  <div class="tg-grid tg-gap-3 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-4 md:tg-grid-cols-[1fr_auto]">
    <div class="tg-grid tg-gap-1">
      <label class="tg-text-sm tg-font-medium tg-text-slate-700" for="categoryFilter">Category</label>
      <select
        id="categoryFilter"
        [ngModel]="selectedCategory() ?? ''"
        (ngModelChange)="onCategoryChange($event)"
        class="tg-w-full tg-max-w-md tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm focus:tg-border-slate-500 focus:tg-outline-none"
      >
        <option value="">All</option>
        @for (category of categories(); track category.id) {
        <option [value]="category.id">{{ category.name }}</option>
        }
      </select>
    </div>

    <div class="tg-flex tg-items-end tg-justify-end tg-text-sm tg-text-slate-500">
      {{ filteredProducts().length }} products
    </div>
  </div>

  @if (productsStore.isLoading()) {
  <div class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-10 tg-text-center">
    <p class="tg-text-slate-500">Loading products...</p>
  </div>
  } @else if (productsStore.error()) {
  <div class="tg-rounded-2xl tg-border tg-border-red-200 tg-bg-red-50 tg-p-4 tg-text-red-700">
    <p>Failed to load products: {{ productsStore.error() }}</p>
  </div>
  } @else if (mutationError()) {
  <div class="tg-rounded-2xl tg-border tg-border-amber-200 tg-bg-amber-50 tg-p-4 tg-text-amber-800">
    <p>{{ mutationError() }}</p>
  </div>
  } @else if (filteredProducts().length === 0) {
  <div class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-10 tg-text-center">
    <p class="tg-text-slate-500">No products found for the selected category.</p>
  </div>
  } @else {
  <div class="tg-overflow-hidden tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white">
    <div class="tg-grid tg-grid-cols-1 tg-gap-4 tg-p-4 md:tg-grid-cols-2 xl:tg-grid-cols-3">
      @for (product of paginatedProducts(); track product.id) {
      <article
        class="tg-flex tg-flex-col tg-overflow-hidden tg-rounded-xl tg-border tg-border-slate-200 tg-bg-slate-50"
      >
        <div class="tg-aspect-[4/3] tg-overflow-hidden tg-bg-slate-100">
          <img
            [src]="getProductImage(product)"
            [alt]="product.title"
            class="tg-h-full tg-w-full tg-object-cover tg-transition-transform tg-duration-300 hover:tg-scale-105"
            loading="lazy"
          />
        </div>
        <div class="tg-flex tg-flex-1 tg-flex-col tg-gap-3 tg-p-4">
          <div class="tg-space-y-1">
            <h3 class="tg-line-clamp-2 tg-text-base tg-font-semibold tg-text-slate-900">{{ product.title }}</h3>
            <p class="tg-text-sm tg-text-slate-500">#{{ product.id }}</p>
          </div>

          <div class="tg-flex tg-items-center tg-justify-between">
            <p class="tg-text-lg tg-font-bold tg-text-slate-900">{{ product.price | currency }}</p>
            <span
              class="tg-inline-flex tg-rounded-full tg-bg-slate-200 tg-px-3 tg-py-1 tg-text-xs tg-font-semibold tg-text-slate-700"
            >
              {{ getCategoryLabel(product) }}
            </span>
          </div>

          <div class="tg-mt-auto tg-flex tg-justify-end tg-gap-2">
            <button
              type="button"
              (click)="onDelete(product)"
              [disabled]="isDeletePending(product.id)"
              class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-rose-300 tg-bg-rose-50 tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-rose-700 tg-transition hover:tg-bg-rose-100 disabled:tg-cursor-not-allowed disabled:tg-opacity-60"
            >
              {{ isDeletePending(product.id) ? 'Deleting...' : 'Delete' }}
            </button>
            <a
              [routerLink]="['/products', product.id]"
              class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 tg-transition hover:tg-bg-slate-100"
            >
              Edit
            </a>
          </div>
        </div>
      </article>
      }
    </div>
  </div>

  <div class="tg-flex tg-items-center tg-justify-between tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-4">
    <button
      type="button"
      (click)="onPrevPage()"
      [disabled]="!canGoPrev()"
      class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100 disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
    >
      Previous
    </button>

    <span class="tg-text-sm tg-font-medium tg-text-slate-600">Page {{ page() }} of {{ totalPages() }}</span>

    <button
      type="button"
      (click)="onNextPage()"
      [disabled]="!canGoNext()"
      class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100 disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
    >
      Next
    </button>
  </div>
  }
</section>
````

## File: libs/features/admin-products/src/lib/products-list/products-list.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductsStore } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';
import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let fixture: ComponentFixture<ProductsListComponent>;
  let component: ProductsListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListComponent],
      providers: [
        provideRouter([]),
        {
          provide: ProductsStore,
          useValue: {
            items: vi.fn(() => []),
            ensureListLoaded: vi.fn(),
            isLoading: vi.fn(() => false),
            error: vi.fn(() => null),
            mutationError: vi.fn(() => null),
            mutationStatus: vi.fn(() => 'idle'),
            hasPendingMutations: vi.fn(() => false),
            isDemoMode: vi.fn(() => true),
            demoModeMessage: vi.fn(() => 'Demo mode'),
            isMutationPending: vi.fn(() => false),
            deleteOptimistic: vi.fn(),
          },
        },
        {
          provide: ConfirmDialogService,
          useValue: {
            open: vi.fn(async () => false),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/features/admin-products/src/lib/products-list/products-list.component.ts
````typescript
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductsStore } from '@techgear/data-access/products';
import { Product } from '@techgear/data-access/products';
import { ConfirmDialogService } from '@techgear/ui';

type CategoryOption = { id: string; name: string };

@Component({
  selector: 'lib-products-list',
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './products-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  readonly productsStore = inject(ProductsStore);
  readonly confirmDialog = inject(ConfirmDialogService);

  readonly fallbackImage = 'https://placehold.co/160x160/e2e8f0/475569?text=No+Image';
  readonly selectedCategory = signal<string | null>(null);
  readonly page = signal(1);
  readonly pageSize = 9;

  readonly categories = computed<CategoryOption[]>(() => {
    const map = new Map<string, string>();

    for (const product of this.productsStore.items()) {
      const id =
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId;
      const name =
        typeof product.category === 'string'
          ? product.category
          : product.category?.name ?? product.categoryId;

      if (id && name) {
        map.set(id, name);
      }
    }

    return Array.from(map.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  readonly filteredProducts = computed(() => {
    const selectedCategory = this.selectedCategory();
    const items = this.productsStore.items();

    if (!selectedCategory) {
      return items;
    }

    return items.filter((product: Product) => {
      const productCategory =
        typeof product.category === 'string'
          ? product.category
          : product.category?.id ?? product.categoryId;
      return productCategory === selectedCategory;
    });
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredProducts().length / this.pageSize))
  );

  readonly paginatedProducts = computed(() => {
    const page = this.page();
    const start = (page - 1) * this.pageSize;
    return this.filteredProducts().slice(start, start + this.pageSize);
  });

  readonly canGoPrev = computed(() => this.page() > 1);
  readonly canGoNext = computed(() => this.page() < this.totalPages());
  readonly mutationError = this.productsStore.mutationError;
  readonly mutationStatus = this.productsStore.mutationStatus;
  readonly hasPendingMutations = this.productsStore.hasPendingMutations;
  readonly isDemoMode = this.productsStore.isDemoMode;
  readonly demoModeMessage = this.productsStore.demoModeMessage;

  constructor() {
    this.productsStore.ensureListLoaded({ limit: 100, offset: 0 });
  }

  getCategoryLabel(product: Product): string {
    if (!product.category) {
      return 'Uncategorized';
    }

    if (typeof product.category === 'string') {
      return product.category;
    }

    return product.category.name ?? 'Uncategorized';
  }

  getProductImage(product: Product): string {
    return product.images?.[0] || this.fallbackImage;
  }

  onCategoryChange(categoryId: string): void {
    this.selectedCategory.set(categoryId || null);
    this.page.set(1);
  }

  onPrevPage(): void {
    if (!this.canGoPrev()) {
      return;
    }
    this.page.update((value) => value - 1);
  }

  onNextPage(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.page.update((value) => value + 1);
  }

  isDeletePending(productId: number): boolean {
    return this.productsStore.isMutationPending(productId);
  }

  async onDelete(product: Product): Promise<void> {
    const confirmed = await this.confirmDialog.open({
      title: 'Delete product',
      message: `Delete "${product.title}" from demo list?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      variant: 'danger',
    });
    if (!confirmed) {
      return;
    }

    try {
      await this.productsStore.deleteOptimistic(product.id);
    } catch {
      // Error state is exposed by the store for UI rendering.
    }
  }
}
````

## File: libs/features/admin-products/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __featuresAdminProductsVitestInitDone__: boolean | undefined;
}

if (!globalThis.__featuresAdminProductsVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__featuresAdminProductsVitestInitDone__ = true;
}
````

## File: libs/features/admin-products/tsconfig.json
````json
{
    "extends": "../../../tsconfig.base.json",
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true
    },
    "files": [],
    "include": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        },
        {
            "path": "./tsconfig.spec.json"
        }
    ]
}
````

## File: libs/features/admin-products/tsconfig.lib.json
````json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "outDir": "../../../dist/out-tsc",
        "types": []
    },
    "files": [
        "src/index.ts"
    ],
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test-setup.ts",
        "**/*.spec.ts"
    ]
}
````

## File: libs/features/admin-products/tsconfig.lib.prod.json
````json
{
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
        "declarationMap": false
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
````

## File: libs/features/admin-products/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/features/admin-products/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../data-access/products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../../data-access/categories/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/auth/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/features/auth/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/features/auth",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/features/auth/package.json
````json
{
  "name": "@techgear/auth-feature",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/core": "^21.1.0",
    "@angular/router": "^21.1.0",
    "@techgear/data-access/auth": "*",
    "@techgear/ui": "*"
  },
  "sideEffects": false
}
````

## File: libs/features/auth/project.json
````json
{
  "name": "auth-feature",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/auth/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["type:feature"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/features/auth/ng-package.json",
        "tsConfig": "libs/features/auth/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/features/auth/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/auth/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/auth/README.md
````markdown
# auth-feature

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test auth-feature` to execute the unit tests.
````

## File: libs/features/auth/src/index.ts
````typescript
export * from './lib/login-page';
export * from './lib/login-page.config';
````

## File: libs/features/auth/src/lib/login-page.config.ts
````typescript
import { InjectionToken } from '@angular/core';

export type DemoAccount = {
  email: string;
  username: string;
  password: string;
};

export type LoginPageConfig = {
  appTitle: string;
  subtitle: string;
  defaultRedirectUrl: string;
  demoAccount: DemoAccount | null;
};

const DEFAULT_LOGIN_PAGE_CONFIG: LoginPageConfig = {
  appTitle: 'TechGear Inventory Pro',
  subtitle: 'Sign in to continue.',
  defaultRedirectUrl: '/catalog',
  demoAccount: null,
};

export const LOGIN_PAGE_CONFIG = new InjectionToken<LoginPageConfig>(
  'LOGIN_PAGE_CONFIG',
  {
    providedIn: 'root',
    factory: () => DEFAULT_LOGIN_PAGE_CONFIG,
  }
);
````

## File: libs/features/auth/src/lib/login-page.html
````html
<section class="tg-min-h-screen tg-bg-slate-50 tg-p-6">
  <div class="tg-mx-auto tg-max-w-md tg-space-y-3">
    <h1 class="tg-text-2xl tg-font-semibold tg-text-slate-900">{{ title }}</h1>
    <p class="tg-text-sm tg-text-slate-600">{{ subtitle }}</p>
  </div>

  @if (demoAccount) {
    <div
      class="tg-mx-auto tg-mt-4 tg-grid tg-max-w-md tg-gap-3 tg-rounded-xl tg-border tg-border-amber-200 tg-bg-amber-50 tg-p-4"
      aria-label="Demo credentials"
    >
      <div class="tg-space-y-1">
        <h2 class="tg-text-sm tg-font-semibold tg-uppercase tg-tracking-wide tg-text-amber-900">
          Demo Credentials
        </h2>
        <p class="tg-text-sm tg-text-amber-800">
          GitHub Pages demo build uses DummyJSON. Sign-in requires the username below; email is shown for portfolio context.
        </p>
      </div>

      <dl class="tg-grid tg-gap-2 tg-text-sm">
        <div class="tg-grid tg-gap-1">
          <dt class="tg-font-medium tg-text-amber-950">Email</dt>
          <dd class="tg-break-all tg-text-amber-900">{{ demoAccount.email }}</dd>
        </div>
        <div class="tg-grid tg-gap-1">
          <dt class="tg-font-medium tg-text-amber-950">Username</dt>
          <dd class="tg-break-all tg-font-mono tg-text-amber-900">{{ demoAccount.username }}</dd>
        </div>
        <div class="tg-grid tg-gap-1">
          <dt class="tg-font-medium tg-text-amber-950">Password</dt>
          <dd class="tg-break-all tg-font-mono tg-text-amber-900">{{ demoAccount.password }}</dd>
        </div>
      </dl>
    </div>
  }

  <lib-login-form
    class="tg-mt-4"
    [loading]="isLoading()"
    [error]="errorMessage()"
    [prefillCredentials]="demoCredentials"
    (submitCredentials)="onSubmit($event)"
  />
</section>
````

## File: libs/features/auth/src/lib/login-page.scss
````scss
:host {
  display: block;
}
````

## File: libs/features/auth/src/lib/login-page.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { vi } from 'vitest';
import { AuthStore } from '@techgear/data-access/auth';
import { LoginPageComponent } from './login-page';
import { LOGIN_PAGE_CONFIG } from './login-page.config';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const authStore = {
    status: vi.fn(() => 'idle'),
    login: vi.fn(async () => undefined),
  };
  const router = {
    navigateByUrl: vi.fn(async () => true),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [
        { provide: AuthStore, useValue: authStore },
        { provide: Router, useValue: router },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: vi.fn(() => null),
              },
            },
          },
        },
        {
          provide: LOGIN_PAGE_CONFIG,
          useValue: {
            appTitle: 'TechGear Admin Panel',
            subtitle: 'Sign in to review the inventory dashboard.',
            defaultRedirectUrl: '/products',
            demoAccount: {
              email: 'emily.johnson@x.dummyjson.com',
              username: 'emilys',
              password: 'emilyspass',
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose demo credentials from injected config', () => {
    expect(component.demoCredentials).toEqual({
      username: 'emilys',
      password: 'emilyspass',
    });
  });
});
````

## File: libs/features/auth/src/lib/login-page.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';
import { LoginCredentials, LoginFormComponent } from '@techgear/ui';
import { LOGIN_PAGE_CONFIG } from './login-page.config';

@Component({
  selector: 'lib-login-page',
  imports: [LoginFormComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly config = inject(LOGIN_PAGE_CONFIG);

  readonly isLoading = computed(() => this.authStore.status() === 'loading');
  readonly title = this.config.appTitle;
  readonly subtitle = this.config.subtitle;
  readonly demoAccount = this.config.demoAccount;
  readonly demoCredentials: LoginCredentials | null = this.demoAccount
    ? {
        username: this.demoAccount.username,
        password: this.demoAccount.password,
      }
    : null;

  readonly errorMessage = computed(() => {
    if (this.authStore.status() !== 'error') {
      return null;
    }
    return 'Unable to sign in. Check your credentials or network and try again.';
  });

  async onSubmit(credentials: LoginCredentials): Promise<void> {
    try {
      await this.authStore.login(credentials.username, credentials.password);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      const target =
        returnUrl && returnUrl.startsWith('/')
          ? returnUrl
          : this.config.defaultRedirectUrl;
      await this.router.navigateByUrl(target);
    } catch {
      // Store keeps the internal error details; UI shows a safe message.
    }
  }
}
````

## File: libs/features/auth/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __authFeatureVitestInitDone__: boolean | undefined;
}

if (!globalThis.__authFeatureVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__authFeatureVitestInitDone__ = true;
}
````

## File: libs/features/auth/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/features/auth/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}
````

## File: libs/features/auth/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/features/auth/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ]
}
````

## File: libs/features/auth/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/auth': resolve(__dirname, '../../data-access/auth/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/cart/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/features/cart",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/features/cart/package.json
````json
{
  "name": "@techgear/features-cart",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@techgear/data-access-cart": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
````

## File: libs/features/cart/project.json
````json
{
  "name": "features-cart",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/cart/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:cart", "type:feature"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/libs/features/cart"],
      "options": {
        "project": "libs/features/cart/ng-package.json",
        "tsConfig": "libs/features/cart/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/features/cart/tsconfig.lib.prod.json"
        },
        "development": {
          "tsConfig": "libs/features/cart/tsconfig.lib.json"
        }
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/cart/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/cart/src/index.ts
````typescript
export * from './lib/cart-page/cart-page.component';
````

## File: libs/features/cart/src/lib/cart-page/cart-page.component.css
````css
/* Using Tailwind utility classes in template, so file is kept minimal/empty but exists for component metadata */
````

## File: libs/features/cart/src/lib/cart-page/cart-page.component.html
````html
<section class="tg-mx-auto tg-w-full tg-max-w-6xl tg-space-y-6 tg-p-6">
  <header class="tg-flex tg-items-center tg-justify-between">
    <div>
      <p class="tg-text-xs tg-uppercase tg-tracking-wide tg-text-slate-500">Shop</p>
      <h1 class="tg-text-3xl tg-font-bold tg-text-slate-900">Shopping Cart</h1>
    </div>
    <a
      routerLink="/catalog"
      class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
    >
      Continue shopping
    </a>
  </header>

  @if (cartStore.items().length === 0) {
  <div class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-12 tg-text-center">
    <p class="tg-text-xl tg-font-semibold tg-text-slate-700">Your cart is empty</p>
    <a routerLink="/catalog" class="tg-mt-4 tg-inline-block tg-text-sm tg-font-semibold tg-text-indigo-600 hover:tg-underline">
      Back to catalog
    </a>
  </div>
  } @else {
  <div class="tg-grid tg-gap-8 lg:tg-grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
    <div class="tg-space-y-4">
      @for (item of cartStore.items(); track item.productId) {
      <article class="tg-grid tg-gap-4 tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-4 sm:tg-grid-cols-[88px_minmax(0,1fr)_auto] sm:tg-items-center">
        <div class="tg-overflow-hidden tg-rounded-xl tg-bg-slate-100">
          @if (item.imageUrl) {
          <img [src]="item.imageUrl" [alt]="item.title" class="tg-h-[88px] tg-w-[88px] tg-object-cover">
          } @else {
          <div class="tg-flex tg-h-[88px] tg-w-[88px] tg-items-center tg-justify-center tg-text-xs tg-text-slate-500">No image</div>
          }
        </div>

        <div class="tg-space-y-1">
          <h3 class="tg-text-base tg-font-semibold tg-text-slate-900">{{ item.title }}</h3>
          <p class="tg-text-sm tg-text-slate-500">{{ item.price | currency }} each</p>
          <p class="tg-text-sm tg-font-semibold tg-text-slate-800">Subtotal: {{ item.price * item.quantity | currency }}</p>
        </div>

        <div class="tg-flex tg-items-center tg-gap-3 sm:tg-justify-self-end">
          <div class="tg-inline-flex tg-items-center tg-rounded-lg tg-border tg-border-slate-300 tg-bg-white">
            <button
              (click)="onUpdateQuantity(item.productId, item.quantity - 1)"
              class="tg-h-9 tg-w-9 tg-text-base tg-font-semibold tg-text-slate-600 hover:tg-bg-slate-100 disabled:tg-opacity-50"
              [disabled]="item.quantity <= 1"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span class="tg-min-w-10 tg-text-center tg-text-sm tg-font-semibold tg-text-slate-900">{{ item.quantity }}</span>
            <button
              (click)="onUpdateQuantity(item.productId, item.quantity + 1)"
              class="tg-h-9 tg-w-9 tg-text-base tg-font-semibold tg-text-slate-600 hover:tg-bg-slate-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            (click)="onRemoveItem(item.productId)"
            class="tg-inline-flex tg-h-9 tg-w-9 tg-items-center tg-justify-center tg-rounded-md tg-text-rose-600 hover:tg-bg-rose-50"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="tg-h-5 tg-w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </article>
      }
    </div>

    <aside class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 lg:tg-sticky lg:tg-top-6">
      <h2 class="tg-text-xl tg-font-semibold tg-text-slate-900">Order summary</h2>

      <div class="tg-mt-5 tg-space-y-3">
        <div class="tg-flex tg-items-center tg-justify-between tg-text-sm">
          <span class="tg-text-slate-500">Items ({{ cartStore.totalItems() }})</span>
          <span class="tg-font-medium tg-text-slate-800">{{ cartStore.totalPrice() | currency }}</span>
        </div>
        <div class="tg-flex tg-items-center tg-justify-between tg-border-t tg-border-slate-200 tg-pt-4">
          <span class="tg-text-base tg-font-semibold tg-text-slate-800">Total</span>
          <span class="tg-text-2xl tg-font-bold tg-text-indigo-700">{{ cartStore.totalPrice() | currency }}</span>
        </div>
      </div>

      <button
        class="tg-mt-6 tg-w-full tg-rounded-lg tg-bg-indigo-600 tg-py-3 tg-text-sm tg-font-semibold tg-text-white tg-transition-colors hover:tg-bg-indigo-700"
      >
        Proceed to Checkout
      </button>

      <button
        (click)="onClearCart()"
        class="tg-mt-3 tg-w-full tg-rounded-lg tg-border tg-border-slate-300 tg-bg-white tg-py-3 tg-text-sm tg-font-semibold tg-text-slate-700 hover:tg-bg-slate-100"
      >
        Clear Cart
      </button>
    </aside>
  </div>
  }
</section>
````

## File: libs/features/cart/src/lib/cart-page/cart-page.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';
import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  let fixture: ComponentFixture<CartPageComponent>;
  let component: CartPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: CartStore,
          useValue: {
            items: vi.fn(() => []),
            totalItems: vi.fn(() => 0),
            totalPrice: vi.fn(() => 0),
          },
        },
        {
          provide: CartInventoryFacade,
          useValue: {
            setQty: vi.fn(),
            removeFromCart: vi.fn(),
            clearCart: vi.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/features/cart/src/lib/cart-page/cart-page.component.ts
````typescript
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartInventoryFacade, CartStore } from '@techgear/data-access-cart';

@Component({
    selector: 'lib-cart-page',
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
    readonly cartStore = inject(CartStore);
    private readonly cartFacade = inject(CartInventoryFacade);

    onUpdateQuantity(productId: number, quantity: number): void {
        this.cartFacade.setQty(productId, quantity);
    }

    onRemoveItem(productId: number): void {
        this.cartFacade.removeFromCart(productId);
    }

    onClearCart(): void {
        this.cartFacade.clearCart();
    }
}
````

## File: libs/features/cart/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __featuresCartVitestInitDone__: boolean | undefined;
}

if (!globalThis.__featuresCartVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__featuresCartVitestInitDone__ = true;
}
````

## File: libs/features/cart/tsconfig.json
````json
{
    "extends": "../../../tsconfig.base.json",
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true
    },
    "files": [],
    "include": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        },
        {
            "path": "./tsconfig.spec.json"
        }
    ]
}
````

## File: libs/features/cart/tsconfig.lib.json
````json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "outDir": "../../../dist/out-tsc",
        "types": []
    },
    "files": [
        "src/index.ts"
    ],
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test-setup.ts",
        "**/*.spec.ts"
    ]
}
````

## File: libs/features/cart/tsconfig.lib.prod.json
````json
{
    "extends": "./tsconfig.lib.json",
    "compilerOptions": {
        "declarationMap": false
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
````

## File: libs/features/cart/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/features/cart/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/cart': resolve(__dirname, '../../data-access/cart/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/catalog/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/features/catalog/project.json
````json
{
  "name": "catalog",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/catalog/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["type:feature"],
  "targets": {
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/catalog/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/catalog/README.md
````markdown
# catalog

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test catalog` to execute the unit tests.
````

## File: libs/features/catalog/src/index.ts
````typescript
export * from './lib/catalog-page';
export * from './lib/shop-shell-page';
export * from './lib/shop-shell.facade';
export * from './lib/provide-catalog-shell-initializer';
````

## File: libs/features/catalog/src/lib/catalog-page.html
````html
<section class="tg-space-y-6 tg-p-6">
  <header class="tg-space-y-1">
    <h1 class="tg-text-2xl tg-font-semibold tg-text-slate-900">Catalog</h1>
    <p class="tg-text-sm tg-text-slate-600">Browse products and open product details.</p>
  </header>

  @if (categoriesError()) {
  <div class="tg-rounded-lg tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-4 tg-text-sm tg-text-rose-700">
    Failed to load categories.
    <button type="button" class="tg-ml-2 tg-font-semibold hover:tg-underline" (click)="onRetryCategories()">
      Retry
    </button>
  </div>
  } @else {
  <lib-category-filter [categories]="categories()" [selectedCategoryId]="selectedCategoryId()"
    (selectedCategoryIdChange)="onCategoryChange($event)" />
  }

  @if (isProductsLoading()) {
  <div class="tg-rounded-lg tg-border tg-border-slate-200 tg-bg-slate-50 tg-p-6 tg-text-sm tg-text-slate-600">
    Loading products...
  </div>
  } @else if (productsError()) {
  <div class="tg-rounded-lg tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-4 tg-text-sm tg-text-rose-700">
    Failed to load products.
    <button type="button" class="tg-ml-2 tg-font-semibold hover:tg-underline" (click)="onRetryProducts()">
      Retry
    </button>
  </div>
  } @else if (isEmpty()) {
  <div class="tg-rounded-lg tg-border tg-border-slate-200 tg-bg-slate-50 tg-p-6 tg-text-sm tg-text-slate-600">
    No products found for this page/filter.
  </div>
  } @else {
  <div class="tg-grid tg-grid-cols-1 tg-gap-4 sm:tg-grid-cols-2 lg:tg-grid-cols-3">
    @for (product of filteredProducts(); track product.id) {
    <div class="tg-relative">
      <lib-product-card [product]="product" (view)="openProduct($event)" />
      @let stock = getProductStock(product.id);
      @if (stock > 0) {
      <span
        class="tg-absolute tg-top-2 tg-right-2 tg-rounded-full tg-bg-green-100 tg-px-2.5 tg-py-0.5 tg-text-xs tg-font-medium tg-text-green-800">
        {{ stock }} left
      </span>
      } @else {
      <span
        class="tg-absolute tg-top-2 tg-right-2 tg-rounded-full tg-bg-rose-100 tg-px-2.5 tg-py-0.5 tg-text-xs tg-font-medium tg-text-rose-800">
        Out of stock
      </span>
      }
    </div>
    }
  </div>
  }

  <lib-pagination [page]="page()" [disablePrev]="!canGoPrev()" [disableNext]="!canGoNext()" (previous)="onPrevPage()"
    (next)="onNextPage()" />
</section>
````

## File: libs/features/catalog/src/lib/catalog-page.scss
````scss
:host {
  display: block;
}
````

## File: libs/features/catalog/src/lib/catalog-page.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogPageComponent } from './catalog-page';

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent;
  let fixture: ComponentFixture<CatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/features/catalog/src/lib/catalog-page.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesStore } from '@techgear/data-access/categories';
import { ProductsStore } from '@techgear/data-access/products';
import { InventoryStore } from '@techgear/data-access/inventory';
import { AppErrorState } from '@techgear/util';
import { CategoryFilterComponent, PaginationComponent, ProductCardComponent } from '@techgear/ui';

@Component({
  selector: 'lib-catalog-page',
  imports: [CategoryFilterComponent, ProductCardComponent, PaginationComponent],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent {
  private readonly router = inject(Router);
  private readonly productsStore = inject(ProductsStore);
  private readonly categoriesStore = inject(CategoriesStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly appErrorState = inject(AppErrorState);

  readonly page = signal(1);
  readonly pageSize = signal(12);
  readonly selectedCategoryId = signal<string | null>(null);

  readonly categories = this.categoriesStore.items;
  readonly products = this.productsStore.items;

  readonly categoriesError = computed(() => this.categoriesStore.error());
  readonly isCategoriesLoading = computed(
    () => this.categoriesStore.status() === 'loading' || this.categoriesStore.status() === 'reloading'
  );

  readonly productsError = computed(() => this.productsStore.listError());
  readonly isProductsLoading = computed(
    () =>
      this.productsStore.listStatus() === 'loading' ||
      this.productsStore.listStatus() === 'reloading'
  );

  readonly filteredProducts = computed(() => {
    const selected = this.selectedCategoryId();
    const items = this.productsStore.items();

    if (selected === null) {
      return items;
    }

    return items.filter((product) => {
      const categoryId = product.category?.id ?? product.categoryId ?? null;
      return categoryId === selected;
    });
  });

  readonly isEmpty = computed(
    () =>
      !this.isProductsLoading() &&
      !this.productsError() &&
      this.filteredProducts().length === 0
  );

  readonly canGoPrev = computed(() => this.page() > 1);
  readonly canGoNext = computed(
    () => this.products().length >= this.pageSize() && !this.isProductsLoading()
  );

  constructor() {
    this.categoriesStore.loadList();
    effect(() => {
      const page = this.page();
      const limit = this.pageSize();
      const offset = (page - 1) * limit;
      this.productsStore.loadList({ limit, offset });
    });

    effect(() => {
      const products = this.productsStore.items();
      const listStatus = this.productsStore.listStatus();
      const isLoading = listStatus === 'loading' || listStatus === 'reloading';

      if (!isLoading && products.length > 0) {
        this.inventoryStore.seedMissingProducts(products, 5);
      }
    });

    effect(() => {
      const productsError = this.productsError();
      const categoriesError = this.categoriesError();

      if (productsError) {
        this.appErrorState.report(productsError);
      }

      if (categoriesError) {
        this.appErrorState.report(categoriesError);
      }
    });
  }

  onCategoryChange(categoryId: string | null): void {
    this.selectedCategoryId.set(categoryId);
    this.page.set(1);
  }

  onPrevPage(): void {
    if (!this.canGoPrev()) {
      return;
    }
    this.page.update((current) => current - 1);
  }

  onNextPage(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.page.update((current) => current + 1);
  }

  onRetryProducts(): void {
    this.productsStore.reloadList();
  }

  onRetryCategories(): void {
    this.categoriesStore.loadList();
  }

  openProduct(productId: number): void {
    void this.router.navigate(['/products', productId]);
  }

  getProductStock(productId: number): number {
    return this.inventoryStore.getStock(productId);
  }
}
````

## File: libs/features/catalog/src/lib/provide-catalog-shell-initializer.ts
````typescript
import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { ShopShellFacade } from './shop-shell.facade';

export function provideCatalogShellInitializer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      const facade = inject(ShopShellFacade);
      facade.init();
    }),
  ]);
}
````

## File: libs/features/catalog/src/lib/shop-shell-page.html
````html
<div class="tg-min-h-screen tg-bg-slate-100/70">
  @if (isAuthenticated()) {
  <lib-header
    [isAuthenticated]="isAuthenticated()"
    [user]="currentUser()"
    [userInitials]="userInitials()"
    [cartCount]="cartCount()"
    (logout)="logout()"
  />
  }

  <main class="tg-mx-auto tg-w-full tg-max-w-[1400px]">
    <router-outlet />
  </main>
</div>
````

## File: libs/features/catalog/src/lib/shop-shell-page.scss
````scss
:host {
  display: block;
}
````

## File: libs/features/catalog/src/lib/shop-shell-page.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@techgear/ui';
import { ShopShellFacade } from './shop-shell.facade';

@Component({
  selector: 'lib-shop-shell-page',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './shop-shell-page.html',
  styleUrl: './shop-shell-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopShellPageComponent {
  private readonly facade = inject(ShopShellFacade);

  readonly isAuthenticated = this.facade.isAuthenticated;
  readonly currentUser = this.facade.currentUser;
  readonly userInitials = this.facade.userInitials;
  readonly cartCount = this.facade.cartCount;
  readonly logout = () => this.facade.logout();
}
````

## File: libs/features/catalog/src/lib/shop-shell.facade.ts
````typescript
import { computed, effect, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { ProductsStore } from '@techgear/data-access/products';
import { CartStore } from '@techgear/data-access-cart';

@Injectable({ providedIn: 'root' })
export class ShopShellFacade {
  private readonly authStore = inject(AuthStore);
  private readonly productsStore = inject(ProductsStore);
  private readonly inventoryStore = inject(InventoryStore);
  private readonly cartStore = inject(CartStore);
  private readonly router = inject(Router);

  private initialized = false;

  constructor() {
    effect(() => {
      if (this.authStore.isAuthenticated()) {
        this.init();
      }
    });

    effect(() => {
      const products = this.productsStore.items();
      const isLoading = this.productsStore.isLoading();

      if (!isLoading && products.length > 0) {
        this.inventoryStore.seedMissingProducts(products, 5);
      }
    });
  }

  init(): void {
    if (this.initialized || !this.authStore.isAuthenticated()) {
      return;
    }

    this.initialized = true;
    this.productsStore.loadList({ limit: 50, offset: 0 });
  }

  readonly isAuthenticated = computed(() => this.authStore.isAuthenticated());
  readonly currentUser = computed(() => this.authStore.user());
  readonly userName = computed(
    () => this.currentUser()?.name?.trim() || 'Signed User'
  );
  readonly userInitials = computed(() => {
    const name = this.userName();
    const initials = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');

    return initials || 'U';
  });
  readonly cartCount = computed(() => this.cartStore.totalItems());

  async logout(): Promise<void> {
    this.authStore.logout();
    await this.router.navigateByUrl('/login');
  }
}
````

## File: libs/features/catalog/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __catalogVitestInitDone__: boolean | undefined;
}

if (!globalThis.__catalogVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__catalogVitestInitDone__ = true;
}
````

## File: libs/features/catalog/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [{ "path": "./tsconfig.lib.json" }]
}
````

## File: libs/features/catalog/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/features/catalog/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/features/catalog/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

// Plugin simple para cargar templates HTML y estilos como strings
function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../data-access/products/src/index.ts'),
      '@techgear/data-access/categories': resolve(__dirname, '../../data-access/categories/src/index.ts'),
      '@techgear/data-access/inventory': resolve(__dirname, '../../data-access/inventory/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/features/product-detail/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/features/product-detail/project.json
````json
{
  "name": "product-detail",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/features/product-detail/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["type:feature"],
  "targets": {
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/features/product-detail/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/features/product-detail/README.md
````markdown
# product-detail

This library was generated with [Nx](https://nx.dev).
````

## File: libs/features/product-detail/src/index.ts
````typescript
export * from './lib/product-detail-page';
````

## File: libs/features/product-detail/src/lib/product-detail-page.html
````html
<section class="tg-mx-auto tg-w-full tg-max-w-6xl tg-space-y-6 tg-p-6">
  <button type="button"
    class="tg-inline-flex tg-items-center tg-gap-2 tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-50"
    (click)="onBack()">
    Back to catalog
  </button>

  @if (isLoading()) {
  <div class="tg-rounded-lg tg-border tg-border-slate-200 tg-bg-slate-50 tg-p-6 tg-text-sm tg-text-slate-600">
    Loading product...
  </div>
  } @else if (error()) {
  <div class="tg-rounded-lg tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-4 tg-text-sm tg-text-rose-700">
    Failed to load this product.
    <button type="button" class="tg-ml-2 tg-font-semibold hover:tg-underline" (click)="onRetry()">
      Retry
    </button>
  </div>
  } @else if (!product()) {
  <div class="tg-rounded-lg tg-border tg-border-slate-200 tg-bg-slate-50 tg-p-6 tg-text-sm tg-text-slate-600">
    Product not found.
  </div>
  } @else {
  <lib-product-detail-view [product]="product()!" />

  <div class="tg-mt-6 tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-6">
    <div class="tg-flex tg-flex-col tg-gap-4 lg:tg-flex-row lg:tg-items-center lg:tg-justify-between">
      <div>
        <p class="tg-text-sm tg-font-medium tg-text-slate-900">Available stock</p>
        <p class="tg-text-2xl tg-font-bold tg-text-slate-900">{{ stock() }}</p>
      </div>

      <div class="tg-flex tg-flex-col tg-items-start tg-gap-3 lg:tg-items-end">
        @if (stock() > 0) {
        <div class="tg-inline-flex tg-items-center tg-rounded-lg tg-border tg-border-slate-300 tg-bg-white">
          <button
            type="button"
            (click)="decreaseQty()"
            class="tg-h-10 tg-w-10 tg-text-base tg-font-semibold tg-text-slate-700 hover:tg-bg-slate-100"
            [disabled]="qty() <= 1"
          >
            -
          </button>
          <span class="tg-min-w-12 tg-text-center tg-text-sm tg-font-semibold tg-text-slate-900">{{ qty() }}</span>
          <button
            type="button"
            (click)="increaseQty()"
            class="tg-h-10 tg-w-10 tg-text-base tg-font-semibold tg-text-slate-700 hover:tg-bg-slate-100"
            [disabled]="qty() >= stock()"
          >
            +
          </button>
        </div>

        <button
          type="button"
          class="tg-rounded-lg tg-px-6 tg-py-3 tg-text-sm tg-font-semibold tg-text-white tg-transition-colors focus:tg-outline-none focus:tg-ring-2 focus:tg-ring-offset-2"
          [class.tg-bg-emerald-600]="addedQty() > 0"
          [class.hover:tg-bg-emerald-700]="addedQty() > 0"
          [class.focus:tg-ring-emerald-500]="addedQty() > 0"
          [class.tg-bg-indigo-600]="addedQty() === 0"
          [class.hover:tg-bg-indigo-700]="addedQty() === 0"
          [class.focus:tg-ring-indigo-500]="addedQty() === 0"
          [disabled]="!canAdd()"
          (click)="addToCart()"
        >
          {{ addedQty() > 0 ? 'Added ' + addedQty() + ' item(s)' : 'Add to cart' }}
        </button>

        @if (limitedByStock()) {
        <p class="tg-text-xs tg-font-medium tg-text-amber-700">Limited by available stock.</p>
        }
        } @else {
        <p class="tg-rounded-md tg-bg-rose-50 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-rose-700">
          Product out of stock
        </p>
        <button type="button" disabled
          class="tg-cursor-not-allowed tg-rounded-lg tg-bg-slate-100 tg-px-6 tg-py-3 tg-text-sm tg-font-semibold tg-text-slate-400">
          Add to cart
        </button>
        }
      </div>
    </div>
  </div>
  }
</section>
````

## File: libs/features/product-detail/src/lib/product-detail-page.scss
````scss
:host {
  display: block;
}
````

## File: libs/features/product-detail/src/lib/product-detail-page.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailPageComponent } from './product-detail-page';

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/features/product-detail/src/lib/product-detail-page.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  effect,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsStore } from '@techgear/data-access/products';
import { CartInventoryFacade } from '@techgear/data-access-cart';
import { ProductDetailViewComponent } from '@techgear/ui';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-product-detail-page',
  imports: [ProductDetailViewComponent],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsStore = inject(ProductsStore);
  private readonly cartFacade = inject(CartInventoryFacade);

  readonly product = this.productsStore.selected;
  readonly error = this.productsStore.selectedError;
  readonly isLoading = computed(
    () =>
      this.productsStore.selectedStatus() === 'loading' ||
      this.productsStore.selectedStatus() === 'reloading'
  );

  private readonly productId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: 0 }
  );

  readonly stock = computed(() => this.cartFacade.getStock(this.productId()));
  readonly qty = signal(1);
  readonly addedQty = signal(0);
  readonly limitedByStock = signal(false);
  readonly canAdd = computed(() => this.stock() > 0 && this.qty() > 0);

  constructor() {
    effect(() => {
      const available = this.stock();
      if (available <= 0) {
        this.qty.set(1);
        return;
      }

      if (this.qty() > available) {
        this.qty.set(available);
      }
    });
  }

  decreaseQty(): void {
    this.qty.update((current) => Math.max(1, current - 1));
  }

  increaseQty(): void {
    this.qty.update((current) => Math.min(Math.max(1, this.stock()), current + 1));
  }

  addToCart(): void {
    const product = this.product();
    if (!product) return;

    const result = this.cartFacade.addToCartQty({
      productId: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.images?.[0],
    }, this.qty());

    if (!result.success && result.appliedQty <= 0) {
      return;
    }

    this.addedQty.set(result.appliedQty);
    this.limitedByStock.set(result.limitedByStock);
    this.qty.set(1);
    setTimeout(() => {
      this.addedQty.set(0);
      this.limitedByStock.set(false);
    }, 2200);
  }

  ngOnInit(): void {
    const id = this.productId();

    if (!Number.isInteger(id) || id <= 0) {
      void this.router.navigate(['/catalog']);
      return;
    }

    this.productsStore.loadOne(id);
  }

  ngOnDestroy(): void {
    this.productsStore.clearSelected();
  }

  onBack(): void {
    void this.router.navigate(['/catalog']);
  }

  onRetry(): void {
    this.productsStore.reloadSelected();
  }
}
````

## File: libs/features/product-detail/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __productDetailVitestInitDone__: boolean | undefined;
}

if (!globalThis.__productDetailVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__productDetailVitestInitDone__ = true;
}
````

## File: libs/features/product-detail/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/features/product-detail/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/features/product-detail/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/ui': resolve(__dirname, '../../shared/ui/src/index.ts'),
      '@techgear/util': resolve(__dirname, '../../shared/util/src/index.ts'),
      '@techgear/data-access/products': resolve(__dirname, '../../data-access/products/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/shared/ui/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/shared/ui/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/shared/ui",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/shared/ui/package.json
````json
{
  "name": "@techgear/ui",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0",
    "@angular/forms": "^21.1.0",
    "@angular/router": "^21.1.0",
    "@techgear/util": "*"
  },
  "sideEffects": false
}
````

## File: libs/shared/ui/project.json
````json
{
  "name": "ui",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/shared/ui/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:shared", "type:ui"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/shared/ui/ng-package.json",
        "tsConfig": "libs/shared/ui/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/shared/ui/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/shared/ui/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/shared/ui/README.md
````markdown
# ui

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test ui` to execute the unit tests.
````

## File: libs/shared/ui/src/index.ts
````typescript
// Auth
export * from './lib/auth/login-form/login-form.component';

// Products
export * from './lib/products/category-filter/category-filter.component';
export * from './lib/products/product-card/product-card.component';
export * from './lib/products/product-detail-view/product-detail-view.component';

// Navigation
export * from './lib/navigation/pagination/pagination.component';
export * from './lib/header/header.component';

// Feedback
export * from './lib/feedback/error-banner/error-banner.component';
export * from './lib/feedback/confirm-dialog/confirm-dialog-host.component';
export * from './lib/feedback/confirm-dialog/confirm-dialog.service';
````

## File: libs/shared/ui/src/lib/auth/login-form/login-form.component.css
````css
:host {
  display: block;
}
````

## File: libs/shared/ui/src/lib/auth/login-form/login-form.component.html
````html
<form
  class="tg-mx-auto tg-w-full tg-max-w-md tg-space-y-5 tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-6 tg-shadow-sm"
  (submit)="onSubmit($event)"
  novalidate
>
  <div class="tg-space-y-1">
    <h2 class="tg-text-xl tg-font-semibold tg-text-slate-900">Sign In</h2>
    <p class="tg-text-sm tg-text-slate-600">Use your TechGear account to continue.</p>
  </div>

  <div class="tg-space-y-2">
    <label class="tg-text-sm tg-font-medium tg-text-slate-800" for="login-username">Username</label>
    <input
      id="login-username"
      type="text"
      class="tg-w-full tg-rounded-md tg-border tg-px-3 tg-py-2 tg-text-sm focus:tg-outline-none focus:tg-ring-2"
      [class.tg-border-rose-400]="!!usernameErrorMessage()"
      [class.tg-border-slate-300]="!usernameErrorMessage()"
      [attr.aria-invalid]="!!usernameErrorMessage()"
      autocomplete="username"
      [value]="loginForm.username().value()"
      (input)="onUsernameInput(($any($event.target).value ?? '').toString())"
      (blur)="onUsernameBlur()"
    />
    @if (usernameErrorMessage()) {
      <p class="tg-text-sm tg-text-rose-700">{{ usernameErrorMessage() }}</p>
    }
  </div>

  <div class="tg-space-y-2">
    <label class="tg-text-sm tg-font-medium tg-text-slate-800" for="login-password">Password</label>
    <input
      id="login-password"
      type="password"
      class="tg-w-full tg-rounded-md tg-border tg-px-3 tg-py-2 tg-text-sm focus:tg-outline-none focus:tg-ring-2"
      [class.tg-border-rose-400]="!!passwordErrorMessage()"
      [class.tg-border-slate-300]="!passwordErrorMessage()"
      [attr.aria-invalid]="!!passwordErrorMessage()"
      autocomplete="current-password"
      [value]="loginForm.password().value()"
      (input)="onPasswordInput(($any($event.target).value ?? '').toString())"
      (blur)="onPasswordBlur()"
    />
    @if (passwordErrorMessage()) {
      <p class="tg-text-sm tg-text-rose-700">{{ passwordErrorMessage() }}</p>
    }
  </div>

  @if (error()) {
    <div class="tg-rounded-md tg-border tg-border-rose-200 tg-bg-rose-50 tg-p-3 tg-text-sm tg-text-rose-700">
      {{ error() }}
    </div>
  }

  <button
    type="submit"
    class="tg-inline-flex tg-w-full tg-justify-center tg-rounded-md tg-bg-slate-900 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-white hover:tg-bg-slate-700 disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
    [disabled]="disableSubmit()"
  >
    @if (loading()) {
      Signing in...
    } @else {
      Sign in
    }
  </button>
</form>
````

## File: libs/shared/ui/src/lib/auth/login-form/login-form.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/auth/login-form/login-form.component.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { form, minLength, required } from '@angular/forms/signals';

export type LoginCredentials = {
  username: string;
  password: string;
};

@Component({
  selector: 'lib-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  readonly loading = input(false);
  readonly error = input<string | null>(null);
  readonly prefillCredentials = input<LoginCredentials | null>(null);
  readonly submitCredentials = output<LoginCredentials>();

  private readonly model = signal<LoginCredentials>({
    username: '',
    password: '',
  });

  readonly loginForm = form(this.model, (formPath) => {
    required(formPath.username);
    minLength(formPath.username, 3);
    required(formPath.password);
    minLength(formPath.password, 8);
  });

  readonly usernameTouched = signal(false);
  readonly passwordTouched = signal(false);

  readonly usernameErrors = computed(() => this.loginForm.username().errors());
  readonly passwordErrors = computed(() => this.loginForm.password().errors());

  readonly usernameErrorMessage = computed(() => {
    if (!this.usernameTouched() || this.usernameErrors().length === 0) {
      return null;
    }

    const hasRequired = this.usernameErrors().some((error) => error.kind === 'required');
    if (hasRequired) {
      return 'Username is required.';
    }

    return 'Username must be at least 3 characters.';
  });

  readonly passwordErrorMessage = computed(() => {
    if (!this.passwordTouched() || this.passwordErrors().length === 0) {
      return null;
    }
    const hasRequired = this.passwordErrors().some((error) => error.kind === 'required');
    if (hasRequired) {
      return 'Password is required.';
    }
    return 'Password must be at least 8 characters.';
  });

  readonly disableSubmit = computed(() => this.loading() || !this.loginForm().valid());

  constructor() {
    effect(() => {
      const prefill = this.prefillCredentials();
      if (!prefill) {
        return;
      }
      this.loginForm.username().value.set(prefill.username);
      this.loginForm.password().value.set(prefill.password);
      this.usernameTouched.set(false);
      this.passwordTouched.set(false);
    });
  }

  onUsernameInput(value: string): void {
    this.loginForm.username().value.set(value);
  }

  onPasswordInput(value: string): void {
    this.loginForm.password().value.set(value);
  }

  onUsernameBlur(): void {
    this.usernameTouched.set(true);
    this.loginForm.username().markAsTouched();
  }

  onPasswordBlur(): void {
    this.passwordTouched.set(true);
    this.loginForm.password().markAsTouched();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.usernameTouched.set(true);
    this.passwordTouched.set(true);
    this.loginForm.username().markAsTouched();
    this.loginForm.password().markAsTouched();

    if (this.disableSubmit()) {
      return;
    }

    const value = this.loginForm().value();
    this.submitCredentials.emit({
      username: value.username.trim(),
      password: value.password,
    });
  }
}
````

## File: libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.css
````css
.tg-confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: grid;
  place-items: center;
  background: rgb(15 23 42 / 55%);
  padding: 1rem;
}

.tg-confirm-dialog {
  width: min(420px, 100%);
  border-radius: 0.75rem;
  border: 1px solid rgb(203 213 225);
  background: #fff;
  padding: 1.25rem;
  box-shadow: 0 25px 50px -12px rgb(15 23 42 / 35%);
}

.tg-confirm-title {
  margin: 0;
  color: rgb(15 23 42);
  font-size: 1.1rem;
  font-weight: 700;
}

.tg-confirm-message {
  margin: 0.75rem 0 0;
  color: rgb(51 65 85);
  line-height: 1.45;
  font-size: 0.95rem;
}

.tg-confirm-actions {
  margin-top: 1.25rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.625rem;
}

.tg-confirm-cancel,
.tg-confirm-accept {
  border-radius: 0.5rem;
  border: 1px solid rgb(203 213 225);
  padding: 0.5rem 0.875rem;
  background: #fff;
  color: rgb(30 41 59);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.tg-confirm-cancel:hover,
.tg-confirm-accept:hover {
  background: rgb(248 250 252);
}

.tg-confirm-danger {
  border-color: rgb(251 113 133);
  background: rgb(255 241 242);
  color: rgb(190 18 60);
}

.tg-confirm-danger:hover {
  background: rgb(255 228 230);
}
````

## File: libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.html
````html
@if (confirmDialog.state(); as dialog) {
<div class="tg-confirm-overlay" (click)="confirmDialog.cancel()">
  <section
    class="tg-confirm-dialog"
    role="dialog"
    aria-modal="true"
    [attr.aria-labelledby]="'confirm-dialog-title'"
    (click)="$event.stopPropagation()"
  >
    <h2 id="confirm-dialog-title" class="tg-confirm-title">{{ dialog.title }}</h2>
    <p class="tg-confirm-message">{{ dialog.message }}</p>

    <div class="tg-confirm-actions">
      <button
        type="button"
        class="tg-confirm-cancel"
        (click)="confirmDialog.cancel()"
      >
        {{ dialog.cancelLabel }}
      </button>
      <button
        type="button"
        [class.tg-confirm-danger]="dialog.variant === 'danger'"
        class="tg-confirm-accept"
        (click)="confirmDialog.confirm()"
      >
        {{ dialog.confirmLabel }}
      </button>
    </div>
  </section>
</div>
}
````

## File: libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog-host.component.ts
````typescript
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'lib-confirm-dialog-host',
  imports: [],
  templateUrl: './confirm-dialog-host.component.html',
  styleUrl: './confirm-dialog-host.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogHostComponent {
  readonly confirmDialog = inject(ConfirmDialogService);

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.confirmDialog.state()) {
      this.confirmDialog.cancel();
    }
  }
}
````

## File: libs/shared/ui/src/lib/feedback/confirm-dialog/confirm-dialog.service.ts
````typescript
import { Injectable, signal } from '@angular/core';

export type ConfirmDialogOptions = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger';
};

type ConfirmDialogState = Required<ConfirmDialogOptions>;

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  readonly state = signal<ConfirmDialogState | null>(null);

  private pendingResolver: ((value: boolean) => void) | null = null;

  open(options: ConfirmDialogOptions): Promise<boolean> {
    if (this.pendingResolver) {
      this.pendingResolver(false);
    }

    this.state.set({
      title: options.title,
      message: options.message,
      confirmLabel: options.confirmLabel ?? 'Confirm',
      cancelLabel: options.cancelLabel ?? 'Cancel',
      variant: options.variant ?? 'default',
    });

    return new Promise<boolean>((resolve) => {
      this.pendingResolver = resolve;
    });
  }

  confirm(): void {
    this.finish(true);
  }

  cancel(): void {
    this.finish(false);
  }

  private finish(result: boolean): void {
    if (this.pendingResolver) {
      this.pendingResolver(result);
      this.pendingResolver = null;
    }
    this.state.set(null);
  }
}
````

## File: libs/shared/ui/src/lib/feedback/error-banner/error-banner.component.html
````html
@if (isVisible()) {
<div class="tg-border-b" [class]="toneClass()">
  <div class="tg-mx-auto tg-flex tg-w-full tg-max-w-[1400px] tg-items-start tg-justify-between tg-gap-3 tg-px-4 tg-py-3 sm:tg-px-6">
    <div class="tg-space-y-1">
      <p class="tg-text-sm tg-font-semibold">{{ error()?.code }}</p>
      <p class="tg-text-sm">{{ error()?.message }}</p>
    </div>

    <button
      type="button"
      class="tg-rounded-md tg-border tg-border-current tg-px-2 tg-py-1 tg-text-xs tg-font-semibold hover:tg-opacity-80"
      (click)="dismiss()"
      aria-label="Dismiss error"
    >
      Dismiss
    </button>
  </div>
</div>
}
````

## File: libs/shared/ui/src/lib/feedback/error-banner/error-banner.component.ts
````typescript
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { AppErrorSeverity, AppErrorState } from '@techgear/util';

@Component({
  selector: 'lib-error-banner',
  standalone: true,
  templateUrl: './error-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorBannerComponent {
  private readonly appErrorState = inject(AppErrorState);

  readonly error = this.appErrorState.latest;
  readonly isVisible = computed(() => !!this.error());

  readonly toneClass = computed(() => {
    const severity = this.error()?.severity;
    return this.getToneClass(severity ?? 'error');
  });

  dismiss(): void {
    this.appErrorState.clear();
  }

  private getToneClass(severity: AppErrorSeverity): string {
    switch (severity) {
      case 'info':
        return 'tg-border-sky-200 tg-bg-sky-50 tg-text-sky-800';
      case 'warning':
        return 'tg-border-amber-200 tg-bg-amber-50 tg-text-amber-800';
      case 'critical':
        return 'tg-border-rose-300 tg-bg-rose-100 tg-text-rose-900';
      default:
        return 'tg-border-rose-200 tg-bg-rose-50 tg-text-rose-800';
    }
  }
}
````

## File: libs/shared/ui/src/lib/header/header.component.html
````html
<header class="tg-sticky tg-top-0 tg-z-40 tg-border-b tg-border-slate-200/80 tg-bg-white/85 tg-backdrop-blur-md">
    <div
        class="tg-mx-auto tg-flex tg-w-full tg-max-w-[1400px] tg-items-center tg-justify-between tg-gap-4 tg-px-4 tg-py-3 sm:tg-px-6">
        <!-- Logo & Nav -->
        <div class="tg-flex tg-items-center tg-gap-3">
            <a routerLink="/catalog"
                class="tg-inline-flex tg-items-center tg-gap-2 tg-rounded-lg tg-bg-slate-900 tg-px-3 tg-py-1.5 tg-text-sm tg-font-semibold tg-text-white">
                <span class="tg-size-2 tg-rounded-full tg-bg-emerald-300"></span>
                TechGear
            </a>

            @if (isAuthenticated) {
            <nav class="tg-hidden sm:tg-flex">
                <a routerLink="/catalog" routerLinkActive="tg-text-slate-900 tg-bg-slate-200/80"
                    class="tg-rounded-md tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-600 hover:tg-bg-slate-200/60 hover:tg-text-slate-900">
                    Catalog
                </a>
            </nav>
            }
        </div>

        <!-- Right Side: Cart & User -->
        <div class="tg-flex tg-items-center tg-gap-3">

            <!-- Cart Link with Badge -->
            <a routerLink="/cart" routerLinkActive="tg-text-indigo-600 tg-bg-indigo-50"
                class="tg-group tg-relative tg-inline-flex tg-items-center tg-justify-center tg-rounded-full tg-p-2 tg-text-slate-500 hover:tg-bg-slate-100 hover:tg-text-slate-700"
                title="View Cart">

                <span class="tg-sr-only">Cart</span>

                <!-- SVG Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="tg-h-6 tg-w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                @if (cartCount > 0) {
                <span
                    class="tg-absolute -tg-right-1 -tg-top-1 tg-flex tg-h-5 tg-min-w-[1.25rem] tg-items-center tg-justify-center tg-rounded-full tg-bg-red-600 tg-px-1.5 tg-text-xs tg-font-bold tg-text-white tg-shadow-sm tg-ring-2 tg-ring-white">
                    {{ cartCount }}
                </span>
                }
            </a>

            @if (isAuthenticated && user) {
            <div class="tg-hidden tg-text-right md:tg-block">
                <p class="tg-text-sm tg-font-semibold tg-leading-none tg-text-slate-900">
                    {{ user.name }}
                </p>
                <p class="tg-mt-1 tg-text-xs tg-text-slate-500">
                    {{ user.email || 'Authenticated session' }}
                </p>
            </div>

            <div
                class="tg-flex tg-size-10 tg-items-center tg-justify-center tg-overflow-hidden tg-rounded-full tg-border tg-border-slate-200 tg-bg-slate-100 tg-text-xs tg-font-bold tg-text-slate-700">
                @if (user.avatar) {
                <img [src]="user.avatar" [alt]="user.name" class="tg-h-full tg-w-full tg-object-cover" />
                } @else {
                <span>{{ userInitials }}</span>
                }
            </div>

            <button type="button"
                class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
                (click)="logout.emit()">
                Logout
            </button>
            }
        </div>
    </div>
</header>
````

## File: libs/shared/ui/src/lib/header/header.component.ts
````typescript
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'lib-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() cartCount = 0;
    @Input() user: { name?: string; email?: string; avatar?: string | null } | null = null;
    @Input() isAuthenticated = false;
    @Input() userInitials = '';

    @Output() logout = new EventEmitter<void>();
}
````

## File: libs/shared/ui/src/lib/navigation/pagination/pagination.component.css
````css
:host {
  display: block;
}
````

## File: libs/shared/ui/src/lib/navigation/pagination/pagination.component.html
````html
<nav class="tg-flex tg-items-center tg-justify-end tg-gap-3">
  <button
    type="button"
    class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
    [disabled]="disablePrev()"
    (click)="previous.emit()"
  >
    Previous
  </button>
  <span class="tg-text-sm tg-font-medium">Page {{ page() }}</span>
  <button
    type="button"
    class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm disabled:tg-cursor-not-allowed disabled:tg-opacity-50"
    [disabled]="disableNext()"
    (click)="next.emit()"
  >
    Next
  </button>
</nav>
````

## File: libs/shared/ui/src/lib/navigation/pagination/pagination.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    fixture.componentRef.setInput('page', 1);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/navigation/pagination/pagination.component.ts
````typescript
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly page = input.required<number>();
  readonly disablePrev = input(false);
  readonly disableNext = input(false);
  readonly previous = output<void>();
  readonly next = output<void>();
}
````

## File: libs/shared/ui/src/lib/products/category-filter/category-filter.component.css
````css

````

## File: libs/shared/ui/src/lib/products/category-filter/category-filter.component.html
````html
<label class="tg-flex tg-flex-col tg-gap-2">
  <span class="tg-text-sm tg-font-medium">Category</span>
  <select
    class="tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm"
    [ngModel]="selectedCategoryId()"
    (ngModelChange)="onCategoryChange(($event ?? '').toString())"
  >
    <option value="">All categories</option>
    @for (category of categories(); track category.id) {
      <option [value]="category.id">{{ category.name }}</option>
    }
  </select>
</label>
````

## File: libs/shared/ui/src/lib/products/category-filter/category-filter.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFilterComponent } from './category-filter.component';

describe('CategoryFilterComponent', () => {
  let component: CategoryFilterComponent;
  let fixture: ComponentFixture<CategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryFilterComponent);
    fixture.componentRef.setInput('categories', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/products/category-filter/category-filter.component.ts
````typescript
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type CategoryFilterOption = {
  id: string;
  name: string;
};

@Component({
  selector: 'lib-category-filter',
  imports: [FormsModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent {
  readonly categories = input.required<readonly CategoryFilterOption[]>();
  readonly selectedCategoryId = input<string | null>(null);
  readonly selectedCategoryIdChange = output<string | null>();

  onCategoryChange(rawValue: string): void {
    this.selectedCategoryIdChange.emit(rawValue === '' ? null : rawValue);
  }
}
````

## File: libs/shared/ui/src/lib/products/product-card/product-card.component.css
````css
:host {
  display: block;
}
````

## File: libs/shared/ui/src/lib/products/product-card/product-card.component.html
````html
<article class="tg-flex tg-h-full tg-flex-col tg-gap-3 tg-rounded-xl tg-border tg-border-slate-200 tg-bg-white tg-p-4 tg-shadow-sm">
  <div class="tg-h-32 tg-overflow-hidden tg-rounded-md tg-bg-slate-100 sm:tg-h-36">
    @if (product().images.length > 0) {
      <img
        class="tg-h-full tg-w-full tg-object-contain tg-bg-white"
        [src]="imageUrl()"
        [alt]="product().title"
        (error)="onImageError($event)"
      />
    } @else {
      <div class="tg-flex tg-h-full tg-items-center tg-justify-center tg-text-sm tg-text-slate-500">
        No image
      </div>
    }
  </div>

  <div class="tg-flex tg-flex-1 tg-flex-col tg-gap-2">
    <p class="tg-text-xs tg-uppercase tg-tracking-wide tg-text-slate-500">
      {{ product().category?.name ?? 'Uncategorized' }}
    </p>
    <h3 class="tg-text-base tg-font-semibold tg-text-slate-900">{{ product().title }}</h3>
    <p class="tg-line-clamp-2 tg-text-sm tg-text-slate-600">{{ product().description }}</p>
  </div>

  <div class="tg-flex tg-items-center tg-justify-between">
    <p class="tg-text-lg tg-font-bold tg-text-slate-900">{{ product().price | currency }}</p>
    <button
      type="button"
      class="tg-rounded-md tg-bg-slate-900 tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-white hover:tg-bg-slate-700"
      (click)="onView()"
    >
      View
    </button>
  </div>
</article>
````

## File: libs/shared/ui/src/lib/products/product-card/product-card.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Cargar template y estilos inline para tests
const template = fs.readFileSync(path.join(__dirname, './product-card.component.html'), 'utf-8');
const styles = fs.readFileSync(path.join(__dirname, './product-card.component.css'), 'utf-8');

describe('ProductCardComponent', () => {
  let component: import('./product-card.component').ProductCardComponent;
  let fixture: ComponentFixture<import('./product-card.component').ProductCardComponent>;

  beforeEach(async () => {
    const { ProductCardComponent } = await import('./product-card.component');
    
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    })
    .overrideComponent(ProductCardComponent, {
      set: { template, styles: [styles] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', {
      id: 1,
      title: 'Mouse',
      price: 99,
      description: 'Wireless mouse',
      images: [],
      category: { name: 'Accessories' },
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/products/product-card/product-card.component.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { resolveDisplayImageUrl } from '@techgear/util';

export type ProductCardItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { name: string } | null;
};

@Component({
  selector: 'lib-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly product = input.required<ProductCardItem>();
  readonly view = output<number>();
  readonly imageUrl = computed(() => {
    const item = this.product();
    return resolveDisplayImageUrl(item.images[0], item.title, 600, 400, item.category?.name);
  });

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement | null;
    if (!image) {
      return;
    }
    const item = this.product();
    image.onerror = null;
    image.src = resolveDisplayImageUrl(
      undefined,
      item.title,
      600,
      400,
      item.category?.name
    );
  }

  onView(): void {
    this.view.emit(this.product().id);
  }
}
````

## File: libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.css
````css
:host {
  display: block;
}
````

## File: libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.html
````html
<article class="tg-grid tg-gap-8 lg:tg-grid-cols-[1.15fr_1fr]">
  <div class="tg-space-y-4">
    <div class="tg-overflow-hidden tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white">
      <img
        class="tg-aspect-square tg-w-full tg-object-cover"
        [src]="mainImageUrl()"
        [alt]="product().title"
      />
    </div>

    @if (galleryImageUrls().length > 1) {
    <div class="tg-grid tg-grid-cols-5 tg-gap-2">
      @for (image of galleryImageUrls(); track image; let index = $index) {
      <button
        type="button"
        (click)="selectImage(index)"
        class="tg-overflow-hidden tg-rounded-lg tg-border tg-bg-white"
        [class.tg-border-indigo-500]="mainImageUrl() === image"
        [class.tg-border-slate-200]="mainImageUrl() !== image"
      >
        <img class="tg-aspect-square tg-w-full tg-object-cover" [src]="image" [alt]="product().title + ' thumbnail'" />
      </button>
      }
    </div>
    }
  </div>

  <div class="tg-rounded-2xl tg-border tg-border-slate-200 tg-bg-white tg-p-6">
    <p class="tg-text-xs tg-font-semibold tg-uppercase tg-tracking-wide tg-text-indigo-600">
      {{ product().category?.name ?? 'Uncategorized' }}
    </p>
    <h2 class="tg-mt-2 tg-text-3xl tg-font-bold tg-leading-tight tg-text-slate-900">{{ product().title }}</h2>
    <p class="tg-mt-4 tg-text-4xl tg-font-black tg-text-slate-900">{{ product().price | currency }}</p>
    <p class="tg-mt-6 tg-whitespace-pre-line tg-text-sm tg-leading-7 tg-text-slate-700">{{ product().description }}</p>
  </div>
</article>
````

## File: libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailViewComponent } from './product-detail-view.component';

describe('ProductDetailViewComponent', () => {
  let component: ProductDetailViewComponent;
  let fixture: ComponentFixture<ProductDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailViewComponent);
    fixture.componentRef.setInput('product', {
      id: 1,
      title: 'Laptop',
      price: 1299,
      description: 'Demo laptop',
      images: [],
      category: { name: 'Computers' },
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: libs/shared/ui/src/lib/products/product-detail-view/product-detail-view.component.ts
````typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { resolveDisplayImageUrl } from '@techgear/util';

export type ProductDetailItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { name: string } | null;
};

@Component({
  selector: 'lib-product-detail-view',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-view.component.html',
  styleUrl: './product-detail-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailViewComponent {
  readonly product = input.required<ProductDetailItem>();
  private readonly activeImageIndex = signal(0);
  readonly imageUrls = computed(() => {
    const item = this.product();
    if (item.images.length === 0) {
      return [
        resolveDisplayImageUrl(
          undefined,
          item.title,
          900,
          900,
          item.category?.name
        ),
      ];
    }

    return item.images.map((image, index) =>
      resolveDisplayImageUrl(
        image,
        `${item.title} ${index + 1}`,
        900,
        900,
        item.category?.name
      )
    );
  });

  readonly mainImageUrl = computed(() => {
    const images = this.imageUrls();
    const index = this.activeImageIndex();
    return images[Math.min(index, images.length - 1)] ?? images[0];
  });

  readonly galleryImageUrls = computed(() => {
    return this.imageUrls().slice(0, 5);
  });

  selectImage(index: number): void {
    this.activeImageIndex.set(index);
  }
}
````

## File: libs/shared/ui/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __uiVitestInitDone__: boolean | undefined;
}

if (!globalThis.__uiVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__uiVitestInitDone__ = true;
}
````

## File: libs/shared/ui/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/shared/ui/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/shared/ui/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/shared/ui/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/shared/ui/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import * as fs from 'node:fs';

// Plugin simple para cargar templates HTML y estilos como strings
function angularTemplatePlugin() {
  return {
    name: 'angular-template-loader',
    transform(_code: string, id: string) {
      if (id.endsWith('.html')) {
        const html = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(html)}` };
      }
      if (id.endsWith('.css') || id.endsWith('.scss')) {
        const css = fs.readFileSync(id, 'utf-8');
        return { code: `export default ${JSON.stringify(css)}` };
      }
      return null;
    },
  };
}

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@techgear/util': resolve(__dirname, '../util/src/index.ts'),
    },
  },
  plugins: [angularTemplatePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: libs/shared/util/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}'],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: libs/shared/util/ng-package.json
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/libs/shared/util",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
````

## File: libs/shared/util/package.json
````json
{
  "name": "@techgear/util",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^21.1.0",
    "@angular/core": "^21.1.0"
  },
  "sideEffects": false
}
````

## File: libs/shared/util/project.json
````json
{
  "name": "util",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/shared/util/src",
  "prefix": "lib",
  "projectType": "library",
  "tags": ["scope:shared", "type:util"],
  "targets": {
    "build": {
      "executor": "@nx/angular:ng-packagr-lite",
      "outputs": ["{workspaceRoot}/dist/{projectRoot}"],
      "options": {
        "project": "libs/shared/util/ng-package.json",
        "tsConfig": "libs/shared/util/tsconfig.lib.json"
      },
      "configurations": {
        "production": {
          "tsConfig": "libs/shared/util/tsconfig.lib.prod.json"
        },
        "development": {}
      },
      "defaultConfiguration": "production"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c libs/shared/util/vitest.config.ts --run"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
````

## File: libs/shared/util/README.md
````markdown
# util

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test util` to execute the unit tests.
````

## File: libs/shared/util/src/index.ts
````typescript
// Validation errors
export * from './lib/errors/data-contract.error';
export * from './lib/errors/app-error';
export * from './lib/errors/http-error.interceptor';
export * from './lib/image/image-url';
export type { ContractIssue } from './lib/errors/data-contract.error';
export * from './lib/id/id.generator';
````

## File: libs/shared/util/src/lib/errors/app-error.ts
````typescript
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { DataContractError } from './data-contract.error';

export type AppErrorKind = 'network' | 'http4xx' | 'http5xx' | 'contract' | 'auth' | 'unknown';

export type AppErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface AppError {
  code: string;
  message: string;
  severity: AppErrorSeverity;
  retriable: boolean;
  kind: AppErrorKind;
  status?: number;
  source?: string;
  timestamp: string;
}

export class AppErrorModel extends Error implements AppError {
  readonly code: string;
  readonly severity: AppErrorSeverity;
  readonly retriable: boolean;
  readonly kind: AppErrorKind;
  readonly status?: number;
  readonly source?: string;
  readonly timestamp: string;

  constructor(data: AppError) {
    super(data.message);
    this.name = 'AppErrorModel';
    this.code = data.code;
    this.severity = data.severity;
    this.retriable = data.retriable;
    this.kind = data.kind;
    this.status = data.status;
    this.source = data.source;
    this.timestamp = data.timestamp;
  }
}

export function normalizeAppError(error: unknown): AppErrorModel {
  const timestamp = new Date().toISOString();

  if (error instanceof AppErrorModel) {
    return error;
  }

  if (error instanceof DataContractError) {
    return new AppErrorModel({
      code: 'CONTRACT_ERROR',
      message: error.getIssuesSummary() || 'Invalid server payload.',
      severity: 'error',
      retriable: false,
      kind: 'contract',
      source: error.source,
      timestamp,
    });
  }

  if (error instanceof HttpErrorResponse) {
    const serverMessage =
      typeof error.error === 'object' && error.error !== null && 'message' in error.error
        ? String((error.error as { message?: unknown }).message ?? '')
        : '';

    if (error.status === 0) {
      return new AppErrorModel({
        code: 'NETWORK_ERROR',
        message: 'Network error. Please check your connection and try again.',
        severity: 'warning',
        retriable: true,
        kind: 'network',
        status: error.status,
        timestamp,
      });
    }

    if (error.status === 401 || error.status === 403) {
      return new AppErrorModel({
        code: 'AUTH_ERROR',
        message: serverMessage || 'Authentication error. Please sign in again.',
        severity: 'warning',
        retriable: true,
        kind: 'auth',
        status: error.status,
        timestamp,
      });
    }

    if (error.status >= 400 && error.status < 500) {
      return new AppErrorModel({
        code: `HTTP_${error.status}`,
        message: serverMessage || error.message || 'Request error.',
        severity: 'warning',
        retriable: false,
        kind: 'http4xx',
        status: error.status,
        timestamp,
      });
    }

    if (error.status >= 500) {
      return new AppErrorModel({
        code: `HTTP_${error.status}`,
        message: serverMessage || 'Server error. Please try again later.',
        severity: 'error',
        retriable: true,
        kind: 'http5xx',
        status: error.status,
        timestamp,
      });
    }
  }

  if (error instanceof Error) {
    const isAuthMessage = /auth|token|session|credential/i.test(error.message);

    return new AppErrorModel({
      code: isAuthMessage ? 'AUTH_ERROR' : 'UNKNOWN_ERROR',
      message: error.message || 'Unexpected error.',
      severity: isAuthMessage ? 'warning' : 'error',
      retriable: !isAuthMessage,
      kind: isAuthMessage ? 'auth' : 'unknown',
      timestamp,
    });
  }

  return new AppErrorModel({
    code: 'UNKNOWN_ERROR',
    message: 'Unexpected error.',
    severity: 'error',
    retriable: false,
    kind: 'unknown',
    timestamp,
  });
}

@Injectable({ providedIn: 'root' })
export class AppErrorState {
  private readonly latestSignal = signal<AppErrorModel | null>(null);

  readonly latest = computed(() => this.latestSignal());

  report(error: unknown): AppErrorModel {
    const appError = normalizeAppError(error);
    this.latestSignal.set(appError);

    // Minimal centralized logging for diagnostics.
    console.error('[AppError]', appError, error);

    return appError;
  }

  clear(): void {
    this.latestSignal.set(null);
  }
}
````

## File: libs/shared/util/src/lib/errors/data-contract.error.ts
````typescript
/**
 * Minimal type to represent validation issues.
 * Compatible with ZodIssue without importing Zod.
 */
export type ContractIssue = {
    path: (string | number)[];
    message: string;
};

/**
 * Error thrown when an HTTP response does not match the expected contract.
 */
export class DataContractError extends Error {
    constructor(
        public readonly source: string,
        public readonly issues: ContractIssue[],
        message = 'Invalid server response'
    ) {
        super(message);
        this.name = 'DataContractError';
    }

    /**
     * Human-readable summary for validation issues.
     */
    getIssuesSummary(): string {
        return this.issues
            .map(issue => `${issue.path.join('.')}: ${issue.message}`)
            .join('; ');
    }
}
````

## File: libs/shared/util/src/lib/errors/http-error.interceptor.ts
````typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppErrorState } from './app-error';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const appErrorState = inject(AppErrorState);

  return next(request).pipe(
    catchError((error: unknown) => {
      const appError = appErrorState.report(error);
      return throwError(() => appError);
    })
  );
};
````

## File: libs/shared/util/src/lib/id/id.generator.ts
````typescript
export function createId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
````

## File: libs/shared/util/src/lib/image/image-url.ts
````typescript
export function resolveDisplayImageUrl(
  url: string | undefined,
  label: string,
  width = 600,
  height = 400,
  category?: string | null
): string {
  if (isUsableImageUrl(url)) {
    return url;
  }
  return buildProductPlaceholder(label, category, width, height);
}

function isUsableImageUrl(url: string | undefined): url is string {
  if (!url) {
    return false;
  }
  if (url.includes('i.imgur.com')) {
    return false;
  }
  if (url.includes('placehold.co')) {
    return false;
  }
  return true;
}

function buildProductPlaceholder(
  _label: string,
  category: string | null | undefined,
  width: number,
  height: number
): string {
  const theme = getTheme((category ?? '').toLowerCase());

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${theme.start}" />
      <stop offset="100%" stop-color="${theme.end}" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <circle cx="${Math.floor(width * 0.82)}" cy="${Math.floor(height * 0.2)}" r="${Math.floor(width * 0.11)}" fill="${theme.shape}" opacity="0.16" />
  <circle cx="${Math.floor(width * 0.18)}" cy="${Math.floor(height * 0.78)}" r="${Math.floor(width * 0.1)}" fill="${theme.shape}" opacity="0.12" />

  <circle cx="${Math.floor(width * 0.5)}" cy="${Math.floor(height * 0.5)}" r="${Math.floor(Math.min(width, height) * 0.14)}" fill="${theme.overlay}" />
  <rect x="${Math.floor(width * 0.5 - 34)}" y="${Math.floor(height * 0.5 - 26)}" width="68" height="52" rx="12" fill="${theme.icon}" />
  <rect x="${Math.floor(width * 0.5 - 20)}" y="${Math.floor(height * 0.5 - 8)}" width="40" height="24" rx="5" fill="${theme.iconInner}" />
  <circle cx="${Math.floor(width * 0.5 - 11)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />
  <circle cx="${Math.floor(width * 0.5)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />
  <circle cx="${Math.floor(width * 0.5 + 11)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />

  <text x="${Math.floor(width * 0.5)}" y="${Math.floor(height * 0.5 + 52)}" text-anchor="middle"
    font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="${theme.text}" opacity="0.9">
    Image unavailable
  </text>
</svg>`.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getTheme(categoryKey: string): {
  start: string;
  end: string;
  shape: string;
  icon: string;
  iconInner: string;
  iconDot: string;
  overlay: string;
  text: string;
} {
  if (categoryKey.includes('shoe')) {
    return {
      start: '#fff7ed',
      end: '#ffedd5',
      shape: '#fb923c',
      icon: '#ea580c',
      iconInner: '#fff7ed',
      iconDot: '#fdba74',
      overlay: 'rgba(124,45,18,0.14)',
      text: '#7c2d12',
    };
  }

  if (categoryKey.includes('cloth')) {
    return {
      start: '#eff6ff',
      end: '#dbeafe',
      shape: '#60a5fa',
      icon: '#2563eb',
      iconInner: '#dbeafe',
      iconDot: '#93c5fd',
      overlay: 'rgba(30,64,175,0.14)',
      text: '#1e3a8a',
    };
  }

  if (categoryKey.includes('elect') || categoryKey.includes('tech')) {
    return {
      start: '#f5f3ff',
      end: '#ede9fe',
      shape: '#8b5cf6',
      icon: '#6d28d9',
      iconInner: '#ede9fe',
      iconDot: '#c4b5fd',
      overlay: 'rgba(76,29,149,0.14)',
      text: '#4c1d95',
    };
  }

  return {
    start: '#f8fafc',
    end: '#e2e8f0',
    shape: '#94a3b8',
    icon: '#475569',
    iconInner: '#e2e8f0',
    iconDot: '#cbd5e1',
    overlay: 'rgba(15,23,42,0.12)',
    text: '#0f172a',
  };
}
````

## File: libs/shared/util/src/test-setup.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  // eslint-disable-next-line no-var
  var __utilVitestInitDone__: boolean | undefined;
}

if (!globalThis.__utilVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__utilVitestInitDone__ = true;
}
````

## File: libs/shared/util/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/shared/util/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: libs/shared/util/tsconfig.lib.prod.json
````json
{
  "extends": "./tsconfig.lib.json",
  "compilerOptions": {
    "declarationMap": false
  },
  "angularCompilerOptions": {}
}
````

## File: libs/shared/util/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
````

## File: libs/shared/util/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  root: __dirname,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    include: ['src/**/*.spec.ts'],
  },
});
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tg-',
  content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  theme: { extend: {} },
  plugins: [],
};
````

## File: .editorconfig
````
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
````

## File: .gitignore
````
# See https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# compiled output
dist
tmp
out-tsc

# dependencies
node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

.nx/cache
.nx/workspace-data

.angular

__screenshots__/

apps/**/src/environments/environment.local.ts
graph.html
static/
````

## File: .prettierignore
````
node_modules
dist
.nx
coverage
.angular
````

## File: .prettierrc
````
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5"
}
````

## File: apps/shop-web/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/shop-web/project.json
````json
{
  "name": "shop-web",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/shop-web/src",
  "tags": ["type:feature"],
  "targets": {
    "build": {
      "executor": "@angular/build:application",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/apps/shop-web",
        "browser": "apps/shop-web/src/main.ts",
        "tsConfig": "apps/shop-web/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/shop-web/public"
          }
        ],
        "styles": ["apps/shop-web/src/styles.scss"]
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "650kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "4kb",
              "maximumError": "8kb"
            }
          ],
          "outputHashing": "all"
        },
        "development": {
          "fileReplacements": [
            {
              "replace": "apps/shop-web/src/environments/environment.ts",
              "with": "apps/shop-web/src/environments/environment.development.ts"
            }
          ],
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        },
        "local": {
          "fileReplacements": [
            {
              "replace": "apps/shop-web/src/environments/environment.ts",
              "with": "apps/shop-web/src/environments/environment.local.ts"
            }
          ],
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "continuous": true,
      "executor": "@angular/build:dev-server",
      "configurations": {
        "production": {
          "buildTarget": "shop-web:build:production"
        },
        "development": {
          "buildTarget": "shop-web:build:development"
        },
        "local": {
          "buildTarget": "shop-web:build:local"
        }
      },
      "defaultConfiguration": "development"
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "nx:run-commands",
      "options": {
        "command": "vitest -c apps/shop-web/vitest.config.ts --run"
      }
    },
    "serve-static": {
      "continuous": true,
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "shop-web:build",
        "staticFilePath": "dist/apps/shop-web",
        "spa": true
      }
    }
  }
}
````

## File: apps/shop-web/src/app/app.config.ts
````typescript
import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  inject,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  AUTH_API_BASE_URL,
  AuthStore,
  authInterceptor,
  provideTokenStorage,
} from '@techgear/data-access/auth';
import { LOGIN_PAGE_CONFIG } from '@techgear/features/auth';
import { PRODUCTS_API_BASE_URL } from '@techgear/data-access/products';
import { CATEGORIES_API_BASE_URL } from '@techgear/data-access/categories';
import { InventoryStore } from '@techgear/data-access/inventory';
import { CartStore } from '@techgear/data-access-cart';
import { httpErrorInterceptor } from '@techgear/util';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptors([httpErrorInterceptor, authInterceptor])),
    provideTokenStorage(),
    {
      provide: AUTH_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: PRODUCTS_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: CATEGORIES_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: LOGIN_PAGE_CONFIG,
      useValue: {
        appTitle: 'TechGear Inventory Pro',
        subtitle: 'Sign in to explore the storefront, product detail flow, and cart experience.',
        defaultRedirectUrl: '/catalog',
        demoAccount: {
          email: 'emily.johnson@x.dummyjson.com',
          username: 'emilys',
          password: 'emilyspass',
        },
      },
    },
    provideAppInitializer(() => {
      const authStore = inject(AuthStore);
      const inventoryStore = inject(InventoryStore);
      const cartStore = inject(CartStore);
      authStore.initFromStorage();
      inventoryStore.loadFromStorage();
      cartStore.loadFromStorage();
    }),
    provideRouter(appRoutes),
  ],
};
````

## File: apps/shop-web/src/app/app.html
````html
<lib-error-banner></lib-error-banner>
<router-outlet></router-outlet>
````

## File: apps/shop-web/src/app/app.routes.ts
````typescript
import { Route } from '@angular/router';
import { authGuard } from '@techgear/data-access/auth';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@techgear/features/auth').then(
        (module) => module.LoginPageComponent
      ),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/catalog').then((module) => module.ShopShellPageComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },
      {
        path: 'catalog',
        loadComponent: () =>
          import('@techgear/catalog').then(
            (module) => module.CatalogPageComponent
          ),
      },
      {
        path: 'products',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('@techgear/product-detail').then(
            (module) => module.ProductDetailPageComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('@techgear/features-cart').then(
            (module) => module.CartPageComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
````

## File: apps/shop-web/src/app/app.scss
````scss

````

## File: apps/shop-web/src/app/app.spec.ts
````typescript
import { App } from './app';

describe('ShopWeb App Shell', () => {
  it('should expose the app class', () => {
    expect(App).toBeDefined();
  });

  it('should instantiate the app class', () => {
    const instance = new App();
    expect(instance).toBeTruthy();
  });
});
````

## File: apps/shop-web/src/app/app.ts
````typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorBannerComponent } from '@techgear/ui';

@Component({
  standalone: true,
  imports: [RouterOutlet, ErrorBannerComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App { }
````

## File: apps/shop-web/src/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>shop-web</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
````

## File: apps/shop-web/src/main.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
````

## File: apps/shop-web/src/styles.scss
````scss
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add global styles to this file, and also import other style files */
````

## File: apps/shop-web/tsconfig.app.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
````

## File: apps/shop-web/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: apps/shop-web/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": ["vitest/globals"]
  },
  "files": ["src/test-setup.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
````

## File: eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared']
            },
            {
              sourceTag: 'scope:cart',
              onlyDependOnLibsWithTags: ['scope:cart', 'scope:inventory', 'scope:shared']
            },
            {
              sourceTag: 'scope:inventory',
              onlyDependOnLibsWithTags: ['scope:inventory', 'scope:shared']
            },
            {
              sourceTag: 'scope:products',
              onlyDependOnLibsWithTags: ['scope:products', 'scope:shared']
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: ['type:feature', 'type:data-access', 'type:ui', 'type:util']
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util']
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:ui', 'type:util']
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util']
            }
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
````

## File: nx.json
````json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "defaultBase": "master",
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": [
      "default",
      "!{projectRoot}/.eslintrc.json",
      "!{projectRoot}/eslint.config.mjs",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json",
      "!{projectRoot}/vitest.config.[jt]s",
      "!{projectRoot}/src/test-setup.[jt]s",
      "!{projectRoot}/test-setup.[jt]s"
    ],
    "sharedGlobals": []
  },
  "targetDefaults": {
    "@angular/build:application": {
      "cache": true,
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    },
    "@nx/eslint:lint": {
      "cache": true,
      "inputs": [
        "default",
        "{workspaceRoot}/.eslintrc.json",
        "{workspaceRoot}/.eslintignore",
        "{workspaceRoot}/eslint.config.mjs"
      ]
    },
    "@nx/angular:ng-packagr-lite": {
      "cache": true,
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    }
  },
  "generators": {
    "@nx/angular:application": {
      "e2eTestRunner": "none",
      "linter": "eslint",
      "style": "scss",
      "unitTestRunner": "vitest-angular"
    },
    "@nx/angular:library": {
      "linter": "eslint",
      "unitTestRunner": "vitest-angular"
    },
    "@nx/angular:component": {
      "style": "css"
    }
  }
}
````

## File: package.json
````json
{
  "name": "@techgear/source",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "prepare": "husky"
  },
  "private": true,
  "dependencies": {
    "@angular-devkit/build-angular": "~21.1.0",
    "@angular/common": "~21.1.0",
    "@angular/compiler": "~21.1.0",
    "@angular/core": "~21.1.0",
    "@angular/forms": "~21.1.0",
    "@angular/platform-browser": "~21.1.0",
    "@angular/platform-browser-dynamic": "~21.1.0",
    "@angular/router": "~21.1.0",
    "@ngrx/signals": "^21.0.1",
    "rxjs": "~7.8.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@angular-devkit/core": "~21.1.0",
    "@angular-devkit/schematics": "~21.1.0",
    "@angular/build": "~21.1.0",
    "@angular/cli": "~21.1.0",
    "@angular/compiler-cli": "~21.1.0",
    "@angular/language-service": "~21.1.0",
    "@commitlint/cli": "^20.4.1",
    "@commitlint/config-conventional": "^20.4.1",
    "@eslint/js": "^9.8.0",
    "@nx/angular": "22.4.4",
    "@nx/eslint": "22.4.4",
    "@nx/eslint-plugin": "22.4.4",
    "@nx/js": "22.4.4",
    "@nx/web": "22.4.4",
    "@nx/workspace": "22.4.4",
    "@schematics/angular": "~21.1.0",
    "@swc-node/register": "~1.9.1",
    "@swc/core": "~1.5.7",
    "@swc/helpers": "~0.5.11",
    "@types/node": "20.19.9",
    "@typescript-eslint/utils": "^8.40.0",
    "angular-eslint": "^21.0.1",
    "autoprefixer": "^10.4.24",
    "eslint": "^9.8.0",
    "eslint-config-prettier": "^10.0.0",
    "husky": "^9.1.7",
    "jsdom": "^27.1.0",
    "jsonc-eslint-parser": "^2.1.0",
    "ng-packagr": "~21.1.0",
    "nx": "22.4.4",
    "postcss": "^8.5.6",
    "postcss-url": "~10.1.3",
    "prettier": "~3.6.2",
    "tailwindcss": "^3.4.17",
    "ts-node": "10.9.1",
    "tslib": "^2.3.0",
    "typescript": "~5.9.2",
    "typescript-eslint": "^8.40.0",
    "vitest": "^4.0.8"
  }
}
````

## File: README.md
````markdown
# TechGear Inventory Pro

[![CI]()]()
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f?logo=github)]()

English and Spanish documentation for the current Nx workspace.
Documentacion en ingles y espanol para el workspace actual de Nx.

## English

### Overview

TechGear Inventory Pro is a dual-application Angular workspace built with Nx.
It contains a customer storefront (`shop-web`) and an internal inventory/admin experience (`admin-panel`) that share domain libraries, validation rules, and UI primitives.

The repository is structured as a frontend architecture demo focused on:

- Angular 21 standalone applications.
- Nx 22 project boundaries and affected pipelines.
- Signal-first state with `@ngrx/signals` in key domains.
- Contract validation with `zod` against the DummyJSON demo API.
- CI/CD automation for lint, test, build, and GitHub Pages deployment.

### Current Workspace Structure

```text
techgear/
|-- apps/
|   |-- shop-web
|   `-- admin-panel
|-- libs/
|   |-- core
|   |-- data-access/
|   |   |-- auth
|   |   |-- cart
|   |   |-- categories
|   |   |-- inventory
|   |   `-- products
|   |-- features/
|   |   |-- admin-inventory
|   |   |-- admin-products
|   |   |-- auth
|   |   |-- cart
|   |   |-- catalog
|   |   `-- product-detail
|   `-- shared/
|       |-- ui
|       `-- util
|-- docs/
|   `-- adr/
`-- .github/workflows/
```

### Architecture Notes

- Both apps bootstrap with `provideZonelessChangeDetection()`.
- Routing and environment wiring stay in `apps/*`; reusable behavior lives in `libs/*`.
- `libs/data-access/*` owns API integration, parsing, storage, and state updates.
- `libs/features/*` owns feature orchestration and smart UI flows.
- `libs/shared/*` contains reusable UI and cross-cutting utilities.
- DummyJSON remains the demo backend, so runtime parsing and defensive error handling are part of the architecture.

### Tooling Status

Testing is fully standardized on Vitest across the entire workspace.

- All projects use Vitest with project-level `vitest.config.ts`.
- CI is standardized around `nx affected` for `lint`, `test`, and `build`.
- No Jest dependencies remain in the workspace.

### Tech Stack

| Area | Current choice |
|---|---|
| Frontend | Angular 21 |
| Workspace | Nx 22 |
| Styling | SCSS + Tailwind CSS |
| State | Angular signals + `@ngrx/signals` |
| Validation | `zod` |
| Testing | Vitest (jsdom) |
| CI/CD | GitHub Actions |
| Deployment | GitHub Pages |

### Local Development

```bash
npm install
npx nx serve shop-web
npx nx serve admin-panel
npx nx test shop-web
npx nx test admin-panel
npx nx build shop-web
npx nx build admin-panel
```

Environment variants currently used by both apps:

- `development`
- `local`
- `production`

Local-only environment files such as `environment.local.ts` are intentionally ignored by Git.

### Demo Access For GitHub Pages

The published demo intentionally exposes a sample account so reviewers can access both apps without setup.

- Email reference: `emily.johnson@x.dummyjson.com`
- Username for sign-in: `emilys`
- Password: `emilyspass`

Important: DummyJSON authentication uses `username` and `password`, not email. The email is shown in the UI only as portfolio/demo context.

### CI/CD

`/.github/workflows/ci.yml`

- Runs on push and pull request.
- Executes `nx affected --target=lint`.
- Executes `nx affected --target=test`.
- Executes `nx affected --target=build`.
- Uploads logs and build artifacts.

`/.github/workflows/deploy-pages.yml`

- Deploys after CI succeeds on `main`.
- Builds both applications with the correct base href.
- Publishes a combined Pages site with `/` for `shop-web` and `/admin/` for `admin-panel`.

### Documentation

- [Docs index](./docs/README.md)
- [Architecture Decision Records](./docs/adr/)
- [ADR-0001 Architecture](./docs/adr/ADR-0001-architecture.md)
- [Fake backend alternatives](./fake-backend-alternatives.md)

### Known Gaps

- DummyJSON is still a demo backend and not a production-owned API.
- No dedicated E2E project is present yet.
- Observability and release governance are still pending.

## Espanol

### Resumen

TechGear Inventory Pro es un workspace de Angular con dos aplicaciones montado sobre Nx.
Incluye una tienda para cliente (`shop-web`) y una experiencia interna de administracion e inventario (`admin-panel`) que comparten librerias de dominio, validaciones y componentes reutilizables.

El repositorio esta orientado a mostrar una arquitectura frontend con foco en:

- Aplicaciones Angular 21 standalone.
- Limites de proyecto y ejecucion affected con Nx 22.
- Estado basado en signals con `@ngrx/signals` en dominios clave.
- Validacion de contratos con `zod` frente a la API demo de DummyJSON.
- Automatizacion de CI/CD para lint, test, build y despliegue a GitHub Pages.

### Estructura Actual

```text
techgear/
|-- apps/
|   |-- shop-web
|   `-- admin-panel
|-- libs/
|   |-- core
|   |-- data-access/
|   |   |-- auth
|   |   |-- cart
|   |   |-- categories
|   |   |-- inventory
|   |   `-- products
|   |-- features/
|   |   |-- admin-inventory
|   |   |-- admin-products
|   |   |-- auth
|   |   |-- cart
|   |   |-- catalog
|   |   `-- product-detail
|   `-- shared/
|       |-- ui
|       `-- util
|-- docs/
|   `-- adr/
`-- .github/workflows/
```

### Notas de Arquitectura

- Ambas apps arrancan con `provideZonelessChangeDetection()`.
- El routing y la configuracion de entorno viven en `apps/*`; la logica reutilizable vive en `libs/*`.
- `libs/data-access/*` concentra integracion API, parseo, almacenamiento y actualizacion de estado.
- `libs/features/*` concentra la orquestacion funcional y los flujos de UI.
- `libs/shared/*` agrupa UI reutilizable y utilidades transversales.
- DummyJSON sigue siendo el backend de demo, por lo que el parseo en runtime y el manejo defensivo de errores forman parte del diseno.

### Estado Actual del Tooling

Testing esta completamente estandarizado con Vitest en todo el workspace.

- Todos los proyectos usan Vitest con `vitest.config.ts` a nivel de proyecto.
- El CI esta estandarizado con `nx affected` para `lint`, `test` y `build`.
- No quedan dependencias de Jest en el workspace.

### Stack Tecnologico

| Area | Eleccion actual |
|---|---|
| Frontend | Angular 21 |
| Workspace | Nx 22 |
| Estilos | SCSS + Tailwind CSS |
| Estado | Angular signals + `@ngrx/signals` |
| Validacion | `zod` |
| Testing | Vitest (jsdom) |
| CI/CD | GitHub Actions |
| Despliegue | GitHub Pages |

### Desarrollo Local

```bash
npm install
npx nx serve shop-web
npx nx serve admin-panel
npx nx test shop-web
npx nx test admin-panel
npx nx build shop-web
npx nx build admin-panel
```

Variantes de entorno usadas actualmente por ambas apps:

- `development`
- `local`
- `production`

Los archivos locales como `environment.local.ts` se ignoran en Git de forma intencional.

### Acceso Demo Para GitHub Pages

La demo publicada expone de forma intencional una cuenta de ejemplo para que cualquiera pueda entrar a ambas apps sin configuracion previa.

- Email de referencia: `emily.johnson@x.dummyjson.com`
- Username real para login: `emilys`
- Password: `emilyspass`

Importante: la autenticacion de DummyJSON usa `username` y `password`, no email. El email se muestra solo como contexto de demo/portafolio.

### CI/CD

`/.github/workflows/ci.yml`

- Corre en push y pull request.
- Ejecuta `nx affected --target=lint`.
- Ejecuta `nx affected --target=test`.
- Ejecuta `nx affected --target=build`.
- Publica logs y artefactos de build.

`/.github/workflows/deploy-pages.yml`

- Despliega despues de un CI exitoso sobre `main`.
- Hace build de ambas aplicaciones con el `base-href` correcto.
- Publica un sitio combinado con `/` para `shop-web` y `/admin/` para `admin-panel`.

### Documentacion

- [Indice de docs](./docs/README.md)
- [Architecture Decision Records](./docs/adr/)
- [ADR-0001 Arquitectura](./docs/adr/ADR-0001-architecture.md)
- [Alternativas de fake backend](./fake-backend-alternatives.md)

### Brechas Actuales

- DummyJSON sigue siendo una API de demo y no un backend propio de produccion.
- Todavia no hay un proyecto E2E dedicado.
- Falta observabilidad y gobierno de release.
````

## File: tsconfig.base.json
````json
{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es2015",
    "module": "esnext",
    "lib": ["es2020", "dom"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@techgear/ui": ["libs/shared/ui/src/index.ts"],
      "@techgear/util": ["libs/shared/util/src/index.ts"],
      "@techgear/data-access/auth": ["libs/data-access/auth/src/index.ts"],
      "@techgear/data-access/products": ["libs/data-access/products/src/index.ts"],
      "@techgear/data-access/categories": ["libs/data-access/categories/src/index.ts"],
      "@techgear/catalog": ["libs/features/catalog/src/index.ts"],
      "@techgear/product-detail": ["libs/features/product-detail/src/index.ts"],
      "@techgear/features/auth": ["libs/features/auth/src/index.ts"],
      "@techgear/data-access-cart": ["libs/data-access/cart/src/index.ts"],
      "@techgear/features-cart": ["libs/features/cart/src/index.ts"],
      "@techgear/data-access-inventory": ["libs/data-access/inventory/src/index.ts"],
      "@techgear/data-access/inventory": ["libs/data-access/inventory/src/index.ts"],
      "@techgear/features-admin-inventory": ["libs/features/admin-inventory/src/index.ts"],
      "@techgear/features-admin-products": ["libs/features/admin-products/src/index.ts"]
    }
  },
  "exclude": ["node_modules", "tmp"]
}
````
