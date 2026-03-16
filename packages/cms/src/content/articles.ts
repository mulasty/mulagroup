import type { CmsArticleDocument } from "../types";

export const articleDocuments = [
  {
    _id: "article.choosing-the-right-entry-pillar",
    _type: "article",
    language: "en",
    status: "published",
    title: "How to choose the right Mula Group entry point for a complex brief",
    slug: "choosing-the-right-entry-pillar",
    excerpt:
      "A practical guide to deciding whether Strategy, Digital, Commerce, Industry, Projects or Lifestyle should lead the first conversation.",
    body:
      "Complex opportunities rarely fit one service label. This starter article explains how Mula Group thinks about entry logic, when Strategy should lead, and how other pillars become execution layers around a shared objective.",
    pillar: "strategy",
    categories: ["ecosystem", "strategy", "decision-making"],
    featured: true,
    featuredImage: {
      alt: "Mula Group article placeholder",
      assetType: "article",
      title: "Choosing the right entry pillar",
      url: "/brand/logos/mula-group-white.png",
    },
    author: "Mula Group",
    publishedAt: "2026-03-16",
    seo: {
      metaTitle: "Insights | Choosing the right Mula Group entry point",
      metaDescription:
        "A starter insight on how to choose the right Mula Group pillar for a complex business, project or growth brief.",
      ogTitle: "Choosing the right Mula Group entry point",
      ogDescription:
        "A practical framework for deciding which Mula Group pillar should lead the first step.",
      canonicalUrl: "https://mulagroup.eu/insights/choosing-the-right-entry-pillar",
      schemaType: "Article",
    },
  },
  {
    _id: "article.ai-without-operational-chaos",
    _type: "article",
    language: "en",
    status: "published",
    title: "AI implementation without operational chaos",
    slug: "ai-without-operational-chaos",
    excerpt:
      "Why practical AI adoption works best when it is attached to real workflows, real handoffs and a business-first system design.",
    body:
      "This starter Digital insight frames AI as an operational layer rather than a novelty project. It outlines how Mula Group approaches AI, automation and digital infrastructure with enough structure to remain useful at scale.",
    pillar: "digital",
    categories: ["digital", "ai", "automation"],
    featured: true,
    featuredImage: {
      alt: "Mula Digital article placeholder",
      assetType: "article",
      title: "AI implementation without operational chaos",
      url: "/brand/logos/mula-group-white.png",
    },
    author: "Mula Group",
    publishedAt: "2026-03-16",
    seo: {
      metaTitle: "Insights | AI implementation without operational chaos",
      metaDescription:
        "A starter insight on how Mula Group approaches business-grounded AI implementation and automation.",
      ogTitle: "AI implementation without operational chaos",
      ogDescription:
        "How to frame AI and automation as useful business systems instead of hype-driven experiments.",
      canonicalUrl: "https://mulagroup.eu/insights/ai-without-operational-chaos",
      schemaType: "Article",
    },
  },
] satisfies CmsArticleDocument[];
