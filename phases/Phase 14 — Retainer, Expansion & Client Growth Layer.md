# Phase 14 — Retainer, Expansion & Client Growth Layer

## Purpose of this file
This document contains the **execution prompt for Codex** for the next implementation phase of the Mula Group ecosystem repository, focused on retainers, expansion logic and client growth.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for client growth systems,
- a structured task definition for turning one-off projects into longer-term ecosystem relationships,
- the bridge between trust/authority systems and stronger recurring commercial growth.

This phase should begin only after:
- **Phase 11 — Analytics, Dashboards & AI Triage** is stable,
- **Phase 12 — Reporting, Automation & Operating Intelligence** is stable,
- **Phase 13 — Case Studies, Trust Assets & Content Engine** is stable,
- the sales / CRM / reporting layers are already functioning reliably.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, client-growth systems engineer and retention-layer implementation specialist.

Your task is to build **Phase 14 — Retainer, Expansion & Client Growth Layer** for the Mula Group ecosystem repository.

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
- the platform exists,
- the content layer exists,
- the sales/CRM layer exists,
- localization exists,
- pillar truth-alignment exists,
- analytics, dashboards and AI triage exist,
- reporting and operating intelligence exist,
- case studies and trust assets exist.

Now the next step is to make the ecosystem:
- better at retaining clients,
- better at growing accounts over time,
- better at cross-pillar expansion,
- better at turning delivery into recurring value,
- better at managing long-term client growth pathways.

This phase is about building the **relationship growth layer**.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `CODEX_WORKFLOW.md`
4. `docs/sales/mulagroup_retainer_model.md`
5. `docs/sales/mulagroup_client_journey_map.md`
6. `docs/sales/mulagroup_sales_framework.md`
7. `docs/sales/mulagroup_offer_templates.md`
8. `docs/sales/mulagroup_followup_templates.md`
9. `docs/architecture/mulagroup_operating_system.md`
10. `docs/analytics/mulagroup_dashboard_spec.md`
11. `docs/analytics/mulagroup_reporting_framework.md`
12. the implemented output of Phases 1-13

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 14 — RETAINER, EXPANSION & CLIENT GROWTH LAYER

Do not skip ahead into partner portals, client portals or later maturity-scale systems.

---

## Main goal
Implement the retainer, expansion and client growth layer so that the Mula Group ecosystem becomes:

- better at recurring revenue,
- better at long-term client relationships,
- better at cross-pillar upsell and expansion,
- better at identifying which clients should move into retainer models,
- better at turning project delivery into account growth.

The result must ensure that:
- the system can identify retainer-fit clients,
- the system can detect expansion opportunities,
- account growth signals become visible,
- retainer offers and growth pathways can be managed more intentionally.

---

## Scope of work
Build the following:

### 1. Retainer-fit detection layer
Implement structured support for identifying whether a lead, client or project is a good fit for a retainer model.

At minimum support evaluation dimensions such as:
- recurring need
- ongoing decision support need
- multi-stage growth potential
- cross-pillar potential
- strategic importance
- delivery continuity potential

This can be driven by:
- CRM fields
- structured rules
- AI-assistive recommendations
- operator inputs

Do not reduce retainer logic to a crude binary flag without context.

---

### 2. Retainer model data support
Implement the data structures needed to support retainer-oriented client management.

At minimum support:
- retainer type
- retainer stage
- client growth status
- current active pillars
- potential next pillars
- retainer proposal readiness
- renewal / review dates
- account notes / strategic notes

This does not need a full account-management UI yet, but the structures must be real and reusable.

---

### 3. Expansion opportunity layer
Implement a system for tracking and surfacing expansion opportunities.

Examples:
- Strategy lead that should grow into Digital
- Digital client that should expand into Commerce
- Projects client that should expand into Lifestyle
- Industry support client with Commerce / Digital opportunity
- multi-pillar venture opportunity signals

These opportunities should be:
- structured,
- trackable,
- reviewable,
- connected to the CRM / account layer.

---

### 4. Client growth status model
Implement a structured model for client/account growth status.

At minimum support states such as:
- one-off project
- active delivery
- repeat client
- cross-pillar client
- retainer candidate
- active retainer
- strategic account
- dormant / inactive
- reactivation candidate

These should support both reporting and operating workflows.

---

