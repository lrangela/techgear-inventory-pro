# TechGear Inventory Pro

[![CI](https://github.com/lrangel/techgear/actions/workflows/ci.yml/badge.svg)](https://github.com/lrangel/techgear/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f?logo=github)](https://lrangel.github.io/techgear/)

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
- Modern Angular APIs are standard: `OnPush`, Signal `input()`/`output()`, and `@defer` blocks for rendering optimization.
- Routing and environment wiring stay in `apps/*`; reusable behavior lives in `libs/*`.
- `libs/data-access/*` owns API integration, parsing, storage, and state updates.
- `libs/features/*` owns feature orchestration and smart UI flows.
- `libs/shared/*` contains reusable UI and cross-cutting utilities.
- DummyJSON remains the demo backend, so runtime parsing and defensive error handling are part of the architecture.

### Tooling Status

Testing and verification are standardized across the entire workspace.

- All projects use Vitest with project-level `vitest.config.ts`.
- End-to-end coverage uses Playwright with one root config and one logical project per app.
- `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` are valid workspace-level checks.
- `npm run e2e` validates the login and primary navigation flows for `shop-web` and `admin-panel`.
- CI runs `affected` targets on pull requests and full workspace verification on push/workflow dispatch.
- No Jest dependencies remain in the workspace.
- `shop-web` and `admin-panel` both build successfully for production.

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
npm run typecheck
npm run lint
npm run test
npm run build
npm run e2e
npx nx serve shop-web
npx nx serve admin-panel
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

- Runs on push, pull request, and manual dispatch.
- Executes workspace typecheck first.
- Executes `nx affected` for `lint`, `test`, and `build` on pull requests.
- Executes full `run-many --all` verification on push and manual dispatch.
- Executes Playwright E2E after build validation.
- Uploads logs and build artifacts.

`/.github/workflows/deploy-pages.yml`

- Deploys after CI succeeds on `master`.
- Builds both applications with the correct base href.
- Publishes a combined Pages site with `/` for `shop-web` and `/admin/` for `admin-panel`.

### Documentation

- [Docs index](./docs/README.md)
- [Architecture Decision Records](./docs/adr/)
- [ADR-0001 Architecture](./docs/adr/ADR-0001-architecture.md)
- [ADR-0002 Quality And Delivery](./docs/adr/ADR-0002-quality-and-delivery.md)
- [Fake backend alternatives](./fake-backend-alternatives.md)

### Known Gaps

- DummyJSON is still a demo backend and not a production-owned API.
- Observability and release governance are still pending.
- Review of component usage did not reveal orphaned feature/shared components; the remaining minimal root shell components are intentional.
- E2E still depends on DummyJSON availability and demo credentials because the repo does not own the backend.

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
- Se utilizan APIs modernas de Angular como estandar: `OnPush`, Signal `input()`/`output()`, y bloques `@defer` para optimizacion de renderizado.
- El routing y la configuracion de entorno viven en `apps/*`; la logica reutilizable vive en `libs/*`.
- `libs/data-access/*` concentra integracion API, parseo, almacenamiento y actualizacion de estado.
- `libs/features/*` concentra la orquestacion funcional y los flujos de UI.
- `libs/shared/*` agrupa UI reutilizable y utilidades transversales.
- DummyJSON sigue siendo el backend de demo, por lo que el parseo en runtime y el manejo defensivo de errores forman parte del diseno.

### Estado Actual del Tooling

Testing y verificacion quedaron estandarizados en todo el workspace.

- Todos los proyectos usan Vitest con `vitest.config.ts` a nivel de proyecto.
- La cobertura end-to-end usa Playwright con una configuracion raiz y un proyecto logico por app.
- `npm run typecheck`, `npm run lint`, `npm run test` y `npm run build` sirven como chequeos de workspace completo.
- `npm run e2e` valida login y navegacion principal en `shop-web` y `admin-panel`.
- El CI ejecuta `affected` en pull requests y verificacion completa del workspace en push/manual.
- No quedan dependencias de Jest en el workspace.
- `shop-web` y `admin-panel` compilan correctamente para produccion.

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
npm run typecheck
npm run lint
npm run test
npm run build
npm run e2e
npx nx serve shop-web
npx nx serve admin-panel
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

- Corre en push, pull request y disparo manual.
- Ejecuta primero typecheck del workspace.
- Ejecuta `nx affected` para `lint`, `test` y `build` en pull requests.
- Ejecuta `run-many --all` para validacion completa en push y disparo manual.
- Ejecuta E2E con Playwright despues del build.
- Publica logs y artefactos de build.

`/.github/workflows/deploy-pages.yml`

- Despliega despues de un CI exitoso sobre `master`.
- Hace build de ambas aplicaciones con el `base-href` correcto.
- Publica un sitio combinado con `/` para `shop-web` y `/admin/` para `admin-panel`.

### Documentacion

- [Indice de docs](./docs/README.md)
- [Architecture Decision Records](./docs/adr/)
- [ADR-0001 Arquitectura](./docs/adr/ADR-0001-architecture.md)
- [ADR-0002 Calidad y Delivery](./docs/adr/ADR-0002-quality-and-delivery.md)
- [Alternativas de fake backend](./fake-backend-alternatives.md)

### Brechas Actuales

- DummyJSON sigue siendo una API de demo y no un backend propio de produccion.
- Falta observabilidad y gobierno de release.
- La revision de uso de componentes no encontro componentes feature/shared huerfanos; los shells raiz minimos que quedan son intencionales.
- El E2E sigue dependiendo de la disponibilidad de DummyJSON y de las credenciales demo porque el backend no es propio.
