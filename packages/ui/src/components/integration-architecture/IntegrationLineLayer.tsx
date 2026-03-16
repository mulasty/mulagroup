"use client";

import { motion } from "framer-motion";

import type { IntegrationRenderablePath } from "./types";

type IntegrationLineLayerProps = {
  animateSequence: boolean;
  paths: IntegrationRenderablePath[];
  revealed: boolean;
};

export function IntegrationLineLayer({
  animateSequence,
  paths,
  revealed,
}: IntegrationLineLayerProps) {
  return (
    <g aria-hidden="true">
      {paths.map((path) => {
        const isMain = path.variant === "main";
        const isSub = path.variant === "sub";
        const stroke = isMain
          ? "url(#integration-line-gradient)"
          : isSub
            ? "url(#integration-subline-gradient)"
            : "url(#integration-crossline-gradient)";
        const strokeWidth = isMain ? 1.22 : isSub ? 0.82 : 0.72;
        const targetOpacity = isMain ? 0.66 : isSub ? 0.34 : 0.2;

        return (
          <motion.path
            animate={
              animateSequence
                ? { opacity: targetOpacity, pathLength: 1 }
                : { opacity: revealed ? targetOpacity : 0, pathLength: revealed ? 1 : 0 }
            }
            d={path.d}
            fill="none"
            initial={false}
            key={path.id}
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            transition={
              animateSequence
                ? { delay: path.delay, duration: 0.82, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </g>
  );
}
