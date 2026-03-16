"use client";

import type { SiteManifest } from "@mulagroup/content-models";
import { cn, getSharedUiCopy } from "@mulagroup/utils";
import { useEffect, useId, useRef, useState } from "react";

import { BrandLogo } from "../components/BrandLogo";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

type SiteHeaderProps = {
  site: SiteManifest;
};

export function SiteHeader({ site }: SiteHeaderProps) {
  const copy = getSharedUiCopy(site.locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locationSuffix, setLocationSuffix] = useState("");
  const mobileMenuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldReturnFocusRef = useRef(false);
  const previousOverflowRef = useRef("");

  useEffect(() => {
    const syncScrolledState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    syncScrolledState();
    window.addEventListener("scroll", syncScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrolledState);
    };
  }, []);

  useEffect(() => {
    const syncLocationSuffix = () => {
      setLocationSuffix(`${window.location.search}${window.location.hash}`);
    };

    syncLocationSuffix();
    window.addEventListener("hashchange", syncLocationSuffix);
    window.addEventListener("popstate", syncLocationSuffix);

    return () => {
      window.removeEventListener("hashchange", syncLocationSuffix);
      window.removeEventListener("popstate", syncLocationSuffix);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      if (shouldReturnFocusRef.current) {
        menuButtonRef.current?.focus();
        shouldReturnFocusRef.current = false;
      }

      return;
    }

    shouldReturnFocusRef.current = true;
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const buildLocaleSwitchHref = (href: string) =>
    locationSuffix.length > 0 ? `${href}${locationSuffix}` : href;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-200",
        isScrolled
          ? "border-b border-white/8 bg-slate-950/72 backdrop-blur-xl"
          : "border-b border-transparent bg-slate-950/20 backdrop-blur-md",
      )}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <a className="flex min-w-0 items-center gap-3" href={site.homeHref}>
          <BrandLogo className="shrink-0 scale-[1.6] transform-gpu" size="sm" variant="white" />
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {site.type === "portal"
                ? copy.header.integratedBusinessEcosystem
                : `${site.name} ${copy.header.pillarSuffix}`}
            </span>
            <span className="block truncate text-lg font-semibold tracking-tight text-white">
              {site.name}
            </span>
          </span>
        </a>
        <nav aria-label={copy.header.navigation} className="hidden items-center gap-7 lg:flex">
          {site.navigation.map((item) => (
            <a
              className="text-sm text-slate-300 hover:text-white"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {site.localeLinks.map((localeLink) => (
              <a
                aria-current={localeLink.active ? "page" : undefined}
                aria-label={`${copy.header.language}: ${localeLink.label}`}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition",
                  localeLink.active
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:text-white",
                )}
                href={buildLocaleSwitchHref(localeLink.href)}
                hrefLang={localeLink.locale}
                key={localeLink.locale}
                lang={localeLink.locale}
              >
                {localeLink.label}
              </a>
            ))}
          </div>
          <Button href={site.headerCta.href} size="sm" variant="primary">
            {site.headerCta.label}
          </Button>
        </div>
        <div className="lg:hidden">
          <button
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? copy.header.closeNavigationMenu : copy.header.openNavigationMenu
            }
            className="rounded-input border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-slate-100"
            onClick={() => {
              setIsMenuOpen((currentState) => !currentState);
            }}
            ref={menuButtonRef}
            type="button"
          >
            {isMenuOpen ? copy.header.close : copy.header.menu}
          </button>
        </div>
      </Container>
      {isMenuOpen ? (
        <div className="lg:hidden">
          <button
            aria-label={copy.header.closeMenuOverlay}
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
            onClick={closeMenu}
            type="button"
          />
          <div
            aria-label={copy.header.navigation}
            aria-modal="true"
            className="surface-panel fixed inset-x-4 top-24 z-50 rounded-card p-4 shadow-[var(--shadow-soft)]"
            id={mobileMenuId}
            role="dialog"
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <BrandLogo
                  className="shrink-0 scale-[1.6] transform-gpu"
                  size="sm"
                  variant="white"
                />
                <div className="space-y-1">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {copy.header.navigation}
                  </span>
                  <p className="truncate text-sm font-medium text-white">{site.name}</p>
                </div>
              </div>
              <button
                className="rounded-input border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/6 hover:text-white"
                onClick={closeMenu}
                type="button"
              >
                {copy.header.close}
              </button>
            </div>
            <nav aria-label={copy.header.navigation} className="flex flex-col gap-2">
              {site.navigation.map((item, index) => (
                <a
                  className="rounded-input px-3 py-2 text-sm text-slate-200 hover:bg-white/6 hover:text-white"
                  href={item.href}
                  key={item.label}
                  onClick={closeMenu}
                  ref={index === 0 ? firstLinkRef : undefined}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
                {site.localeLinks.map((localeLink) => (
                  <a
                    aria-current={localeLink.active ? "page" : undefined}
                    aria-label={`${copy.header.language}: ${localeLink.label}`}
                    className={cn(
                      "flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] transition",
                      localeLink.active
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:text-white",
                    )}
                    href={buildLocaleSwitchHref(localeLink.href)}
                    hrefLang={localeLink.locale}
                    key={localeLink.locale}
                    lang={localeLink.locale}
                    onClick={closeMenu}
                  >
                    {localeLink.label}
                  </a>
                ))}
              </div>
              <Button
                className="mt-2 w-full"
                href={site.headerCta.href}
                onClick={closeMenu}
                variant="primary"
              >
                {site.headerCta.label}
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
