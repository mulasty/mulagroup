# Phase 3 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 3 - Strategy Pillar`.

Use it after:

- the Strategy implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 4 - Digital Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm --filter @mulagroup/strategy build` passes
- [x] `apps/strategy` builds successfully
- [x] the Strategy page still builds cleanly through shared packages
- [x] no broken imports remain after the Strategy review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 3 spec
- [x] hero exists and clearly positions Strategy as the architecture layer
- [x] trust / intro explains why this is more than generic consulting
- [x] services section presents the Strategy offer clearly
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a clear operating method
- [x] offer formats explain practical ways to work together
- [x] differentiators support the ecosystem-led strategic positioning
- [x] cross-pillar logic makes Strategy-to-execution routing visible
- [x] FAQ handles common objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand what the Strategy pillar is
- [x] the page helps the user understand when Strategy is the right entry point
- [x] the page explains what types of problems Strategy can solve
- [x] the page explains how working together happens
- [x] the next step is clear
- [x] content stays aligned with the Strategy blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language
- [x] the page avoids drifting into generic consulting tone

---

## Design and responsive checks

- [x] desktop layout feels premium, calm and structured
- [x] tablet layout preserves rhythm and benefits from earlier 2-column grids
- [x] mobile layout keeps hierarchy readable and CTA logic intact
- [x] hero remains clear across desktop, tablet and mobile
- [x] mobile navigation remains usable
- [x] section spacing and composition remain consistent with the main portal

---

## Shared system checks

- [x] `packages/ui` is used for Strategy page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the Strategy content contract
- [x] `packages/utils` supplies Strategy content and metadata helpers
- [x] shared components remain reusable rather than Strategy-hardcoded
- [x] the Strategy page is modular enough for future CMS migration
- [x] the pillar pattern is stable enough to extend into the next pillar

---

## Final decision

- Phase 3 status: STABLE
- Approved to begin Phase 4: YES
