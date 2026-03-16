import type { IntegrationBranchSide, IntegrationMainNodeConfig, IntegrationPoint } from "./types";

export type IntegrationTreeBranchGeometry = {
  mainConnectionPoint: IntegrationPoint;
  mainPosition: IntegrationPoint;
  node: IntegrationMainNodeConfig;
  subnodePositions: IntegrationPoint[];
};

export type IntegrationTreeLayout = {
  branches: IntegrationTreeBranchGeometry[];
  center: IntegrationPoint;
};

export const INTEGRATION_CANVAS = {
  center: { x: 700, y: 490 },
  height: 980,
  width: 1400,
} as const;

const CORE_HALF_WIDTH = 102;
const MAIN_HALF_WIDTH = 80;
const LEAF_DOT_OFFSET = 16;
const MAIN_NODE_X = {
  left: 484,
  right: 916,
} as const;
const SUBNODE_X = {
  left: 190,
  right: 1210,
} as const;
const SIDE_BOUNDS = {
  left: { endY: 820, startY: 150 },
  right: { endY: 840, startY: 180 },
} as const;

function distributeEvenly(start: number, end: number, count: number) {
  if (count <= 1) {
    return [(start + end) / 2];
  }

  return Array.from({ length: count }, (_, index) => {
    const progress = index / (count - 1);

    return start + (end - start) * progress;
  });
}

function getLeafSpread(nodeCount: number) {
  if (nodeCount <= 1) {
    return 0;
  }

  return Math.min(232, Math.max(128, (nodeCount - 1) * 34));
}

function getNodeYPositions(side: IntegrationBranchSide, count: number) {
  const bounds = SIDE_BOUNDS[side];

  return distributeEvenly(bounds.startY, bounds.endY, count);
}

function getSubnodePositions(
  side: IntegrationBranchSide,
  mainY: number,
  subnodeCount: number,
): IntegrationPoint[] {
  const spread = getLeafSpread(subnodeCount);
  const startY = mainY - spread / 2;
  const endY = mainY + spread / 2;

  return distributeEvenly(startY, endY, subnodeCount).map((y) => ({
    x: SUBNODE_X[side],
    y,
  }));
}

function getMainConnectionPoint(side: IntegrationBranchSide, position: IntegrationPoint): IntegrationPoint {
  return {
    x: position.x + (side === "right" ? -MAIN_HALF_WIDTH : MAIN_HALF_WIDTH),
    y: position.y,
  };
}

export function getCoreConnectionPoint(side: IntegrationBranchSide): IntegrationPoint {
  return {
    x: INTEGRATION_CANVAS.center.x + (side === "right" ? CORE_HALF_WIDTH : -CORE_HALF_WIDTH),
    y: INTEGRATION_CANVAS.center.y,
  };
}

export function getLeafConnectionPoint(side: IntegrationBranchSide, position: IntegrationPoint): IntegrationPoint {
  return {
    x: position.x + (side === "right" ? -LEAF_DOT_OFFSET : LEAF_DOT_OFFSET),
    y: position.y,
  };
}

export function buildCoreBranchPath(from: IntegrationPoint, to: IntegrationPoint, side: IntegrationBranchSide) {
  const direction = side === "right" ? 1 : -1;

  return [
    "M",
    String(from.x),
    String(from.y),
    "C",
    String(from.x + direction * 92),
    String(from.y),
    String(to.x - direction * 124),
    String(to.y),
    String(to.x),
    String(to.y),
  ].join(" ");
}

export function buildLeafBranchPath(from: IntegrationPoint, to: IntegrationPoint, side: IntegrationBranchSide) {
  const direction = side === "right" ? 1 : -1;

  return [
    "M",
    String(from.x),
    String(from.y),
    "C",
    String(from.x + direction * 86),
    String(from.y),
    String(to.x - direction * 62),
    String(to.y),
    String(to.x),
    String(to.y),
  ].join(" ");
}

export function buildIntegrationTreeLayout(nodes: IntegrationMainNodeConfig[]): IntegrationTreeLayout {
  const leftNodes = nodes.filter((node) => node.side === "left");
  const rightNodes = nodes.filter((node) => node.side === "right");
  const leftYPositions = getNodeYPositions("left", leftNodes.length);
  const rightYPositions = getNodeYPositions("right", rightNodes.length);

  const leftBranches = leftNodes.map((node, index) => {
    const mainPosition = {
      x: MAIN_NODE_X.left,
      y: leftYPositions[index] ?? INTEGRATION_CANVAS.center.y,
    };

    return {
      mainConnectionPoint: getMainConnectionPoint("left", mainPosition),
      mainPosition,
      node,
      subnodePositions: getSubnodePositions("left", mainPosition.y, node.subnodes.length),
    };
  });

  const rightBranches = rightNodes.map((node, index) => {
    const mainPosition = {
      x: MAIN_NODE_X.right,
      y: rightYPositions[index] ?? INTEGRATION_CANVAS.center.y,
    };

    return {
      mainConnectionPoint: getMainConnectionPoint("right", mainPosition),
      mainPosition,
      node,
      subnodePositions: getSubnodePositions("right", mainPosition.y, node.subnodes.length),
    };
  });

  return {
    branches: [...leftBranches, ...rightBranches],
    center: INTEGRATION_CANVAS.center,
  };
}
