import type { PortalManifest } from "@mulagroup/content-models";

import {
  PortalAboutSection,
  PortalCapabilitiesSection,
  PortalContactSection,
  PortalDataFlowArchitectureSection,
  PortalEcosystemSection,
  PortalHeroSection,
  PortalIntegrationArchitectureSection,
  PortalOperatingModelSection,
  PortalPartnershipsSection
} from "../sections/portal";

type PortalHomePageProps = {
  site: PortalManifest;
};

export function PortalHomePage({ site }: PortalHomePageProps) {
  return (
    <>
      <PortalHeroSection portal={site} />
      <PortalAboutSection portal={site} />
      <PortalEcosystemSection portal={site} />
      <PortalOperatingModelSection portal={site} />
      <PortalIntegrationArchitectureSection portal={site} />
      <PortalCapabilitiesSection portal={site} />
      <PortalDataFlowArchitectureSection portal={site} />
      <PortalPartnershipsSection portal={site} />
      <PortalContactSection portal={site} />
    </>
  );
}
