import { sharedInquiryFields } from "./shared";

export const portalManifest = {
  type: "portal",
  key: "portal",
  name: "Mula Group",
  theme: "portal",
  url: "https://mulagroup.eu",
  tagline: "Where strategic clarity, systems and execution connect.",
  summary:
    "Mula Group connects strategic direction, digital systems, commercial growth, technical capability and project development into one structured ecosystem for companies, ventures and complex initiatives.",
  navigation: [
    { href: "#about", label: "About" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#partnerships", label: "Partnerships" },
    { href: "#contact", label: "Contact" }
  ],
  headerCta: { href: "#contact", label: "Start a structured conversation" },
  hero: {
    eyebrow: "Integrated business ecosystem",
    title: "A business ecosystem for companies, ventures and complex initiatives.",
    description:
      "We help clients move from scattered needs to a clearer next step by connecting strategy, digital systems, commerce, technical capability and project development in one structured model.",
    highlights: ["Strategy-first entry", "Multi-pillar execution", "Digital and operational systems"],
    primaryCta: { href: "#contact", label: "Start a structured conversation" },
    secondaryCta: { href: "#ecosystem", label: "Explore the pillars" }
  },
  stats: [
    {
      value: "6",
      label: "Integrated pillars",
      description: "A connected ecosystem spanning strategy, digital, commerce, industry, projects and lifestyle."
    },
    {
      value: "Strategy-led",
      label: "Default entry logic",
      description: "Complex opportunities start with diagnosis, architecture and a clearer next move."
    },
    {
      value: "Execution-aware",
      label: "Built for real delivery",
      description: "Technology and automation are used to improve clarity, speed and scalable execution."
    }
  ],
  about: {
    lead: {
      eyebrow: "About Mula Group",
      title: "One ecosystem. Multiple competencies. Structured growth.",
      description:
        "Mula Group exists for situations where one specialization is not enough. We connect the right capabilities into a clearer path from challenge or opportunity to structured execution."
    },
    cards: [
      {
        title: "Not a single-service company",
        description:
          "We are not designed as an agency, software house or advisory brand in isolation. The ecosystem exists because modern growth rarely depends on one capability alone."
      },
      {
        title: "Built around the right entry point",
        description:
          "We do not force every situation into the same offer. We start by finding the right pillar or combination of pillars for the actual situation."
      },
      {
        title: "Designed for execution",
        description:
          "Our role is to move from architecture into action by connecting the right people, systems and operating layers around the real objective."
      }
    ],
    principles: [
      "Clarify the wider system before choosing the first move.",
      "Connect strategy, digital, commerce and operations around one objective.",
      "Keep every implementation ready for future scale, automation and partner growth."
    ]
  },
  ecosystemIntro: {
    eyebrow: "Ecosystem logic",
    title: "Six integrated pillars of growth.",
    description:
      "Each pillar represents a distinct capability domain. Together they form a connected system designed to support growth, transformation and execution."
  },
  pillars: [],
  capabilityClusters: [
    {
      title: "Strategic direction and venture structuring",
      description:
        "Clarify growth direction, business architecture, venture logic and the next strategic move before execution becomes expensive or confused.",
      tags: ["Strategy sessions", "Business architecture", "Funding readiness"]
    },
    {
      title: "Digital systems and workflow infrastructure",
      description:
        "Design websites, CRM-connected workflows, automation and AI-assisted support around how the business actually sells and operates.",
      tags: ["Web systems", "CRM and automation", "AI workflows"]
    },
    {
      title: "Revenue channels and commercial architecture",
      description:
        "Strengthen channel design, offer positioning, distribution logic and revenue structure so growth is commercially usable.",
      tags: ["Commerce audits", "Channel architecture", "Revenue systems"]
    },
    {
      title: "Technical execution, projects and premium concepts",
      description:
        "Support equipment-heavy operations, investment-led projects, hospitality concepts and premium ventures with stronger structure behind them.",
      tags: ["Technical review", "Project discovery", "Premium concepts"]
    }
  ],
  capabilitiesIntro: {
    eyebrow: "Integrated capabilities",
    title: "What Mula Group can connect and deliver",
    description:
      "Our strength lies not only in individual competencies, but in the ability to combine them into more complete business systems."
  },
  operatingModelIntro: {
    eyebrow: "Operating model",
    title: "From complexity to execution",
    description:
      "We follow a structured approach that moves from understanding and architecture to integration, delivery and long-term growth."
  },
  operatingModel: [
    {
      step: "01",
      title: "Discover",
      description:
        "Understand the business, challenge and growth potential before isolating one symptom from the wider system."
    },
    {
      step: "02",
      title: "Design",
      description:
        "Create the strategic and operational framework that gives the next move structure and direction."
    },
    {
      step: "03",
      title: "Integrate",
      description:
        "Connect the right pillars, systems and capabilities instead of forcing a disconnected single-service answer."
    },
    {
      step: "04",
      title: "Execute",
      description:
        "Move from architecture into implementation across the relevant strategic, digital, commercial or project layers."
    },
    {
      step: "05",
      title: "Scale",
      description:
        "Keep the system extendable so future CRM, analytics, AI routing and content maturity can plug in cleanly."
    }
  ],
  partnerships: {
    lead: {
      eyebrow: "Collaboration models",
      title: "Ways to work with Mula Group",
      description:
        "We work with entrepreneurs, companies, project teams and partners that need more than an isolated service provider."
    },
    models: [
      {
        title: "Business systems and transformation",
        description:
          "For companies that need clearer structure across strategy, digital systems, commercial growth or operational change.",
        tags: ["Strategy-first", "Digital systems", "Cross-pillar execution"]
      },
      {
        title: "Project and venture development",
        description:
          "For ventures, hospitality concepts and premium initiatives that need concept framing, project logic and a path toward execution or partnership.",
        tags: ["Concept structuring", "Investment readiness", "Execution pathways"]
      },
      {
        title: "Strategic partnerships and special situations",
        description:
          "For partners exploring multi-pillar opportunities, joint initiatives or situations that need a more tailored ecosystem route.",
        tags: ["Joint initiatives", "Partnership logic", "Expansion pathways"]
      }
    ],
    principles: [
      "Start with one challenge or opportunity and expand only where it adds real value.",
      "Route into one pillar or several, depending on what the situation actually needs.",
      "Keep the relationship structured, practical and ready for deeper execution."
    ]
  },
  finalCta: {
    eyebrow: "Start the conversation",
    title: "Start with the right structured conversation.",
    description:
      "If the situation touches more than one layer of the business, or you are unsure which pillar should lead, start here. We will help define the most sensible next step and route.",
    signals: [
      "A business challenge spans strategy, digital, commerce or operations",
      "A project or venture needs structure before committing to execution",
      "The right entry point is still unclear"
    ],
    primaryCta: { href: "mailto:contact@mulagroup.eu", label: "Start a structured conversation" },
    secondaryCta: { href: "#ecosystem", label: "See the pillar map" }
  },
  partnershipPrompt: {
    title: "Tell us what needs clearer direction, structure or execution support",
    description:
      "Share the business, project or operational context. If the right pillar is still unclear, this is the best place to start.",
    fields: {
      ...sharedInquiryFields,
      companyLabel: "Company / Project",
      companyPlaceholder: "Company, brand or initiative",
      inquiryTypeLabel: "What best describes the situation?",
      inquiryTypeOptions: [
        { label: "Unclear or multi-layered business challenge", value: "strategy" },
        { label: "Digital systems, AI or automation", value: "digital" },
        { label: "Sales channels, monetization or commerce", value: "commerce" },
        { label: "Technical, machinery or operational support", value: "operational-support" },
        { label: "Project, concept or venture development", value: "project-development" },
        { label: "Premium concept, experience or lifestyle venture", value: "premium-concept" },
        { label: "Partnership or special collaboration", value: "partnership" },
        { label: "General ecosystem inquiry", value: "general-inquiry" }
      ]
    },
    buttonLabel: "Send structured inquiry",
    note: "Your inquiry will be routed into the most sensible next step while keeping one shared intake logic across the ecosystem."
  }
};
