import type { CmsRoutingConfig } from "@mulagroup/cms";
import type { PillarKey, SiteKey } from "@mulagroup/content-models";

import type { InquiryCategory, InquiryTypeId, LeadRoutingDecision, LeadType } from "./types";

type InquiryTaxonomyEntry = {
  category: InquiryCategory;
  label: string;
  leadType: LeadType;
  primaryPillar: PillarKey;
  recommendedEntryOffer: string;
  recommendedNextStep: string;
  routeReason: string[];
  secondaryPillars: PillarKey[];
};

type SiteInquiryTaxonomy = Partial<Record<InquiryTypeId, InquiryTaxonomyEntry>>;

const inquiryTaxonomyBySite: Record<SiteKey, SiteInquiryTaxonomy> = {
  portal: {
    "ai-implementation": {
      category: "automation",
      label: "AI implementation",
      leadType: "strategic",
      primaryPillar: "digital",
      recommendedEntryOffer: "AI Workflow Discovery",
      recommendedNextStep: "Qualify the workflow, data and business objective before selecting the implementation path.",
      routeReason: ["portal intake points to AI implementation", "digital should stay grounded in business context"],
      secondaryPillars: ["strategy"],
    },
    commerce: {
      category: "commerce",
      label: "Commerce / sales channels",
      leadType: "strategic",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Commerce Review",
      recommendedNextStep: "Clarify the revenue model, channel pressure and the most useful first commercial move.",
      routeReason: ["portal intake points to commercial growth", "commerce should lead the first qualification"],
      secondaryPillars: ["strategy", "digital"],
    },
    digital: {
      category: "transformation",
      label: "Digital systems / AI / automation",
      leadType: "strategic",
      primaryPillar: "digital",
      recommendedEntryOffer: "Digital Systems Review",
      recommendedNextStep: "Review the digital objective and confirm the first implementation-ready scope.",
      routeReason: ["portal intake points to a digital systems challenge", "strategy may refine the wider sequence"],
      secondaryPillars: ["strategy"],
    },
    "general-inquiry": {
      category: "ecosystem",
      label: "General ecosystem inquiry",
      leadType: "ecosystem",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Structured Qualification Call",
      recommendedNextStep: "Start with structured qualification and route the inquiry into the best first pillar.",
      routeReason: ["portal inquiry remains ecosystem-level", "strategy stays the safest default entry for wider contexts"],
      secondaryPillars: ["digital", "commerce", "projects"],
    },
    "operational-support": {
      category: "operations",
      label: "Operational / industry support",
      leadType: "operational",
      primaryPillar: "industry",
      recommendedEntryOffer: "Operational Review",
      recommendedNextStep: "Review the operational context and confirm the most relevant first technical intervention.",
      routeReason: ["portal intake points to an operational problem", "industry should lead the first technical qualification"],
      secondaryPillars: ["digital"],
    },
    partnership: {
      category: "ecosystem",
      label: "Partnership / collaboration",
      leadType: "ecosystem",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Partnership Qualification Call",
      recommendedNextStep: "Clarify the collaboration model, strategic fit and the most coherent next conversation.",
      routeReason: ["partnership opportunities need ecosystem-level qualification", "strategy should frame the initial commercial path"],
      secondaryPillars: ["commerce", "digital", "projects"],
    },
    "premium-concept": {
      category: "experience",
      label: "Premium concept / lifestyle",
      leadType: "venture",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Premium Concept Discovery",
      recommendedNextStep: "Clarify the premium concept, audience and supporting delivery model before expansion.",
      routeReason: ["portal intake points to an experience-led concept", "lifestyle should lead with project support close behind"],
      secondaryPillars: ["projects", "strategy"],
    },
    "project-development": {
      category: "venture",
      label: "Project / venture development",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Project Discovery Session",
      recommendedNextStep: "Map the project logic, dependencies and first buildable phase before delivery planning.",
      routeReason: ["portal intake points to venture or project development", "projects should own the first structuring step"],
      secondaryPillars: ["strategy", "lifestyle"],
    },
    strategy: {
      category: "growth",
      label: "Strategy / business direction",
      leadType: "strategic",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Strategy Session",
      recommendedNextStep: "Clarify the business context and frame the strongest first decision path before execution.",
      routeReason: ["portal intake points to a strategic question", "strategy should lead the first qualification"],
      secondaryPillars: ["digital", "commerce"],
    },
  },
  strategy: {
    "business-growth": {
      category: "growth",
      label: "Business growth",
      leadType: "strategic",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Strategy Session",
      recommendedNextStep: "Schedule a strategic discovery conversation and frame the first decision path.",
      routeReason: ["growth problem benefits from strategic architecture", "commercial and digital support may follow"],
      secondaryPillars: ["commerce", "digital"],
    },
    "digital-transformation-direction": {
      category: "transformation",
      label: "Digital transformation direction",
      leadType: "strategic",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Transformation Direction Session",
      recommendedNextStep: "Run strategy-first discovery before routing into digital implementation.",
      routeReason: ["transformation needs strategic sequencing", "digital execution should follow diagnosis"],
      secondaryPillars: ["digital", "commerce"],
    },
    "funding-grants": {
      category: "investment",
      label: "Funding / grants",
      leadType: "strategic",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Funding Readiness Review",
      recommendedNextStep: "Clarify readiness, structure and partner narrative before drafting the next funding move.",
      routeReason: ["funding conversations need structure before execution", "project readiness may require project support"],
      secondaryPillars: ["projects"],
    },
    "multi-domain-challenge": {
      category: "ecosystem",
      label: "Multi-domain challenge",
      leadType: "ecosystem",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Strategic Ecosystem Discovery",
      recommendedNextStep: "Run a multi-pillar discovery and confirm the primary execution sequence.",
      routeReason: ["strategy is the default entry for complex ecosystem leads", "multiple pillars are likely involved"],
      secondaryPillars: ["digital", "commerce", "projects"],
    },
    "new-venture": {
      category: "venture",
      label: "New venture",
      leadType: "venture",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Venture Structuring Session",
      recommendedNextStep: "Map the venture logic, positioning and first buildable phase before implementation.",
      routeReason: ["venture cases typically start with positioning and sequencing", "project or lifestyle layers may follow"],
      secondaryPillars: ["projects", "lifestyle"],
    },
    "project-structuring": {
      category: "venture",
      label: "Project structuring",
      leadType: "venture",
      primaryPillar: "strategy",
      recommendedEntryOffer: "Project Structuring Workshop",
      recommendedNextStep: "Clarify the project model, milestones and supporting pillars before delivery work begins.",
      routeReason: ["project structuring needs a strategic frame", "projects pillar may join next"],
      secondaryPillars: ["projects"],
    },
  },
  digital: {
    "ai-implementation": {
      category: "automation",
      label: "AI implementation",
      leadType: "strategic",
      primaryPillar: "digital",
      recommendedEntryOffer: "AI Workflow Discovery",
      recommendedNextStep: "Qualify the workflow, data and business objective before selecting the implementation path.",
      routeReason: ["AI should be grounded in business systems", "strategy may support transformation framing"],
      secondaryPillars: ["strategy"],
    },
    automation: {
      category: "automation",
      label: "Automation",
      leadType: "tactical",
      primaryPillar: "digital",
      recommendedEntryOffer: "Automation Scope Review",
      recommendedNextStep: "Scope the highest-value workflow and confirm dependencies before build work starts.",
      routeReason: ["automation needs a clear workflow target", "digital remains the primary execution owner"],
      secondaryPillars: ["commerce"],
    },
    "crm-workflow": {
      category: "automation",
      label: "CRM / workflow",
      leadType: "tactical",
      primaryPillar: "digital",
      recommendedEntryOffer: "CRM Workflow Review",
      recommendedNextStep: "Review the current CRM flow and define the first operational improvement step.",
      routeReason: ["workflow problems map to digital systems first", "commerce context may need to be preserved"],
      secondaryPillars: ["commerce"],
    },
    "digital-transformation": {
      category: "transformation",
      label: "Digital transformation",
      leadType: "strategic",
      primaryPillar: "digital",
      recommendedEntryOffer: "Digital Transformation Assessment",
      recommendedNextStep: "Start with a structured transformation review and align the digital roadmap with business priorities.",
      routeReason: ["transformation needs structured sequencing", "strategy and commerce often join later"],
      secondaryPillars: ["strategy", "commerce"],
    },
    "multi-domain": {
      category: "ecosystem",
      label: "Multi-domain digital challenge",
      leadType: "ecosystem",
      primaryPillar: "digital",
      recommendedEntryOffer: "Cross-Pillar Digital Discovery",
      recommendedNextStep: "Run a cross-pillar discovery so digital execution does not happen in isolation.",
      routeReason: ["digital entry was chosen, but the brief is broader than one system", "multi-pillar routing is likely"],
      secondaryPillars: ["strategy", "commerce"],
    },
    "website-platform": {
      category: "transformation",
      label: "Website / platform",
      leadType: "tactical",
      primaryPillar: "digital",
      recommendedEntryOffer: "Website Platform Review",
      recommendedNextStep: "Clarify platform goals, decision scope and the first implementation phase.",
      routeReason: ["platform work maps cleanly into digital delivery", "commerce can join when revenue logic matters"],
      secondaryPillars: ["commerce"],
    },
  },
  commerce: {
    "digital-commerce": {
      category: "commerce",
      label: "Commerce + digital layer",
      leadType: "tactical",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Commerce Channel Review",
      recommendedNextStep: "Review the revenue flow and confirm what digital execution is needed to support it.",
      routeReason: ["commerce owns the sales logic", "digital may support platform execution"],
      secondaryPillars: ["digital"],
    },
    "distribution-export": {
      category: "commerce",
      label: "Distribution / export",
      leadType: "strategic",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Distribution Growth Review",
      recommendedNextStep: "Clarify channel structure, export logic and the first commercially realistic step.",
      routeReason: ["distribution issues are commercial system questions first", "strategy can support positioning"],
      secondaryPillars: ["strategy"],
    },
    "marketplace-channel": {
      category: "commerce",
      label: "Marketplace / channel challenge",
      leadType: "tactical",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Channel Optimization Review",
      recommendedNextStep: "Prioritize the most important channel issue and define the first improvement scope.",
      routeReason: ["channel-specific challenge maps to commerce", "digital can join if platform work is required"],
      secondaryPillars: ["digital"],
    },
    "multi-domain": {
      category: "ecosystem",
      label: "Multi-domain commercial challenge",
      leadType: "ecosystem",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Commercial Systems Discovery",
      recommendedNextStep: "Run a broader commercial discovery before locking in one channel or tactic.",
      routeReason: ["the commercial issue spans beyond one channel", "strategy and digital likely support the route"],
      secondaryPillars: ["strategy", "digital"],
    },
    "product-positioning": {
      category: "growth",
      label: "Product positioning",
      leadType: "strategic",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Positioning and Revenue Review",
      recommendedNextStep: "Clarify offer logic, positioning and channel fit before execution.",
      routeReason: ["positioning changes commercial outcomes", "strategy can support the frame"],
      secondaryPillars: ["strategy"],
    },
    "revenue-structure": {
      category: "growth",
      label: "Revenue structure issue",
      leadType: "strategic",
      primaryPillar: "commerce",
      recommendedEntryOffer: "Revenue Architecture Review",
      recommendedNextStep: "Map the revenue bottleneck and determine whether a strategy-led reset is needed.",
      routeReason: ["revenue architecture needs structural thinking", "commerce still owns the first diagnosis"],
      secondaryPillars: ["strategy"],
    },
  },
  industry: {
    "digital-modernization": {
      category: "transformation",
      label: "Industry + digital systems",
      leadType: "strategic",
      primaryPillar: "industry",
      recommendedEntryOffer: "Operational Modernization Review",
      recommendedNextStep: "Review the operational problem and define the modernization path before implementation.",
      routeReason: ["industry context matters before digital tooling", "digital and strategy may support the route"],
      secondaryPillars: ["digital", "strategy"],
    },
    "multi-domain": {
      category: "ecosystem",
      label: "Multi-domain operational challenge",
      leadType: "ecosystem",
      primaryPillar: "industry",
      recommendedEntryOffer: "Operational Systems Discovery",
      recommendedNextStep: "Run a multi-layer operational review before narrowing into one technical intervention.",
      routeReason: ["operational issue spans several capabilities", "industry owns the practical starting point"],
      secondaryPillars: ["digital", "commerce", "strategy"],
    },
    "operational-reliability": {
      category: "operations",
      label: "Operational reliability",
      leadType: "operational",
      primaryPillar: "industry",
      recommendedEntryOffer: "Reliability Review",
      recommendedNextStep: "Start with a technical reliability review and identify the first corrective action.",
      routeReason: ["reliability issue maps directly into industry", "follow-up may include digital monitoring"],
      secondaryPillars: ["digital"],
    },
    "service-process": {
      category: "operations",
      label: "Service / process issue",
      leadType: "operational",
      primaryPillar: "industry",
      recommendedEntryOffer: "Service Process Review",
      recommendedNextStep: "Clarify the process breakdown and the fastest operational improvement step.",
      routeReason: ["service process issue needs operational diagnosis first"],
      secondaryPillars: [],
    },
    "technical-machinery-issue": {
      category: "operations",
      label: "Technical / machinery issue",
      leadType: "operational",
      primaryPillar: "industry",
      recommendedEntryOffer: "Technical Review",
      recommendedNextStep: "Run a technical review and confirm whether the issue is reactive or structural.",
      routeReason: ["the brief starts from a technical issue", "industry is the correct first owner"],
      secondaryPillars: [],
    },
    "technical-sales": {
      category: "operations",
      label: "Technical + sales alignment",
      leadType: "strategic",
      primaryPillar: "industry",
      recommendedEntryOffer: "Technical-Commercial Alignment Review",
      recommendedNextStep: "Clarify the operational and commercial misalignment before defining the next owner.",
      routeReason: ["problem touches both operational capability and revenue logic", "commerce may need to join"],
      secondaryPillars: ["commerce"],
    },
  },
  projects: {
    "investment-readiness": {
      category: "investment",
      label: "Investment readiness",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Investment Readiness Review",
      recommendedNextStep: "Review concept readiness, narrative and the first de-risking phase before investor-facing work.",
      routeReason: ["investment readiness needs project structure first", "strategy may support the business model"],
      secondaryPillars: ["strategy"],
    },
    "multi-domain": {
      category: "ecosystem",
      label: "Multi-domain project",
      leadType: "ecosystem",
      primaryPillar: "projects",
      recommendedEntryOffer: "Project Ecosystem Discovery",
      recommendedNextStep: "Run a broader project discovery so concept, business model and delivery layers stay aligned.",
      routeReason: ["the project is wider than one delivery stream", "strategy and lifestyle often join this route"],
      secondaryPillars: ["strategy", "lifestyle", "digital"],
    },
    "premium-space": {
      category: "venture",
      label: "Premium space / experience",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Premium Space Concept Review",
      recommendedNextStep: "Clarify concept logic, operating format and the first project phase before design expansion.",
      routeReason: ["premium physical concepts need structure before rollout", "lifestyle may refine the experience layer"],
      secondaryPillars: ["lifestyle"],
    },
    "project-structure": {
      category: "venture",
      label: "Project structure / business model",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Project Structuring Session",
      recommendedNextStep: "Define the project model, dependencies and the best first phase before execution.",
      routeReason: ["the request is about structure and sequencing", "strategy may help shape the business layer"],
      secondaryPillars: ["strategy"],
    },
    "resort-hospitality": {
      category: "venture",
      label: "Resort / hospitality project",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Hospitality Project Discovery",
      recommendedNextStep: "Start with project discovery and confirm the hospitality concept before delivery planning.",
      routeReason: ["hospitality project needs concept and delivery structure", "lifestyle and commerce can support the route"],
      secondaryPillars: ["lifestyle", "commerce"],
    },
    "wellness-spa": {
      category: "venture",
      label: "Wellness / spa concept",
      leadType: "venture",
      primaryPillar: "projects",
      recommendedEntryOffer: "Wellness Concept Discovery",
      recommendedNextStep: "Map the wellness concept, operating logic and first development phase before build-out.",
      routeReason: ["wellness concepts need project and experience alignment", "lifestyle may shape the premium layer"],
      secondaryPillars: ["lifestyle", "strategy"],
    },
  },
  lifestyle: {
    "brand-experience": {
      category: "experience",
      label: "Brand experience",
      leadType: "venture",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Brand Experience Concept Session",
      recommendedNextStep: "Clarify the experience logic, audience and delivery frame before expansion.",
      routeReason: ["experience-led work needs concept clarity", "digital or commerce may support rollout"],
      secondaryPillars: ["digital", "commerce"],
    },
    "event-activation": {
      category: "experience",
      label: "Event / activation",
      leadType: "tactical",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Activation Scope Review",
      recommendedNextStep: "Define the activation objective, format and the first delivery checkpoint.",
      routeReason: ["activation needs a clear event scope before execution", "lifestyle is the natural first owner"],
      secondaryPillars: [],
    },
    "hospitality-experience": {
      category: "experience",
      label: "Hospitality / experience format",
      leadType: "venture",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Hospitality Experience Session",
      recommendedNextStep: "Align the hospitality experience concept with the business and project structure.",
      routeReason: ["hospitality format spans experience and operational logic", "projects can support concept execution"],
      secondaryPillars: ["projects", "commerce"],
    },
    "lifestyle-venture": {
      category: "venture",
      label: "Lifestyle venture",
      leadType: "venture",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Lifestyle Venture Discovery",
      recommendedNextStep: "Run a venture discovery and define the strongest first buildable format.",
      routeReason: ["venture-style experience project needs concept and business clarity", "strategy and projects may join"],
      secondaryPillars: ["strategy", "projects"],
    },
    "multi-domain": {
      category: "ecosystem",
      label: "Multi-domain premium project",
      leadType: "ecosystem",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Premium Experience Discovery",
      recommendedNextStep: "Run a multi-pillar discovery so the concept, brand and execution layers stay coherent.",
      routeReason: ["premium initiative spans multiple pillars", "lifestyle is the premium entry context"],
      secondaryPillars: ["strategy", "projects", "digital"],
    },
    "premium-service": {
      category: "experience",
      label: "Premium service concept",
      leadType: "venture",
      primaryPillar: "lifestyle",
      recommendedEntryOffer: "Premium Service Concept Review",
      recommendedNextStep: "Shape the premium service concept and confirm the most coherent first offer layer.",
      routeReason: ["premium service needs concept and business logic", "commerce can support monetization later"],
      secondaryPillars: ["commerce", "digital"],
    },
  },
};

