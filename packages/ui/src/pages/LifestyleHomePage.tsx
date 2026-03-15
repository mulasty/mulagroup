import type { LifestyleManifest } from "@mulagroup/content-models";

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

type LifestyleHomePageProps = {
  site: LifestyleManifest;
};

export function LifestyleHomePage({ site }: LifestyleHomePageProps) {
  return (
    <>
      <PillarHeroSection
        panelLabel="Premium experience layer"
        site={site}
        supportingCopy="Lifestyle is strongest when perception, experience and premium direction are designed with enough structure to support growth, partnerships and real execution."
      />
      <PillarIntroSection
        principlesLabel="What a stronger premium experience layer should do"
        section={site.intro}
      />
      <PillarServicesSection id="services" lead={site.servicesIntro} services={site.services} />
      <PillarServicesSection
        bestForLabel="Best fit"
        id="experience-types"
        lead={site.experienceTypesIntro}
        services={site.experienceTypes}
        tone="panel"
      />
      <PillarAudienceSection audiences={site.audiences} lead={site.audiencesIntro} />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection currentLabel="Lifestyle" leadingLabels={["Strategy"]} site={site} />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="lifestyle-contact"
        hostLabel="lifestyle.mulagroup.eu"
        site={site}
        startSignalsLabel="Typical starting situations"
      />
    </>
  );
}
