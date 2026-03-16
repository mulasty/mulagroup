import type { PortalManifest } from "@mulagroup/content-models";

import { DataFlowArchitectureSection } from "../../components";

type PortalDataFlowArchitectureSectionProps = {
  portal: PortalManifest;
};

export function PortalDataFlowArchitectureSection({ portal }: PortalDataFlowArchitectureSectionProps) {
  return <DataFlowArchitectureSection ctaHref="#contact" locale={portal.locale} />;
}
