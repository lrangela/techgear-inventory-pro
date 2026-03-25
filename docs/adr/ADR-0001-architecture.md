# ADR-0001: TechGear Project Architecture

Status: Accepted  
Date: 2026-03-23

## Context

TechGear Inventory Pro must demonstrate a credible enterprise-minded frontend architecture while running under two hard limits:

- the backend is not owned by the project (`DummyJSON`),
- the public demo is deployed on GitHub Pages.

The workspace still needs to show:

- storefront and admin separation,
- reusable Angular libraries,
- runtime contract validation,
- role-aware navigation,
- maintainable state boundaries,
- a migration path to a real backend later.

## Decision

The project adopts these architecture rules:

- Use Nx monorepo structure with `apps`, `libs/features`, `libs/data-access`, and `libs/shared`.
- Keep Angular 21 standalone + signal-first patterns as the default runtime model.
- Treat apps as composition roots and libraries as reusable business boundaries.
- Keep runtime contract parsing with `zod` at data-access boundaries.
- Keep frontend RBAC in routing strictly as UX control, and explicitly document that it is not server-enforced authorization.
- Use session-scoped auth persistence (`sessionStorage`, memory fallback) instead of long-lived `localStorage` tokens.
- Synchronize inventory against the product catalog master list instead of creating inventory-only products.
- Use API-backed pagination and category filtering in the storefront where DummyJSON supports it.
- Keep demo-only capabilities explicit, such as disabled checkout and mock auth on Pages.

## Consequences

Positive:

- Clear separation between storefront and backoffice responsibilities.
- Better demo credibility: fewer fake enterprise claims and fewer misleading flows.
- Reduced security risk compared with long-lived browser token persistence.
- Cleaner business model: inventory depends on catalog, not the other way around.

Negative:

- Real server-side authorization is still impossible without an owned backend.
- Inventory and cart remain browser-scoped demo data.
- GitHub Pages cannot enforce the same security headers as a backend-controlled deployment.
- Some enterprise controls stay documented rather than fully executable in this repository.

## Alternatives Considered

1. Keep localStorage auth tokens:
   - Rejected due to avoidable XSS/session persistence risk.
2. Keep client-only category filtering on already paginated results:
   - Rejected because it produces misleading UX and weak scalability.
3. Allow inventory to create products outside the catalog:
   - Rejected because it breaks domain consistency.

## Future Considerations

- Replace DummyJSON with an owned NestJS/Prisma backend.
- Move auth to secure cookies and server-side authorization checks.
- Add audit trails for inventory changes and operator identity.
- Add centralized observability and release governance.
