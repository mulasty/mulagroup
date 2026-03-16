import type { StrategyManifest } from "@mulagroup/content-models";
import { getSiteChrome, getSharedUiCopy } from "@mulagroup/utils";

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
  const chrome = getSiteChrome("strategy", site.locale);
  const copy = getSharedUiCopy(site.locale);

  return (
    <>
      <StrategyHeroSection
        panelBadgeLabel={chrome.heroBadgeLabel ?? ""}
        panelTitle={chrome.heroPanelTitle ?? ""}
        site={site}
      />
      <StrategyIntroSection principlesLabel={chrome.introPrinciplesLabel} site={site} />
      <StrategyServicesSection bestForLabel={chrome.bestForLabel} site={site} />
      <StrategyAudienceSection signalsLabel={copy.shared.typicalSignals} site={site} />
      <StrategyProcessSection site={site} />
      <StrategyFormatsSection site={site} />
      <StrategyDifferentiatorsSection site={site} />
      <StrategyConnectionsSection
        flowLabel={chrome.connectionsFlowLabel}
        routesLabel={chrome.connectionsRoutesLabel}
        site={site}
      />
      <StrategyFaqSection site={site} />
      <StrategyContactSection signalsLabel={chrome.contactSignalsLabel} site={site} />
    </>
  );
}
