import type { PortalManifest } from "@mulagroup/content-models";

import { HeadingBlock, ProcessTimeline, Section } from "../../components";

type PortalOperatingModelSectionProps = {
  portal: PortalManifest;
};

export function PortalOperatingModelSection({ portal }: PortalOperatingModelSectionProps) {
  return (
    <Section>
      <div className="space-y-12">
        <HeadingBlock
          description={portal.operatingModelIntro.description}
          eyebrow={portal.operatingModelIntro.eyebrow}
          title={portal.operatingModelIntro.title}
        />
        <ProcessTimeline steps={portal.operatingModel} />
      </div>
    </Section>
  );
}
