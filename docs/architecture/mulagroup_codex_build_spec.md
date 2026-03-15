
# Mula Group — Codex Build Spec

## Cel dokumentu
Ten dokument definiuje **techniczną specyfikację wdrożeniową** dla Codexa i innych agentów AI/developerów budujących ekosystem Mula Group.

Ma służyć jako źródło prawdy dla:
- architektury projektu,
- stosu technologicznego,
- organizacji repozytorium,
- struktury aplikacji i subdomen,
- design systemu,
- komponentów,
- routingu,
- modelu treści,
- SEO,
- performance,
- accessibility,
- formularzy,
- integracji automatyzacji,
- standardów kodu i wdrożenia.

Dokument zakłada, że projekt ma być:
- skalowalny,
- modularny,
- premium jakościowo,
- gotowy do rozwoju wielu subdomen,
- spójny wizualnie i technologicznie,
- przygotowany pod AI-assisted development.

---

# 1. Główne założenie techniczne

## 1.1 Typ projektu
Projekt ma być budowany jako **wielomodułowy ekosystem stron** dla Mula Group z jedną domeną główną i zestawem subdomen filarowych.

### Główna domena
- `mulagroup.eu`

### Subdomeny filarów
- `strategy.mulagroup.eu`
- `digital.mulagroup.eu`
- `commerce.mulagroup.eu`
- `industry.mulagroup.eu`
- `projects.mulagroup.eu`
- `lifestyle.mulagroup.eu`

---

## 1.2 Założenie architektoniczne
Projekt powinien być rozwijany jako:
- **monorepo**
- z współdzielonym design systemem
- z współdzielonymi komponentami UI
- z możliwością rozwijania niezależnych aplikacji / stron dla filarów
- z centralnym modelem contentu i konfiguracji

---

# 2. Recommended stack

## 2.1 Frontend
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

---

## 2.2 Content / CMS
Rekomendowana opcja:
- **Sanity** lub **Strapi**

Alternatywy:
- Contentful
- headless CMS własny
- markdown + JSON na start

---

## 2.3 Backend / Integracje
- Next.js Route Handlers / API routes
- server actions tam, gdzie to ma sens
- webhooks
- integracje z n8n
- integracje CRM
- integracje AI API

---

## 2.4 Hosting / Infra
- **Vercel**
- edge CDN
- env vars per environment
- preview deployments
- production domains + subdomains

---

## 2.5 Analytics / Tracking
Minimalny zestaw:
- Google Analytics / GA4 lub alternatywa privacy-first
- Meta Pixel opcjonalnie
- event tracking dla leadów
- formularz conversions tracking
- scroll / CTA engagement tracking

---

# 3. Repo architecture

## 3.1 Monorepo structure
Rekomendowana struktura:

```text
/mulagroup-platform
│
├── apps
│   ├── portal
│   ├── strategy
│   ├── digital
│   ├── commerce
│   ├── industry
│   ├── projects
│   └── lifestyle
│
├── packages
│   ├── ui
│   ├── design-system
│   ├── content-models
│   ├── config
│   ├── seo
│   ├── forms
│   ├── analytics
│   ├── lib
│   └── utils
│
├── docs
│   ├── mulagroup_ecosystem_blueprint.md
│   ├── mulagroup_brand_strategy.md
│   ├── mulagroup_content_system.md
│   ├── mulagroup_design_system_spec.md
│   ├── mulagroup_sales_framework.md
│   └── pillar_blueprints/
│
├── public
│   ├── shared
│   └── brand
│
├── scripts
│
├── .env.example
├── package.json
├── turbo.json
├── tsconfig.json
└── README.md
```

---

## 3.2 Tooling
Rekomendowane:
- **pnpm**
- **Turborepo**
- **ESLint**
- **Prettier**
- **TypeScript strict mode**

---

# 4. Application model

## 4.1 apps/portal
Rola:
- portal główny grupy
- strona corporate
- wejście do ekosystemu
- mapa filarów
- partnership / contact hub

---

## 4.2 apps/strategy
Rola:
- landing / site dla filaru Strategy
- lead capture
- oferta strategiczna
- routing do dalszych filarów

---

## 4.3 apps/digital
Rola:
- oferta digital, AI i automatyzacji
- case-oriented digital system
- lead capture + routing

---

## 4.4 apps/commerce
Rola:
- oferta kanałów sprzedaży, marketplace, dystrybucji
- lead capture + routing

---

## 4.5 apps/industry
Rola:
- oferta techniczna i operacyjna
- lead capture + routing

---

## 4.6 apps/projects
Rola:
- oferta projektów premium, investment concepts, wellness/resort
- lead capture + routing

---

## 4.7 apps/lifestyle
Rola:
- oferta experience-led i premium ventures
- lead capture + routing

