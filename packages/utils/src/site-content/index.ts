import {
  getCmsCollectionSummary,
  getCmsFooterForSite,
  getCmsSchemaDefinitions,
  getCmsSiteSettings,
  getCmsContentStore,
  getCmsValidationReport,
  listCmsArticles,
  listCmsCaseStudies,
  resolveCmsPage,
  type CmsResolvedPage,
  type CmsResolvedSectionBlock,
} from "@mulagroup/cms";
import type {
  AppLocale,
  AudienceProfile,
  CommerceManifest,
  CtaLink,
  DigitalManifest,
  FaqItem,
  IndustryManifest,
  InquiryFormConfig,
  LifestyleManifest,
  OfferFormat,
  PillarCardSummary,
  PillarKey,
  PillarManifest,
  PortalFinalCta,
  PortalManifest,
  ProcessStep,
  ProjectsManifest,
  RichPillarManifest,
  SectionLead,
  ServiceCard,
  SiteKey,
  SiteManifest,
  StrategyManifest,
  TaggedFeatureCard,
} from "@mulagroup/content-models";

import {
  buildLocaleLinks,
  buildSiteLocaleUrl,
  DEFAULT_LOCALE,
  getSiteBaseUrl,
  getSiteChromeCopy,
  getSharedUiCopy,
  localizeSiteHref,
} from "../i18n";
import {
  type DeepPartial,
  getLocalizedFooterOverride,
  getLocalizedSettings,
  getSiteLocalization,
  mergeDeep,
} from "./localization";

export type FooterContentModel = {
  bottomTextPrimary: string;
  bottomTextSecondary: string;
  contactBlock: {
    email?: string;
    website?: string;
  };
  legalLinks: {
    href: string;
    label: string;
  }[];
  linkGroups: {
    links: {
      href: string;
      label: string;
    }[];
    title: string;
  }[];
  shortDescription: string;
  socialLinks: {
    label: string;
    url: string;
  }[];
  title: string;
};

type LocalizedSiteCache = {
  pillarCards: PillarCardSummary[];
  pillarManifests: Record<PillarKey, PillarManifest>;
  portalManifest: PortalManifest;
  siteManifests: Record<SiteKey, SiteManifest>;
};

const localizedSiteCache = new Map<AppLocale, LocalizedSiteCache>();

function mapLead(section: {
  eyebrow: string;
  intro: string;
  title: string;
}): SectionLead {
  return {
    description: section.intro,
    eyebrow: section.eyebrow,
    title: section.title,
  };
}

function mapCta(cta: { label: string; url: string } | undefined, locale: AppLocale): CtaLink {
  if (!cta) {
    throw new Error("Missing CMS CTA during site content mapping.");
  }

  return {
    href: localizeSiteHref(cta.url, locale),
    label: cta.label,
  };
}

function mapTaggedItems(
  items: {
    description: string;
    tags?: string[];
    title: string;
  }[],
): TaggedFeatureCard[] {
  return items.map((item) => ({
    description: item.description,
    tags: item.tags ?? [],
    title: item.title,
  }));
}

function mapServiceCards(services: {
  benefits: string[];
  bestFor?: string;
  description: string;
  title: string;
}[]): ServiceCard[] {
  return services.map((service) => ({
    description: service.description,
    ...(service.bestFor ? { bestFor: service.bestFor } : {}),
    tags: service.benefits,
    title: service.title,
  }));
}

function mapProcessSteps(
  steps: {
    description: string;
    stepNumber: number;
    title: string;
  }[],
): ProcessStep[] {
  return steps.map((step) => ({
    description: step.description,
    step: String(step.stepNumber).padStart(2, "0"),
    title: step.title,
  }));
}

function mapOfferFormats(
  formats: {
    bestFit: string;
    expectedOutcome: string;
    scope: string;
    title: string;
  }[],
): OfferFormat[] {
  return formats.map((format) => ({
    description: format.scope,
    idealFor: format.bestFit,
    outcome: format.expectedOutcome,
    title: format.title,
  }));
}

function mapFaqItems(
  faqs: {
    answer: string;
    question: string;
  }[],
): FaqItem[] {
  return faqs.map((faq) => ({
    answer: faq.answer,
    question: faq.question,
  }));
}

function mapAudienceProfiles(
  audiences: {
    description: string;
    painPoints: string[];
    title: string;
  }[],
): AudienceProfile[] {
  return audiences.map((audience) => ({
    description: audience.description,
    signals: audience.painPoints,
    title: audience.title,
  }));
}

