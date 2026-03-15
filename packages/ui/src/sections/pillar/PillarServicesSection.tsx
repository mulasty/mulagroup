import type { SectionLead, ServiceCard } from "@mulagroup/content-models";

import { Card, HeadingBlock, Section } from "../../components";

type PillarServicesSectionProps = {
  bestForLabel?: string;
  id?: string;
  lead: SectionLead;
  services: ServiceCard[];
  tone?: "light" | "panel" | "transparent";
};

export function PillarServicesSection({
  bestForLabel = "Best for",
  id,
  lead,
  services,
  tone = "light",
}: PillarServicesSectionProps) {
  const isLight = tone === "light";

  return (
    <Section id={id} tone={tone}>
      <HeadingBlock
        description={lead.description}
        eyebrow={lead.eyebrow}
        title={lead.title}
        tone={isLight ? "light" : "dark"}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
            className="flex h-full flex-col gap-6"
            key={service.title}
            variant={isLight ? "light" : "dark"}
          >
            <div className="space-y-3">
              <h3
                className={
                  isLight
                    ? "text-2xl font-semibold tracking-tight text-slate-950"
                    : "text-2xl font-semibold tracking-tight text-white"
                }
              >
                {service.title}
              </h3>
              <p
                className={
                  isLight ? "text-sm leading-7 text-slate-600" : "text-sm leading-7 text-slate-300"
                }
              >
                {service.description}
              </p>
            </div>
            {service.bestFor ? (
              <div
                className={
                  isLight
                    ? "rounded-card border border-slate-200 bg-slate-50 px-4 py-4"
                    : "rounded-card border border-white/8 bg-white/[0.04] px-4 py-4"
                }
              >
                <p
                  className={
                    isLight
                      ? "text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
                      : "text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
                  }
                >
                  {bestForLabel}
                </p>
                <p
                  className={
                    isLight
                      ? "mt-2 text-sm leading-7 text-slate-600"
                      : "mt-2 text-sm leading-7 text-slate-300"
                  }
                >
                  {service.bestFor}
                </p>
              </div>
            ) : null}
            <div className="mt-auto flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  className={
                    isLight
                      ? "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      : "inline-flex items-center rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-slate-200"
                  }
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
