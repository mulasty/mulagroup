import type { Metadata } from "next";

import { ProjectsHomePage } from "@mulagroup/ui/pages";
import {
  SUPPORTED_LOCALES,
  buildSiteMetadata,
  getProjectsManifest,
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

  return buildSiteMetadata(getProjectsManifest(locale));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <ProjectsHomePage site={getProjectsManifest(locale)} />;
}
