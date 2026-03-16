import type { StrategyManifest } from "@mulagroup/content-models";

import { Card, HeadingBlock, Section } from "../../components";

type StrategyServicesSectionProps = {
  bestForLabel: string;
  site: StrategyManifest;
};

export function StrategyServicesSection({ bestForLabel, site }: StrategyServicesSectionProps) {
  return (
    <Section id="services" tone="light">
      <HeadingBlock
        description={site.servicesIntro.description}
        eyebrow={site.servicesIntro.eyebrow}
        title={site.servicesIntro.title}
        tone="light"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {site.services.map((service) => (
          <Card className="flex h-full flex-col gap-6" key={service.title} variant="light">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
            {service.bestFor ? (
              <div className="rounded-card border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {bestForLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.bestFor}</p>
              </div>
            ) : null}
            <div className="mt-auto flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
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