function mapInquiryForm(
  siteKey: SiteKey,
  locale: AppLocale,
  form?: {
    _id: string;
    errorMessage: string;
    fields: {
      label: string;
      name: string;
      options?: { label: string; value: string }[];
      placeholder?: string;
      required: boolean;
      type: "checkbox" | "email" | "phone" | "select" | "text" | "textarea";
      validationRule?: string;
    }[];
    intro: string;
    note: string;
    slug: string;
    submitLabel: string;
    successMessage: string;
    title: string;
    trackingName: string;
  },
): InquiryFormConfig {
  if (!form) {
    throw new Error("Missing CMS form definition during site content mapping.");
  }

  const requiredFields = ["name", "email", "message"] as const;

  if (!requiredFields.every((fieldName) => form.fields.some((field) => field.name === fieldName))) {
    throw new Error(`CMS form "${form.title}" is missing one of the required core fields.`);
  }

  return {
    description: form.intro,
    endpoint: "/api/inquiry",
    errorMessage: form.errorMessage,
    fields: form.fields.map((field) => ({
      label: field.label,
      name: field.name,
      ...(field.options ? { options: field.options } : {}),
      ...(field.placeholder ? { placeholder: field.placeholder } : {}),
      required: field.required,
      type: field.type,
      ...(field.validationRule ? { validationRule: field.validationRule } : {}),
    })),
    formId: form._id,
    locale,
    note: form.note,
    siteKey,
    slug: form.slug,
    submitLabel: form.submitLabel,
    successMessage: form.successMessage,
    title: form.title,
    trackingName: form.trackingName,
  };
}

function mapFinalCta(
  locale: AppLocale,
  section: Extract<CmsResolvedSectionBlock, { sectionType: "contactBlock" }>,
): PortalFinalCta {
  return {
    description: section.intro,
    eyebrow: section.eyebrow,
    primaryCta: mapCta(section.primaryCta, locale),
    ...(section.secondaryCta ? { secondaryCta: mapCta(section.secondaryCta, locale) } : {}),
    signals: section.signals,
    title: section.title,
  };
}

function requireSection<TSectionType extends CmsResolvedSectionBlock["sectionType"]>(
  page: CmsResolvedPage,
  id: string,
  sectionType: TSectionType,
): Extract<CmsResolvedSectionBlock, { sectionType: TSectionType }> {
  const section = page.sections.find(
    (currentSection) => currentSection.id === id && currentSection.sectionType === sectionType,
  );

  if (!section) {
    throw new Error(`Missing CMS section "${id}" of type "${sectionType}" for site "${page.page.siteKey}".`);
  }

  return section as Extract<CmsResolvedSectionBlock, { sectionType: TSectionType }>;
}

