"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import {
  AGENTIC_AI_BOARD,
  getAgenticAiOperatingSystemModel,
  type AgenticAiBoardNode,
  type AgenticAiEdge,
  type AgenticAiPoint,
  type AgenticAiPortSide,
} from "./data";

type AgenticAiOperatingSystemSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

type Point = AgenticAiPoint;

function withOpacity(hex: string, alpha: number) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return ["rgba(", String(red), ", ", String(green), ", ", String(blue), ", ", String(alpha), ")"].join("");
}

function getNodeCenter(node: AgenticAiBoardNode) {
  return { x: node.x + node.w / 2, y: node.y + node.h / 2 };
}

function getNodeAnchor(node: AgenticAiBoardNode, side: AgenticAiPortSide): Point {
  const center = getNodeCenter(node);

  if (side === "left") {
    return { x: node.x, y: center.y };
  }
  if (side === "right") {
    return { x: node.x + node.w, y: center.y };
  }
  if (side === "top") {
    return { x: center.x, y: node.y };
  }

  return { x: center.x, y: node.y + node.h };
}

function distance(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function buildRoundedPath(points: Point[], radius = 18) {
  const first = points[0];

  if (!first) {
    return "";
  }
  if (points.length === 1) {
    return ["M", String(first.x), String(first.y)].join(" ");
  }

  let path = ["M", String(first.x), String(first.y)].join(" ");

  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const current = points[index];
    const next = points[index + 1];

    if (!prev || !current) {
      continue;
    }

    if (!next) {
      path += [" L", String(current.x), String(current.y)].join(" ");
      continue;
    }

    const prevDistance = distance(prev, current);
    const nextDistance = distance(current, next);
    const cornerRadius = Math.min(radius, prevDistance / 2, nextDistance / 2);
    const prevRatio = cornerRadius / prevDistance;
    const nextRatio = cornerRadius / nextDistance;

    const before = {
      x: current.x - (current.x - prev.x) * prevRatio,
      y: current.y - (current.y - prev.y) * prevRatio,
    };
    const after = {
      x: current.x + (next.x - current.x) * nextRatio,
      y: current.y + (next.y - current.y) * nextRatio,
    };

    path += [" L", String(before.x), String(before.y)].join(" ");
    path += [" Q", String(current.x), String(current.y), String(after.x), String(after.y)].join(" ");
  }

  return path;
}

function buildEdgePath(edge: AgenticAiEdge, nodesById: Record<string, AgenticAiBoardNode>) {
  const from = nodesById[edge.from.id];
  const to = nodesById[edge.to.id];

  if (!from || !to) {
    return null;
  }

  return buildRoundedPath(
    [getNodeAnchor(from, edge.from.side), ...(edge.via ?? []), getNodeAnchor(to, edge.to.side)],
    edge.dashed ? 12 : 18,
  );
}

function getNodeDelay(node: AgenticAiBoardNode) {
  if (node.kind === "input") {
    return 0.18 + node.y / 2000;
  }
  if (node.kind === "data") {
    return 0.48 + node.x / 5000;
  }
  if (node.kind === "gateway") {
    return 0.36 + node.y / 3000;
  }
  if (node.kind === "orchestration") {
    return 0.7 + node.y / 4000;
  }
  if (node.kind === "executive") {
    return 1.18;
  }

  return 0.92 + node.y / 5000;
}

function getNodeSurface(node: AgenticAiBoardNode) {
  if (node.kind === "gateway") {
    return {
      body: "bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.9))] text-white",
      chip: "text-white",
      glow: withOpacity(node.tone, 0.28),
      subtitle: "text-slate-300",
    };
  }
  if (node.kind === "executive") {
    return {
      body: "bg-[linear-gradient(180deg,rgba(10,15,28,0.98),rgba(6,10,18,0.98))] text-white",
      chip: "text-white",
      glow: "rgba(255,255,255,0.08)",
      subtitle: "text-slate-300",
    };
  }

  return {
    body: "bg-white/95 text-slate-950",
    chip: "text-slate-800",
    glow: withOpacity(node.tone, 0.12),
    subtitle: "text-slate-500",
  };
}

