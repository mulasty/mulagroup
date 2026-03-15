# Phase 7 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 7 - Projects Pillar`.

Use it after:

- the Projects implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 8 - Lifestyle Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/projects` builds successfully
- [x] the Projects page still builds cleanly through shared packages
- [x] no broken imports remain after the Projects review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 7 spec
- [x] hero clearly positions Projects as a structured project-development pillar
- [x] trust / intro explains why this is more than architecture or inspiration
- [x] services section presents the six core project-development capabilities clearly
- [x] project types section exists and feels like a fit map rather than a gallery
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a clear project-development method
- [x] offer formats explain practical ways to work together
- [x] differentiators avoid generic development-marketing tone
- [x] cross-pillar logic makes the `Strategy -> Projects -> wider ecosystem` route visible
- [x] FAQ handles core objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand that Projects is about structured development, not visual ideas alone
- [x] the page explains which project categories this pillar supports
- [x] the page explains what services and engagement formats exist
- [x] the page explains how the Projects pillar works
- [x] the next step is clear
- [x] content stays aligned with the Projects blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language
- [x] the page avoids drifting into vague, decorative or luxury-cliche tone

---

## Design and responsive checks

- [x] desktop layout feels premium, calm and spatially refined
- [x] tablet layout keeps rhythm and readable card density
- [x] mobile layout preserves hierarchy and CTA clarity
- [x] hero remains readable across desktop, tablet and mobile
- [x] mobile navigation remains usable
- [x] section spacing stays consistent with the portal and previously stabilized pillars

---

## Shared system checks

- [x] `packages/ui` is used for Projects page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the richer Projects content contract
- [x] `packages/utils` supplies Projects content and metadata helpers
- [x] shared rich-pillar logic is reused instead of rebuilding the page from scratch
- [x] the Projects page is modular enough for future CMS migration
- [x] the pillar pattern is stable enough to extend into the final pillar

---

## Final decision

- Phase 7 status: STABLE
- Approved to begin Phase 8: YES
