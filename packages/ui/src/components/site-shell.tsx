import * as React from 'react';
import { Container } from './container';

export function SiteShell({
  brand,
  navItems,
  children
}: {
  brand: string;
  navItems: Array<{ label: string; href: string }>;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="mg-header">
        <Container>
          <div className="mg-header-inner">
            <strong>{brand}</strong>
            <nav>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mg-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="mg-footer">
        <Container>
          <p className="mg-muted">© {new Date().getFullYear()} {brand}. Foundation shell.</p>
        </Container>
      </footer>
    </>
  );
}
