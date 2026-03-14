
# Mula Group — CMS Schema Spec

## Cel dokumentu
Ten dokument definiuje **specyfikację schematów CMS** dla ekosystemu Mula Group.

Ma służyć jako baza dla:
- wdrożenia headless CMS,
- modelowania treści dla strony głównej i subdomen,
- integracji z frontendem Next.js,
- pracy Codexa i developerów,
- zachowania spójności contentu,
- skalowania ekosystemu o nowe filary, case studies, FAQ i zasoby.

Dokument porządkuje:
- architekturę treści,
- modele content types,
- relacje między modelami,
- pola wymagane i opcjonalne,
- logikę SEO,
- logikę CTA,
- model formularzy,
- struktury dla case studies, FAQ i insightów.

---

# 1. Główne założenie CMS

## 1.1 Rola CMS
CMS ma być:
- źródłem treści dla `mulagroup.eu`,
- źródłem treści dla wszystkich subdomen filarów,
- systemem łatwym do rozszerzania,
- wspólną warstwą danych dla zespołu i AI,
- gotowym na wielojęzyczność w przyszłości.

---

## 1.2 Co CMS powinien obsługiwać
- strony główne i podstrony,
- sekcje hero,
- bloki sekcyjne,
- filary,
- usługi,
- formaty ofert,
- FAQ,
- CTA,
- formularze,
- case studies,
- insight articles,
- SEO metadata,
- global navigation,
- footer,
- dane kontaktowe i routing leadów.

---

## 1.3 Recommended CMS
Preferowana opcja:
- **Sanity**

Alternatywy:
- Strapi
- Contentful
- własny content layer oparty na JSON/MD jako etap przejściowy

---

# 2. Content architecture overview

## 2.1 Główne domeny treści
Treści można podzielić na 6 obszarów:

1. **Global content**
2. **Page content**
3. **Pillar content**
4. **Sales and conversion content**
5. **Trust and knowledge content**
6. **Operational / integration content**

---

## 2.2 Content hierarchy
Hierarchia powinna wyglądać tak:

```text
Site
├── Global Settings
├── Navigation
├── Footer
├── Pages
│   ├── Homepage
│   ├── About
│   ├── Contact
│   └── Pillar Pages
├── Pillars
│   ├── Strategy
│   ├── Digital
│   ├── Commerce
│   ├── Industry
│   ├── Projects
│   └── Lifestyle
├── Services
├── Offer Formats
├── CTA Blocks
├── FAQ Items
├── Case Studies
├── Articles / Insights
└── Forms
```

---

# 3. Core content types

## 3.1 SiteSettings
Globalne ustawienia całego ekosystemu.

### Fields
- `siteName` (string, required)
- `siteTagline` (string)
- `defaultLanguage` (string, required)
- `defaultSeoTitle` (string)
- `defaultSeoDescription` (text)
- `defaultOgImage` (image)
- `contactEmail` (string)
- `contactPhone` (string)
- `address` (text)
- `socialLinks` (array of objects)
- `analyticsConfig` (object)
- `crmConfig` (object)
- `formWebhookConfig` (object)

---

## 3.2 Navigation
Globalna lub lokalna nawigacja.

### Fields
- `title` (string, required)
- `type` (enum: global, pillar, footer, utility)
- `items` (array of nav items)

### Nav item fields
- `label` (string, required)
- `url` (string, required)
- `target` (enum: same-tab, new-tab)
- `highlighted` (boolean)
- `pillarReference` (reference, optional)

---

## 3.3 Footer
Konfiguracja stopki.

### Fields
- `shortDescription` (text)
- `linkGroups` (array)
- `legalLinks` (array)
- `contactBlock` (object)
- `socialLinks` (array)

---

# 4. Page model

## 4.1 Page
Główny model dla wszystkich stron.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `pageType` (enum: homepage, about, contact, pillar, generic, articleIndex, caseIndex)
- `pillar` (reference to Pillar, optional)
- `hero` (reference or object, required)
- `sections` (array of section blocks)
- `faqItems` (array of references, optional)
- `ctaBlock` (reference, optional)
- `seo` (object, required)
- `published` (boolean)
- `order` (number)
- `language` (string)
- `status` (enum: draft, published, archived)

