import type {
  PillarCardSummary,
  PillarKey,
  PillarManifest,
  SiteKey,
  SiteManifest,
} from "@mulagroup/content-models";

import { commerceManifest } from "./commerce";
import { digitalManifest } from "./digital";
import { industryManifest } from "./industry";
import { lifestyleManifest } from "./lifestyle";
import { portalManifest as basePortalManifest } from "./portal";
import { projectsManifest } from "./projects";
import { strategyManifest } from "./strategy";

export const pillarManifests = {
  strategy: strategyManifest,
  digital: digitalManifest,
  commerce: commerceManifest,
  industry: industryManifest,
  projects: projectsManifest,
  lifestyle: lifestyleManifest,
} satisfies Record<PillarKey, PillarManifest>;

export const pillarCards: PillarCardSummary[] = Object.values(pillarManifests).map((site) => ({
  accentLabel: site.accentLabel,
  capabilities: site.services.flatMap((service) => service.tags).slice(0, 3),
  href: site.url,
  key: site.key,
  name: site.name,
  summary: site.summary,
}));

export const portalManifest = {
  ...basePortalManifest,
  pillars: pillarCards,
};

export const siteManifests: Record<SiteKey, SiteManifest> = {
  portal: portalManifest,
  ...pillarManifests,
};

export function getPortalManifest() {
  return portalManifest;
}

export function getPillarManifest(key: PillarKey) {
  return pillarManifests[key];
}

export function getStrategyManifest() {
  return strategyManifest;
}

export function getDigitalManifest() {
  return digitalManifest;
}

export function getCommerceManifest() {
  return commerceManifest;
}

export function getIndustryManifest() {
  return industryManifest;
}

export function getProjectsManifest() {
  return projectsManifest;
}

export function getLifestyleManifest() {
  return lifestyleManifest;
}

export function getSiteManifest(key: SiteKey) {
  return siteManifests[key];
}

export function getPillarCards() {
  return pillarCards;
}

export function getPillarManifests() {
  return Object.values(pillarManifests);
}

export function buildSiteMetadata(site: SiteManifest) {
  const title =
    site.seo?.title ??
    (site.type === "portal"
      ? "Mula Group | Integrated business ecosystem"
      : `${site.name} | Mula Group ecosystem`);
  const description = site.seo?.description ?? site.summary;

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: site.url,
    },
    openGraph: {
      description,
      siteName: "Mula Group",
      title,
      type: "website",
      url: site.url,
    },
    twitter: {
      card: "summary_large_image",
      description,
      title,
    },
  };
}
