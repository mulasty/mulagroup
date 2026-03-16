"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { cn } from "@mulagroup/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import { getDataFlowArchitectureModel, type DataFlowArchitectureModel, type DataFlowDomain } from "./data";

type DataFlowArchitectureSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

type DomainPosition = {
  domain: DataFlowDomain;
  x: number;
  y: number;
};

const DESKTOP_LAYOUT = {
  cardHeight: 144,
  cardWidth: 312,
  centerX: 620,
  centerY: 474,
  coreHeight: 120,
  coreWidth: 228,
  height: 948,
  leftX: 76,
  rightX: 852,
  rowYs: [122, 298, 474, 650, 826],
  spineBottom: 884,
  spineTop: 64,
  width: 1240,
} as const;

const LOCALIZED_UI_COPY = {
  en: {
    compactCta: "Map your operating data flow",
    compactSupport: "10 operating domains feeding one measurable company state.",
    coreDescription: "Live operating state",
    coreSupport: "Marketing, CRM, service, operations, logistics, finance, ERP, AI and reporting stay synchronized through one business data core.",
    sideLabelLeft: "Operating feeds",
    sideLabelRight: "Connected systems",
  },
  pl: {
    compactCta: "Zmapuj przeplyw danych w firmie",
    compactSupport: "10 domen operacyjnych zasila jeden mierzalny stan firmy.",
    coreDescription: "Zywy stan operacyjny",
    coreSupport:
      "Marketing, CRM, obsluga klienta, operacje, logistyka, finanse, ERP, AI i raportowanie pozostaja zsynchronizowane przez jeden rdzen danych biznesowych.",
    sideLabelLeft: "Przeplywy operacyjne",
    sideLabelRight: "Polaczone systemy",
  },
} as const;

const REVEAL_DELAYS = {
  cards: 0.42,
  core: 0.16,
  lines: 0.26,
  live: 1.48,
} as const;

const DOMAIN_SPEEDS = [24, 26, 28, 25, 27];

function withOpacity(hex: string, alpha: number) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return ["rgba(", String(red), ", ", String(green), ", ", String(blue), ", ", String(alpha), ")"].join("");
}

function buildRowPath(side: "left" | "right", y: number) {
  const cardEdgeX = side === "left" ? DESKTOP_LAYOUT.leftX + DESKTOP_LAYOUT.cardWidth : DESKTOP_LAYOUT.rightX;
  const controlOneX = side === "left" ? cardEdgeX + 88 : cardEdgeX - 88;
  const controlTwoX = side === "left" ? DESKTOP_LAYOUT.centerX - 176 : DESKTOP_LAYOUT.centerX + 176;

  return [
    "M",
    cardEdgeX,
    y,
    "C",
    controlOneX,
    y,
    controlTwoX,
    y,
    DESKTOP_LAYOUT.centerX,
    y,
  ].join(" ");
}

function getDesktopPositions(model: DataFlowArchitectureModel) {
  const getRowY = (index: number) => DESKTOP_LAYOUT.rowYs.at(index) ?? DESKTOP_LAYOUT.centerY;

  const left = model.domains
    .filter((domain) => domain.side === "left")
    .map((domain, index) => ({
      domain,
      x: DESKTOP_LAYOUT.leftX,
      y: getRowY(index),
    }));

  const right = model.domains
    .filter((domain) => domain.side === "right")
    .map((domain, index) => ({
      domain,
      x: DESKTOP_LAYOUT.rightX,
      y: getRowY(index),
    }));

  return { left, right };
}

function getPreviewItems(domain: DataFlowDomain, count: number) {
  return domain.integrations.slice(0, count);
}

type DomainFeedProps = {
  animateSequence: boolean;
  countLabel: string;
  domain: DataFlowDomain;
  domainIndex: number;
  revealed: boolean;
};