function localizeBaseSite<TSite extends SiteManifest>(site: TSite, locale: AppLocale): TSite {
  const siteLocalization = getSiteLocalization(site.key, locale) as DeepPartial<TSite>;
  const localizedSite = mergeDeep(site, siteLocalization);

  const nextSite = {
    ...localizedSite,
    headerCta: {
      ...localizedSite.headerCta,
      href: localizeSiteHref(localizedSite.headerCta.href, locale),
    },
    homeHref: `/${locale}`,
    locale,
    localeLinks: buildLocaleLinks(localizedSite.key, locale),
    navigation: localizedSite.navigation.map((item) => ({
      ...item,
      href: localizeSiteHref(item.href, locale),
    })),
    url: buildSiteLocaleUrl(localizedSite.key, locale),
  } as TSite;

  if (nextSite.type === "portal") {
    return {
      ...nextSite,
      finalCta: {
        ...nextSite.finalCta,
        primaryCta: {
          ...nextSite.finalCta.primaryCta,
          href: localizeSiteHref(nextSite.finalCta.primaryCta.href, locale),
        },
        ...(nextSite.finalCta.secondaryCta
          ? {
              secondaryCta: {
                ...nextSite.finalCta.secondaryCta,
                href: localizeSiteHref(nextSite.finalCta.secondaryCta.href, locale),
              },
            }
          : {}),
      },
      hero: {
        ...nextSite.hero,
        primaryCta: {
          ...nextSite.hero.primaryCta,
          href: localizeSiteHref(nextSite.hero.primaryCta.href, locale),
        },
        secondaryCta: {
          ...nextSite.hero.secondaryCta,
          href: localizeSiteHref(nextSite.hero.secondaryCta.href, locale),
        },
      },
      partnershipPrompt: {
        ...nextSite.partnershipPrompt,
        locale,
      },
      pillars: nextSite.pillars.map((pillar) => ({
        ...pillar,
        href: localizeSiteHref(pillar.href, locale),
      })),
    } as TSite;
  }

  const richPillar = nextSite as RichPillarManifest;

  return {
    ...richPillar,
    finalCta: {
      ...richPillar.finalCta,
      primaryCta: {
        ...richPillar.finalCta.primaryCta,
        href: localizeSiteHref(richPillar.finalCta.primaryCta.href, locale),
      },
      ...(richPillar.finalCta.secondaryCta
        ? {
            secondaryCta: {
              ...richPillar.finalCta.secondaryCta,
              href: localizeSiteHref(richPillar.finalCta.secondaryCta.href, locale),
            },
          }
        : {}),
    },
    hero: {
      ...richPillar.hero,
      primaryCta: {
        ...richPillar.hero.primaryCta,
        href: localizeSiteHref(richPillar.hero.primaryCta.href, locale),
      },
      ...(richPillar.hero.secondaryCta
        ? {
            secondaryCta: {
              ...richPillar.hero.secondaryCta,
              href: localizeSiteHref(richPillar.hero.secondaryCta.href, locale),
            },
          }
        : {}),
    },
    inquiry: {
      ...richPillar.inquiry,
      locale,
    },
    integrations: richPillar.integrations.map((integration) => ({
      ...integration,
      href: localizeSiteHref(integration.href, locale),
    })),
  } as TSite;
}

function mapRichPillarBase(page: CmsResolvedPage, locale: AppLocale): RichPillarManifest {
  const overview = requireSection(page, "overview", "intro");
  const services = requireSection(page, "services", "serviceGrid");
  const fit = requireSection(page, "fit", "audienceCards");
  const process = requireSection(page, "process", "processSteps");
  const formats = requireSection(page, "formats", "offerFormats");
  const differentiators = requireSection(page, "differentiators", "differentiators");
  const connections = requireSection(page, "connections", "connections");
  const faq = requireSection(page, "faq", "faq");
  const contact = requireSection(page, "contact", "contactBlock");
  const pillar = page.pillar;
  const headerCta = page.navigation?.primaryCta ?? page.hero.primaryCta;

  if (!pillar) {
    throw new Error(`Missing CMS pillar document for site "${page.page.siteKey}".`);
  }

  return {
    accentLabel: pillar.accentLabel,
    audiences: mapAudienceProfiles(fit.audiences),
    audiencesIntro: mapLead(fit),
    crossPillarIntro: mapLead(connections),
    differentiators: mapTaggedItems(differentiators.items),
    differentiatorsIntro: mapLead(differentiators),
    faqs: mapFaqItems(faq.faqs),
    faqsIntro: mapLead(faq),
    finalCta: mapFinalCta(locale, contact),
    formats: mapOfferFormats(formats.formats),
    formatsIntro: mapLead(formats),
    headerCta: mapCta(headerCta, locale),
    hero: {
      description: page.hero.subheadline,
      eyebrow: page.hero.label ?? pillar.accentLabel,
      highlights: page.hero.highlights ?? [],
      insights: (page.hero.insights ?? []).map((item) => ({
        description: item.description,
        title: item.title,
      })),
      primaryCta: mapCta(page.hero.primaryCta, locale),
      secondaryCta: mapCta(page.hero.secondaryCta, locale),
      title: page.hero.headline,
    },
    homeHref: `/${locale}`,
    inquiry: mapInquiryForm(page.page.siteKey, locale, contact.form),
    integrations: connections.items.map((item) => ({
      description: item.description,
      href: localizeSiteHref(item.href, locale),
      pillar: item.pillar,
      title: item.title,
    })),
    intro: {
      cards: overview.cards.map((item) => ({
        description: item.description,
        title: item.title,
      })),
      lead: mapLead(overview),
      principles: overview.principles,
    },
    key: pillar.key,
    locale,
    localeLinks: buildLocaleLinks(pillar.key, locale),
    name: pillar.name,
    navigation: (page.navigation?.items ?? []).map((item) => ({
      href: localizeSiteHref(item.url, locale),
      label: item.label,
    })),
    process: mapProcessSteps(process.steps),
    processIntro: mapLead(process),
    seo: {
      description: page.page.seo.metaDescription,
      title: page.page.seo.metaTitle,
    },
    services: mapServiceCards(services.services),
    servicesIntro: mapLead(services),
    summary: page.page.summary,
    tagline: pillar.tagline,
    theme: pillar.key,
    type: "pillar",
    url: buildSiteLocaleUrl(pillar.key, locale),
  };
}

