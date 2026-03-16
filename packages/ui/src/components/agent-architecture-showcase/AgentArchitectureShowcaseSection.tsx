"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import {
  getAgentArchitectureShowcaseModel,
  type AgentArchitecture,
  type AgentEdge,
  type AgentNode,
  type AgentPortSide,
} from "./data";

type AgentArchitectureShowcaseSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

type Point = {
  x: number;
  y: number;
};

function withOpacity(hex: string, alpha: number) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return ["rgba(", String(red), ", ", String(green), ", ", String(blue), ", ", String(alpha), ")"].join("");
}

function getNodeCenter(node: AgentNode) {
  return {
    x: node.x + node.w / 2,
    y: node.y + node.h / 2,
  };
}

function getNodeAnchor(node: AgentNode, side: AgentPortSide): Point {
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

function buildRoundedPath(points: Point[], radius = 16) {
  const firstPoint = points[0];

  if (!firstPoint) {
    return "";
  }

  if (points.length === 1) {
    return ["M", firstPoint.x.toFixed(1), firstPoint.y.toFixed(1)].join(" ");
  }

  let d = ["M", firstPoint.x.toFixed(1), firstPoint.y.toFixed(1)].join(" ");

  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const curr = points[index];
    const next = points[index + 1];

    if (!prev || !curr) {
      continue;
    }

    if (!next) {
      d += [" L", curr.x.toFixed(1), curr.y.toFixed(1)].join(" ");
      continue;
    }

    const prevDistance = distance(prev, curr);
    const nextDistance = distance(curr, next);
    const cornerRadius = Math.min(radius, prevDistance / 2, nextDistance / 2);
    const prevRatio = cornerRadius / prevDistance;
    const nextRatio = cornerRadius / nextDistance;

    const before = {
      x: curr.x - (curr.x - prev.x) * prevRatio,
      y: curr.y - (curr.y - prev.y) * prevRatio,
    };
    const after = {
      x: curr.x + (next.x - curr.x) * nextRatio,
      y: curr.y + (next.y - curr.y) * nextRatio,
    };

    d += [" L", before.x.toFixed(1), before.y.toFixed(1)].join(" ");
    d += [" Q", curr.x.toFixed(1), curr.y.toFixed(1), after.x.toFixed(1), after.y.toFixed(1)].join(" ");
  }

  return d;
}

function buildEdgePath(edge: AgentEdge, nodesById: Record<string, AgentNode>) {
  const from = nodesById[edge.from.id];
  const to = nodesById[edge.to.id];

  if (!from || !to) {
    return null;
  }

  return buildRoundedPath(
    [getNodeAnchor(from, edge.from.side), ...(edge.via ?? []), getNodeAnchor(to, edge.to.side)],
    edge.dashed ? 10 : 16,
  );
}

function getViewBox(architecture: AgentArchitecture) {
  const minX = Math.min(...architecture.nodes.map((node) => node.x));
  const minY = Math.min(...architecture.nodes.map((node) => node.y));
  const maxX = Math.max(...architecture.nodes.map((node) => node.x + node.w));
  const maxY = Math.max(...architecture.nodes.map((node) => node.y + node.h));
  const paddingX = 30;
  const paddingY = 34;

  return {
    height: maxY - minY + paddingY * 2,
    minX: minX - paddingX,
    minY: minY - paddingY,
    width: maxX - minX + paddingX * 2,
  };
}

function splitLabel(text: string, maxChars: number) {
  if (text.length <= maxChars) {
    return [text];
  }

  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current.length === 0 ? word : [current, word].join(" ");
    if (next.length <= maxChars) {
      current = next;
      return;
    }
    if (current.length > 0) {
      lines.push(current);
    }
    current = word;
  });

  if (current.length > 0) {
    lines.push(current);
  }

  return lines.slice(0, 2);
}

function getKindSurface(node: AgentNode) {
  if (node.kind === "agent") {
    return {
      fill: "rgba(10,16,29,0.94)",
      stroke: withOpacity(node.tone, 0.42),
      text: "text-white",
    };
  }

  if (node.kind === "router") {
    return {
      fill: "rgba(239,246,255,0.98)",
      stroke: withOpacity(node.tone, 0.46),
      text: "text-slate-900",
    };
  }

  if (node.kind === "memory" || node.kind === "rag") {
    return {
      fill: "rgba(248,250,252,0.94)",
      stroke: withOpacity(node.tone, 0.36),
      text: "text-slate-800",
    };
  }

  return {
    fill: "rgba(255,255,255,0.98)",
    stroke: withOpacity(node.tone, 0.3),
    text: "text-slate-900",
  };
}