function BoardNode({
  animateSequence,
  locale,
  node,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  node: AgenticAiBoardNode;
  revealed: boolean;
}) {
  const surface = getNodeSurface(node);

  return (
    <motion.div
      animate={
        animateSequence
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, y: revealed ? 0 : 12 }
      }
      className="absolute"
      initial={false}
      style={{ height: node.h, left: node.x, top: node.y, width: node.w }}
      transition={{ delay: getNodeDelay(node), duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={["relative h-full overflow-hidden rounded-[1.35rem] border border-white/10 px-4 py-3 shadow-[0_26px_80px_-58px_rgba(15,23,42,0.88)] backdrop-blur", surface.body].join(" ")}
        style={{ boxShadow: `0 24px 80px -58px ${surface.glow}` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-3 left-0 w-1 rounded-r-full"
          style={{ background: `linear-gradient(180deg, ${withOpacity(node.tone, 0.26)}, ${withOpacity(node.tone, 0.9)})` }}
        />
        <div className="space-y-2 pl-1.5">
          <div className="flex items-center gap-2">
            <span
              className={["rounded-full border px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em]", surface.chip].join(" ")}
              style={{ borderColor: withOpacity(node.tone, 0.32), backgroundColor: withOpacity(node.tone, 0.1) }}
            >
              {node.chip}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-[0.9rem] font-semibold leading-5 tracking-tight">{node.title[locale]}</p>
            <p className={["text-[0.72rem] leading-5", surface.subtitle].join(" ")}>{node.subtitle[locale]}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BoardCanvas({
  animateSequence,
  locale,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  revealed: boolean;
}) {
  const model = useMemo(() => getAgenticAiOperatingSystemModel(locale), [locale]);
  const nodesById = useMemo(
    () => Object.fromEntries(model.board.nodes.map((node) => [node.id, node])) as Record<string, AgenticAiBoardNode>,
    [model.board.nodes],
  );
  const edges = useMemo(
    () =>
      model.board.edges.flatMap((edge) => {
        const d = buildEdgePath(edge, nodesById);
        return d ? [{ d, edge }] : [];
      }),
    [model.board.edges, nodesById],
  );

  return (
    <div className="relative" style={{ height: AGENTIC_AI_BOARD.height, width: AGENTIC_AI_BOARD.width }}>
      {model.board.lanes.map((lane) => (
        <div
          className="absolute top-4 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-300"
          key={lane.id}
          style={{ left: lane.x }}
        >
          {lane.label[locale]}
        </div>
      ))}

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox={["0", "0", String(AGENTIC_AI_BOARD.width), String(AGENTIC_AI_BOARD.height)].join(" ")}
      >
        <defs>
          <radialGradient id="agentic-ai-core-glow" r="72%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.34)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0.08)" />
          </radialGradient>
        </defs>

        <circle cx={728} cy={414} fill="url(#agentic-ai-core-glow)" r={182} />

        {edges.map(({ d, edge }, index) => (
          <motion.path
            animate={
              animateSequence
                ? { opacity: edge.dashed ? 0.34 : 0.8, pathLength: 1 }
                : { opacity: revealed ? (edge.dashed ? 0.34 : 0.8) : 0, pathLength: revealed ? 1 : 0 }
            }
            d={d}
            fill="none"
            initial={false}
            key={edge.id}
            stroke={withOpacity(edge.tone, edge.dashed ? 0.66 : 0.92)}
            strokeDasharray={edge.dashed ? "4 8" : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={edge.dashed ? 1 : 1.5}
            transition={{ delay: 0.2 + index * 0.025, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {edges.flatMap(({ d, edge }, index) =>
          Array.from({ length: edge.pulseCount ?? 0 }).map((_, pulseIndex) => (
            <motion.circle
              animate={
                animateSequence
                  ? { offsetDistance: ["0%", "100%"], opacity: [0, 0.92, 0], scale: [0.72, 1, 0.72] }
                  : { opacity: 0, scale: 0.72 }
              }
              cx={0}
              cy={0}
              fill={withOpacity(edge.pulseTone ?? edge.tone, 0.92)}
              initial={false}
              key={[edge.id, "pulse", String(pulseIndex)].join("-")}
              r={2.8}
              style={{ offsetPath: `path("${d}")` }}
              transition={{
                delay: 1.3 + index * 0.04 + pulseIndex * 0.2,
                duration: edge.pulseDuration ?? 2.8,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
            />
          )),
        )}
      </svg>

      {model.board.nodes.map((node) => (
        <BoardNode
          animateSequence={animateSequence}
          key={node.id}
          locale={locale}
          node={node}
          revealed={revealed}
        />
      ))}
    </div>
  );
}

export function AgenticAiOperatingSystemSection({
  ctaHref,
  locale,
  sectionId = "agentic-ai-operating-system",
}: AgenticAiOperatingSystemSectionProps) {
  const model = useMemo(() => getAgenticAiOperatingSystemModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.14, margin: "0px 0px -8% 0px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);

  return (
    <Section id={sectionId}>
      <div className="space-y-12 lg:space-y-16" ref={sectionRef}>
        <HeadingBlock description={model.copy.description} eyebrow={model.copy.eyebrow} title={model.copy.title} />

        <div className="space-y-6">
          <div className="max-w-3xl rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-7 text-slate-300 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.92)]">
            {model.copy.helper}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_28%),linear-gradient(180deg,rgba(9,14,25,0.96),rgba(6,10,19,0.98))] px-3 py-4 shadow-[0_38px_120px_-72px_rgba(15,23,42,0.96)] sm:px-5 sm:py-5 lg:px-6 lg:py-6">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="muted-grid h-full w-full" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="relative overflow-x-auto pb-3">
              <BoardCanvas animateSequence={animateSequence} locale={locale} revealed={revealed} />
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-4xl text-center text-sm leading-7 text-slate-300 sm:text-base">{model.copy.supportLine}</p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {model.autonomyLevels.map((level, index) => (
            <motion.div
              animate={
                animateSequence
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, y: revealed ? 0 : 14 }
              }
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
              initial={false}
              key={level.id}
              transition={{ delay: 0.28 + index * 0.06, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]/82">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-white">{level.title[locale]}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{level.description[locale]}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {model.departments.map((department) => (
            <Card className="space-y-5 border-white/10 bg-white/[0.04]" key={department.id} variant="subtle">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
                  {department.title[locale]}
                </p>
                <p className="text-sm leading-7 text-slate-300">{department.helper[locale]}</p>
              </div>
              <div className="space-y-4">
                {department.modules.map((module) => (
                  <div className="rounded-[1.2rem] border border-white/8 bg-slate-950/40 px-4 py-4" key={module.name.en}>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold tracking-tight text-white">{module.name[locale]}</h3>
                      <p className="text-sm leading-6 text-slate-300">{module.description[locale]}</p>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="space-y-2">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {locale === "pl" ? "Integracje" : "Integrations"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {module.integrations[locale].map((item) => (
                            <span
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-medium text-slate-200"
                              key={[module.name.en, item].join("-")}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {locale === "pl" ? "Wyjścia" : "Outputs"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {module.outputs[locale].map((item) => (
                            <span
                              className="rounded-full border border-[color:var(--brand-accent)]/16 bg-[color:var(--brand-accent)]/8 px-2.5 py-1 text-[0.68rem] font-medium text-slate-100"
                              key={[module.name.en, item].join("-")}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="space-y-5 border-white/10 bg-white/[0.04]" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
              {locale === "pl" ? "Guardraile i governance" : "Guardrails and governance"}
            </p>
            <div className="space-y-3">
              {model.governanceRules.map((rule) => (
                <div className="rounded-[1rem] border border-white/8 bg-slate-950/36 px-4 py-3 text-sm leading-6 text-slate-200" key={rule}>
                  {rule}
                </div>
              ))}
            </div>
          </Card>

          <Card className="space-y-5 border-white/10 bg-white/[0.04]" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
              {locale === "pl" ? "Mapa wdrożenia" : "Rollout map"}
            </p>
            <div className="space-y-3">
              {model.rolloutStages.map((stage) => (
                <div className="rounded-[1rem] border border-white/8 bg-slate-950/36 px-4 py-4" key={stage.id}>
                  <h3 className="text-sm font-semibold tracking-tight text-white">{stage.title[locale]}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stage.items[locale].map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-medium text-slate-200"
                        key={[stage.id, item].join("-")}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="flex flex-col items-start justify-between gap-6 border-white/12 bg-white/[0.04] lg:flex-row lg:items-center" variant="subtle">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
              {model.copy.eyebrow}
            </p>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">{model.copy.ctaTitle}</h3>
          </div>
          <Button
            className="w-full shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)] sm:w-auto"
            data-cta="portal-agentic-ai-operating-system"
            href={ctaHref}
          >
            {model.copy.ctaLabel}
          </Button>
        </Card>
      </div>
    </Section>
  );
}
