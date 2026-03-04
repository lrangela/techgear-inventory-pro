# ADR-0003: Auth Strategy For Static Deploy

Status: Accepted  
Date: 2026-03-04

## Context

The project is deployed as a static GitHub Pages site (`shop-web` and `admin-panel`).
When the frontend calls `https://dummyjson.com/auth/login` directly from Pages origin, browser preflight/CORS restrictions can block login requests.

For local development, a dev-server proxy can route `/api/*` requests and avoid browser CORS issues.
For static deployment, there is no runtime Node proxy.

## Decision

The project uses a split auth strategy by environment:

- `development` and `local`:
  - `apiBaseUrl` is `/api`.
  - app `serve` target uses `proxy.conf.json` to route `/api` to DummyJSON.
  - auth mode is `remote`.
- `production` (GitHub Pages static deploy):
  - auth mode is `mock`.
  - login validates against explicit demo accounts configured in app bootstrap.
  - profile/refresh are resolved from local mock session data.

This decision is implemented through:

- `AUTH_RUNTIME_CONFIG` injection token in `libs/data-access/auth`.
- `AuthApiService` branching between remote API calls and mock session behavior.
- app-level provider configuration in:
  - `apps/shop-web/src/app/app.config.ts`
  - `apps/admin-panel/src/app/app.config.ts`

## Consequences

Positive:

- GitHub Pages demo login becomes reliable for portfolio review.
- Local developer workflow stays close to real API integration.
- No external backend proxy infrastructure is required for the public demo.

Negative:

- Production Pages auth is not real security and must never be used as a protected environment.
- Mock credentials are intentionally visible in UI/README for demo access.
- There are now two auth execution paths that require test coverage.

## Alternatives Considered

1. Keep direct DummyJSON auth in all environments:
   - Rejected due to CORS failures in static deployment.
2. Deploy a dedicated auth proxy/backend:
   - Rejected for now due to extra infrastructure complexity for a portfolio demo.
3. Disable login entirely in Pages:
   - Rejected because demo evaluators need a full flow with role-based entry points.