function buildPillarCardSummaryFromManifest(site: RichPillarManifest): PillarCardSummary {
  return {
    accentLabel: site.accentLabel,
    capabilities: site.services
      .flatMap((service) => service.tags)
      .filter((capability, index, list) => list.indexOf(capability) === index)
      .slice(0, 3),
    href: site.url,
    key: site.key as PillarKey,
    name: site.name,
    summary: site.summary,
  };
}

function mapFooterContent(siteKey: SiteKey, locale: AppLocale): FooterContentModel {
  const footer = getCmsFooterForSite(siteKey);

  if (!footer) {
    throw new Error(`Missing CMS footer for site "${siteKey}".`);
  }

  const localizedFooter = mergeDeep(
    {
      bottomTextPrimary: footer.bottomTextPrimary,
      bottomTextSecondary: footer.bottomTextSecondary,
      contactBlock: {
        ...footer.contactBlock,
        ...(footer.contactBlock.website
          ? { website: localizeSiteHref(footer.contactBlock.website, locale) }
          : {}),
      },
      legalLinks: footer.legalLinks.map((link) => ({
        href: localizeSiteHref(link.url, locale),
        label: link.label,
      })),
      linkGroups: footer.linkGroups.map((group) => ({
        links: group.links.map((link) => ({
          href: localizeSiteHref(link.url, locale),
          label: link.label,
        })),
        title: group.title,
      })),
      shortDescription: footer.shortDescription,
      socialLinks: footer.socialLinks.map((link) => ({
        label: link.label,
        url: link.url,
      })),
      title: footer.title,
    },
    getLocalizedFooterOverride(siteKey, locale),
  );

  return localizedFooter;
}

function buildPortalManifest(locale: AppLocale, pillarCards: PillarCardSummary[]): PortalManifest {
  const page = resolveCmsPage("portal");
  const about = requireSection(page, "about", "intro");
  const ecosystem = requireSection(page, "ecosystem", "pillarGrid");
  const capabilities = requireSection(page, "capabilities", "capabilities");
  const operatingModel = requireSection(page, "operating-model", "processSteps");
  const partnerships = requireSection(page, "partnerships", "partnerships");
  const metrics = requireSection(page, "metrics", "metrics");
  const contact = requireSection(page, "contact", "contactBlock");
  const settings = getCmsSiteSettings();

  const portal = localizeBaseSite(
    {
      about: {
        cards: about.cards.map((item) => ({
          description: item.description,
          title: item.title,
        })),
        lead: mapLead(about),
        principles: about.principles,
      },
      capabilitiesIntro: mapLead(capabilities),
      capabilityClusters: mapTaggedItems(capabilities.items),
      ecosystemIntro: mapLead(ecosystem),
      finalCta: mapFinalCta(locale, contact),
      headerCta: mapCta(page.navigation?.primaryCta ?? page.hero.primaryCta, locale),
      hero: {
        description: page.hero.subheadline,
        eyebrow:
          page.hero.label ??
          settings.siteTagline ??
          getSharedUiCopy(locale).header.integratedBusinessEcosystem,
        highlights: page.hero.highlights ?? [],
        primaryCta: mapCta(page.hero.primaryCta, locale),
        secondaryCta: mapCta(page.hero.secondaryCta, locale),
        title: page.hero.headline,
      },
      homeHref: `/${locale}`,
      key: "portal",
      locale,
      localeLinks: buildLocaleLinks("portal", locale),
      name: settings.siteName,
      navigation: (page.navigation?.items ?? []).map((item) => ({
        href: localizeSiteHref(item.url, locale),
        label: item.label,
      })),
      operatingModel: mapProcessSteps(operatingModel.steps),
      operatingModelIntro: mapLead(operatingModel),
      partnershipPrompt: mapInquiryForm(page.page.siteKey, locale, contact.form),
      partnerships: {
        lead: mapLead(partnerships),
        models: mapTaggedItems(partnerships.items),
        principles: partnerships.principles ?? [],
      },
      pillars: ecosystem.pillarKeys
        .map((key) => pillarCards.find((pillar) => pillar.key === key))
        .filter((pillar): pillar is PillarCardSummary => Boolean(pillar)),
      seo: {
        description: page.page.seo.metaDescription,
        title: page.page.seo.metaTitle,
      },
      stats: metrics.items.map((item) => ({
        description: item.description,
        label: item.label,
        value: item.value,
      })),
      summary: page.page.summary,
      tagline: settings.siteTagline ?? getSharedUiCopy(locale).header.integratedBusinessEcosystem,
      theme: "portal",
      type: "portal",
      url: buildSiteLocaleUrl("portal", locale),
    } satisfies PortalManifest,
    locale,
  );

  return portal;
}

