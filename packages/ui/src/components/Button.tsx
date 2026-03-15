import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@mulagroup/utils";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonBaseProps & {
    href: string;
  };

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps & {
    href?: never;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const sizeClasses = {
  lg: "min-h-12 px-6 text-sm",
  md: "min-h-11 px-5 text-sm",
  sm: "min-h-10 px-4 text-xs"
} as const;

const variantClasses = {
  primary:
    "bg-[color:var(--brand-accent)] text-white shadow-[0_24px_60px_-30px_var(--brand-accent-soft)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-accent-strong)]",
  secondary:
    "border border-white/12 bg-white/6 text-slate-100 hover:-translate-y-0.5 hover:border-[color:var(--brand-accent)] hover:bg-white/10",
  ghost: "bg-transparent text-slate-200 hover:bg-white/6 hover:text-white"
} as const;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-input font-medium tracking-[0.01em] transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const { children, className, size = "md", variant = "primary" } = props;
  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (typeof props.href === "string") {
    const {
      children: _children,
      className: _className,
      href,
      size: _size,
      variant: _variant,
      ...anchorProps
    } = props;

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    size: _size,
    type = "button",
    variant: _variant,
    ...buttonProps
  } = props;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
