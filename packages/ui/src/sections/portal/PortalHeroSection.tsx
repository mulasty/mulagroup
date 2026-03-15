import type { PortalManifest } from "@mulagroup/content-models";

import { Badge, Button, Card, Checklist, MetricCard, Section } from "../../components";

type PortalHeroSectionProps = {
  portal: PortalManifest;
};

export function PortalHeroSection({ portal }: PortalHeroSectionProps) {
  return (
    <Section className="overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.84fr)] xl:items-center">
        <div className="space-y-8">
          <Badge variant="accent">{portal.hero.eyebrow}</Badge>
          <div className="space-y-6">
            <h1 className="text-balance max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {portal.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{portal.hero.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button data-cta="portal-hero-primary" href={portal.hero.primaryCta.href} size="lg">
              {portal.hero.primaryCta.label}
            </Button>
            <Button
              data-cta="portal-hero-secondary"
              href={portal.hero.secondaryCta.href}
              size="lg"
              variant="secondary"
            >
              {portal.hero.secondaryCta.label}
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {portal.hero.highlights.map((highlight) => (
              <span
                className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200"
                key={highlight}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-4 h-32 rounded-full bg-[radial-gradient(circle,_var(--brand-accent-soft),_transparent_70%)] blur-2xl"
          />
          <Card className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.62))]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Ecosystem headquarters
                  </span>
                  <span className="text-sm text-slate-400">{portal.tagline}</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Built to connect the right capabilities around the real business objective.
                </h2>
                <p className="text-sm leading-7 text-slate-300">{portal.summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {portal.stats.map((stat) => (
                  <MetricCard key={stat.label} stat={stat} />
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.82fr)]">
                <Card className="border border-white/8 bg-white/[0.04]" variant="subtle">
                  <div className="space-y-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      Connection logic
                    </p>
                    <Checklist items={portal.about.principles} />
                  </div>
                </Card>
                <Card className="border border-white/8 bg-white/[0.04]" variant="subtle">
                  <div className="space-y-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Pillar map</p>
                    <div className="flex flex-wrap gap-2">
                      {portal.pillars.map((pillar) => (
                        <span
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200"
                          key={pillar.key}
                        >
                          {pillar.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
