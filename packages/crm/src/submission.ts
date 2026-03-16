import {
  getCmsFormById,
  getCmsFormForSite,
  type CmsFormDefinitionDocument,
} from "@mulagroup/cms";
import type { SiteKey } from "@mulagroup/content-models";

import { buildInitialFollowUpDraft, buildLeadBriefs } from "./briefs";
import { getLeadOpsConfig } from "./config";
import { buildLeadCrmRecord } from "./mapping";
import { getLeadFieldLabel, getLeadOpsMessages } from "./messages";
import { buildInitialLeadScoring } from "./scoring";
import { getInquiryTypeLabel, resolveInquiryTaxonomy } from "./taxonomy";
import type {
  InquirySubmissionInput,
  LeadCaptureContext,
  LeadDeliveryAttempt,
  LeadFormValidationIssue,
  LeadLifecycleState,
  LeadRoutingDecision,
  LeadSubmissionResult,
  NormalizedLeadPayload,
} from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d()\-.\s]{6,}$/;

type ValidatedInquirySubmission = {
  context: LeadCaptureContext;
  form: CmsFormDefinitionDocument;
  values: Record<string, boolean | string>;
};

export class LeadSubmissionError extends Error {
  readonly issues: LeadFormValidationIssue[];
  readonly statusCode: number;

  constructor(message: string, statusCode = 400, issues: LeadFormValidationIssue[] = []) {
    super(message);
    this.name = "LeadSubmissionError";
    this.issues = issues;
    this.statusCode = statusCode;
  }
}

