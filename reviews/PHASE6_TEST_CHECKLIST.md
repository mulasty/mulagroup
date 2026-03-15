# Phase 6 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 6 - Industry Pillar`.

Use it after:

- the Industry implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 7 - Projects Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/industry` builds successfully
- [x] the Industry page still builds cleanly through shared packages
- [x] no broken imports remain after the Industry review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 6 spec
- [x] hero clearly positions Industry as a technical and operational capability layer
- [x] trust / intro explains why this is more than reactive service
- [x] services section presents the six core industry capabilities clearly
- [x] capabilities section exists and is structured rather than catalog-like
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a clear technical-support method
- [x] offer formats explain practical ways to work together
- [x] differentiators avoid workshop-style tone
- [x] cross-pillar logic makes Industry's ecosystem role visible
- [x] FAQ handles core objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand that Industry is more than repair or reactive service
- [x] the page explains which technical and operational problems this pillar solves
- [x] the page explains what services and engagement formats exist
- [x] the page explains how the Industry pillar works
- [x] the next step is clear
- [x] content stays aligned with the Industry blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language
- [x] the page avoids workshop-style or jargon-heavy tone

---

## Design and responsive checks

- [x] desktop layout feels premium, technically credible and structured
- [x] tablet layout keeps rhythm and readable card density
- [x] mobile layout preserves hierarchy and CTA clarity
- [x] hero remains readable across desktop, tablet and mobile
- [x] mobile navigation remains usable
- [x] section spacing stays consistent with the portal and previous pillars

---

## Shared system checks

- [x] `packages/ui` is used for Industry page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the richer Industry content contract
- [x] `packages/utils` supplies Industry content and metadata helpers
- [x] shared rich-pillar logic is reused instead of rebuilding the page from scratch
- [x] the Industry page is modular enough for future CMS migration
- [x] the pillar pattern is stable enough to extend into the next pillar

---

## Final decision

- Phase 6 status: STABLE
- Approved to begin Phase 7: YES
