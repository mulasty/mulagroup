import type { AppLocale, PillarKey, SiteKey } from "@mulagroup/content-models";

export type LeadFieldValue = boolean | null | number | string | string[];

export type InquiryTypeId = string;

export type InquiryCategory =
  | "automation"
  | "commerce"
  | "ecosystem"
  | "experience"
  | "growth"
  | "investment"
  | "operations"
  | "transformation"
  | "venture";

export type LeadType = "ecosystem" | "operational" | "strategic" | "tactical" | "unknown" | "venture";

export type LeadStatus =
  | "delivery_active"
  | "discovery_done"
  | "discovery_planned"
  | "expansion_opportunity"
  | "lost"
  | "negotiation"
  | "new_lead"
  | "proposal_in_preparation"
  | "proposal_sent"
  | "qualified"
  | "won";

export type LeadJourneyStage =
  | "decision_stage"
  | "delivery_stage"
  | "discovery_stage"
  | "expansion_stage"
  | "kickoff_stage"
  | "lead_intake"
  | "proposal_stage"
  | "qualification_stage"
  | "retention_stage"
  | "review_stage";

export type LeadClass =
  | "good-lead"
  | "high-value-lead"
  | "low-priority-lead"
  | "moderate-lead"
  | "strategic-ecosystem-lead";

export type PriorityLevel = "P1" | "P2" | "P3" | "P4" | "P5";

export type LeadScoringStatus = "confirmed" | "estimated" | "unscored";

export type LeadWebhookChannel = "crm-webhook" | "form-webhook" | "notification-webhook";

export type LeadDeliveryStatus = "disabled" | "failed" | "sent";

export type LeadUtmContext = {
  campaign?: string;
  content?: string;
  medium?: string;
  source?: string;
  term?: string;
};

export type LeadCaptureContext = {
  hostLabel?: string;
  locale?: AppLocale;
  pagePath?: string;
  pageUrl?: string;
  referrer?: string;
  sourcePageTitle?: string;
  trackingName?: string;
  userAgent?: string;
  utm?: LeadUtmContext;
};

export type InquirySubmissionValues = Record<string, boolean | string>;

export type InquirySubmissionInput = {
  context?: LeadCaptureContext;
  formId?: string;
  values: InquirySubmissionValues;
};

export type LeadContact = {
  company?: string;
  email: string;
  name: string;
  phone?: string;
};

export type LeadSourceContext = {
  channel: "website-form";
  hostLabel?: string;
  locale: AppLocale;
  pagePath?: string;
  pageUrl?: string;
  referrer?: string;
  siteKey: SiteKey;
  sourcePageTitle?: string;
  trackingName: string;
  userAgent?: string;
  utm: LeadUtmContext;
};

export type LeadRoutingDecision = {
  candidatePillars: PillarKey[];
  inquiryCategory: InquiryCategory;
  leadType: LeadType;
  owner?: string;
  primaryPillar: PillarKey;
  recommendedEntryOffer: string;
  recommendedNextStep: string;
  routeReason: string[];
  secondaryPillars: PillarKey[];
  webhookName?: string;
};

export type LeadScoringSnapshot = {
  budgetConfidenceScore?: number;
  decisionPowerScore?: number;
  ecosystemPotentialScore?: number;
  fitScore?: number;
  leadClass?: LeadClass;
  priorityLevel?: PriorityLevel;
  readinessScore?: number;
  recommendedEntryOffer?: string;
  relationshipPotentialScore?: number;
  scoringStatus: LeadScoringStatus;
  totalScore?: number;
  urgencyScore?: number;
  valuePotentialScore?: number;
};

export type LeadLifecycleState = {
  followUpDueAt: string;
  followUpWindow: "24h" | "48h" | "5-10d" | "same-day";
  lastContactAt: string;
  nextStep: string;
  stage: LeadJourneyStage;
  status: LeadStatus;
};

export type LeadDiscoveryRecommendation = {
  format:
    | "clarification-call"
    | "direct-scope-review"
    | "pillar-discovery"
    | "strategic-discovery"
    | "technical-review";
  goal: string;
  reason: string;
  required: boolean;
};

export type NormalizedLeadPayload = {
  briefsReady: ("discovery-brief" | "lead-intake-brief" | "offer-preparation-brief" | "pillar-handover-brief")[];
  contact: LeadContact;
  discovery: LeadDiscoveryRecommendation;
  formId: string;
  formSlug: string;
  inquiry: {
    inquiryLabel?: string;
    inquiryType?: InquiryTypeId;
    message: string;
    title: string;
  };
  leadId: string;
  lifecycle: LeadLifecycleState;
  routing: LeadRoutingDecision;
  scoring: LeadScoringSnapshot;
  siteKey: SiteKey;
  source: LeadSourceContext;
  submissionType: string;
  submittedAt: string;
  summary: string;
};

export type LeadCrmRecord = {
  pipeline: "mulagroup-sales";
  standardFields: Record<string, LeadFieldValue>;
  vendorFields: Record<string, LeadFieldValue>;
};

export type LeadBriefType =
  | "discovery-brief"
  | "lead-intake-brief"
  | "offer-preparation-brief"
  | "pillar-handover-brief";

export type LeadBriefDocument = {
  briefType: LeadBriefType;
  markdown: string;
  summary: string;
  title: string;
};

export type LeadFollowUpDraft = {
  body: string;
  followUpType:
    | "delivery-checkpoint"
    | "discovery-confirmation"
    | "expansion"
    | "initial-reply"
    | "kickoff"
    | "no-response"
    | "post-delivery"
    | "post-discovery"
    | "proposal-reminder"
    | "proposal-sent"
    | "re-engagement";
  sendBy: string;
  sendWithin: LeadLifecycleState["followUpWindow"];
  subject: string;
};

export type LeadDeliveryAttempt = {
  channel: LeadWebhookChannel;
  errorMessage?: string;
  status: LeadDeliveryStatus;
  target?: string;
};

export type LeadSubmissionClientResponse = {
  leadId: string;
  message: string;
  nextStep: string;
  ok: true;
  primaryPillar: PillarKey;
  stage: LeadJourneyStage;
  status: LeadStatus;
};

export type LeadSubmissionResult = {
  briefs: LeadBriefDocument[];
  clientResponse: LeadSubmissionClientResponse;
  crmRecord: LeadCrmRecord;
  deliveries: LeadDeliveryAttempt[];
  followUp: LeadFollowUpDraft;
  normalizedLead: NormalizedLeadPayload;
};

export type LeadFormValidationIssue = {
  field?: string;
  message: string;
};

export type LeadOpsConfig = {
  crmWebhookUrl?: string;
  defaultOwner?: string;
  environment: "development" | "preview" | "production";
  formWebhookUrl?: string;
  notificationWebhookUrl?: string;
  siteUrl?: string;
};
