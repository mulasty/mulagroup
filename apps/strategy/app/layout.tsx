import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "@mulagroup/design-system/styles";
import { resolveLocale } from "@mulagroup/utils";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans"
});

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    locale?: string;
  }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={resolveLocale(locale)} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
