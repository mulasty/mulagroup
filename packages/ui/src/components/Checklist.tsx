import type { HTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

type ChecklistProps = HTMLAttributes<HTMLUListElement> & {
  items: string[];
  tone?: "dark" | "light";
};

export function Checklist({ className, items, tone = "dark", ...props }: ChecklistProps) {
  const isLight = tone === "light";

  return (
    <ul className={cn("grid gap-3", className)} {...props}>
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span
            aria-hidden="true"
            className={cn(
              "mt-2 h-2.5 w-2.5 rounded-full",
              isLight ? "bg-[color:var(--brand-accent)]" : "bg-[color:var(--brand-accent)]/90"
            )}
          />
          <span className={cn("text-sm leading-7", isLight ? "text-slate-600" : "text-slate-300")}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
