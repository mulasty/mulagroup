# Phase 4 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 4 - Digital Pillar`.

Use it after:

- the Digital implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 5 - Commerce Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/digital` builds successfully
- [x] the Digital page still builds cleanly through shared packages
- [x] no broken imports remain after the Digital review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 4 spec
- [x] hero clearly positions Digital as a systems and infrastructure layer
- [x] trust / intro explains why this is more than web design
- [x] services section presents the six core digital capabilities clearly
- [x] AI & Automation section exists and stays business-grounded
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a clear implementation method
- [x] offer formats explain practical ways to work together
- [x] differentiators avoid generic agency and AI-hype language
- [x] cross-pillar logic makes Digital's ecosystem role visible
- [x] FAQ handles core objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand that Digital is more than web design
- [x] the page explains how AI and automation fit into business systems
- [x] the page explains what services and engagement formats exist
- [x] the page explains how the Digital pillar works
- [x] the next step is clear
- [x] content stays aligned with the Digital blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language
- [x] the page avoids drifting into generic software-house tone

---

## Design and responsive checks

- [x] desktop layout feels premium, structured and tech-corporate
- [x] tablet layout keeps rhythm with earlier 2-column grids
- [x] mobile layout preserves hierarchy and CTA clarity
- [x] hero remains readable across desktop, tablet and mobile
- [x] mobile navigation remains usable
- [x] section spacing stays consistent with the portal and Strategy pillar

---

## Shared system checks

- [x] `packages/ui` is used for Digital page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the richer Digital content contract
- [x] `packages/utils` supplies Digital content and metadata helpers
- [x] shared inquiry preview logic is reused instead of duplicated
- [x] the Digital page is modular enough for future CMS migration
- [x] the pillar pattern is stable enough to extend into the next pillar

---

## Final decision

- Phase 4 status: STABLE
- Approved to begin Phase 5: YES
