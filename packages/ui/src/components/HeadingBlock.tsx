import { cn } from "@mulagroup/utils";

import { Badge } from "./Badge";

type HeadingBlockProps = {
  align?: "left" | "center";
  description: string;
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
};

export function HeadingBlock({
  align = "left",
  description,
  eyebrow,
  title,
  tone = "dark"
}: HeadingBlockProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" ? "mx-auto text-center" : undefined)}>
      <Badge className={align === "center" ? "justify-center" : undefined} variant={isLight ? "light" : "accent"}>
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2
          className={cn(
            "text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            isLight ? "text-slate-950" : "text-white"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-2xl text-base leading-7 sm:text-lg",
            align === "center" ? "mx-auto" : undefined,
            isLight ? "text-slate-600" : "text-slate-300"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
