import type { PortalManifest } from "@mulagroup/content-models";

import {
  PortalAboutSection,
  PortalCapabilitiesSection,
  PortalContactSection,
  PortalEcosystemSection,
  PortalHeroSection,
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
      <PortalCapabilitiesSection portal={site} />
      <PortalPartnershipsSection portal={site} />
      <PortalContactSection portal={site} />
    </>
  );
}
