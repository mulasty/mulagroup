import type {
  LeadBriefDocument,
  LeadFollowUpDraft,
  NormalizedLeadPayload,
} from "./types";

function formatList(values: string[]) {
  return values.length > 0 ? values.join(", ") : "None";
}

function formatNumericValue(value: number | undefined, fallback: string) {
  return typeof value === "number" ? String(value) : fallback;
}

function buildLeadIntakeBriefMarkdown(lead: NormalizedLeadPayload) {
  return [
    "# Lead Intake Brief",
    "",
    "## Basic info",
    `- Lead source: ${lead.source.channel} / ${lead.siteKey}`,
    `- Date: ${lead.submittedAt}`,
    `- Contact name: ${lead.contact.name}`,
    `- Company / project: ${lead.contact.company ?? "Not provided"}`,
    `- Email: ${lead.contact.email}`,
    `- Phone: ${lead.contact.phone ?? "Not provided"}`,
    `- Website / source page: ${lead.source.pageUrl ?? lead.source.pagePath ?? "Not provided"}`,
    "",
    "## Initial context",
    `- What did the client ask for? ${lead.inquiry.inquiryLabel ?? lead.inquiry.title}`,
    `- What seems to be the main need? ${lead.summary}`,
    `- Is the need clear or still general? ${lead.scoring.readinessScore && lead.scoring.readinessScore >= 3 ? "Relatively clear" : "Still broad"}`,
    `- Is there any visible deadline or urgency? ${lead.scoring.urgencyScore && lead.scoring.urgencyScore >= 4 ? "Yes" : "No explicit urgency signal"}`,
    "",
    "## Initial pillar assessment",
    `- Primary pillar: ${lead.routing.primaryPillar}`,
    `- Possible secondary pillars: ${formatList(lead.routing.secondaryPillars)}`,
    `- Lead type: ${lead.routing.leadType}`,
    "",
    "## Early scoring signals",
    `- Fit: ${formatNumericValue(lead.scoring.fitScore, "Not scored")}`,
    `- Urgency: ${formatNumericValue(lead.scoring.urgencyScore, "Not scored")}`,
    `- Readiness: ${formatNumericValue(lead.scoring.readinessScore, "Not scored")}`,
    `- Value potential: ${formatNumericValue(lead.scoring.valuePotentialScore, "Not scored")}`,
    `- Ecosystem potential: ${formatNumericValue(lead.scoring.ecosystemPotentialScore, "Not scored")}`,
    "",
    "## Recommended next step",
    `- ${lead.routing.recommendedEntryOffer}`,
    `- Owner: ${lead.routing.owner ?? "TBD"}`,
    `- Follow-up window: ${lead.lifecycle.followUpWindow}`,
    `- Follow-up due at: ${lead.lifecycle.followUpDueAt}`,
  ].join("\n");
}

function buildDiscoveryBriefMarkdown(lead: NormalizedLeadPayload) {
  return [
    "# Discovery Brief",
    "",
    "## Client / project",
    `- Client name: ${lead.contact.name}`,
    `- Company / project: ${lead.contact.company ?? "Not provided"}`,
    "- Main contact: same as intake",
    `- Industry / category: ${lead.routing.inquiryCategory}`,
    `- Stage of business / project: ${lead.routing.leadType}`,
    "",
    "## Situation summary",
    `- What is happening now? ${lead.inquiry.message}`,
    `- What triggered the conversation? ${lead.inquiry.inquiryLabel ?? "General website inquiry"}`,
    `- What is the client trying to achieve? ${lead.summary}`,
    "",
    "## Main challenge",
    `- What is the visible problem? ${lead.inquiry.message}`,
    "- What is the likely deeper problem? To confirm during discovery.",
    "- What is blocked today? To confirm during discovery.",
    "",
    "## Pillar mapping",
    `- Primary pillar: ${lead.routing.primaryPillar}`,
    `- Secondary pillars: ${formatList(lead.routing.secondaryPillars)}`,
    `- Why these pillars? ${lead.routing.routeReason.join("; ")}`,
    "",
    "## Readiness and constraints",
    "- Decision-maker present? To confirm",
    `- Budget clarity: ${formatNumericValue(lead.scoring.budgetConfidenceScore, "Unknown")}`,
    `- Urgency level: ${formatNumericValue(lead.scoring.urgencyScore, "Unknown")}`,
    "- Main constraints: To confirm",
    "- Dependencies: To confirm",
    "",
    "## Recommended entry offer",
    `- Recommended first step: ${lead.routing.recommendedEntryOffer}`,
    `- Why this is the best first step: ${lead.lifecycle.nextStep}`,
    `- Recommended discovery format: ${lead.discovery.format}`,
    `- Optional expansion after first step: ${formatList(lead.routing.secondaryPillars)}`,
  ].join("\n");
}

