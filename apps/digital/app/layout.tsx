import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "@mulagroup/design-system/styles";

import { SiteFrame } from "@mulagroup/ui/layout";
import { buildSiteMetadata, getSiteManifest } from "@mulagroup/utils";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans"
});

const site = getSiteManifest("digital");

export const metadata: Metadata = buildSiteMetadata(site);

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SiteFrame site={site}>{children}</SiteFrame>
      </body>
    </html>
  );
}
