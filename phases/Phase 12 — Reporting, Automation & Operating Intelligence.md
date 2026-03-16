# Phase 12 — Reporting, Automation & Operating Intelligence

## Purpose of this file
This document contains the **execution prompt for Codex** for the next implementation phase of the Mula Group ecosystem repository, focused on reporting, automation and operating intelligence.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for automation and intelligence systems,
- a structured task definition for turning analytics and AI-assisted triage into repeatable operating workflows,
- the bridge between measurable systems and a truly intelligence-supported operating model.

This phase should begin only after:
- **Phase 11 — Analytics, Dashboards & AI Triage** is stable,
- the ecosystem is already measurable,
- dashboards are already usable,
- AI triage is already functioning as a structured assistive layer.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, automation systems engineer and operating intelligence implementation specialist.

Your task is to build **Phase 12 — Reporting, Automation & Operating Intelligence** for the Mula Group ecosystem repository.

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
- content is structured,
- sales and CRM logic exist,
- localization exists,
- pillar truth-alignment exists,
- analytics exists,
- dashboards exist,
- AI triage exists.

Now the next step is to make the ecosystem:
- rhythm-aware,
- report-ready,
- automation-capable,
- signal-driven,
- operationally intelligent.

This phase is about turning data, dashboards and AI outputs into **repeatable decision workflows**.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `CODEX_WORKFLOW.md`
4. `docs/analytics/mulagroup_reporting_framework.md`
5. `docs/analytics/mulagroup_dashboard_spec.md`
6. `docs/analytics/mulagroup_analytics_event_map.md`
7. `docs/ai/mulagroup_ai_triage_prompt_library.md`
8. `docs/architecture/mulagroup_operating_system.md`
9. `docs/sales/mulagroup_sales_framework.md`
10. `docs/sales/mulagroup_followup_templates.md`
11. `docs/sales/mulagroup_internal_brief_templates.md`
12. the implemented output of Phases 1-11

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 12 — REPORTING, AUTOMATION & OPERATING INTELLIGENCE

Do not skip ahead into client portals, partner portals or later maturity-scale systems.

---

## Main goal
Implement the reporting, automation and operating intelligence layer so that the Mula Group ecosystem becomes:

- rhythm-driven,
- more autonomous operationally,
- better at surfacing priorities,
- better at alerting weak signals,
- better at supporting daily / weekly / monthly decision-making.

The result must ensure that:
- reporting is structured,
- operating signals are surfaced regularly,
- automation reduces repetitive work,
- AI outputs become part of a usable operating workflow.

---

## Scope of work
Build the following:

### 1. Reporting pipeline layer
Implement the base reporting pipeline so the ecosystem can generate:
- weekly operating summaries
- monthly performance summaries
- quarterly strategic review inputs

Use the reporting framework as the source of truth.

The system should be able to pull from:
- analytics
- dashboards
- CRM / lead data
- AI triage summaries
- pillar performance signals

The result should be structured and reusable.

---

### 2. Weekly operating summary layer
Implement a workflow or structured output generator for weekly operating review.

At minimum it should include:
- new leads
- qualified leads
- proposals / commercial movement if available
- active-project indicators if available
- pillar performance snapshot
- blockers / risks
- next-week priorities

This should not be a raw data dump.
It should be readable and operationally useful.

---

### 3. Monthly performance summary layer
Implement a workflow or structured output generator for monthly performance review.

At minimum it should include:
- pillar-level performance
- lead quality patterns
- marketing / website signals
- CRM / sales movement
- expansion / repeat-client signals if available
- weak signals / concerns
- recommended next month priorities

This should support real business review, not vanity reporting.

---

### 4. Quarterly strategic review readiness
Implement the structured data and narrative preparation layer for quarterly review.

At minimum prepare:
- trend comparisons
- strongest / weakest pillar signals
- major shifts in lead or conversion quality
- strategic concerns
- strategic opportunities
- next-quarter decision support

Do not overbuild full executive deck generation yet unless cleanly useful.

---

### 5. AI-assisted reporting summaries
Extend the AI layer so it can help transform:
- dashboards
- analytics
- lead signals
- CRM data

into short operating summaries.

This should support:
- weekly summary drafts
- monthly executive summary drafts
- anomaly / risk notes
- opportunity notes

The AI must remain assistive, structured and transparent about uncertainty.

---

### 6. Lead follow-up automation readiness
Implement automation support for lead follow-up workflows.

