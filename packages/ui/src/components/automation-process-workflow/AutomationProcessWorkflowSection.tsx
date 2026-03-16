"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import {
  getAutomationProcessWorkflowModel,
  WORKFLOW_CANVAS,
  WORKFLOW_STAGES,
  type AutomationProcessWorkflowModel,
  type WorkflowConnection,
  type WorkflowMicroNode,
  type WorkflowNode,
  type WorkflowPortSide,
} from "./data";

type AutomationProcessWorkflowSectionProps = {
  demoHref: string;
  locale: AppLocale;
  overviewHref?: string;
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

function getNodeCenter(node: WorkflowNode) {
  return {
    x: node.x + node.w / 2,
    y: node.y + node.h / 2,
  };
}

function getMicroNodeCenter(node: WorkflowMicroNode) {
  return {
    x: node.x + node.w / 2,
    y: node.y + node.h / 2,
  };
}

function getAnchorForNode(node: WorkflowNode | WorkflowMicroNode, side: WorkflowPortSide, offsetX = 0, offsetY = 0): Point {
  const center = "kind" in node ? getNodeCenter(node) : getMicroNodeCenter(node);

  if (side === "left") {
    return { x: node.x + offsetX, y: center.y + offsetY };
  }
  if (side === "right") {
    return { x: node.x + node.w + offsetX, y: center.y + offsetY };
  }
  if (side === "top") {
    return { x: center.x + offsetX, y: node.y + offsetY };
  }

  return { x: center.x + offsetX, y: node.y + node.h + offsetY };
}

function distance(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function buildRoundedPath(points: Point[], radius = 14) {
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

function buildConnectionPath(
  connection: WorkflowConnection,
  nodesById: Record<string, WorkflowNode | WorkflowMicroNode>,
) {
  const fromNode = nodesById[connection.from.id];
  const toNode = nodesById[connection.to.id];

  if (!fromNode || !toNode) {
    return null;
  }

  const start = getAnchorForNode(
    fromNode,
    connection.from.side,
    connection.from.offsetX ?? 0,
    connection.from.offsetY ?? 0,
  );
  const end = getAnchorForNode(
    toNode,
    connection.to.side,
    connection.to.offsetX ?? 0,
    connection.to.offsetY ?? 0,
  );

  return buildRoundedPath([start, ...(connection.via ?? []), end], connection.dashed ? 10 : 14);
}

function buildRenderConnections(model: AutomationProcessWorkflowModel) {
  const nodesById = Object.fromEntries(
    [...model.nodes, ...model.microNodes].map((node) => [node.id, node]),
  ) as Record<string, WorkflowNode | WorkflowMicroNode>;

  return model.connections.flatMap((connection) => {
    const d = buildConnectionPath(connection, nodesById);

    if (!d) {
      return [];
    }

    return [
      {
        d,
        id: connection.id,
        pulse: Boolean(connection.pulse),
        pulseCount: connection.pulseCount ?? (connection.dashed ? 1 : 1),
        pulseTone: connection.pulseTone ?? connection.tone ?? "#3b82f6",
        stage: connection.stage,
        tone: connection.tone ?? (connection.dashed ? "#94a3b8" : "#9ca3af"),
      },
    ];
  });
}

function WorkflowNodeCard({
  animateSequence,
  locale,
  node,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  node: WorkflowNode;
  revealed: boolean;
}) {
  const titleLines = splitLabel(node.title[locale], node.kind === "orb" ? 14 : 18);
  const subtitle = node.subtitle?.[locale];
  const titleY = node.kind === "orb" ? 28 : 23;
  const cardShadow = node.kind === "orb" ? "rgba(15,23,42,0.18)" : "rgba(15,23,42,0.12)";

  return (
    <g transform={["translate(", String(node.x), " ", String(node.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96, y: revealed ? 0 : 8 }
        }
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={{
          delay:
            node.stage === 0
              ? WORKFLOW_STAGES.top + node.x / 6000
              : node.stage === 1
                ? WORKFLOW_STAGES.outreach + node.x / 7000
                : node.stage === 2
                  ? WORKFLOW_STAGES.middle + node.x / 8000
                  : WORKFLOW_STAGES.bottom + node.x / 9000,
          duration: 0.62,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {node.kind === "orb" ? (
          <>
            <circle cx={node.w / 2} cy={node.h / 2} fill="white" r={node.w / 2} stroke="rgba(148,163,184,0.42)" strokeWidth={1.1} />
            <circle cx={node.w / 2} cy={node.h / 2} fill="none" r={node.w / 2 + 6} stroke="rgba(226,232,240,0.8)" strokeDasharray="3 10" strokeWidth={1} />
          </>
        ) : (
          <>
            <rect fill={cardShadow} height={node.h} rx={14} width={node.w} x={2.5} y={4} />
            <rect fill="white" height={node.h} rx={14} stroke="rgba(148,163,184,0.32)" strokeWidth={1.05} width={node.w} x={0} y={0} />
          </>
        )}

        <rect
          fill={withOpacity(node.tone, 0.14)}
          height={node.kind === "orb" ? 24 : 26}
          rx={node.kind === "orb" ? 12 : 8}
          stroke={withOpacity(node.tone, 0.34)}
          strokeWidth={1}
          width={node.kind === "orb" ? 38 : 34}
          x={node.kind === "orb" ? node.w / 2 - 19 : 10}
          y={node.kind === "orb" ? 9 : 11}
        />
        <text
          className="fill-slate-700 text-[0.46rem] font-semibold tracking-[0.08em]"
          textAnchor="middle"
          x={node.kind === "orb" ? node.w / 2 : 27}
          y={node.kind === "orb" ? 25 : 28}
        >
          {node.iconLabel}
        </text>

        <text
          className="fill-slate-900 text-[0.58rem] font-semibold tracking-[0.01em]"
          textAnchor={node.kind === "orb" ? "middle" : "start"}
          x={node.kind === "orb" ? node.w / 2 : 52}
          y={titleY}
        >
          {titleLines.map((line, index) => (
            <tspan
              dy={index === 0 ? 0 : 12}
              key={[node.id, line, String(index)].join("-")}
              x={node.kind === "orb" ? node.w / 2 : 52}
            >
              {line}
            </tspan>
          ))}
        </text>

        {subtitle ? (
          <text
            className="fill-slate-500 text-[0.47rem] font-medium tracking-[0.03em]"
            textAnchor={node.kind === "orb" ? "middle" : "start"}
            x={node.kind === "orb" ? node.w / 2 : 52}
            y={node.kind === "orb" ? node.h - 10 : node.h - 12}
          >
            {subtitle}
          </text>
        ) : null}
      </motion.g>
    </g>
  );
}

function WorkflowMicroNodeCard({
  animateSequence,
  locale,
  node,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  node: WorkflowMicroNode;
  revealed: boolean;
}) {
  return (
    <g transform={["translate(", String(node.x), " ", String(node.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96, y: revealed ? 0 : 8 }
        }
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={{
          delay:
            node.stage === 0
              ? WORKFLOW_STAGES.top + 0.32
              : node.stage === 1
                ? WORKFLOW_STAGES.outreach + 0.34
                : node.stage === 2
                  ? WORKFLOW_STAGES.middle + 0.36
                  : WORKFLOW_STAGES.bottom + 0.36,
          duration: 0.46,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <rect
          fill="rgba(255,255,255,0.96)"
          height={node.h}
          rx={12}
          stroke={withOpacity(node.tone, 0.38)}
          strokeWidth={1}
          width={node.w}
        />
        <text
          className="fill-slate-700 text-[0.52rem] font-medium tracking-[0.03em]"
          textAnchor="middle"
          x={node.w / 2}
          y={node.h / 2 + 3}
        >
          {node.title[locale]}
        </text>
      </motion.g>
    </g>
  );
}

function WorkflowNoteCard({
  animateSequence,
  locale,
  note,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  note: AutomationProcessWorkflowModel["notes"][number];
  revealed: boolean;
}) {
  return (
    <g transform={["translate(", String(note.x), " ", String(note.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, rotate: 0, scale: 1, y: 0 }
            : { opacity: revealed ? 1 : 0, rotate: revealed ? 0 : -1.2, scale: 0.98, y: revealed ? 0 : 10 }
        }
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={{
          delay: WORKFLOW_STAGES.notes + note.stage * 0.08,
          duration: 0.56,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <rect fill="rgba(15,23,42,0.08)" height={78} rx={12} width={note.w} x={2} y={4} />
        <rect fill="#FEF3C7" height={78} rx={12} stroke="rgba(245,158,11,0.24)" strokeWidth={1} width={note.w} x={0} y={0} />
        <text className="fill-amber-950 text-[0.72rem] font-medium tracking-[0.01em]" textAnchor="start" x={16} y={24}>
          {note.lines[locale].map((line, index) => (
            <tspan dy={index === 0 ? 0 : 16} key={[note.id, line, String(index)].join("-")} x={16}>
              {line}
            </tspan>
          ))}
        </text>
      </motion.g>
    </g>
  );
}

function WorkflowCanvas({
  animateSequence,
  locale,
  model,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  model: AutomationProcessWorkflowModel;
  revealed: boolean;
}) {
  const renderConnections = useMemo(() => buildRenderConnections(model), [model]);

  return (
    <svg
      aria-hidden="true"
      className="block h-auto w-full"
      viewBox={["0", "0", String(WORKFLOW_CANVAS.width), String(WORKFLOW_CANVAS.height)].join(" ")}
    >
      <rect fill="rgba(255,255,255,0.98)" height={WORKFLOW_CANVAS.height} rx={24} width={WORKFLOW_CANVAS.width} x={0} y={0} />

      <g opacity={0.42}>
        {Array.from({ length: 22 }).map((_, index) => {
          const x = 24 + index * 72;
          return (
            <line
              key={["grid-v", String(index)].join("-")}
              stroke="rgba(226,232,240,0.92)"
              strokeDasharray="1 9"
              strokeWidth={1}
              x1={x}
              x2={x}
              y1={0}
              y2={WORKFLOW_CANVAS.height}
            />
          );
        })}
        {Array.from({ length: 15 }).map((_, index) => {
          const y = 28 + index * 64;
          return (
            <line
              key={["grid-h", String(index)].join("-")}
              stroke="rgba(241,245,249,0.86)"
              strokeDasharray="1 9"
              strokeWidth={1}
              x1={0}
              x2={WORKFLOW_CANVAS.width}
              y1={y}
              y2={y}
            />
          );
        })}
      </g>

      <rect fill="rgba(255,255,255,0.92)" height={38} rx={12} stroke="rgba(226,232,240,0.88)" strokeWidth={1} width={38} x={1478} y={16} />
      <path d="M1492 35h10M1498 29l6 6-6 6" fill="none" stroke="rgba(59,130,246,0.84)" strokeLinecap="round" strokeWidth={1.8} />

      {renderConnections.map((connection) => (
        <motion.path
          animate={
            animateSequence
              ? { opacity: 1, pathLength: 1 }
              : { opacity: revealed ? 1 : 0, pathLength: revealed ? 1 : 0 }
          }
          d={connection.d}
          fill="none"
          initial={false}
          key={connection.id}
          stroke={connection.tone}
          strokeDasharray={connection.tone === "#6366f1" || connection.tone === "#94a3b8" ? "3 8" : undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={connection.tone === "#6366f1" || connection.tone === "#94a3b8" ? 1.12 : 1.26}
          transition={{
            delay:
              connection.stage === 0
                ? WORKFLOW_STAGES.top + 0.08
                : connection.stage === 1
                  ? WORKFLOW_STAGES.outreach + 0.08
                  : connection.stage === 2
                    ? WORKFLOW_STAGES.middle + 0.08
                    : WORKFLOW_STAGES.bottom + 0.08,
            duration: 0.86,
            ease: [0.22, 1, 0.36, 1],
          }}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {renderConnections
        .flatMap((connection, index) =>
          Array.from({ length: connection.pulseCount }).map((_, pulseIndex) => (
            <motion.circle
              animate={
                animateSequence
                  ? { offsetDistance: ["0%", "100%"], opacity: [0, 0.88, 0], scale: [0.72, 1, 0.72] }
                  : { opacity: 0, scale: 0.72 }
              }
              cx={0}
              cy={0}
              fill={withOpacity(connection.pulseTone, connection.pulse ? 0.94 : 0.82)}
              initial={false}
              key={["pulse", connection.id, String(pulseIndex)].join("-")}
              r={connection.pulse ? 3.2 : 2.5}
              style={{ offsetPath: `path("${connection.d}")` }}
              transition={{
                delay: WORKFLOW_STAGES.pulse + index * 0.08 + pulseIndex * 0.34,
                duration: connection.pulse ? 2.7 : 4.4,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: connection.pulse ? 1.6 : 2.8,
              }}
            />
          )),
        )}

      {model.microNodes.map((node) => (
        <WorkflowMicroNodeCard
          animateSequence={animateSequence}
          key={node.id}
          locale={locale}
          node={node}
          revealed={revealed}
        />
      ))}

      {model.notes.map((note) => (
        <WorkflowNoteCard
          animateSequence={animateSequence}
          key={note.id}
          locale={locale}
          note={note}
          revealed={revealed}
        />
      ))}

      {model.nodes.map((node) => (
        <WorkflowNodeCard
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

export function AutomationProcessWorkflowSection({
  demoHref,
  locale,
  overviewHref = "#automation-process-workflow-canvas",
  sectionId = "automation-process-workflow",
}: AutomationProcessWorkflowSectionProps) {
  const model = useMemo(() => getAutomationProcessWorkflowModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.18, margin: "0px 0px -8% 0px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);

  return (
    <Section id={sectionId} tone="light">
      <div className="space-y-10 lg:space-y-14">
        <div className="space-y-6">
          <HeadingBlock
            description={model.copy.description}
            eyebrow={model.copy.eyebrow}
            title={model.copy.title}
            tone="light"
          />
          <div className="flex flex-wrap gap-3">
            <Button data-cta="portal-automation-workflow-overview" href={overviewHref} variant="secondary">
              {model.copy.ctaSecondary}
            </Button>
            <Button data-cta="portal-automation-workflow-demo" href={demoHref}>
              {model.copy.ctaPrimary}
            </Button>
          </div>
        </div>

        <motion.div
          animate={animateSequence ? { opacity: 1, y: 0 } : { opacity: revealed ? 1 : 0, y: revealed ? 0 : 16 }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.94))] px-4 py-4 shadow-[0_40px_110px_-70px_rgba(15,23,42,0.35)] sm:px-5 sm:py-5 lg:px-6 lg:py-6"
          initial={false}
          ref={sectionRef}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-32">
            <div className="muted-grid h-full w-full" />
          </div>

          <div className="relative overflow-x-auto" id="automation-process-workflow-canvas">
            <div className="min-w-[1180px] xl:min-w-0">
              <WorkflowCanvas animateSequence={animateSequence} locale={locale} model={model} revealed={revealed} />
            </div>
          </div>
        </motion.div>

        <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">{model.copy.helper}</p>
      </div>
    </Section>
  );
}
