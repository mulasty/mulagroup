import type { CmsSchemaDefinition } from "../types";

export const seoSchema = {
  name: "seo",
  title: "SEO",
  kind: "object",
  description: "Reusable SEO metadata model for pages, pillars, services, articles and case studies.",
  fields: [
    { name: "metaTitle", type: "string", required: true },
    { name: "metaDescription", type: "text", required: true },
    { name: "ogTitle", type: "string" },
    { name: "ogDescription", type: "text" },
    { name: "ogImage", type: "image" },
    { name: "canonicalUrl", type: "url" },
    { name: "noIndex", type: "boolean" },
    { name: "keywords", type: "array", of: ["string"] },
    {
      name: "schemaType",
      type: "string",
      options: ["Organization", "WebPage", "Service", "FAQPage", "Article", "CaseStudy"],
    },
    { name: "structuredDataOverride", type: "json" },
  ],
} satisfies CmsSchemaDefinition;

export const navItemSchema = {
  name: "navItem",
  title: "Navigation Item",
  kind: "object",
  description: "Reusable navigation or utility link item.",
  fields: [
    { name: "label", type: "string", required: true },
    { name: "url", type: "string", required: true },
    { name: "target", type: "string", options: ["same-tab", "new-tab"] },
    { name: "highlighted", type: "boolean" },
    { name: "pillarReference", type: "reference" },
  ],
} satisfies CmsSchemaDefinition;

