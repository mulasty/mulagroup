# Phase 2 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 2 - Main Portal`.

Use it after:
- the main portal implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 3 - Strategy Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/portal` builds successfully
- [x] the portal still builds cleanly through shared packages
- [x] no broken imports remain after the portal review pass

---

## Homepage scope checks

- [x] header / navigation exists and matches the Phase 2 spec
- [x] hero exists and clearly positions Mula Group as an ecosystem
- [x] about section explains why the ecosystem model exists
- [x] pillars grid presents all six pillars
- [x] operating model section exists and uses a clear process structure
- [x] capabilities section remains ecosystem-led rather than service-dump driven
- [x] partnerships section supports trust and collaboration clarity
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with brand and ecosystem navigation needs

---

## UX and content checks

- [x] the homepage helps a user understand what Mula Group is
- [x] the homepage explains why the ecosystem exists
- [x] the six pillars are easy to understand
- [x] the next step is clear
- [x] content stays aligned with the ecosystem blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language

---

## Design and responsive checks

- [x] portal styling is emitted correctly from the shared design system
- [x] desktop layout feels premium and structured
- [x] tablet layout preserves hierarchy and rhythm
- [x] mobile layout keeps the hero and CTA logic readable
- [x] shared header works on desktop and mobile
- [x] operating model grid does not collapse awkwardly on mid-sized screens

---

## Shared system checks

- [x] `packages/ui` is used for page sections and shared layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the portal content contract
- [x] `packages/utils` still supplies content and metadata helpers
- [x] the portal is modular enough for future CMS migration
- [x] the design language is stable enough to extend into pillar rollout

---

## Final decision

- Phase 2 status: STABLE
- Approved to begin Phase 3: YES
