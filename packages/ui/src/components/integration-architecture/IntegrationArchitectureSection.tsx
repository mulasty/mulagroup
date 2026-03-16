"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@mulagroup/utils";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import { getIntegrationArchitectureModel } from "./data";
import { IntegrationArchitectureCanvas } from "./IntegrationArchitectureCanvas";
import { IntegrationArchitectureMobile } from "./IntegrationArchitectureMobile";
import { IntegrationArchitectureTablet } from "./IntegrationArchitectureTablet";

type IntegrationArchitectureSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

export function IntegrationArchitectureSection({
  ctaHref,
  locale,
  sectionId = "integration-architecture",
}: IntegrationArchitectureSectionProps) {
  const architecture = useMemo(() => getIntegrationArchitectureModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    margin: "0px 0px -10% 0px",
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);

  return (
    <Section id={sectionId}>
      <div className="space-y-12 lg:space-y-16">
        <HeadingBlock
          description={architecture.copy.description}
          eyebrow={architecture.copy.eyebrow}
          title={architecture.copy.title}
        />

        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.86),rgba(8,15,29,0.96))] px-4 py-6 shadow-[0_36px_120px_-72px_rgba(15,23,42,0.92)] sm:px-6 sm:py-8 lg:px-7 lg:py-8"
          ref={sectionRef}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_46%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]">
            <div className="muted-grid h-full w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

          <div className="relative mx-auto max-w-[74rem]">
            <div className="hidden xl:block">
              <IntegrationArchitectureCanvas
                animateSequence={animateSequence}
                architecture={architecture}
                revealed={revealed}
              />
            </div>
            <div className="hidden md:block xl:hidden">
              <IntegrationArchitectureTablet
                animateSequence={animateSequence}
                architecture={architecture}
                revealed={revealed}
              />
            </div>
            <div className="md:hidden">
              <IntegrationArchitectureMobile
                animateSequence={animateSequence}
                architecture={architecture}
                revealed={revealed}
              />
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-slate-300 sm:text-base">
          {architecture.copy.supportLine}
        </p>

        <Card
          className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border-white/12 bg-white/[0.035] lg:flex-row lg:items-center"
          variant="subtle"
        >
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/80">
              {architecture.copy.eyebrow}
            </p>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {architecture.copy.ctaTitle}
            </h3>
          </div>
          <Button
            className={cn("w-full sm:w-auto", "shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)]")}
            data-cta="portal-integration-architecture"
            href={ctaHref}
          >
            {architecture.copy.ctaLabel}
          </Button>
        </Card>
      </div>
    </Section>
  );
}
