# START_HERE_MULAGROUP

## Purpose of this file

This document is the **main entry point** for working with the Mula Group project repository.

It is intended for:

- founders,
- developers,
- Codex / AI coding agents,
- designers,
- operators,
- future collaborators.

Its role is to explain:

- what the project is,
- which documents are the source of truth,
- how to work with the documentation,
- what the implementation order should be,
- what the current working logic is,
- what should happen next.

This file should be treated as the **control center for the repository**.

---

# 1. What this project is

Mula Group is not a single-service website project.

It is a **business ecosystem platform** built around a main brand and multiple strategic pillars:

- Strategy
- Digital
- Commerce
- Industry
- Projects
- Lifestyle

The final system is meant to include:

- a main portal (`mulagroup.eu`)
- multiple pillar websites / subdomains
- a shared design system
- a shared technical architecture
- a shared content system
- a sales and operations framework
- AI-assisted triage, CRM, dashboards and reporting logic

This repository is therefore not “just a website repo”.  
It is the foundation for a **modular, scalable ecosystem of business websites and operating systems**.

---

# 2. Core implementation philosophy

The Mula Group ecosystem must be built in the following order:

1. **Foundations first**
2. **Main portal second**
3. **Pillar websites third**
4. **CMS and content operations fourth**
5. **Sales, CRM and operations layer fifth**
6. **Localization and content-truth alignment sixth**
7. **Analytics, dashboards and AI triage seventh**
8. **Reporting and operating intelligence eighth**
9. **Trust assets and content engine ninth**
10. **Retainer and client growth layer tenth**

This means:

- do **not** try to build everything at once,
- do **not** start from all pillar sites at the same time,
- do **not** start from AI/CRM/dashboard logic before the web and content foundations are stable.

The system should be built like a real business platform:

- strategy first,
- structure second,
- execution third,
- automation after stability.

---

# 3. Source of truth files

The documents below should be treated as the **primary source of truth**.

## 3.1 Strategic foundation

- `mulagroup_master_vision.md`
- `mulagroup_ecosystem_blueprint.md`
- `mulagroup_brand_strategy.md`

These define:

- what Mula Group is,
- what it is not,
- how the ecosystem is structured,
- how the brand should be positioned.

---

## 3.2 Content and UX foundation

- `mulagroup_content_system.md`
- `mulagroup_design_system_spec.md`

These define:

- tone of voice,
- core messages,
- homepage content logic,
- pillar messaging,
- UI/UX and design system rules.

---

## 3.3 Technical foundation

- `mulagroup_codex_build_spec.md`
- `mulagroup_cms_schema_spec.md`

These define:

- stack,
- monorepo structure,
- component architecture,
- routing,
- content models,
- CMS schemas,
- integration model.

---

## 3.4 Pillar blueprints

- `strategy_site_blueprint.md`
- `digital_site_blueprint.md`
- `commerce_site_blueprint.md`
- `industry_site_blueprint.md`
- `projects_site_blueprint.md`
- `lifestyle_site_blueprint.md`

These define:

- the role of each subdomain,
- page structure,
- CTA and lead logic,
- pillar-specific UX and SEO.

---

## 3.5 Sales and operations foundation

- `mulagroup_sales_framework.md`
- `mulagroup_operating_system.md`
- `mulagroup_lead_scoring_model.md`
- `mulagroup_offer_templates.md`
- `mulagroup_internal_brief_templates.md`
- `mulagroup_discovery_framework.md`
- `mulagroup_followup_templates.md`
- `mulagroup_client_journey_map.md`
- `mulagroup_retainer_model.md`

These define:

- how leads should be handled,
- how offers are built,
- how discovery works,
- how projects and retainers are structured,
- how clients move through the ecosystem.

---

## 3.6 Analytics, reporting and AI foundation

- `mulagroup_analytics_event_map.md`
- `mulagroup_dashboard_spec.md`
- `mulagroup_reporting_framework.md`
- `mulagroup_ai_triage_prompt_library.md`