const siteDefaultRouting: Record<SiteKey, InquiryTaxonomyEntry> = {
  portal: {
    category: "ecosystem",
    label: "General ecosystem inquiry",
    leadType: "ecosystem",
    primaryPillar: "strategy",
    recommendedEntryOffer: "Structured Qualification Call",
    recommendedNextStep: "Start with structured qualification and route the inquiry into the best first pillar.",
    routeReason: ["portal inquiries are ecosystem-level", "strategy remains the default entry for complex contexts"],
    secondaryPillars: ["digital", "commerce", "projects"],
  },
  strategy: {
    category: "growth",
    label: "General strategy inquiry",
    leadType: "strategic",
    primaryPillar: "strategy",
    recommendedEntryOffer: "Strategy Session",
    recommendedNextStep: "Schedule a strategy-first discovery and clarify the next decision path.",
    routeReason: ["strategy site inquiry without a narrower type", "default strategy-first routing applies"],
    secondaryPillars: ["digital", "commerce"],
  },
  digital: {
    category: "transformation",
    label: "General digital inquiry",
    leadType: "strategic",
    primaryPillar: "digital",
    recommendedEntryOffer: "Digital Systems Review",
    recommendedNextStep: "Qualify the digital objective and confirm the first implementation step.",
    routeReason: ["digital site inquiry without a narrower type", "digital owns the first qualification"],
    secondaryPillars: ["strategy"],
  },
  commerce: {
    category: "commerce",
    label: "General commerce inquiry",
    leadType: "strategic",
    primaryPillar: "commerce",
    recommendedEntryOffer: "Commerce Review",
    recommendedNextStep: "Clarify the commercial objective and determine the most valuable first move.",
    routeReason: ["commerce site inquiry without a narrower type", "commerce owns the first qualification"],
    secondaryPillars: ["strategy", "digital"],
  },
  industry: {
    category: "operations",
    label: "General industry inquiry",
    leadType: "operational",
    primaryPillar: "industry",
    recommendedEntryOffer: "Operational Review",
    recommendedNextStep: "Review the operational context and identify the most relevant first intervention.",
    routeReason: ["industry site inquiry without a narrower type", "industry owns the first technical review"],
    secondaryPillars: ["digital"],
  },
  projects: {
    category: "venture",
    label: "General projects inquiry",
    leadType: "venture",
    primaryPillar: "projects",
    recommendedEntryOffer: "Project Discovery",
    recommendedNextStep: "Run a project discovery and confirm the first buildable phase.",
    routeReason: ["projects site inquiry without a narrower type", "projects owns the first structuring pass"],
    secondaryPillars: ["strategy", "lifestyle"],
  },
  lifestyle: {
    category: "experience",
    label: "General lifestyle inquiry",
    leadType: "venture",
    primaryPillar: "lifestyle",
    recommendedEntryOffer: "Lifestyle Concept Session",
    recommendedNextStep: "Clarify the premium concept and define the strongest next step before expansion.",
    routeReason: ["lifestyle site inquiry without a narrower type", "lifestyle owns the first concept review"],
    secondaryPillars: ["projects", "strategy"],
  },
};

