import type { PortalNarrativeSection } from "@mulagroup/content-models";

import { Card, Checklist, HeadingBlock, Section } from "../../components";

type PillarIntroSectionProps = {
  principlesLabel: string;
  section: PortalNarrativeSection;
};

export function PillarIntroSection({ principlesLabel, section }: PillarIntroSectionProps) {
  return (
    <Section tone="panel">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
        <HeadingBlock
          description={section.lead.description}
          eyebrow={section.lead.eyebrow}
          title={section.lead.title}
        />
        <Card className="space-y-5" variant="subtle">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {principlesLabel}
          </p>
          <Checklist items={section.principles} />
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {section.cards.map((card) => (
          <Card className="flex h-full flex-col gap-4" key={card.title}>
            <h3 className="text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
            <p className="text-sm leading-7 text-slate-300">{card.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
