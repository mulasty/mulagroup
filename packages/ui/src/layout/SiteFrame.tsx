import type { ReactNode } from "react";

import type { SiteManifest } from "@mulagroup/content-models";
import { getSharedUiCopy } from "@mulagroup/utils";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteFrameProps = {
  children: ReactNode;
  site: SiteManifest;
};

export function SiteFrame({ children, site }: SiteFrameProps) {
  const copy = getSharedUiCopy(site.locale);

  return (
    <div className="relative min-h-screen overflow-x-clip" data-site-theme={site.theme}>
      <a
        className="absolute left-6 top-6 z-50 -translate-y-24 rounded-input bg-white px-4 py-2 text-sm font-medium text-slate-950 focus:translate-y-0"
        href="#content"
      >
        {copy.siteFrame.skipToContent}
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_var(--brand-accent-soft),_transparent_55%)]"
      />
      <div aria-hidden="true" className="muted-grid pointer-events-none absolute inset-0 opacity-20" />
      <SiteHeader site={site} />
      <main className="relative z-10" id="content">
        {children}
      </main>
      <div className="relative z-10">
        <SiteFooter site={site} />
      </div>
    </div>
  );
}
