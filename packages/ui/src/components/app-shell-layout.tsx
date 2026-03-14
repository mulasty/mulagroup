import * as React from 'react';
import { SiteShell } from './site-shell';

export function AppShellLayout({
  brand,
  navItems,
  children
}: {
  brand: string;
  navItems: Array<{ label: string; href: string }>;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell brand={brand} navItems={navItems}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