---

# 5. Routing principles

## 5.1 Main portal routing
Przykładowe ścieżki dla `portal`:
- `/`
- `/about`
- `/ecosystem`
- `/capabilities`
- `/partnerships`
- `/contact`

---

## 5.2 Pillar sites routing
Każdy filar może mieć uproszczony model:
- `/`
- `/services`
- `/process`
- `/contact`
- `/faq`

Opcjonalnie:
- `/cases`
- `/articles`
- `/offer-formats`

---

## 5.3 Routing rules
1. Routing ma być prosty i semantyczny.
2. URL-e mają być krótkie i czytelne.
3. Każda aplikacja ma mieć ten sam podstawowy schemat nawigacji.
4. Unikać głębokich, zbędnych struktur adresów na starcie.

---

# 6. Design system implementation

## 6.1 Source of truth
Źródłem prawdy dla design systemu jest:
- `mulagroup_design_system_spec.md`
- package `packages/design-system`
- wspólne tokeny i komponenty w `packages/ui`

---

## 6.2 Tokens
Wdrożyć jako:
- CSS variables
- Tailwind theme tokens
- TypeScript config exports

### Token groups
- colors
- spacing
- typography
- radii
- shadows
- motion timings
- breakpoints

---

## 6.3 Shared UI components
Komponenty mają być rozwijane jako reusable i exported z `packages/ui`.

Minimalny zestaw:
- Button
- Container
- Section
- Heading block
- Card
- Pillar card
- CTA block
- Form field
- Input
- Textarea
- Select
- Badge / label
- Navigation
- Footer
- Process steps
- FAQ accordion
- Hero layout
- Grid primitives

---

## 6.4 Styling rules
1. Nie używać inline chaosu do stylowania, jeśli można użyć reusable patterns.
2. Wspólne utility variants dla buttonów, cards i sections.
3. Każda appka korzysta z tego samego design systemu.
4. Różnice między filarami mają wynikać głównie z treści i subtelnych akcentów, nie z innego UI frameworku.

---

# 7. Content architecture

## 7.1 Content sources
Na start możliwe 2 tryby:
### Tryb A — static content
- markdown / JSON / TypeScript objects

### Tryb B — CMS-driven
- Sanity / Strapi

Rekomendacja:
zacząć od **hybrydy**:
- dane core pages w plikach lokalnych
- przygotowanie warstwy pod późniejsze CMS

---

## 7.2 Content types
Wdrożyć modele treści dla:
- Page
- Hero block
- Section block
- Pillar
- Service
- Offer format
- FAQ item
- CTA block
- Contact form config
- SEO metadata
- Case study
- Testimonial / trust item
- Navigation config
- Footer config

---

## 7.3 Suggested data folder structure
```text
/apps/portal/data
/apps/strategy/data
/apps/digital/data
/apps/commerce/data
/apps/industry/data
/apps/projects/data
/apps/lifestyle/data
```

lub wspólny model:
```text
/packages/content-models
/content
```

---

## 7.4 Recommended page content model
Przykład:
```ts
type PageModel = {
  slug: string;
  seo: SeoModel;
  hero: HeroModel;
  sections: SectionModel[];
  cta?: CtaModel;
  faq?: FaqItem[];
};
```

---

# 8. SEO implementation spec

## 8.1 Global SEO goals
Projekt ma być:
- semantyczny,
- szybki,
- indexable,
- dobrze opisany meta-danymi,
- gotowy pod SEO subdomen.

---

## 8.2 Page-level SEO
Każda strona powinna mieć:
- title
- meta description
- og:title
- og:description
- og:image
- canonical
- robots directives jeśli potrzebne
- structured data jeśli pasuje

---

## 8.3 Structured data
Wdrożyć podstawowo:
- Organization
- WebSite
- BreadcrumbList (gdy potrzebne)
- FAQPage (dla sekcji FAQ)
- Service (na stronach filarów tam, gdzie sensowne)

---

## 8.4 Technical SEO rules
1. Jeden H1 na stronę.
2. Poprawna hierarchia H2/H3.
3. SSR/SSG tam, gdzie ma sens.
4. Optymalizacja obrazów przez `next/image`.
5. Dobre slugi i canonicale.
6. Sitemap generation.
7. robots.txt.
8. Open Graph per page.

---

# 9. Performance rules

## 9.1 Performance goals
Cel:
- szybki first load
- lekkie strony marketingowe
- ograniczenie zbędnego JS
- dobre Core Web Vitals

---

## 9.2 Guidelines
1. Preferować statyczne strony tam, gdzie możliwe.
2. Lazy-load cięższe obrazy i komponenty.
3. Ograniczać ilość animacji JS.
4. Używać nowoczesnych formatów obrazów.
5. Ograniczać duplikację kodu między appkami.
6. Dbać o code splitting.
7. Trzymać hero sections lekkie.

