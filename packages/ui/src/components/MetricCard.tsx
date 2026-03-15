import type { StatItem } from "@mulagroup/content-models";

import { cn } from "@mulagroup/utils";

import { Card } from "./Card";

type MetricCardProps = {
  className?: string;
  stat: StatItem;
  tone?: "dark" | "light";
};

export function MetricCard({ className, stat, tone = "dark" }: MetricCardProps) {
  const isLight = tone === "light";

  return (
    <Card
      className={cn(
        "flex h-full flex-col gap-3 transition-transform duration-200 hover:-translate-y-1",
        className
      )}
      variant={isLight ? "light" : "subtle"}
    >
      <p className={cn("text-2xl font-semibold tracking-tight", isLight ? "text-slate-950" : "text-white")}>
        {stat.value}
      </p>
      <p className={cn("text-sm font-medium", isLight ? "text-slate-700" : "text-slate-100")}>{stat.label}</p>
      <p className={cn("text-sm leading-7", isLight ? "text-slate-600" : "text-slate-400")}>{stat.description}</p>
    </Card>
  );
}
