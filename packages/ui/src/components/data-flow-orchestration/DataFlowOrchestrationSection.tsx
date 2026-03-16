"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import {
  DATA_FLOW_CANVAS,
  DATA_FLOW_DELAYS,
  DATA_FLOW_NODE_DIMENSIONS,
  getDataFlowOrchestrationModel,
  type DataFlowOrchestrationModel,
} from "./data";
import {
  buildBranchPath,
  buildCrossLinkPath,
  buildDataFlowLayout,
  buildSectorArcPath,
  type DataFlowBranchGeometry,
  type DataFlowPoint,
  type DataFlowSubnodePlacement,
} from "./layout";

type DataFlowOrchestrationSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

type RadialCanvasProps = {
  animateSequence: boolean;
  locale: AppLocale;
  model: DataFlowOrchestrationModel;
  reducedDensity?: boolean;
  revealed: boolean;
};

type RenderableBranch = Omit<DataFlowBranchGeometry, "subnodes"> & {
  mainDelay: number;
  mainPath: string;
  sectorPath: string;
  subnodes: (DataFlowSubnodePlacement & {
    delay: number;
  })[];
};

type RenderableCrossLink = {
  d: string;
  delay: number;
  id: string;
};

type RenderModel = {
  branches: RenderableBranch[];
  center: DataFlowPoint;
  crossLinks: RenderableCrossLink[];
};

const CORE_RADIUS = DATA_FLOW_NODE_DIMENSIONS.coreRadius;
const MAIN_NODE = DATA_FLOW_NODE_DIMENSIONS.main;
const SUB_DOT_RADIUS = DATA_FLOW_NODE_DIMENSIONS.subDotRadius;

function withOpacity(hex: string, alpha: number) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return ["rgba(", String(red), ", ", String(green), ", ", String(blue), ", ", String(alpha), ")"].join("");
}

function polarPoint(angle: number, radius: number): DataFlowPoint {
  const radians = (angle * Math.PI) / 180;

  return {
    x: DATA_FLOW_CANVAS.center.x + Math.cos(radians) * radius,
    y: DATA_FLOW_CANVAS.center.y + Math.sin(radians) * radius,
  };
}

function estimateLabelBox(label: string[]) {
  const longestLine = Math.max(...label.map((line) => line.length));
  const lineCount = label.length;

  return {
    height: lineCount === 1 ? 24 : 38,
    width: Math.max(60, Math.min(120, longestLine * 6.2 + 20)),
  };
}

function getLabelBoxPosition(
  align: DataFlowSubnodePlacement["labelAlign"],
  boxWidth: number,
  boxHeight: number,
  dx: number,
  dy: number,
) {
  if (align === "center") {
    return {
      textAnchor: "middle" as const,
      x: -boxWidth / 2,
      y: dy < 0 ? dy - boxHeight - 8 : dy + 8,
    };
  }

  if (align === "end") {
    return {
      textAnchor: "end" as const,
      x: dx - boxWidth,
      y: dy - boxHeight / 2,
    };
  }

  return {
    textAnchor: "start" as const,
    x: dx,
    y: dy - boxHeight / 2,
  };
}

function getMainTextY(label: string[]) {
  return MAIN_NODE.height / 2 - (label.length - 1) * 9;
}

