import type { SiteManifest } from "@mulagroup/content-models";

import { getPillarCards } from "@mulagroup/utils";

import { BrandLogo } from "../components/BrandLogo";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

type SiteFooterProps = {
  site: SiteManifest;
};

export function SiteFooter({ site }: SiteFooterProps) {
  const pillarCards = getPillarCards().filter((pillar) => pillar.key !== site.key);

  return (
    <footer className="border-t border-white/8 bg-slate-950/30 py-14 sm:py-16">
      <Container className="grid gap-12 xl:grid-cols-[minmax(0,0.82fr)_180px_minmax(0,0.98fr)] xl:items-start">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <BrandLogo className="shrink-0 scale-[1.6] transform-gpu" size="lg" variant="white" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {site.type === "portal" ? "Mula Group ecosystem" : "Mula Group pillar"}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {site.type === "portal" ? site.name : `${site.name} by Mula Group`}
              </h2>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">{site.summary}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <a className="hover:text-white" href="https://mulagroup.eu">
              mulagroup.eu
            </a>
            <a className="hover:text-white" href="mailto:contact@mulagroup.eu">
              contact@mulagroup.eu
            </a>
          </div>
          <Button href={site.headerCta.href} variant="secondary">
            {site.headerCta.label}
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Quick links
          </h3>
          <nav aria-label="Footer quick links" className="grid gap-3 text-sm">
            {site.navigation.map((item) => (
              <a className="text-slate-300 hover:text-white" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-xs leading-6 text-slate-500">
            Legal and privacy pages will be added as the ecosystem expands.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {site.type === "portal" ? "Ecosystem pillars" : "Related ecosystem links"}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {pillarCards.map((pillar) => (
              <a
                className="rounded-card border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-[color:var(--brand-accent)] hover:text-white"
                href={pillar.href}
                key={pillar.key}
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {pillar.accentLabel}
                </span>
                <span className="mt-2 block text-base font-semibold">{pillar.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Strategic, digital and operational ecosystem for modern business growth.</p>
        <p>Built to connect the right capabilities into one structured path for growth.</p>
      </Container>
    </footer>
  );
}
