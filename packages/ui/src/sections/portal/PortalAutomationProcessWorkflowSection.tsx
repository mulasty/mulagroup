import type { PortalManifest } from "@mulagroup/content-models";

import { AutomationProcessWorkflowSection } from "../../components";

type PortalAutomationProcessWorkflowSectionProps = {
  portal: PortalManifest;
};

export function PortalAutomationProcessWorkflowSection({
  portal,
}: PortalAutomationProcessWorkflowSectionProps) {
  return (
    <AutomationProcessWorkflowSection
      demoHref="#contact"
      locale={portal.locale}
    />
  );
}
