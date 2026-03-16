import type { PortalManifest } from "@mulagroup/content-models";

import { DataFlowOrchestrationSection } from "../../components";

type PortalDataFlowOrchestrationSectionProps = {
  portal: PortalManifest;
};

export function PortalDataFlowOrchestrationSection({ portal }: PortalDataFlowOrchestrationSectionProps) {
  return <DataFlowOrchestrationSection ctaHref="#contact" locale={portal.locale} />;
}
