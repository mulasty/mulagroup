import type { PortalManifest } from "@mulagroup/content-models";

import { Badge, Button, InteractiveBrandLogo, Section } from "../../components";

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
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {portal.hero.description}
            </p>
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

        <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-12 sm:min-h-[24rem] sm:px-10 lg:min-h-[32rem] lg:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-8 h-36 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_transparent_72%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-12 bottom-8 h-28 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.22),_transparent_72%)] blur-3xl"
          />
          <div className="relative flex w-full flex-col items-center justify-center gap-5 text-center">
            <InteractiveBrandLogo
              alt={portal.locale === "pl" ? "Białe godło Mula Group" : "Mula Group white emblem"}
              baseScale={1.8}
              className="h-56 w-56 drop-shadow-[0_24px_80px_rgba(15,23,42,0.52)] sm:h-72 sm:w-72 lg:h-[24rem] lg:w-[24rem] xl:h-[28rem] xl:w-[28rem]"
              variant="white"
            />
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                Mula Group
              </p>
              <p className="mx-auto max-w-sm text-sm leading-7 text-slate-400">{portal.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
