# phase1_review_notes_template.md

## Purpose

This file is a **review template for Phase 1 — Foundation** of the Mula Group repository.

It should be used after Codex or a developer completes the initial foundation setup.

Its purpose is to:
- capture structural issues,
- document architecture observations,
- track cleanup tasks,
- confirm whether the repo is stable enough for Phase 2,
- create a reusable review habit for future phases.

---

# Review metadata

- Review date:
- Reviewer:
- Phase reviewed: Phase 1 — Foundation
- Branch / commit reviewed:
- Reviewed output source:
- Overall status: PASS / PASS WITH FIXES / BLOCKED

---

# 1. Executive summary

## Overall impression
Write a short summary of the current state of Phase 1.

Example prompts:
- Is the foundation structurally strong?
- Does the repo feel scalable?
- Is the architecture clean enough to move forward?
- Are there any major red flags?

### Notes
- 
- 
- 

---

# 2. Repository structure review

## Questions
- Is the top-level structure clean?
- Are folders placed in the right locations?
- Does the repo match `MULAGROUP_REPOSITORY_STRUCTURE.md`?
- Is there any unnecessary clutter or missing structure?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 3. Apps review

## Questions
- Are `apps/portal`, `apps/strategy`, `apps/digital`, `apps/commerce`, `apps/industry`, `apps/projects`, `apps/lifestyle` created properly?
- Are app shells consistent?
- Are apps thin enough?
- Is there duplication between apps?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 4. Shared packages review

## Questions
- Are packages separated cleanly by responsibility?
- Does `packages/ui` work as a real shared layer?
- Are `packages/cms`, `packages/crm`, `packages/analytics`, `packages/ai`, `packages/config`, `packages/utils` structured sensibly?
- Is any app-specific logic leaking into shared packages?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 5. UI system review

## Questions
- Are the base UI primitives well designed?
- Are components reusable and typed?
- Is the styling consistent?
- Does the UI reflect the premium corporate-tech direction?

## Components checked
- Button:
- Container:
- Section:
- HeadingBlock:
- Card:
- Input:
- Textarea:
- Badge:
- Navbar shell:
- Footer shell:

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 6. Design tokens review

## Questions
- Are colors implemented as reusable tokens?
- Are spacing and typography systems structured correctly?
- Are tokens centralized?
- Is there too much hardcoded styling?
- Is the system scalable for future phases?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 7. Config and tooling review

## Questions
- Is TypeScript configured cleanly?
- Is Tailwind configured consistently across apps?
- Is ESLint working properly?
- Is Prettier configured correctly?
- Are aliases and imports maintainable?
- Is env handling prepared sensibly?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 8. Layout and shell consistency review

## Questions
- Do all app shells behave consistently?
- Is the global layout pattern clean?
- Is layout logic duplicated?
- Are shells overbuilt or too thin?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 9. Scalability review

## Questions
- Is the current Phase 1 strong enough for Phase 2?
- Is it ready for future CMS integration?
- Is it ready for future pillar page builds?
- Is it ready for future CRM / analytics / AI layers?
- Is the repo easy for another developer or AI agent to understand?

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 10. Duplication / architecture smell review

## Check for
- duplicated code,
- poor abstractions,
- weak naming,
- bad folder placement,
- too much logic inside apps,
- shared logic not extracted,
- overengineering,
- under-structured areas.

## Findings
### Good
- 
- 

### Issues
- 
- 

### Required fixes
- 
- 

---

# 11. Blocking issues

List any issues that should block moving to Phase 2.

## Blocking issues
- 
- 
- 

## Why they block progress
- 
- 
- 

---

# 12. Non-blocking improvements

List improvements that are useful but do not have to block Phase 2.

## Improvement ideas
- 
- 
- 

---

# 13. Final decision

## Is Phase 1 stable enough for Phase 2?
- Yes
- Yes, after small fixes
- No

## Decision notes
- 
- 
- 

---

# 14. Required actions before Phase 2

## Action list
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

---

# 15. Ready-for-Phase-2 checklist

Before moving into `Phase 2 — Main Portal`, verify:

- [ ] repo structure is clean
- [ ] apps are initialized correctly
- [ ] shared packages are reusable
- [ ] UI primitives are usable
- [ ] design tokens are centralized
- [ ] config layer is coherent
- [ ] app shells are stable
- [ ] no major duplication remains
- [ ] Codex can safely move into homepage implementation

---

# 16. Suggested follow-up prompt for Codex

Use this section to prepare the next correction prompt.

## Follow-up prompt draft
```text
Review the notes in phase1_review_notes.md and apply all required fixes before continuing.

Focus only on:
- structural fixes
- shared package cleanup
- config cleanup
- UI primitive improvements
- layout consistency improvements

Do not begin Phase 2 yet.
```

---

# 17. Optional technical notes

Add any low-level implementation notes here.

## Notes
- 
- 
- 

---

# 18. Reviewer sign-off

- Reviewer:
- Date:
- Final status:
- Approved to continue: yes / no
