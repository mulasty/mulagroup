import type { SiteManifest } from "@mulagroup/content-models";

import {
  getFooterContent,
  getGlobalSiteSettings,
  getPillarCards,
  getSharedUiCopy,
} from "@mulagroup/utils";

import { BrandLogo } from "../components/BrandLogo";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

type SiteFooterProps = {
  site: SiteManifest;
};

export function SiteFooter({ site }: SiteFooterProps) {
  const copy = getSharedUiCopy(site.locale);
  const pillarCards = getPillarCards(site.locale).filter((pillar) => pillar.key !== site.key);
  const footer = getFooterContent(site.key, site.locale);
  const settings = getGlobalSiteSettings(site.locale);
  const quickLinks = site.navigation;
  const quickLinksTitle = copy.footer.quickLinks;
  const ecosystemTitle =
    site.type === "portal" ? copy.footer.ecosystemLinks : copy.footer.relatedLinks;
  const contactEmail = footer.contactBlock.email ?? settings.contactEmail;

  return (
    <footer className="border-t border-white/8 bg-slate-950/30 py-14 sm:py-16">
      <Container className="grid gap-12 xl:grid-cols-[minmax(0,0.82fr)_180px_minmax(0,0.98fr)] xl:items-start">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <BrandLogo className="shrink-0 scale-[1.6] transform-gpu" size="lg" variant="white" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {site.type === "portal"
                  ? copy.footer.portalLabel
                  : `${site.name} ${copy.header.pillarSuffix}`}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{site.name}</h2>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">{footer.shortDescription}</p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {footer.contactBlock.website ? (
              <a className="hover:text-white" href={footer.contactBlock.website}>
                {footer.contactBlock.website.replace(/^https?:\/\//, "")}
              </a>
            ) : null}
            {contactEmail ? (
              <a className="hover:text-white" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            ) : null}
          </div>
          <Button href={site.headerCta.href} variant="secondary">
            {site.headerCta.label}
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {quickLinksTitle}
          </h3>
          <nav aria-label={copy.footer.footerQuickLinksAriaLabel} className="grid gap-3 text-sm">
            {quickLinks.map((item) => (
              <a className="text-slate-300 hover:text-white" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          {footer.legalLinks.length > 0 ? (
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              {footer.legalLinks.map((link) => (
                <a className="hover:text-white" href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {ecosystemTitle}
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
        <p>{footer.bottomTextPrimary}</p>
        <p>{footer.bottomTextSecondary}</p>
      </Container>
    </footer>
  );
}
