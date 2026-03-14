import * as React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mg-container">{children}</div>;
}
