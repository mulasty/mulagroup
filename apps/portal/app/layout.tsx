import type { Metadata } from 'next';
import { AppShellLayout } from '@mulagroup/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mula Group Main Portal',
  description: 'Integrated ecosystem for strategy, technology and execution.'
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShellLayout
      brand="Mula Group"
      navItems={navItems}
      cta={{ label: 'Partner with us', href: '#contact' }}
    >
      {children}
    </AppShellLayout>
  );
}
