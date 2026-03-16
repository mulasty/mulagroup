import { Fragment } from "react";

import type { PillarCardSummary, PillarKey, RichPillarManifest } from "@mulagroup/content-models";

import { getPillarCards } from "@mulagroup/utils";

import { Card, HeadingBlock, PillarCard, Section } from "../../components";

type PillarConnectionsSectionProps = {
  currentLabel: string;
  flowLabel: string;
  leadingLabels?: string[];
  routesLabel: string;
  site: RichPillarManifest;
};

export function PillarConnectionsSection({
  currentLabel,
  flowLabel,
  leadingLabels = [],
  routesLabel,
  site,
}: PillarConnectionsSectionProps) {
  const pillarCardsByKey = new Map(
    getPillarCards(site.locale).map(
      (pillar) => [pillar.key, pillar] satisfies [PillarKey, PillarCardSummary],
    ),
  );
  const connectedPillars = site.integrations
    .map((integration) => pillarCardsByKey.get(integration.pillar))
    .filter((pillar): pillar is PillarCardSummary => Boolean(pillar));
  const flowLabels = [
    ...leadingLabels,
    currentLabel,
    ...site.integrations
      .map((integration) => integration.title)
      .filter((label) => !leadingLabels.includes(label) && label !== currentLabel),
  ];

  return (
    <Section tone="light">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-start">
        <div className="space-y-8">
          <HeadingBlock
            description={site.crossPillarIntro.description}
            eyebrow={site.crossPillarIntro.eyebrow}
            title={site.crossPillarIntro.title}
            tone="light"
          />

          <Card className="space-y-4" variant="light">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {routesLabel}
            </p>
            <div className="rounded-card border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {flowLabel}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {flowLabels.map((label, index) => (
                  <Fragment key={label}>
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-slate-400">
                        {index === 1 ? "->" : "+"}
                      </span>
                    ) : null}
                    <span
                      className={
                        label === currentLabel
                          ? "inline-flex items-center rounded-full bg-[color:var(--brand-accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-accent)]"
                          : "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      }
                    >
                      {label}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {site.integrations.map((integration) => (
                <div
                  className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  key={integration.pillar}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {integration.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{integration.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {connectedPillars.map((pillar) => (
            <PillarCard
              ctaContext={`${site.key}-connection`}
              key={pillar.key}
              locale={site.locale}
              pillar={pillar}
              tone="light"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
