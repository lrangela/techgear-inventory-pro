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

## Current Architectural Position

DummyJSON remains the selected backend source for the public demo because it provides:

- realistic product/category payloads,
- auth endpoints useful for frontend flow validation,
- zero infrastructure overhead for GitHub Pages delivery.

The project now makes these limits explicit:

- no real server-side authorization guarantee,
- no owned persistence for inventory/cart truth,
- no secure cookie/session policy under project control,
- no payment/checkout backend.

Because of that, the frontend was updated to:

- use session-scoped token persistence instead of `localStorage`,
- treat admin RBAC as frontend UX control only,
- synchronize inventory against the product catalog master list,
- disable fake checkout instead of pretending it works.

## Technical Rationale for Choosing DummyJSON

DummyJSON was selected because it offers realistic, ready-to-consume HTTP data with zero infrastructure setup, zero backend modeling effort, and no initial operational cost.

For the current objective (frontend architecture demo, flow validation, and rapid testing), it maximizes delivery speed while keeping a clear migration path to a real backend later.

**Reference:** https://dummyjson.com/
