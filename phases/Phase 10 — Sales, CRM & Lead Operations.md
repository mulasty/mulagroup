
# Phase 10 — Sales, CRM & Lead Operations

## Purpose of this file
This document contains the **execution prompt for Codex** for the tenth implementation phase of the Mula Group ecosystem repository, focused on the sales layer, CRM structure and lead operations.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for AI coding agents,
- a structured task definition for building the sales and lead operations layer,
- the transition from content-ready websites into an operational commercial system.

This phase should begin only after:
- **Phase 1 — Foundation** is stable,
- **Phase 2 — Main Portal** is implemented,
- **Phase 3 — Strategy Pillar** is implemented,
- **Phase 4 — Digital Pillar** is implemented,
- **Phase 5 — Commerce Pillar** is implemented,
- **Phase 6 — Industry Pillar** is implemented,
- **Phase 7 — Projects Pillar** is implemented,
- **Phase 8 — Lifestyle Pillar** is implemented,
- **Phase 9 — CMS & Content Backend** is stable enough to support structured forms and editable CTA / inquiry logic.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, CRM systems engineer and implementation specialist.

Your task is to build **Phase 10 — Sales, CRM & Lead Operations** for the Mula Group ecosystem repository.

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

At this stage:
- the ecosystem websites already exist,
- the content layer already exists,
- the next step is to connect inbound interest to a structured commercial operating model.

The system now needs to support:
- structured inquiries
- lead capture
- lead routing
- lead classification
- CRM field mapping
- follow-up readiness
- discovery readiness
- offer preparation readiness
- cross-pillar sales logic

This phase is not about dashboards or AI triage yet.
It is about making the ecosystem commercially operational.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `mulagroup_sales_framework.md`
4. `mulagroup_operating_system.md`
5. `mulagroup_lead_scoring_model.md`
6. `mulagroup_internal_brief_templates.md`
7. `mulagroup_discovery_framework.md`
8. `mulagroup_followup_templates.md`
9. `mulagroup_client_journey_map.md`
10. `mulagroup_retainer_model.md`
11. `mulagroup_cms_schema_spec.md`
12. `mulagroup_codex_build_spec.md`

You may also use:
- `mulagroup_offer_templates.md`
- `mulagroup_dashboard_spec.md` only as future-awareness context
- all pillar blueprints for inquiry type context

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 10 — SALES, CRM & LEAD OPERATIONS

This phase is about implementing the commercial intake and lead operations layer.

Do not skip ahead into advanced dashboards or AI systems.

---

## Main goal
Implement the sales, CRM and lead operations layer so that the Mula Group ecosystem becomes:
- inquiry-ready
- sales-ready
- routing-ready
- CRM-ready
- discovery-ready
- operationally structured

The result must ensure that inbound leads do not just “arrive” — they enter a real commercial workflow.

---

## Scope of work
Build the following:

### 1. Structured form system
Implement the actual inquiry / contact form layer across:
- main portal
- relevant pillar pages

The forms must support:
- common field structure
- inquiry type selection
- pillar context
- optional company / project context
- success and error states
- form-level tracking identifiers
- consistent UX

Do not leave forms as visual placeholders only.

---

### 2. Form submission pipeline
Implement the submission handling layer.

At minimum, the system must support:
- validated submission
- normalized payload structure
- webhook-ready output
- CRM-ready mapping object
- environment-based configuration for endpoints

This may use:
- route handlers
- server actions
- API endpoints
- webhook integration points

The output must be structured and ready for future automation.

---

### 3. Lead payload normalization
Create a normalized lead submission model that includes fields such as:
- source
- source page
- pillar context
- inquiry type
- contact details
- message
- UTM / source metadata where available
- timestamp
- optional routing hints

This structure must align with the sales framework and CRM expectations.

---

### 4. CRM field mapping layer
Implement a CRM mapping layer or structured mapping utility that translates lead submissions into the fields needed by the Mula Group operating model.

At minimum, support mapping for:
- lead source
- company / project
- contact name
- email
- phone
- primary pillar
- secondary pillar placeholders
- inquiry type
- lead summary
- stage
- next step placeholder
- owner placeholder
- metadata / campaign info

Do not hardcode to one specific CRM vendor unless already determined in the repo.
Keep the system adaptable.

---

### 5. Pillar-aware inquiry logic
The lead system must understand the context of:
- main portal inquiries
- Strategy inquiries
- Digital inquiries
- Commerce inquiries
- Industry inquiries
- Projects inquiries
- Lifestyle inquiries

Each form should pass:
- page context
- pillar context
- likely inquiry intent
- submission type