function buildRenderModel(model: DataFlowOrchestrationModel, reducedDensity = false): RenderModel {
  const layout = buildDataFlowLayout(model.branches, reducedDensity
    ? {
        mainRadiusScale: 0.9,
        maxSubnodesPerBranch: 4,
        outerRadiusScale: 0.88,
      }
    : {
        mainRadiusScale: 1,
        outerRadiusScale: 1,
      });

  const branches = layout.branches.map((branch, branchIndex) => {
    const from = polarPoint(branch.branch.mainAngle, CORE_RADIUS + 10);
    const mainDelay = DATA_FLOW_DELAYS[branch.branch.mainScene] + branchIndex * 0.06;

    return {
      ...branch,
      mainDelay,
      mainPath: buildBranchPath(from, branch.mainPoint),
      sectorPath: buildSectorArcPath(
        branch.branch.sectorStart,
        branch.branch.sectorEnd,
        branch.branch.subRadiusOuter * (reducedDensity ? 0.88 : 1) - 22,
      ),
      subnodes: branch.subnodes.map((subnode, subnodeIndex) => ({
        ...subnode,
        delay: DATA_FLOW_DELAYS[branch.branch.subScene] + subnodeIndex * 0.06,
      })),
    };
  });

  const pointsById = Object.fromEntries(
    branches.flatMap((branch) => branch.subnodes.map((subnode) => [subnode.subnode.id, subnode.point])),
  ) as Record<string, DataFlowPoint | undefined>;

  return {
    branches,
    center: layout.center,
    crossLinks: model.crossLinks.flatMap((link, index) => {
      const from = pointsById[link.from];
      const to = pointsById[link.to];

      if (!from || !to) {
        return [];
      }

      return [
        {
          d: buildCrossLinkPath(from, to),
          delay: DATA_FLOW_DELAYS.crossLinks + index * 0.08,
          id: link.id,
        },
      ];
    }),
  };
}

function CoreNode({
  animateSequence,
  label,
  revealed,
}: {
  animateSequence: boolean;
  label: string;
  revealed: boolean;
}) {
  return (
    <g transform={["translate(", String(DATA_FLOW_CANVAS.center.x), " ", String(DATA_FLOW_CANVAS.center.y), ")"].join("")}>
      <motion.g
        animate={animateSequence ? { opacity: 1, scale: 1 } : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.92 }}
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={
          animateSequence
            ? {
                delay: DATA_FLOW_DELAYS.core,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }
            : { duration: 0 }
        }
      >
        <circle cx={0} cy={0} fill="rgba(37,99,235,0.16)" r={148} />
        <circle
          cx={0}
          cy={0}
          fill="url(#data-flow-core-surface)"
          r={CORE_RADIUS}
          stroke="rgba(191,219,254,0.6)"
          strokeWidth={1.2}
        />
        <circle
          cx={0}
          cy={0}
          fill="none"
          r={CORE_RADIUS + 15}
          stroke="rgba(59,130,246,0.16)"
          strokeDasharray="7 12"
          strokeWidth={1}
        />
        <text className="fill-white text-[1.08rem] font-semibold tracking-[0.02em]" textAnchor="middle" x={0} y={0}>
          <tspan x={0} dy={6}>
            {label}
          </tspan>
        </text>
      </motion.g>
    </g>
  );
}

function MainNode({
  animateSequence,
  branch,
  locale,
  revealed,
}: {
  animateSequence: boolean;
  branch: RenderableBranch;
  locale: AppLocale;
  revealed: boolean;
}) {
  const x = branch.mainPoint.x - MAIN_NODE.width / 2;
  const y = branch.mainPoint.y - MAIN_NODE.height / 2;
  const label = branch.branch.label[locale];

  return (
    <g transform={["translate(", String(x), " ", String(y), ")"].join("")}>
      <motion.g
        animate={animateSequence ? { opacity: 1, scale: 1 } : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96 }}
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={
          animateSequence
            ? {
                delay: branch.mainDelay,
                duration: 0.74,
                ease: [0.22, 1, 0.36, 1],
              }
            : { duration: 0 }
        }
      >
        <rect
          fill={withOpacity(branch.branch.tone, 0.16)}
          height={MAIN_NODE.height}
          rx={20}
          stroke={withOpacity(branch.branch.tone, 0.42)}
          strokeWidth={1.1}
          width={MAIN_NODE.width}
        />
        <rect
          fill="rgba(8,15,29,0.82)"
          height={MAIN_NODE.height - 8}
          rx={16}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={1}
          width={MAIN_NODE.width - 8}
          x={4}
          y={4}
        />
        <text
          className="fill-white text-[0.72rem] font-semibold tracking-[0.04em]"
          textAnchor="middle"
          x={MAIN_NODE.width / 2}
          y={getMainTextY(label)}
        >
          {label.map((line, index) => (
            <tspan dy={index === 0 ? 0 : 18} key={[branch.branch.id, line, String(index)].join("-")} x={MAIN_NODE.width / 2}>
              {line}
            </tspan>
          ))}
        </text>
      </motion.g>
    </g>
  );
}

