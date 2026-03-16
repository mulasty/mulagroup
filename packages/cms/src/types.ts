import type { PillarKey, SiteKey } from "@mulagroup/content-models";

export type CmsLanguage = "en" | "pl";
export type CmsStatus = "archived" | "draft" | "published";
export type CmsTarget = "new-tab" | "same-tab";
export type CmsCtaType = "anchor" | "external" | "ghost" | "primary" | "secondary";

export type CmsDocumentBase<TType extends string> = {
  _id: string;
  _type: TType;
  language: CmsLanguage;
  status: CmsStatus;
};

export type CmsOption = {
  label: string;
  value: string;
};

export type CmsNavItem = {
  highlighted?: boolean;
  label: string;
  pillarReference?: PillarKey;
  target: CmsTarget;
  url: string;
};

export type CmsLinkGroup = {
  links: CmsNavItem[];
  title: string;
};

export type CmsSocialLink = {
  label: string;
  url: string;
};

export type CmsContactBlock = {
  email?: string;
  website?: string;
};

export type CmsRoutingConfig = {
  defaultOwner?: string;
  leadType: string;
  primaryPillar?: PillarKey;
  secondaryPillars?: PillarKey[];
  webhookName?: string;
};

export type CmsCrmMapping = {
  companyField?: string;
  emailField?: string;
  followUpDueAtField?: string;
  inquiryTypeField: string;
  leadSourceField?: string;
  leadStageField?: string;
  leadStatusField?: string;
  leadTypeField?: string;
  messageField: string;
  nameField: string;
  nextOwnerField?: string;
  nextStepField?: string;
  phoneField?: string;
  primaryPillarField: string;
  secondaryPillarsField?: string;
  sourceField: string;
  summaryField?: string;
};

export type CmsConnectionItem = {
  description: string;
  href: string;
  pillar: PillarKey;
  title: string;
};

export type CmsMediaAsset = {
  alt: string;
  assetType: "article" | "case-study";
  title: string;
  url: string;
};

export type CmsSeoModel = {
  canonicalUrl?: string;
  keywords?: string[];
  metaDescription: string;
  metaTitle: string;
  noIndex?: boolean;
  ogDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  schemaType?:
    | "Article"
    | "CaseStudy"
    | "FAQPage"
    | "Organization"
    | "Service"
    | "WebPage";
  structuredDataOverride?: Record<string, unknown>;
};

export type CmsCtaDocument = CmsDocumentBase<"cta"> & {
  label: string;
  pillarContext?: SiteKey;
  target: CmsTarget;
  trackingName: string;
  type: CmsCtaType;
  url: string;
};

export type CmsSiteSettingsDocument = CmsDocumentBase<"siteSettings"> & {
  address?: string;
  analyticsConfig?: Record<string, string>;
  contactEmail?: string;
  contactPhone?: string;
  crmConfig?: Record<string, string>;
  defaultLanguage: CmsLanguage;
  defaultSeo: CmsSeoModel;
  defaultOgImage?: string;
  formWebhookConfig?: Record<string, string>;
  siteName: string;
  siteTagline?: string;
  socialLinks: CmsSocialLink[];
};

export type CmsNavigationDocument = CmsDocumentBase<"navigation"> & {
  items: CmsNavItem[];
  primaryCtaId?: string;
  siteKey?: SiteKey;
  title: string;
  type: "footer" | "global" | "pillar" | "utility";
};

export type CmsFooterDocument = CmsDocumentBase<"footer"> & {
  bottomTextPrimary: string;
  bottomTextSecondary: string;
  contactBlock: CmsContactBlock;
  legalLinks: CmsNavItem[];
  linkGroups: CmsLinkGroup[];
  shortDescription: string;
  siteKey?: SiteKey;
  socialLinks: CmsSocialLink[];
  title: string;
};

export type CmsFeatureItem = {
  description: string;
  href?: string;
  idealFor?: string;
  outcome?: string;
  pillar?: PillarKey;
  signals?: string[];
  tags?: string[];
  title: string;
};

export type CmsMetricItem = {
  description: string;
  label: string;
  value: string;
};

