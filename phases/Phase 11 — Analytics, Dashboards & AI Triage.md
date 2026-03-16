# Phase 11 — Analytics, Dashboards & AI Triage

## Purpose of this file
This document contains the **execution prompt for Codex** for the next implementation phase of the Mula Group ecosystem repository, focused on analytics, dashboards and AI-assisted triage.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for analytics and intelligence systems,
- a structured task definition for turning the ecosystem into a measurable and operationally intelligent platform,
- the bridge between a functional commercial system and a data-aware, AI-assisted operating layer.

This phase should begin only after:
- **Phase 9 — CMS & Content Backend** is stable,
- **Phase 10 — Sales, CRM & Lead Operations** is stable,
- **Phase 10.5 — Polish Localization & Language Layer** is stable,
- **Phase 10.6 — Pillar Content Alignment & Service Truth Layer** is stable.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, analytics systems engineer and AI operations implementation specialist.

Your task is to build **Phase 11 — Analytics, Dashboards & AI Triage** for the Mula Group ecosystem repository.

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
- the sales/CRM layer exists,
- Polish localization exists,
- pillar content and service truth have been aligned.

Now the project must become:
- measurable,
- observable,
- triage-aware,
- insight-capable,
- decision-support ready.

This phase is about adding the **intelligence layer** on top of the operating system.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `CODEX_WORKFLOW.md`
4. `docs/analytics/mulagroup_analytics_event_map.md`
5. `docs/analytics/mulagroup_dashboard_spec.md`
6. `docs/analytics/mulagroup_reporting_framework.md`
7. `docs/ai/mulagroup_ai_triage_prompt_library.md`
8. `docs/sales/mulagroup_sales_framework.md`
9. `docs/sales/mulagroup_lead_scoring_model.md`
10. `docs/architecture/mulagroup_operating_system.md`
11. `docs/cms/mulagroup_cms_schema_spec.md`
12. the implemented output of Phases 1-10.6

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 11 — ANALYTICS, DASHBOARDS & AI TRIAGE

Do not skip ahead into advanced client portals, partner portals or broader maturity-scale systems.

---

## Main goal
Implement the analytics, dashboards and AI triage layer so that the Mula Group ecosystem becomes:

- trackable,
- measurable,
- explainable,
- routing-aware,
- insight-capable,
- ready for weekly and monthly operating intelligence.

The result must ensure that:
- user behavior can be tracked meaningfully,
- leads can be interpreted more intelligently,
- dashboards can show real operating signals,
- AI can assist with routing, summaries and prioritization.

---

## Scope of work
Build the following:

### 1. Analytics event instrumentation
Implement the analytics event layer across:
- main portal
- all pillar pages
- contact / CTA paths
- forms
- key content interactions

Use the event map as the source of truth.

At minimum support:
- page views
- CTA clicks
- form starts
- form submissions
- pillar transitions
- offer-format interactions
- FAQ interactions
- important navigation actions

The implementation must be structured, reusable and consistent across the ecosystem.

---

### 2. Event schema discipline
Implement a clean event schema model.

Ensure that events carry useful metadata where appropriate, such as:
- page
- locale
- pillar
- CTA name
- section name
- inquiry type
- traffic source / campaign placeholders
- content block identifier where relevant

Do not create noisy or inconsistent event naming.

---

### 3. Lead analytics integration
Connect the lead system to analytics so that you can track:
- form start rate
- form completion rate
- lead source by page / pillar
- inquiry type distribution
- conversion path quality
- portal vs pillar lead quality patterns

This should align with the existing sales and CRM logic.

---

### 4. Dashboard data layer
Implement the core dashboard data preparation layer.

At minimum prepare data structures or endpoints for:
- executive dashboard
- sales dashboard
- marketing / website dashboard
- CRM / lead quality dashboard
- pillar performance dashboard
- AI / automation operations dashboard

You do not need to overbuild the final visualization system yet, but the data layer must be real and usable.

---

### 5. Executive dashboard implementation
Implement a first usable executive dashboard view or dashboard-ready panel that surfaces:
- total leads
- qualified leads
- active projects
- pipeline indicators if available
- pillar performance summary
- main alerts / risks
- main opportunities / strong signals

This should be clean and decision-oriented.

---

### 6. Sales / CRM dashboard implementation
Implement a dashboard or panel for sales operations that surfaces:
- leads by source
- leads by pillar
- inquiry type distribution
- stage distribution
- response / follow-up readiness indicators
- high-potential lead signals
- stale or unresolved lead indicators