---

## 9.3 No-go
- ciężkie video backgroundy bez potrzeby
- zbyt dużo client-side rendering
- za duże biblioteki UI jeśli nie są konieczne
- zbyt ciężkie animacje w hero

---

# 10. Accessibility rules

## 10.1 Minimum accessibility standard
Każda strona ma być:
- czytelna,
- dostępna z klawiatury,
- poprawnie semantyczna,
- kontrastowa,
- z focus states.

---

## 10.2 Required practices
- semantic HTML
- proper label + input binding
- keyboard accessible nav
- visible focus ring
- reduced motion support
- alt text for images
- aria only where needed, not as decoration

---

# 11. Forms architecture

## 11.1 Form philosophy
Formularze mają być:
- proste,
- premium,
- niskotarciowe,
- dobrze opisane,
- łatwe do zintegrowania z CRM i automatyzacją.

---

## 11.2 Shared form components
W `packages/forms` lub `packages/ui/forms`:
- TextInput
- SelectInput
- TextareaInput
- Checkbox
- SubmitButton
- SuccessState
- ErrorState

---

## 11.3 Form handling
Rekomendacja:
- React Hook Form + Zod
- server action lub API route submit
- webhook integration do n8n / CRM
- analytics event on submit

---

## 11.4 Standard fields
Wspólne field sets powinny dać się konfigurować per pillar.

Przykład:
```ts
type InquiryType =
  | "business-development"
  | "strategy"
  | "digital"
  | "commerce"
  | "industry"
  | "projects"
  | "lifestyle"
  | "partnership";
```

---

## 11.5 Form output schema
Przykład:
```ts
type LeadSubmission = {
  source: string;
  pillar: string;
  name: string;
  company?: string;
  email: string;
  inquiryType: string;
  message: string;
  meta?: {
    utmSource?: string;
    utmCampaign?: string;
    landingPage?: string;
  };
};
```

---

# 12. Lead routing / CRM integration

## 12.1 Integration model
Website form
→ validation
→ webhook/API
→ n8n / automation layer
→ CRM / Airtable / Notion / custom DB
→ AI triage optional
→ internal notification

---

## 12.2 CRM fields
Powinny obejmować:
- primary pillar
- secondary pillars
- lead source
- page source
- inquiry type
- short summary
- routing recommendation
- status / stage

---

## 12.3 AI support
Możliwy moduł AI:
- streszczenie wiadomości
- lead classification
- پیشنهاد najlepszego next step
- wykrycie cross-sell opportunity
- wygenerowanie roboczego briefu

---

# 13. Analytics spec

## 13.1 Events to track
- page view
- CTA click
- pillar click
- ecosystem map interaction
- form start
- form submit
- outbound click
- scroll milestone

---

## 13.2 Naming conventions
Przykład:
- `cta_click`
- `pillar_card_click`
- `form_submit`
- `consultation_request`
- `ecosystem_interaction`

---

## 13.3 Data attributes
Dodawać `data-*` markers do kluczowych elementów CTA dla łatwiejszego trackingu.

---

# 14. Component architecture

## 14.1 Preferred component layers
### Layer 1 — primitives
- Button
- Input
- Container
- Grid
- Surface
- Text

### Layer 2 — shared composites
- Hero
- Section intro
- Card grids
- CTA strip
- FAQ block
- Contact form
- Process timeline

### Layer 3 — page assemblies
- homepage sections
- pillar page sections
- complex layouts

---

## 14.2 Component rules
1. Components muszą być typed.
2. Components muszą być reusable.
3. Unikać szycia każdej sekcji od zera.
4. Props API ma być proste.
5. Content ma być przekazywany danymi, nie twardo zaszyty wszędzie.

---

# 15. Naming conventions

## 15.1 Files
- `HeroSection.tsx`
- `PillarCard.tsx`
- `ProcessTimeline.tsx`
- `FaqAccordion.tsx`

## 15.2 Data files
- `homepage.content.ts`
- `strategy.page.content.ts`
- `digital.services.content.ts`

## 15.3 Route folders
- `app/(marketing)/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`

---

# 16. Code quality rules

## 16.1 General
- TypeScript strict
- no any unless justified
- reusable utilities
- small composable components
- clear prop naming
- good comments only where helpful

---

## 16.2 Avoid
- giant components
- deeply nested conditionals
- duplicated section markup
- inline hardcoded content everywhere
- inconsistent utility usage

---

## 16.3 Recommended patterns
- config-driven sections
- shared component variants
- schema validation
- content abstraction
- isolated animation wrappers

