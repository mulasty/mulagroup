import type { HTMLAttributes } from "react";

import { cn } from "@mulagroup/utils";

import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  tone?: "light" | "panel" | "transparent";
};

const toneClasses = {
  light: "section-light",
  panel: "bg-white/[0.03]",
  transparent: ""
} as const;

export function Section({
  children,
  className,
  containerClassName,
  tone = "transparent",
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative py-20 sm:py-24 lg:py-32", toneClasses[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