export type CmsHeroBlock = {
  highlights?: string[];
  insights?: CmsFeatureItem[];
  label?: string;
  layoutVariant: "centered" | "editorial" | "split";
  pillarsShown?: PillarKey[];
  primaryCtaId?: string;
  secondaryCtaId?: string;
  subheadline: string;
  headline: string;
  themeVariant: "dark" | "light" | "mixed";
  visualAlt?: string;
  visualImage?: string;
  visualType: "abstract" | "ecosystem-map" | "illustration" | "image" | "none" | "video";
};

export type CmsSectionLead = {
  eyebrow: string;
  intro: string;
  title: string;
};

type CmsSectionBlockBase<TSectionType extends string> = {
  id: string;
  layoutVariant?: string;
  sectionType: TSectionType;
  themeVariant?: "accent" | "dark" | "light";
  visible: boolean;
} & CmsSectionLead;

export type CmsIntroSectionBlock = CmsSectionBlockBase<"intro"> & {
  cards: CmsFeatureItem[];
  principles: string[];
};

export type CmsPillarGridSectionBlock = CmsSectionBlockBase<"pillarGrid"> & {
  pillarKeys: PillarKey[];
};

export type CmsFeatureGridSectionBlock = CmsSectionBlockBase<
  "capabilities" | "differentiators" | "partnerships"
> & {
  items: CmsFeatureItem[];
  principles?: string[];
};

export type CmsServiceGroup =
  | "automation"
  | "capabilities"
  | "channels"
  | "core"
  | "experienceTypes"
  | "projectTypes";

export type CmsServiceGridSectionBlock = CmsSectionBlockBase<"serviceGrid"> & {
  bestForLabel?: string;
  group: CmsServiceGroup;
  serviceIds: string[];
};

export type CmsAudienceCardsSectionBlock = CmsSectionBlockBase<"audienceCards"> & {
  audienceIds: string[];
};

export type CmsProcessStepsSectionBlock = CmsSectionBlockBase<"processSteps"> & {
  stepIds: string[];
};

export type CmsOfferFormatsSectionBlock = CmsSectionBlockBase<"offerFormats"> & {
  formatIds: string[];
};

export type CmsFaqSectionBlock = CmsSectionBlockBase<"faq"> & {
  faqIds: string[];
};

export type CmsConnectionsSectionBlock = CmsSectionBlockBase<"connections"> & {
  items: CmsConnectionItem[];
  leadingLabels?: string[];
};

export type CmsContactSectionBlock = CmsSectionBlockBase<"contactBlock"> & {
  formId: string;
  primaryCtaId: string;
  secondaryCtaId?: string;
  signals: string[];
};

export type CmsCustomRichTextSectionBlock = CmsSectionBlockBase<"customRichText"> & {
  body: string;
};

export type CmsMetricsSectionBlock = CmsSectionBlockBase<"metrics"> & {
  items: CmsMetricItem[];
};

export type CmsSectionBlock =
  | CmsIntroSectionBlock
  | CmsPillarGridSectionBlock
  | CmsFeatureGridSectionBlock
  | CmsServiceGridSectionBlock
  | CmsAudienceCardsSectionBlock
  | CmsProcessStepsSectionBlock
  | CmsOfferFormatsSectionBlock
  | CmsFaqSectionBlock
  | CmsConnectionsSectionBlock
  | CmsContactSectionBlock
  | CmsCustomRichTextSectionBlock
  | CmsMetricsSectionBlock;

export type CmsPageDocument = CmsDocumentBase<"page"> & {
  footerId?: string;
  navigationId?: string;
  order: number;
  pageType: "about" | "articleIndex" | "caseIndex" | "contact" | "generic" | "homepage" | "pillar";
  pillar?: PillarKey;
  published: boolean;
  sections: CmsSectionBlock[];
  seo: CmsSeoModel;
  slug: string;
  summary: string;
  title: string;
  siteKey: SiteKey;
  hero: CmsHeroBlock;
};

export type CmsPillarDocument = CmsDocumentBase<"pillar"> & {
  accentLabel: string;
  cardVisual?: string;
  coreServiceIds: string[];
  key: PillarKey;
  leadCtaId?: string;
  longDescription?: string;
  mediumDescription?: string;
  name: string;
  offerFormatIds: string[];
  positioning: string;
  primaryAudience: string[];
  seo: CmsSeoModel;
  shortDescription: string;
  slug: string;
  subdomain: string;
  summary: string;
  tagline: string;
  themeAccent?: string;
  url: string;
};

