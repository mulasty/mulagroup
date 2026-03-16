import type {
  AudienceProfile,
  InquiryPreview,
  OfferFormat,
  PillarKey,
  PortalNarrativeSection,
  ProcessStep,
  SectionLead,
  ServiceCard,
  SiteKey,
} from "@mulagroup/content-models";

import { articleDocuments } from "../content/articles";
import { caseStudyDocuments } from "../content/case-studies";
import {
  commerceManifest,
  digitalManifest,
  industryManifest,
  lifestyleManifest,
  portalManifest,
  projectsManifest,
  strategyManifest,
} from "../legacy/site-content";
import type {
  CmsAudienceCardDocument,
  CmsContactSectionBlock,
  CmsContentStore,
  CmsCtaDocument,
  CmsDocumentBase,
  CmsFaqItemDocument,
  CmsFeatureGridSectionBlock,
  CmsFeatureItem,
  CmsFooterDocument,
  CmsFormDefinitionDocument,
  CmsFormFieldDocument,
  CmsHeroBlock,
  CmsIntroSectionBlock,
  CmsMetricItem,
  CmsNavigationDocument,
  CmsOfferFormatDocument,
  CmsPageDocument,
  CmsPillarDocument,
  CmsProcessStepDocument,
  CmsSectionLead,
  CmsServiceDocument,
  CmsServiceGridSectionBlock,
  CmsServiceGroup,
  CmsSeoModel,
  CmsSiteSettingsDocument,
} from "../types";
import { assertCmsContentStore } from "../content/validation";

const DEFAULT_LANGUAGE = "en";
const DEFAULT_STATUS = "published";
const DEFAULT_CONTACT_EMAIL = "contact@mulagroup.eu";
const DEFAULT_BOTTOM_TEXT_PRIMARY =
  "Strategic, digital and operational ecosystem for modern business growth.";
const DEFAULT_BOTTOM_TEXT_SECONDARY =
  "Built to connect the right capabilities into one structured path for growth.";
const PILLAR_ORDER = [
  "strategy",
  "digital",
  "commerce",
  "industry",
  "projects",
  "lifestyle",
] as const satisfies readonly PillarKey[];

type LegacyPortalSeed = typeof portalManifest;

type LegacyRichPillarSeed =
  | typeof strategyManifest
  | typeof digitalManifest
  | typeof commerceManifest
  | typeof industryManifest
  | typeof projectsManifest
  | typeof lifestyleManifest;

type ExtraServiceSectionConfig = {
  bestForLabel?: string;
  group: CmsServiceGroup;
  id: string;
  lead: SectionLead;
  services: ServiceCard[];
};

type RichPillarConfig = {
  extraServiceSection?: ExtraServiceSectionConfig;
  leadingLabels?: string[];
};

const pillarSeeds: LegacyRichPillarSeed[] = [
  strategyManifest,
  digitalManifest,
  commerceManifest,
  industryManifest,
  projectsManifest,
  lifestyleManifest,
];

