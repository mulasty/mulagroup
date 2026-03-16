"use client";

import { useMemo } from "react";

import { motion } from "framer-motion";

import { INTEGRATION_SCENE_DELAYS } from "./data";
import { IntegrationCoreNode } from "./IntegrationCoreNode";
import { IntegrationLeafNode } from "./IntegrationLeafNode";
import { IntegrationMainNode } from "./IntegrationMainNode";
import {
  buildCoreBranchPath,
  buildIntegrationTreeLayout,
  buildLeafBranchPath,
  getCoreConnectionPoint,
  getLeafConnectionPoint,
  INTEGRATION_CANVAS,
} from "./layout";
import type { IntegrationArchitectureModel, IntegrationBranchSide } from "./types";

type IntegrationArchitectureCanvasProps = {
  animateSequence: boolean;
  architecture: IntegrationArchitectureModel;
  revealed: boolean;
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

function getSignalIndexes(side: IntegrationBranchSide) {
  return side === "right" ? [0, 1, 3] : [0, 2, 4];
}

export function IntegrationArchitectureCanvas({
  animateSequence,
  architecture,
  revealed,
}: IntegrationArchitectureCanvasProps) {
  const renderModel = useMemo(() => {
    const geometry = buildIntegrationTreeLayout(architecture.primaryNodes);
    const mainPaths = geometry.branches.map((branch, index) => {
      const from = getCoreConnectionPoint(branch.node.side);
      const to = branch.mainConnectionPoint;

      return {
        d: buildCoreBranchPath(from, to, branch.node.side),
        delay: INTEGRATION_SCENE_DELAYS[branch.node.scene] + index * 0.08,
        id: `core-${branch.node.id}`,
        side: branch.node.side,
        tone: branch.node.tone,
      };
    });

    const leafPaths = geometry.branches.flatMap((branch) =>
      branch.node.subnodes.map((subnode, index) => ({
        d: buildLeafBranchPath(
          branch.mainConnectionPoint,
          getLeafConnectionPoint(branch.node.side, branch.subnodePositions[index] ?? branch.mainPosition),
          branch.node.side,
        ),
        delay: INTEGRATION_SCENE_DELAYS[branch.node.subScene] + index * 0.08,
        id: `leaf-${branch.node.id}-${subnode.id}`,
        side: branch.node.side,
        tone: branch.node.tone,
      })),
    );

    return {
      branches: geometry.branches,
      center: geometry.center,
      leafPaths,
      mainPaths,
    };
  }, [architecture.primaryNodes]);

  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      viewBox={["0", "0", String(INTEGRATION_CANVAS.width), String(INTEGRATION_CANVAS.height)].join(" ")}
    >
      <defs>
        <linearGradient id="integration-core-surface" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(37,99,235,0.42)" />
          <stop offset="100%" stopColor="rgba(11,18,32,0.96)" />
        </linearGradient>
        <linearGradient id="integration-node-surface" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(10,17,30,0.96)" />
        </linearGradient>
      </defs>

      <motion.circle
        animate={
          animateSequence
            ? { opacity: [0.03, 0.1, 0.03], r: [126, 144, 126] }
            : { opacity: revealed ? 0.06 : 0, r: 134 }
        }
        cx={renderModel.center.x}
        cy={renderModel.center.y}
        fill="var(--brand-accent)"
        initial={false}
        r={134}
        transition={
          animateSequence
            ? {
                delay: INTEGRATION_SCENE_DELAYS.liveState,
                duration: 5.8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
            : { duration: 0 }
        }
      />

      <g aria-hidden="true">
        {renderModel.mainPaths.map((path) => (
          <motion.path
            animate={
              animateSequence
                ? { opacity: 0.78, pathLength: 1 }
                : { opacity: revealed ? 0.78 : 0, pathLength: revealed ? 1 : 0 }
            }
            d={path.d}
            fill="none"
            initial={false}
            key={path.id}
            stroke={withOpacity(path.tone, 0.72)}
            strokeLinecap="round"
            strokeWidth={1.7}
            transition={
              animateSequence
                ? { delay: path.delay, duration: 0.86, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {renderModel.leafPaths.map((path) => (
          <motion.path
            animate={
              animateSequence
                ? { opacity: 0.58, pathLength: 1 }
                : { opacity: revealed ? 0.58 : 0, pathLength: revealed ? 1 : 0 }
            }
            d={path.d}
            fill="none"
            initial={false}
            key={path.id}
            stroke={withOpacity(path.tone, 0.62)}
            strokeLinecap="round"
            strokeWidth={1.2}
            transition={
              animateSequence
                ? { delay: path.delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {renderModel.branches.flatMap((branch) =>
        getSignalIndexes(branch.node.side).map((signalIndex) => {
          const path = renderModel.mainPaths.find((candidate) => candidate.id === `core-${branch.node.id}`);

          if (!path || signalIndex !== 0) {
            return null;
          }

          return (
            <motion.circle
              animate={
                animateSequence
                  ? {
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 0.8, 0],
                      scale: [0.72, 0.92, 0.72],
                    }
                  : { opacity: 0, scale: 0.72 }
              }
              cx={renderModel.center.x}
              cy={renderModel.center.y}
              fill={branch.node.tone}
              initial={false}
              key={`signal-${branch.node.id}`}
              r={2.8}
              style={{ offsetPath: `path("${path.d}")` }}
              transition={
                animateSequence
                  ? {
                      delay: INTEGRATION_SCENE_DELAYS.liveState + (branch.node.side === "right" ? 0.28 : 0.12),
                      duration: 3.4,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2.4,
                    }
                  : { duration: 0 }
              }
            />
          );
        }),
      )}

      <IntegrationCoreNode
        animateSequence={animateSequence}
        delay={INTEGRATION_SCENE_DELAYS.core}
        label={architecture.core.label}
        position={renderModel.center}
        revealed={revealed}
      />

      {renderModel.branches.map((branch, index) => (
        <IntegrationMainNode
          animateSequence={animateSequence}
          delay={INTEGRATION_SCENE_DELAYS[branch.node.scene] + index * 0.08}
          emphasis={branch.node.id === "sales" || branch.node.id === "reporting"}
          key={branch.node.id}
          label={branch.node.label}
          position={branch.mainPosition}
          revealed={revealed}
        />
      ))}

      {renderModel.branches.flatMap((branch) =>
        branch.node.subnodes.map((subnode, index) => (
          <IntegrationLeafNode
            animateSequence={animateSequence}
            delay={INTEGRATION_SCENE_DELAYS[branch.node.subScene] + index * 0.08}
            key={subnode.id}
            label={subnode.label}
            position={branch.subnodePositions[index] ?? branch.mainPosition}
            revealed={revealed}
            side={branch.node.side}
            tone={branch.node.tone}
          />
        )),
      )}
    </svg>
  );
}
