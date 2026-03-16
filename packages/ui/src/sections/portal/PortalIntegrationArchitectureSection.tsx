import type { PortalManifest } from "@mulagroup/content-models";

import { IntegrationArchitectureSection } from "../../components";

type PortalIntegrationArchitectureSectionProps = {
  portal: PortalManifest;
};

export function PortalIntegrationArchitectureSection({
  portal,
}: PortalIntegrationArchitectureSectionProps) {
  return <IntegrationArchitectureSection ctaHref="#contact" locale={portal.locale} />;
}