export type CmsServiceDocument = CmsDocumentBase<"service"> & {
  benefits: string[];
  bestFor?: string;
  category: CmsServiceGroup;
  description: string;
  pillar: PillarKey;
  relatedCaseStudyIds: string[];
  relatedCtaId?: string;
  relatedOfferFormatIds: string[];
  seo?: CmsSeoModel;
  shortDescription: string;
  slug: string;
  title: string;
};

export type CmsOfferFormatDocument = CmsDocumentBase<"offerFormat"> & {
  bestFit: string;
  entryLevel: "core" | "entry" | "premium";
  expectedOutcome: string;
  nextStepCtaId?: string;
  pillar: PillarKey;
  priceAnchor?: string;
  scope: string;
  shortDescription: string;
  slug: string;
  title: string;
  visibleOnSite: boolean;
};

export type CmsFaqItemDocument = CmsDocumentBase<"faqItem"> & {
  answer: string;
  category: string;
  order: number;
  pillar?: PillarKey;
  question: string;
  seoRelevant: boolean;
  visible: boolean;
};

export type CmsProcessStepDocument = CmsDocumentBase<"processStep"> & {
  description: string;
  icon?: string;
  order: number;
  pillar?: PillarKey;
  stepNumber: number;
  title: string;
};

export type CmsAudienceCardDocument = CmsDocumentBase<"audienceCard"> & {
  bestEntryOfferId?: string;
  description: string;
  order: number;
  painPoints: string[];
  pillar: PillarKey;
  title: string;
};

export type CmsFormFieldDocument = {
  label: string;
  name: string;
  options?: CmsOption[];
  order: number;
  placeholder?: string;
  required: boolean;
  type: "checkbox" | "email" | "phone" | "select" | "text" | "textarea";
  validationRule?: string;
};

export type CmsFormDefinitionDocument = CmsDocumentBase<"formDefinition"> & {
  crmMapping: CmsCrmMapping;
  errorMessage: string;
  fields: CmsFormFieldDocument[];
  intro: string;
  note: string;
  pillar?: PillarKey;
  routingConfig: CmsRoutingConfig;
  slug: string;
  submitLabel: string;
  successMessage: string;
  title: string;
  trackingName: string;
};

export type CmsCaseStudyDocument = CmsDocumentBase<"caseStudy"> & {
  approach: string;
  challenge: string;
  clientType: string;
  ctaId?: string;
  diagnosis?: string;
  featured: boolean;
  highlightMetrics: CmsMetricItem[];
  images: CmsMediaAsset[];
  industry: string;
  keyLearning?: string;
  outcome: string;
  pillarsInvolved: PillarKey[];
  projectType: string;
  scope?: string;
  seo: CmsSeoModel;
  slug: string;
  solution?: string;
  summary: string;
  title: string;
};

export type CmsArticleDocument = CmsDocumentBase<"article"> & {
  author: string;
  body: string;
  categories: string[];
  excerpt: string;
  featured?: boolean;
  featuredImage?: CmsMediaAsset;
  pillar?: PillarKey;
  publishedAt: string;
  seo: CmsSeoModel;
  slug: string;
  title: string;
};

export type CmsContentStore = {
  articles: CmsArticleDocument[];
  audienceCards: CmsAudienceCardDocument[];
  caseStudies: CmsCaseStudyDocument[];
  ctas: CmsCtaDocument[];
  footers: CmsFooterDocument[];
  forms: CmsFormDefinitionDocument[];
  navigations: CmsNavigationDocument[];
  offerFormats: CmsOfferFormatDocument[];
  pages: CmsPageDocument[];
  pillars: CmsPillarDocument[];
  processSteps: CmsProcessStepDocument[];
  services: CmsServiceDocument[];
  settings: CmsSiteSettingsDocument;
  faqItems: CmsFaqItemDocument[];
};

export type CmsSchemaField = {
  description?: string;
  fields?: CmsSchemaField[];
  name: string;
  of?: string[];
  options?: string[];
  required?: boolean;
  type: string;
};

export type CmsSchemaDefinition = {
  description: string;
  fields: CmsSchemaField[];
  kind: "document" | "object";
  name: string;
  title: string;
};

export type CmsContentValidationIssue = {
  collection: keyof CmsContentStore | "schema";
  documentId?: string;
  field?: string;
  level: "error" | "warning";
  message: string;
};

export type CmsContentValidationReport = {
  issues: CmsContentValidationIssue[];
  ok: boolean;
};
