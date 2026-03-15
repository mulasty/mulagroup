import type { FaqItem } from "@mulagroup/content-models";

import { cn } from "@mulagroup/utils";

type FaqAccordionProps = {
  className?: string;
  items: FaqItem[];
  tone?: "dark" | "light";
};

export function FaqAccordion({ className, items, tone = "dark" }: FaqAccordionProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item) => (
        <details
          className={cn(
            "group rounded-card border p-0 shadow-[var(--shadow-soft)]",
            isLight ? "border-slate-200 bg-white" : "border-white/10 bg-white/[0.04]",
          )}
          key={item.question}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 sm:px-7">
            <span
              className={cn(
                "text-base font-semibold tracking-tight",
                isLight ? "text-slate-950" : "text-white",
              )}
            >
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border text-lg leading-none transition-transform group-open:rotate-45",
                isLight
                  ? "border-slate-200 bg-slate-50 text-slate-500"
                  : "border-white/10 bg-white/6 text-slate-300",
              )}
            >
              +
            </span>
          </summary>
          <div className="px-6 pb-6 sm:px-7 sm:pb-7">
            <p
              className={cn(
                "max-w-3xl text-sm leading-7",
                isLight ? "text-slate-600" : "text-slate-300",
              )}
            >
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
