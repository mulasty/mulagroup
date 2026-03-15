import type { StrategyManifest } from "@mulagroup/content-models";

import { Card, HeadingBlock, Section } from "../../components";

type StrategyFormatsSectionProps = {
  site: StrategyManifest;
};

export function StrategyFormatsSection({ site }: StrategyFormatsSectionProps) {
  return (
    <Section>
      <HeadingBlock
        description={site.formatsIntro.description}
        eyebrow={site.formatsIntro.eyebrow}
        title={site.formatsIntro.title}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.formats.map((format) => (
          <Card className="flex h-full flex-col gap-6" key={format.title}>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{format.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{format.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-white/8 bg-white/[0.04] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Ideal for
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{format.idealFor}</p>
              </div>
              <div className="rounded-card border border-white/8 bg-white/[0.04] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{format.outcome}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
