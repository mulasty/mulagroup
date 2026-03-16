import type { IntegrationPoint } from "./types";

export const INTEGRATION_CANVAS = {
  center: { x: 660, y: 360 },
  height: 760,
  width: 1320,
} as const;

const MAIN_POSITIONS = {
  ai: { x: 1044, y: 298 },
  commerce: { x: 258, y: 372 },
  erp: { x: 946, y: 556 },
  finance: { x: 660, y: 612 },
  logistics: { x: 374, y: 556 },
  marketing: { x: 366, y: 220 },
  operations: { x: 954, y: 220 },
  reporting: { x: 1036, y: 504 },
  sales: { x: 660, y: 154 },
} as const satisfies Record<string, IntegrationPoint>;

const SUBNODE_OFFSETS = {
  ai: [
    { x: 136, y: -56 },
    { x: 166, y: -14 },
    { x: 170, y: 28 },
    { x: 156, y: 72 },
    { x: 128, y: 112 },
  ],
  commerce: [
    { x: -144, y: -72 },
    { x: -178, y: -28 },
    { x: -184, y: 18 },
    { x: -170, y: 66 },
    { x: -136, y: 114 },
  ],
  erp: [
    { x: 142, y: -74 },
    { x: 176, y: -30 },
    { x: 182, y: 14 },
    { x: 168, y: 60 },
    { x: 136, y: 106 },
  ],
  finance: [
    { x: -144, y: 56 },
    { x: -74, y: 84 },
    { x: 0, y: 94 },
    { x: 74, y: 84 },
    { x: 144, y: 56 },
  ],
  logistics: [
    { x: -142, y: -74 },
    { x: -176, y: -30 },
    { x: -182, y: 14 },
    { x: -168, y: 60 },
    { x: -136, y: 106 },
  ],
  marketing: [
    { x: -134, y: -74 },
    { x: -166, y: -26 },
    { x: -170, y: 22 },
    { x: -156, y: 72 },
    { x: -126, y: 122 },
    { x: -84, y: 166 },
  ],
  operations: [
    { x: 134, y: -74 },
    { x: 166, y: -26 },
    { x: 170, y: 22 },
    { x: 156, y: 72 },
    { x: 126, y: 122 },
  ],
  reporting: [
    { x: 136, y: -60 },
    { x: 170, y: -18 },
    { x: 176, y: 24 },
    { x: 162, y: 70 },
    { x: 132, y: 116 },
  ],
  sales: [
    { x: -158, y: -66 },
    { x: -96, y: -100 },
    { x: -22, y: -116 },
    { x: 54, y: -116 },
    { x: 126, y: -100 },
    { x: 184, y: -64 },
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
