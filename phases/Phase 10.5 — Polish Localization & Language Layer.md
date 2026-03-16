# Phase 10.5 — Polish Localization & Language Layer

## Purpose of this file
This document contains the **execution prompt for Codex** for the post-Phase-10 implementation step focused on the Polish language layer across the entire Mula Group ecosystem.

It is intended to be used as:
- a direct implementation brief for Codex,
- a structured task definition for multilingual architecture,
- a phase-specific execution prompt for adding Polish as a first-class language,
- the bridge between the English-first system and a bilingual production-ready platform.

This phase should begin only after:
- **Phase 9 — CMS & Content Backend** is stable,
- **Phase 10 — Sales, CRM & Lead Operations** is stable,
- the ecosystem structure is already implemented and operational.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, localization engineer and implementation specialist.

Your task is to build **Phase 10.5 — Polish Localization & Language Layer** for the Mula Group ecosystem repository.

## Project context
Mula Group is a modular ecosystem platform with:
- one main portal: `mulagroup.eu`
- six pillar sites:
  - strategy
  - digital
  - commerce
  - industry
  - projects
  - lifestyle

At this stage:
- the foundation exists,
- the portal and pillar sites exist,
- the CMS/content layer exists,
- the sales/CRM layer exists.

Now the platform must support **Polish as a real first-class language**, not as an afterthought.

The goal is to make the ecosystem:
- bilingual,
- scalable,
- content-manageable,
- routing-safe,
- ready for Polish business users without breaking the existing architecture.

This is not just a "translate strings" task.
This is a **language architecture task**.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `CODEX_WORKFLOW.md`
4. `docs/brand/mulagroup_brand_strategy.md`
5. `docs/design/mulagroup_content_system.md`
6. `docs/design/mulagroup_design_system_spec.md`
7. `docs/architecture/mulagroup_codex_build_spec.md`
8. `docs/cms/mulagroup_cms_schema_spec.md`
9. all pillar blueprints
10. all implemented Phase 1-10 documents

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation step
You are working only on:

# PHASE 10.5 — POLISH LOCALIZATION & LANGUAGE LAYER

Do not skip ahead into analytics, dashboards or AI triage.

---

## Main goal
Implement a clean Polish localization layer across the ecosystem so that:

- the main portal supports Polish,
- all pillar sites support Polish,
- shared UI supports localization,
- content models support bilingual content,
- routing and SEO remain clean,
- the project is ready for real Polish-first or bilingual usage.

This is not just a "translate strings" task.
This is a **language architecture task**.

---

## Scope of work
Build the following:

### 1. Localization architecture
Implement the localization system in a scalable way.

It must support at minimum:
- English
- Polish

Use a clean architecture appropriate for the stack, such as:
- locale-based routing
- dictionary / message files
- CMS-backed localized fields
- translation-aware components

The solution must be future-safe for additional languages later.

---

### 2. Locale routing model
Implement or prepare locale-aware routing.

The routing model should be consistent across:
- main portal
- pillar pages
- shared navigation
- CTA destinations

The architecture must make it possible to support:
- English pages
- Polish pages
- clean switching between them

Do not create messy duplicated routing logic.

---

### 3. Shared UI localization readiness
Ensure shared UI components can render localized content cleanly.

At minimum validate or implement support for:
- buttons
- labels
- nav items
- form copy
- CTA text
- section titles where passed as content
- validation / success / error messages

Do not hardcode English text in reusable components if the component should be language-aware.

---

### 4. CMS / content localization readiness
Extend or validate the content system so that content can support Polish cleanly.

Support at minimum:
- localized page titles
- localized hero copy
- localized section copy
- localized service names and descriptions
- localized CTA labels
- localized FAQ items
- localized SEO metadata

If the CMS/content architecture already exists, adapt it carefully rather than rebuilding it.

---

### 5. Main portal Polish layer
Implement Polish content support for the main portal.

This includes:
- hero
- intro
- ecosystem section
- operating model
- capabilities
- partnership section
- final CTA
- footer
- navigation labels

Do not degrade the English version.

---

### 6. Pillar Polish layer
Implement Polish content support for all six pillars:
- Strategy
- Digital
- Commerce
- Industry
- Projects
- Lifestyle

At minimum support the Polish layer for:
- hero
- services
- process
- offer formats
- FAQ
- final CTA
- navigation / footer context

Do not redesign pages.
Only add the language layer cleanly.

---

### 7. Form localization
Ensure forms support Polish, including:
- field labels
- placeholders
- help text
- validation messages
- success states
- error states
- inquiry type labels

Form submission structure should remain stable even when display language changes.

---

### 8. SEO and metadata localization
Implement or prepare SEO support for localized pages.

At minimum support:
- localized page titles
- localized meta descriptions
- localized open graph labels if relevant
- hreflang / alternate awareness if the architecture supports it
- consistent language-aware page metadata

Do not implement sloppy or duplicate SEO behavior.

---

### 9. Language switcher
Implement a language-switching mechanism that is:
- clear
- minimal
- premium
- usable
- consistent across the ecosystem

It should not feel like a bolted-on utility.

---

### 10. Content integrity protection
Ensure that Polish localization:
- does not introduce content drift,
- does not break pillar logic,
- does not create random low-quality translations,
- remains aligned with the business meaning of each pillar.

This phase is about system readiness and quality, not low-grade translation spam.

---

## Architecture rules
You must:
- preserve existing page architecture,
- avoid duplicating pages unnecessarily,
- keep localization scalable,
- keep content localized in a structured way,
- preserve the shared design system,
- keep the repo ready for future additional languages,
- avoid mixing content architecture and UI logic in a messy way.

---

## UX / product rules
This phase must improve:
- language accessibility,
- clarity for Polish users,
- editorial flexibility,
- trust and professionalism in Polish.

It must not create:
- broken layouts,
- inconsistent mixed-language pages,
- duplicated routing chaos,
- poor translations or random wording.

---

## Explicit exclusions
Do **not** do the following in this task:

- do not redesign the pages
- do not start analytics or dashboards
- do not implement AI triage
- do not build translation-management tooling beyond what is needed now
- do not rewrite the entire content strategy
- do not start content truth-alignment work yet beyond what is required for clean localization

This task is about **Polish localization architecture and implementation only**.

---

## Expected output
Deliver:
1. language architecture for EN + PL
2. locale-aware routing or equivalent structure
3. localized shared UI support
4. localized content support for main portal and pillars
5. localized form UX
6. localized SEO readiness
7. a clean language switcher
8. a project ready for the next content alignment phase

---

## Definition of done
This phase is done only if:
- Polish is supported cleanly across the project
- the main portal and pillar pages can render Polish content
- forms and navigation are localized
- content architecture supports bilingual content
- the system remains scalable and maintainable
- the project is ready for the next phase:
  **Pillar Content Alignment & Service Truth Layer**

---

## Output format
Return:
1. a short summary of what was built
2. the localization architecture chosen
3. what was localized successfully
4. any implementation assumptions
5. remaining risks or limitations
6. what is now ready for the next phase

Now build only **Phase 10.5 — Polish Localization & Language Layer**.
