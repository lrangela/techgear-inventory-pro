# ADR-0001: TechGear Project Architecture

Status: Accepted  
Date: 2026-03-03

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
- Keep app-level login configuration tokens in `data-access` so app bootstrapping does not statically depend on lazy-loaded feature libraries.
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
- Shared configuration placement must be deliberate to avoid breaking lazy-loaded boundaries.

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
