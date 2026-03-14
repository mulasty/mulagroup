import type { Metadata } from 'next';
import { SiteShell } from '@mulagroup/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mula Group Commerce',
  description: 'Commerce pillar application shell.'
};

const navItems = [
  { label: 'Overview', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell brand="Mula Group" navItems={navItems}>{children}</SiteShell>
      </body>
    </html>
  );
}
