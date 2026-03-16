import type { Metadata } from "next";

import { PortalHomePage } from "@mulagroup/ui/pages";
import { SUPPORTED_LOCALES, buildSiteMetadata, getPortalManifest, isSupportedLocale } from "@mulagroup/utils";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildSiteMetadata(getPortalManifest(locale));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <PortalHomePage site={getPortalManifest(locale)} />;
}
