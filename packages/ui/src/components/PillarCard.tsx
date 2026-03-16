import type { AppLocale, PillarCardSummary } from "@mulagroup/content-models";

import { cn, getSharedUiCopy } from "@mulagroup/utils";

import { Button } from "./Button";
import { Card } from "./Card";

type PillarCardProps = {
  ctaContext?: string;
  ctaLabel?: string;
  locale?: AppLocale;
  pillar: PillarCardSummary;
  tone?: "dark" | "light";
};

export function PillarCard({
  ctaContext = "pillar",
  ctaLabel,
  locale = "en",
  pillar,
  tone = "dark",
}: PillarCardProps) {
  const copy = getSharedUiCopy(locale);
  const isLight = tone === "light";

  return (
    <Card
      className="group flex h-full flex-col gap-6 transition-transform duration-200 hover:-translate-y-1"
      variant={isLight ? "light" : "dark"}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              "text-[0.72rem] font-semibold uppercase tracking-[0.28em]",
              isLight ? "text-slate-500" : "text-slate-400",
            )}
          >
            {pillar.accentLabel}
          </span>
          <span className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>
            0{pillar.capabilities.length}
          </span>
        </div>
        <div className="space-y-3">
          <h3
            className={cn(
              "text-2xl font-semibold tracking-tight",
              isLight ? "text-slate-950" : "text-white",
            )}
          >
            {pillar.name}
          </h3>
          <p className={cn("text-sm leading-7", isLight ? "text-slate-600" : "text-slate-300")}>
            {pillar.summary}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-wrap gap-2">
        {pillar.capabilities.map((capability) => (
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              isLight ? "bg-slate-100 text-slate-700" : "bg-white/7 text-slate-200",
            )}
            key={capability}
          >
            {capability}
          </span>
        ))}
      </div>
      <Button
        className={cn(
          "self-start",
          isLight ? undefined : "group-hover:border-[color:var(--brand-accent)]",
        )}
        data-cta={`${ctaContext}-${pillar.key}`}
        href={pillar.href}
        variant="secondary"
      >
        {ctaLabel ?? copy.portal.explorePillar}
      </Button>
    </Card>
  );
}
