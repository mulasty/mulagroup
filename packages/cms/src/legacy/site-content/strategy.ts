import { sharedInquiryFields } from "./shared";

export const strategyManifest = {
  type: "pillar",
  key: "strategy",
  name: "Strategy",
  theme: "strategy",
  url: "https://strategy.mulagroup.eu",
  seo: {
    title: "Mula Strategy | Business architecture and growth strategy",
    description:
      "Mula Strategy designs structured pathways for growth, ventures, funding logic and multi-domain business challenges.",
  },
  tagline: "Business architecture, strategic clarity and structured growth logic.",
  summary:
    "Mula Strategy helps companies, ventures and complex projects turn fragmented ambition into a coherent structure for growth, funding, transformation and execution.",
  navigation: [
    { href: "#overview", label: "Overview" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#fit", label: "Who it's for" },
    { href: "#contact", label: "Contact" },
  ],
  headerCta: { href: "#contact", label: "Book a strategy conversation" },
  hero: {
    eyebrow: "Strategic advisory & business architecture",
    title: "We design the strategic structure behind ambitious business growth.",
    description:
      "Mula Strategy helps companies and ventures connect growth, funding, transformation, operations and execution into one clear path forward.",
    primaryCta: { href: "#contact", label: "Book a strategy conversation" },
    secondaryCta: { href: "#services", label: "Explore services" },
    highlights: [
      "Growth strategy",
      "Business architecture",
      "Funding pathways",
      "Venture design",
      "Multi-domain integration",
    ],
    insights: [
      {
        title: "Entry point for complexity",
        description:
          "Start here when a business, project or initiative needs structure before choosing the next operational move.",
      },
      {
        title: "Built for execution",
        description:
          "The work is designed to become a practical roadmap, not a disconnected advisory document.",
      },
      {
        title: "Connected to the ecosystem",
        description:
          "Once the right architecture is defined, Strategy can route into Digital, Commerce, Projects, Industry or Lifestyle.",
      },
    ],
  },
  accentLabel: "Business architecture",
  intro: {
    lead: {
      eyebrow: "Strategic clarity",
      title: "More than consulting. Structured business architecture.",
      description:
        "We work in moments where business growth, transformation or project development has too many moving parts for isolated advice to be enough.",
    },
    cards: [
      {
        title: "Business context first",
        description:
          "We begin with the real operating context, commercial pressure and structural constraints behind the challenge.",
      },
      {
        title: "Architecture before activity",
        description:
          "Instead of pushing random tactics, we define the logic, priorities and sequencing that make execution viable.",
      },
      {
        title: "Decision clarity that travels",
        description:
          "The outcome is a clearer model of action that can be implemented internally or expanded into the wider ecosystem.",
      },
    ],
    principles: [
      "Clarify the real objective before investing in tools, channels or delivery.",
      "Connect funding, execution and growth logic into one coherent direction.",
      "Turn ambiguity into a sequence of decisions, owners and next moves.",
    ],
  },
  servicesIntro: {
    eyebrow: "Strategy services",
    title: "What Mula Strategy can structure and design",
    description:
      "Focused strategic support across growth, ventures, funding logic and multi-layered business situations.",
  },
  services: [
    {
      title: "Growth Strategy",
      description:
        "Strategic direction for companies that need clearer priorities, better growth sequencing and stronger alignment around the next stage.",
      bestFor: "Growing companies facing pressure to move faster with more clarity.",
      tags: ["Priorities", "Positioning", "Growth logic"],
    },
    {
      title: "Business Architecture",
      description:
        "Design of a more coherent business model, operating structure and decision framework for complex organizations or initiatives.",
      bestFor: "Businesses that need a stronger model before scaling activity.",
      tags: ["Operating model", "Decision design", "Structure"],
    },
    {
      title: "Venture Design",
      description:
        "Architecture for new ventures, concept-led initiatives and ambitious ideas that need commercial and strategic coherence before launch.",
      bestFor: "Founders, entrepreneurs and partners shaping a new initiative.",
      tags: ["Concept logic", "Venture framing", "Go-to-market fit"],
    },
    {
      title: "Funding & Grants Pathways",
      description:
        "Support for projects that need stronger readiness for financing, grants, public funding logic or partner conversations.",
      bestFor: "Projects that need to improve funding logic before moving ahead.",
      tags: ["Readiness", "Funding logic", "Grants pathways"],
    },
    {
      title: "Strategic Project Planning",
      description:
        "Structured planning for larger initiatives that involve multiple stakeholders, stages, risks and operational dependencies.",
      bestFor: "Projects that need a clearer roadmap, milestones and ownership logic.",
      tags: ["Roadmaps", "Dependencies", "Execution path"],
    },
    {
      title: "Multi-domain Integration",
      description:
        "Strategic design for cases that must connect business direction with digital systems, commerce, operations or project delivery.",
      bestFor: "Challenges that cross more than one specialization and need one model.",
      tags: ["Cross-pillar logic", "Integration", "Activation"],
    },
  ],
  audiencesIntro: {
    eyebrow: "Who it's for",
    title: "When Strategy is the right place to start",
    description:
      "This pillar is designed for people and teams facing decisions that affect multiple layers of growth, structure or execution.",
  },
  audiences: [
    {
      title: "Growing companies",
      description:
        "Businesses that need a sharper growth model, clearer priorities and a stronger structure before expanding further.",
      signals: ["New stage of growth", "Conflicting priorities", "Need for clearer direction"],
    },
    {
      title: "Traditional businesses in transition",
      description:
        "Operators entering digital transformation, automation or commercial change without wanting to lose operational control.",
      signals: ["Digital pressure", "Operational complexity", "Need for transformation logic"],
    },
    {
      title: "New ventures and concept-led ideas",
      description:
        "Founders and project creators who need architecture, business logic and a credible strategic base for the next move.",
      signals: [
        "Early-stage concept",
        "Business model questions",
        "Need for structure before launch",
      ],
    },
    {
      title: "Investment and partnership-led projects",
      description:
        "Initiatives that need stronger framing, clearer pathways and better preparation for partner or funding conversations.",
      signals: ["Partnership planning", "Funding readiness", "Project positioning"],
    },
    {
      title: "Multi-layered business challenges",
      description:
        "Situations where growth, operations, digital, commerce and execution are too connected to solve in one silo.",
      signals: [
        "Cross-domain dependencies",
        "Complex decision set",
        "Need for integrated next steps",
      ],
    },
  ],
  processIntro: {
    eyebrow: "Strategic process",
    title: "From challenge to structured direction",
    description:
      "A calm, methodical process that turns complexity into a practical route toward execution and growth.",
  },
  process: [
    {
      step: "01",
      title: "Understand",
      description:
        "Map the business context, ambition, commercial pressure and structural reality behind the challenge.",
    },
    {
      step: "02",
      title: "Diagnose",
      description:
        "Identify bottlenecks, hidden dependencies, weak assumptions and the real drivers of growth or friction.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Create the architecture of the strategy, venture, project or transformation pathway.",
    },
    {
      step: "04",
      title: "Connect",
      description:
        "Define the right combination of capabilities, systems and ecosystem routes for the next stage.",
    },
    {
      step: "05",
      title: "Activate",
      description:
        "Prepare the project for implementation, internal execution or expansion into the relevant Mula Group pillars.",
    },
  ],
  formatsIntro: {
    eyebrow: "Ways to work with us",
    title: "Strategic formats for different levels of complexity",
    description:
      "The engagement model can stay focused and lightweight or expand into a deeper architecture process when the opportunity requires it.",
  },
  formats: [
    {
      title: "Strategy Session",
      description:
        "A focused conversation designed to clarify the situation, frame the challenge and identify the most sensible next direction.",
      idealFor: "Early diagnosis, decision pressure or a high-value first conversation.",
      outcome: "A clearer problem frame and a recommended next step.",
    },
    {
      title: "Business Architecture Sprint",
      description:
        "A short structured process for designing the operating logic, priorities and growth framework of a business or initiative.",
      idealFor: "Companies that need stronger strategic structure without a long consulting cycle.",
      outcome: "A sharper model for growth, roles, priorities and sequencing.",
    },
    {
      title: "Venture Blueprint",
      description:
        "A more developed architecture for a new project, venture or concept that needs commercial and strategic coherence.",
      idealFor: "New initiatives that need structure before launch, partner outreach or execution.",
      outcome: "A documented pathway for the venture, concept or opportunity.",
    },
    {
      title: "Funding Readiness",
      description:
        "Preparation of the logic, structure and narrative needed for financing, grants or partner conversations.",
      idealFor: "Projects where funding or grant-readiness influences the next move.",
      outcome: "A clearer financing path and better strategic readiness.",
    },
    {
      title: "Strategic Ecosystem Design",
      description:
        "A broader strategic process that connects Strategy with the right parts of the Mula Group ecosystem from the beginning.",
      idealFor:
        "Complex briefs that will likely move into Digital, Commerce, Projects or operational execution.",
      outcome: "A multi-pillar architecture ready for activation.",
    },
  ],
  differentiatorsIntro: {
    eyebrow: "Why Mula Strategy is different",
    title: "Built for integration, not just recommendations",
    description:
      "The value comes from how strategy is connected to execution logic, business reality and the wider ecosystem.",
  },
  differentiators: [
    {
      title: "Cross-domain thinking",
      description:
        "We consider strategy in relation to digital systems, commercial pathways, technical reality and project delivery.",
      tags: ["Multi-domain", "Systems view", "Connected decisions"],
    },
    {
      title: "Execution-aware planning",
      description:
        "Recommendations are shaped around what can actually be activated, resourced and implemented after the strategy work.",
      tags: ["Practical", "Operational", "Implementation logic"],
    },
    {
      title: "Ecosystem routing",
      description:
        "Once the architecture is clear, relevant Mula Group pillars can support delivery instead of leaving the plan isolated.",
      tags: ["Digital", "Commerce", "Projects"],
    },
    {
      title: "Clarity under complexity",
      description:
        "We are strongest when the challenge involves too many moving parts for a generic advisory model to be useful.",
      tags: ["Complexity", "Structure", "Next steps"],
    },
  ],
  crossPillarIntro: {
    eyebrow: "From architecture to activation",
    title: "Strategy connects the wider Mula Group ecosystem",
    description:
      "Once the right structure is defined, the project can move into the relevant execution layer without losing coherence.",
  },
  integrations: [
    {
      pillar: "digital",
      href: "https://digital.mulagroup.eu",
      title: "Digital",
      description:
        "Translate strategic decisions into websites, AI-enabled systems, automation and operating infrastructure.",
    },
    {
      pillar: "commerce",
      href: "https://commerce.mulagroup.eu",
      title: "Commerce",
      description:
        "Connect the strategy into revenue logic, commercial channels, product positioning and sales architecture.",
    },
    {
      pillar: "projects",
      href: "https://projects.mulagroup.eu",
      title: "Projects",
      description:
        "Develop larger concepts, ventures and investment-led initiatives into structured project pathways.",
    },
    {
      pillar: "industry",
      href: "https://industry.mulagroup.eu",
      title: "Industry",
      description:
        "Route complex operational or technical challenges into real-world execution depth and industrial capability.",
    },
    {
      pillar: "lifestyle",
      href: "https://lifestyle.mulagroup.eu",
      title: "Lifestyle",
      description:
        "Extend a strong strategy into premium concepts, experience-led ventures and brand-driven growth layers.",
    },
  ],
  faqsIntro: {
    eyebrow: "Common questions",
    title: "Questions we hear before the work begins",
    description:
      "These are the typical concerns people raise before choosing Strategy as the entry point.",
  },
  faqs: [
    {
      question: "What kind of businesses or projects fit Mula Strategy?",
      answer:
        "We work with growing companies, new ventures, project teams and investment-shaped initiatives that need clearer structure before the next operational move.",
    },
    {
      question: "Is this only for large companies?",
      answer:
        "No. The fit depends more on the complexity of the decision or opportunity than on company size. Smaller ventures can benefit when the situation is strategically dense.",
    },
    {
      question: "Can you help with grants or financing logic?",
      answer:
        "Yes. We can help frame the project, clarify readiness and design a more coherent pathway for grants, funding or partner conversations.",
    },
    {
      question: "What if the project is still early-stage?",
      answer:
        "That is often the right moment to start. Early strategic architecture can prevent weak sequencing, vague positioning and expensive rework later.",
    },
    {
      question: "Can strategy work continue into implementation?",
      answer:
        "Yes. When the direction is defined, the work can extend into Digital, Commerce, Projects, Industry or Lifestyle depending on what the initiative needs next.",
    },
    {
      question: "What happens after the strategy process?",
      answer:
        "You leave with a clearer structure, more precise next steps and a stronger basis for execution, partnership building or routing into the rest of the ecosystem.",
    },
  ],
  finalCta: {
    eyebrow: "Start with strategic clarity",
    title: "Let's map the right direction before the next move.",
    description:
      "If you are facing a growth decision, shaping a new venture, exploring funding or trying to connect several moving parts into one system, Strategy is the right place to begin.",
    primaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Strategy%20conversation",
      label: "Book a strategy conversation",
    },
    secondaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Project%20context",
      label: "Send project context",
    },
    signals: [
      "The business is moving, but the structure is no longer clear.",
      "A new initiative needs logic before launch, funding or partner outreach.",
      "Several capabilities must connect, but there is no shared decision model yet.",
    ],
  },
  inquiry: {
    title: "Tell us where the challenge sits today",
    description:
      "Share the business, project or transformation context that needs structure. We use this intake to understand the situation before the first strategic conversation.",
    fields: {
      ...sharedInquiryFields,
      companyLabel: "Company / Project",
      companyPlaceholder: "Company or project name",
      inquiryTypeLabel: "Type of challenge",
      inquiryTypeOptions: [
        { value: "business-growth", label: "Business growth" },
        { value: "new-venture", label: "New venture" },
        { value: "funding-grants", label: "Funding / grants" },
        { value: "project-structuring", label: "Project structuring" },
        { value: "digital-transformation-direction", label: "Digital transformation direction" },
        { value: "multi-domain-challenge", label: "Multi-domain challenge" },
      ],
    },
    buttonLabel: "Send strategic inquiry",
    note: "This structured intake helps route the inquiry into the right strategic next step while preserving the full project context.",
  },
};
