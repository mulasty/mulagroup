import type { TextareaHTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  tone?: "dark" | "light";
};

export function Textarea({ className, tone = "dark", ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-input border px-4 py-3 text-sm outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60",
        tone === "dark"
          ? "border-white/12 bg-white/6 text-white"
          : "border-slate-200 bg-white text-slate-950",
        className
      )}
      {...props}
    />
  );
}
