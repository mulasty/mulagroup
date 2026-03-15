import type { IndustryManifest } from "@mulagroup/content-models";

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

type IndustryHomePageProps = {
  site: IndustryManifest;
};

export function IndustryHomePage({ site }: IndustryHomePageProps) {
  return (
    <>
      <PillarHeroSection panelLabel="Operational capability layer" site={site} />
      <PillarIntroSection
        principlesLabel="What stronger technical structure should deliver"
        section={site.intro}
      />
      <PillarServicesSection id="services" lead={site.servicesIntro} services={site.services} />
      <PillarServicesSection
        id="capabilities"
        lead={site.capabilitiesIntro}
        services={site.capabilities}
        tone="panel"
      />
      <PillarAudienceSection audiences={site.audiences} lead={site.audiencesIntro} />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection currentLabel="Industry" site={site} />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="industry-contact"
        hostLabel="industry.mulagroup.eu"
        site={site}
        startSignalsLabel="Good moment to start"
      />
    </>
  );
}
