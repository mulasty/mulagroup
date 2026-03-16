import type { PillarKey, SiteKey } from "@mulagroup/content-models";

import { cmsContentStore, cmsContentValidationReport } from "../migrations/from-legacy";
import { documentSchemas } from "../schema/documents";
import { objectSchemas } from "../schema/objects";
import type {
  CmsArticleDocument,
  CmsAudienceCardsSectionBlock,
  CmsConnectionsSectionBlock,
  CmsContactSectionBlock,
  CmsContentStore,
  CmsCtaDocument,
  CmsCustomRichTextSectionBlock,
  CmsFaqItemDocument,
  CmsFaqSectionBlock,
  CmsFeatureGridSectionBlock,
  CmsFooterDocument,
  CmsFormDefinitionDocument,
  CmsHeroBlock,
  CmsIntroSectionBlock,
  CmsMetricsSectionBlock,
  CmsNavigationDocument,
  CmsOfferFormatDocument,
  CmsOfferFormatsSectionBlock,
  CmsPageDocument,
  CmsPillarDocument,
  CmsPillarGridSectionBlock,
  CmsProcessStepDocument,
  CmsProcessStepsSectionBlock,
  CmsSchemaDefinition,
  CmsSectionBlock,
  CmsServiceDocument,
  CmsServiceGridSectionBlock,
  CmsSiteSettingsDocument,
} from "../types";

type CmsResolvedHeroBlock = Omit<CmsHeroBlock, "primaryCtaId" | "secondaryCtaId"> & {
  primaryCta: CmsCtaDocument | undefined;
  secondaryCta: CmsCtaDocument | undefined;
};

type CmsResolvedNavigationDocument = CmsNavigationDocument & {
  primaryCta: CmsCtaDocument | undefined;
};

type CmsResolvedIntroSectionBlock = Omit<CmsIntroSectionBlock, never>;
type CmsResolvedPillarGridSectionBlock = Omit<CmsPillarGridSectionBlock, never>;
type CmsResolvedCapabilitiesSectionBlock = Omit<CmsFeatureGridSectionBlock, "sectionType"> & {
  sectionType: "capabilities";
};
type CmsResolvedDifferentiatorsSectionBlock = Omit<CmsFeatureGridSectionBlock, "sectionType"> & {
  sectionType: "differentiators";
};
type CmsResolvedPartnershipsSectionBlock = Omit<CmsFeatureGridSectionBlock, "sectionType"> & {
  sectionType: "partnerships";
};
type CmsResolvedMetricsSectionBlock = Omit<CmsMetricsSectionBlock, never>;
type CmsResolvedConnectionsSectionBlock = Omit<CmsConnectionsSectionBlock, never>;
type CmsResolvedCustomRichTextSectionBlock = Omit<CmsCustomRichTextSectionBlock, never>;

type CmsResolvedServiceGridSectionBlock = Omit<CmsServiceGridSectionBlock, "serviceIds"> & {
  services: CmsServiceDocument[];
};

type CmsResolvedAudienceCardsSectionBlock = Omit<CmsAudienceCardsSectionBlock, "audienceIds"> & {
  audiences: CmsContentStore["audienceCards"];
};

type CmsResolvedProcessStepsSectionBlock = Omit<CmsProcessStepsSectionBlock, "stepIds"> & {
  steps: CmsProcessStepDocument[];
};

type CmsResolvedOfferFormatsSectionBlock = Omit<CmsOfferFormatsSectionBlock, "formatIds"> & {
  formats: CmsOfferFormatDocument[];
};

type CmsResolvedFaqSectionBlock = Omit<CmsFaqSectionBlock, "faqIds"> & {
  faqs: CmsFaqItemDocument[];
};

type CmsResolvedContactSectionBlock = Omit<
  CmsContactSectionBlock,
  "formId" | "primaryCtaId" | "secondaryCtaId"
> & {
  form: CmsFormDefinitionDocument | undefined;
  primaryCta: CmsCtaDocument | undefined;
  secondaryCta: CmsCtaDocument | undefined;
};

export type CmsResolvedSectionBlock =
  | CmsResolvedIntroSectionBlock
  | CmsResolvedPillarGridSectionBlock
  | CmsResolvedCapabilitiesSectionBlock
  | CmsResolvedDifferentiatorsSectionBlock
  | CmsResolvedPartnershipsSectionBlock
  | CmsResolvedMetricsSectionBlock
  | CmsResolvedConnectionsSectionBlock
  | CmsResolvedCustomRichTextSectionBlock
  | CmsResolvedServiceGridSectionBlock
  | CmsResolvedAudienceCardsSectionBlock
  | CmsResolvedProcessStepsSectionBlock
  | CmsResolvedOfferFormatsSectionBlock
  | CmsResolvedFaqSectionBlock
  | CmsResolvedContactSectionBlock;

