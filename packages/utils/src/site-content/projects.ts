import type { ProjectsManifest } from "@mulagroup/content-models";

import { sharedInquiryFields } from "./shared";

export const projectsManifest = {
  type: "pillar",
  key: "projects",
  name: "Projects",
  theme: "projects",
  url: "https://projects.mulagroup.eu",
  seo: {
    title: "Mula Projects | Structured development for premium concepts and ventures",
    description:
      "Mula Projects shapes wellness concepts, premium spaces, investment pathways and complex ventures into coherent project systems ready for growth and execution.",
  },
  tagline: "Project architecture, investment logic and premium concept development.",
  summary:
    "Mula Projects turns ambitious ideas, spaces and ventures into structured project pathways that connect concept clarity, business logic and ecosystem-backed execution.",
  navigation: [
    { href: "#overview", label: "Overview" },
    { href: "#services", label: "Services" },
    { href: "#project-types", label: "Project Types" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
  headerCta: { href: "#contact", label: "Discuss a project" },
  hero: {
    eyebrow: "Project concepts, spaces & development logic",
    title: "We design the structure behind ambitious projects, spaces and ventures.",
    description:
      "Mula Projects helps shape concepts that need more than aesthetics. We connect idea, experience, business model and development logic into a clearer pathway toward execution.",
    primaryCta: { href: "#contact", label: "Discuss a project" },
    secondaryCta: { href: "#services", label: "Explore project services" },
    highlights: [
      "Project concepts",
      "Investment logic",
      "Wellness & resort",
      "Experience design",
      "Integrated architecture",
    ],
    insights: [
      {
        title: "More than inspiration",
        description:
          "We structure projects so concept, space and business logic can move together toward a real next stage.",
      },
      {
        title: "Built for serious development",
        description:
          "The work is shaped for initiatives that need direction, credibility and a pathway toward partnership or implementation.",
      },
      {
        title: "Connected to the ecosystem",
        description:
          "Projects can route into Strategy, Digital, Commerce, Industry and Lifestyle depending on what the initiative needs next.",
      },
    ],
  },
  accentLabel: "Project architecture",
  intro: {
    lead: {
      eyebrow: "Project clarity",
      title: "More than a concept. A structured path for project development.",
      description:
        "This pillar is built for initiatives where space, experience, investment logic and business direction must come together before execution becomes viable.",
    },
    cards: [
      {
        title: "Concept plus business logic",
        description:
          "We shape projects around both experiential quality and the business model needed to support long-term growth.",
      },
      {
        title: "Structure before presentation",
        description:
          "Instead of jumping into visuals, we define the logic that makes a project credible, usable and worth developing further.",
      },
      {
        title: "Prepared for ecosystem support",
        description:
          "Once the project architecture is clear, the initiative can connect with the right execution layers across the wider ecosystem.",
      },
    ],
    principles: [
      "Treat projects as systems that connect space, experience, business logic and execution.",
      "Build concept clarity before expensive development, partnership or implementation decisions.",
      "Use the ecosystem to strengthen projects with strategy, digital, commerce, operations and premium experience layers.",
    ],
  },
  servicesIntro: {
    eyebrow: "Project services",
    title: "What Mula Projects can structure and design",
    description:
      "Core capabilities for ambitious initiatives that need a stronger concept, investment logic and development model.",
  },
  services: [
    {
      title: "Project Concept Design",
      description:
        "Shape the central concept of a project so place, purpose, experience and growth potential work together in one direction.",
      bestFor:
        "Early-stage initiatives that need a stronger project idea before deeper development begins.",
      tags: ["Concept logic", "Direction", "Project identity"],
    },
    {
      title: "Investment Structure Design",
      description:
        "Clarify how the project can be framed, sequenced and positioned for partnership, capital readiness or long-term development.",
      bestFor: "Projects that need stronger credibility before investor or partner conversations.",
      tags: ["Investment readiness", "Structure", "Partnership logic"],
    },
    {
      title: "Wellness & Resort Concepts",
      description:
        "Design structured concepts for wellness, hospitality and destination-led initiatives that depend on experience and business coherence together.",
      bestFor: "Wellness, spa and resort ideas needing more than design inspiration.",
      tags: ["Hospitality", "Wellness", "Destination models"],
    },
    {
      title: "Premium Space Development Logic",
      description:
        "Connect premium environments, spatial identity and operating logic into a stronger development model for the project.",
      bestFor: "Projects where the physical space must support a premium business proposition.",
      tags: ["Spatial logic", "Premium environments", "Development structure"],
    },
    {
      title: "Experience-Based Business Models",
      description:
        "Create a stronger model for how the experience is delivered, monetized and expanded without becoming vague or decorative.",
      bestFor: "Projects built around destination, hospitality or experience-led value.",
      tags: ["Experience design", "Monetization", "Business model"],
    },
    {
      title: "Integrated Project Architecture",
      description:
        "Connect concept, digital, commercial, operational and strategic layers when the initiative needs a full ecosystem pathway.",
      bestFor: "Multi-layered projects that cannot be solved by one specialization alone.",
      tags: ["Cross-pillar logic", "Execution routes", "Integrated development"],
    },
  ],
  projectTypesIntro: {
    eyebrow: "Project categories",
    title: "Project types we help shape into structured development pathways",
    description:
      "Different ventures require different architecture. The goal is to define the right path based on concept, site, market and growth ambition.",
  },
  projectTypes: [
    {
      title: "Wellness & spa concepts",
      description:
        "Projects where recovery, wellbeing, premium experience and business logic must be aligned from the start.",
      bestFor:
        "Founders or investors shaping wellness destinations, spa concepts or retreat-led ventures.",
      tags: ["Wellness", "Experience", "Premium positioning"],
    },
    {
      title: "Resort & hospitality projects",
      description:
        "Hospitality initiatives that need stronger project logic, guest experience structure and development direction before execution.",
      bestFor: "Resort, hotel and hospitality ideas requiring more than location-based appeal.",
      tags: ["Hospitality", "Destination value", "Growth pathways"],
    },
    {
      title: "Premium lifestyle spaces",
      description:
        "Concepts where space, brand perception and user experience must work together as part of a serious business model.",
      bestFor: "Premium environments that need structure beyond visual inspiration.",
      tags: ["Lifestyle spaces", "Brand layer", "Business fit"],
    },
    {
      title: "Experience-led destinations",
      description:
        "Initiatives designed around memorable use, premium atmosphere and a stronger destination logic tied to real market potential.",
      bestFor:
        "Projects that need a differentiated experiential identity with credible growth structure.",
      tags: ["Destination concepts", "Experience architecture", "Market logic"],
    },
    {
      title: "Mixed-use concepts",
      description:
        "Projects combining several functions or value layers that need clearer sequencing, positioning and development coherence.",
      bestFor: "Complex initiatives where one concept must support several business outcomes.",
      tags: ["Multi-function", "Sequencing", "Project coherence"],
    },
    {
      title: "Investment-ready pathways",
      description:
        "Projects that need to move from potential to a more investable, partner-ready and clearly structured next stage.",
      bestFor: "Initiatives approaching investor, owner or partnership conversations.",
      tags: ["Readiness", "Partnerships", "Structured growth"],
    },
  ],
  audiencesIntro: {
    eyebrow: "Who it's for",
    title: "When Mula Projects is the right place to begin",
    description:
      "This pillar fits ambitious ventures, spaces and concepts that need clearer project logic before execution becomes sensible.",
  },
  audiences: [
    {
      title: "Investors and property owners",
      description:
        "People with a site, property or opportunity that needs a more coherent development direction and project model.",
      signals: [
        "Unused potential",
        "Need for concept clarity",
        "Partnership or investment planning",
      ],
    },
    {
      title: "Entrepreneurs building new ventures",
      description:
        "Founders creating an initiative that depends on concept strength, experience design and a serious business pathway together.",
      signals: ["Early-stage idea", "Need for stronger architecture", "Unclear next step"],
    },
    {
      title: "Wellness and hospitality concepts",
      description:
        "Projects where guest experience, premium positioning and operating logic must be designed as one system.",
      signals: ["Experience-led concept", "Need for coherent model", "Premium ambition"],
    },
    {
      title: "Premium brands creating physical experiences",
      description:
        "Brands extending into spaces, destinations or premium environments that need more than interior or marketing thinking.",
      signals: [
        "Physical activation",
        "Brand-to-space translation",
        "Need for structured development",
      ],
    },
    {
      title: "Multi-pillar ventures",
      description:
        "Initiatives requiring a central project architecture that can later connect with Strategy, Digital, Commerce, Industry or Lifestyle.",
      signals: ["Cross-pillar complexity", "Need for central concept", "Broader ecosystem support"],
    },
  ],
  processIntro: {
    eyebrow: "Projects process",
    title: "From potential to a more structured project concept",
    description:
      "A calm, methodical process that helps ambitious ideas become clearer, more credible and better prepared for development.",
  },
  process: [
    {
      step: "01",
      title: "Explore",
      description:
        "Understand the site, opportunity, ambition, audience and context shaping the project from the start.",
    },
    {
      step: "02",
      title: "Define",
      description:
        "Clarify the concept logic, experience direction and strategic role of the initiative.",
    },
    {
      step: "03",
      title: "Structure",
      description:
        "Connect project idea, business model, communication and growth layers into one coherent architecture.",
    },
    {
      step: "04",
      title: "Prepare",
      description:
        "Organize the project for the next stage, whether that means partnership, investment readiness or implementation planning.",
    },
    {
      step: "05",
      title: "Expand",
      description:
        "Route the project into the right ecosystem pillars when execution requires digital, commercial, operational or premium experience support.",
    },
  ],
  formatsIntro: {
    eyebrow: "Ways to work with us",
    title: "Practical engagement formats for project discovery and development",
    description:
      "The work can begin with early-stage concept clarification or expand into a broader architecture process when the opportunity is more complex.",
  },
  formats: [
    {
      title: "Project Discovery Session",
      description:
        "A focused first conversation for sorting potential, identifying the real project question and framing the most sensible next move.",
      idealFor:
        "Early-stage ideas, spatial opportunities or investment concepts that need clearer direction.",
      outcome: "A stronger project frame and a recommended next development step.",
    },
    {
      title: "Concept Blueprint",
      description:
        "A structured process for defining the project's core idea, user experience, business role and development direction.",
      idealFor:
        "Initiatives that need a more coherent concept before deeper execution work begins.",
      outcome: "A documented concept structure that can guide future development and decisions.",
    },
    {
      title: "Investment Readiness Path",
      description:
        "A practical framework for strengthening how the project is positioned for capital, partnership or serious next-stage review.",
      idealFor: "Projects preparing for investor-facing or owner-level conversations.",
      outcome: "A more credible and better-structured development narrative.",
    },
    {
      title: "Premium Experience Design",
      description:
        "A concept process focused on environments and initiatives where space, experience and premium perception matter deeply.",
      idealFor:
        "Wellness, hospitality or premium destination concepts with high experiential ambition.",
      outcome: "A more coherent experience model connected to business and development logic.",
    },
    {
      title: "Integrated Project Architecture",
      description:
        "A broader multi-pillar process that connects strategy, digital, commerce, industry and lifestyle support around one central project concept.",
      idealFor: "Complex ventures that need the wider ecosystem from the beginning.",
      outcome: "A stronger project structure prepared for cross-pillar activation.",
    },
  ],
  differentiatorsIntro: {
    eyebrow: "Why Mula Projects is different",
    title: "Built for structured development, not just project storytelling",
    description:
      "The value comes from connecting idea, space, experience and business logic into a project architecture that can actually move forward.",
  },
  differentiators: [
    {
      title: "Concept plus business logic",
      description:
        "We do not separate experience, space and business thinking. Strong projects need those layers to support each other from the start.",
      tags: ["Concept clarity", "Business relevance", "Coherent development"],
    },
    {
      title: "Prepared for real execution pathways",
      description:
        "Projects are shaped with future strategy, digital, commercial and operational needs in view instead of staying as static ideas.",
      tags: ["Execution awareness", "Multi-pillar fit", "Scalable pathways"],
    },
    {
      title: "Premium without cliche",
      description:
        "The work aims for elegance, quality and high trust without falling into decorative luxury or vague visionary language.",
      tags: ["Premium restraint", "High-trust", "Serious presentation"],
    },
    {
      title: "Ecosystem-level support",
      description:
        "Projects can connect with Strategy, Digital, Commerce, Industry and Lifestyle so the venture grows as a system rather than a pitch deck.",
      tags: ["Strategy", "Digital", "Lifestyle"],
    },
  ],
  crossPillarIntro: {
    eyebrow: "From concept to ecosystem-backed execution",
    title: "Projects connects ambitious initiatives to the wider Mula Group model",
    description:
      "The strongest projects rarely succeed on concept alone. They often need strategic framing, digital infrastructure, revenue design, operational depth and premium experience layers working together.",
  },
  integrations: [
    {
      pillar: "strategy",
      href: "https://strategy.mulagroup.eu",
      title: "Strategy",
      description:
        "Use Strategy when the project still needs stronger business architecture, venture framing or decision clarity before deeper development.",
    },
    {
      pillar: "digital",
      href: "https://digital.mulagroup.eu",
      title: "Digital",
      description:
        "Support project trust, communication, workflow and growth with the right digital infrastructure when the concept moves forward.",
    },
    {
      pillar: "commerce",
      href: "https://commerce.mulagroup.eu",
      title: "Commerce",
      description:
        "Connect the project with revenue pathways, channel logic or monetization architecture when the business model needs stronger definition.",
    },
    {
      pillar: "industry",
      href: "https://industry.mulagroup.eu",
      title: "Industry",
      description:
        "Bring operational or technical depth into the project where execution depends on real-world capability and service logic.",
    },
    {
      pillar: "lifestyle",
      href: "https://lifestyle.mulagroup.eu",
      title: "Lifestyle",
      description:
        "Extend the project into premium experience, perception and brand-led growth when the concept benefits from a stronger lifestyle layer.",
    },
  ],
  faqsIntro: {
    eyebrow: "Common questions",
    title: "Questions we hear before project development work begins",
    description:
      "These are the most common questions people raise before choosing Projects as the right entry point into the ecosystem.",
  },
  faqs: [
    {
      question: "Is this only for real estate or hospitality projects?",
      answer:
        "No. Hospitality and spatial concepts are one part of the scope, but the pillar also supports broader ventures, destinations and premium initiatives where project architecture matters.",
    },
    {
      question: "Can you help if the idea is still early-stage?",
      answer:
        "Yes. Early-stage is often the right moment to start because the work is designed to clarify direction before weak assumptions become expensive.",
    },
    {
      question: "Do you support investor-facing project structure?",
      answer:
        "Yes. We can help shape the logic, narrative and readiness of a project before investor or partnership conversations.",
    },
    {
      question: "Can Projects be connected with digital and commercial planning?",
      answer:
        "Absolutely. Many projects need digital infrastructure, revenue logic and strategic framing to become more credible and executable.",
    },
    {
      question: "Is this about architecture or business?",
      answer:
        "It is about both in the sense that concept, space and business model must align. The pillar sits above a single discipline and helps create coherence across them.",
    },
    {
      question: "What happens after the concept stage?",
      answer:
        "Once the architecture is clear, the project can move into the relevant Mula Group pillars for deeper strategic, digital, commercial, operational or premium execution support.",
    },
  ],
  finalCta: {
    eyebrow: "Start with project clarity",
    title: "Let's structure the right path for your next project.",
    description:
      "If you are shaping a wellness concept, premium space, destination-led venture or investment-oriented initiative, Mula Projects is the right place to begin.",
    primaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Project%20discussion",
      label: "Discuss a project",
    },
    secondaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Project%20context",
      label: "Send your project context",
    },
    signals: [
      "The opportunity feels promising, but the project still lacks a coherent development model.",
      "A location, concept or venture idea needs stronger business and experience logic before the next step.",
      "Several capabilities will likely be needed, but there is no central project architecture yet.",
    ],
  },
  inquiry: {
    title: "Tell us what kind of project needs stronger structure",
    description:
      "Share the site, idea or initiative that needs a clearer development pathway. This intake preview reflects the first information we usually ask for before the conversation.",
    fields: {
      ...sharedInquiryFields,
      companyLabel: "Company / Project",
      companyPlaceholder: "Company or project name",
      inquiryTypeLabel: "Project type",
      inquiryTypeOptions: [
        { value: "wellness-spa", label: "Wellness / spa concept" },
        { value: "resort-hospitality", label: "Resort / hospitality project" },
        { value: "premium-space", label: "Premium space / experience" },
        { value: "investment-readiness", label: "Investment readiness" },
        { value: "project-structure", label: "Project structure / business model" },
        { value: "multi-domain", label: "Multi-domain project" },
      ],
    },
    buttonLabel: "Initial project conversation context",
    note: "Use the conversation buttons on the left to reach us directly and include the same core context shown in this intake preview.",
  },
} satisfies ProjectsManifest;