export const socialLinkSchema = {
  name: "socialLink",
  title: "Social Link",
  kind: "object",
  description: "Simple labeled social or external brand link.",
  fields: [
    { name: "label", type: "string", required: true },
    { name: "url", type: "string", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const linkGroupSchema = {
  name: "linkGroup",
  title: "Link Group",
  kind: "object",
  description: "Named group of related footer or utility links.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "links", type: "array", of: ["navItem"], required: true },
  ],
} satisfies CmsSchemaDefinition;

export const contactBlockSchema = {
  name: "contactBlock",
  title: "Contact Block",
  kind: "object",
  description: "Reusable contact fields for footer and other global surfaces.",
  fields: [
    { name: "email", type: "string" },
    { name: "website", type: "url" },
  ],
} satisfies CmsSchemaDefinition;

export const optionSchema = {
  name: "option",
  title: "Option",
  kind: "object",
  description: "Label/value option used by select fields and future configurable inputs.",
  fields: [
    { name: "label", type: "string", required: true },
    { name: "value", type: "string", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const routingConfigSchema = {
  name: "routingConfig",
  title: "Routing Config",
  kind: "object",
  description: "Lead-routing placeholder object kept ready for Phase 10 CRM wiring.",
  fields: [
    { name: "primaryPillar", type: "reference" },
    { name: "secondaryPillars", type: "array", of: ["reference"] },
    { name: "leadType", type: "string", required: true },
    { name: "defaultOwner", type: "string" },
    { name: "webhookName", type: "string" },
  ],
} satisfies CmsSchemaDefinition;

export const crmMappingSchema = {
  name: "crmMapping",
  title: "CRM Mapping",
  kind: "object",
  description: "Field mapping object connecting public forms to future CRM payload fields.",
  fields: [
    { name: "nameField", type: "string", required: true },
    { name: "emailField", type: "string" },
    { name: "phoneField", type: "string" },
    { name: "companyField", type: "string" },
    { name: "messageField", type: "string", required: true },
    { name: "inquiryTypeField", type: "string", required: true },
    { name: "leadTypeField", type: "string" },
    { name: "leadStatusField", type: "string" },
    { name: "leadStageField", type: "string" },
    { name: "primaryPillarField", type: "string", required: true },
    { name: "secondaryPillarsField", type: "string" },
    { name: "summaryField", type: "string" },
    { name: "nextStepField", type: "string" },
    { name: "nextOwnerField", type: "string" },
    { name: "followUpDueAtField", type: "string" },
    { name: "leadSourceField", type: "string" },
    { name: "sourceField", type: "string", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const connectionItemSchema = {
  name: "connectionItem",
  title: "Connection Item",
  kind: "object",
  description: "Cross-pillar connection record used by ecosystem routing sections.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "text", required: true },
    { name: "href", type: "string", required: true },
    { name: "pillar", type: "reference", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const mediaAssetSchema = {
  name: "mediaAsset",
  title: "Media Asset",
  kind: "object",
  description: "Minimal media object for starter content while the real CMS asset layer is still local.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "alt", type: "string", required: true },
    { name: "url", type: "url", required: true },
    { name: "assetType", type: "string", required: true, options: ["article", "case-study"] },
  ],
} satisfies CmsSchemaDefinition;

export const heroBlockSchema = {
  name: "heroBlock",
  title: "Hero Block",
  kind: "object",
  description: "Hero model shared across portal and pillar pages.",
  fields: [
    { name: "label", type: "string" },
    { name: "headline", type: "string", required: true },
    { name: "subheadline", type: "text", required: true },
    { name: "primaryCtaId", type: "reference" },
    { name: "secondaryCtaId", type: "reference" },
    {
      name: "visualType",
      type: "string",
      options: ["image", "video", "illustration", "ecosystem-map", "abstract", "none"],
      required: true,
    },
    { name: "visualImage", type: "image" },
    { name: "visualAlt", type: "string" },
    { name: "themeVariant", type: "string", options: ["dark", "light", "mixed"], required: true },
    {
      name: "layoutVariant",
      type: "string",
      options: ["split", "centered", "editorial"],
      required: true,
    },
    { name: "highlights", type: "array", of: ["string"] },
    { name: "insights", type: "array", of: ["featureItem"] },
    { name: "pillarsShown", type: "array", of: ["reference"] },
  ],
} satisfies CmsSchemaDefinition;

export const featureItemSchema = {
  name: "featureItem",
  title: "Feature Item",
  kind: "object",
  description: "Generic feature card object used by intro, capabilities and differentiator sections.",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "text", required: true },
    { name: "tags", type: "array", of: ["string"] },
    { name: "signals", type: "array", of: ["string"] },
    { name: "href", type: "string" },
    { name: "pillar", type: "reference" },
    { name: "idealFor", type: "text" },
    { name: "outcome", type: "text" },
  ],
} satisfies CmsSchemaDefinition;

export const metricBlockSchema = {
  name: "metricBlock",
  title: "Metric Block",
  kind: "object",
  description: "Metric or trust signal object used in portal stats and case study outcomes.",
  fields: [
    { name: "label", type: "string", required: true },
    { name: "value", type: "string", required: true },
    { name: "description", type: "text", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const formFieldSchema = {
  name: "formField",
  title: "Form Field",
  kind: "object",
  description: "Field definition object for form configuration in the content layer.",
  fields: [
    { name: "name", type: "string", required: true },
    { name: "label", type: "string", required: true },
    {
      name: "type",
      type: "string",
      required: true,
      options: ["text", "email", "phone", "textarea", "select", "checkbox"],
    },
    { name: "placeholder", type: "string" },
    { name: "required", type: "boolean", required: true },
    { name: "options", type: "array", of: ["option"] },
    { name: "validationRule", type: "string" },
    { name: "order", type: "number", required: true },
  ],
} satisfies CmsSchemaDefinition;

export const sectionBlockSchema = {
  name: "sectionBlock",
  title: "Section Block",
  kind: "object",
  description: "Composable section model supporting portal and pillar page composition without layout rewrites.",
  fields: [
    {
      name: "sectionType",
      type: "string",
      required: true,
      options: [
        "intro",
        "pillarGrid",
        "serviceGrid",
        "capabilities",
        "processSteps",
        "offerFormats",
        "audienceCards",
        "differentiators",
        "faq",
        "contactBlock",
        "connections",
        "customRichText",
        "partnerships",
        "metrics",
      ],
    },
    { name: "id", type: "string", required: true },
    { name: "eyebrow", type: "string", required: true },
    { name: "title", type: "string", required: true },
    { name: "intro", type: "text", required: true },
    { name: "themeVariant", type: "string", options: ["dark", "light", "accent"] },
    { name: "layoutVariant", type: "string" },
    { name: "visible", type: "boolean", required: true },
    { name: "items", type: "array", of: ["featureItem", "metricBlock", "connectionItem", "reference"] },
    { name: "principles", type: "array", of: ["string"] },
    {
      name: "group",
      type: "string",
      options: ["core", "automation", "channels", "capabilities", "projectTypes", "experienceTypes"],
    },
    { name: "bestForLabel", type: "string" },
    { name: "serviceIds", type: "array", of: ["reference"] },
    { name: "audienceIds", type: "array", of: ["reference"] },
    { name: "formatIds", type: "array", of: ["reference"] },
    { name: "faqIds", type: "array", of: ["reference"] },
    { name: "stepIds", type: "array", of: ["reference"] },
    { name: "pillarKeys", type: "array", of: ["string"] },
    { name: "formId", type: "reference" },
    { name: "primaryCtaId", type: "reference" },
    { name: "secondaryCtaId", type: "reference" },
    { name: "signals", type: "array", of: ["string"] },
    { name: "leadingLabels", type: "array", of: ["string"] },
    { name: "body", type: "text" },
  ],
} satisfies CmsSchemaDefinition;

export const objectSchemas = [
  seoSchema,
  navItemSchema,
  socialLinkSchema,
  linkGroupSchema,
  contactBlockSchema,
  optionSchema,
  routingConfigSchema,
  crmMappingSchema,
  connectionItemSchema,
  mediaAssetSchema,
  heroBlockSchema,
  featureItemSchema,
  metricBlockSchema,
  formFieldSchema,
  sectionBlockSchema,
] as const satisfies readonly CmsSchemaDefinition[];
