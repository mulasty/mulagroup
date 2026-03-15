import type { StrategyManifest } from "@mulagroup/content-models";

import { Card, HeadingBlock, Section } from "../../components";

type StrategyDifferentiatorsSectionProps = {
  site: StrategyManifest;
};

export function StrategyDifferentiatorsSection({ site }: StrategyDifferentiatorsSectionProps) {
  return (
    <Section tone="panel">
      <HeadingBlock
        description={site.differentiatorsIntro.description}
        eyebrow={site.differentiatorsIntro.eyebrow}
        title={site.differentiatorsIntro.title}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.differentiators.map((item) => (
          <Card className="flex h-full flex-col gap-6" key={item.title}>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  className="rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-slate-200"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
