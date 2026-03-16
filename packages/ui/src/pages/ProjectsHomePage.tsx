import type { ProjectsManifest } from "@mulagroup/content-models";
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

type ProjectsHomePageProps = {
  site: ProjectsManifest;
};

export function ProjectsHomePage({ site }: ProjectsHomePageProps) {
  const chrome = getSiteChrome("projects", site.locale);
  const copy = getSharedUiCopy(site.locale);

  return (
    <>
      <PillarHeroSection
        panelLabel={chrome.heroPanelLabel ?? ""}
        site={site}
        supportingCopy={chrome.heroSupportingCopy}
      />
      <PillarIntroSection principlesLabel={chrome.introPrinciplesLabel} section={site.intro} />
      <PillarServicesSection
        bestForLabel={chrome.bestForLabel}
        id="services"
        lead={site.servicesIntro}
        services={site.services}
      />
      <PillarServicesSection
        bestForLabel={chrome.bestForLabel}
        id="project-types"
        lead={site.projectTypesIntro}
        services={site.projectTypes}
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
        leadingLabels={["Strategy"]}
        routesLabel={chrome.connectionsRoutesLabel}
        site={site}
      />
      <PillarFaqSection faqs={site.faqs} lead={site.faqsIntro} />
      <PillarContactSection
        contactContext="projects-contact"
        hostLabel={new URL(site.url).host}
        site={site}
        startSignalsLabel={chrome.contactSignalsLabel}
      />
    </>
  );
}