---

## 4.2 Suggested PageModel interface
```ts
type PageModel = {
  title: string;
  slug: string;
  pageType: "homepage" | "about" | "contact" | "pillar" | "generic";
  pillar?: string;
  hero: HeroBlock;
  sections: SectionBlock[];
  faqItems?: FaqItem[];
  ctaBlock?: CtaBlock;
  seo: SeoModel;
  published: boolean;
};
```

---

# 5. Hero model

## 5.1 HeroBlock
Model hero sekcji.

### Fields
- `label` (string)
- `headline` (string, required)
- `subheadline` (text)
- `primaryCta` (reference to CTA, optional)
- `secondaryCta` (reference to CTA, optional)
- `visualType` (enum: image, video, illustration, ecosystem-map, abstract, none)
- `visualImage` (image, optional)
- `visualAlt` (string)
- `themeVariant` (enum: dark, light, mixed)
- `layoutVariant` (enum: split, centered, editorial)
- `pillarsShown` (array of references, optional)

---

# 6. Section system

## 6.1 SectionBlock
CMS powinien wspierać modularne sekcje.

### Common fields
- `sectionType` (enum, required)
- `eyebrow` (string)
- `title` (string)
- `intro` (text)
- `themeVariant` (enum: dark, light, accent)
- `layoutVariant` (enum)
- `items` (array, optional)
- `cta` (reference, optional)
- `visible` (boolean, default true)

---

## 6.2 Supported section types
- intro
- pillarGrid
- serviceGrid
- capabilities
- processSteps
- offerFormats
- audienceCards
- differentiators
- ecosystemMap
- faq
- testimonials
- trustBlock
- projectTypes
- experienceTypes
- channels
- articleFeed
- caseStudyFeed
- contactBlock
- customRichText

---

## 6.3 Example section schema
```ts
type SectionBlock = {
  sectionType:
    | "intro"
    | "pillarGrid"
    | "serviceGrid"
    | "processSteps"
    | "faq"
    | "contactBlock";
  eyebrow?: string;
  title?: string;
  intro?: string;
  themeVariant?: "dark" | "light" | "accent";
  layoutVariant?: string;
  items?: unknown[];
  cta?: CtaModel;
  visible?: boolean;
};
```

---

# 7. Pillar model

## 7.1 Pillar
Model opisujący każdy filar.

### Fields
- `name` (string, required)
- `slug` (slug, required)
- `subdomain` (string, required)
- `shortDescription` (string, required)
- `mediumDescription` (text)
- `longDescription` (rich text)
- `positioning` (text)
- `primaryAudience` (array of strings)
- `coreServices` (array of references to Service)
- `offerFormats` (array of references)
- `leadCta` (reference to CTA)
- `seo` (object)
- `icon` (image or icon token)
- `cardVisual` (image)
- `themeAccent` (string)

---

# 8. Service model

## 8.1 Service
Model dla usług wewnątrz filarów.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `pillar` (reference, required)
- `shortDescription` (string, required)
- `description` (text)
- `bestFor` (string)
- `benefits` (array of strings)
- `relatedOfferFormats` (array of references)
- `relatedCaseStudies` (array of references)
- `relatedCta` (reference)
- `seo` (object, optional)

---

# 9. Offer format model

## 9.1 OfferFormat
Model dla produktów wejściowych i formatów współpracy.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `pillar` (reference)
- `shortDescription` (string)
- `scope` (text)
- `bestFit` (text)
- `expectedOutcome` (text)
- `nextStepCta` (reference)
- `entryLevel` (enum: entry, core, premium)
- `priceAnchor` (string, optional)
- `visibleOnSite` (boolean)

---

# 10. CTA model

## 10.1 CTA
Wspólny model CTA.

### Fields
- `label` (string, required)
- `url` (string, required)
- `type` (enum: primary, secondary, ghost, anchor, external)
- `target` (enum: same-tab, new-tab)
- `trackingName` (string)
- `pillarContext` (reference, optional)

---

# 11. FAQ model

## 11.1 FaqItem
Model dla FAQ.

### Fields
- `question` (string, required)
- `answer` (rich text or text, required)
- `pillar` (reference, optional)
- `category` (string)
- `order` (number)
- `visible` (boolean)
- `seoRelevant` (boolean)

