import type { ProjectsManifest } from "@mulagroup/content-models";

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

type ProjectsHomePageProps = {
  site: ProjectsManifest;
};

export function ProjectsHomePage({ site }: ProjectsHomePageProps) {
  return (
    <>
      <PillarHeroSection
        panelLabel="Project development layer"
        site={site}
        supportingCopy="Projects is strongest when concept direction, investment logic and future execution routes are clarified before the initiative becomes expensive, vague or over-designed."
      />
      <PillarIntroSection
        principlesLabel="What a structured project architecture should do"
        section={site.intro}
      />
      <PillarServicesSection id="services" lead={site.servicesIntro} services={site.services} />
      <PillarServicesSection
        bestForLabel="Best fit"
        id="project-types"
        lead={site.projectTypesIntro}
        services={site.projectTypes}
        tone="panel"
      />
      <PillarAudienceSection audiences={site.audiences} lead={site.audiencesIntro} />
      <PillarProcessSection id="process" lead={site.processIntro} steps={site.process} />
      <PillarFormatsSection formats={site.formats} lead={site.formatsIntro} />
      <PillarDifferentiatorsSection items={site.differentiators} lead={site.differentiatorsIntro} />
      <PillarConnectionsSection currentLabel="Projects" leadingLabels={["Strategy"]} site={site} />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="projects-contact"
        hostLabel="projects.mulagroup.eu"
        site={site}
        startSignalsLabel="Typical starting situations"
      />
    </>
  );
}
