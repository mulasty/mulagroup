import type { StrategyManifest } from "@mulagroup/content-models";

import { HeadingBlock, ProcessTimeline, Section } from "../../components";

type StrategyProcessSectionProps = {
  site: StrategyManifest;
};

export function StrategyProcessSection({ site }: StrategyProcessSectionProps) {
  return (
    <Section id="process" tone="light">
      <HeadingBlock
        description={site.processIntro.description}
        eyebrow={site.processIntro.eyebrow}
        title={site.processIntro.title}
        tone="light"
      />
      <ProcessTimeline className="mt-12" steps={site.process} tone="light" />
    </Section>
  );
}
