import type { ProcessStep, SectionLead } from "@mulagroup/content-models";

import { HeadingBlock, ProcessTimeline, Section } from "../../components";

type PillarProcessSectionProps = {
  id?: string;
  lead: SectionLead;
  steps: ProcessStep[];
  tone?: "light" | "panel" | "transparent";
};

export function PillarProcessSection({
  id,
  lead,
  steps,
  tone = "light",
}: PillarProcessSectionProps) {
  return (
    <Section id={id} tone={tone}>
      <HeadingBlock
        description={lead.description}
        eyebrow={lead.eyebrow}
        title={lead.title}
        tone={tone === "light" ? "light" : "dark"}
      />
      <ProcessTimeline className="mt-12" steps={steps} tone={tone === "light" ? "light" : "dark"} />
    </Section>
  );
}