function SubNode({
  animateSequence,
  locale,
  placement,
  revealed,
  tone,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  placement: RenderableBranch["subnodes"][number];
  revealed: boolean;
  tone: string;
}) {
  const label = placement.subnode.label[locale];
  const box = estimateLabelBox(label);
  const boxPosition = getLabelBoxPosition(
    placement.labelAlign,
    box.width,
    box.height,
    placement.labelDx,
    placement.labelDy,
  );

  return (
    <g transform={["translate(", String(placement.point.x), " ", String(placement.point.y), ")"].join("")}>
      <motion.g
        animate={animateSequence ? { opacity: 1, scale: 1 } : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96 }}
        initial={false}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transition={
          animateSequence
            ? {
                delay: placement.delay,
                duration: 0.56,
                ease: [0.22, 1, 0.36, 1],
              }
            : { duration: 0 }
        }
      >
        <circle cx={0} cy={0} fill={tone} r={SUB_DOT_RADIUS + 2.2} />
        <circle cx={0} cy={0} fill="rgba(255,255,255,0.82)" r={SUB_DOT_RADIUS} />
        <g transform={["translate(", String(boxPosition.x), " ", String(boxPosition.y), ")"].join("")}>
          <rect
            fill="rgba(8,15,29,0.82)"
            height={box.height}
            rx={12}
            stroke={withOpacity(tone, 0.26)}
            strokeWidth={1}
            width={box.width}
          />
          <text
            className="fill-slate-200 text-[0.58rem] font-medium tracking-[0.02em]"
            textAnchor={boxPosition.textAnchor}
            x={boxPosition.textAnchor === "middle" ? box.width / 2 : boxPosition.textAnchor === "start" ? 10 : box.width - 10}
            y={label.length === 1 ? box.height / 2 + 3 : 13}
          >
            {label.map((line, index) => (
              <tspan
                dy={index === 0 ? 0 : 12}
                key={[placement.subnode.id, line, String(index)].join("-")}
                x={boxPosition.textAnchor === "middle" ? box.width / 2 : boxPosition.textAnchor === "start" ? 10 : box.width - 10}
              >
                {line}
              </tspan>
            ))}
          </text>
        </g>
      </motion.g>
    </g>
  );
}

