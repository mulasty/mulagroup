import * as React from 'react';
import { cn } from '@mulagroup/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'mg-button',
        variant === 'ghost' && 'mg-button-ghost',
        className
      )}
      {...props}
    />
  );
}