---

# 12. Process and steps models

## 12.1 ProcessStep
Model pojedynczego kroku procesu.

### Fields
- `title` (string, required)
- `description` (text)
- `stepNumber` (number)
- `pillar` (reference, optional)
- `icon` (string or image)
- `order` (number)

---

## 12.2 ProcessBlock
### Fields
- `title` (string)
- `intro` (text)
- `steps` (array of references to ProcessStep)
- `layoutVariant` (enum: horizontal, vertical, timeline)

---

# 13. Audience and use-case models

## 13.1 AudienceCard
### Fields
- `title` (string, required)
- `description` (text)
- `pillar` (reference)
- `painPoints` (array of strings)
- `bestEntryOffer` (reference)
- `order` (number)

---

## 13.2 UseCase
### Fields
- `title` (string)
- `description` (text)
- `pillarsInvolved` (array of references)
- `outcome` (text)
- `visible` (boolean)

---

# 14. Trust / proof models

## 14.1 TrustBlock
### Fields
- `title` (string)
- `description` (text)
- `items` (array of strings)
- `pillar` (reference, optional)

---

## 14.2 Testimonial
Na późniejszy etap.

### Fields
- `name` (string)
- `company` (string)
- `role` (string)
- `quote` (text)
- `pillar` (reference)
- `image` (image, optional)
- `visible` (boolean)

---

# 15. Case study model

## 15.1 CaseStudy
Model dla case studies.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `summary` (string, required)
- `clientType` (string)
- `industry` (string)
- `pillarsInvolved` (array of references)
- `challenge` (text)
- `approach` (text)
- `solution` (text)
- `outcome` (text)
- `highlightMetrics` (array of objects)
- `images` (array of images)
- `seo` (object)
- `featured` (boolean)
- `status` (enum: draft, published, archived)

---

## 15.2 Metric object
### Fields
- `label` (string)
- `value` (string)

---

# 16. Article / insights model

## 16.1 Article
Model dla artykułów i insightów.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `excerpt` (string)
- `body` (rich text, required)
- `pillar` (reference, optional)
- `categories` (array of strings)
- `featuredImage` (image)
- `author` (string)
- `publishedAt` (datetime)
- `seo` (object)
- `status` (enum: draft, published, archived)

---

# 17. SEO model

## 17.1 SeoModel
Wspólny model SEO.

### Fields
- `metaTitle` (string, required)
- `metaDescription` (text, required)
- `ogTitle` (string)
- `ogDescription` (text)
- `ogImage` (image)
- `canonicalUrl` (string)
- `noIndex` (boolean)
- `keywords` (array of strings)
- `schemaType` (enum: Organization, WebPage, Service, FAQPage, Article, CaseStudy)
- `structuredDataOverride` (json, optional)

---

# 18. Form schema model

## 18.1 FormDefinition
Model formularza dla różnych filarów i stron.

### Fields
- `title` (string, required)
- `slug` (slug, required)
- `pillar` (reference, optional)
- `intro` (text)
- `submitLabel` (string)
- `successMessage` (text)
- `errorMessage` (text)
- `fields` (array of form fields)
- `routingConfig` (object)
- `crmMapping` (object)
- `trackingName` (string)

---

## 18.2 FormField
### Fields
- `name` (string, required)
- `label` (string, required)
- `type` (enum: text, email, phone, textarea, select, checkbox)
- `placeholder` (string)
- `required` (boolean)
- `options` (array of strings, for select)
- `validationRule` (string)
- `order` (number)

---

## 18.3 Routing config
### Suggested fields
- `primaryPillar`
- `secondaryPillars`
- `leadType`
- `defaultOwner`
- `webhookName`

---

# 19. Lead source / conversion model

## 19.1 LeadConfig
Opcjonalny model konfiguracyjny dla routingu.

### Fields
- `sourcePage` (reference or string)
- `pillar` (reference)
- `defaultInquiryType` (string)
- `crmTag` (string)
- `automationFlow` (string)
- `ownerHint` (string)

---

# 20. Global reusable block models

## 20.1 Badge / label block
### Fields
- `text` (string)
- `variant` (enum: default, accent, muted)

---

