import type { PortalManifest } from "@mulagroup/content-models";

import { sharedInquiryFields } from "./shared";

export const portalManifest = {
  type: "portal",
  key: "portal",
  name: "Mula Group",
  theme: "portal",
  url: "https://mulagroup.eu",
  tagline: "Where strategy, technology and execution connect.",
  summary:
    "Mula Group is a multidisciplinary ecosystem that connects strategy, AI, digital systems, commerce, industry and project execution into one structured model for modern business growth.",
  navigation: [
    { href: "#about", label: "About" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#partnerships", label: "Partnerships" },
    { href: "#contact", label: "Contact" }
  ],
  headerCta: { href: "#contact", label: "Partner with us" },
  hero: {
    eyebrow: "Integrated business ecosystem",
    title: "A business ecosystem designed for structure, growth and execution.",
    description:
      "Mula Group combines strategy, AI, digital infrastructure, commercial growth, operational capability and venture development into one coherent system for ambitious companies and projects.",
    highlights: ["Strategy-led entry", "AI with business purpose", "Projects-ready structure"],
    primaryCta: { href: "#contact", label: "Partner with us" },
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
      value: "AI-enabled",
      label: "Business-first systems",
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
        title: "Built around integration",
        description:
          "Strategy, digital systems, commerce, industry, projects and premium initiatives stay distinct, but they are designed to work as one connected model."
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
      title: "Strategic architecture",
      description:
        "Frame growth, transformation and new initiatives with better diagnosis, business architecture and clearer sequencing.",
      tags: ["Business architecture", "Funding pathways", "Decision clarity"]
    },
    {
      title: "Digital infrastructure and AI",
      description:
        "Build the shared digital layer for web ecosystems, AI-assisted workflows, automation and internal operational tooling.",
      tags: ["AI workflows", "Web ecosystems", "Automation"]
    },
    {
      title: "Commercial and operational systems",
      description:
        "Connect revenue logic, delivery readiness and service capability so growth is grounded in real execution capacity.",
      tags: ["Commerce", "Operational alignment", "Channel design"]
    },
    {
      title: "Venture and premium development",
      description:
        "Shape complex projects, hospitality concepts, investments and experience-led ventures with stronger structure behind them.",
      tags: ["Projects", "Premium ventures", "Experience layer"]
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
        title: "Business solutions",
        description:
          "For companies that need strategic clarity, digital transformation, AI enablement or connected growth systems across more than one function.",
        tags: ["Transformation", "Growth systems", "Cross-pillar execution"]
      },
      {
        title: "Project development",
        description:
          "For ventures, hospitality concepts and premium initiatives that need concept structure, execution pathways and broader ecosystem support.",
        tags: ["Concept structuring", "Investment readiness", "Delivery pathways"]
      },
      {
        title: "Partnership and investment",
        description:
          "For serious collaborators exploring joint initiatives, strategic alliances or ecosystem-linked development opportunities.",
        tags: ["Joint initiatives", "Strategic alliances", "Expansion logic"]
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
    title: "Let's design the right structure for your next move.",
    description:
      "Whether you are growing a company, planning a project, preparing an investment or modernizing execution, Mula Group helps connect the right capabilities into one coherent path.",
    signals: [
      "Business growth and transformation",
      "Project and venture development",
      "Operational modernization and AI enablement"
    ],
    primaryCta: { href: "mailto:contact@mulagroup.eu", label: "Start a conversation" },
    secondaryCta: { href: "#ecosystem", label: "Review the ecosystem" }
  },
  partnershipPrompt: {
    title: "Tell us where complexity, growth or a new initiative needs clearer structure",
    description:
      "Share the context of your business, challenge or opportunity. We use that as the starting point for a more structured conversation.",
    fields: sharedInquiryFields,
    buttonLabel: "Structured intake preview",
    note: "Email is currently the clearest first path. Deeper routing and automation can later extend the same intake structure."
  }
} satisfies PortalManifest;
