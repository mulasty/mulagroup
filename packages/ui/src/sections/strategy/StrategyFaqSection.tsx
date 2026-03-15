import type { StrategyManifest } from "@mulagroup/content-models";

import { FaqAccordion, HeadingBlock, Section } from "../../components";

type StrategyFaqSectionProps = {
  site: StrategyManifest;
};

export function StrategyFaqSection({ site }: StrategyFaqSectionProps) {
  return (
    <Section>
      <HeadingBlock
        align="center"
        description={site.faqsIntro.description}
        eyebrow={site.faqsIntro.eyebrow}
        title={site.faqsIntro.title}
      />
      <FaqAccordion className="mx-auto mt-12 max-w-4xl" items={site.faqs} />
    </Section>
  );
}