This should make future routing and triage straightforward.

---

### 6. Inquiry type taxonomy
Implement a structured taxonomy for inquiry types, aligned with the ecosystem logic.

Examples may include:
- business-development
- strategy
- digital
- ai-implementation
- commerce
- marketplace
- operational-support
- project-development
- premium-concept
- partnership
- general-inquiry

Keep the taxonomy consistent, typed and reusable.

---

### 7. Lead status / stage model
Implement a lead stage model aligned with the operating system, for example:
- new_lead
- qualified
- discovery_planned
- discovery_done
- proposal_in_preparation
- proposal_sent
- negotiation
- won
- delivery_active
- expansion_opportunity
- lost

This does not need a full CRM UI yet, but the data model and programmatic support must exist.

---

### 8. Lead scoring field support
Implement support fields for future lead scoring.

This phase does not need to run full AI scoring, but the schema and logic must be ready for:
- fit_score
- urgency_score
- readiness_score
- value_potential_score
- ecosystem_potential_score
- total_score
- lead_class

These may initially be null / placeholder-capable fields.

---

### 9. Discovery and follow-up readiness
Implement structural support so that each lead record or output can later support:
- discovery summary
- next-step recommendation
- offer-preparation notes
- follow-up type
- follow-up due date
- owner assignment

At this phase, focus on data readiness, not full automation.

---

### 10. Internal brief generation readiness
Implement utilities or payload structures that make it easy to generate:
- Lead Intake Brief
- Discovery Brief
- Pillar Handover Brief
- Offer Preparation Brief

This can be done through normalized server-side payload objects, adapters, or internal data mapping helpers.

Do not build a full internal ops app yet unless minimal and clearly useful.

---

### 11. Contact / conversion UX refinement
Refine the contact and inquiry conversion experience across the ecosystem.

Ensure that:
- main CTA paths feel consistent
- forms are not overly long
- inquiry forms feel premium and low-friction
- pillar-specific final CTA sections actually connect to the new submission flow
- validation UX is strong and clear

---

### 12. Environment and configuration readiness
Implement configuration handling for:
- webhook endpoints
- CRM endpoints
- environment-specific form destinations
- optional notification endpoints
- internal testing / staging routing

The goal is to make the sales layer production-ready without hardcoding production-only logic everywhere.

---

## Architecture rules
You must:
- align all lead handling with the sales and operating documents
- keep form definitions compatible with the CMS/content model where relevant
- separate frontend form UI from backend submission logic
- keep lead models typed and reusable
- preserve pillar context across the entire flow
- avoid locking the architecture too tightly to one vendor or service prematurely
- keep the system ready for future analytics, dashboards and AI triage

---

## UX / product rules
This phase must improve:
- inquiry clarity
- lead quality
- commercial readiness
- follow-up readiness
- operational structure

It must not create:
- long confusing forms
- unclear inquiry flows
- overly technical lead capture experiences
- inconsistent CTA behavior between pillars

---

## Explicit exclusions
Do **not** do the following in this task:

- do not build advanced dashboards
- do not implement the full analytics event layer yet
- do not implement AI triage logic
- do not build a full CRM frontend application unless minimal and clearly required
- do not build back-office workflow UIs beyond the minimum needed for testing or validation
- do not redesign the pillar sites or portal structure

This task is about **sales, CRM mapping and lead operations readiness only**.

---

## Expected output
Deliver:
1. working structured inquiry forms
2. backend submission handling layer
3. normalized lead payload model
4. CRM mapping-ready data model
5. pillar-aware inquiry handling
6. lead stage model support
7. future scoring / discovery / follow-up readiness
8. a system prepared for analytics and AI phases later

---

## Definition of done
This phase is done only if:
- inquiries from the portal and pillar sites are actually captured
- submissions are normalized into a reusable structured model
- the CRM mapping layer is clear and typed
- inquiry context and pillar context are preserved
- the system supports future lead scoring and routing
- the conversion UX is clean and premium
- the ecosystem is operationally ready for the next intelligence layer

---

## Output format
Return:
1. a short summary of what was built
2. the lead / CRM models implemented
3. the form and submission architecture added
4. which pages / forms were connected
5. any implementation assumptions
6. what is now ready for Phase 11

Now build only **Phase 10 — Sales, CRM & Lead Operations**.

---

## Recommended usage note
Before sending this prompt to Codex, add this instruction above it:

**Read the outputs of Phase 1 through Phase 9 first, then read the sales, CRM and operations source-of-truth files. Build only the sales, CRM mapping and lead operations layer. Do not expand into dashboards or AI systems yet.**
