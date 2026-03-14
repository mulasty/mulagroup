import * as React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <article className="mg-card">{children}</article>;
}