function DomainFeed({ animateSequence, countLabel, domain, domainIndex, revealed }: DomainFeedProps) {
  const prefersReducedMotion = useReducedMotion();
  const visibleItems = useMemo(() => domain.integrations.concat(domain.integrations), [domain.integrations]);
  const previewItems = useMemo(() => getPreviewItems(domain, 6), [domain]);
  const itemHeight = 28;
  const scrollDistance = domain.integrations.length * itemHeight;
  const baseDuration = DOMAIN_SPEEDS[domainIndex % DOMAIN_SPEEDS.length] ?? 24;
  const duration = baseDuration + domainIndex;
  const shouldAnimateFeed = animateSequence && !prefersReducedMotion;

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_currentColor]"
              style={{ backgroundColor: domain.tone, color: domain.tone }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{countLabel}</p>
          </div>
          <h3 className="max-w-[15rem] text-lg font-semibold tracking-tight text-slate-950">{domain.title}</h3>
        </div>
      </div>

      <div className="mt-4 flex-1 overflow-hidden rounded-[1.15rem] border border-slate-200/80 bg-slate-950/[0.035] px-3 py-2.5">
        {prefersReducedMotion ? (
          <div className="space-y-2">
            {previewItems.map((item) => (
              <div className="flex items-center gap-2 text-[0.7rem] font-medium leading-5 text-slate-600" key={item}>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: withOpacity(domain.tone, 0.72) }}
                />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            animate={shouldAnimateFeed ? { y: [0, -scrollDistance] } : { y: 0 }}
            className="space-y-2"
            initial={false}
            transition={
              shouldAnimateFeed
                ? {
                    delay: REVEAL_DELAYS.live + domainIndex * 0.12,
                    duration,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }
                : { duration: 0 }
            }
          >
            {visibleItems.map((item, index) => (
              <div
                className={cn(
                  "flex items-center gap-2 text-[0.7rem] font-medium leading-5 text-slate-600",
                  revealed ? "opacity-100" : "opacity-0",
                )}
                key={[domain.id, item, String(index)].join("-")}
                style={{ height: itemHeight }}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: withOpacity(domain.tone, 0.72) }}
                />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

type DesktopDomainCardProps = {
  animateSequence: boolean;
  countLabel: string;
  domainIndex: number;
  position: DomainPosition;
  revealed: boolean;
};

function DesktopDomainCard({
  animateSequence,
  countLabel,
  domainIndex,
  position,
  revealed,
}: DesktopDomainCardProps) {
  return (
    <motion.div
      animate={
        animateSequence
          ? { opacity: 1, scale: 1, x: 0, y: 0 }
          : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, x: revealed ? 0 : 18, y: revealed ? 0 : 14 }
      }
      className="absolute"
      initial={false}
      style={{
        height: DESKTOP_LAYOUT.cardHeight,
        left: position.x,
        top: position.y - DESKTOP_LAYOUT.cardHeight / 2,
        width: DESKTOP_LAYOUT.cardWidth,
      }}
      transition={
        animateSequence
          ? {
              delay: REVEAL_DELAYS.cards + domainIndex * 0.1,
              duration: 0.76,
              ease: [0.22, 1, 0.36, 1],
            }
          : { duration: 0 }
      }
    >
      <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-slate-200/80 bg-white/86 p-4 shadow-[0_28px_80px_-56px_rgba(15,23,42,0.46)] backdrop-blur">
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-y-4 w-1.5 rounded-full",
            position.domain.side === "left" ? "right-3" : "left-3",
          )}
          style={{
            background: `linear-gradient(180deg, ${withOpacity(position.domain.tone, 0.22)}, ${withOpacity(
              position.domain.tone,
              0.82,
            )})`,
          }}
        />
        <DomainFeed
          animateSequence={animateSequence}
          countLabel={countLabel}
          domain={position.domain}
          domainIndex={domainIndex}
          revealed={revealed}
        />
      </div>
    </motion.div>
  );
}

type DataFlowDesktopProps = {
  animateSequence: boolean;
  locale: AppLocale;
  model: DataFlowArchitectureModel;
  revealed: boolean;
};

function DataFlowDesktop({ animateSequence, locale, model, revealed }: DataFlowDesktopProps) {
  const positions = useMemo(() => getDesktopPositions(model), [model]);
  const uiCopy = LOCALIZED_UI_COPY[locale];
  const connectionRows = [...positions.left, ...positions.right];

  return (
    <div className="relative h-[59.25rem] w-full">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox={["0", "0", String(DESKTOP_LAYOUT.width), String(DESKTOP_LAYOUT.height)].join(" ")}
      >
        <defs>
          {model.domains.map((domain) => (
            <linearGradient id={`data-flow-line-${domain.id}`} key={domain.id} x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor={withOpacity(domain.tone, 0.95)} />
              <stop offset="70%" stopColor={withOpacity(domain.tone, 0.22)} />
              <stop offset="100%" stopColor="rgba(37,99,235,0.08)" />
            </linearGradient>
          ))}
          <linearGradient id="data-flow-spine" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(37,99,235,0.08)" />
            <stop offset="50%" stopColor="rgba(37,99,235,0.55)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0.08)" />
          </linearGradient>
        </defs>

        <motion.path
          animate={
            animateSequence
              ? { opacity: 1, pathLength: 1 }
              : { opacity: revealed ? 1 : 0, pathLength: revealed ? 1 : 0 }
          }
          d={[
            "M",
            DESKTOP_LAYOUT.centerX,
            DESKTOP_LAYOUT.spineTop,
            "L",
            DESKTOP_LAYOUT.centerX,
            DESKTOP_LAYOUT.centerY - DESKTOP_LAYOUT.coreHeight / 2 - 20,
            "M",
            DESKTOP_LAYOUT.centerX,
            DESKTOP_LAYOUT.centerY + DESKTOP_LAYOUT.coreHeight / 2 + 20,
            "L",
            DESKTOP_LAYOUT.centerX,
            DESKTOP_LAYOUT.spineBottom,
          ].join(" ")}
          fill="none"
          initial={false}
          stroke="url(#data-flow-spine)"
          strokeLinecap="round"
          strokeWidth={3}
          transition={
            animateSequence
              ? { delay: REVEAL_DELAYS.lines, duration: 0.92, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0 }
          }
        />

        {connectionRows.map((position, index) => {
          const path = buildRowPath(position.domain.side, position.y);
          return (
            <g key={`connection-${position.domain.id}`}>
              <motion.path
                animate={
                  animateSequence
                    ? { opacity: 0.95, pathLength: 1 }
                    : { opacity: revealed ? 0.95 : 0, pathLength: revealed ? 1 : 0 }
                }
                d={path}
                fill="none"
                initial={false}
                stroke={`url(#data-flow-line-${position.domain.id})`}
                strokeLinecap="round"
                strokeWidth={2}
                transition={
                  animateSequence
                    ? {
                        delay: REVEAL_DELAYS.lines + index * 0.08,
                        duration: 0.82,
                        ease: [0.22, 1, 0.36, 1],
                      }
                    : { duration: 0 }
                }
              />
              <motion.circle
                animate={
                  animateSequence
                    ? { opacity: [0, 0.95, 0], offsetDistance: ["0%", "100%"], scale: [0.72, 1, 0.72] }
                    : { opacity: 0, scale: 0.72 }
                }
                cx={DESKTOP_LAYOUT.centerX}
                cy={position.y}
                fill={position.domain.tone}
                initial={false}
                r={3.2}
                style={{ offsetPath: `path("${path}")` }}
                transition={
                  animateSequence
                    ? {
                        delay: REVEAL_DELAYS.live + index * 0.14,
                        duration: 2.7,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1.9,
                      }
                    : { duration: 0 }
                }
              />
              <motion.circle
                animate={animateSequence ? { opacity: 0.85, scale: 1 } : { opacity: revealed ? 0.85 : 0, scale: 1 }}
                cx={DESKTOP_LAYOUT.centerX}
                cy={position.y}
                fill={withOpacity(position.domain.tone, 0.88)}
                initial={false}
                r={3.5}
                transition={
                  animateSequence
                    ? { delay: REVEAL_DELAYS.lines + index * 0.08 + 0.3, duration: 0.32, ease: "easeOut" }
                    : { duration: 0 }
                }
              />
            </g>
          );
        })}

        {[0, 1].map((index) => (
          <motion.circle
            animate={animateSequence ? { opacity: [0, 0.78, 0], cy: [132, 818] } : { opacity: 0, cy: 132 }}
            cx={DESKTOP_LAYOUT.centerX}
            cy={132}
            fill="var(--brand-accent)"
            initial={false}
            key={["spine-signal", String(index)].join("-")}
            r={4}
            transition={
              animateSequence
                ? {
                    delay: REVEAL_DELAYS.live + index * 1.25,
                    duration: 4.3,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1.6,
                  }
                : { duration: 0 }
            }
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
        <span>{uiCopy.sideLabelLeft}</span>
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <span>{uiCopy.sideLabelRight}</span>
      </div>

      <motion.div
        animate={
          animateSequence ? { opacity: 1, scale: 1, y: 0 } : { opacity: revealed ? 1 : 0, scale: 0.96, y: 18 }
        }
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        initial={false}
        transition={
          animateSequence
            ? { delay: REVEAL_DELAYS.core, duration: 0.84, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <div className="relative overflow-hidden rounded-[1.9rem] border border-[color:var(--brand-accent)]/18 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(13,20,35,0.94))] px-7 py-6 text-center shadow-[0_36px_110px_-48px_rgba(37,99,235,0.52)]">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_58%)]" />
          <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
            {uiCopy.coreDescription}
          </p>
          <h3 className="relative mt-3 text-2xl font-semibold tracking-tight text-white">{model.coreLabel}</h3>
          <p className="relative mt-3 max-w-[15rem] text-sm leading-6 text-slate-300">{uiCopy.coreSupport}</p>
        </div>
      </motion.div>

      {positions.left.map((position, index) => (
        <DesktopDomainCard
          animateSequence={animateSequence}
          countLabel={model.copy.countLabel}
          domainIndex={index}
          key={position.domain.id}
          position={position}
          revealed={revealed}
        />
      ))}

      {positions.right.map((position, index) => (
        <DesktopDomainCard
          animateSequence={animateSequence}
          countLabel={model.copy.countLabel}
          domainIndex={index + positions.left.length}
          key={position.domain.id}
          position={position}
          revealed={revealed}
        />
      ))}
    </div>
  );
}

type CompactCardProps = {
  animateSequence: boolean;
  countLabel: string;
  domain: DataFlowDomain;
  domainIndex: number;
  revealed: boolean;
};

function CompactCard({ animateSequence, countLabel, domain, domainIndex, revealed }: CompactCardProps) {
  const previewItems = useMemo(() => getPreviewItems(domain, 6), [domain]);

  return (
    <motion.div
      animate={
        animateSequence
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, y: revealed ? 0 : 14 }
      }
      className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-4 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.46)] backdrop-blur"
      initial={false}
      transition={
        animateSequence
          ? { delay: REVEAL_DELAYS.cards + domainIndex * 0.08, duration: 0.68, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0 }
      }
    >
      <div
        aria-hidden="true"
        className={cn("absolute inset-y-4 w-1.5 rounded-full", domain.side === "left" ? "right-3" : "left-3")}
        style={{
          background: `linear-gradient(180deg, ${withOpacity(domain.tone, 0.2)}, ${withOpacity(domain.tone, 0.82)})`,
        }}
      />
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_currentColor]"
              style={{ backgroundColor: domain.tone, color: domain.tone }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{countLabel}</p>
          </div>
          <h3 className="pr-4 text-lg font-semibold tracking-tight text-slate-950">{domain.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {previewItems.map((item) => (
            <span
              className="rounded-full border border-slate-200 bg-slate-950/[0.035] px-2.5 py-1 text-[0.68rem] font-medium text-slate-600"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

type CompactLayoutProps = {
  animateSequence: boolean;
  locale: AppLocale;
  model: DataFlowArchitectureModel;
  revealed: boolean;
  singleColumn?: boolean;
};

function CompactLayout({ animateSequence, locale, model, revealed, singleColumn = false }: CompactLayoutProps) {
  const uiCopy = LOCALIZED_UI_COPY[locale];

  return (
    <div className="space-y-6">
      <motion.div
        animate={animateSequence ? { opacity: 1, scale: 1, y: 0 } : { opacity: revealed ? 1 : 0, scale: 0.96, y: 18 }}
        className="mx-auto max-w-[18rem]"
        initial={false}
        transition={
          animateSequence
            ? { delay: REVEAL_DELAYS.core, duration: 0.78, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--brand-accent)]/18 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(13,20,35,0.94))] px-6 py-5 text-center shadow-[0_28px_90px_-54px_rgba(37,99,235,0.56)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent_60%)]" />
          <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
            {uiCopy.coreDescription}
          </p>
          <p className="relative mt-3 text-xl font-semibold tracking-tight text-white">{model.coreLabel}</p>
        </div>
      </motion.div>

      <div className="mx-auto h-12 w-px bg-gradient-to-b from-[color:var(--brand-accent)]/75 via-[color:var(--brand-accent)]/25 to-transparent" />

      <div className={cn("grid gap-4", singleColumn ? "grid-cols-1" : "grid-cols-2")}>
        {model.domains.map((domain, index) => (
          <CompactCard
            animateSequence={animateSequence}
            countLabel={model.copy.countLabel}
            domain={domain}
            domainIndex={index}
            key={domain.id}
            revealed={revealed}
          />
        ))}
      </div>
    </div>
  );
}

export function DataFlowArchitectureSection({
  ctaHref,
  locale,
  sectionId = "data-flow-architecture",
}: DataFlowArchitectureSectionProps) {
  const model = useMemo(() => getDataFlowArchitectureModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.22,
    margin: "0px 0px -10% 0px",
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);
  const uiCopy = LOCALIZED_UI_COPY[locale];

  return (
    <Section id={sectionId} tone="light">
      <div className="space-y-12 lg:space-y-16">
        <HeadingBlock
          description={model.copy.description}
          eyebrow={model.copy.eyebrow}
          title={model.copy.title}
          tone="light"
        />

        <div
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_28%),linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0.96))] px-4 py-5 shadow-[0_36px_120px_-72px_rgba(15,23,42,0.32)] sm:px-6 sm:py-7 lg:px-8 lg:py-9"
          ref={sectionRef}
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="muted-grid h-full w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="pointer-events-none absolute -left-14 top-20 h-44 w-44 rounded-full bg-[color:var(--brand-accent)]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-12 h-44 w-44 rounded-full bg-sky-200/35 blur-3xl" />

          <div className="relative rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(7,13,25,0.98),rgba(11,18,32,0.96))] px-4 py-5 shadow-[0_38px_120px_-68px_rgba(15,23,42,0.86)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(180deg,black,transparent_96%)]">
              <div className="muted-grid h-full w-full" />
            </div>

            <div className="relative">
              <div className="hidden xl:block">
                <DataFlowDesktop
                  animateSequence={animateSequence}
                  locale={locale}
                  model={model}
                  revealed={revealed}
                />
              </div>
              <div className="hidden md:block xl:hidden">
                <CompactLayout
                  animateSequence={animateSequence}
                  locale={locale}
                  model={model}
                  revealed={revealed}
                />
              </div>
              <div className="md:hidden">
                <CompactLayout
                  animateSequence={animateSequence}
                  locale={locale}
                  model={model}
                  revealed={revealed}
                  singleColumn
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          {model.copy.supportLine}
        </p>

        <Card
          className="flex flex-col items-start justify-between gap-6 border-slate-200/80 bg-white/88 lg:flex-row lg:items-center"
          variant="light"
        >
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/80">
              {model.copy.eyebrow}
            </p>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {model.copy.ctaTitle}
            </h3>
            <p className="text-sm leading-7 text-slate-600">{uiCopy.compactSupport}</p>
          </div>
          <Button
            className="w-full shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)] sm:w-auto"
            data-cta="portal-data-flow-architecture"
            href={ctaHref}
          >
            {model.copy.ctaLabel || uiCopy.compactCta}
          </Button>
        </Card>
      </div>
    </Section>
  );
}
