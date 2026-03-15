import type { ProcessStep } from "@mulagroup/content-models";

import { cn } from "@mulagroup/utils";

import { Card } from "./Card";

type ProcessTimelineProps = {
  className?: string;
  steps: ProcessStep[];
  tone?: "dark" | "light";
};

export function ProcessTimeline({ className, steps, tone = "dark" }: ProcessTimelineProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", className)}>
      {steps.map((step) => (
        <Card
          className="flex h-full flex-col gap-4 transition-transform duration-200 hover:-translate-y-1"
          key={step.step}
          variant={isLight ? "light" : "dark"}
        >
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border text-xs font-semibold tracking-[0.24em]",
                isLight
                  ? "border-slate-200 bg-slate-50 text-slate-500"
                  : "border-white/10 bg-white/6 text-slate-400"
              )}
            >
              {step.step}
            </span>
            <span
              className={cn(
                "h-px flex-1",
                isLight ? "bg-slate-200" : "bg-[linear-gradient(90deg,rgba(255,255,255,0.22),transparent)]"
              )}
            />
          </div>
          <div className="space-y-3">
            <h3 className={cn("text-2xl font-semibold tracking-tight", isLight ? "text-slate-950" : "text-white")}>
              {step.title}
            </h3>
            <p className={cn("text-sm leading-7", isLight ? "text-slate-600" : "text-slate-300")}>
              {step.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