These define:

- analytics logic,
- dashboards,
- reporting rhythm,
- AI triage / routing support.

---

## 3.7 Case studies and trust content

- `mulagroup_case_study_framework.md`

This defines:

- how to document and present proof of work,
- how to create reusable trust-building project stories.

---

# 4. Priority of truth

If there is any conflict between documents, use this order of precedence:

## Level 1 — Brand and ecosystem truth

1. `mulagroup_master_vision.md`
2. `mulagroup_ecosystem_blueprint.md`
3. `mulagroup_brand_strategy.md`

## Level 2 — UI/content truth

4. `mulagroup_content_system.md`
5. `mulagroup_design_system_spec.md`

## Level 3 — Technical truth

6. `mulagroup_codex_build_spec.md`
7. `mulagroup_cms_schema_spec.md`

## Level 4 — Pillar implementation truth

8. pillar blueprint files

## Level 5 — Operations and automation truth

9. sales / operating / analytics / AI files

If something is unclear:

- preserve the brand direction,
- preserve the ecosystem structure,
- preserve the design system,
- prefer modularity and future scale.

---

# 5. Working rules for Codex / AI coding agents

Any AI coding agent working on this repository should follow these rules.

## 5.1 Read before building

Before implementing anything, always review:

- `mulagroup_brand_strategy.md`
- `mulagroup_content_system.md`
- `mulagroup_design_system_spec.md`
- `mulagroup_codex_build_spec.md`

If building a pillar:

- also read the relevant pillar blueprint.

---

## 5.2 Build reusable systems first

Always build in this order:

1. repo / app structure
2. design tokens
3. shared UI primitives
4. shared layout logic
5. homepage shell
6. content models
7. page sections
8. final page composition

---

## 5.3 Do not improvise brand direction

Do not:

- invent a new visual style,
- create random startup-like UI,
- mix unrelated styles across pillars,
- overuse flashy effects,
- rewrite brand messaging without instruction.

---

## 5.4 Keep the system modular

Every implementation should:

- prefer shared packages,
- prefer reusable components,
- prefer content-driven architecture,
- support future scale.

---

## 5.5 Respect hierarchy

The main site is the ecosystem portal.  
Subdomains are focused pillar sites.  
Do not turn `mulagroup.eu` into a cluttered services site.

---

# 6. Repository working model

## 6.1 Recommended docs location

All strategic and architectural documents should live in a structure similar to:

```text
/docs/mulagroup-foundation/
```

Suggested subfolders:

```text
/docs/mulagroup-foundation/strategy
/docs/mulagroup-foundation/ux
/docs/mulagroup-foundation/tech
/docs/mulagroup-foundation/pillars
/docs/mulagroup-foundation/ops
/docs/mulagroup-foundation/ai
```

---

## 6.2 Suggested project structure

The implementation should follow the monorepo logic described in:

- `mulagroup_codex_build_spec.md`

High-level structure:

```text
/apps
/packages
/docs
/public
/scripts
```

---

# 7. Recommended implementation order

## Phase 1 — Foundation

Goal:
Create the base technical and design infrastructure.

Included:

- monorepo setup
- app shells
- shared UI package
- shared design tokens
- shared layouts
- shared routing conventions
- baseline content architecture

Core files:

- `mulagroup_codex_build_spec.md`
- `mulagroup_design_system_spec.md`
- `mulagroup_brand_strategy.md`

---

## Phase 2 — Main portal

Goal:
Build `mulagroup.eu` as the ecosystem portal.

Included:

- hero
- about
- ecosystem pillars section
- operating model
- capabilities
- partnerships
- contact
- footer

Core files:

- `mulagroup_ecosystem_blueprint.md`
- `mulagroup_content_system.md`
- `mulagroup_brand_strategy.md`

---

## Phase 3 — Pillar sites

