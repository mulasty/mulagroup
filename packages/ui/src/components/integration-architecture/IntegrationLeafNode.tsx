"use client";

import { motion } from "framer-motion";

import type { IntegrationBranchSide, IntegrationPoint } from "./types";

type IntegrationLeafNodeProps = {
  animateSequence: boolean;
  delay: number;
  label: string;
  position: IntegrationPoint;
  revealed: boolean;
  side: IntegrationBranchSide;
  tone: string;
};

export function IntegrationLeafNode({
  animateSequence,
  delay,
  label,
  position,
  revealed,
  side,
  tone,
}: IntegrationLeafNodeProps) {
  const textAnchor = side === "right" ? "start" : "end";
  const textX = 0;
  const dotX = side === "right" ? -16 : 16;
  const entryX = side === "right" ? 12 : -12;

  return (
    <g transform={["translate(", String(position.x), " ", String(position.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, x: 0 }
            : { opacity: revealed ? 1 : 0, x: revealed ? 0 : entryX }
        }
        initial={false}
        transition={
          animateSequence
            ? { delay, duration: 0.58, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <circle cx={dotX} cy={0} fill={tone} fillOpacity={0.92} r={2.6} />
        <text
          fill="rgba(226,232,240,0.94)"
          fontFamily="var(--font-sans)"
          fontSize={12}
          fontWeight={500}
          textAnchor={textAnchor}
          x={textX}
          y={4}
        >
          {label}
        </text>
      </motion.g>
    </g>
  );
}
