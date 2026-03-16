import type { Metadata } from "next";

import { CommerceHomePage } from "@mulagroup/ui/pages";
import {
  SUPPORTED_LOCALES,
  buildSiteMetadata,
  getCommerceManifest,
  isSupportedLocale,
} from "@mulagroup/utils";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildSiteMetadata(getCommerceManifest(locale));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <CommerceHomePage site={getCommerceManifest(locale)} />;
}
