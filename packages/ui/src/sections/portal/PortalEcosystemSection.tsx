import type { PortalManifest } from "@mulagroup/content-models";
import { getSharedUiCopy } from "@mulagroup/utils";

import { Card, HeadingBlock, PillarCard, Section } from "../../components";

type PortalEcosystemSectionProps = {
  portal: PortalManifest;
};

export function PortalEcosystemSection({ portal }: PortalEcosystemSectionProps) {
  const copy = getSharedUiCopy(portal.locale);

  return (
    <Section id="ecosystem" tone="panel">
      <div className="space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.44fr)] lg:items-end">
          <HeadingBlock
            description={portal.ecosystemIntro.description}
            eyebrow={portal.ecosystemIntro.eyebrow}
            title={portal.ecosystemIntro.title}
          />
          <Card className="space-y-4" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {copy.portal.ecosystemRoutingLabel}
            </p>
            <p className="text-sm leading-7 text-slate-300">
              {copy.portal.ecosystemRoutingBody}
            </p>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {portal.pillars.map((pillar) => (
            <PillarCard key={pillar.key} locale={portal.locale} pillar={pillar} />
          ))}
        </div>
      </div>
    </Section>
  );
}
