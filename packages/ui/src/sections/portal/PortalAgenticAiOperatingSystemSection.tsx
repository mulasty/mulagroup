import type { PortalManifest } from "@mulagroup/content-models";

import { AgenticAiOperatingSystemSection } from "../../components";

type PortalAgenticAiOperatingSystemSectionProps = {
  portal: PortalManifest;
};

export function PortalAgenticAiOperatingSystemSection({
  portal,
}: PortalAgenticAiOperatingSystemSectionProps) {
  return (
    <AgenticAiOperatingSystemSection
      ctaHref="#contact"
      locale={portal.locale}
    />
  );
}
