# Docs

## English

This folder contains project-level documentation aligned with the current demo architecture.

Current contents:

- `adr/ADR-0001-architecture.md`
  - Updated architecture for dual-app Angular/Nx demo, session-scoped auth, demonstrative frontend RBAC, catalog-driven inventory, and API-backed filtering.
- `adr/ADR-0002-quality-and-delivery.md`
  - Updated quality gate for typecheck, lint, tests, build, E2E, budgets, and static delivery constraints.
- `adr/ADR-0003-auth-strategy-static-deploy.md`
  - Updated auth strategy for DummyJSON remote mode and GitHub Pages mock mode.
  - Remote login screens now show API-backed sample credentials:
    - `shop-web` uses DummyJSON `/users/6`
    - `admin-panel` uses DummyJSON `/users/1`
    - raw remote passwords are no longer rendered in the UI; they are only prefilled in the form

Related documents:

- `../README.md`: full project overview, problem/solution, architecture diagram, run/deploy flow, stack, and feature summary.
- `../fake-backend-alternatives.md`: evaluated alternatives and migration rationale beyond DummyJSON.
- Current CI/CD status:
  - `typecheck`, `lint`, `test`, `build`, and `e2e` were re-verified locally on 2026-03-23 and pass.
  - `e2e:remote-auth` was also re-verified locally on 2026-03-23 and passes against DummyJSON.
  - `build` passes with bundle-budget warnings in both apps (`shop-web` `675.92 kB`, `admin-panel` `681.20 kB` against a `620 kB` warning budget).
  - `security-audit` remains visible but non-blocking because of Angular advisory `GHSA-g93w-mfhg-p222` in the installed Angular 21.1.x line.
  - Remote auth smoke coverage can be executed with `npm run e2e:remote-auth`.

## Espanol

Esta carpeta contiene documentacion del proyecto alineada con la arquitectura demo actual.

Contenido actual:

- `adr/ADR-0001-architecture.md`
  - Arquitectura actualizada para el demo Angular/Nx de dos apps, auth por sesion, RBAC frontend demostrativo, inventario sincronizado con catalogo y filtros paginados por API.
- `adr/ADR-0002-quality-and-delivery.md`
  - Gate de calidad actualizado para typecheck, lint, pruebas, build, E2E, budgets y restricciones del despliegue estatico.
- `adr/ADR-0003-auth-strategy-static-deploy.md`
  - Estrategia de auth actualizada para modo remoto con DummyJSON y modo mock en GitHub Pages.
  - Las pantallas de login remoto ahora muestran credenciales de prueba obtenidas desde la API:
    - `shop-web` usa DummyJSON `/users/6`
    - `admin-panel` usa DummyJSON `/users/1`
    - la password remota ya no se renderiza en la UI; solo se precarga en el formulario

Documentos relacionados:

- `../README.md`: vision completa del proyecto, problema/solucion, diagrama de arquitectura, ejecucion, despliegue, stack y features.
- `../fake-backend-alternatives.md`: alternativas evaluadas y razonamiento de migracion mas alla de DummyJSON.
- Estado actual de CI/CD:
  - `typecheck`, `lint`, `test`, `build` y `e2e` se revalidaron localmente el 2026-03-23 y pasan.
  - `e2e:remote-auth` también se revalidó localmente el 2026-03-23 y pasa contra DummyJSON.
  - `build` pasa con warnings de budget en ambas apps (`shop-web` `675.92 kB`, `admin-panel` `681.20 kB` sobre un warning budget de `620 kB`).
  - `security-audit` sigue visible pero ya no bloquea el pipeline por la advisory de Angular `GHSA-g93w-mfhg-p222` en la linea instalada 21.1.x.
  - La cobertura smoke de auth remota se puede ejecutar con `npm run e2e:remote-auth`.