export type CmsResolvedPage = {
  footer: CmsFooterDocument | undefined;
  hero: CmsResolvedHeroBlock;
  navigation: CmsResolvedNavigationDocument | undefined;
  page: CmsPageDocument;
  pillar: CmsPillarDocument | undefined;
  sections: CmsResolvedSectionBlock[];
};

const schemaDefinitions = [...documentSchemas, ...objectSchemas] as const satisfies readonly CmsSchemaDefinition[];
const ctaById = new Map(cmsContentStore.ctas.map((cta) => [cta._id, cta]));
const navigationById = new Map(cmsContentStore.navigations.map((navigation) => [navigation._id, navigation]));
const footerById = new Map(cmsContentStore.footers.map((footer) => [footer._id, footer]));
const footerBySiteKey = new Map(cmsContentStore.footers.map((footer) => [footer.siteKey ?? "portal", footer]));
const pillarByKey = new Map(cmsContentStore.pillars.map((pillar) => [pillar.key, pillar]));
const servicesById = new Map(cmsContentStore.services.map((service) => [service._id, service]));
const offerFormatsById = new Map(cmsContentStore.offerFormats.map((format) => [format._id, format]));
const faqById = new Map(cmsContentStore.faqItems.map((faq) => [faq._id, faq]));
const processById = new Map(cmsContentStore.processSteps.map((step) => [step._id, step]));
const audienceById = new Map(cmsContentStore.audienceCards.map((audience) => [audience._id, audience]));
const formById = new Map(cmsContentStore.forms.map((form) => [form._id, form]));

function resolveCta(id?: string) {
  return id ? ctaById.get(id) : undefined;
}

function resolveSection(section: CmsSectionBlock): CmsResolvedSectionBlock {
  switch (section.sectionType) {
    case "serviceGrid":
      return {
        ...section,
        services: section.serviceIds
          .map((serviceId) => servicesById.get(serviceId))
          .filter((service): service is CmsServiceDocument => Boolean(service)),
      };
    case "audienceCards":
      return {
        ...section,
        audiences: section.audienceIds
          .map((audienceId) => audienceById.get(audienceId))
          .filter((audience): audience is CmsContentStore["audienceCards"][number] => Boolean(audience)),
      };
    case "processSteps":
      return {
        ...section,
        steps: section.stepIds
          .map((stepId) => processById.get(stepId))
          .filter((step): step is CmsProcessStepDocument => Boolean(step)),
      };
    case "offerFormats":
      return {
        ...section,
        formats: section.formatIds
          .map((formatId) => offerFormatsById.get(formatId))
          .filter((format): format is CmsOfferFormatDocument => Boolean(format)),
      };
    case "faq":
      return {
        ...section,
        faqs: section.faqIds
          .map((faqId) => faqById.get(faqId))
          .filter((faq): faq is CmsFaqItemDocument => Boolean(faq)),
      };
    case "contactBlock":
      return {
        ...section,
        form: formById.get(section.formId),
        primaryCta: resolveCta(section.primaryCtaId),
        secondaryCta: resolveCta(section.secondaryCtaId),
      };
    default:
      return section as CmsResolvedSectionBlock;
  }
}

export function getCmsSchemaDefinitions() {
  return schemaDefinitions;
}

export function getCmsContentStore() {
  return cmsContentStore;
}

export function getCmsValidationReport() {
  return cmsContentValidationReport;
}

export function getCmsCollectionSummary() {
  return {
    articles: cmsContentStore.articles.length,
    audienceCards: cmsContentStore.audienceCards.length,
    caseStudies: cmsContentStore.caseStudies.length,
    ctas: cmsContentStore.ctas.length,
    faqItems: cmsContentStore.faqItems.length,
    footers: cmsContentStore.footers.length,
    forms: cmsContentStore.forms.length,
    navigations: cmsContentStore.navigations.length,
    offerFormats: cmsContentStore.offerFormats.length,
    pages: cmsContentStore.pages.length,
    pillars: cmsContentStore.pillars.length,
    processSteps: cmsContentStore.processSteps.length,
    services: cmsContentStore.services.length,
  };
}

export function getCmsSiteSettings(): CmsSiteSettingsDocument {
  return cmsContentStore.settings;
}

export function listCmsPillars() {
  return cmsContentStore.pillars.filter((pillar) => pillar.status === "published");
}

export function getCmsPillar(key: PillarKey) {
  const pillar = pillarByKey.get(key);

  return pillar?.status === "published" ? pillar : undefined;
}