function buildStrategyManifest(locale: AppLocale): StrategyManifest {
  return localizeBaseSite(mapRichPillarBase(resolveCmsPage("strategy"), locale), locale);
}

function buildDigitalManifest(locale: AppLocale): DigitalManifest {
  const page = resolveCmsPage("digital");
  const base = mapRichPillarBase(page, locale);
  const automation = requireSection(page, "ai-automation", "serviceGrid");

  return localizeBaseSite(
    {
      ...base,
      automationCapabilities: mapServiceCards(automation.services),
      automationIntro: mapLead(automation),
    },
    locale,
  );
}

function buildCommerceManifest(locale: AppLocale): CommerceManifest {
  const page = resolveCmsPage("commerce");
  const base = mapRichPillarBase(page, locale);
  const channels = requireSection(page, "channels", "serviceGrid");

  return localizeBaseSite(
    {
      ...base,
      channels: mapServiceCards(channels.services),
      channelsIntro: mapLead(channels),
    },
    locale,
  );
}

function buildIndustryManifest(locale: AppLocale): IndustryManifest {
  const page = resolveCmsPage("industry");
  const base = mapRichPillarBase(page, locale);
  const capabilities = requireSection(page, "capabilities", "serviceGrid");

  return localizeBaseSite(
    {
      ...base,
      capabilities: mapServiceCards(capabilities.services),
      capabilitiesIntro: mapLead(capabilities),
    },
    locale,
  );
}

function buildProjectsManifest(locale: AppLocale): ProjectsManifest {
  const page = resolveCmsPage("projects");
  const base = mapRichPillarBase(page, locale);
  const projectTypes = requireSection(page, "project-types", "serviceGrid");

  return localizeBaseSite(
    {
      ...base,
      projectTypes: mapServiceCards(projectTypes.services),
      projectTypesIntro: mapLead(projectTypes),
    },
    locale,
  );
}

function buildLifestyleManifest(locale: AppLocale): LifestyleManifest {
  const page = resolveCmsPage("lifestyle");
  const base = mapRichPillarBase(page, locale);
  const experienceTypes = requireSection(page, "experience-types", "serviceGrid");

  return localizeBaseSite(
    {
      ...base,
      experienceTypes: mapServiceCards(experienceTypes.services),
      experienceTypesIntro: mapLead(experienceTypes),
    },
    locale,
  );
}

function buildLocalizedSiteCache(locale: AppLocale): LocalizedSiteCache {
  const strategyManifest = buildStrategyManifest(locale);
  const digitalManifest = buildDigitalManifest(locale);
  const commerceManifest = buildCommerceManifest(locale);
  const industryManifest = buildIndustryManifest(locale);
  const projectsManifest = buildProjectsManifest(locale);
  const lifestyleManifest = buildLifestyleManifest(locale);

  const pillarManifests = {
    strategy: strategyManifest,
    digital: digitalManifest,
    commerce: commerceManifest,
    industry: industryManifest,
    projects: projectsManifest,
    lifestyle: lifestyleManifest,
  } satisfies Record<PillarKey, PillarManifest>;

  const pillarCards = Object.values(pillarManifests).map((site) =>
    buildPillarCardSummaryFromManifest(site as RichPillarManifest),
  );
  const portalManifest = buildPortalManifest(locale, pillarCards);

  return {
    pillarCards,
    pillarManifests,
    portalManifest,
    siteManifests: {
      portal: portalManifest,
      ...pillarManifests,
    },
  };
}

function getLocalizedSiteCache(locale: AppLocale) {
  const existingCache = localizedSiteCache.get(locale);

  if (existingCache) {
    return existingCache;
  }

  const nextCache = buildLocalizedSiteCache(locale);
  localizedSiteCache.set(locale, nextCache);
  return nextCache;
}

