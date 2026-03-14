
# Phase 9 — CMS & Content Backend

## Purpose of this file
This document contains the **execution prompt for Codex** for the ninth implementation phase of the Mula Group ecosystem repository, focused on the structured content layer and CMS integration.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for AI coding agents,
- a structured task definition for building the CMS and content backend layer,
- the transition from static / code-based content to scalable content operations.

This phase should begin only after:
- **Phase 1 — Foundation** is stable,
- **Phase 2 — Main Portal** is implemented,
- **Phase 3 — Strategy Pillar** is implemented,
- **Phase 4 — Digital Pillar** is implemented,
- **Phase 5 — Commerce Pillar** is implemented,
- **Phase 6 — Industry Pillar** is implemented,
- **Phase 7 — Projects Pillar** is implemented,
- **Phase 8 — Lifestyle Pillar** is implemented clearly enough to validate the reusable section system.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, CMS systems engineer and implementation specialist.

Your task is to build **Phase 9 — CMS & Content Backend** for the Mula Group ecosystem repository.

## Project context
Mula Group is a modular business ecosystem platform with:
- one main portal: `mulagroup.eu`
- six pillar sites:
  - strategy
  - digital
  - commerce
  - industry
  - projects
  - lifestyle

At this stage, the website system already exists visually and structurally.
Now the goal is to make the ecosystem **content-manageable, scalable and maintainable**.

The CMS layer must support:
- structured page content
- pillar content
- services
- CTA blocks
- FAQ items
- offer formats
- case studies
- articles / insights (optional starter)
- forms and SEO metadata
- global navigation and footer content

This phase is not about redesigning the sites.
It is about making the built system **editable, typed and future-ready**.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `mulagroup_codex_build_spec.md`
4. `mulagroup_cms_schema_spec.md`
5. `mulagroup_content_system.md`
6. `mulagroup_design_system_spec.md`

You may also use:
- all pillar blueprints
- `mulagroup_case_study_framework.md`
- `mulagroup_sales_framework.md`

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 9 — CMS & CONTENT BACKEND

This phase is about implementing the structured content layer and wiring it into the existing frontends.

Do not skip ahead into CRM, dashboards or AI automation.

---

## Main goal
Implement the CMS and content backend layer so that the Mula Group ecosystem becomes:
- editable
- structured
- typed
- scalable
- maintainable

The result must allow content for the main portal and pillar pages to be managed without rewriting core UI code.

---

## CMS direction
Use the CMS direction defined in the documentation.

Preferred direction:
- **Sanity** (recommended)

Alternative only if necessary and justified by the repo:
- a structured local content layer that mirrors the final CMS schema
- but the system must remain ready for real CMS transition

If a real CMS implementation is used, keep it modular and future-safe.

---

## Scope of work
Build the following:

### 1. Global schema layer
Implement schemas / models for:
- SiteSettings
- Navigation
- Footer
- SEO model
- CTA model

These should support:
- global brand settings
- main navigation
- pillar-specific navigation if appropriate
- footer groups
- reusable CTA references
- reusable SEO metadata

---

### 2. Core page content model
Implement schemas / models for:
- Page
- HeroBlock
- SectionBlock

The section system must support reusable, composable sections rather than page-specific hardcoding.

At minimum, support the core section types needed across existing pages:
- intro
- pillarGrid
- serviceGrid
- processSteps
- offerFormats
- audienceCards
- differentiators
- faq
- contactBlock
- customRichText

---

### 3. Pillar content models
Implement schemas / models for:
- Pillar
- Service
- OfferFormat
- FaqItem
- ProcessStep
- AudienceCard

These must support all six pillars consistently.

---

### 4. Content fetching / mapping layer
Implement the frontend content integration layer.

This should include:
- content fetch utilities
- typed mapping between CMS data and React components
- page loaders or data functions
- graceful fallback handling
- a clean separation between CMS output and UI components

Do not tightly couple raw CMS responses directly into page JSX.

---

### 5. Main portal content migration
Move the main portal homepage content into the structured content layer.

This includes at least:
- hero
- about / intro
- ecosystem section
- operating model section
- capabilities section
- partnership / CTA section
- footer content

The frontend should render from structured content instead of hardcoded copy where feasible.

---

### 6. Pillar content migration
Move each implemented pillar page into the structured content model.

At minimum, structure:
- hero
- services
- process
- offer formats
- FAQ
- final CTA

Do not redesign the page layouts.
Only migrate content ownership into the new structured model.

---

### 7. Form config models
Implement content-level support for forms, including:
- form definition
- field configuration
- form labels
- success / error messages
- routing config placeholders
- tracking names

No full CRM backend is required in this phase, but the form content layer must be ready.

---

### 8. Case study starter schema
Implement starter support for:
- CaseStudy
- related pillars
- summary
- challenge
- approach
- outcome
- metrics
- featured flag
- SEO

Do not build a full case study library UI unless needed minimally for validation.
The priority is schema readiness.

---

### 9. Optional article / insights starter
If cleanly possible within scope, create starter schema support for:
- Article
- excerpt
- body
- pillar reference
- SEO
- featured image

This can remain unused visually if necessary, but the content foundation should be ready.

---

### 10. Content management developer experience
Set up the CMS/content layer so that:
- schemas are organized clearly
- content types are named consistently
- types can be generated or inferred cleanly
- frontend developers can understand the data structure easily
- future content editors are not trapped in a chaotic schema model

---

## Architecture rules
You must:
- keep the schema structure aligned with `mulagroup_cms_schema_spec.md`
- keep content models reusable across pages and pillars
- keep content integration typed
- preserve the design system and page structure already implemented
- avoid content duplication where shared references are better
- separate schema logic, content fetching and UI rendering cleanly

---

## UX / product rules
This phase must improve:
- editability
- maintainability
- content consistency
- scale-readiness

It must not damage:
- existing layout quality
- page clarity
- performance unnecessarily
- design consistency

---

## Explicit exclusions
Do **not** do the following in this task:

- do not redesign the homepage or pillar pages
- do not build CRM workflows
- do not build analytics dashboards
- do not build AI triage systems
- do not build full client portals
- do not overbuild editorial workflows beyond what is useful now
- do not turn this phase into a complete back-office platform

This task is about **CMS and structured content backend only**.

---

## Expected output
Deliver:
1. working CMS / structured content schema layer
2. typed content models
3. content fetch / mapping layer
4. migrated content for the main portal
5. migrated content for pillar pages
6. starter schemas for forms, case studies and optional articles
7. a system ready for future sales / ops / analytics phases

---

## Definition of done
This phase is done only if:
- the main portal content is driven by structured models
- the pillar pages use structured content for key sections
- reusable content types exist for pages, services, FAQ, CTA and SEO
- content integration is typed and maintainable
- the frontend remains visually consistent
- the system is clearly ready for future CMS operations and later CRM / analytics / AI phases

---

## Output format
Return:
1. a short summary of what was built
2. the CMS/content schemas implemented
3. the main content models and integration layer added
4. what content was migrated successfully
5. any implementation assumptions
6. what is now ready for Phase 10

Now build only **Phase 9 — CMS & Content Backend**.

---

## Recommended usage note
Before sending this prompt to Codex, add this instruction above it:

**Read the outputs of Phase 1 through Phase 8 first, then read the CMS and content source-of-truth files. Build only the structured CMS/content backend layer. Do not expand into CRM, analytics, dashboards or AI systems yet.**
