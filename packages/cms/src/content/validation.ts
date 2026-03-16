import type { PillarKey, SiteKey } from "@mulagroup/content-models";

import type {
  CmsContentStore,
  CmsContentValidationIssue,
  CmsContentValidationReport,
  CmsFormFieldDocument,
  CmsPageDocument,
  CmsSectionBlock,
} from "../types";

const SITE_KEYS: SiteKey[] = [
  "portal",
  "strategy",
  "digital",
  "commerce",
  "industry",
  "projects",
  "lifestyle",
];

function createIssue(issue: CmsContentValidationIssue): CmsContentValidationIssue {
  return issue;
}

function pushMissingReference(
  issues: CmsContentValidationIssue[],
  collection: CmsContentValidationIssue["collection"],
  documentId: string,
  field: string,
  targetId: string,
) {
  issues.push(
    createIssue({
      collection,
      documentId,
      field,
      level: "error",
      message: `Missing referenced document "${targetId}".`,
    }),
  );
}

function assertReference(
  issues: CmsContentValidationIssue[],
  collection: CmsContentValidationIssue["collection"],
  documentId: string,
  field: string,
  targetId: string | undefined,
  existingIds: Set<string>,
) {
  if (!targetId) {
    return;
  }

  if (!existingIds.has(targetId)) {
    pushMissingReference(issues, collection, documentId, field, targetId);
  }
}

function assertPillarKey(
  issues: CmsContentValidationIssue[],
  collection: CmsContentValidationIssue["collection"],
  documentId: string,
  field: string,
  pillar: PillarKey | undefined,
  pillarKeys: Set<PillarKey>,
) {
  if (!pillar) {
    return;
  }

  if (!pillarKeys.has(pillar)) {
    issues.push(
      createIssue({
        collection,
        documentId,
        field,
        level: "error",
        message: `Unknown pillar key "${pillar}".`,
      }),
    );
  }
}

function validateFormFields(
  issues: CmsContentValidationIssue[],
  formId: string,
  fields: CmsFormFieldDocument[],
) {
  const fieldNames = new Set(fields.map((field) => field.name));
  const requiredCoreFields = ["name", "email", "message"];

  for (const coreField of requiredCoreFields) {
    if (!fieldNames.has(coreField)) {
      issues.push(
        createIssue({
          collection: "forms",
          documentId: formId,
          field: "fields",
          level: "error",
          message: `Form is missing required core field "${coreField}".`,
        }),
      );
    }
  }

  for (const field of fields) {
    if (field.type === "select" && (!field.options || field.options.length === 0)) {
      issues.push(
        createIssue({
          collection: "forms",
          documentId: formId,
          field: `fields.${field.name}.options`,
          level: "error",
          message: "Select field must define at least one option.",
        }),
      );
    }
  }
}

function validatePageSectionReferences(
  issues: CmsContentValidationIssue[],
  page: CmsPageDocument,
  section: CmsSectionBlock,
  referenceSets: {
    audienceIds: Set<string>;
    ctaIds: Set<string>;
    faqIds: Set<string>;
    formIds: Set<string>;
    formatIds: Set<string>;
    pillarKeys: Set<PillarKey>;
    processStepIds: Set<string>;
    serviceIds: Set<string>;
  },
) {
  switch (section.sectionType) {
    case "pillarGrid":
      for (const pillarKey of section.pillarKeys) {
        assertPillarKey(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.pillarKeys`,
          pillarKey,
          referenceSets.pillarKeys,
        );
      }
      break;
    case "serviceGrid":
      for (const serviceId of section.serviceIds) {
        assertReference(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.serviceIds`,
          serviceId,
          referenceSets.serviceIds,
        );
      }
      break;
    case "audienceCards":
      for (const audienceId of section.audienceIds) {
        assertReference(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.audienceIds`,
          audienceId,
          referenceSets.audienceIds,
        );
      }
      break;
    case "processSteps":
      for (const stepId of section.stepIds) {
        assertReference(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.stepIds`,
          stepId,
          referenceSets.processStepIds,
        );
      }
      break;
    case "offerFormats":
      for (const formatId of section.formatIds) {
        assertReference(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.formatIds`,
          formatId,
          referenceSets.formatIds,
        );
      }
      break;
    case "faq":
      for (const faqId of section.faqIds) {
        assertReference(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.faqIds`,
          faqId,
          referenceSets.faqIds,
        );
      }
      break;
    case "contactBlock":
      assertReference(
        issues,
        "pages",
        page._id,
        `sections.${section.id}.formId`,
        section.formId,
        referenceSets.formIds,
      );
      assertReference(
        issues,
        "pages",
        page._id,
        `sections.${section.id}.primaryCtaId`,
        section.primaryCtaId,
        referenceSets.ctaIds,
      );
      assertReference(
        issues,
        "pages",
        page._id,
        `sections.${section.id}.secondaryCtaId`,
        section.secondaryCtaId,
        referenceSets.ctaIds,
      );
      break;
    case "connections":
      for (const item of section.items) {
        assertPillarKey(
          issues,
          "pages",
          page._id,
          `sections.${section.id}.items`,
          item.pillar,
          referenceSets.pillarKeys,
        );
      }
      break;
    default:
      break;
  }
}

