# Phase 10.5 Test Checklist

## Purpose

This checklist is the final validation gate for `Phase 10.5 - Polish Localization & Language Layer`.

Use it after:

- the Phase 10.5 implementation is complete,
- the review pass is complete,
- cleanup fixes are applied,
- before beginning `Phase 10.6 - Pillar Content Alignment & Service Truth Layer`.

---

## Required validation

- [x] `corepack pnpm install` passes
- [x] `corepack pnpm lint` passes
- [x] `corepack pnpm typecheck` passes
- [x] `corepack pnpm build` passes
- [x] all 7 frontend apps still build successfully with locale-prefixed routes
- [x] no broken imports remain after the Phase 10.5 review pass

---

## Localization architecture checks

- [x] supported locales are typed as `en | pl`
- [x] each app exposes `/{locale}` routes
- [x] `/` redirects to the default locale
- [x] root redirects preserve query params
- [x] server-rendered document language is no longer hardcoded to English
- [x] localized alternates and canonical metadata still resolve

---

## Shared UI and content checks

- [x] header language switcher exists and preserves current URL search/hash context
- [x] footer and shell copy can render in Polish
- [x] shared form UI labels can render in Polish
- [x] CMS-backed manifest mapping remains locale-aware
- [x] localization merge logic preserves untranslated base content instead of truncating arrays

---

## Portal and pillar checks

- [x] portal EN + PL layer builds successfully
- [x] Strategy EN + PL layer builds successfully
- [x] Digital EN + PL layer builds successfully
- [x] Commerce EN + PL layer builds successfully
- [x] Industry EN + PL layer builds successfully
- [x] Projects EN + PL layer builds successfully
- [x] Lifestyle EN + PL layer builds successfully

---

## Inquiry and SEO checks

- [x] inquiry forms preserve locale context in submission payloads
- [x] localized client-facing submission messages still work
- [x] localized metadata is still generated through the shared content layer
- [x] the language layer is ready for later EN/PL content-truth refinement

---

## Final decision

- Phase 10.5 status: STABLE
- Approved to begin Phase 10.6: YES
