import type { StrategyManifest } from "@mulagroup/content-models";

import {
  StrategyAudienceSection,
  StrategyConnectionsSection,
  StrategyContactSection,
  StrategyDifferentiatorsSection,
  StrategyFaqSection,
  StrategyFormatsSection,
  StrategyHeroSection,
  StrategyIntroSection,
  StrategyProcessSection,
  StrategyServicesSection,
} from "../sections";

type StrategyHomePageProps = {
  site: StrategyManifest;
};

export function StrategyHomePage({ site }: StrategyHomePageProps) {
  return (
    <>
      <StrategyHeroSection site={site} />
      <StrategyIntroSection site={site} />
      <StrategyServicesSection site={site} />
      <StrategyAudienceSection site={site} />
      <StrategyProcessSection site={site} />
      <StrategyFormatsSection site={site} />
      <StrategyDifferentiatorsSection site={site} />
      <StrategyConnectionsSection site={site} />
      <StrategyFaqSection site={site} />
      <StrategyContactSection site={site} />
    </>
  );
}
