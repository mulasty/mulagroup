# Phase 2 — Main Portal

## Purpose of this file
This document contains the **execution prompt for Codex** for the second implementation phase of the Mula Group ecosystem repository.

It is intended to be used as:
- a direct implementation brief for Codex,
- a phase-specific execution prompt for AI coding agents,
- a structured task definition for building the main Mula Group portal,
- the transition layer between technical foundation and real branded experience.

This phase should begin only after **Phase 1 — Foundation** is stable enough.

---

# Codex Execution Prompt

You are acting as a senior full-stack architect, UI engineer and implementation specialist.

Your task is to build **Phase 2 — Main Portal** for the Mula Group ecosystem repository.

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

The main portal is not a services landing page.
It is the **ecosystem headquarters**:
- the brand entry point,
- the trust layer,
- the explanation layer,
- the pillar navigation layer,
- the first conversion layer.

---

## Mandatory source-of-truth files
Treat the following files as binding project documentation:

1. `START_HERE_MULAGROUP.md`
2. `IMPLEMENTATION_PHASES.md`
3. `mulagroup_ecosystem_blueprint.md`
4. `mulagroup_brand_strategy.md`
5. `mulagroup_content_system.md`
6. `mulagroup_design_system_spec.md`
7. `mulagroup_codex_build_spec.md`

You may also use:
- `mulagroup_master_vision.md`
- `mulagroup_cms_schema_spec.md`

If any implementation detail conflicts with the source-of-truth files, follow the source-of-truth files.

---

## Current implementation phase
You are working only on:

# PHASE 2 — MAIN PORTAL

This phase is about building the branded homepage and portal logic for `mulagroup.eu`.

Do not skip ahead into later systems.

---

## Main goal
Build the main portal for `mulagroup.eu` using the already-created foundation.

The page should:
- communicate what Mula Group is,
- explain the ecosystem,
- present the six pillars,
- show the operating model,
- introduce capabilities and partnership logic,
- create a premium first impression,
- guide users toward the right next step.

The result should feel like a **calm, premium corporate-tech ecosystem portal**.

---

## Scope of work
Build the main portal homepage with the following sections:

### 1. Header / navigation
Create a clean, premium global header with:
- About
- Ecosystem
- Capabilities
- Partnerships
- Contact

Include one primary CTA:
- `Partner with us`
or equivalent aligned with the content system.

The header should work well on desktop and mobile.

---

### 2. Hero section
Build a strong but calm hero section that communicates:
- Mula Group as an integrated business ecosystem,
- the connection between strategy, technology and execution,
- a premium corporate-tech identity.

Include:
- eyebrow/label
- headline
- subheadline
- 1–2 CTAs
- visual support aligned with the design system

Do not make the hero flashy or startup-like.

---

### 3. About / intro section
Create a section explaining:
- what Mula Group is,
- why it is not a single-service company,
- why integration matters,
- why the ecosystem model exists.

The section should be elegant, structured and easy to understand.

---

### 4. Ecosystem pillars section
Build a premium grid for the six pillars:
- Strategy
- Digital
- Commerce
- Industry
- Projects
- Lifestyle

Each pillar card should include:
- name
- short description
- optional capability hints
- CTA or link target

This section must make the ecosystem easy to understand and explore.

---

### 5. Operating model section
Build a section that explains how Mula Group works.

Use a clear structure such as:
- Discover
- Design
- Integrate
- Execute
- Scale

This section should communicate process clarity and strategic maturity.

---

### 6. Capabilities section
Build a section showing integrated capabilities across the ecosystem.

This is not a giant service dump.
It should show how Mula Group connects:
- strategy
- digital systems
- AI
- commerce
- operations
- project logic
- premium development

This section should reinforce systemic value.

---

### 7. Partnerships / collaboration section
Build a section showing how people can work with Mula Group:
- business solutions
- project development
- partnership models
- ecosystem collaboration

The section should support trust and serious business positioning.

---

### 8. Contact / final CTA section
Build a strong but simple final CTA section that invites:
- conversation
- inquiry
- project discussion
- partnership contact

Include:
- clear title
- short supporting copy
- CTA or contact path

If a form already exists from Phase 1 shell logic, use a placeholder or basic structure only.
Do not build full CRM workflows yet.

---

### 9. Footer
Create a clean footer aligned with the brand and design system.

Include:
- short brand description
- key links
- contact block
- legal placeholders if needed

---

## Content implementation rules
Use the content system documentation as the primary guide for:
- headlines
- subheadlines
- CTA language
- tone of voice
- section logic

Do not improvise random messaging.

---

## Design direction
The portal must feel:
- premium
- structured
- calm
- strategic
- corporate-tech
- elegant
- high-trust

Avoid:
- flashy agency vibes
- chaotic gradients
- overloaded section density
- overly cinematic effects
- startup landing-page clichés

Use strong whitespace, controlled hierarchy and subtle motion only if appropriate.

---

## UX rules
The homepage must help users quickly understand:
1. what Mula Group is
2. why the ecosystem matters
3. what the six pillars are
4. how Mula Group works
5. where to go next

The user should not feel overwhelmed.

---

## Architecture rules
You must:
- reuse Phase 1 shared components
- keep sections modular
- avoid hardcoding one-off messy structures
- keep the page ready for future CMS integration
- maintain design consistency with future pillar sites

---

## Explicit exclusions
Do **not** do the following in this task:

- do not build all pillar sites
- do not build deep services pages
- do not implement full CMS
- do not implement CRM workflows
- do not implement advanced forms backend
- do not implement dashboards
- do not implement analytics event layer in full
- do not implement AI triage
- do not add article systems, case study engines or client portals yet

This task is about the main portal homepage only.

---

## Expected output
Deliver:
1. a complete homepage for `mulagroup.eu`
2. reusable homepage sections
3. polished responsive layout
4. premium visual hierarchy
5. portal-ready navigation and CTA logic
6. code prepared for future CMS and Phase 3 extension

---

## Definition of done
This phase is done only if:
- the homepage clearly communicates the ecosystem
- the user understands the six pillars
- the design feels premium and stable
- the main CTA logic is clear
- all sections are responsive and aligned
- the page feels like the real HQ of the Mula Group ecosystem
- the code is modular enough to support later content and pillar rollout

---

## Output format
Return:
1. a short summary of what was built
2. the homepage structure implemented
3. the main reusable sections created
4. any implementation assumptions
5. what is now ready for Phase 3

Now build only **Phase 2 — Main Portal**.

---

## Recommended usage note
Before sending this prompt to Codex, add this instruction above it:

**Read the Phase 1 output and the referenced source-of-truth files first. Build only the main portal homepage for `mulagroup.eu`. Do not expand into pillar sites or later systems yet.**
