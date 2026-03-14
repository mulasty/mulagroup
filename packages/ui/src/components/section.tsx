import * as React from 'react';
import { cn } from '@mulagroup/utils';

export function Section({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn('mg-section', className)}>{children}</section>;
}
