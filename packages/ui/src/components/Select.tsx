import type { SelectHTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  tone?: "dark" | "light";
};

export function Select({ children, className, tone = "dark", ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "min-h-12 w-full rounded-input border px-4 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-60",
        tone === "dark"
          ? "border-white/12 bg-white/6 text-white"
          : "border-slate-200 bg-white text-slate-950",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
