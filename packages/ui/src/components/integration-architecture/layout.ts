import type { IntegrationPoint } from "./types";

export const INTEGRATION_CANVAS = {
  center: { x: 720, y: 430 },
  height: 920,
  width: 1440,
} as const;

const MAIN_POSITIONS = {
  ai: { x: 1142, y: 334 },
  commerce: { x: 256, y: 400 },
  erp: { x: 1046, y: 700 },
  finance: { x: 720, y: 792 },
  logistics: { x: 382, y: 700 },
  marketing: { x: 388, y: 194 },
  operations: { x: 1052, y: 194 },
  reporting: { x: 1140, y: 560 },
  sales: { x: 720, y: 112 },
} as const satisfies Record<string, IntegrationPoint>;

const SUBNODE_OFFSETS = {
  ai: [
    { x: 182, y: -66 },
    { x: 224, y: -14 },
    { x: 232, y: 38 },
    { x: 210, y: 94 },
    { x: 166, y: 146 },
  ],
  commerce: [
    { x: -178, y: -94 },
    { x: -224, y: -42 },
    { x: -234, y: 10 },
    { x: -216, y: 66 },
    { x: -176, y: 122 },
  ],
  erp: [
    { x: 176, y: -96 },
    { x: 222, y: -44 },
    { x: 234, y: 8 },
    { x: 218, y: 64 },
    { x: 176, y: 118 },
  ],
  finance: [
    { x: -184, y: 84 },
    { x: -92, y: 118 },
    { x: 0, y: 134 },
    { x: 92, y: 118 },
    { x: 184, y: 84 },
  ],
  logistics: [
    { x: -176, y: -96 },
    { x: -220, y: -44 },
    { x: -232, y: 8 },
    { x: -214, y: 64 },
    { x: -172, y: 118 },
  ],
  marketing: [
    { x: -176, y: -82 },
    { x: -222, y: -28 },
    { x: -234, y: 24 },
    { x: -220, y: 78 },
    { x: -176, y: 132 },
    { x: -112, y: 176 },
  ],
  operations: [
    { x: 176, y: -82 },
    { x: 222, y: -28 },
    { x: 234, y: 24 },
    { x: 220, y: 78 },
    { x: 176, y: 132 },
  ],
  reporting: [
    { x: 174, y: -84 },
    { x: 222, y: -30 },
    { x: 234, y: 22 },
    { x: 220, y: 76 },
    { x: 176, y: 130 },
  ],
  sales: [
    { x: -180, y: -82 },
    { x: -108, y: -118 },
    { x: -24, y: -138 },
    { x: 60, y: -136 },
    { x: 138, y: -116 },
    { x: 210, y: -78 },
  ],
} as const satisfies Record<string, IntegrationPoint[]>;

export function getMainNodePosition(nodeId: string): IntegrationPoint {
  return MAIN_POSITIONS[nodeId as keyof typeof MAIN_POSITIONS];
}

export function getSubnodePosition(nodeId: string, index: number): IntegrationPoint {
  const mainPosition = getMainNodePosition(nodeId);
  const offset = SUBNODE_OFFSETS[nodeId as keyof typeof SUBNODE_OFFSETS][index];

  if (!offset) {
    throw new Error(`Unknown integration subnode offset: ${nodeId}:${String(index)}`);
  }

  return {
    x: mainPosition.x + offset.x,
    y: mainPosition.y + offset.y,
  };
}

export function buildCurvedPath(from: IntegrationPoint, to: IntegrationPoint, bend = 0.14) {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const length = Math.hypot(deltaX, deltaY) || 1;
  const normalX = -deltaY / length;
  const normalY = deltaX / length;
  const midpointX = from.x + deltaX / 2;
  const midpointY = from.y + deltaY / 2;
  const curveStrength = Math.min(94, length * bend);

  return [
    "M",
    String(from.x),
    String(from.y),
    "Q",
    String(midpointX + normalX * curveStrength),
    String(midpointY + normalY * curveStrength),
    String(to.x),
    String(to.y),
  ].join(" ");
}
