import type { FaqItem, SectionLead } from "@mulagroup/content-models";

import { FaqAccordion, HeadingBlock, Section } from "../../components";

type PillarFaqSectionProps = {
  faqs: FaqItem[];
  lead: SectionLead;
};

export function PillarFaqSection({ faqs, lead }: PillarFaqSectionProps) {
  return (
    <Section>
      <HeadingBlock
        align="center"
        description={lead.description}
        eyebrow={lead.eyebrow}
        title={lead.title}
      />
      <FaqAccordion className="mx-auto mt-12 max-w-4xl" items={faqs} />
    </Section>
  );
}
