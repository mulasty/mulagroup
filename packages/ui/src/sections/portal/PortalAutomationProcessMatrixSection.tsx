import type { PortalManifest } from "@mulagroup/content-models";

import { AutomationProcessMatrixSection } from "../../components";

type PortalAutomationProcessMatrixSectionProps = {
  portal: PortalManifest;
};

export function PortalAutomationProcessMatrixSection({
  portal,
}: PortalAutomationProcessMatrixSectionProps) {
  return (
    <AutomationProcessMatrixSection
      ctaHref="#contact"
      locale={portal.locale}
    />
  );
}
