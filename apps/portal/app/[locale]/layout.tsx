import type { ReactNode } from "react";

import { DocumentLocaleSync, SiteFrame } from "@mulagroup/ui/layout";
import { getSiteManifest, isSupportedLocale } from "@mulagroup/utils";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const site = getSiteManifest("portal", locale);

  return (
    <SiteFrame site={site}>
      <DocumentLocaleSync locale={site.locale} />
      {children}
    </SiteFrame>
  );
}
