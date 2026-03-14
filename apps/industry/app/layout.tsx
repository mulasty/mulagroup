import type { Metadata } from 'next';
import { AppShellLayout } from '@mulagroup/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mula Group Industry',
  description: 'Industry pillar application shell.'
};

const navItems = [
  { label: 'Overview', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShellLayout brand="Mula Group" navItems={navItems}>
      {children}
    </AppShellLayout>
  );
}
