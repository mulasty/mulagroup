import type { DigitalManifest } from "@mulagroup/content-models";
import { getSiteChrome, getSharedUiCopy } from "@mulagroup/utils";

import {
  PillarAudienceSection,
  PillarConnectionsSection,
  PillarContactSection,
  PillarDifferentiatorsSection,
  PillarFaqSection,
  PillarFormatsSection,
  PillarHeroSection,
  PillarIntroSection,
  PillarProcessSection,
  PillarServicesSection,
} from "../sections";

type DigitalHomePageProps = {
  site: DigitalManifest;
};

export function DigitalHomePage({ site }: DigitalHomePageProps) {
  const chrome = getSiteChrome("digital", site.locale);
  const copy = getSharedUiCopy(site.locale);

  return (
    <>
      <PillarHeroSection panelLabel={chrome.heroPanelLabel ?? ""} site={site} />
      <PillarIntroSection principlesLabel={chrome.introPrinciplesLabel} section={site.intro} />
      <PillarServicesSection
        bestForLabel={chrome.bestForLabel}
        id="services"
        lead={site.servicesIntro}
        services={site.services}
      />
      <PillarServicesSection
        bestForLabel={chrome.bestForLabel}
        id="ai-automation"
        lead={site.automationIntro}
        services={site.automationCapabilities}
        tone="panel"
      />
      <PillarAudienceSection
        audiences={site.audiences}
        lead={site.audiencesIntro}
        signalsLabel={copy.shared.typicalSignals}
      />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection
        currentLabel={site.name}
        flowLabel={chrome.connectionsFlowLabel}
        routesLabel={chrome.connectionsRoutesLabel}
        site={site}
      />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="digital-contact"
        hostLabel={new URL(site.url).host}
        site={site}
        startSignalsLabel={chrome.contactSignalsLabel}
      />
    </>
  );
}