## 20.2 Link group
### Fields
- `title` (string)
- `links` (array of nav items)

---

## 20.3 Metric block
### Fields
- `label` (string)
- `value` (string)
- `description` (string)

---

# 21. Media management rules

## 21.1 Images
Każdy asset powinien mieć:
- alt text
- usage context
- pillar tag
- image purpose (hero, card, og, article, case study)

---

## 21.2 Recommended media fields
- `title`
- `alt`
- `caption`
- `credit`
- `pillar`
- `assetType`

---

# 22. Localization readiness

## 22.1 Future-proofing for multilingual
Na start można działać w jednym języku, ale schematy powinny być gotowe na rozszerzenie.

### Approaches
- separate field per locale
- localized documents
- CMS-level i18n plugin

Rekomendacja:
- przygotować modele na lokalizację przez `language` field i document duplication

---

# 23. Content governance

## 23.1 Role
### Admin
pełne zarządzanie wszystkimi treściami

### Editor
edycja stron i sekcji

### Pillar editor
edycja treści przypisanych do konkretnego filaru

### SEO editor
zarządzanie metadata i structured data

---

## 23.2 Governance rules
1. Każdy content type powinien mieć jasny status.
2. Nie publikować bez SEO minimum.
3. Nie duplikować treści bez potrzeby.
4. Trzymać spójny ton komunikacji.
5. Każdy filar ma własne treści, ale wspólne fundamenty.

---

# 24. Recommended schema naming

## Documents
- `siteSettings`
- `navigation`
- `footer`
- `page`
- `pillar`
- `service`
- `offerFormat`
- `faqItem`
- `caseStudy`
- `article`
- `formDefinition`

## Objects
- `heroBlock`
- `sectionBlock`
- `seo`
- `cta`
- `processStep`
- `audienceCard`
- `metricBlock`
- `formField`
- `navItem`

---

# 25. Frontend integration guidelines

## 25.1 Frontend should assume
- modular sections
- optional fields
- possible hidden sections
- typed schema parsing
- graceful fallbacks for missing optional content

---

## 25.2 Suggested content fetching pattern
- page-based queries
- shared fragment strategy
- static generation for public marketing pages
- incremental updates for CMS edits where needed

---

## 25.3 Type generation
Rekomendowane:
- generate TypeScript types from schema/query layer
- central `content-models` package
- shared mappers between CMS and frontend

---

# 26. Minimal viable CMS setup

## Phase 1
Uruchomić:
- SiteSettings
- Navigation
- Footer
- Page
- HeroBlock
- SectionBlock
- Pillar
- Service
- CTA
- FAQ
- FormDefinition
- SeoModel

---

## Phase 2
Dodać:
- OfferFormat
- ProcessStep
- AudienceCard
- CaseStudy
- Article

---

## Phase 3
Dodać:
- Testimonial
- Metrics
- Localization
- role-specific editorial workflows
- advanced automation / CRM models

---

# 27. Recommended implementation order

1. Zdefiniować podstawowe schematy globalne
2. Zdefiniować Page + Hero + SectionBlock
3. Zdefiniować Pillar + Service + OfferFormat
4. Zdefiniować CTA + FAQ + FormDefinition
5. Podpiąć frontend `mulagroup-main`
6. Podpiąć frontend filarów
7. Dodać CaseStudy + Article
8. Dodać governance i SEO workflows

---

# 28. Najważniejsze zasady końcowe

1. CMS ma wspierać modułowość, nie komplikować prostych stron.
2. Każdy model treści powinien mieć jasny cel.
3. Strony mają być budowane z reusable blocks.
4. SEO musi być wbudowane w każdy ważny model.
5. Formularze i CTA muszą być łatwe do konfiguracji.
6. Filarowe treści powinny być rozdzielone, ale logicznie połączone.
7. Schematy mają być gotowe do skali i dalszych AI integracji.
8. Frontend i CMS powinny mówić wspólnym, typed language.

---

# 29. Następne rekomendowane pliki

Possible next documents:
- `mulagroup_case_study_framework.md`
- `mulagroup_lead_scoring_model.md`
- `mulagroup_offer_templates.md`
- `mulagroup_internal_brief_templates.md`
- `mulagroup_analytics_event_map.md`

