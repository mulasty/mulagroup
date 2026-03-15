# Phase 8 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 8 - Lifestyle Pillar`.

Use it after:

- the Lifestyle implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 9 - CMS & Content Backend`.

---

## Required validation

- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `apps/lifestyle` builds successfully
- [x] the Lifestyle page still builds cleanly through shared packages
- [x] no broken imports remain after the Lifestyle review pass

---

## Page scope checks

- [x] header / navigation exists and matches the Phase 8 spec
- [x] hero clearly positions Lifestyle as a premium experience and brand-venture pillar
- [x] trust / intro explains why this is more than aesthetics or event styling
- [x] services section presents the six core Lifestyle capabilities clearly
- [x] experience types section exists and feels like a fit map rather than a decorative collage
- [x] who-it's-for section helps the right users self-identify
- [x] process section communicates a structured premium-development method
- [x] offer formats explain practical ways to work together
- [x] differentiators avoid generic luxury-branding tone
- [x] cross-pillar logic makes the `Strategy -> Lifestyle -> wider ecosystem` route visible
- [x] FAQ handles core objections and trust questions
- [x] final CTA / contact section provides a clear next step
- [x] footer aligns with shared ecosystem navigation

---

## UX and content checks

- [x] the page helps the user understand that Lifestyle is about structured premium experience, not only aesthetics
- [x] the page explains which premium and experience-led initiatives this pillar supports
- [x] the page explains what services and engagement formats exist
- [x] the page explains how the Lifestyle pillar works
- [x] the next step is clear
- [x] content stays aligned with the Lifestyle blueprint
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

- [x] `packages/ui` is used for Lifestyle page sections and layout
- [x] `packages/design-system` remains the styling source of truth
- [x] `packages/content-models` supports the richer Lifestyle content contract
- [x] `packages/utils` supplies Lifestyle content and metadata helpers
- [x] shared rich-pillar logic is reused instead of rebuilding the page from scratch
- [x] the Lifestyle page is modular enough for future CMS migration
- [x] the full pillar pattern is now stable enough to unlock the post-pillar phases

---

## Final decision

- Phase 8 status: STABLE
- Approved to begin Phase 9: YES
