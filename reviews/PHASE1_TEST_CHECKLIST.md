# Phase 1 Test Checklist

## Purpose

This checklist is the final technical gate for `Phase 1 - Foundation`.

Use it after:
- the foundation scaffold is built,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 2 - Main Portal`.

---

## Required validation

- [x] `corepack pnpm install` completes successfully
- [x] lockfile is present and workspace resolution is stable
- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] all seven apps build successfully
- [x] shared packages build or typecheck successfully
- [x] app shells render through production build output
- [x] root workspace scripts run correctly on this repo setup

---

## Shell stability checks

- [x] `apps/portal` has working layout and homepage shell
- [x] pillar apps share a consistent layout pattern
- [x] mobile navigation uses a controlled shared shell
- [x] footer shell is stable and avoids stale build-time output
- [x] no shell-level blocker remains from Phase 1 review

---

## Shared package checks

- [x] `packages/ui` is importable and used by all apps
- [x] `packages/design-system` centralizes tokens and global styles
- [x] `packages/content-models` defines the shared content contracts
- [x] `packages/utils` provides manifest and metadata helpers
- [x] app-specific layout logic is not leaking into individual apps unnecessarily

---

## Phase 2 readiness checks

- [x] repo structure is clean enough for homepage implementation
- [x] shared primitives are reusable for real page sections
- [x] design tokens are centralized
- [x] content contracts are strong enough for the next implementation step
- [x] no blocking foundation issue remains

---

## Notes

- `corepack pnpm install` still reports the non-blocking warning about ignored `sharp` build scripts.
- A local `next dev` lock may exist if another portal dev server is already running in the environment. This does not affect install, lint, typecheck or production build validation.

---

## Final decision

- Phase 1 foundation status: STABLE
- Approved to begin Phase 2: YES