const richPillarConfigs: Record<PillarKey, RichPillarConfig> = {
  strategy: {},
  digital: {
    extraServiceSection: {
      group: "automation",
      id: "ai-automation",
      lead: digitalManifest.automationIntro,
      services: digitalManifest.automationCapabilities,
    },
  },
  commerce: {
    extraServiceSection: {
      group: "channels",
      id: "channels",
      lead: commerceManifest.channelsIntro,
      services: commerceManifest.channels,
    },
  },
  industry: {
    extraServiceSection: {
      group: "capabilities",
      id: "capabilities",
      lead: industryManifest.capabilitiesIntro,
      services: industryManifest.capabilities,
    },
  },
  projects: {
    extraServiceSection: {
      bestForLabel: "Best fit",
      group: "projectTypes",
      id: "project-types",
      lead: projectsManifest.projectTypesIntro,
      services: projectsManifest.projectTypes,
    },
    leadingLabels: ["Strategy"],
  },
  lifestyle: {
    extraServiceSection: {
      bestForLabel: "Best fit",
      group: "experienceTypes",
      id: "experience-types",
      lead: lifestyleManifest.experienceTypesIntro,
      services: lifestyleManifest.experienceTypes,
    },
    leadingLabels: ["Strategy"],
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createDocumentBase<TType extends string>(
  type: TType,
  id: string,
): CmsDocumentBase<TType> {
  return {
    _id: id,
    _type: type,
    language: DEFAULT_LANGUAGE,
    status: DEFAULT_STATUS,
  };
}

function createSeo(
  metaTitle: string,
  metaDescription: string,
  canonicalUrl: string,
  schemaType: CmsSeoModel["schemaType"] = "WebPage",
): CmsSeoModel {
  return {
    metaTitle,
    metaDescription,
    ogTitle: metaTitle,
    ogDescription: metaDescription,
    canonicalUrl,
    schemaType,
  };
}

function createSectionLead(lead: SectionLead): CmsSectionLead {
  return {
    eyebrow: lead.eyebrow,
    intro: lead.description,
    title: lead.title,
  };
}

function createFeatureItem(card: {
  bestFor?: string;
  description: string;
  signals?: string[];
  tags?: string[];
  title: string;
}): CmsFeatureItem {
  return {
    description: card.description,
    title: card.title,
    ...(card.bestFor ? { idealFor: card.bestFor } : {}),
    ...(card.signals ? { signals: card.signals } : {}),
    ...(card.tags ? { tags: card.tags } : {}),
  };
}

function createMetricItem(item: { description: string; label: string; value: string }): CmsMetricItem {
  return {
    description: item.description,
    label: item.label,
    value: item.value,
  };
}

function createCtaDocument(
  id: string,
  label: string,
  url: string,
  trackingName: string,
  type: CmsCtaDocument["type"],
  pillarContext?: CmsCtaDocument["pillarContext"],
): CmsCtaDocument {
  return {
    ...createDocumentBase("cta", id),
    label,
    target: "same-tab",
    trackingName,
    type,
    url,
    ...(pillarContext ? { pillarContext } : {}),
  };
}

function createFormFields(inquiry: InquiryPreview): CmsFormFieldDocument[] {
  const fields: CmsFormFieldDocument[] = [
    {
      label: inquiry.fields.nameLabel,
      name: "name",
      order: 1,
      placeholder: inquiry.fields.namePlaceholder,
      required: true,
      type: "text",
    },
    {
      label: inquiry.fields.emailLabel,
      name: "email",
      order: 2,
      placeholder: inquiry.fields.emailPlaceholder,
      required: true,
      type: "email",
    },
  ];

  let order = 3;

  if (inquiry.fields.companyLabel) {
    fields.push({
      label: inquiry.fields.companyLabel,
      name: "company",
      order,
      required: false,
      type: "text",
      ...(inquiry.fields.companyPlaceholder
        ? { placeholder: inquiry.fields.companyPlaceholder }
        : {}),
    });
    order += 1;
  }

  if (inquiry.fields.inquiryTypeLabel && inquiry.fields.inquiryTypeOptions) {
    fields.push({
      label: inquiry.fields.inquiryTypeLabel,
      name: "inquiryType",
      order,
      required: false,
      type: "select",
      options: inquiry.fields.inquiryTypeOptions,
    });
    order += 1;
  }

  fields.push({
    label: inquiry.fields.messageLabel,
    name: "message",
    order,
    required: true,
    type: "textarea",
    ...(inquiry.fields.messagePlaceholder
      ? { placeholder: inquiry.fields.messagePlaceholder }
      : {}),
  });

  return fields;
}

function createFormDefinition(
  siteKey: SiteKey,
  inquiry: InquiryPreview,
  secondaryPillars: PillarKey[] = [],
): CmsFormDefinitionDocument {
  return {
    ...createDocumentBase("formDefinition", `form.${siteKey}.intake`),
    crmMapping: {
      companyField: "companyOrProject",
      emailField: "email",
      followUpDueAtField: "followUpDueAt",
      inquiryTypeField: "inquiryType",
      leadSourceField: "leadSource",
      leadStageField: "leadStage",
      leadStatusField: "leadStatus",
      leadTypeField: "leadType",
      messageField: "message",
      nameField: "name",
      nextOwnerField: "nextOwner",
      nextStepField: "nextStep",
      phoneField: "phone",
      primaryPillarField: "primaryPillar",
      secondaryPillarsField: "secondaryPillars",
      sourceField: "sourcePage",
      summaryField: "leadSummary",
    },
    errorMessage:
      "Something interrupted the structured intake. Please try again or contact Mula Group directly by email.",
    fields: createFormFields(inquiry),
    intro: inquiry.description,
    note: inquiry.note,
    routingConfig: {
      leadType: siteKey === "portal" ? "ecosystem-intake" : `${siteKey}-intake`,
      ...(siteKey === "portal" ? {} : { primaryPillar: siteKey }),
      ...(secondaryPillars.length > 0 ? { secondaryPillars } : {}),
      webhookName: `${siteKey}-intake`,
    },
    slug: `${siteKey}-intake`,
    submitLabel: inquiry.buttonLabel,
    successMessage:
      "Thanks. Your inquiry has been captured and routed into the right next step.",
    title: inquiry.title,
    trackingName: `${siteKey}.intake.submit`,
    ...(siteKey === "portal" ? {} : { pillar: siteKey }),
  };
}

function createNavigationDocument(
  site: LegacyPortalSeed | LegacyRichPillarSeed,
  primaryCtaId: string,
): CmsNavigationDocument {
  return {
    ...createDocumentBase("navigation", `navigation.${site.key}.primary`),
    items: site.navigation.map((item) => ({
      label: item.label,
      target: "same-tab",
      url: item.href,
    })),
    primaryCtaId,
    siteKey: site.key as SiteKey,
    title: `${site.name} primary navigation`,
    type: site.key === "portal" ? "global" : "pillar",
  };
}

function createFooterDocument(
  site: LegacyPortalSeed | LegacyRichPillarSeed,
  pillarLinks: CmsFooterDocument["linkGroups"][number]["links"],
): CmsFooterDocument {
  const currentPageLinks = site.navigation.map((item) => ({
    label: item.label,
    target: "same-tab" as const,
    url: item.href,
  }));
  const relatedLinks =
    site.key === "portal"
      ? pillarLinks
      : [
          {
            label: "Mula Group portal",
            target: "same-tab" as const,
            url: "https://mulagroup.eu",
          },
          ...pillarLinks.filter((item) => item.url !== site.url),
        ];

  return {
    ...createDocumentBase("footer", `footer.${site.key}`),
    bottomTextPrimary: DEFAULT_BOTTOM_TEXT_PRIMARY,
    bottomTextSecondary: DEFAULT_BOTTOM_TEXT_SECONDARY,
    contactBlock: {
      email: DEFAULT_CONTACT_EMAIL,
      website: site.url,
    },
    legalLinks: [],
    linkGroups: [
      {
        links: currentPageLinks,
        title: site.key === "portal" ? "Quick links" : "Page sections",
      },
      {
        links: relatedLinks,
        title: site.key === "portal" ? "Ecosystem pillars" : "Related ecosystem links",
      },
    ],
    shortDescription: site.summary,
    siteKey: site.key as SiteKey,
    socialLinks: [],
    title: site.key === "portal" ? "Mula Group ecosystem" : `${site.name} by Mula Group`,
  };
}

function createHeroBlock(
  site: LegacyPortalSeed | LegacyRichPillarSeed,
  primaryCtaId: string,
  secondaryCtaId: string,
): CmsHeroBlock {
  return {
    headline: site.hero.title,
    highlights: site.hero.highlights,
    label: site.hero.eyebrow,
    layoutVariant: "split",
    primaryCtaId,
    secondaryCtaId,
    subheadline: site.hero.description,
    themeVariant: "dark",
    visualType: "abstract",
    ...("insights" in site.hero ? { insights: site.hero.insights.map(createFeatureItem) } : {}),
  };
}

function createProcessDocuments(
  siteKey: SiteKey,
  steps: ProcessStep[],
  pillar?: PillarKey,
): CmsProcessStepDocument[] {
  return steps.map((step, index) => ({
    ...createDocumentBase("processStep", `processStep.${siteKey}.${slugify(step.title)}`),
    description: step.description,
    order: index + 1,
    stepNumber: Number.parseInt(step.step, 10),
    title: step.title,
    ...(pillar ? { pillar } : {}),
  }));
}

function createFaqDocuments(pillar: PillarKey, faqs: LegacyRichPillarSeed["faqs"]): CmsFaqItemDocument[] {
  return faqs.map((faq, index) => ({
    ...createDocumentBase("faqItem", `faq.${pillar}.${slugify(faq.question)}`),
    answer: faq.answer,
    category: "general",
    order: index + 1,
    pillar,
    question: faq.question,
    seoRelevant: true,
    visible: true,
  }));
}

function createOfferFormatDocuments(
  pillar: PillarKey,
  formats: OfferFormat[],
  nextStepCtaId: string,
): CmsOfferFormatDocument[] {
  return formats.map((format, index) => ({
    ...createDocumentBase("offerFormat", `offerFormat.${pillar}.${slugify(format.title)}`),
    bestFit: format.idealFor,
    entryLevel: index === 0 ? "entry" : index === formats.length - 1 ? "premium" : "core",
    expectedOutcome: format.outcome,
    nextStepCtaId,
    pillar,
    scope: format.description,
    shortDescription: format.description,
    slug: slugify(format.title),
    title: format.title,
    visibleOnSite: true,
  }));
}

function createAudienceDocuments(
  pillar: PillarKey,
  audiences: AudienceProfile[],
  bestEntryOfferId?: string,
): CmsAudienceCardDocument[] {
  return audiences.map((audience, index) => ({
    ...createDocumentBase("audienceCard", `audience.${pillar}.${slugify(audience.title)}`),
    description: audience.description,
    order: index + 1,
    painPoints: audience.signals,
    pillar,
    title: audience.title,
    ...(bestEntryOfferId ? { bestEntryOfferId } : {}),
  }));
}

function createServiceDocuments(
  pillar: PillarKey,
  category: CmsServiceGroup,
  services: ServiceCard[],
  relatedCaseStudyIds: string[],
  relatedOfferFormatIds: string[],
  relatedCtaId: string,
): CmsServiceDocument[] {
  return services.map((service) => {
    const serviceSlug = `${slugify(category)}-${slugify(service.title)}`;

    return {
      ...createDocumentBase("service", `service.${pillar}.${serviceSlug}`),
      benefits: service.tags,
      category,
      description: service.description,
      pillar,
      relatedCaseStudyIds,
      relatedCtaId,
      relatedOfferFormatIds,
      seo: createSeo(
        `${service.title} | ${pillar} | Mula Group`,
        service.description,
        `https://${pillar}.mulagroup.eu/#${serviceSlug}`,
        "Service",
      ),
      shortDescription: service.description,
      slug: serviceSlug,
      title: service.title,
      ...(service.bestFor ? { bestFor: service.bestFor } : {}),
    };
  });
}

function createIntroSection(id: string, section: PortalNarrativeSection): CmsIntroSectionBlock {
  return {
    ...createSectionLead(section.lead),
    cards: section.cards.map(createFeatureItem),
    id,
    layoutVariant: "cards",
    principles: section.principles,
    sectionType: "intro",
    themeVariant: "dark",
    visible: true,
  };
}

function createFeatureGridSection(
  id: string,
  lead: SectionLead,
  items: CmsFeatureItem[],
  sectionType: CmsFeatureGridSectionBlock["sectionType"],
  themeVariant: CmsFeatureGridSectionBlock["themeVariant"] = "dark",
  principles?: string[],
): CmsFeatureGridSectionBlock {
  return {
    ...createSectionLead(lead),
    id,
    items,
    sectionType,
    themeVariant,
    visible: true,
    ...(principles ? { principles } : {}),
  };
}

function createServiceGridSection(
  id: string,
  lead: SectionLead,
  group: CmsServiceGroup,
  serviceIds: string[],
  bestForLabel?: string,
): CmsServiceGridSectionBlock {
  return {
    ...createSectionLead(lead),
    group,
    id,
    serviceIds,
    sectionType: "serviceGrid",
    themeVariant: "dark",
    visible: true,
    ...(bestForLabel ? { bestForLabel } : {}),
  };
}

function createContactSection(
  lead: SectionLead,
  formId: string,
  primaryCtaId: string,
  secondaryCtaId: string | undefined,
  signals: string[],
): CmsContactSectionBlock {
  return {
    ...createSectionLead(lead),
    formId,
    id: "contact",
    primaryCtaId,
    sectionType: "contactBlock",
    signals,
    themeVariant: "dark",
    visible: true,
    ...(secondaryCtaId ? { secondaryCtaId } : {}),
  };
}

const caseStudyIdsByPillar = Object.fromEntries(
  PILLAR_ORDER.map((pillar) => [
    pillar,
    caseStudyDocuments
      .filter((caseStudy) => caseStudy.pillarsInvolved.some((involvedPillar) => involvedPillar === pillar))
      .map((caseStudy) => caseStudy._id),
  ]),
) as Record<PillarKey, string[]>;

function buildPortalContent(
  pillarLinks: CmsFooterDocument["linkGroups"][number]["links"],
): {
  ctas: CmsCtaDocument[];
  footer: CmsFooterDocument;
  forms: CmsFormDefinitionDocument[];
  navigation: CmsNavigationDocument;
  page: CmsPageDocument;
  processSteps: CmsProcessStepDocument[];
} {
  const headerCta = createCtaDocument(
    "cta.portal.header.primary",
    portalManifest.headerCta.label,
    portalManifest.headerCta.href,
    "portal.header.primary",
    "primary",
    "portal",
  );
  const heroPrimaryCta = createCtaDocument(
    "cta.portal.hero.primary",
    portalManifest.hero.primaryCta.label,
    portalManifest.hero.primaryCta.href,
    "portal.hero.primary",
    "primary",
    "portal",
  );
  const heroSecondaryCta = createCtaDocument(
    "cta.portal.hero.secondary",
    portalManifest.hero.secondaryCta.label,
    portalManifest.hero.secondaryCta.href,
    "portal.hero.secondary",
    "secondary",
    "portal",
  );
  const finalPrimaryCta = createCtaDocument(
    "cta.portal.contact.primary",
    portalManifest.finalCta.primaryCta.label,
    portalManifest.finalCta.primaryCta.href,
    "portal.contact.primary",
    "primary",
    "portal",
  );
  const finalSecondaryCta = createCtaDocument(
    "cta.portal.contact.secondary",
    portalManifest.finalCta.secondaryCta.label,
    portalManifest.finalCta.secondaryCta.href,
    "portal.contact.secondary",
    "secondary",
    "portal",
  );

  const navigation = createNavigationDocument(portalManifest, headerCta._id);
  const footer = createFooterDocument(portalManifest, pillarLinks);
  const form = createFormDefinition("portal", portalManifest.partnershipPrompt, [...PILLAR_ORDER]);
  const processSteps = createProcessDocuments("portal", portalManifest.operatingModel);

  const page: CmsPageDocument = {
    ...createDocumentBase("page", "page.portal.home"),
    footerId: footer._id,
    hero: createHeroBlock(portalManifest, heroPrimaryCta._id, heroSecondaryCta._id),
    navigationId: navigation._id,
    order: 1,
    pageType: "homepage",
    published: true,
    sections: [
      {
        ...createSectionLead(portalManifest.about.lead),
        cards: portalManifest.about.cards.map(createFeatureItem),
        id: "about",
        layoutVariant: "cards",
        principles: portalManifest.about.principles,
        sectionType: "intro",
        themeVariant: "light",
        visible: true,
      },
      {
        ...createSectionLead(portalManifest.ecosystemIntro),
        id: "ecosystem",
        pillarKeys: [...PILLAR_ORDER],
        sectionType: "pillarGrid",
        themeVariant: "dark",
        visible: true,
      },
      {
        ...createSectionLead(portalManifest.capabilitiesIntro),
        id: "capabilities",
        items: portalManifest.capabilityClusters.map(createFeatureItem),
        sectionType: "capabilities",
        themeVariant: "light",
        visible: true,
      },
      {
        ...createSectionLead(portalManifest.operatingModelIntro),
        id: "operating-model",
        sectionType: "processSteps",
        stepIds: processSteps.map((step) => step._id),
        themeVariant: "dark",
        visible: true,
      },
      {
        ...createSectionLead(portalManifest.partnerships.lead),
        id: "partnerships",
        items: portalManifest.partnerships.models.map(createFeatureItem),
        principles: portalManifest.partnerships.principles,
        sectionType: "partnerships",
        themeVariant: "dark",
        visible: true,
      },
      {
        ...createSectionLead({
          description: "Quantified trust signals describing the shape of the ecosystem.",
          eyebrow: "Ecosystem metrics",
          title: "Signals behind the ecosystem model",
        }),
        id: "metrics",
        items: portalManifest.stats.map(createMetricItem),
        sectionType: "metrics",
        themeVariant: "dark",
        visible: true,
      },
      createContactSection(
        {
          description: portalManifest.finalCta.description,
          eyebrow: portalManifest.finalCta.eyebrow,
          title: portalManifest.finalCta.title,
        },
        form._id,
        finalPrimaryCta._id,
        finalSecondaryCta._id,
        portalManifest.finalCta.signals,
      ),
    ],
    seo: createSeo(
      "Mula Group | Integrated business ecosystem",
      portalManifest.summary,
      portalManifest.url,
    ),
    siteKey: "portal",
    slug: "/",
    summary: portalManifest.summary,
    title: portalManifest.name,
  };

  return {
    ctas: [headerCta, heroPrimaryCta, heroSecondaryCta, finalPrimaryCta, finalSecondaryCta],
    footer,
    forms: [form],
    navigation,
    page,
    processSteps,
  };
}

function buildRichPillarContent(
  site: LegacyRichPillarSeed,
  pillarLinks: CmsFooterDocument["linkGroups"][number]["links"],
): {
  audienceCards: CmsAudienceCardDocument[];
  ctas: CmsCtaDocument[];
  faqItems: CmsFaqItemDocument[];
  footer: CmsFooterDocument;
  forms: CmsFormDefinitionDocument[];
  navigation: CmsNavigationDocument;
  offerFormats: CmsOfferFormatDocument[];
  page: CmsPageDocument;
  pillar: CmsPillarDocument;
  processSteps: CmsProcessStepDocument[];
  services: CmsServiceDocument[];
} {
  const pillarKey = site.key as PillarKey;
  const config = richPillarConfigs[pillarKey];
  const heroSecondaryCtaSource = site.hero.secondaryCta;
  const finalSecondaryCtaSource = site.finalCta.secondaryCta;

  const headerCta = createCtaDocument(
    `cta.${pillarKey}.header.primary`,
    site.headerCta.label,
    site.headerCta.href,
    `${pillarKey}.header.primary`,
    "primary",
    pillarKey,
  );
  const heroPrimaryCta = createCtaDocument(
    `cta.${pillarKey}.hero.primary`,
    site.hero.primaryCta.label,
    site.hero.primaryCta.href,
    `${pillarKey}.hero.primary`,
    "primary",
    pillarKey,
  );
  const heroSecondaryCta = createCtaDocument(
    `cta.${pillarKey}.hero.secondary`,
    heroSecondaryCtaSource.label,
    heroSecondaryCtaSource.href,
    `${pillarKey}.hero.secondary`,
    "secondary",
    pillarKey,
  );
  const finalPrimaryCta = createCtaDocument(
    `cta.${pillarKey}.contact.primary`,
    site.finalCta.primaryCta.label,
    site.finalCta.primaryCta.href,
    `${pillarKey}.contact.primary`,
    "primary",
    pillarKey,
  );
  const finalSecondaryCta = createCtaDocument(
    `cta.${pillarKey}.contact.secondary`,
    finalSecondaryCtaSource.label,
    finalSecondaryCtaSource.href,
    `${pillarKey}.contact.secondary`,
    "secondary",
    pillarKey,
  );

  const navigation = createNavigationDocument(site, headerCta._id);
  const footer = createFooterDocument(site, pillarLinks);
  const form = createFormDefinition(
    pillarKey,
    site.inquiry,
    site.integrations.map((integration) => integration.pillar as PillarKey),
  );
  const offerFormats = createOfferFormatDocuments(pillarKey, site.formats, finalPrimaryCta._id);
  const audienceCards = createAudienceDocuments(pillarKey, site.audiences, offerFormats[0]?._id);
  const processSteps = createProcessDocuments(pillarKey, site.process, pillarKey);
  const faqItems = createFaqDocuments(pillarKey, site.faqs);
  const coreServices = createServiceDocuments(
    pillarKey,
    "core",
    site.services,
    caseStudyIdsByPillar[pillarKey],
    offerFormats.map((format) => format._id),
    finalPrimaryCta._id,
  );
  const extraServices = config.extraServiceSection
    ? createServiceDocuments(
        pillarKey,
        config.extraServiceSection.group,
        config.extraServiceSection.services,
        caseStudyIdsByPillar[pillarKey],
        offerFormats.map((format) => format._id),
        finalPrimaryCta._id,
      )
    : [];

  const pillar: CmsPillarDocument = {
    ...createDocumentBase("pillar", `pillar.${pillarKey}`),
    accentLabel: site.accentLabel,
    coreServiceIds: coreServices.map((service) => service._id),
    key: pillarKey,
    leadCtaId: headerCta._id,
    longDescription: site.hero.description,
    mediumDescription: site.intro.lead.description,
    name: site.name,
    offerFormatIds: offerFormats.map((format) => format._id),
    positioning: site.tagline,
    primaryAudience: site.audiences.map((audience) => audience.title),
    seo: createSeo(site.seo.title, site.summary, site.url, "Service"),
    shortDescription: site.summary,
    slug: pillarKey,
    subdomain: `${pillarKey}.mulagroup.eu`,
    summary: site.summary,
    tagline: site.tagline,
    themeAccent: pillarKey,
    url: site.url,
  };

  const sections: CmsPageDocument["sections"] = [
    createIntroSection("overview", site.intro),
    createServiceGridSection(
      "services",
      site.servicesIntro,
      "core",
      coreServices.map((service) => service._id),
    ),
    {
      ...createSectionLead(site.audiencesIntro),
      audienceIds: audienceCards.map((audience) => audience._id),
      id: "fit",
      sectionType: "audienceCards",
      themeVariant: "dark",
      visible: true,
    },
    {
      ...createSectionLead(site.processIntro),
      id: "process",
      sectionType: "processSteps",
      stepIds: processSteps.map((step) => step._id),
      themeVariant: "dark",
      visible: true,
    },
    {
      ...createSectionLead(site.formatsIntro),
      formatIds: offerFormats.map((format) => format._id),
      id: "formats",
      sectionType: "offerFormats",
      themeVariant: "dark",
      visible: true,
    },
    createFeatureGridSection(
      "differentiators",
      site.differentiatorsIntro,
      site.differentiators.map(createFeatureItem),
      "differentiators",
    ),
    {
      ...createSectionLead(site.crossPillarIntro),
      id: "connections",
      items: site.integrations.map((integration) => ({
        description: integration.description,
        href: integration.href,
        pillar: integration.pillar as PillarKey,
        title: integration.title,
      })),
      sectionType: "connections",
      themeVariant: "dark",
      visible: true,
      ...(config.leadingLabels ? { leadingLabels: config.leadingLabels } : {}),
    },
    {
      ...createSectionLead(site.faqsIntro),
      faqIds: faqItems.map((faq) => faq._id),
      id: "faq",
      sectionType: "faq",
      themeVariant: "dark",
      visible: true,
    },
    createContactSection(
      {
        description: site.finalCta.description,
        eyebrow: site.finalCta.eyebrow,
        title: site.finalCta.title,
      },
      form._id,
      finalPrimaryCta._id,
      finalSecondaryCta._id,
      site.finalCta.signals,
    ),
  ];

  if (config.extraServiceSection) {
    sections.splice(
      2,
      0,
      createServiceGridSection(
        config.extraServiceSection.id,
        config.extraServiceSection.lead,
        config.extraServiceSection.group,
        extraServices.map((service) => service._id),
        config.extraServiceSection.bestForLabel,
      ),
    );
  }

  const page: CmsPageDocument = {
    ...createDocumentBase("page", `page.${site.key}.home`),
    footerId: footer._id,
    hero: createHeroBlock(site, heroPrimaryCta._id, heroSecondaryCta._id),
    navigationId: navigation._id,
    order: 1,
    pageType: "pillar",
    pillar: pillarKey,
    published: true,
    sections,
    seo: createSeo(site.seo.title, site.summary, site.url),
    siteKey: pillarKey,
    slug: "/",
    summary: site.summary,
    title: site.name,
  };

  return {
    audienceCards,
    ctas: [headerCta, heroPrimaryCta, heroSecondaryCta, finalPrimaryCta, finalSecondaryCta],
    faqItems,
    footer,
    forms: [form],
    navigation,
    offerFormats,
    page,
    pillar,
    processSteps,
    services: [...coreServices, ...extraServices],
  };
}

const pillarFooterLinks = pillarSeeds.map((pillar) => ({
  label: pillar.name,
  pillarReference: pillar.key as PillarKey,
  target: "same-tab" as const,
  url: pillar.url,
}));

const portalContent = buildPortalContent(pillarFooterLinks);
const pillarContent = pillarSeeds.map((site) => buildRichPillarContent(site, pillarFooterLinks));

export const cmsContentStore: CmsContentStore = {
  articles: articleDocuments,
  audienceCards: pillarContent.flatMap((item) => item.audienceCards),
  caseStudies: caseStudyDocuments,
  ctas: [...portalContent.ctas, ...pillarContent.flatMap((item) => item.ctas)],
  faqItems: pillarContent.flatMap((item) => item.faqItems),
  footers: [portalContent.footer, ...pillarContent.map((item) => item.footer)],
  forms: [...portalContent.forms, ...pillarContent.flatMap((item) => item.forms)],
  navigations: [portalContent.navigation, ...pillarContent.map((item) => item.navigation)],
  offerFormats: pillarContent.flatMap((item) => item.offerFormats),
  pages: [portalContent.page, ...pillarContent.map((item) => item.page)],
  pillars: pillarContent.map((item) => item.pillar),
  processSteps: [
    ...portalContent.processSteps,
    ...pillarContent.flatMap((item) => item.processSteps),
  ],
  services: pillarContent.flatMap((item) => item.services),
  settings: {
    ...createDocumentBase("siteSettings", "siteSettings.mulagroup"),
    analyticsConfig: {},
    contactEmail: DEFAULT_CONTACT_EMAIL,
    crmConfig: {},
    defaultLanguage: DEFAULT_LANGUAGE,
    defaultOgImage: "/brand/logos/mula-group-white.png",
    defaultSeo: createSeo(
      "Mula Group | Integrated business ecosystem",
      portalManifest.summary,
      portalManifest.url,
      "Organization",
    ),
    formWebhookConfig: {},
    siteName: "Mula Group",
    siteTagline: "Integrated business ecosystem",
    socialLinks: [],
  } satisfies CmsSiteSettingsDocument,
};

export const cmsContentValidationReport = assertCmsContentStore(cmsContentStore);