function dedupePillars(pillars: LeadRoutingDecision["candidatePillars"]) {
  return pillars.filter((pillar, index) => pillars.indexOf(pillar) === index);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function resolveLocaleFromUnknown(value: unknown) {
  if (!isPlainObject(value) || !isPlainObject(value.context)) {
    return "en" as const;
  }

  return value.context.locale === "pl" ? "pl" : "en";
}

function ensureSubmissionInput(input: unknown): InquirySubmissionInput {
  if (!isPlainObject(input) || !isPlainObject(input.values)) {
    throw new LeadSubmissionError(
      getLeadOpsMessages(resolveLocaleFromUnknown(input)).errors.invalidPayload,
      400,
    );
  }

  return input as InquirySubmissionInput;
}

function sanitizeContext(context: InquirySubmissionInput["context"]): LeadCaptureContext {
  if (!context || !isPlainObject(context)) {
    return {};
  }

  const safeContext: LeadCaptureContext = {};

  if (typeof context.hostLabel === "string" && context.hostLabel.trim().length > 0) {
    safeContext.hostLabel = context.hostLabel.trim();
  }

  if (context.locale === "pl") {
    safeContext.locale = "pl";
  } else if (context.locale === "en") {
    safeContext.locale = "en";
  }

  if (typeof context.pagePath === "string" && context.pagePath.trim().length > 0) {
    safeContext.pagePath = context.pagePath.trim();
  }

  if (typeof context.pageUrl === "string" && context.pageUrl.trim().length > 0) {
    safeContext.pageUrl = context.pageUrl.trim();
  }

  if (typeof context.referrer === "string" && context.referrer.trim().length > 0) {
    safeContext.referrer = context.referrer.trim();
  }

  if (typeof context.sourcePageTitle === "string" && context.sourcePageTitle.trim().length > 0) {
    safeContext.sourcePageTitle = context.sourcePageTitle.trim();
  }

  if (typeof context.trackingName === "string" && context.trackingName.trim().length > 0) {
    safeContext.trackingName = context.trackingName.trim();
  }

  if (typeof context.userAgent === "string" && context.userAgent.trim().length > 0) {
    safeContext.userAgent = context.userAgent.trim();
  }

  if (isPlainObject(context.utm)) {
    const utm: NonNullable<LeadCaptureContext["utm"]> = {};

    if (typeof context.utm.source === "string" && context.utm.source.trim().length > 0) {
      utm.source = context.utm.source.trim();
    }

    if (typeof context.utm.medium === "string" && context.utm.medium.trim().length > 0) {
      utm.medium = context.utm.medium.trim();
    }

    if (typeof context.utm.campaign === "string" && context.utm.campaign.trim().length > 0) {
      utm.campaign = context.utm.campaign.trim();
    }

    if (typeof context.utm.content === "string" && context.utm.content.trim().length > 0) {
      utm.content = context.utm.content.trim();
    }

    if (typeof context.utm.term === "string" && context.utm.term.trim().length > 0) {
      utm.term = context.utm.term.trim();
    }

    if (Object.keys(utm).length > 0) {
      safeContext.utm = utm;
    }
  }

  return safeContext;
}

function validateAndNormalizeFieldValue(
  field: CmsFormDefinitionDocument["fields"][number],
  locale: "en" | "pl",
  rawValue: unknown,
): boolean | string {
  const messages = getLeadOpsMessages(locale);
  const fieldLabel = getLeadFieldLabel(field.name, locale, field.label);

  if (field.type === "checkbox") {
    const booleanValue =
      rawValue === true ||
      rawValue === "true" ||
      rawValue === "on" ||
      rawValue === "1";

    if (field.required && !booleanValue) {
      throw new LeadSubmissionError(messages.errors.missingField(fieldLabel), 400, [
        { field: field.name, message: messages.errors.missingField(fieldLabel) },
      ]);
    }

    return booleanValue;
  }

  if (typeof rawValue !== "string") {
    if (field.required) {
      throw new LeadSubmissionError(messages.errors.missingField(fieldLabel), 400, [
        { field: field.name, message: messages.errors.missingField(fieldLabel) },
      ]);
    }

    return "";
  }

  const normalizedValue = rawValue.trim();

  if (field.required && normalizedValue.length === 0) {
    throw new LeadSubmissionError(messages.errors.missingField(fieldLabel), 400, [
      { field: field.name, message: messages.errors.missingField(fieldLabel) },
    ]);
  }

  if (normalizedValue.length === 0) {
    return "";
  }

  if (field.type === "email" && !EMAIL_PATTERN.test(normalizedValue)) {
    throw new LeadSubmissionError(messages.errors.invalidEmail(fieldLabel), 400, [
      { field: field.name, message: messages.errors.invalidEmail(fieldLabel) },
    ]);
  }

  if (field.type === "phone" && !PHONE_PATTERN.test(normalizedValue)) {
    throw new LeadSubmissionError(messages.errors.invalidPhone(fieldLabel), 400, [
      { field: field.name, message: messages.errors.invalidPhone(fieldLabel) },
    ]);
  }

  if (
    field.type === "select" &&
    field.options &&
    !field.options.some((option) => option.value === normalizedValue)
  ) {
    throw new LeadSubmissionError(messages.errors.invalidSelection(fieldLabel), 400, [
      { field: field.name, message: messages.errors.invalidSelection(fieldLabel) },
    ]);
  }

  return normalizedValue;
}

function resolveForm(siteKey: SiteKey, formId?: string) {
  const form = formId ? getCmsFormById(formId) : getCmsFormForSite(siteKey);

  if (!form) {
    throw new LeadSubmissionError(`Missing published inquiry form for site "${siteKey}".`, 404);
  }

  if ((siteKey === "portal" && form.pillar) || (siteKey !== "portal" && form.pillar !== siteKey)) {
    throw new LeadSubmissionError(`Inquiry form does not match the current site "${siteKey}".`, 400);
  }

  return form;
}

function validateSubmission(siteKey: SiteKey, input: InquirySubmissionInput): ValidatedInquirySubmission {
  const form = resolveForm(siteKey, input.formId);
  const values: Record<string, boolean | string> = {};
  const locale = input.context?.locale === "pl" ? "pl" : "en";

  for (const field of [...form.fields].sort((left, right) => left.order - right.order)) {
    values[field.name] = validateAndNormalizeFieldValue(field, locale, input.values[field.name]);
  }

  return {
    context: sanitizeContext(input.context),
    form,
    values,
  };
}

function buildLeadSummary(
  inquiryLabel: string | undefined,
  message: string,
  routing: LeadRoutingDecision,
) {
  const compactMessage = message.replace(/\s+/g, " ").trim();
  const summaryBase = inquiryLabel ? `${inquiryLabel}. ${compactMessage}` : compactMessage;

  return `${summaryBase.slice(0, 220)}${summaryBase.length > 220 ? "..." : ""} [${routing.primaryPillar}]`;
}

function resolveFollowUpWindow(routing: LeadRoutingDecision) {
  if (routing.leadType === "ecosystem" || routing.leadType === "strategic") {
    return "same-day" as const;
  }

  if (routing.leadType === "venture") {
    return "24h" as const;
  }

  return "48h" as const;
}

function resolveFollowUpDueAt(
  submittedAt: string,
  window: LeadLifecycleState["followUpWindow"],
) {
  const baseDate = new Date(submittedAt);
  const dueDate = new Date(baseDate);

  if (window === "same-day") {
    dueDate.setHours(dueDate.getHours() + 4);
    return dueDate.toISOString();
  }

  if (window === "24h") {
    dueDate.setHours(dueDate.getHours() + 24);
    return dueDate.toISOString();
  }

  if (window === "48h") {
    dueDate.setHours(dueDate.getHours() + 48);
    return dueDate.toISOString();
  }

  dueDate.setDate(dueDate.getDate() + 7);
  return dueDate.toISOString();
}

function resolveDiscoveryRecommendation(
  routing: LeadRoutingDecision,
  readinessScore?: number,
) {
  if (routing.primaryPillar === "industry" && routing.leadType === "operational") {
    return {
      format: "technical-review" as const,
      goal: routing.recommendedNextStep,
      reason: "Operational industry leads should move through a technical review before broader expansion.",
      required: true,
    };
  }

  if (routing.leadType === "ecosystem" || routing.leadType === "strategic") {
    return {
      format: "strategic-discovery" as const,
      goal: routing.recommendedNextStep,
      reason: "Strategic and ecosystem leads benefit from a structured discovery before execution is scoped.",
      required: true,
    };
  }

  if (routing.leadType === "venture" || routing.secondaryPillars.length > 0) {
    return {
      format: "pillar-discovery" as const,
      goal: routing.recommendedNextStep,
      reason: "Multi-layer or venture opportunities need pillar sequencing before delivery work begins.",
      required: true,
    };
  }

  if ((readinessScore ?? 0) >= 4) {
    return {
      format: "direct-scope-review" as const,
      goal: routing.recommendedNextStep,
      reason: "The inquiry is already concrete enough to move into a focused scope review.",
      required: false,
    };
  }

  return {
    format: "clarification-call" as const,
    goal: routing.recommendedNextStep,
    reason: "The inquiry needs a short clarification step before a heavier discovery or proposal path.",
    required: true,
  };
}

async function sendWebhook(
  channel: LeadDeliveryAttempt["channel"],
  target: string | undefined,
  payload: unknown,
): Promise<LeadDeliveryAttempt> {
  if (!target) {
    return { channel, status: "disabled" };
  }

  try {
    const response = await fetch(target, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return {
        channel,
        errorMessage: `Received HTTP ${String(response.status)} from target.`,
        status: "failed",
        target,
      };
    }

    return {
      channel,
      status: "sent",
      target,
    };
  } catch (error) {
    return {
      channel,
      errorMessage: error instanceof Error ? error.message : "Unknown webhook delivery error.",
      status: "failed",
      target,
    };
  }
}

function assertDeliveryReadiness(
  environment: ReturnType<typeof getLeadOpsConfig>["environment"],
  deliveries: LeadDeliveryAttempt[],
  locale: "en" | "pl",
) {
  const messages = getLeadOpsMessages(locale);

  if (environment !== "production") {
    return;
  }

  if (deliveries.every((delivery) => delivery.status === "disabled")) {
    throw new LeadSubmissionError(messages.errors.noProductionDestination, 503);
  }

  if (!deliveries.some((delivery) => delivery.status === "sent")) {
    throw new LeadSubmissionError(messages.errors.allDeliveryFailed, 502);
  }
}

export async function submitInquiry(
  siteKey: SiteKey,
  rawInput: unknown,
  requestContext: LeadCaptureContext = {},
): Promise<LeadSubmissionResult> {
  const input = ensureSubmissionInput(rawInput);
  const validated = validateSubmission(siteKey, input);
  const config = getLeadOpsConfig();
  const inquiryType =
    typeof validated.values.inquiryType === "string" && validated.values.inquiryType.length > 0
      ? validated.values.inquiryType
      : undefined;
  const baseRouting = resolveInquiryTaxonomy(siteKey, inquiryType, validated.form.routingConfig);
  const leadLocale = validated.context.locale ?? requestContext.locale ?? "en";
  const leadMessages = getLeadOpsMessages(leadLocale);
  const routing: LeadRoutingDecision =
    !baseRouting.owner && config.defaultOwner
      ? { ...baseRouting, owner: config.defaultOwner }
      : baseRouting;
  const submittedAt = new Date().toISOString();
  const leadId = `lead_${siteKey}_${submittedAt.slice(0, 10).replace(/-/g, "")}_${crypto.randomUUID().slice(0, 8)}`;
  const inquiryTypeField = validated.form.fields.find((field) => field.name === "inquiryType");
  const inquiryLabel =
    getInquiryTypeLabel(siteKey, inquiryType) ??
    inquiryTypeField?.options?.find((option) => option.value === inquiryType)?.label;
  const contact = {
    ...(typeof validated.values.company === "string" && validated.values.company.length > 0
      ? { company: validated.values.company }
      : {}),
    email:
      typeof validated.values.email === "string" ? validated.values.email : "",
    name:
      typeof validated.values.name === "string" ? validated.values.name : "",
    ...(typeof validated.values.phone === "string" && validated.values.phone.length > 0
      ? { phone: validated.values.phone }
      : {}),
  };
  const source = {
    channel: "website-form" as const,
    ...(validated.context.hostLabel || requestContext.hostLabel
      ? { hostLabel: validated.context.hostLabel ?? requestContext.hostLabel }
      : {}),
    ...(validated.context.pagePath || requestContext.pagePath
      ? { pagePath: validated.context.pagePath ?? requestContext.pagePath }
      : {}),
    ...(validated.context.pageUrl || requestContext.pageUrl
      ? { pageUrl: validated.context.pageUrl ?? requestContext.pageUrl }
      : {}),
    ...(validated.context.referrer || requestContext.referrer
      ? { referrer: validated.context.referrer ?? requestContext.referrer }
      : {}),
    locale: leadLocale,
    siteKey,
    ...(validated.context.sourcePageTitle || requestContext.sourcePageTitle
      ? { sourcePageTitle: validated.context.sourcePageTitle ?? requestContext.sourcePageTitle }
      : {}),
    trackingName:
      validated.context.trackingName ??
      requestContext.trackingName ??
      validated.form.trackingName,
    ...(validated.context.userAgent || requestContext.userAgent
      ? { userAgent: validated.context.userAgent ?? requestContext.userAgent }
      : {}),
    utm: {
      ...requestContext.utm,
      ...validated.context.utm,
    },
  };
  const message =
    typeof validated.values.message === "string" ? validated.values.message : "";
  const scoring = buildInitialLeadScoring({
    ...(contact.company ? { company: contact.company } : {}),
    leadType: routing.leadType,
    message,
    secondaryPillarCount: routing.secondaryPillars.length,
  });
  const followUpWindow = resolveFollowUpWindow(routing);
  const followUpDueAt = resolveFollowUpDueAt(submittedAt, followUpWindow);
  const discovery = resolveDiscoveryRecommendation(routing, scoring.readinessScore);
  const summary = buildLeadSummary(inquiryLabel, message, routing);
  const leadDraft: NormalizedLeadPayload = {
    briefsReady: [],
    contact,
    discovery,
    formId: validated.form._id,
    formSlug: validated.form.slug,
    inquiry: {
      ...(inquiryLabel ? { inquiryLabel } : {}),
      ...(inquiryType ? { inquiryType } : {}),
      message,
      title: validated.form.title,
    },
    leadId,
    lifecycle: {
      followUpDueAt,
      followUpWindow,
      lastContactAt: submittedAt,
      nextStep: routing.recommendedNextStep,
      stage: "lead_intake",
      status: "new_lead",
    },
    routing: {
      ...routing,
      candidatePillars: dedupePillars(routing.candidatePillars),
      secondaryPillars: dedupePillars(routing.secondaryPillars),
    },
    scoring: {
      ...scoring,
      recommendedEntryOffer: routing.recommendedEntryOffer,
    },
    siteKey,
    source,
    submissionType: validated.form.routingConfig.leadType,
    submittedAt,
    summary,
  };
  const briefs = buildLeadBriefs(leadDraft);
  const followUp = buildInitialFollowUpDraft(leadDraft);
  const normalizedLead: NormalizedLeadPayload = {
    ...leadDraft,
    briefsReady: briefs.map((brief) => brief.briefType),
  };
  const crmRecord = buildLeadCrmRecord(normalizedLead, validated.form);
  const deliveryEnvelope = {
    briefs,
    crmRecord,
    environment: config.environment,
    followUp,
    lead: normalizedLead,
  };
  const deliveries = await Promise.all([
    sendWebhook("form-webhook", config.formWebhookUrl, deliveryEnvelope),
    sendWebhook("crm-webhook", config.crmWebhookUrl, {
      environment: config.environment,
      leadId: normalizedLead.leadId,
      record: crmRecord,
    }),
    sendWebhook("notification-webhook", config.notificationWebhookUrl, {
      environment: config.environment,
      leadId: normalizedLead.leadId,
      nextStep: normalizedLead.lifecycle.nextStep,
      primaryPillar: normalizedLead.routing.primaryPillar,
      summary: normalizedLead.summary,
    }),
  ]);
  assertDeliveryReadiness(config.environment, deliveries, leadLocale);

  return {
    briefs,
    clientResponse: {
      leadId: normalizedLead.leadId,
      message: leadMessages.client.successMessage,
      nextStep: leadMessages.client.nextStep,
      ok: true,
      primaryPillar: normalizedLead.routing.primaryPillar,
      stage: normalizedLead.lifecycle.stage,
      status: normalizedLead.lifecycle.status,
    },
    crmRecord,
    deliveries,
    followUp,
    normalizedLead,
  };
}
