# Phase 9 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 9 - CMS & Content Backend`.

Use it after:

- the CMS/content backend implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 10 - Sales, CRM & Lead Operations`.

---

## Required validation

- [x] `corepack pnpm install` passes
- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] `@mulagroup/cms` builds successfully
- [x] all 7 frontend apps still build successfully through the CMS-backed content layer
- [x] no broken imports remain after the Phase 9 review pass

---

## CMS structure checks

- [x] global schema layer exists for site settings, navigation, footer, SEO and CTA
- [x] page content model exists for pages, hero blocks and modular section blocks
- [x] pillar content models exist for pillars, services, offer formats, FAQ, process steps and audience cards
- [x] form definition and field models are typed and structured
- [x] case study starter schema exists
- [x] article starter schema exists
- [x] schema catalog is clearer and more explicit than the first implementation pass

---

## Content integration checks

- [x] content repository functions are typed and modular
- [x] content validation exists and catches broken ids or references
- [x] published-only querying is enforced for public content access
- [x] main portal content resolves from the structured CMS-backed layer
- [x] all six pillar pages resolve from the structured CMS-backed layer
- [x] frontend layout composition remains unchanged by the migration
- [x] content mapping remains separated from UI rendering

---

## Developer experience checks

- [x] content-store validation is fail-fast
- [x] schema definitions are exported centrally
- [x] developer snapshot includes CMS validation state
- [x] content structure remains understandable for future CMS editors and frontend developers
- [x] the local content layer is still realistic as a bridge to a future real headless CMS

---

## Phase 10 readiness checks

- [x] forms expose routing placeholders and CRM mapping placeholders
- [x] CTA ownership is reusable and reference-based
- [x] portal and pillar content are no longer dependent on scattered hardcoded manifests in `packages/utils`
- [x] case studies are ready for later trust and sales usage
- [x] article starters are ready for later authority/content-engine usage
- [x] Phase 10 can begin without rebuilding the CMS/content layer first

---

## Final decision

- Phase 9 status: STABLE
- Approved to begin Phase 10: YES
