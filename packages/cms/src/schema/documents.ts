import type { CmsSchemaDefinition } from "../types";

export const ctaSchema = {
  name: "cta",
  title: "CTA",
  kind: "document",
  description: "Reusable CTA document referenced by heroes, contact blocks and pillar routing.",
  fields: [
    { name: "label", type: "string", required: true },
    { name: "url", type: "string", required: true },
    {
      name: "type",
      type: "string",
      options: ["primary", "secondary", "ghost", "anchor", "external"],
      required: true,
    },
    { name: "target", type: "string", options: ["same-tab", "new-tab"] },
    { name: "trackingName", type: "string", required: true },
    { name: "pillarContext", type: "reference" },
  ],
} satisfies CmsSchemaDefinition;

export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  kind: "document",
  description: "Global ecosystem settings, brand defaults and contact configuration.",
  fields: [
    { name: "siteName", type: "string", required: true },
    { name: "siteTagline", type: "string" },
    { name: "defaultLanguage", type: "string", required: true },
    { name: "defaultSeo", type: "seo", required: true },
    { name: "defaultOgImage", type: "image" },
    { name: "contactEmail", type: "string" },
    { name: "contactPhone", type: "string" },
    { name: "address", type: "text" },
    { name: "socialLinks", type: "array", of: ["socialLink"] },
    { name: "analyticsConfig", type: "object" },
    { name: "crmConfig", type: "object" },
    { name: "formWebhookConfig", type: "object" },
  ],
} satisfies CmsSchemaDefinition;

export const navigationSchema = {
  name: "navigation",
  title: "Navigation",
  kind: "document",
  description: "Global, pillar, footer or utility navigation definitions.",
  fields: [
    { name: "title", type: "string", required: true },
    {
      name: "type",
      type: "string",
      required: true,
      options: ["global", "pillar", "footer", "utility"],
    },
    { name: "siteKey", type: "string" },
    { name: "items", type: "array", of: ["navItem"], required: true },
    { name: "primaryCtaId", type: "reference" },
  ],
} satisfies CmsSchemaDefinition;

