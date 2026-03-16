import type { PortalManifest } from "@mulagroup/content-models";

import { AgentArchitectureShowcaseSection } from "../../components";

type PortalAgentArchitectureShowcaseSectionProps = {
  portal: PortalManifest;
};

export function PortalAgentArchitectureShowcaseSection({
  portal,
}: PortalAgentArchitectureShowcaseSectionProps) {
  return (
    <AgentArchitectureShowcaseSection
      ctaHref="#contact"
      locale={portal.locale}
    />
  );
}