---

# 17. Motion implementation

## 17.1 Library
- Framer Motion

## 17.2 Rules
1. Motion ma być subtelny.
2. Shared motion presets w jednym miejscu.
3. Respect `prefers-reduced-motion`.
4. Avoid heavy timeline complexity unless truly needed.

---

## 17.3 Suggested motion utilities
- fadeUp
- staggerChildren
- cardHoverLift
- lineReveal
- opacityIn

---

# 18. Asset management

## 18.1 Images
Przechowywać:
- shared brand images
- pillar-specific visuals
- og-images
- icons / patterns

Struktura:
```text
/public/brand
/public/shared
/public/pillars/strategy
/public/pillars/digital
...
```

---

## 18.2 Naming
- `og-main.jpg`
- `hero-strategy.webp`
- `pillar-digital-card.webp`

---

## 18.3 Optimization
- webp/avif where possible
- no oversized raw files
- define aspect ratio intentionally
- alt texts required

---

# 19. Environment variables

## Minimal env list
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ANALYTICS_ID`
- `FORM_WEBHOOK_URL`
- `CRM_WEBHOOK_URL`
- `OPENAI_API_KEY` (if needed for server-side AI)
- `CMS_PROJECT_ID`
- `CMS_DATASET`
- `CMS_TOKEN`

---

# 20. Deployment model

## 20.1 Environments
- local
- preview
- production

## 20.2 Production domains
- mulagroup.eu
- strategy.mulagroup.eu
- digital.mulagroup.eu
- commerce.mulagroup.eu
- industry.mulagroup.eu
- projects.mulagroup.eu
- lifestyle.mulagroup.eu

## 20.3 Recommended
- separate deploy targets per app
- shared packages built centrally
- preview PR deployments

---

# 21. Suggested implementation phases

## Phase 1 — Core foundation
- monorepo setup
- design system package
- shared UI package
- main portal app
- basic content structure
- contact form architecture

---

## Phase 2 — Pillar rollout
- strategy app
- digital app
- commerce app
- industry app
- projects app
- lifestyle app

---

## Phase 3 — Operational intelligence
- CRM integration
- analytics
- AI lead routing
- automation workflows
- reusable offer/contact logic

---

## Phase 4 — Content maturity
- FAQ expansion
- case studies
- blog / insights
- downloadable documents
- stronger SEO content

---

# 22. Codex execution instructions

## 22.1 How Codex should work
Codex should:
1. Read brand, content and design docs first.
2. Build the design system before building pages.
3. Build reusable shared components before page-specific sections.
4. Keep the system modular.
5. Avoid improvising random UI patterns.
6. Use content-driven architecture.
7. Keep premium corporate-tech design discipline.
8. Validate that each page is aligned with its blueprint.

---

## 22.2 Required source documents for Codex
Before implementation, Codex should treat these files as knowledge base:
- `mulagroup_ecosystem_blueprint.md`
- `mulagroup_brand_strategy.md`
- `mulagroup_content_system.md`
- `mulagroup_design_system_spec.md`
- `mulagroup_sales_framework.md`
- `strategy_site_blueprint.md`
- `digital_site_blueprint.md`
- `commerce_site_blueprint.md`
- `industry_site_blueprint.md`
- `projects_site_blueprint.md`
- `lifestyle_site_blueprint.md`

---

## 22.3 Codex no-go rules
Codex should not:
- redesign the brand direction on its own
- introduce flashy startup UI patterns
- mix unrelated styles between apps
- hardcode everything without shared abstractions
- ignore accessibility and SEO
- build each subdomain as a totally separate inconsistent project

---

# 23. Recommended deliverables from Codex

## Stage 1 deliverables
- repo scaffold
- design tokens
- reusable UI primitives
- global layout
- homepage for mulagroup.eu

## Stage 2 deliverables
- 6 pillar homepage builds
- shared forms
- SEO metadata per pillar
- analytics events

## Stage 3 deliverables
- CMS integration
- automation hooks
- AI triage support
- case study templates

---

# 24. Final implementation principles

1. Build one ecosystem, not seven unrelated websites.
2. Make content modular and maintainable.
3. Treat design system as critical infrastructure.
4. Keep the UI premium, calm and highly readable.
5. Build for future scale from day one.
6. Let forms and lead routing support the sales framework.
7. Make the system easy for AI agents and humans to extend.
8. Every technical decision should reinforce brand clarity, business trust and long-term scalability.

---

# 25. Next recommended files

Possible next documents:
- `mulagroup_operating_system.md`
- `mulagroup_case_study_framework.md`
- `mulagroup_lead_scoring_model.md`
- `mulagroup_offer_templates.md`
- `mulagroup_cms_schema_spec.md`