Goal:
Build pillar subdomains one by one.

Recommended order:

1. Strategy
2. Digital
3. Commerce
4. Industry
5. Projects
6. Lifestyle

Core files:

- corresponding pillar blueprint
- content system
- design system
- codex build spec

---

## Phase 4 — CMS and content backend

Goal:
Move from static content to structured content operations.

Included:

- CMS schema implementation
- page models
- service models
- CTA / FAQ / case study models
- form configuration models

Core files:

- `mulagroup_cms_schema_spec.md`

---

## Phase 5 — Sales and operating layer

Goal:
Integrate lead handling, routing, CRM logic and internal workflows.

Included:

- forms → CRM
- lead scoring
- operating system logic
- internal brief flows
- discovery system
- follow-up sequences
- offer structure

Core files:

- `mulagroup_sales_framework.md`
- `mulagroup_operating_system.md`
- `mulagroup_lead_scoring_model.md`
- `mulagroup_discovery_framework.md`

---

## Phase 5.5 — Localization and language layer

Goal:
Add Polish as a first-class language layer across the ecosystem after CMS and sales readiness exist.

Included:

- bilingual architecture
- locale-aware routing
- localized UI copy
- localized content support
- language switching
- localized SEO readiness

Core files:

- `Phase 10.5 — Polish Localization & Language Layer.md`
- `mulagroup_content_system.md`
- `mulagroup_cms_schema_spec.md`

---

## Phase 5.6 — Pillar content truth alignment

Goal:
Align portal and pillar content with the real Mula Group offer, service truth and bilingual consistency.

Included:

- service naming alignment
- CTA truth alignment
- pillar-by-pillar positioning refinement
- EN/PL content integrity
- ecosystem realism improvements

Core files:

- `Phase 10.6 — Pillar Content Alignment & Service Truth Layer.md`
- pillar blueprints
- sales framework files

---

## Phase 6 — Analytics, dashboards and AI

Goal:
Add operational intelligence.

Included:

- analytics events
- dashboards
- reporting
- AI triage
- automation support

Core files:

- `mulagroup_analytics_event_map.md`
- `mulagroup_dashboard_spec.md`
- `mulagroup_reporting_framework.md`
- `mulagroup_ai_triage_prompt_library.md`

---

## Phase 7 — Reporting, automation and operating intelligence

Goal:
Turn analytics, dashboards and AI outputs into structured reporting rhythm and repeatable operating workflows.

Included:

- weekly and monthly reporting outputs
- automation hooks
- signal and alert systems
- operating intelligence layer
- human-in-the-loop automation readiness

Core files:

- `Phase 12 — Reporting, Automation & Operating Intelligence.md`
- `mulagroup_reporting_framework.md`
- `mulagroup_followup_templates.md`

---

## Phase 8 — Case studies, trust assets and content engine

Goal:
Build the proof, trust and authority layer on top of the ecosystem.

Included:

- case study system
- trust asset components
- insight / article engine
- internal linking for authority and discovery
- SEO-ready proof content structure

Core files:

- `Phase 13 — Case Studies, Trust Assets & Content Engine.md`
- `mulagroup_case_study_framework.md`
- `mulagroup_content_system.md`

---

## Phase 9 — Retainer, expansion and client growth

Goal:
Turn successful delivery, trust and ecosystem visibility into repeat work, cross-pillar growth and retainer readiness.

Included:

- retainer-fit logic
- expansion opportunity tracking
- account growth visibility
- cross-pillar client mapping
- renewal and review rhythm support

Core files:

- `Phase 14 — Retainer, Expansion & Client Growth Layer.md`
- `mulagroup_retainer_model.md`
- `mulagroup_client_journey_map.md`

---

# 8. What should happen right now

## Current recommended phase

**Phase 9 — CMS & Content Backend**

This means the current implementation state is:

