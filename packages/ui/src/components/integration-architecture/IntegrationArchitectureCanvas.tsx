"use client";

import { useMemo } from "react";

import { INTEGRATION_SCENE_DELAYS } from "./data";
import { buildCurvedPath, getMainNodePosition, getSubnodePosition, INTEGRATION_CANVAS } from "./layout";
import { IntegrationArchitectureCanvasNodes } from "./IntegrationArchitectureCanvasNodes";
import { IntegrationCrossLinkLayer } from "./IntegrationCrossLinkLayer";
import { IntegrationLineLayer } from "./IntegrationLineLayer";
import { IntegrationPulseLayer } from "./IntegrationPulseLayer";
import type { IntegrationArchitectureModel } from "./types";

type IntegrationArchitectureCanvasProps = {
  animateSequence: boolean;
  architecture: IntegrationArchitectureModel;
  revealed: boolean;
};

export function IntegrationArchitectureCanvas({
  animateSequence,
  architecture,
  revealed,
}: IntegrationArchitectureCanvasProps) {
  const renderModel = useMemo(() => {
    const nodeIndex = new Map<string, { x: number; y: number }>();
    const mainPaths = architecture.primaryNodes.map((node, index) => {
      const position = getMainNodePosition(node.id);
      nodeIndex.set(node.id, position);

      return {
        d: buildCurvedPath(INTEGRATION_CANVAS.center, position, 0.12),
        delay: INTEGRATION_SCENE_DELAYS[node.scene] + index * 0.16,
        id: `line-${node.id}`,
        variant: "main" as const,
      };
    });

    const subNodes = architecture.primaryNodes.flatMap((node) =>
      node.subnodes.map((subnode, index) => {
        const position = getSubnodePosition(node.id, index);
        nodeIndex.set(subnode.id, position);

        return {
          delay: INTEGRATION_SCENE_DELAYS[node.subScene] + index * 0.12,
          id: subnode.id,
          label: subnode.label,
          position,
        };
      }),
    );

    const subPaths = architecture.primaryNodes.flatMap((node) =>
      node.subnodes.map((subnode, index) => ({
        d: buildCurvedPath(getMainNodePosition(node.id), getSubnodePosition(node.id, index), 0.08),
        delay: INTEGRATION_SCENE_DELAYS[node.subScene] + index * 0.1,
        id: `line-${node.id}-${subnode.id}`,
        variant: "sub" as const,
      })),
    );

    const crossPaths = architecture.crossLinks
      .map((link, index) => {
        const from = nodeIndex.get(link.from);
        const to = nodeIndex.get(link.to);

        if (!from || !to) {
          return null;
        }

        return {
          d: buildCurvedPath(from, to, 0.05),
          delay: INTEGRATION_SCENE_DELAYS.crossLinks + index * 0.12,
          id: link.id,
          variant: "cross" as const,
        };
      })
      .filter((value): value is NonNullable<typeof value> => value !== null);

    return {
      crossPaths,
      mainPaths,
      mainPoints: architecture.primaryNodes.map((node) => getMainNodePosition(node.id)),
      subNodes,
      subPaths,
    };
  }, [architecture]);

  return (
    <svg
      aria-hidden="true"
      className="h-auto w-full"
      viewBox={["0", "0", String(INTEGRATION_CANVAS.width), String(INTEGRATION_CANVAS.height)].join(" ")}
    >
      <defs>
        <linearGradient id="integration-core-surface" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(37,99,235,0.4)" />
          <stop offset="100%" stopColor="rgba(9,17,31,0.94)" />
        </linearGradient>
        <linearGradient id="integration-node-surface" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0.94)" />
        </linearGradient>
        <linearGradient id="integration-line-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(191,219,254,0.14)" />
          <stop offset="52%" stopColor="rgba(96,165,250,0.8)" />
          <stop offset="100%" stopColor="rgba(191,219,254,0.08)" />
        </linearGradient>
        <linearGradient id="integration-subline-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(191,219,254,0.06)" />
          <stop offset="100%" stopColor="rgba(148,163,184,0.55)" />
        </linearGradient>
        <linearGradient id="integration-crossline-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(96,165,250,0.04)" />
          <stop offset="50%" stopColor="rgba(147,197,253,0.44)" />
          <stop offset="100%" stopColor="rgba(96,165,250,0.04)" />
        </linearGradient>
      </defs>

      <IntegrationPulseLayer
        animateSequence={animateSequence}
        branchPoints={renderModel.mainPoints}
        center={INTEGRATION_CANVAS.center}
        revealed={revealed}
      />
      <IntegrationLineLayer
        animateSequence={animateSequence}
        paths={renderModel.mainPaths}
        revealed={revealed}
      />
      <IntegrationLineLayer
        animateSequence={animateSequence}
        paths={renderModel.subPaths}
        revealed={revealed}
      />
      <IntegrationCrossLinkLayer
        animateSequence={animateSequence}
        paths={renderModel.crossPaths}
        revealed={revealed}
      />
      <IntegrationArchitectureCanvasNodes
        animateSequence={animateSequence}
        architecture={architecture}
        revealed={revealed}
        subNodes={renderModel.subNodes}
      />
    </svg>
  );
}
