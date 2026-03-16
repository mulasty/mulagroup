# Phase 10 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 10 - Sales, CRM & Lead Operations`.

Use it after:

- the Phase 10 implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 10.5 - Polish Localization & Language Layer`.

---

## Required validation

- [x] `corepack pnpm install` passes
- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `@mulagroup/crm` builds successfully
- [x] all 7 frontend apps still build successfully with live inquiry routes enabled
- [x] no broken imports remain after the Phase 10 review pass

---

## Inquiry and routing checks

- [x] live structured inquiry forms exist for the portal and all six pillars
- [x] inquiry forms are still driven from the CMS/content layer rather than hardcoded ad hoc
- [x] portal intake now supports company / project context and inquiry type selection
- [x] pillar-specific intake remains pillar-aware
- [x] portal inquiry taxonomy now resolves to meaningful ecosystem routes instead of a single generic default
- [x] inquiry labels can resolve for portal-originated leads as well as pillar leads

---

## Sales / CRM structure checks

- [x] normalized lead payload remains typed and modular
- [x] CRM mapping remains vendor-neutral and adaptable
- [x] CRM mapping now supports richer optional mapped fields for stage, status, summary, next step and follow-up timing
- [x] lead status model is ready for future operating-system workflow usage
- [x] scoring fields remain present and ready for later automation
- [x] brief generation still works from the normalized lead model
- [x] follow-up draft output still exists and now carries explicit send timing

---

## Operational readiness checks

- [x] submission pipeline validates input server-side
- [x] payload normalization preserves source, pillar and UTM context
- [x] submission type is captured from form routing config
- [x] lifecycle now includes explicit follow-up due timing
- [x] discovery recommendation metadata exists for later internal use
- [x] production submissions fail fast if no lead delivery channel is configured
- [x] inquiry UI surfaces structured backend validation messages more clearly

---

## Phase 10.5 readiness checks

- [x] inquiry and CRM models are stable enough to layer bilingual labels and localized messages on top
- [x] no portal or pillar layout rebuild is required before localization
- [x] routing, scoring and brief generation can be localized later without changing their core data shape
- [x] the repo can move into Phase 10.5 without revisiting Phase 10 foundations first

---

## Final decision

- Phase 10 status: STABLE
- Approved to begin Phase 10.5: YES
