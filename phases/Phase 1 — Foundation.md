# Phase 1 — Foundation

## Purpose of this file
This document contains the **execution prompt for Codex** for the first implementation phase of the Mula Group ecosystem repository.

It is intended to be used as:
- a direct implementation brief for Codex,
- a technical phase prompt for AI coding agents,
- a repo task definition for the foundation stage,
- a clear instruction set for building the base system before moving into page implementation.

This phase must be completed before the project proceeds to:
- full homepage implementation,
- full pillar site implementation,
- CMS integration,
- CRM / analytics / dashboard layers.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect and implementation engineer.

Your task is to build the **Phase 1 — Foundation** of the Mula Group ecosystem repository.

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

This repository is not a single website.  
It is the technical foundation for a scalable ecosystem of websites, content systems and future operational layers.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `mulagroup_codex_build_spec.md`
4. `mulagroup_design_system_spec.md`
5. `mulagroup_brand_strategy.md`

You may also use supporting context from:
- `mulagroup_content_system.md`
- `mulagroup_ecosystem_blueprint.md`

If any implementation idea conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 1 — FOUNDATION

This phase is about building the technical and visual base.

Do not skip ahead.

---

## Main goal
Create the monorepo foundation for the Mula Group ecosystem, including:
- repo structure
- app structure
- shared packages
- design tokens
- shared UI primitives
- base layouts
- app shell for the main portal
- placeholder shells for pillar apps

The goal is to make the repo stable and ready for Phase 2.

---

## Scope of work
Build the following:

### 1. Monorepo structure
Create a scalable monorepo structure consistent with the project documentation.

Expected top-level structure should include at least:
- `apps/`
- `packages/`
- `docs/`
- `public/`
- `scripts/`

### 2. Apps
Create app shells for:
- `portal`
- `strategy`
- `digital`
- `commerce`
- `industry`
- `projects`
- `lifestyle`

Each app should have:
- working base layout
- placeholder homepage
- shared navigation shell
- shared theme usage
- clear routing foundation

### 3. Shared packages
Create shared packages for:
- `ui`
- `design-system`
- `config`
- `utils`
- optionally `content-models` if helpful at this stage

### 4. Design system foundation
Implement the initial design system layer:
- color tokens
- typography tokens
- spacing tokens
- radius tokens
- breakpoints
- shared Tailwind integration
- shared CSS variables or equivalent token system

### 5. UI primitives
Create initial reusable components, such as:
- Button
- Container
- Section
- Heading block
- Card
- Input
- Textarea
- Label / Badge
- basic navigation shell
- footer shell

These should follow the premium corporate-tech direction from the design spec.

### 6. Base app shell
Implement the base shell for `portal`:
- root layout
- placeholder homepage structure
- placeholder sections or simple content blocks
- clean, premium, minimal structure
- responsive layout

### 7. Pillar app shells
Implement minimal but working shells for the six pillar apps:
- clear page title
- clear pillar placeholder structure
- shared layout
- ready for future Phase 3 page development

### 8. Tooling and standards
Set up:
- TypeScript
- linting
- formatting
- shared config
- consistent import structure
- clean developer experience

---

## Explicit exclusions
Do **not** do the following in this task:

- do not build the full homepage content for `mulagroup.eu`
- do not build full pillar pages
- do not implement CMS
- do not implement CRM
- do not implement forms connected to backend workflows
- do not implement analytics
- do not implement dashboards
- do not implement AI triage
- do not invent a new visual direction outside the design spec
- do not overbuild unnecessary features

This is a foundation task only.

---

## Design direction
Follow the design system documentation closely.

The visual direction must feel like:
- premium
- corporate-tech
- calm
- modern
- high-trust
- modular
- scalable

Avoid:
- flashy startup aesthetics
- noisy gradients everywhere
- random visual experimentation
- over-animated hero concepts
- inconsistent component styling

---

## Architecture rules
You must:
- prefer reusable shared systems over page-specific hacks
- keep components composable and typed
- keep the repo ready for future CMS integration
- keep styling consistent across all apps
- make future pillar development easy
- avoid duplication where shared abstractions are better

---

## Expected output
Deliver a working foundation that includes:

1. monorepo scaffold
2. shared package structure
3. design token implementation
4. reusable UI primitive layer
5. working `portal` shell
6. working pillar app shells
7. clear folder structure
8. code that is clean and extendable

---

## Definition of done
This task is done only if:
- the repo structure is in place
- all apps run
- shared UI can be imported cleanly
- design tokens are wired in
- the main shell looks aligned with the design direction
- pillar shells exist and are ready for later expansion
- the codebase is clearly prepared for Phase 2

---

## Output format
Return:
1. a short summary of what was built
2. the exact folder structure created
3. the most important files added
4. any implementation notes or assumptions
5. what is now ready for Phase 2

Now start building Phase 1 — Foundation only.

---

## Recommended usage note
Before sending this prompt to Codex, add this instruction above it:

**Read the referenced source-of-truth files from the repository first, then execute only Phase 1 — Foundation. Do not go beyond the defined scope.**
