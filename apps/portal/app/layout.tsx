import type { Metadata } from 'next';
import { AppShellLayout } from '@mulagroup/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mula Group Main Portal',
  description: 'Base application shell for the Mula Group ecosystem.'
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