function dedupePillars(pillars: PillarKey[]) {
  return pillars.filter((pillar, index) => pillars.indexOf(pillar) === index);
}

export function resolveInquiryTaxonomy(
  siteKey: SiteKey,
  inquiryType: InquiryTypeId | undefined,
  routingConfig?: CmsRoutingConfig,
): LeadRoutingDecision {
  const siteDefaults = siteDefaultRouting[siteKey];
  let taxonomyEntry: InquiryTaxonomyEntry | undefined;

  if (inquiryType) {
    taxonomyEntry = inquiryTaxonomyBySite[siteKey][inquiryType];
  }

  const resolved = taxonomyEntry ?? siteDefaults;
  const routeReason = [...resolved.routeReason];
  const candidatePillars = dedupePillars(
    [
      resolved.primaryPillar,
      ...resolved.secondaryPillars,
      ...(routingConfig?.primaryPillar ? [routingConfig.primaryPillar] : []),
      ...(routingConfig?.secondaryPillars ?? []),
    ].filter((pillar): pillar is PillarKey => Boolean(pillar)),
  );

  if (taxonomyEntry && inquiryType) {
    routeReason.push(`taxonomy-match:${siteKey}:${inquiryType}`);
  } else {
    routeReason.push(`taxonomy-default:${siteKey}`);
  }

  if (routingConfig?.primaryPillar && routingConfig.primaryPillar !== resolved.primaryPillar) {
    routeReason.push(`routing-hint:${routingConfig.primaryPillar}`);
  }

  return {
    candidatePillars,
    inquiryCategory: resolved.category,
    leadType: resolved.leadType,
    ...(routingConfig?.defaultOwner ? { owner: routingConfig.defaultOwner } : {}),
    primaryPillar: routingConfig?.primaryPillar ?? resolved.primaryPillar,
    recommendedEntryOffer: resolved.recommendedEntryOffer,
    recommendedNextStep: resolved.recommendedNextStep,
    routeReason,
    secondaryPillars: dedupePillars(
      [
        ...resolved.secondaryPillars,
        ...(routingConfig?.secondaryPillars ?? []),
      ].filter((pillar): pillar is PillarKey => Boolean(pillar) && pillar !== (routingConfig?.primaryPillar ?? resolved.primaryPillar)),
    ),
    ...(routingConfig?.webhookName ? { webhookName: routingConfig.webhookName } : {}),
  };
}

export function getInquiryTypeLabel(siteKey: SiteKey, inquiryType: InquiryTypeId | undefined) {
  if (!inquiryType) {
    return undefined;
  }

  return inquiryTaxonomyBySite[siteKey][inquiryType]?.label;
}
