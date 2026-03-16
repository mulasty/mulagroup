"use client";

import { motion } from "framer-motion";

import type { IntegrationPoint } from "./types";

type IntegrationNodeBaseProps = {
  animateSequence: boolean;
  delay: number;
  emphasis?: boolean;
  label: string;
  position: IntegrationPoint;
  revealed: boolean;
  secondaryLabel?: string;
  variant: "core" | "main" | "sub";
};

const NODE_STYLES = {
  core: {
    accentOpacity: 0.22,
    fontSize: 20,
    lineHeight: 22,
    paddingY: 22,
    radius: 30,
    secondaryFontSize: 11,
    secondaryLineHeight: 14,
    width: 204,
  },
  main: {
    accentOpacity: 0.12,
    fontSize: 12,
    lineHeight: 16,
    paddingY: 14,
    radius: 24,
    secondaryFontSize: 10,
    secondaryLineHeight: 12,
    width: 160,
  },
  sub: {
    accentOpacity: 0.08,
    fontSize: 9.5,
    lineHeight: 11,
    paddingY: 10,
    radius: 18,
    secondaryFontSize: 8.5,
    secondaryLineHeight: 10,
    width: 108,
  },
} as const;

function wrapLabel(label: string, maxCharacters: number) {
  const words = label.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine.length > 0 ? `${currentLine} ${word}` : word;

    if (candidate.length <= maxCharacters) {
      currentLine = candidate;
      continue;
    }

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    currentLine = word;
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

export function IntegrationNodeBase({
  animateSequence,
  delay,
  emphasis = false,
  label,
  position,
  revealed,
  secondaryLabel,
  variant,
}: IntegrationNodeBaseProps) {
  const styles = NODE_STYLES[variant];
  const titleLines = wrapLabel(label, variant === "sub" ? 13 : 17);
  const secondaryLines = secondaryLabel ? wrapLabel(secondaryLabel, variant === "sub" ? 16 : 20) : [];
  const height =
    styles.paddingY * 2 +
    titleLines.length * styles.lineHeight +
    (secondaryLines.length > 0 ? 8 + secondaryLines.length * styles.secondaryLineHeight : 0);

  const titleStartY =
    secondaryLines.length > 0
      ? -(titleLines.length * styles.lineHeight + secondaryLines.length * styles.secondaryLineHeight + 8) / 2 +
        styles.lineHeight / 2
      : -((titleLines.length - 1) * styles.lineHeight) / 2;
  const secondaryStartY =
    titleStartY + titleLines.length * styles.lineHeight + (secondaryLines.length > 0 ? 8 : 0);

  return (
    <g transform={["translate(", String(position.x), " ", String(position.y), ")"].join("")}>
      <motion.g
        animate={
          animateSequence
            ? { opacity: 1, scale: 1 }
            : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.92 }
        }
        initial={false}
        transition={
          animateSequence
            ? { delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <motion.rect
          animate={
            animateSequence && emphasis
              ? { strokeOpacity: [0.14, 0.34, 0.22] }
              : { strokeOpacity: emphasis ? 0.42 : 0.18 }
          }
          fill={variant === "core" ? "url(#integration-core-surface)" : "url(#integration-node-surface)"}
          height={height}
          initial={false}
          rx={styles.radius}
          stroke={emphasis ? "var(--brand-accent)" : "rgba(255,255,255,0.16)"}
          strokeWidth={1}
          transition={
            animateSequence && emphasis
              ? {
                  delay: delay + 0.16,
                  duration: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }
              : { duration: 0 }
          }
          width={styles.width}
          x={-styles.width / 2}
          y={-height / 2}
        />
        <rect
          fill="var(--brand-accent)"
          height={height}
          opacity={emphasis ? styles.accentOpacity : styles.accentOpacity * 0.55}
          rx={styles.radius}
          width={styles.width}
          x={-styles.width / 2}
          y={-height / 2}
        />
        {titleLines.map((line, index) => (
          <text
            fill={variant === "sub" ? "rgba(248,250,252,0.96)" : "rgba(255,255,255,0.98)"}
            fontFamily="var(--font-sans)"
            fontSize={styles.fontSize}
            fontWeight={variant === "core" ? 700 : 600}
            key={[label, String(index)].join("-")}
            textAnchor="middle"
            x={0}
            y={titleStartY + index * styles.lineHeight}
          >
            {line}
          </text>
        ))}
        {secondaryLines.map((line, index) => (
          <text
            fill="rgba(191,219,254,0.78)"
            fontFamily="var(--font-sans)"
            fontSize={styles.secondaryFontSize}
            fontWeight={500}
            key={[secondaryLabel ?? "", String(index)].join("-")}
            letterSpacing={0.4}
            textAnchor="middle"
            x={0}
            y={secondaryStartY + index * styles.secondaryLineHeight}
          >
            {line}
          </text>
        ))}
      </motion.g>
    </g>
  );
}
