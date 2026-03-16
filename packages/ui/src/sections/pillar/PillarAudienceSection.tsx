import type { AudienceProfile, SectionLead } from "@mulagroup/content-models";

import { Card, Checklist, HeadingBlock, Section } from "../../components";

type PillarAudienceSectionProps = {
  audiences: AudienceProfile[];
  id?: string;
  lead: SectionLead;
  signalsLabel: string;
};

export function PillarAudienceSection({ audiences, id, lead, signalsLabel }: PillarAudienceSectionProps) {
  return (
    <Section id={id}>
      <HeadingBlock description={lead.description} eyebrow={lead.eyebrow} title={lead.title} />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {audiences.map((audience) => (
          <Card className="flex h-full flex-col gap-6" key={audience.title}>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{audience.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{audience.description}</p>
            </div>
            <div className="mt-auto space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {signalsLabel}
              </p>
              <Checklist items={audience.signals} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