function buildOfferPreparationBriefMarkdown(lead: NormalizedLeadPayload) {
  return [
    "# Offer Preparation Brief",
    "",
    "## Client / project",
    `- Client name: ${lead.contact.name}`,
    `- Project / business type: ${lead.contact.company ?? "Not provided"}`,
    `- Main contact: ${lead.contact.email}`,
    `- Primary pillar: ${lead.routing.primaryPillar}`,
    `- Secondary pillars: ${formatList(lead.routing.secondaryPillars)}`,
    "",
    "## Main situation",
    `- What is the client's current context? ${lead.inquiry.message}`,
    `- What is the biggest challenge? ${lead.summary}`,
    `- What is the desired result? ${lead.lifecycle.nextStep}`,
    "",
    "## Recommended offer type",
    `- Entry / Core / Ecosystem: ${lead.routing.leadType === "ecosystem" ? "Ecosystem" : "Entry / Core"}`,
    `- Why this type fits: ${lead.routing.recommendedEntryOffer}`,
    "",
    "## Expected outcome",
    `- What should the client receive? ${lead.routing.recommendedEntryOffer}`,
    "- What should improve? To define after discovery.",
    `- What is the value narrative? ${lead.summary}`,
  ].join("\n");
}

function buildPillarHandoverBriefMarkdown(lead: NormalizedLeadPayload) {
  return [
    "# Pillar Handover Brief",
    "",
    "## Handover info",
    `- From pillar: ${lead.routing.primaryPillar}`,
    `- To pillar(s): ${formatList(lead.routing.secondaryPillars)}`,
    `- Date: ${lead.submittedAt}`,
    `- Current owner: ${lead.routing.owner ?? "TBD"}`,
    "- New / supporting owner: TBD",
    "",
    "## Client / project",
    `- Client name: ${lead.contact.name}`,
    `- Project name: ${lead.contact.company ?? "Not provided"}`,
    `- Main contact: ${lead.contact.email}`,
    "",
    "## Current context",
    `- What has happened so far? New inquiry submitted via ${lead.siteKey}`,
    `- What has already been discussed / delivered? Intake only`,
    `- What is the current project stage? ${lead.lifecycle.stage}`,
    "",
    "## Why handover is needed",
    `- Why this pillar is needed now: ${lead.routing.routeReason.join("; ")}`,
    `- Expected contribution of the receiving pillar: ${formatList(lead.routing.secondaryPillars)}`,
    "- Priority of involvement: support / advisory",
  ].join("\n");
}

export function buildLeadBriefs(lead: NormalizedLeadPayload): LeadBriefDocument[] {
  const briefs: LeadBriefDocument[] = [
    {
      briefType: "lead-intake-brief",
      markdown: buildLeadIntakeBriefMarkdown(lead),
      summary: "Initial structured summary of the submitted inquiry.",
      title: `Lead Intake Brief - ${lead.contact.company ?? lead.contact.name}`,
    },
    {
      briefType: "discovery-brief",
      markdown: buildDiscoveryBriefMarkdown(lead),
      summary: "Discovery-ready context assembled from the intake and routing layer.",
      title: `Discovery Brief - ${lead.contact.company ?? lead.contact.name}`,
    },
    {
      briefType: "offer-preparation-brief",
      markdown: buildOfferPreparationBriefMarkdown(lead),
      summary: "Offer-preparation starter based on the current lead context.",
      title: `Offer Preparation Brief - ${lead.contact.company ?? lead.contact.name}`,
    },
  ];

  if (lead.routing.secondaryPillars.length > 0) {
    briefs.push({
      briefType: "pillar-handover-brief",
      markdown: buildPillarHandoverBriefMarkdown(lead),
      summary: "Cross-pillar handover starter for multi-pillar opportunities.",
      title: `Pillar Handover Brief - ${lead.contact.company ?? lead.contact.name}`,
    });
  }

  return briefs;
}

export function buildInitialFollowUpDraft(lead: NormalizedLeadPayload): LeadFollowUpDraft {
  const companyLabel = lead.contact.company ? ` for ${lead.contact.company}` : "";

  return {
    body: [
      `Thank you for reaching out${companyLabel}.`,
      "",
      "We have captured the inquiry and reviewed the first context.",
      `The most useful next step now is to ${lead.lifecycle.nextStep.toLowerCase()}`,
      "",
      `Current primary route: ${lead.routing.primaryPillar}`,
      `Recommended entry offer: ${lead.routing.recommendedEntryOffer}`,
      "",
      "If helpful, we can now move into the next structured conversation and confirm the best scope from there.",
    ].join("\n"),
    followUpType: "initial-reply",
    sendBy: lead.lifecycle.followUpDueAt,
    sendWithin: lead.lifecycle.followUpWindow,
    subject: `Next step for your Mula Group inquiry`,
  };
}
