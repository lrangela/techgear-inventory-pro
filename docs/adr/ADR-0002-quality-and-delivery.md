# ADR-0002: Workspace Quality And Delivery Gate

Status: Accepted  
Date: 2026-03-23

## Context

The workspace ships two Angular apps plus multiple shared libraries. A weak quality gate would quickly create false confidence, especially because the repository is public and used as a portfolio/demo artifact.

The delivery pipeline also needs to reflect the real deployment model:

- GitHub Actions CI,
- GitHub Pages static hosting,
- DummyJSON as third-party backend,
- Playwright smoke coverage for both apps.

## Decision

The project keeps these delivery rules:

- Preserve a workspace-level `typecheck`, `lint`, `test`, `build`, and `verify` entry point.
- Run CI on push, pull request, and manual dispatch.
- Run a production dependency audit as part of CI and keep unresolved upstream advisories visible through warnings and uploaded artifacts.
- Keep Playwright smoke coverage for both apps.
- Keep production bundle budgets in app build config.
- Keep pages deployment only after successful CI on `master`.
- Treat CSP and security hardening on Pages as best-effort static measures, while documenting missing backend-controlled headers.
- Expand useful tests around RBAC, storage corruption, and route protection as part of ongoing quality work.
- End CI with an explicit quality-gate job that only passes when typecheck, lint, test, build, and E2E are green, while dependency audit remains separately visible.

## Consequences

Positive:

- Contributors keep one predictable verification workflow.
- CI still matches the shape of the monorepo instead of a single-app mindset.
- Public demo quality is easier to reason about.
- The pipeline now distinguishes between functional regressions, quality regressions, and upstream dependency risk.

Negative:

- CI cannot fully prove backend-grade guarantees because the backend is external and not owned.
- Static hosting limits the scope of enforceable security policy headers.
- Local sandbox environments may fail to execute Nx/Vitest due to process-spawn restrictions unrelated to code correctness.
- `security-audit` can report upstream Angular advisories even when the application itself remains functionally correct.
- Tighter bundle budgets currently warn but do not fail the build because the demo still exceeds the warning threshold.
- Remote-auth E2E should not be the primary blocking gate because it depends on a third-party demo API outside repository control.

## Alternatives Considered

1. Treat the demo as purely visual and lower the verification bar:
   - Rejected because the repository is meant to show engineering discipline, not only UI polish.
2. Remove E2E and rely only on unit tests:
   - Rejected because the public demo still needs cross-route smoke validation.
3. Pretend Pages is equivalent to a managed backend deployment:
   - Rejected because that would misrepresent the system.

## Future Considerations

- Add richer smoke checks for unauthorized admin access and disabled checkout behavior.
- Add contract-test style checks for third-party payload drift.
- Add Lighthouse/CWV reporting in CI when infrastructure allows it.
- Tighten budgets as the demo stabilizes.
- Revisit the `security-audit` policy when the Angular advisory `GHSA-g93w-mfhg-p222` is fixed upstream or when the workspace is upgraded to a non-vulnerable version.