export function getPortalManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getLocalizedSiteCache(locale).portalManifest;
}

export function getPillarManifest(key: PillarKey, locale: AppLocale = DEFAULT_LOCALE) {
  return getLocalizedSiteCache(locale).pillarManifests[key];
}

export function getStrategyManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("strategy", locale) as StrategyManifest;
}

export function getDigitalManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("digital", locale) as DigitalManifest;
}

export function getCommerceManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("commerce", locale) as CommerceManifest;
}

export function getIndustryManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("industry", locale) as IndustryManifest;
}

export function getProjectsManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("projects", locale) as ProjectsManifest;
}

export function getLifestyleManifest(locale: AppLocale = DEFAULT_LOCALE) {
  return getPillarManifest("lifestyle", locale) as LifestyleManifest;
}

export function getSiteManifest(key: SiteKey, locale: AppLocale = DEFAULT_LOCALE) {
  return getLocalizedSiteCache(locale).siteManifests[key];
}

export function getPillarCards(locale: AppLocale = DEFAULT_LOCALE) {
  return getLocalizedSiteCache(locale).pillarCards;
}

export function getPillarManifests(locale: AppLocale = DEFAULT_LOCALE) {
  return Object.values(getLocalizedSiteCache(locale).pillarManifests);
}

export function getFooterContent(siteKey: SiteKey, locale: AppLocale = DEFAULT_LOCALE) {
  return mapFooterContent(siteKey, locale);
}

export function getGlobalSiteSettings(locale: AppLocale = DEFAULT_LOCALE) {
  const settings = getCmsSiteSettings();
  const localizedSettings = getLocalizedSettings(locale);

  if (!localizedSettings) {
    return settings;
  }

  return {
    ...settings,
    defaultSeo: {
      ...settings.defaultSeo,
      metaDescription: localizedSettings.defaultMetaDescription,
      ogDescription: localizedSettings.defaultMetaDescription,
    },
    siteTagline: localizedSettings.siteTagline,
  };
}

export function getCmsSchemaCatalog() {
  return getCmsSchemaDefinitions();
}

export function getCmsDeveloperSnapshot(locale: AppLocale = DEFAULT_LOCALE) {
  return {
    collections: getCmsCollectionSummary(),
    locale,
    settings: getGlobalSiteSettings(locale),
    totalSchemas: getCmsSchemaDefinitions().length,
    validation: getCmsValidationReport(),
  };
}

export function getCmsArticleStarters(pillar?: PillarKey) {
  return listCmsArticles(pillar);
}

export function getCmsCaseStudyStarters(pillar?: PillarKey) {
  return listCmsCaseStudies(pillar);
}

export function getRawCmsContentStore() {
  return getCmsContentStore();
}

export function buildSiteMetadata(site: SiteManifest) {
  const settings = getGlobalSiteSettings(site.locale);
  const copy = getSharedUiCopy(site.locale);
  const title =
    site.seo?.title ??
    (site.type === "portal"
      ? `${settings.siteName} | ${settings.siteTagline ?? copy.header.integratedBusinessEcosystem}`
      : site.locale === "pl"
        ? `${site.name} | ekosystem ${settings.siteName}`
        : `${site.name} | ${settings.siteName} ecosystem`);
  const description = site.seo?.description ?? site.summary;
  const defaultOgImage = settings.defaultOgImage
    ? new URL(settings.defaultOgImage, getSiteBaseUrl(site.key)).toString()
    : undefined;

  return {
    title,
    description,
    metadataBase: new URL(getSiteBaseUrl(site.key)),
    alternates: {
      canonical: site.url,
      languages: {
        en: buildSiteLocaleUrl(site.key, "en"),
        pl: buildSiteLocaleUrl(site.key, "pl"),
      },
    },
    openGraph: {
      description,
      ...(defaultOgImage ? { images: [defaultOgImage] } : {}),
      locale: site.locale === "pl" ? "pl_PL" : "en_US",
      siteName: settings.siteName,
      title,
      type: "website",
      url: site.url,
    },
    twitter: {
      card: "summary_large_image",
      description,
      ...(defaultOgImage ? { images: [defaultOgImage] } : {}),
      title,
    },
  };
}

export function getSiteChrome(siteKey: Exclude<SiteKey, "portal">, locale: AppLocale = DEFAULT_LOCALE) {
  return getSiteChromeCopy(siteKey, locale);
}