- Phase 1 — Foundation is complete and stable
- Phase 2 — Main Portal is complete and reviewed
- Phase 3 — Strategy Pillar is complete, reviewed and stabilized
- Phase 4 — Digital Pillar is complete, reviewed and stabilized
- Phase 5 — Commerce Pillar is complete, reviewed and stabilized
- Phase 6 — Industry Pillar is complete, reviewed and stabilized
- Phase 7 — Projects Pillar is complete, reviewed and stabilized
- Phase 8 — Lifestyle Pillar is complete, reviewed and stabilized
- the shared system is now strong enough to move into CMS and structured content operations

The immediate next technical task should be:

- build the structured CMS and content backend layer
- preserve the visual and structural consistency established across portal and all stabilized pillars
- map the current manifest-driven content model into CMS-ready schemas and editorial structures
- keep implementation focused on content architecture without introducing CRM, analytics or AI logic yet

Do **not** yet:

- implement CRM logic,
- build dashboards,
- go deep into AI automation,
- redesign the pillar system after stabilization,
- mix content-operations work with later operational systems too early.

---

# 9. What success looks like at the current stage

The current milestone is successful when:

- Phase 1 and Phase 2 remain technically stable,
- `mulagroup.eu` clearly represents the ecosystem,
- the Strategy pillar clearly communicates its role and entry-point logic,
- the Digital, Commerce and Industry pillars clearly communicate their role and stay aligned with the shared system,
- the Projects pillar clearly communicates its role and is fully stabilized,
- the Lifestyle pillar clearly communicates structured premium experience and is fully stabilized,
- the shared design language is strong enough to carry the ecosystem into CMS and content operations,
- the repo is ready to move into Phase 9 without reworking the portal or previously stabilized pillars,
- docs and implementation point to the same next step.

That is the real milestone before CMS and operating layers begin.

---

# 10. Current and next task format

Use this format when assigning work to Codex:

## Task template

- Goal
- Source of truth files
- Scope of this step
- Explicit exclusions
- Expected output

### Example

Goal:
Build the monorepo foundation for the Mula Group ecosystem.

Source of truth files:

- `mulagroup_codex_build_spec.md`
- `mulagroup_design_system_spec.md`
- `mulagroup_brand_strategy.md`

Scope:

- repo structure
- shared UI package
- design tokens
- app shell for `portal`

Do not:

- build full pillar pages
- implement CRM
- create dashboards
- improvise new visual styles

Expected output:

- working monorepo scaffold
- shared packages
- base layout
- initial homepage shell

---

# 11. Recommended “do not do this” list

Do not:

- start from all pillar sites at once
- build AI agents before forms and CRM logic are stable
- put too much logic into the homepage
- redesign brand or content direction ad hoc
- mix multiple UI styles
- treat documentation as optional inspiration
- skip the main portal and jump directly into random subpages
- overload the first version with too many systems

---

# 12. Recommended first tasks after this file

## Immediate next task

**Move into Phase 9 — CMS & Content Backend**

## After that

**Then continue with sales/CRM operations only after the CMS and content layer is stable enough**

## After that

**Then continue with Phase 10.5, Phase 10.6, Phase 11, Phase 12, Phase 13 and Phase 14 in documented order**

That is the strongest next sequence after a stable full pillar rollout.

---

# 13. Recommended companion file

The next document that should sit next to this one is:

`IMPLEMENTATION_PHASES.md`

Its purpose:

- track current phase,
- define done criteria,
- list active tasks,
- show what is blocked,
- show what comes next.

If this file does not exist yet, create it.

---

# 14. Final rules

1. Always preserve the ecosystem logic.
2. Always preserve the premium corporate-tech design direction.
3. Always treat shared systems as more important than one-off page hacks.
4. Always build in phases.
5. Always keep docs and implementation aligned.
6. Always prefer clear scope over chaotic speed.
7. The goal is not just to build websites.
8. The goal is to build the digital foundation of the Mula Group ecosystem.
