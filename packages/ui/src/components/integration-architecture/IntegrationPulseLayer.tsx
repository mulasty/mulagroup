"use client";

import { motion } from "framer-motion";

import { INTEGRATION_SCENE_DELAYS } from "./data";
import { buildCurvedPath } from "./layout";
import type { IntegrationPoint } from "./types";

type IntegrationPulseLayerProps = {
  animateSequence: boolean;
  branchPoints: IntegrationPoint[];
  center: IntegrationPoint;
  revealed: boolean;
};

const HIGHLIGHT_BRANCH_INDEXES = [1, 4, 8] as const;
const SIGNAL_BRANCH_INDEXES = [1, 4, 8] as const;

export function IntegrationPulseLayer({
  animateSequence,
  branchPoints,
  center,
  revealed,
}: IntegrationPulseLayerProps) {
  return (
    <g aria-hidden="true">
      <motion.circle
        animate={
          animateSequence
            ? { opacity: [0.04, 0.12, 0.04], r: [80, 92, 80] }
            : { opacity: revealed ? 0.08 : 0, r: 84 }
        }
        cx={center.x}
        cy={center.y}
        fill="var(--brand-accent)"
        initial={false}
        r={84}
        transition={
          animateSequence
            ? {
                delay: INTEGRATION_SCENE_DELAYS.liveState,
                duration: 5.2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
            : { duration: 0 }
        }
      />
      {HIGHLIGHT_BRANCH_INDEXES.map((index) => {
        const point = branchPoints[index];

        if (!point) {
          return null;
        }

        return (
          <motion.circle
            animate={
              animateSequence
                ? { opacity: [0.01, 0.06, 0.01], r: [48, 58, 48] }
                : { opacity: revealed ? 0.03 : 0, r: 52 }
            }
            cx={point.x}
            cy={point.y}
            fill="var(--brand-accent)"
            initial={false}
            key={["branch-pulse", String(index)].join("-")}
            r={52}
            transition={
              animateSequence
                ? {
                    delay: INTEGRATION_SCENE_DELAYS.liveState + index * 0.12,
                    duration: 5.6,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }
                : { duration: 0 }
            }
          />
        );
      })}
      {SIGNAL_BRANCH_INDEXES.map((index) => {
        const point = branchPoints[index];

        if (!point) {
          return null;
        }

        const path = buildCurvedPath(center, point, 0.12);

        return (
          <motion.circle
            animate={
              animateSequence
                ? {
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 0.62, 0],
                    scale: [0.72, 0.94, 0.72],
                  }
                : { opacity: 0, scale: 0.7 }
            }
            cx={center.x}
            cy={center.y}
            fill="rgba(191, 219, 254, 0.96)"
            initial={false}
            key={["signal", String(index)].join("-")}
            r={2.35}
            style={{ offsetPath: `path("${path}")` }}
            transition={
              animateSequence
                ? {
                    delay: INTEGRATION_SCENE_DELAYS.liveState + index * 0.18,
                    duration: 3.6,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2.2,
                  }
                : { duration: 0 }
            }
          />
        );
      })}
    </g>
  );
}
