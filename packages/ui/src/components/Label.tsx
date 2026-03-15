import type { LabelHTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  tone?: "dark" | "light";
};

export function Label({ className, tone = "dark", ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-2 block text-sm font-medium tracking-[0.01em]",
        tone === "dark" ? "text-slate-200" : "text-slate-700",
        className
      )}
      {...props}
    />
  );
}
