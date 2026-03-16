# Phase 10 Review Notes

## Review metadata

- Review date: 2026-03-16
- Reviewer: Codex
- Phase reviewed: Phase 10 - Sales, CRM & Lead Operations
- Reviewed output source: `packages/crm`, CMS-backed form definitions, inquiry API routes and shared inquiry UI
- Overall status: PASS WITH FIXES

---

## Executive summary

Phase 10 now provides a stable inquiry, lead normalization and CRM-ready operations layer across the portal and all six pillars.

The review pass focused on:

- tightening the main portal intake so it follows the same structured inquiry logic as the pillar sites,
- improving taxonomy and routing clarity for portal-originated leads,
- strengthening lifecycle readiness with explicit follow-up due dates and discovery recommendations,
- enriching CRM field mapping so future integrations need less rework,
- making production submission behavior safer when delivery webhooks are not configured,
- improving error clarity in the live inquiry form UX.

The result is a cleaner and more dependable lead-ops layer that is ready for the language/localization work in Phase 10.5.

---

## Issues found during review

### Medium

- The main portal inquiry form was weaker than the pillar forms and did not yet match the documented common field structure.
- Portal inquiry taxonomy was too generic, which made primary-pillar routing and CRM summaries less precise for portal leads.
- Lifecycle support did not expose an explicit follow-up due date, even though the sales framework expects it.
- CRM mapping was functional but still too minimal for future handoff into a real operating system or vendor CRM.
- Production submissions could report success even when every delivery channel was disabled.

### Low

- The form UI surfaced only a generic backend error message instead of the first structured validation issue.
- `.env.example` did not clearly indicate that at least one delivery target should be configured in production.

---

## Fixes applied during review

### Form UX and portal intake quality

- Expanded the portal inquiry seed in `packages/cms/src/legacy/site-content/portal.ts` with:
  - optional company / project context,
  - structured inquiry type selection,
  - topic labels aligned with the ecosystem entry logic.
- Updated `packages/ui/src/components/InquiryFormPanel.tsx` so validation issues returned from the backend are shown more clearly to the user instead of falling back to a generic error every time.

### Taxonomy, routing and lifecycle readiness

- Extended `packages/crm/src/taxonomy.ts` with real portal inquiry taxonomy entries such as:
  - `strategy`
  - `digital`
  - `commerce`
  - `operational-support`
  - `project-development`
  - `premium-concept`
  - `partnership`
  - `general-inquiry`
- Removed the old portal-only label limitation so inquiry labels now resolve cleanly for portal leads as well.
- Expanded `packages/crm/src/types.ts` with:
  - a fuller lead status model aligned more closely to the operating-system docs,
  - explicit `followUpDueAt`,
  - `lastContactAt`,
  - discovery recommendation metadata,
  - richer follow-up draft typing,
  - `submissionType` support.
- Updated `packages/crm/src/submission.ts` to compute:
  - follow-up windows,
  - follow-up due dates,
  - discovery recommendation format and purpose,
  - a more complete normalized lead payload.

### CRM mapping and production hardening

- Expanded `packages/cms/src/types.ts`, `packages/cms/src/schema/objects.ts` and `packages/cms/src/migrations/from-legacy.ts` so CRM mapping now supports richer optional vendor fields such as:
  - company
  - email
  - phone
  - lead type
  - lead status
  - lead stage
  - summary
  - next step
  - next owner
  - follow-up due date
- Updated `packages/crm/src/mapping.ts` with:
  - stronger standard lead fields,
  - operating-system-friendly aliases like `company_name`, `contact_person`, `short_summary`, `status`,
  - conditional vendor-field mapping without hardcoding one CRM vendor.
- Hardened `packages/crm/src/submission.ts` so production submissions now fail fast if:
  - all webhook destinations are disabled, or
  - no configured destination receives the lead successfully.
- Added a production note to `.env.example` to make lead-delivery expectations clearer.

---

## Review against requested areas

### Form UX and structure

- Result: improved and now strong
- Notes: portal intake now matches the structured ecosystem logic much better, and users get clearer validation feedback

### Submission pipeline quality

- Result: improved
- Notes: validation and normalization were already solid; production delivery safeguards now make the pipeline safer

### Payload normalization quality

- Result: strong
- Notes: the normalized lead now includes submission type, explicit follow-up timing and discovery recommendation context

### CRM mapping clarity

- Result: improved and now strong
- Notes: mapping is still vendor-neutral, but it now carries much more of the operating context expected by later CRM work

### Pillar-aware routing context

- Result: strong
- Notes: portal routing is now less generic and better aligned with actual ecosystem entry paths

### Inquiry taxonomy quality

- Result: improved
- Notes: taxonomy coverage now includes meaningful portal-originated intent categories, not only pillar-specific cases

### Lead stage model readiness

- Result: improved
- Notes: status naming and lifecycle metadata now align more closely with the operating-system and sales framework docs

### Scoring field readiness

- Result: strong
- Notes: Phase 10 still stops short of advanced scoring automation, but the payload remains ready for it

### Discovery and follow-up readiness

- Result: improved and now strong
- Notes: due dates, discovery recommendations, follow-up draft timing and brief generation are all clearer than before

### Overall readiness for Phase 10.5

- Result: yes
- Notes: the operational layer is now stable enough that localization can be added without first revisiting intake, routing or CRM payload structure

---

## Validation summary

The following commands passed after the fixes:

- `corepack pnpm install`
- `corepack pnpm lint`
- `corepack pnpm build`
- `corepack pnpm typecheck`

Notes:

- one intermediate lint/typecheck/build pass failed because of a local syntax mistake introduced during the review edits; that was fixed immediately
- one intermediate `typecheck` pass hit the known Next.js `.next/types` artifact issue in app workspaces; a successful full `build` regenerated the missing files and the follow-up `typecheck` passed cleanly

---

## Final decision

### Is Phase 10 stable enough for Phase 10.5?

- Yes.

### Decision notes

- Live inquiry forms remain connected across the portal and all pillars.
- Portal intake now follows the same structured logic as the rest of the ecosystem.
- Lead payloads are richer, clearer and safer for CRM delivery and later localization work.
- The repo is ready to begin Phase 10.5 without another sales-layer refactor first.

---

## Reviewer sign-off

- Reviewer: Codex
- Date: 2026-03-16
- Final status: PASS WITH FIXES
- Approved to continue: yes