function RadialCanvas({ animateSequence, locale, model, reducedDensity = false, revealed }: RadialCanvasProps) {
  const renderModel = useMemo(() => buildRenderModel(model, reducedDensity), [model, reducedDensity]);

  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      viewBox={["0", "0", String(DATA_FLOW_CANVAS.width), String(DATA_FLOW_CANVAS.height)].join(" ")}
    >
      <defs>
        <radialGradient cx="50%" cy="50%" id="data-flow-core-surface" r="70%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.48)" />
          <stop offset="100%" stopColor="rgba(7,12,24,0.96)" />
        </radialGradient>
      </defs>

      <motion.circle
        animate={animateSequence ? { opacity: [0.04, 0.1, 0.04], r: [156, 174, 156] } : { opacity: revealed ? 0.08 : 0, r: 164 }}
        cx={renderModel.center.x}
        cy={renderModel.center.y}
        fill="rgba(37,99,235,0.22)"
        initial={false}
        r={164}
        transition={
          animateSequence
            ? {
                delay: DATA_FLOW_DELAYS.liveState,
                duration: 6.1,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
            : { duration: 0 }
        }
      />

      <g aria-hidden="true" opacity={0.22}>
        {Array.from({ length: 11 }).map((_, index) => {
          const radius = 164 + index * 42;

          return (
            <circle
              cx={renderModel.center.x}
              cy={renderModel.center.y}
              fill="none"
              key={["ring", String(index)].join("-")}
              r={radius}
              stroke="rgba(148,163,184,0.16)"
              strokeDasharray="3 12"
              strokeWidth={1}
            />
          );
        })}
      </g>

      {renderModel.branches.map((branch) => (
        <path
          d={branch.sectorPath}
          fill="none"
          key={["sector", branch.branch.id].join("-")}
          stroke={withOpacity(branch.branch.tone, 0.18)}
          strokeDasharray="4 10"
          strokeWidth={1.1}
        />
      ))}
      <g aria-hidden="true">
        {renderModel.branches.map((branch) => (
          <motion.path
            animate={
              animateSequence
                ? { opacity: 0.72, pathLength: 1 }
                : { opacity: revealed ? 0.72 : 0, pathLength: revealed ? 1 : 0 }
            }
            d={branch.mainPath}
            fill="none"
            initial={false}
            key={["main-path", branch.branch.id].join("-")}
            stroke={withOpacity(branch.branch.tone, 0.66)}
            strokeLinecap="round"
            strokeWidth={1.7}
            transition={
              animateSequence
                ? {
                    delay: branch.mainDelay,
                    duration: 0.84,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0 }
            }
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {renderModel.branches.flatMap((branch) =>
          branch.subnodes.map((subnode) => (
            <motion.path
              animate={
                animateSequence
                  ? { opacity: 0.52, pathLength: 1 }
                  : { opacity: revealed ? 0.52 : 0, pathLength: revealed ? 1 : 0 }
              }
              d={buildBranchPath(branch.mainPoint, subnode.point)}
              fill="none"
              initial={false}
              key={["sub-path", subnode.subnode.id].join("-")}
              stroke={withOpacity(branch.branch.tone, 0.46)}
              strokeLinecap="round"
              strokeWidth={1.1}
              transition={
                animateSequence
                  ? {
                      delay: subnode.delay,
                      duration: 0.62,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : { duration: 0 }
              }
              vectorEffect="non-scaling-stroke"
            />
          )),
        )}

        {!reducedDensity
          ? renderModel.crossLinks.map((link) => (
              <motion.path
                animate={
                  animateSequence
                    ? { opacity: 0.3, pathLength: 1 }
                    : { opacity: revealed ? 0.3 : 0, pathLength: revealed ? 1 : 0 }
                }
                d={link.d}
                fill="none"
                initial={false}
                key={["cross-link", link.id].join("-")}
                stroke="rgba(191,219,254,0.34)"
                strokeDasharray="4 7"
                strokeLinecap="round"
                strokeWidth={0.95}
                transition={
                  animateSequence
                    ? {
                        delay: link.delay,
                        duration: 0.66,
                        ease: [0.22, 1, 0.36, 1],
                      }
                    : { duration: 0 }
                }
                vectorEffect="non-scaling-stroke"
              />
            ))
          : null}
      </g>

      {renderModel.branches
        .filter((branch) => ["sales", "operations", "reporting", "ai"].includes(branch.branch.id))
        .map((branch, index) => (
          <motion.circle
            animate={
              animateSequence
                ? { offsetDistance: ["0%", "100%"], opacity: [0, 0.85, 0], scale: [0.7, 1, 0.7] }
                : { opacity: 0, scale: 0.7 }
            }
            cx={renderModel.center.x}
            cy={renderModel.center.y}
            fill={withOpacity(branch.branch.tone, 0.94)}
            initial={false}
            key={["pulse", branch.branch.id].join("-")}
            r={2.8}
            style={{ offsetPath: `path("${branch.mainPath}")` }}
            transition={
              animateSequence
                ? {
                    delay: DATA_FLOW_DELAYS.liveState + index * 0.2,
                    duration: 3.2,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2.2,
                  }
                : { duration: 0 }
            }
          />
        ))}

      <CoreNode animateSequence={animateSequence} label={model.core.label[locale]} revealed={revealed} />

      {renderModel.branches.map((branch) => (
        <MainNode
          animateSequence={animateSequence}
          branch={branch}
          key={branch.branch.id}
          locale={locale}
          revealed={revealed}
        />
      ))}

      {renderModel.branches.flatMap((branch) =>
        branch.subnodes.map((subnode) => (
          <SubNode
            animateSequence={animateSequence}
            key={subnode.subnode.id}
            locale={locale}
            placement={subnode}
            revealed={revealed}
            tone={branch.branch.tone}
          />
        )),
      )}
    </svg>
  );
}

function MobileClusterCard({
  animateSequence,
  cluster,
  index,
  revealed,
}: {
  animateSequence: boolean;
  cluster: DataFlowOrchestrationModel["mobileClusters"][number];
  index: number;
  revealed: boolean;
}) {
  return (
    <motion.div
      animate={animateSequence ? { opacity: 1, scale: 1, y: 0 } : { opacity: revealed ? 1 : 0, scale: 0.98, y: revealed ? 0 : 10 }}
      className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.72)]"
      initial={false}
      transition={
        animateSequence
          ? {
              delay: DATA_FLOW_DELAYS.mainSecond + index * 0.1,
              duration: 0.58,
              ease: [0.22, 1, 0.36, 1],
            }
          : { duration: 0 }
      }
    >
      <p className="text-sm font-semibold tracking-tight text-white">{cluster.label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {cluster.items.map((item) => (
          <span
            className="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-[0.66rem] font-medium tracking-[0.03em] text-slate-200"
            key={[cluster.id, item].join("-")}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function MobileLayout({
  animateSequence,
  locale,
  model,
  revealed,
}: {
  animateSequence: boolean;
  locale: AppLocale;
  model: DataFlowOrchestrationModel;
  revealed: boolean;
}) {
  return (
    <div className="space-y-5">
      <motion.div
        animate={animateSequence ? { opacity: 1, scale: 1, y: 0 } : { opacity: revealed ? 1 : 0, scale: 0.98, y: 10 }}
        className="mx-auto max-w-[16rem] rounded-[1.5rem] border border-[color:var(--brand-accent)]/24 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),rgba(8,15,29,0.96))] px-5 py-5 text-center shadow-[0_30px_80px_-48px_rgba(37,99,235,0.55)]"
        initial={false}
        transition={
          animateSequence
            ? {
                delay: DATA_FLOW_DELAYS.core,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }
            : { duration: 0 }
        }
      >
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">
          {model.copy.eyebrow}
        </p>
        <p className="mt-3 text-lg font-semibold tracking-tight text-white">{model.core.label[locale]}</p>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2">
        {model.mobileClusters.map((cluster, index) => (
          <MobileClusterCard
            animateSequence={animateSequence}
            cluster={cluster}
            index={index}
            key={cluster.id}
            revealed={revealed}
          />
        ))}
      </div>
    </div>
  );
}

export function DataFlowOrchestrationSection({
  ctaHref,
  locale,
  sectionId = "data-flow-orchestration",
}: DataFlowOrchestrationSectionProps) {
  const model = useMemo(() => getDataFlowOrchestrationModel(locale), [locale]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.16, margin: "0px 0px -8% 0px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;
  const revealed = isInView || Boolean(prefersReducedMotion);

  return (
    <Section id={sectionId}>
      <div className="space-y-12 lg:space-y-16">
        <HeadingBlock
          description={model.copy.description}
          eyebrow={model.copy.eyebrow}
          title={model.copy.title}
        />

        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,rgba(10,15,27,0.94),rgba(6,10,19,0.98))] px-4 py-5 shadow-[0_38px_120px_-72px_rgba(15,23,42,0.94)] sm:px-6 sm:py-6 lg:px-7 lg:py-8"
          ref={sectionRef}
        >
          <div className="pointer-events-none absolute inset-0 opacity-28 [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]">
            <div className="muted-grid h-full w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

          <div className="relative mx-auto max-w-[80rem]">
            <div className="hidden xl:block">
              <RadialCanvas animateSequence={animateSequence} locale={locale} model={model} revealed={revealed} />
            </div>
            <div className="hidden md:block xl:hidden">
              <RadialCanvas
                animateSequence={animateSequence}
                locale={locale}
                model={model}
                reducedDensity
                revealed={revealed}
              />
            </div>
            <div className="md:hidden">
              <MobileLayout animateSequence={animateSequence} locale={locale} model={model} revealed={revealed} />
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-slate-300 sm:text-base">{model.copy.supportLine}</p>

        <Card
          className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border-white/12 bg-white/[0.035] lg:flex-row lg:items-center"
          variant="subtle"
        >
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/80">
              {model.copy.eyebrow}
            </p>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {model.copy.ctaTitle}
            </h3>
          </div>
          <Button
            className="w-full shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)] sm:w-auto"
            data-cta="portal-data-flow-orchestration"
            href={ctaHref}
          >
            {model.copy.ctaLabel}
          </Button>
        </Card>
      </div>
    </Section>
  );
}