At minimum support:
- follow-up due date tracking
- stale lead detection
- high-priority lead reminders
- discovery follow-up readiness
- offer follow-up readiness

This does not need to send uncontrolled outbound messages yet, but must create the logic and signals necessary for later automation.

---

### 7. Alert and operating signal system
Implement a stronger signal layer for things like:
- stale qualified lead
- repeated unclear inquiry pattern
- weak-performing CTA
- strong pillar traffic with weak conversions
- follow-up backlog
- unusual lead source shifts
- strong multi-pillar opportunity cluster

These alerts should be structured by level, for example:
- info
- warning
- critical

Avoid noisy alert spam.

---

### 8. Automation hooks and workflow endpoints
Implement or prepare hooks that let the system later connect to:
- email workflows
- CRM workflow engines
- notifications
- task creation
- internal alerts
- ops dashboards

This can include:
- queue-like outputs
- webhook-ready automation payloads
- reusable automation adapters
- structured internal actions

Do not overbuild a giant automation platform if it is not needed yet.

---

### 9. Operating intelligence layer
Implement an operating intelligence layer that combines:
- analytics signals
- CRM signals
- dashboard signals
- AI triage outputs
- reporting summaries

into more usable decision-support outputs.

At minimum it should help answer:
- what needs attention this week?
- which pillar is strongest / weakest?
- where is the biggest opportunity?
- which leads need fast review?
- where is conversion dropping?
- where is human action needed most?

---

### 10. CRM + reporting integration
Ensure CRM-stage and lead-state data can feed reporting and operating intelligence.

Support visibility into:
- lead stages
- stale leads
- follow-up status
- inquiry distribution
- pillar load
- escalation indicators

Do not create brittle one-off reporting logic disconnected from the actual CRM model.

---

### 11. Locale-aware operating intelligence
Ensure reporting and automation logic can account for:
- Polish vs English traffic / lead behavior
- localized page performance
- localized CTA performance
- differences in PL vs EN form conversion where relevant

The operating system must remain language-aware once the project is bilingual.

---

### 12. Human-in-the-loop safety
Ensure automation and intelligence remain human-aware.

At this phase:
- AI can suggest,
- automation can prepare,
- alerts can escalate,

but final commercial and strategic decisions should still remain reviewable by a human.

Do not build uncontrolled autopilot behavior.

---

## Architecture rules
You must:
- align all work with the reporting framework,
- preserve clean signal/data structures,
- keep automation logic modular,
- keep reporting outputs structured and reusable,
- avoid hardcoding one-off reports,
- preserve future extensibility for deeper workflow automation,
- keep AI outputs interpretable and reviewable.

---

## UX / product rules
This phase must improve:
- operating rhythm,
- reporting clarity,
- follow-up discipline,
- alert visibility,
- decision quality,
- efficiency of sales and operational review.

It must not create:
- noisy automation,
- unreadable reports,
- overcomplicated signal systems,
- AI that behaves like an unreviewed autopilot,
- dashboards disconnected from action.

---

## Explicit exclusions
Do **not** do the following in this task:

- do not redesign site pages
- do not build partner portals
- do not build client portals
- do not create fully autonomous outbound sales systems
- do not create overengineered enterprise BI complexity without practical value
- do not skip human review for high-stakes decisions

This task is about **reporting, automation readiness and operating intelligence only**.

---

## Expected output
Deliver:
1. reporting pipeline layer
2. weekly / monthly / quarterly structured summary support
3. AI-assisted reporting summaries
4. alert and signal system
5. automation-ready hooks / workflow outputs
6. operating intelligence layer
7. locale-aware reporting support
8. a project ready for the next maturity-scale phase

---

## Definition of done
This phase is done only if:
- reporting can be generated in a structured way,
- weekly and monthly operating summaries are realistic,
- alerts surface useful action signals,
- follow-up and ops automation readiness exists,
- AI summaries support decision-making,
- operating intelligence is materially stronger than in Phase 11,
- the ecosystem is now ready for the next growth / trust / scale layer.

---

## Output format
Return:
1. a short summary of what was built
2. the reporting architecture implemented
3. which automation / signal systems were added
4. how AI-assisted reporting was extended
5. any implementation assumptions
6. remaining limitations or risks
7. what is now ready for the next phase

Now build only **Phase 12 — Reporting, Automation & Operating Intelligence**.
