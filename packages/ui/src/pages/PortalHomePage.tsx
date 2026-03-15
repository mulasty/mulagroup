import { getPortalManifest } from "@mulagroup/utils";

import {
  PortalAboutSection,
  PortalCapabilitiesSection,
  PortalContactSection,
  PortalEcosystemSection,
  PortalHeroSection,
  PortalOperatingModelSection,
  PortalPartnershipsSection
} from "../sections/portal";

export function PortalHomePage() {
  const portal = getPortalManifest();

  return (
    <>
      <PortalHeroSection portal={portal} />
      <PortalAboutSection portal={portal} />
      <PortalEcosystemSection portal={portal} />
      <PortalOperatingModelSection portal={portal} />
      <PortalCapabilitiesSection portal={portal} />
      <PortalPartnershipsSection portal={portal} />
      <PortalContactSection portal={portal} />
    </>
  );
}
