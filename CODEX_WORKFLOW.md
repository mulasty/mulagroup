
# CODEX_WORKFLOW.md

## Purpose

This document defines **how AI coding agents (Codex / GPT / automation agents)** should work inside the Mula Group repository.

The goal is to ensure that:
- AI agents follow the correct architecture
- development happens in the correct order
- the repository stays consistent
- large structural mistakes are avoided

This file acts as the **operational manual for AI developers** working on the Mula Group ecosystem.

---

# Core Principle

AI agents must treat this repository as a **structured ecosystem platform**, not a simple website project.

The system contains:

- strategic documentation
- architecture specifications
- UI blueprints
- phased build instructions
- shared packages
- multiple applications

Agents must **respect the build order** and **not improvise architecture**.

---

# Repository Navigation Order

Every AI agent must read the repository in the following order before writing code.

## Step 1 — Entry Documents

Read first:

```
START_HERE_MULAGROUP.md
IMPLEMENTATION_PHASES.md
```

These files explain:
- the ecosystem
- the development order
- the architectural vision

---

## Step 2 — Architecture and Vision

Read:

```
docs/vision/
docs/ecosystem/
docs/architecture/
docs/design/
```

Important files:

- mulagroup_master_vision.md
- mulagroup_ecosystem_blueprint.md
- mulagroup_codex_build_spec.md
- mulagroup_design_system_spec.md
- mulagroup_content_system.md

These define the **rules of the platform**.

---

## Step 3 — Business Logic

Read:

```
docs/sales/
docs/ai/
docs/cms/
docs/analytics/
```

Important files:

- mulagroup_sales_framework.md
- mulagroup_operating_system.md
- mulagroup_lead_scoring_model.md
- mulagroup_ai_agents_architecture.md
- mulagroup_cms_schema_spec.md

These define **how the business layer works**.

---

## Step 4 — UX Blueprints

Read:

```
/blueprints
```

These files describe the structure of each pillar website.

Examples:

- strategy_site_blueprint.md
- digital_site_blueprint.md
- commerce_site_blueprint.md
- industry_site_blueprint.md
- projects_site_blueprint.md

These files determine:

- page sections
- content flow
- service structures
- CTA logic

AI agents must **not invent different page structures**.

---

## Step 5 — Implementation Phases

Read:

```
/phases
```

These files describe **the exact build order**.

Example sequence:

```
Phase 1 — Foundation
Phase 2 — Main Portal
Phase 3 — Strategy Pillar
Phase 4 — Digital Pillar
Phase 5 — Commerce Pillar
Phase 6 — Industry Pillar
Phase 7 — Projects Pillar
Phase 8 — Lifestyle Pillar
Phase 9 — CMS
Phase 10 — Sales / CRM
Phase 11 — Analytics / AI
```

Agents must **never skip phases**.

---

# Development Rules

## Rule 1 — Never redesign architecture

AI agents must follow:

- design system
- CMS schema
- sales framework
- pillar blueprints

Architecture changes require **explicit human instruction**.

---

## Rule 2 — Prefer modular code

Reusable logic belongs in:

```
/packages
```

Examples:

```
packages/ui
packages/cms
packages/crm
packages/analytics
packages/ai
```

Applications inside `/apps` should stay **thin**.

---

## Rule 3 — Apps represent domains

Applications represent real websites.

```
apps/
   portal
   strategy
   digital
   commerce
   industry
   projects
   lifestyle
```

Agents must avoid merging apps together.

---

## Rule 4 — Design consistency

All apps must follow:

- the design system
- shared UI components
- shared layout structure

Primary UI package:

```
packages/ui
```

---

## Rule 5 — Content is CMS-driven

Content should come from:

```
packages/cms
```

Avoid hardcoding copy inside components.

---

## Rule 6 — Sales flows are structured

Lead handling must follow:

```
mulagroup_sales_framework.md
mulagroup_operating_system.md
```

AI agents must not invent ad-hoc CRM logic.

---

# Code Generation Strategy

When building new features, agents should:

1️⃣ Identify the phase

Example:

```
Phase 4 — Digital Pillar
```

2️⃣ Read relevant blueprint

Example:

```
digital_site_blueprint.md
```

3️⃣ Identify required UI components

4️⃣ Reuse components from:

```
packages/ui
```

5️⃣ Implement page inside:

```
apps/digital
```

---

# Commit Strategy

AI-generated commits should follow a consistent format.

Example:

```
feat(portal): implement hero section

feat(strategy): add services grid

feat(cms): implement service schema

fix(ui): responsive layout fix
```

Recommended prefixes:

```
feat
fix
refactor
docs
chore
```

---

# Testing Expectations

Before finalizing changes, agents should verify:

- layout consistency
- responsive behavior
- build success
- type safety
- no broken imports

---

# Long-Term AI Workflow

In the long term, this repository may contain:

- autonomous development agents
- content generation agents
- analytics agents
- growth automation agents

All agents should treat this file as the **primary workflow specification**.

---

# Summary

AI agents must:

1. Read documentation first
2. Follow the phase system
3. Respect architecture
4. Build modular code
5. Maintain design consistency
6. Preserve CMS-driven content
7. Follow the sales framework
8. Avoid improvising system structure