function ArchitectureNode({
  animateSequence,
  locale,
  node,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  node: AgentNode;
  revealed: boolean;
}) {
  const surface = getKindSurface(node);
  const lines = splitLabel(node.label[locale], node.kind === "memory" ? 14 : 16);
  const titleY = node.kind === "memory" || node.kind === "rag" ? 24 : node.kind === "agent" ? 24 : 22;

  return (
    <g transform={["translate(", String(node.x), " ", String(node.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, y: revealed ? 0 : 8 }
        }
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={{
          duration: 0.58,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <rect fill="rgba(15,23,42,0.08)" height={node.h} rx={16} width={node.w} x={2} y={4} />
        <rect fill={surface.fill} height={node.h} rx={16} stroke={surface.stroke} strokeWidth={1.05} width={node.w} x={0} y={0} />
        <rect fill={withOpacity(node.tone, 0.14)} height={24} rx={9} stroke={withOpacity(node.tone, 0.28)} strokeWidth={1} width={34} x={10} y={10} />
        <text className="fill-slate-700 text-[0.43rem] font-semibold tracking-[0.08em]" textAnchor="middle" x={27} y={26}>
          {node.icon}
        </text>
        <text
          className={["fill-current text-[0.58rem] font-semibold tracking-[0.02em]", surface.text].join(" ")}
          textAnchor="start"
          x={52}
          y={titleY}
        >
          {lines.map((line, index) => (
            <tspan dy={index === 0 ? 0 : 12} key={[node.id, line, String(index)].join("-")} x={52}>
              {line}
            </tspan>
          ))}
        </text>
      </motion.g>
    </g>
  );
}

function ArchitectureCanvas({
  animateSequence,
  architecture,
  locale,
  revealed,
}: {
  animateSequence: boolean;
  architecture: AgentArchitecture;
  locale: AppLocale;
  revealed: boolean;
}) {
  const nodesById = useMemo(
    () => Object.fromEntries(architecture.nodes.map((node) => [node.id, node])) as Record<string, AgentNode>,
    [architecture.nodes],
  );
  const viewBox = useMemo(() => getViewBox(architecture), [architecture]);
  const edges = useMemo(
    () =>
      architecture.edges.flatMap((edge) => {
        const d = buildEdgePath(edge, nodesById);

        if (!d) {
          return [];
        }

        return [
          {
            d,
            edge,
          },
        ];
      }),
    [architecture.edges, nodesById],
  );

  return (
    <svg
      aria-hidden="true"
      className="block h-auto w-full"
      viewBox={[String(viewBox.minX), String(viewBox.minY), String(viewBox.width), String(viewBox.height)].join(" ")}
    >
      {edges.map(({ d, edge }, index) => (
        <motion.path
          animate={
            animateSequence
              ? { opacity: 1, pathLength: 1 }
              : { opacity: revealed ? 1 : 0, pathLength: revealed ? 1 : 0 }
          }
          d={d}
          fill="none"
          initial={false}
          key={edge.id}
          stroke={edge.tone ?? "#94a3b8"}
          strokeDasharray={edge.dashed ? "3 8" : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={edge.dashed ? 1.08 : 1.2}
          transition={{
            delay: 0.2 + index * 0.05,
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {edges.flatMap(({ d, edge }, index) =>
        Array.from({ length: edge.pulseCount ?? 0 }).map((_, pulseIndex) => (
          <motion.circle
            animate={
              animateSequence
                ? { offsetDistance: ["0%", "100%"], opacity: [0, 0.86, 0], scale: [0.74, 1, 0.74] }
                : { opacity: 0, scale: 0.74 }
            }
            cx={0}
            cy={0}
            fill={withOpacity(edge.pulseTone ?? edge.tone ?? "#3b82f6", 0.9)}
            initial={false}
            key={["pulse", edge.id, String(pulseIndex)].join("-")}
            r={2.7}
            style={{ offsetPath: `path("${d}")` }}
            transition={{
              delay: 1.6 + index * 0.08 + pulseIndex * 0.28,
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2.2,
            }}
          />
        )),
      )}

      {architecture.nodes.map((node) => (
        <ArchitectureNode
          animateSequence={animateSequence}
          key={node.id}
          locale={locale}
          node={node}
          revealed={revealed}
        />
      ))}
    </svg>
  );
}

function ArchitectureCard({
  animateSequence,
  architecture,
  featured = false,
  locale,
  revealed,
}: {
  animateSequence: boolean;
  architecture: AgentArchitecture;
  featured?: boolean;
  locale: AppLocale;
  revealed: boolean;
}) {
  return (
    <Card
      className={
        featured
          ? "space-y-6 border-white/12 bg-white/[0.045]"
          : "space-y-4 border-white/10 bg-white/[0.035] p-5 sm:p-6"
      }
      variant="subtle"
    >
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {architecture.tags[locale].map((tag) => (
            <span
              className="rounded-full border border-white/10 bg-slate-900/60 px-2.5 py-1 text-[0.64rem] font-medium tracking-[0.04em] text-slate-200"
              key={[architecture.id, tag].join("-")}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className={featured ? "text-2xl font-semibold tracking-tight text-white" : "text-lg font-semibold tracking-tight text-white"}>
            {architecture.headline[locale]}
          </h3>
          <p className={featured ? "max-w-3xl text-sm leading-7 text-slate-300" : "text-sm leading-6 text-slate-300"}>
            {architecture.description[locale]}
          </p>
        </div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]/78">
          {architecture.bestFor[locale]}
        </p>
      </div>

      <div className={featured ? "rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,25,0.94),rgba(7,11,20,0.98))] p-4" : "rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,25,0.92),rgba(7,11,20,0.98))] p-3"}>
        <ArchitectureCanvas
          animateSequence={animateSequence}
          architecture={architecture}
          locale={locale}
          revealed={revealed}
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {architecture.outcomes[locale].map((outcome) => (
          <div
            className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-3 text-xs font-medium leading-5 text-slate-200"
            key={[architecture.id, outcome].join("-")}
          >
            {outcome}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function AgentArchitectureShowcaseSection({
  ctaHref,
  locale,
  sectionId = "agent-architecture-showcase",
}: AgentArchitectureShowcaseSectionProps) {
  const model = useMemo(() => getAgentArchitectureShowcaseModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.16, margin: "0px 0px -8% 0px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);
  const featured = model.architectures.find((architecture) => architecture.id === model.featuredId) ?? model.architectures[0];
  const secondaryArchitectures = model.architectures.filter((architecture) => architecture.id !== featured?.id);

  if (!featured) {
    return null;
  }

  return (
    <Section id={sectionId}>
      <div className="space-y-12 lg:space-y-16" ref={sectionRef}>
        <HeadingBlock
          description={model.copy.description}
          eyebrow={model.copy.eyebrow}
          title={model.copy.title}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(21rem,0.85fr)] xl:gap-8">
          <ArchitectureCard
            animateSequence={animateSequence}
            architecture={featured}
            featured
            locale={locale}
            revealed={revealed}
          />

          <Card className="space-y-6 border-white/10 bg-white/[0.035]" variant="subtle">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/80">
                {model.copy.eyebrow}
              </p>
              <p className="text-lg font-semibold tracking-tight text-white">
                {locale === "pl" ? "Co budujemy w praktyce" : "What We Build in Practice"}
              </p>
              <p className="text-sm leading-7 text-slate-300">{model.copy.helper}</p>
            </div>

            <div className="grid gap-3">
              {[
                locale === "pl"
                  ? "Lead orchestratorzy, ktorzy potrafia routowac prace do agentow specjalistycznych"
                  : "Lead orchestrators that route work into specialist agents",
                locale === "pl"
                  ? "Warstwy shared tools i approvale dla governance, a nie chaotycznych eksperymentow"
                  : "Shared tool layers and approval steps for governance, not experimentation chaos",
                locale === "pl"
                  ? "Pamiec, RAG i petle iteracyjne tam, gdzie firma rzeczywiscie potrzebuje kontekstu"
                  : "Memory, RAG and looped iteration where the company actually needs context",
                locale === "pl"
                  ? "Architektury, ktore mozna rozszerzac od prostego agentowego copilot do wieloagentowego systemu operacyjnego"
                  : "Architectures that can grow from a lightweight copilot into a multi-agent operating system",
              ].map((item) => (
                <div
                  className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-slate-200"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>

            <Button
              className="w-full shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)] sm:w-auto"
              data-cta="portal-agent-architecture-showcase"
              href={ctaHref}
            >
              {locale === "pl" ? "Porozmawiaj o architekturze agentowej" : "Discuss an Agent Architecture"}
            </Button>
          </Card>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {secondaryArchitectures.map((architecture) => (
            <ArchitectureCard
              animateSequence={animateSequence}
              architecture={architecture}
              key={architecture.id}
              locale={locale}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
