import type { CmsFormDefinitionDocument } from "@mulagroup/cms";

import type { LeadCrmRecord, NormalizedLeadPayload } from "./types";

function assignVendorField(
  target: LeadCrmRecord["vendorFields"],
  fieldName: string | undefined,
  value: LeadCrmRecord["vendorFields"][string],
) {
  if (!fieldName) {
    return;
  }

  target[fieldName] = value;
}

export function buildLeadCrmRecord(
  lead: NormalizedLeadPayload,
  form: CmsFormDefinitionDocument,
): LeadCrmRecord {
  const standardFields: LeadCrmRecord["standardFields"] = {
    budget_confidence_score: lead.scoring.budgetConfidenceScore ?? null,
    contact_email: lead.contact.email,
    contact_name: lead.contact.name,
    contact_phone: lead.contact.phone ?? null,
    contact_person: lead.contact.name,
    company_name: lead.contact.company ?? null,
    company_or_project: lead.contact.company ?? null,
    discovery_format: lead.discovery.format,
    discovery_goal: lead.discovery.goal,
    discovery_required: lead.discovery.required,
    decision_power_score: lead.scoring.decisionPowerScore ?? null,
    ecosystem_potential_score: lead.scoring.ecosystemPotentialScore ?? null,
    fit_score: lead.scoring.fitScore ?? null,
    follow_up_due_at: lead.lifecycle.followUpDueAt,
    follow_up_window: lead.lifecycle.followUpWindow,
    form_id: lead.formId,
    form_slug: lead.formSlug,
    host_label: lead.source.hostLabel ?? null,
    inquiry_category: lead.routing.inquiryCategory,
    inquiry_label: lead.inquiry.inquiryLabel ?? null,
    inquiry_message: lead.inquiry.message,
    inquiry_type: lead.inquiry.inquiryType ?? null,
    lead_class: lead.scoring.leadClass ?? null,
    lead_id: lead.leadId,
    lead_source: lead.source.channel,
    lead_status: lead.lifecycle.status,
    lead_type: lead.routing.leadType,
    last_contact_date: lead.lifecycle.lastContactAt,
    next_step: lead.lifecycle.nextStep,
    next_owner: lead.routing.owner ?? null,
    owner: lead.routing.owner ?? null,
    page_path: lead.source.pagePath ?? null,
    page_url: lead.source.pageUrl ?? null,
    primary_pillar: lead.routing.primaryPillar,
    priority_level: lead.scoring.priorityLevel ?? null,
    project_type: lead.inquiry.inquiryLabel ?? null,
    recommended_entry_offer: lead.routing.recommendedEntryOffer,
    referrer: lead.source.referrer ?? null,
    relationship_potential_score: lead.scoring.relationshipPotentialScore ?? null,
    route_reason: lead.routing.routeReason,
    secondary_pillars: lead.routing.secondaryPillars,
    source_channel: lead.source.channel,
    source_locale: lead.source.locale,
    source_site_key: lead.siteKey,
    source_title: lead.source.sourcePageTitle ?? null,
    stage: lead.lifecycle.stage,
    status: lead.lifecycle.status,
    submission_type: lead.submissionType,
    submitted_at: lead.submittedAt,
    short_summary: lead.summary,
    summary: lead.summary,
    total_score: lead.scoring.totalScore ?? null,
    tracking_name: lead.source.trackingName,
    urgency_score: lead.scoring.urgencyScore ?? null,
    utm_campaign: lead.source.utm.campaign ?? null,
    utm_content: lead.source.utm.content ?? null,
    utm_medium: lead.source.utm.medium ?? null,
    utm_source: lead.source.utm.source ?? null,
    utm_term: lead.source.utm.term ?? null,
    value_potential_score: lead.scoring.valuePotentialScore ?? null,
  };

  const vendorFields: LeadCrmRecord["vendorFields"] = {};

  assignVendorField(
    vendorFields,
    form.crmMapping.inquiryTypeField,
    lead.inquiry.inquiryType ?? lead.inquiry.inquiryLabel ?? "",
  );
  assignVendorField(vendorFields, form.crmMapping.messageField, lead.inquiry.message);
  assignVendorField(vendorFields, form.crmMapping.nameField, lead.contact.name);
  assignVendorField(vendorFields, form.crmMapping.emailField, lead.contact.email);
  assignVendorField(vendorFields, form.crmMapping.phoneField, lead.contact.phone ?? "");
  assignVendorField(vendorFields, form.crmMapping.companyField, lead.contact.company ?? "");
  assignVendorField(vendorFields, form.crmMapping.primaryPillarField, lead.routing.primaryPillar);
  assignVendorField(
    vendorFields,
    form.crmMapping.secondaryPillarsField,
    lead.routing.secondaryPillars,
  );
  assignVendorField(
    vendorFields,
    form.crmMapping.sourceField,
    lead.source.pageUrl ?? lead.source.pagePath ?? lead.siteKey,
  );
  assignVendorField(vendorFields, form.crmMapping.leadSourceField, lead.source.channel);
  assignVendorField(vendorFields, form.crmMapping.leadTypeField, lead.routing.leadType);
  assignVendorField(vendorFields, form.crmMapping.leadStatusField, lead.lifecycle.status);
  assignVendorField(vendorFields, form.crmMapping.leadStageField, lead.lifecycle.stage);
  assignVendorField(vendorFields, form.crmMapping.summaryField, lead.summary);
  assignVendorField(vendorFields, form.crmMapping.nextStepField, lead.lifecycle.nextStep);
  assignVendorField(vendorFields, form.crmMapping.nextOwnerField, lead.routing.owner ?? "");
  assignVendorField(
    vendorFields,
    form.crmMapping.followUpDueAtField,
    lead.lifecycle.followUpDueAt,
  );

  return {
    pipeline: "mulagroup-sales",
    standardFields,
    vendorFields,
  };
}
