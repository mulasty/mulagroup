# Phase 5 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 5 - Commerce Pillar`.

Use it after:

- the Commerce implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 6 - Industry Pillar`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/commerce` builds successfully
- [x] the Commerce page still builds cleanly through shared packages
- [x] no broken imports remain after the Commerce review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 5 spec
- [x] hero clearly positions Commerce as a revenue-systems pillar
- [x] trust / intro explains why this is more than selling online
- [x] services section presents the six core commerce capabilities clearly
- [x] channels section exists and is strategically framed
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a clear commercial architecture method
- [x] offer formats explain practical ways to work together
- [x] differentiators avoid cheap e-commerce agency tone
- [x] cross-pillar logic makes Commerce's ecosystem role visible
- [x] FAQ handles core objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand that Commerce is more than selling online
- [x] the page explains which commercial problems this pillar solves
- [x] the page explains what services and engagement formats exist
- [x] the page explains how the Commerce pillar works
- [x] the next step is clear
- [x] content stays aligned with the Commerce blueprint
- [x] content stays aligned with the brand strategy
- [x] content stays aligned with the content system
- [x] user-facing copy avoids internal implementation language
- [x] the page avoids generic marketplace-agency tone

---

## Design and responsive checks

- [x] desktop layout feels premium, structured and commercially intelligent
- [x] tablet layout keeps rhythm and readable card density
- [x] mobile layout preserves hierarchy and CTA clarity
- [x] hero remains readable across desktop, tablet and mobile
- [x] mobile navigation remains usable
- [x] section spacing stays consistent with the portal, Strategy and Digital

---

## Shared system checks

- [x] `packages/ui` is used for Commerce page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the richer Commerce content contract
- [x] `packages/utils` supplies Commerce content and metadata helpers
- [x] shared rich-pillar logic is reused instead of rebuilding the page from scratch
- [x] the Commerce page is modular enough for future CMS migration
- [x] the pillar pattern is stable enough to extend into the next pillar

---

## Final decision

- Phase 5 status: STABLE
- Approved to begin Phase 6: YES
