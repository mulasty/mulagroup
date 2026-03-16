export type AppLocale = "en" | "pl";

export type CtaLink = {
  href: string;
  label: string;
};

export type NavigationItem = CtaLink;

export type LocaleLink = {
  active: boolean;
  href: string;
  label: string;
  locale: AppLocale;
};

export type SectionLead = {
  description: string;
  eyebrow: string;
  title: string;
};

export type HeroContent = SectionLead & {
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export type InsightHeroContent = HeroContent & {
  highlights: string[];
  insights: FeatureCard[];
};

export type StrategyHeroContent = InsightHeroContent;

export type DigitalHeroContent = InsightHeroContent;

export type CommerceHeroContent = InsightHeroContent;

export type IndustryHeroContent = InsightHeroContent;

export type ProjectsHeroContent = InsightHeroContent;

export type PortalHeroContent = HeroContent & {
  highlights: string[];
  secondaryCta: CtaLink;
};

export type StatItem = {
  description: string;
  label: string;
  value: string;
};

export type FeatureCard = {
  description: string;
  title: string;
};

export type TaggedFeatureCard = FeatureCard & {
  tags: string[];
};

export type SeoContent = {
  description?: string;
  title?: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type ServiceCard = TaggedFeatureCard & {
  bestFor?: string;
};

export type AudienceProfile = FeatureCard & {
  signals: string[];
};

export type OfferFormat = FeatureCard & {
  idealFor: string;
  outcome: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type PortalNarrativeSection = {
  cards: FeatureCard[];
  lead: SectionLead;
  principles: string[];
};

export type PortalPartnershipSection = {
  lead: SectionLead;
  models: TaggedFeatureCard[];
  principles: string[];
};

export type PortalFinalCta = SectionLead & {
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  signals: string[];
};

export type ProcessStep = {
  description: string;
  step: string;
  title: string;
};

export type InquiryPreview = {
  buttonLabel: string;
  description: string;
  fields: {
    companyLabel?: string;
    companyPlaceholder?: string;
    emailLabel: string;
    emailPlaceholder: string;
    inquiryTypeLabel?: string;
    inquiryTypeOptions?: SelectOption[];
    messageLabel: string;
    messagePlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
  };
  note: string;
  title: string;
};

export type InquiryFormField = {
  label: string;
  name: string;
  options?: SelectOption[];
  placeholder?: string;
  required: boolean;
  type: "checkbox" | "email" | "phone" | "select" | "text" | "textarea";
  validationRule?: string;
};

export type InquiryFormConfig = {
  description: string;
  endpoint: string;
  errorMessage: string;
  fields: InquiryFormField[];
  formId: string;
  locale: AppLocale;
  note: string;
  siteKey: SiteKey;
  slug: string;
  submitLabel: string;
  successMessage: string;
  title: string;
  trackingName: string;
};

export type PillarKey = "strategy" | "digital" | "commerce" | "industry" | "projects" | "lifestyle";

export type SiteKey = "portal" | PillarKey;

export type PillarCardSummary = {
  accentLabel: string;
  capabilities: string[];
  href: string;
  key: PillarKey;
  name: string;
  summary: string;
};

export type IntegrationCard = {
  description: string;
  href: string;
  pillar: PillarKey;
  title: string;
};

export type BaseSiteManifest = {
  headerCta: CtaLink;
  hero: HeroContent;
  homeHref: string;
  key: SiteKey;
  locale: AppLocale;
  localeLinks: LocaleLink[];
  name: string;
  navigation: NavigationItem[];
  seo?: SeoContent;
  summary: string;
  tagline: string;
  theme: SiteKey;
  type: "portal" | "pillar";
  url: string;
};

export type PortalManifest = Omit<BaseSiteManifest, "hero" | "type"> & {
  about: PortalNarrativeSection;
  capabilitiesIntro: SectionLead;
  capabilityClusters: TaggedFeatureCard[];
  ecosystemIntro: SectionLead;
  finalCta: PortalFinalCta;
  hero: PortalHeroContent;
  operatingModelIntro: SectionLead;
  operatingModel: ProcessStep[];
  partnershipPrompt: InquiryFormConfig;
  partnerships: PortalPartnershipSection;
  pillars: PillarCardSummary[];
  stats: StatItem[];
  type: "portal";
};

export type PillarManifest = BaseSiteManifest & {
  accentLabel: string;
  inquiry: InquiryFormConfig;
  integrations: IntegrationCard[];
  process: ProcessStep[];
  services: TaggedFeatureCard[];
  type: "pillar";
};

export type RichPillarManifest<THero extends InsightHeroContent = InsightHeroContent> = Omit<
  PillarManifest,
  "hero" | "services"
> & {
  audiences: AudienceProfile[];
  audiencesIntro: SectionLead;
  crossPillarIntro: SectionLead;
  differentiators: TaggedFeatureCard[];
  differentiatorsIntro: SectionLead;
  faqs: FaqItem[];
  faqsIntro: SectionLead;
  finalCta: PortalFinalCta;
  formats: OfferFormat[];
  formatsIntro: SectionLead;
  hero: THero;
  intro: PortalNarrativeSection;
  processIntro: SectionLead;
  services: ServiceCard[];
  servicesIntro: SectionLead;
  type: "pillar";
};

export type StrategyManifest = RichPillarManifest;

export type DigitalManifest = RichPillarManifest & {
  automationCapabilities: ServiceCard[];
  automationIntro: SectionLead;
};

export type CommerceManifest = RichPillarManifest & {
  channels: ServiceCard[];
  channelsIntro: SectionLead;
};

export type IndustryManifest = RichPillarManifest & {
  capabilities: ServiceCard[];
  capabilitiesIntro: SectionLead;
};

export type ProjectsManifest = RichPillarManifest & {
  projectTypes: ServiceCard[];
  projectTypesIntro: SectionLead;
};

export type LifestyleManifest = RichPillarManifest & {
  experienceTypes: ServiceCard[];
  experienceTypesIntro: SectionLead;
};

export type SiteManifest =
  | PortalManifest
  | PillarManifest
  | StrategyManifest
  | DigitalManifest
  | CommerceManifest
  | IndustryManifest
  | ProjectsManifest
  | LifestyleManifest;
