# ADR-0003: Auth Strategy For Static Deploy

Status: Accepted  
Date: 2026-03-23

## Context

The project runs under two different auth realities:

- local/development uses DummyJSON through a proxy,
- production demo uses GitHub Pages with no backend under project control.

This means:

- real server-side authorization is not possible in the public demo, and frontend RBAC must be described as demonstrative only,
- remote sample accounts may be discovered from the demo API for usability, but raw remote passwords must not be rendered as page content,
- secure HttpOnly cookie issuance is not under this repository's control,
- the demo still needs a stable sign-in flow for reviewers.

## Decision

The project uses an environment-split auth model:

- `development` and `local`
  - `apiBaseUrl` = `/api`
  - auth mode = `remote`
  - profile data comes from DummyJSON
  - remote users without trusted role mapping default to non-admin access
- `production` on GitHub Pages
  - auth mode = `mock`
  - demo credentials are intentionally exposed only for the public portfolio build
  - demo accounts are split by app (`shop-demo` for shop, `admin-demo` for admin)

Additional rules:

- Tokens persist only in `sessionStorage` with memory fallback.
- Admin routes require both `authGuard` and `roleGuard`.
- Role information can be normalized through runtime config overrides when the third-party API does not provide a business-usable role.
- Login pages show demo credentials only in mock mode.

## Consequences

Positive:

- Public demo stays usable on GitHub Pages.
- Session persistence is narrower and safer than `localStorage`.
- Admin/shop separation is clearer.
- The implementation stops pretending that a static demo has real server-side auth guarantees.

Negative:

- Backend authorization is still not enforceable from this repo.
- Remote local development may authenticate users that still do not qualify for admin access.
- There are still two auth paths (`remote` and `mock`) that require ongoing test coverage.

## Alternatives Considered

1. Keep credentials visible in every environment:
   - Rejected because it weakens the local development flow and leaks unnecessary demo data.
2. Keep localStorage token persistence:
   - Rejected due to avoidable session exposure.
3. Claim server-side authorization in the Pages demo:
   - Rejected because it would be technically false.

## Future Considerations

- Replace third-party auth with owned NestJS auth endpoints.
- Move to secure cookie auth with backend-issued session policies.
- Add dedicated forbidden/access-denied screens and audit logging.
