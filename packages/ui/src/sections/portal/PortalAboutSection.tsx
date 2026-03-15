import type { PortalManifest } from "@mulagroup/content-models";

import { Card, Checklist, HeadingBlock, Section } from "../../components";

type PortalAboutSectionProps = {
  portal: PortalManifest;
};

export function PortalAboutSection({ portal }: PortalAboutSectionProps) {
  return (
    <Section id="about" tone="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="space-y-8">
          <HeadingBlock
            description={portal.about.lead.description}
            eyebrow={portal.about.lead.eyebrow}
            title={portal.about.lead.title}
            tone="light"
          />
          <Card className="space-y-5" variant="light">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Why the ecosystem model exists
            </p>
            <Checklist items={portal.about.principles} tone="light" />
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portal.about.cards.map((card) => (
            <Card
              className="flex h-full flex-col gap-4 transition-transform duration-200 hover:-translate-y-1"
              key={card.title}
              variant="light"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
