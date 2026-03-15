import type { InputHTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  tone?: "dark" | "light";
};

export function Input({ className, tone = "dark", ...props }: InputProps) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-input border px-4 text-sm outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60",
        tone === "dark"
          ? "border-white/12 bg-white/6 text-white"
          : "border-slate-200 bg-white text-slate-950",
        className
      )}
      {...props}
    />
  );
}
