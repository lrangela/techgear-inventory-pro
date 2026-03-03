# ADR-0002: Workspace Quality And Delivery Gate

Status: Accepted  
Date: 2026-03-03

## Context

The workspace now contains two Angular applications and multiple shared/domain libraries. A partial or inconsistent test setup creates false confidence quickly, especially when project-level tooling is generated independently.

The repository also publishes a combined GitHub Pages site, so local verification and CI verification must describe the same quality gate.

## Decision

The project adopts the following delivery rules:

- Standardize unit testing on Vitest across every app and library.
- Keep a workspace-level typecheck command with `tsc -p tsconfig.base.json --noEmit`.
- Expose `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`, and `npm run verify` as the default contributor entry points.
- Run `nx affected` for lint, test, and build in pull requests to keep feedback fast.
- Run full workspace verification on push and manual CI dispatch to catch cross-project drift.
- Deploy GitHub Pages only from successful `master` pushes after CI completes.

## Consequences

Positive:

- Every contributor has one consistent local verification path.
- CI behavior matches the actual shape of the Nx workspace instead of a single app mindset.
- Vitest configuration drift is easier to detect because full verification still runs on the integration branch.

Negative:

- CI configuration is more explicit and longer because Nx affected and full-workspace modes both need to exist.
- Full verification on `master` is slower than PR-only affected execution.

## Alternatives Considered

1. Keep mixed Jest/Vitest execution:
   - Rejected because duplicated tooling and setup files add maintenance cost.
2. Run only `nx affected` everywhere:
   - Rejected because config mistakes in shared workspace files can escape affected detection.
3. Run full workspace verification on every pull request:
   - Rejected because it slows feedback without enough benefit for routine changes.
