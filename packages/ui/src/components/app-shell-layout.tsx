import * as React from 'react';
import { SiteShell } from './site-shell';

export function AppShellLayout({
  brand,
  navItems,
  cta,
  children
}: {
  brand: string;
  navItems: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell brand={brand} navItems={navItems} cta={cta}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
