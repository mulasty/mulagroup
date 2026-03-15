import type { LifestyleManifest } from "@mulagroup/content-models";

import { sharedInquiryFields } from "./shared";

export const lifestyleManifest = {
  type: "pillar",
  key: "lifestyle",
  name: "Lifestyle",
  theme: "lifestyle",
  url: "https://lifestyle.mulagroup.eu",
  seo: {
    title: "Mula Lifestyle | Premium experiences, ventures and brand-led concepts",
    description:
      "Mula Lifestyle designs premium experiences, brand-driven initiatives and lifestyle ventures that connect perception, audience value and business structure.",
  },
  tagline: "Premium experiences, brand-led ventures and structured growth through perception.",
  summary:
    "Mula Lifestyle turns premium ideas, audience experiences and brand-driven ambitions into structured concepts that support recognition, desirability and long-term value.",
  navigation: [
    { href: "#overview", label: "Overview" },
    { href: "#services", label: "Services" },
    { href: "#experience-types", label: "Experience Types" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
  headerCta: { href: "#contact", label: "Discuss a premium project" },
  hero: {
    eyebrow: "Premium experiences & brand-driven ventures",
    title:
      "We design premium experiences, ventures and brand-led concepts with business logic behind them.",
    description:
      "Mula Lifestyle helps shape initiatives where emotion, quality, presentation and growth need to work together. The goal is not just attention, but a refined concept that can perform in practice.",
    primaryCta: { href: "#contact", label: "Discuss a premium project" },
    secondaryCta: { href: "#services", label: "Explore lifestyle services" },
    highlights: [
      "Premium ventures",
      "Experience design",
      "Brand-led initiatives",
      "Hospitality concepts",
      "Integrated experience systems",
    ],
    insights: [
      {
        title: "More than aesthetics",
        description:
          "We treat premium perception and experience as part of a structured growth model, not as a decorative layer on top.",
      },
      {
        title: "Business-aware refinement",
        description:
          "The work balances brand emotion, audience experience and commercial logic so the initiative can grow with coherence.",
      },
      {
        title: "Connected to the ecosystem",
        description:
          "Lifestyle can strengthen Projects, Digital, Commerce and Strategy when an initiative needs a more complete premium execution path.",
      },
    ],
  },
  accentLabel: "Premium experience layer",
  intro: {
    lead: {
      eyebrow: "Lifestyle clarity",
      title: "More than aesthetics. Structured premium experiences.",
      description:
        "This pillar exists for initiatives where the quality of experience directly shapes brand value, audience response and the future growth of the venture.",
    },
    cards: [
      {
        title: "Experience with structure",
        description:
          "We define the logic behind the premium concept so the experience can stay coherent across audience touchpoints and business decisions.",
      },
      {
        title: "Perception tied to value",
        description:
          "Aspirational positioning is strongest when it is supported by a clearer model for audience, offer and delivery.",
      },
      {
        title: "Built to connect",
        description:
          "Lifestyle concepts can become part of larger ventures, premium projects or brand systems when they are designed with the ecosystem in mind.",
      },
    ],
    principles: [
      "Treat premium perception as part of the business model, not only a visual treatment.",
      "Connect audience experience, quality and growth logic in one refined structure.",
      "Build concepts that feel elevated and memorable without losing operational or commercial sense.",
    ],
  },
  servicesIntro: {
    eyebrow: "Lifestyle services",
    title: "What Mula Lifestyle can shape and structure",
    description:
      "Core capabilities for premium ventures, experience-led initiatives and refined audience-facing concepts that still need business logic underneath them.",
  },
  services: [
    {
      title: "Premium Venture Concepts",
      description:
        "Shape premium ideas into stronger venture concepts that connect desirability, audience logic and long-term direction.",
      bestFor:
        "Entrepreneurs or brands creating a premium initiative that needs more structure before expansion.",
      tags: ["Venture framing", "Premium logic", "Audience value"],
    },
    {
      title: "Event & Experience Design",
      description:
        "Design experiences, activations or formats that create stronger perception while remaining credible and commercially aware.",
      bestFor:
        "Initiatives where the quality of the experience directly influences brand response or partnership value.",
      tags: ["Event concepts", "Experience flow", "Audience impact"],
    },
    {
      title: "Brand-Driven Initiatives",
      description:
        "Develop concepts where the brand is expressed through experience, physical interaction or refined presentation instead of only visual identity.",
      bestFor: "Brands extending into more immersive or premium audience-facing formats.",
      tags: ["Brand experience", "Perception", "Concept extension"],
    },
    {
      title: "Lifestyle Project Positioning",
      description:
        "Clarify how a premium or aspirational initiative should be framed so its concept, audience and value feel coherent from the start.",
      bestFor:
        "Projects that need a stronger premium direction before design or execution moves ahead.",
      tags: ["Positioning", "Premium direction", "Concept clarity"],
    },
    {
      title: "Experience Architecture",
      description:
        "Connect touchpoints, audience flow, quality signals and the wider offer into a more structured premium experience system.",
      bestFor: "Businesses where the experience itself is central to differentiation or growth.",
      tags: ["Touchpoints", "Audience journey", "Structured experience"],
    },
    {
      title: "Integrated Experience Systems",
      description:
        "Connect the premium experience layer with Strategy, Projects, Digital or Commerce when the initiative needs more than standalone concept work.",
      bestFor:
        "Multi-layered initiatives that need premium perception to support a wider ecosystem pathway.",
      tags: ["Cross-pillar logic", "System design", "Execution readiness"],
    },
  ],
  experienceTypesIntro: {
    eyebrow: "Experience categories",
    title: "Types of premium and experience-led initiatives we support",
    description:
      "Different premium concepts require different audience logic, experience models and growth structures. The goal is to build something memorable, coherent and valuable rather than merely impressive.",
  },
  experienceTypes: [
    {
      title: "Premium services",
      description:
        "Service concepts where refinement, audience perception and the quality of the experience shape the perceived value of the offer.",
      bestFor:
        "Premium service models that need stronger structure behind the customer experience.",
      tags: ["Service concepts", "Premium positioning", "Audience trust"],
    },
    {
      title: "Events and activations",
      description:
        "Formats designed to create stronger audience connection, brand presence and memorable moments without becoming chaotic or purely promotional.",
      bestFor:
        "Events, launches and activations that need a more coherent concept and audience flow.",
      tags: ["Activations", "Audience moments", "Structured engagement"],
    },
    {
      title: "Hospitality experiences",
      description:
        "Experience-led initiatives where atmosphere, service quality and premium perception must work together as a stronger concept system.",
      bestFor: "Hospitality and guest-facing concepts needing more than surface styling.",
      tags: ["Hospitality", "Guest experience", "Premium standards"],
    },
    {
      title: "Brand-led concepts",
      description:
        "Initiatives where the brand comes to life through experience, design logic and audience-facing formats rather than only communications.",
      bestFor:
        "Brands building a stronger emotional or experiential dimension around their presence.",
      tags: ["Brand worlds", "Experience layer", "Perception design"],
    },
    {
      title: "Lifestyle ventures",
      description:
        "Aspirational ventures that need a clearer premium proposition, stronger audience fit and a model that can evolve toward real growth.",
      bestFor: "Founders building lifestyle-oriented businesses from an early concept stage.",
      tags: ["Lifestyle business", "Concept growth", "Structured premium"],
    },
    {
      title: "Audience-facing premium initiatives",
      description:
        "Projects where quality of presentation, experience and emotional resonance help define the venture's market value.",
      bestFor:
        "Initiatives that need a refined outward-facing layer aligned with broader business goals.",
      tags: ["Audience value", "Premium presence", "Growth support"],
    },
  ],
  audiencesIntro: {
    eyebrow: "Who it's for",
    title: "When Mula Lifestyle is the right premium entry point",
    description:
      "This pillar fits brands, founders and projects that need stronger premium direction, richer audience experience and a more coherent emotional-business layer.",
  },
  audiences: [
    {
      title: "Premium brands",
      description:
        "Brands that need a more refined experience layer to strengthen perception, memorability and audience trust.",
      signals: ["Premium ambition", "Experience gap", "Need for stronger brand presence"],
    },
    {
      title: "Event and activation concepts",
      description:
        "Projects that require a stronger concept, better audience flow and more structured experience thinking behind a visible format.",
      signals: ["Event concept", "Activation planning", "Need for more than styling"],
    },
    {
      title: "Hospitality and lifestyle initiatives",
      description:
        "Initiatives where the quality of the guest or customer experience is central to the value of the offer.",
      signals: [
        "Guest experience pressure",
        "Premium service ambition",
        "Need for coherent concept",
      ],
    },
    {
      title: "Entrepreneurs building aspirational ventures",
      description:
        "Founders shaping a premium or lifestyle business that needs stronger concept architecture before scaling outward.",
      signals: [
        "Early-stage venture",
        "Need for premium direction",
        "Business logic still forming",
      ],
    },
    {
      title: "Multi-pillar projects",
      description:
        "Larger initiatives requiring a premium perception layer connected to project development, digital systems, commerce or strategy.",
      signals: [
        "Cross-pillar opportunity",
        "Need for experience layer",
        "Broader ecosystem support",
      ],
    },
  ],
  processIntro: {
    eyebrow: "Lifestyle process",
    title: "From premium concept and perception to a more structured initiative",
    description:
      "A refined but methodical process that turns early premium ideas into stronger experience architecture and clearer growth direction.",
  },
  process: [
    {
      step: "01",
      title: "Understand",
      description:
        "Map the audience, ambition, context and premium potential behind the concept before moving into visible design decisions.",
    },
    {
      step: "02",
      title: "Define",
      description:
        "Clarify the concept logic, positioning and the intended emotional and experiential role of the initiative.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Connect brand, experience, communication and business logic into a more coherent premium system.",
    },
    {
      step: "04",
      title: "Refine",
      description:
        "Strengthen quality, clarity and audience coherence so the concept feels elevated without becoming vague or overdesigned.",
    },
    {
      step: "05",
      title: "Expand",
      description:
        "Route the initiative into Projects, Digital, Commerce or Strategy when broader growth or execution support is needed.",
    },
  ],
  formatsIntro: {
    eyebrow: "Ways to work with us",
    title: "Practical engagement formats for premium and experience-led development",
    description:
      "The work can begin with a focused concept session or expand into a broader premium initiative architecture when the opportunity is more ambitious.",
  },
  formats: [
    {
      title: "Lifestyle Concept Session",
      description:
        "A first working conversation for clarifying the idea, audience, premium direction and the most sensible next move for the concept.",
      idealFor:
        "Early premium ideas, aspirational ventures and experience concepts needing clearer direction.",
      outcome: "A stronger starting frame and a better-defined premium development path.",
    },
    {
      title: "Event or Experience Blueprint",
      description:
        "A structured process for defining how an event, activation or premium experience should work as a coherent concept.",
      idealFor: "Audience-facing initiatives needing more than styling or ad hoc planning.",
      outcome: "A clearer experience model with stronger audience and concept logic.",
    },
    {
      title: "Brand Experience Structure",
      description:
        "A framework for connecting perception, touchpoints and brand logic into a more intentional premium experience system.",
      idealFor: "Brands that need their premium presence to feel more integrated and memorable.",
      outcome: "A stronger experience architecture around the brand's outward-facing layer.",
    },
    {
      title: "Premium Venture Design",
      description:
        "A deeper concept process for shaping a lifestyle or premium venture with stronger direction, experience logic and business awareness.",
      idealFor: "Founders and projects building a premium venture from concept stage.",
      outcome: "A more credible and better-structured premium venture concept.",
    },
    {
      title: "Integrated Experience System",
      description:
        "A broader architecture process connecting Lifestyle with Projects, Digital, Commerce or Strategy where the initiative needs ecosystem support.",
      idealFor:
        "Complex premium initiatives that need more than one execution layer from the start.",
      outcome: "A stronger premium concept prepared for cross-pillar activation.",
    },
  ],
  differentiatorsIntro: {
    eyebrow: "Why Mula Lifestyle is different",
    title: "Built for perception and structure, not only presentation",
    description:
      "The value comes from treating premium experience as something that can support recognition, desirability and business growth rather than decoration alone.",
  },
  differentiators: [
    {
      title: "Experience connected to business logic",
      description:
        "We shape premium concepts around audience value, positioning and growth potential instead of relying on aesthetics alone.",
      tags: ["Business-aware", "Audience value", "Premium structure"],
    },
    {
      title: "Refinement with real structure",
      description:
        "Premium perception is strongest when the concept behind it is clear, coherent and capable of working in practice.",
      tags: ["Refined execution", "Clarity", "Coherent systems"],
    },
    {
      title: "Ecosystem-ready premium layer",
      description:
        "Lifestyle can strengthen Projects, Digital, Commerce and Strategy when a venture needs a serious premium and experiential dimension.",
      tags: ["Projects", "Digital", "Commerce"],
    },
    {
      title: "Modern premium without cliche",
      description:
        "We avoid loud luxury tropes and focus instead on calm quality, memorable experience and credible premium direction.",
      tags: ["Restraint", "High-trust", "Modern premium"],
    },
  ],
  crossPillarIntro: {
    eyebrow: "From premium concept to wider growth",
    title: "Lifestyle connects into the wider Mula Group ecosystem",
    description:
      "The strongest premium initiatives often begin with clearer strategic direction, then need project structure, digital communication and revenue logic around the experience layer itself.",
  },
  integrations: [
    {
      pillar: "projects",
      href: "https://projects.mulagroup.eu",
      title: "Projects",
      description:
        "Connect premium concepts to larger ventures, spatial initiatives and project-development pathways when the idea needs a broader structure.",
    },
    {
      pillar: "digital",
      href: "https://digital.mulagroup.eu",
      title: "Digital",
      description:
        "Translate premium experiences into stronger digital journeys, communication systems and audience-facing infrastructure.",
    },
    {
      pillar: "commerce",
      href: "https://commerce.mulagroup.eu",
      title: "Commerce",
      description:
        "Support premium initiatives with revenue logic, offer structure and commercial pathways when the concept must also grow financially.",
    },
    {
      pillar: "strategy",
      href: "https://strategy.mulagroup.eu",
      title: "Strategy",
      description:
        "Use Strategy when the premium idea still needs stronger business architecture, venture framing or clearer multi-layered decision logic.",
    },
  ],
  faqsIntro: {
    eyebrow: "Common questions",
    title: "Questions we hear before premium experience work begins",
    description:
      "These are the usual questions that come up before choosing Lifestyle as the right entry point into the ecosystem.",
  },
  faqs: [
    {
      question: "Is this only for events and hospitality concepts?",
      answer:
        "No. Events and hospitality are part of the scope, but the pillar also supports premium services, brand-led initiatives and aspirational ventures that need stronger experience logic.",
    },
    {
      question: "Can you help if the idea is still early-stage?",
      answer:
        "Yes. Early-stage is often the best moment to define premium direction before the concept becomes visually polished but strategically weak.",
    },
    {
      question: "Is Lifestyle more about branding or business?",
      answer:
        "It is about both. The point is to connect perception, experience and premium direction with a concept that can support real growth and execution.",
    },
    {
      question: "Can premium concepts be connected to sales and digital systems?",
      answer:
        "Absolutely. Lifestyle often becomes strongest when it connects to Digital and Commerce so the audience experience also supports communication and monetization.",
    },
    {
      question: "What if I want to build a lifestyle venture from scratch?",
      answer:
        "That is a strong fit. We can help shape the concept, define the premium logic and connect it to Strategy, Projects, Digital or Commerce where needed.",
    },
    {
      question: "How does this pillar connect with larger projects?",
      answer:
        "Lifestyle can work as the premium perception and audience-experience layer inside bigger ventures, destinations or multi-pillar initiatives.",
    },
  ],
  finalCta: {
    eyebrow: "Start with premium clarity",
    title: "Let's shape a more refined and structured premium concept.",
    description:
      "If you are building a premium service, event concept, brand-driven initiative or lifestyle venture, Mula Lifestyle is the right place to begin.",
    primaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Premium%20project",
      label: "Discuss a premium project",
    },
    secondaryCta: {
      href: "mailto:contact@mulagroup.eu?subject=Premium%20concept",
      label: "Send your concept",
    },
    signals: [
      "The initiative needs a stronger premium direction before the concept grows outward.",
      "Experience and perception matter, but there is no structured model behind them yet.",
      "A broader project or venture needs a calmer, higher-value premium layer to feel complete.",
    ],
  },
  inquiry: {
    title: "Tell us about the premium concept, experience or venture you want to shape",
    description:
      "Share the idea, audience or initiative that needs a more refined premium direction. This intake preview reflects the first information we usually ask for before the conversation.",
    fields: {
      ...sharedInquiryFields,
      companyLabel: "Company / Project",
      companyPlaceholder: "Company or project name",
      inquiryTypeLabel: "Type of premium initiative",
      inquiryTypeOptions: [
        { value: "premium-service", label: "Premium service concept" },
        { value: "event-activation", label: "Event / activation" },
        { value: "brand-experience", label: "Brand experience" },
        { value: "lifestyle-venture", label: "Lifestyle venture" },
        { value: "hospitality-experience", label: "Hospitality / experience format" },
        { value: "multi-domain", label: "Multi-domain premium project" },
      ],
    },
    buttonLabel: "Intake preview",
    note: "Use the conversation buttons here to reach us directly and include the same core context shown in this intake preview.",
  },
} satisfies LifestyleManifest;
