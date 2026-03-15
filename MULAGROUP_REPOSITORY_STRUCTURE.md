
# MULAGROUP_REPOSITORY_STRUCTURE.md

## Purpose

This document defines the **recommended repository structure for the Mula Group ecosystem project**.

It organizes all strategic, architectural, and implementation documents created for the platform so that:

- Codex / AI agents can navigate the project easily
- developers can work in a predictable structure
- documentation remains scalable
- the ecosystem can grow without chaos

This structure assumes a **monorepo style architecture** for the full Mula Group platform.

---

# Root Repository Structure

```
/mulagroup
│
├── README.md
├── START_HERE_MULAGROUP.md
├── IMPLEMENTATION_PHASES.md
│
├── docs
│
│   ├── vision
│   │   └── mulagroup_master_vision.md
│   │
│   ├── ecosystem
│   │   └── mulagroup_ecosystem_blueprint.md
│   │
│   ├── brand
│   │   └── mulagroup_brand_strategy.md
│   │
│   ├── design
│   │   ├── mulagroup_design_system_spec.md
│   │   └── mulagroup_content_system.md
│   │
│   ├── architecture
│   │   ├── mulagroup_codex_build_spec.md
│   │   └── mulagroup_operating_system.md
│   │
│   ├── ai
│   │   ├── mulagroup_ai_agents_architecture.md
│   │   └── mulagroup_ai_triage_prompt_library.md
│   │
│   ├── cms
│   │   ├── mulagroup_cms_schema_spec.md
│   │   └── mulagroup_case_study_framework.md
│   │
│   ├── analytics
│   │   ├── mulagroup_analytics_event_map.md
│   │   ├── mulagroup_dashboard_spec.md
│   │   └── mulagroup_reporting_framework.md
│   │
│   └── sales
│       ├── mulagroup_sales_framework.md
│       ├── mulagroup_discovery_framework.md
│       ├── mulagroup_followup_templates.md
│       ├── mulagroup_internal_brief_templates.md
│       ├── mulagroup_offer_templates.md
│       ├── mulagroup_lead_scoring_model.md
│       ├── mulagroup_client_journey_map.md
│       └── mulagroup_retainer_model.md
│
├── blueprints
│   ├── strategy_site_blueprint.md
│   ├── digital_site_blueprint.md
│   ├── commerce_site_blueprint.md
│   ├── industry_site_blueprint.md
│   ├── projects_site_blueprint.md
│   └── lifestyle_site_blueprint.md
│
├── phases
│   ├── Phase 1 — Foundation.md
│   ├── Phase 2 — Main Portal.md
│   ├── Phase 3 — Strategy Pillar.md
│   ├── Phase 4 — Digital Pillar.md
│   ├── Phase 5 — Commerce Pillar.md
│   ├── Phase 6 — Industry Pillar.md
│   ├── Phase 7 — Projects Pillar.md
│   ├── Phase 8 — Lifestyle Pillar.md
│   ├── Phase 9 — CMS & Content Backend.md
│   └── Phase 10 — Sales, CRM & Lead Operations.md
│
├── apps
│   ├── portal
│   │   └── mulagroup.eu
│   │
│   ├── strategy
│   │   └── strategy.mulagroup.eu
│   │
│   ├── digital
│   │   └── digital.mulagroup.eu
│   │
│   ├── commerce
│   │   └── commerce.mulagroup.eu
│   │
│   ├── industry
│   │   └── industry.mulagroup.eu
│   │
│   ├── projects
│   │   └── projects.mulagroup.eu
│   │
│   └── lifestyle
│       └── lifestyle.mulagroup.eu
│
├── packages
│   ├── ui
│   │   └── shared design system components
│   │
│   ├── cms
│   │   └── schema + content layer
│   │
│   ├── analytics
│   │   └── tracking and event layer
│   │
│   ├── crm
│   │   └── lead models and CRM integrations
│   │
│   ├── config
│   │   └── shared configuration and tooling
│   │
│   ├── utils
│   │   └── shared utilities
│   │
│   └── ai
│       └── AI agents and triage logic
│
└── scripts
    └── developer utilities and automation
```

---

# Explanation of Key Folders

## /docs
Strategic and architectural documentation.

## /blueprints
UX and structure definitions for each pillar site.

## /phases
Execution prompts used by Codex to build the platform step by step.

## /apps
Actual websites for each domain and subdomain.

## /packages
Shared internal modules and systems.

## /scripts
Developer utilities and automation scripts.

---

# Codex Workflow

Codex should follow this reading order:

1. START_HERE_MULAGROUP.md  
2. IMPLEMENTATION_PHASES.md  
3. docs/ folder  
4. blueprints/ folder  
5. phases/ execution order  
6. build applications in apps/  
7. reuse logic from packages/