export const footerSchema = {
  name: "footer",
  title: "Footer",
  kind: "document",
  description: "Reusable footer content and contact group for the ecosystem.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "siteKey", type: "string" },
    { name: "shortDescription", type: "text", required: true },
    { name: "linkGroups", type: "array", of: ["linkGroup"], required: true },
    { name: "legalLinks", type: "array", of: ["navItem"], required: true },
    { name: "contactBlock", type: "contactBlock", required: true },
    { name: "socialLinks", type: "array", of: ["socialLink"], required: true },
    { name: "bottomTextPrimary", type: "string", required: true },
    { name: "bottomTextSecondary", type: "string", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const pageSchema = {
  name: "page",
  title: "Page",
  kind: "document",
  description: "Main page document for portal and pillar homepages using modular section blocks.",
  fields: [
    { name: "siteKey", type: "string", required: true },
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    {
      name: "pageType",
      type: "string",
      required: true,
      options: ["homepage", "about", "contact", "pillar", "generic", "articleIndex", "caseIndex"],
    },
    { name: "pillar", type: "reference" },
    { name: "hero", type: "heroBlock", required: true },
    { name: "sections", type: "array", of: ["sectionBlock"], required: true },
    { name: "navigationId", type: "reference" },
    { name: "footerId", type: "reference" },
    { name: "seo", type: "seo", required: true },
    { name: "summary", type: "text", required: true },
    { name: "published", type: "boolean", required: true },
    { name: "order", type: "number", required: true },
    { name: "language", type: "string", required: true },
    { name: "status", type: "string", required: true, options: ["draft", "published", "archived"] },
  ],
} satisfies CmsSchemaDefinition;

export const pillarSchema = {
  name: "pillar",
  title: "Pillar",
  kind: "document",
  description: "Master record for each pillar used across navigation, cards, pages and routing logic.",
  fields: [
    { name: "key", type: "string", required: true },
    { name: "name", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "subdomain", type: "string", required: true },
    { name: "url", type: "string", required: true },
    { name: "accentLabel", type: "string", required: true },
    { name: "tagline", type: "string", required: true },
    { name: "summary", type: "text", required: true },
    { name: "shortDescription", type: "string", required: true },
    { name: "mediumDescription", type: "text" },
    { name: "longDescription", type: "text" },
    { name: "positioning", type: "text", required: true },
    { name: "primaryAudience", type: "array", of: ["string"] },
    { name: "coreServiceIds", type: "array", of: ["reference"] },
    { name: "offerFormatIds", type: "array", of: ["reference"] },
    { name: "leadCtaId", type: "reference" },
    { name: "seo", type: "seo", required: true },
    { name: "icon", type: "image" },
    { name: "cardVisual", type: "image" },
    { name: "themeAccent", type: "string" },
  ],
} satisfies CmsSchemaDefinition;

export const serviceSchema = {
  name: "service",
  title: "Service",
  kind: "document",
  description: "Pillar service or service-group item referenced by page section blocks.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "pillar", type: "reference", required: true },
    { name: "category", type: "string", required: true },
    { name: "shortDescription", type: "string", required: true },
    { name: "description", type: "text", required: true },
    { name: "bestFor", type: "text" },
    { name: "benefits", type: "array", of: ["string"] },
    { name: "relatedOfferFormatIds", type: "array", of: ["reference"] },
    { name: "relatedCaseStudyIds", type: "array", of: ["reference"] },
    { name: "relatedCtaId", type: "reference" },
    { name: "seo", type: "seo" },
  ],
} satisfies CmsSchemaDefinition;

export const offerFormatSchema = {
  name: "offerFormat",
  title: "Offer Format",
  kind: "document",
  description: "Entry products and engagement formats available per pillar.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "pillar", type: "reference", required: true },
    { name: "shortDescription", type: "string", required: true },
    { name: "scope", type: "text", required: true },
    { name: "bestFit", type: "text", required: true },
    { name: "expectedOutcome", type: "text", required: true },
    { name: "nextStepCtaId", type: "reference" },
    { name: "entryLevel", type: "string", required: true, options: ["entry", "core", "premium"] },
    { name: "priceAnchor", type: "string" },
    { name: "visibleOnSite", type: "boolean", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const processStepSchema = {
  name: "processStep",
  title: "Process Step",
  kind: "document",
  description: "Reusable process step record for portal and pillar flows.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "text", required: true },
    { name: "stepNumber", type: "number", required: true },
    { name: "icon", type: "string" },
    { name: "pillar", type: "reference" },
    { name: "order", type: "number", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const audienceCardSchema = {
  name: "audienceCard",
  title: "Audience Card",
  kind: "document",
  description: "Audience/use-case card for pillar fit sections.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "text", required: true },
    { name: "pillar", type: "reference", required: true },
    { name: "painPoints", type: "array", of: ["string"] },
    { name: "bestEntryOfferId", type: "reference" },
    { name: "order", type: "number", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const faqItemSchema = {
  name: "faqItem",
  title: "FAQ Item",
  kind: "document",
  description: "Reusable FAQ record for pages and pillar-specific sections.",
  fields: [
    { name: "question", type: "string", required: true },
    { name: "answer", type: "text", required: true },
    { name: "pillar", type: "reference" },
    { name: "category", type: "string", required: true },
    { name: "order", type: "number", required: true },
    { name: "visible", type: "boolean", required: true },
    { name: "seoRelevant", type: "boolean", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const formDefinitionSchema = {
  name: "formDefinition",
  title: "Form Definition",
  kind: "document",
  description: "Structured form configuration and routing placeholders ready for Phase 10.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "pillar", type: "reference" },
    { name: "intro", type: "text", required: true },
    { name: "note", type: "text", required: true },
    { name: "submitLabel", type: "string", required: true },
    { name: "successMessage", type: "text", required: true },
    { name: "errorMessage", type: "text", required: true },
    { name: "fields", type: "array", of: ["formField"], required: true },
    { name: "routingConfig", type: "routingConfig", required: true },
    { name: "crmMapping", type: "crmMapping", required: true },
    { name: "trackingName", type: "string", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const caseStudySchema = {
  name: "caseStudy",
  title: "Case Study",
  kind: "document",
  description: "Starter schema for structured proof-of-work assets aligned with the case study framework.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "summary", type: "string", required: true },
    { name: "clientType", type: "string", required: true },
    { name: "industry", type: "string", required: true },
    { name: "projectType", type: "string", required: true },
    { name: "pillarsInvolved", type: "array", of: ["reference"], required: true },
    { name: "challenge", type: "text", required: true },
    { name: "diagnosis", type: "text" },
    { name: "approach", type: "text", required: true },
    { name: "solution", type: "text" },
    { name: "scope", type: "text" },
    { name: "outcome", type: "text", required: true },
    { name: "keyLearning", type: "text" },
    { name: "highlightMetrics", type: "array", of: ["metricBlock"] },
    { name: "images", type: "array", of: ["mediaAsset"] },
    { name: "ctaId", type: "reference" },
    { name: "seo", type: "seo", required: true },
    { name: "featured", type: "boolean", required: true },
    { name: "status", type: "string", required: true, options: ["draft", "published", "archived"] },
  ],
} satisfies CmsSchemaDefinition;

export const articleSchema = {
  name: "article",
  title: "Article",
  kind: "document",
  description: "Starter article / insight schema for future authority and SEO layers.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "slug", type: "slug", required: true },
    { name: "excerpt", type: "string", required: true },
    { name: "body", type: "text", required: true },
    { name: "pillar", type: "reference" },
    { name: "categories", type: "array", of: ["string"] },
    { name: "featuredImage", type: "mediaAsset" },
    { name: "featured", type: "boolean" },
    { name: "author", type: "string", required: true },
    { name: "publishedAt", type: "datetime", required: true },
    { name: "seo", type: "seo", required: true },
    { name: "status", type: "string", required: true, options: ["draft", "published", "archived"] },
  ],
} satisfies CmsSchemaDefinition;

export const documentSchemas = [
  ctaSchema,
  siteSettingsSchema,
  navigationSchema,
  footerSchema,
  pageSchema,
  pillarSchema,
  serviceSchema,
  offerFormatSchema,
  processStepSchema,
  audienceCardSchema,
  faqItemSchema,
  formDefinitionSchema,
  caseStudySchema,
  articleSchema,
] as const satisfies readonly CmsSchemaDefinition[];
