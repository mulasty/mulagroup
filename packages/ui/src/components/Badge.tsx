import type { HTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "accent" | "neutral" | "light";
};

const variantClasses = {
  accent: "border border-[color:var(--brand-accent)] bg-[color:var(--brand-accent-soft)] text-[color:var(--brand-accent)]",
  light: "border border-slate-200 bg-white text-slate-700",
  neutral: "border border-white/12 bg-white/6 text-slate-200"
} as const;

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
