import type { StrategyManifest } from "@mulagroup/content-models";

import { Badge, Button, Card, Section } from "../../components";

type StrategyHeroSectionProps = {
  site: StrategyManifest;
};

export function StrategyHeroSection({ site }: StrategyHeroSectionProps) {
  return (
    <Section className="overflow-hidden pt-16 sm:pt-20 lg:pt-24" id="overview">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.9fr)] xl:items-center">
        <div className="space-y-8">
          <Badge variant="accent">{site.hero.eyebrow}</Badge>
          <div className="space-y-6">
            <h1 className="text-balance max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {site.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {site.hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button data-cta="strategy-hero-primary" href={site.hero.primaryCta.href} size="lg">
              {site.hero.primaryCta.label}
            </Button>
            {site.hero.secondaryCta ? (
              <Button
                data-cta="strategy-hero-secondary"
                href={site.hero.secondaryCta.href}
                size="lg"
                variant="secondary"
              >
                {site.hero.secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            {site.hero.highlights.map((highlight) => (
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
            className="absolute inset-x-10 top-6 h-36 rounded-full bg-[radial-gradient(circle,_var(--brand-accent-soft),_transparent_72%)] blur-3xl"
          />
          <Card className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.68))]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="neutral">Strategy entry point</Badge>
                  <span className="text-sm text-slate-400">{site.tagline}</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Architecture for growth, transformation and complex initiatives.
                </h2>
                <p className="text-sm leading-7 text-slate-300">{site.summary}</p>
              </div>

              <div className="grid gap-4">
                {site.hero.insights.map((insight) => (
                  <Card
                    className="border border-white/8 bg-white/[0.04]"
                    key={insight.title}
                    variant="subtle"
                  >
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {insight.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-300">{insight.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
