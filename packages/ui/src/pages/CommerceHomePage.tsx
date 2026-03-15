import type { CommerceManifest } from "@mulagroup/content-models";

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

type CommerceHomePageProps = {
  site: CommerceManifest;
};

export function CommerceHomePage({ site }: CommerceHomePageProps) {
  return (
    <>
      <PillarHeroSection panelLabel="Revenue systems layer" site={site} />
      <PillarIntroSection
        principlesLabel="What commercial structure should create"
        section={site.intro}
      />
      <PillarServicesSection id="services" lead={site.servicesIntro} services={site.services} />
      <PillarServicesSection
        id="channels"
        lead={site.channelsIntro}
        services={site.channels}
        tone="panel"
      />
      <PillarAudienceSection audiences={site.audiences} lead={site.audiencesIntro} />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection currentLabel="Commerce" site={site} />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="commerce-contact"
        hostLabel="commerce.mulagroup.eu"
        site={site}
        startSignalsLabel="Good moment to start"
      />
    </>
  );
}