### 5. Account expansion dashboard support
Extend the dashboard / reporting layer to support account growth visibility.

At minimum surface:
- repeat clients
- cross-pillar movement
- retainer candidates
- active retainers
- renewal / review timing
- top expansion opportunities
- high-value strategic accounts

This should help Mula Group see where the best growth is inside the existing client base.

---

### 6. Retainer proposal readiness layer
Implement support for preparing retainer-oriented next steps.

At minimum support:
- retainer recommendation flags
- suggested retainer type
- suggested first retainer framing
- proposal readiness signal
- associated pillar combinations
- account growth notes

This should make it easier to move from successful project work to recurring relationship models.

---

### 7. Cross-pillar account mapping
Implement a structured way to see and manage how one client/account touches multiple pillars.

At minimum support:
- current pillar involvement
- past pillar involvement
- likely next pillar
- ecosystem depth score or equivalent
- multi-pillar opportunity flags

This should help the ecosystem work like an ecosystem, not six isolated service lines.

---

### 8. Review and renewal rhythm support
Implement support for recurring account review logic.

At minimum support:
- review date tracking
- renewal reminders
- retainer review prompts
- account check-in cadence
- expansion review points

Do not build uncontrolled automatic outreach yet, but prepare the logic cleanly.

---

### 9. AI-assisted expansion recommendations
Extend the AI / intelligence layer so it can assist with:
- retainer-fit recommendations
- expansion opportunity suggestions
- account-growth summaries
- likely next pillar suggestions
- strategic account notes

The AI should remain assistive and reviewable by humans.

---

### 10. Client journey continuity
Ensure the client journey model supports movement from:
- lead
- discovery
- proposal
- delivery
- repeat project
- cross-pillar expansion
- retainer
- strategic long-term relationship

The ecosystem should now support the whole value arc, not only project acquisition.

---

### 11. Trust and content integration for growth
Connect the trust/content layer with client growth logic where useful.

Examples:
- case studies supporting expansion conversations
- trust assets supporting retainer proposals
- pillar-specific proof supporting cross-sell
- relevant insights supporting account development

This should feel natural and helpful, not forced.

---

### 12. Locale-aware client growth support
Ensure the client growth layer can remain aware of:
- EN vs PL account context if relevant
- localized proposal / retainer materials
- localized communication prompts if the architecture supports it

The system should remain bilingual-compatible.

---

## Architecture rules
You must:
- align the implementation with the retainer model and client journey map,
- keep account-growth structures reusable,
- avoid creating a brittle one-off account logic,
- preserve clean CRM compatibility,
- keep AI recommendations assistive and transparent,
- support future account-management workflows without forcing a huge admin platform now.

---

## UX / product rules
This phase must improve:
- recurring revenue readiness,
- account visibility,
- expansion discipline,
- retainer readiness,
- client lifetime value support.

It must not create:
- fake retainer logic disconnected from delivery reality,
- noisy upsell systems,
- forced cross-sell flows,
- overcomplicated account structures nobody will use,
- AI recommendations without business context.

---

## Explicit exclusions
Do **not** do the following in this task:

- do not redesign existing public site pages unnecessarily
- do not build full client portals
- do not build full partner portals
- do not create autonomous upsell or sales automation that runs without review
- do not create enterprise account-management bloat without practical use

This task is about **retainer readiness, expansion tracking and client growth systems only**.

---

## Expected output
Deliver:
1. retainer-fit detection layer
2. account growth and expansion data structures
3. retainer / renewal / review support
4. dashboard visibility for account growth
5. AI-assisted expansion recommendations
6. cross-pillar account mapping
7. a project ready for the next maturity / scale phase

---

## Definition of done
This phase is done only if:
- retainer candidates can be identified,
- expansion opportunities can be tracked,
- account growth status is visible,
- cross-pillar client movement is supported,
- reporting can include repeat / expansion / retainer signals,
- the ecosystem is meaningfully better at client lifetime value and recurring relationship growth,
- the project is now ready for the next maturity-scale layer.

---

## Output format
Return:
1. a short summary of what was built
2. the retainer / expansion architecture implemented
3. which account-growth systems were added
4. how dashboards / AI were extended
5. any implementation assumptions
6. remaining limitations or risks
7. what is now ready for the next phase

Now build only **Phase 14 — Retainer, Expansion & Client Growth Layer**.
