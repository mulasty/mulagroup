import type { DigitalManifest } from "@mulagroup/content-models";

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
  return (
    <>
      <PillarHeroSection panelLabel="Digital systems layer" site={site} />
      <PillarIntroSection
        principlesLabel="What the digital layer is designed to do"
        section={site.intro}
      />
      <PillarServicesSection id="services" lead={site.servicesIntro} services={site.services} />
      <PillarServicesSection
        id="ai-automation"
        lead={site.automationIntro}
        services={site.automationCapabilities}
        tone="panel"
      />
      <PillarAudienceSection audiences={site.audiences} lead={site.audiencesIntro} />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection currentLabel="Digital" site={site} />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="digital-contact"
        hostLabel="digital.mulagroup.eu"
        site={site}
        startSignalsLabel="Good moment to start"
      />
    </>
  );
}
