# Phase 10.5 Review Notes

## Review metadata

- Review date: 2026-03-16
- Reviewer: Codex
- Phase reviewed: Phase 10.5 - Polish Localization & Language Layer
- Reviewed output source: locale-aware app routing, shared UI localization, CMS-backed content overrides and localized inquiry flow
- Overall status: PASS WITH FIXES

---

## Executive summary

Phase 10.5 now provides a stable EN + PL language layer across the portal and all six pillars without rebuilding the page system.

The review pass focused on:

- tightening locale routing and redirect behavior,
- fixing server-side language semantics for `/pl`,
- improving switcher behavior so locale changes preserve useful URL context,
- hardening localization merge behavior to protect content integrity,
- removing lingering English-only fallbacks from shared UI and site chrome,
- confirming the repo is ready for Phase 10.6 without reopening CMS or sales architecture.

The result is a cleaner, more robust localization layer that is ready for content-truth alignment work.

---

## Issues found during review

### Medium

- Root layouts still rendered `<html lang="en">` server-side for Polish routes and only corrected language on the client after hydration.
- Locale root redirects dropped query params, which could strip `utm_*` context before users reached `/en`.
- The language switcher did not preserve current search or hash state.
- `mergeDeep()` could drop untranslated trailing array items when a localization override only covered part of an array.
- A few shared/legacy UI fallbacks still carried hardcoded English labels.

### Low

- Pillar shell titles still exposed English phrasing like `by Mula Group` on Polish pages.
- Metadata fallbacks still preferred English wording if localized settings were incomplete.

---

## Fixes applied during review

### Routing and document-language hardening

- Updated all seven app root layouts so `html lang` resolves from route params on the server.
- Updated all seven root redirects so `/` now preserves query params when redirecting to `/${locale}`.
- Improved the header language switcher so it preserves the current `search` and `hash` context while changing locale.

### Content integrity and fallback cleanup

- Hardened `packages/utils/src/site-content/localization.ts` so deep array merges preserve untranslated base items instead of truncating them.
- Improved `packages/utils/src/i18n.ts` and `packages/utils/src/site-content/index.ts` so localized fallbacks are safer and internal URL localization is more robust.
- Removed lingering English pillar-title phrasing from shared header/footer shell.
- Localized remaining shared UI/legacy fallback labels in:
  - `packages/ui/src/sections/strategy/StrategyHeroSection.tsx`
  - `packages/ui/src/sections/pillar/PillarServicesSection.tsx`
  - `packages/ui/src/sections/pillar/PillarAudienceSection.tsx`
  - `packages/ui/src/components/InquiryPreviewPanel.tsx`
  - `packages/ui/src/pages/PillarHomePage.tsx`

---

## Validation summary

The following commands passed after the fixes:

- `corepack pnpm install`
- `corepack pnpm lint`
- `corepack pnpm typecheck`
- `corepack pnpm build`

---

## Final decision

### Is Phase 10.5 stable enough for Phase 10.6?

- Yes.

### Decision notes

- EN + PL route architecture is stable across all apps.
- Shared UI, forms, metadata and shell behavior are localization-ready.
- The remaining work is mostly deeper content refinement inside localized pillar copy, not architectural rework.
- The repo can move into Phase 10.6 without reopening routing, CMS or sales foundations first.

---

## Reviewer sign-off

- Reviewer: Codex
- Date: 2026-03-16
- Final status: PASS WITH FIXES
- Approved to continue: yes