This should support practical operating decisions.

---

### 7. Marketing / website dashboard implementation
Implement a dashboard or panel that surfaces:
- page performance
- CTA performance
- portal vs pillar traffic patterns
- form behavior
- top converting pages or sections
- weak conversion areas

This should help improve content and UX over time.

---

### 8. AI triage layer
Implement the first practical AI triage layer for lead interpretation.

The AI layer should be able to help with:
- lead summary generation
- primary pillar recommendation
- secondary pillar recommendation
- lead type interpretation
- suggested next step
- confidence level
- optional scoring support fields

Use the AI triage prompt library as the source of truth.

This should be implemented as an assistive intelligence layer, not an uncontrolled autonomous decision-maker.

---

### 9. AI lead summary generation
Implement a structured AI summary output for new leads.

At minimum the system should be able to produce:
- a concise summary
- likely problem type
- likely primary pillar
- possible secondary pillar
- recommended next step
- confidence label

The output must be structured enough to feed CRM and dashboard views.

---

### 10. AI routing recommendation support
Implement support for AI-generated routing suggestions, such as:
- strategy
- digital
- commerce
- industry
- projects
- lifestyle
- multi-pillar / ecosystem lead

This does not have to auto-route irreversibly yet, but it must produce usable recommendations for human review or future automation.

---

### 11. AI scoring-readiness support
If cleanly possible, extend the AI layer so it can support:
- fit score recommendation
- urgency signal
- readiness signal
- value potential signal
- ecosystem potential signal

This can remain recommendation-only at this stage.

---

### 12. Reporting-readiness outputs
Connect analytics, dashboard data and AI triage outputs so they can later support:
- weekly summaries
- monthly reporting
- anomaly detection
- signal surfacing
- operating intelligence review

You do not need to implement the full reporting engine yet, but the outputs must be usable for it.

---

### 13. Alerts and weak-signal layer
Implement a simple first alert layer or signal detection layer for things like:
- high-interest but low-conversion page
- high-value-looking lead with low follow-up readiness
- strong pillar traffic with weak form completion
- repeated unclear portal inquiries
- potentially strategic lead with multi-pillar characteristics

This can be lightweight, but it should be meaningful.

---

### 14. Locale-aware analytics
Ensure the analytics and dashboards remain aware of:
- page locale
- EN vs PL behavior differences
- localized CTA behavior
- localized content performance where relevant

Do not let the language layer break measurement quality.

---

## Architecture rules
You must:
- align implementation with the analytics event map and dashboard spec,
- keep analytics events typed and reusable,
- keep dashboards modular,
- keep AI triage outputs structured,
- avoid hardcoding brittle reporting logic,
- preserve future extensibility for richer reporting and automation,
- avoid creating noisy data without clear decision value.

---

## UX / product rules
This phase must improve:
- observability,
- lead interpretation,
- operational insight,
- quality of decisions,
- visibility into what works and what does not.

It must not create:
- vanity dashboards,
- noisy or meaningless event tracking,
- overcomplicated AI behavior,
- dark-pattern measurement,
- messy data models that nobody can use.

---

## Explicit exclusions
Do **not** do the following in this task:

- do not redesign existing pages
- do not build full client portals
- do not build partner portals
- do not create uncontrolled AI autopilot sales behavior
- do not overbuild a huge BI platform if the underlying signals are not ready
- do not implement maturity-scale systems beyond analytics, dashboards and AI triage

This task is about **measurement, operational visibility and assistive AI triage only**.

---

## Expected output
Deliver:
1. structured analytics instrumentation
2. event schema discipline across the ecosystem
3. dashboard data layer
4. executive / sales / marketing dashboard implementation or dashboard-ready output
5. AI triage layer for lead summaries and routing recommendations
6. reporting-readiness signals
7. locale-aware analytics support
8. a project ready for the next layer of operating intelligence and automation

---

## Definition of done
This phase is done only if:
- key events are tracked consistently,
- dashboards show useful operating signals,
- lead and pillar performance can be read meaningfully,
- AI triage can summarize and suggest routing for leads,
- the system supports future reporting and automation,
- the ecosystem is now measurable and more operationally intelligent.

---

## Output format
Return:
1. a short summary of what was built
2. the analytics architecture implemented
3. which dashboards or dashboard-ready outputs were added
4. the AI triage capabilities implemented
5. any implementation assumptions
6. remaining limitations or risks
7. what is now ready for the next phase

Now build only **Phase 11 — Analytics, Dashboards & AI Triage**.
