import type { HTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
  variant?: "dark" | "light" | "subtle";
};

const variantClasses = {
  dark: "surface-panel text-slate-100",
  light: "surface-panel-light text-slate-950",
  subtle: "border border-white/10 bg-white/[0.03] text-slate-100"
} as const;

export function Card({ className, padded = true, variant = "dark", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card",
        padded ? "p-6 sm:p-8" : undefined,
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