function validateUniqueDocumentIds(store: CmsContentStore, issues: CmsContentValidationIssue[]) {
  const ids = new Map<string, string>();
  const collections = [
    ["articles", store.articles],
    ["audienceCards", store.audienceCards],
    ["caseStudies", store.caseStudies],
    ["ctas", store.ctas],
    ["faqItems", store.faqItems],
    ["footers", store.footers],
    ["forms", store.forms],
    ["navigations", store.navigations],
    ["offerFormats", store.offerFormats],
    ["pages", store.pages],
    ["pillars", store.pillars],
    ["processSteps", store.processSteps],
    ["services", store.services],
  ] as const;

  ids.set(store.settings._id, "settings");

  for (const [collection, documents] of collections) {
    for (const document of documents) {
      const existing = ids.get(document._id);

      if (existing) {
        issues.push(
          createIssue({
            collection,
            documentId: document._id,
            level: "error",
            message: `Duplicate document id also used in "${existing}".`,
          }),
        );
        continue;
      }

      ids.set(document._id, collection);
    }
  }
}

export function validateCmsContentStore(store: CmsContentStore): CmsContentValidationReport {
  const issues: CmsContentValidationIssue[] = [];
  const ctaIds = new Set(store.ctas.map((item) => item._id));
  const navigationIds = new Set(store.navigations.map((item) => item._id));
  const footerIds = new Set(store.footers.map((item) => item._id));
  const formIds = new Set(store.forms.map((item) => item._id));
  const serviceIds = new Set(store.services.map((item) => item._id));
  const formatIds = new Set(store.offerFormats.map((item) => item._id));
  const faqIds = new Set(store.faqItems.map((item) => item._id));
  const processStepIds = new Set(store.processSteps.map((item) => item._id));
  const audienceIds = new Set(store.audienceCards.map((item) => item._id));
  const caseStudyIds = new Set(store.caseStudies.map((item) => item._id));
  const pillarKeys = new Set(store.pillars.map((item) => item.key));

  validateUniqueDocumentIds(store, issues);

  for (const navigation of store.navigations) {
    assertReference(issues, "navigations", navigation._id, "primaryCtaId", navigation.primaryCtaId, ctaIds);
  }

  for (const footer of store.footers) {
    if (footer.linkGroups.length === 0) {
      issues.push(
        createIssue({
          collection: "footers",
          documentId: footer._id,
          field: "linkGroups",
          level: "warning",
          message: "Footer does not define any link groups.",
        }),
      );
    }
  }

  for (const form of store.forms) {
    assertPillarKey(issues, "forms", form._id, "pillar", form.pillar, pillarKeys);
    assertPillarKey(
      issues,
      "forms",
      form._id,
      "routingConfig.primaryPillar",
      form.routingConfig.primaryPillar,
      pillarKeys,
    );

    for (const secondaryPillar of form.routingConfig.secondaryPillars ?? []) {
      assertPillarKey(
        issues,
        "forms",
        form._id,
        "routingConfig.secondaryPillars",
        secondaryPillar,
        pillarKeys,
      );
    }

    validateFormFields(issues, form._id, form.fields);
  }

  for (const pillar of store.pillars) {
    assertReference(issues, "pillars", pillar._id, "leadCtaId", pillar.leadCtaId, ctaIds);

    for (const serviceId of pillar.coreServiceIds) {
      assertReference(issues, "pillars", pillar._id, "coreServiceIds", serviceId, serviceIds);
    }

    for (const formatId of pillar.offerFormatIds) {
      assertReference(issues, "pillars", pillar._id, "offerFormatIds", formatId, formatIds);
    }
  }

  for (const service of store.services) {
    assertPillarKey(issues, "services", service._id, "pillar", service.pillar, pillarKeys);
    assertReference(issues, "services", service._id, "relatedCtaId", service.relatedCtaId, ctaIds);

    for (const formatId of service.relatedOfferFormatIds) {
      assertReference(issues, "services", service._id, "relatedOfferFormatIds", formatId, formatIds);
    }

    for (const caseStudyId of service.relatedCaseStudyIds) {
      assertReference(issues, "services", service._id, "relatedCaseStudyIds", caseStudyId, caseStudyIds);
    }
  }

  for (const format of store.offerFormats) {
    assertPillarKey(issues, "offerFormats", format._id, "pillar", format.pillar, pillarKeys);
    assertReference(issues, "offerFormats", format._id, "nextStepCtaId", format.nextStepCtaId, ctaIds);
  }

  for (const faq of store.faqItems) {
    assertPillarKey(issues, "faqItems", faq._id, "pillar", faq.pillar, pillarKeys);
  }

  for (const step of store.processSteps) {
    assertPillarKey(issues, "processSteps", step._id, "pillar", step.pillar, pillarKeys);
  }

  for (const audience of store.audienceCards) {
    assertPillarKey(issues, "audienceCards", audience._id, "pillar", audience.pillar, pillarKeys);
    assertReference(
      issues,
      "audienceCards",
      audience._id,
      "bestEntryOfferId",
      audience.bestEntryOfferId,
      formatIds,
    );
  }

  for (const page of store.pages) {
    assertPillarKey(issues, "pages", page._id, "pillar", page.pillar, pillarKeys);
    assertReference(issues, "pages", page._id, "navigationId", page.navigationId, navigationIds);
    assertReference(issues, "pages", page._id, "footerId", page.footerId, footerIds);
    assertReference(issues, "pages", page._id, "hero.primaryCtaId", page.hero.primaryCtaId, ctaIds);
    assertReference(issues, "pages", page._id, "hero.secondaryCtaId", page.hero.secondaryCtaId, ctaIds);

    for (const pillarKey of page.hero.pillarsShown ?? []) {
      assertPillarKey(issues, "pages", page._id, "hero.pillarsShown", pillarKey, pillarKeys);
    }

    for (const section of page.sections) {
      validatePageSectionReferences(issues, page, section, {
        audienceIds,
        ctaIds,
        faqIds,
        formIds,
        formatIds,
        pillarKeys,
        processStepIds,
        serviceIds,
      });
    }
  }

  for (const siteKey of SITE_KEYS) {
    const primaryPages = store.pages.filter(
      (page) => page.siteKey === siteKey && page.published && page.slug === "/",
    );

    if (primaryPages.length !== 1) {
      issues.push(
        createIssue({
          collection: "pages",
          field: "slug",
          level: "error",
          message: `Site "${siteKey}" must have exactly one published primary page with slug "/".`,
        }),
      );
    }

    const hasNavigation = store.navigations.some((navigation) => navigation.siteKey === siteKey);
    const hasFooter = store.footers.some((footer) => footer.siteKey === siteKey);
    const hasForm =
      siteKey === "portal"
        ? store.forms.some((form) => !form.pillar)
        : store.forms.some((form) => form.pillar === siteKey);

    if (!hasNavigation) {
      issues.push(
        createIssue({
          collection: "navigations",
          field: "siteKey",
          level: "warning",
          message: `Site "${siteKey}" does not have a dedicated navigation document.`,
        }),
      );
    }

    if (!hasFooter) {
      issues.push(
        createIssue({
          collection: "footers",
          field: "siteKey",
          level: "warning",
          message: `Site "${siteKey}" does not have a dedicated footer document.`,
        }),
      );
    }

    if (!hasForm) {
      issues.push(
        createIssue({
          collection: "forms",
          field: "pillar",
          level: "warning",
          message: `Site "${siteKey}" does not have a dedicated form definition.`,
        }),
      );
    }
  }

  for (const caseStudy of store.caseStudies) {
    assertReference(issues, "caseStudies", caseStudy._id, "ctaId", caseStudy.ctaId, ctaIds);

    for (const pillar of caseStudy.pillarsInvolved) {
      assertPillarKey(issues, "caseStudies", caseStudy._id, "pillarsInvolved", pillar, pillarKeys);
    }

    if (!caseStudy.diagnosis || !caseStudy.scope || !caseStudy.keyLearning) {
      issues.push(
        createIssue({
          collection: "caseStudies",
          documentId: caseStudy._id,
          level: "warning",
          message: "Case study is missing one of the recommended narrative fields: diagnosis, scope or keyLearning.",
        }),
      );
    }
  }

  for (const article of store.articles) {
    assertPillarKey(issues, "articles", article._id, "pillar", article.pillar, pillarKeys);
  }

  return {
    issues,
    ok: issues.every((issue) => issue.level !== "error"),
  };
}

export function assertCmsContentStore(store: CmsContentStore) {
  const report = validateCmsContentStore(store);

  if (!report.ok) {
    const summary = report.issues
      .filter((issue) => issue.level === "error")
      .map((issue) => {
        const location = issue.documentId ? `${issue.collection}:${issue.documentId}` : issue.collection;
        return `${location}${issue.field ? ` (${issue.field})` : ""} - ${issue.message}`;
      })
      .join("\n");

    throw new Error(`CMS content store validation failed.\n${summary}`);
  }

  return report;
}