export function getCmsNavigationForSite(siteKey: SiteKey) {
  return cmsContentStore.navigations.find(
    (navigation) => navigation.siteKey === siteKey && navigation.status === "published",
  );
}

export function getCmsFooterForSite(siteKey: SiteKey) {
  const siteFooter = footerBySiteKey.get(siteKey);

  if (siteFooter?.status === "published") {
    return siteFooter;
  }

  const portalFooter = footerBySiteKey.get("portal");

  return portalFooter?.status === "published" ? portalFooter : undefined;
}

export function listCmsPages(siteKey?: SiteKey) {
  const pages = cmsContentStore.pages.filter(
    (page) => page.published && page.status === "published" && (siteKey ? page.siteKey === siteKey : true),
  );

  return [...pages].sort((left, right) => left.order - right.order);
}

export function getCmsPageBySlug(siteKey: SiteKey, slug: string) {
  return cmsContentStore.pages.find(
    (page) =>
      page.siteKey === siteKey &&
      page.slug === slug &&
      page.published &&
      page.status === "published",
  );
}

export function getCmsPrimaryPage(siteKey: SiteKey) {
  return getCmsPageBySlug(siteKey, "/");
}

export function getCmsHomepage(siteKey: SiteKey) {
  return getCmsPrimaryPage(siteKey);
}

export function listCmsServices(pillar: PillarKey, category?: CmsServiceDocument["category"]) {
  return cmsContentStore.services.filter(
    (service) =>
      service.status === "published" &&
      service.pillar === pillar &&
      (category ? service.category === category : true),
  );
}

export function listCmsOfferFormats(pillar: PillarKey) {
  return cmsContentStore.offerFormats.filter(
    (format) => format.status === "published" && format.visibleOnSite && format.pillar === pillar,
  );
}

export function listCmsFaqItems(pillar: PillarKey) {
  return cmsContentStore.faqItems.filter(
    (faq) => faq.status === "published" && faq.pillar === pillar && faq.visible,
  );
}

export function listCmsProcessSteps(pillar?: PillarKey) {
  return cmsContentStore.processSteps.filter(
    (step) => step.status === "published" && (pillar ? step.pillar === pillar : true),
  );
}

export function listCmsAudienceCards(pillar: PillarKey) {
  return cmsContentStore.audienceCards.filter(
    (audience) => audience.status === "published" && audience.pillar === pillar,
  );
}

export function getCmsFormForSite(siteKey: SiteKey) {
  return cmsContentStore.forms.find(
    (form) =>
      form.status === "published" &&
      (siteKey === "portal" ? !form.pillar : form.pillar === siteKey),
  );
}

export function getCmsFormById(id: string) {
  const form = formById.get(id);

  return form?.status === "published" ? form : undefined;
}

export function listCmsCaseStudies(pillar?: PillarKey) {
  return cmsContentStore.caseStudies.filter((caseStudy) =>
    caseStudy.status === "published" && (pillar ? caseStudy.pillarsInvolved.includes(pillar) : true),
  );
}

export function listCmsArticles(pillar?: PillarKey) {
  return cmsContentStore.articles.filter(
    (article) => article.status === "published" && (pillar ? article.pillar === pillar : true),
  );
}

export function resolveCmsPage(siteKey: SiteKey): CmsResolvedPage {
  const page = getCmsPrimaryPage(siteKey);

  if (!page) {
    throw new Error(`Missing CMS homepage for site "${siteKey}".`);
  }

  const navigation = page.navigationId
    ? navigationById.get(page.navigationId)
    : getCmsNavigationForSite(siteKey);

  return {
    footer: page.footerId ? footerById.get(page.footerId) : getCmsFooterForSite(siteKey),
    hero: {
      ...page.hero,
      primaryCta: resolveCta(page.hero.primaryCtaId),
      secondaryCta: resolveCta(page.hero.secondaryCtaId),
    },
    navigation: navigation
      ? {
          ...navigation,
          primaryCta: resolveCta(navigation.primaryCtaId),
        }
      : undefined,
    page,
    pillar: page.pillar ? pillarByKey.get(page.pillar) : undefined,
    sections: page.sections.filter((section) => section.visible).map(resolveSection),
  };
}

export function getCmsCta(id: string) {
  return ctaById.get(id);
}

export function getCmsArticle(slug: string): CmsArticleDocument | undefined {
  return cmsContentStore.articles.find(
    (article) => article.slug === slug && article.status === "published",
  );
}

export function getCmsCaseStudy(slug: string) {
  return cmsContentStore.caseStudies.find(
    (caseStudy) => caseStudy.slug === slug && caseStudy.status === "published",
  );
}
