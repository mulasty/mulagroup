import type { IntegrationPoint } from "./types";

type BranchLayoutId =
  | "ai"
  | "commerce"
  | "erp"
  | "finance"
  | "logistics"
  | "marketing"
  | "operations"
  | "reporting"
  | "sales";

type BranchSectorConfig = {
  maxRingCount: number;
  maxSubRadius: number;
  ringGap: number;
  sectorEnd: number;
  sectorStart: number;
  subBaseRadius: number;
};

export type IntegrationBranchGeometry = {
  mainAngle: number;
  mainPosition: IntegrationPoint;
  subnodePositions: IntegrationPoint[];
};

export const INTEGRATION_CANVAS = {
  center: { x: 700, y: 390 },
  height: 820,
  width: 1400,
} as const;

const ESTIMATED_SUBNODE_WIDTH = 96;
const SUBNODE_CLUSTER_GAP = 8;
const MIN_SUBNODE_ARC_SPACING = ESTIMATED_SUBNODE_WIDTH + SUBNODE_CLUSTER_GAP;
const DEFAULT_SECTOR_PADDING_DEGREES = 4;
const MAIN_NODE_RADIUS = 248;

const BRANCH_LAYOUT: Record<BranchLayoutId, BranchSectorConfig> = {
  ai: {
    maxRingCount: 3,
    maxSubRadius: 448,
    ringGap: 34,
    sectorEnd: 8,
    sectorStart: 330,
    subBaseRadius: 378,
  },
  commerce: {
    maxRingCount: 3,
    maxSubRadius: 430,
    ringGap: 34,
    sectorEnd: 190,
    sectorStart: 154,
    subBaseRadius: 360,
  },
  erp: {
    maxRingCount: 3,
    maxSubRadius: 430,
    ringGap: 34,
    sectorEnd: 84,
    sectorStart: 48,
    subBaseRadius: 360,
  },
  finance: {
    maxRingCount: 3,
    maxSubRadius: 388,
    ringGap: 34,
    sectorEnd: 118,
    sectorStart: 80,
    subBaseRadius: 318,
  },
  logistics: {
    maxRingCount: 3,
    maxSubRadius: 430,
    ringGap: 34,
    sectorEnd: 154,
    sectorStart: 118,
    subBaseRadius: 360,
  },
  marketing: {
    maxRingCount: 3,
    maxSubRadius: 432,
    ringGap: 34,
    sectorEnd: 238,
    sectorStart: 190,
    subBaseRadius: 360,
  },
  operations: {
    maxRingCount: 3,
    maxSubRadius: 426,
    ringGap: 34,
    sectorEnd: 330,
    sectorStart: 296,
    subBaseRadius: 358,
  },
  reporting: {
    maxRingCount: 3,
    maxSubRadius: 458,
    ringGap: 34,
    sectorEnd: 48,
    sectorStart: 8,
    subBaseRadius: 388,
  },
  sales: {
    maxRingCount: 3,
    maxSubRadius: 404,
    ringGap: 34,
    sectorEnd: 296,
    sectorStart: 238,
    subBaseRadius: 332,
  },
};

function isBranchLayoutId(nodeId: string): nodeId is BranchLayoutId {
  return nodeId in BRANCH_LAYOUT;
}

function degreesToRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function normalizeAngle(angle: number) {
  let normalized = angle % 360;

  if (normalized < 0) {
    normalized += 360;
  }

  return normalized;
}

function getSectorSpan(start: number, end: number) {
  const normalizedStart = normalizeAngle(start);
  const normalizedEnd = normalizeAngle(end);
  const delta = normalizedEnd - normalizedStart;

  return delta <= 0 ? delta + 360 : delta;
}

function interpolateAngle(start: number, end: number, progress: number) {
  const span = getSectorSpan(start, end);

  return normalizeAngle(start + span * progress);
}

function polarPoint(radius: number, angle: number): IntegrationPoint {
  const radians = degreesToRadians(angle);

  return {
    x: INTEGRATION_CANVAS.center.x + Math.cos(radians) * radius,
    y: INTEGRATION_CANVAS.center.y + Math.sin(radians) * radius,
  };
}

function getSectorPadding(start: number, end: number) {
  return Math.min(DEFAULT_SECTOR_PADDING_DEGREES, getSectorSpan(start, end) / 6);
}

function getSectorMidpoint(start: number, end: number) {
  return interpolateAngle(start, end, 0.5);
}

function getRingCapacity(radius: number, effectiveSpan: number) {
  const arcLength = radius * degreesToRadians(effectiveSpan);

  return Math.max(1, Math.floor(arcLength / MIN_SUBNODE_ARC_SPACING) + 1);
}

function getBranchLayout(nodeId: string) {
  if (!isBranchLayoutId(nodeId)) {
    throw new Error(`Unknown integration branch layout: ${nodeId}`);
  }

  return BRANCH_LAYOUT[nodeId];
}

function buildSubnodePositions(branchId: BranchLayoutId, count: number) {
  const layout = BRANCH_LAYOUT[branchId];
  const padding = getSectorPadding(layout.sectorStart, layout.sectorEnd);
  const paddedStart = normalizeAngle(layout.sectorStart + padding);
  const paddedEnd = normalizeAngle(layout.sectorEnd - padding);
  const effectiveSpan = Math.max(10, getSectorSpan(paddedStart, paddedEnd));
  const ringRadii = Array.from({ length: layout.maxRingCount }, (_, ringIndex) => {
    const radius = Math.min(layout.subBaseRadius + ringIndex * layout.ringGap, layout.maxSubRadius);

    return {
      capacity: getRingCapacity(radius, effectiveSpan),
      radius,
    };
  });

  let requiredRings = 0;
  let capacityTotal = 0;

  while (requiredRings < ringRadii.length && capacityTotal < count) {
    capacityTotal += ringRadii[requiredRings]?.capacity ?? 0;
    requiredRings += 1;
  }

  const resolvedRings = Math.max(1, requiredRings);
  const activeRings = ringRadii.slice(0, resolvedRings);
  const ringCounts = activeRings.map(() => 1);
  let remaining = count - resolvedRings;

  while (remaining > 0) {
    let assigned = false;

    for (let ringIndex = activeRings.length - 1; ringIndex >= 0 && remaining > 0; ringIndex -= 1) {
      const ringCapacity = activeRings[ringIndex]?.capacity ?? 0;
      const currentCount = ringCounts[ringIndex] ?? 0;

      if (currentCount >= ringCapacity) {
        continue;
      }

      ringCounts[ringIndex] = currentCount + 1;
      remaining -= 1;
      assigned = true;
    }

    if (!assigned) {
      break;
    }
  }

  return activeRings.flatMap((ring, ringIndex) => {
    const nodeCount = ringCounts[ringIndex] ?? 0;

    return Array.from({ length: nodeCount }, (_, nodeIndex) => {
      if (nodeCount === 1) {
        return polarPoint(ring.radius, getSectorMidpoint(paddedStart, paddedEnd));
      }

      const progress =
        ringIndex % 2 === 0
          ? nodeIndex / (nodeCount - 1)
          : (nodeIndex + 1) / (nodeCount + 1);
      const angle = interpolateAngle(paddedStart, paddedEnd, progress);

      return polarPoint(ring.radius, angle);
    });
  });
}

export function getMainNodePosition(nodeId: string): IntegrationPoint {
  const layout = getBranchLayout(nodeId);

  return polarPoint(MAIN_NODE_RADIUS, getSectorMidpoint(layout.sectorStart, layout.sectorEnd));
}

export function getBranchGeometry(nodeId: string, subnodeCount: number): IntegrationBranchGeometry {
  const layout = getBranchLayout(nodeId);
  const mainAngle = getSectorMidpoint(layout.sectorStart, layout.sectorEnd);

  return {
    mainAngle,
    mainPosition: polarPoint(MAIN_NODE_RADIUS, mainAngle),
    subnodePositions: buildSubnodePositions(nodeId as BranchLayoutId, subnodeCount),
  };
}

export function getSubnodePosition(nodeId: string, index: number, subnodeCount: number): IntegrationPoint {
  const subnodePositions = buildSubnodePositions(nodeId as BranchLayoutId, subnodeCount);
  const position = subnodePositions[index];

  if (!position) {
    throw new Error(`Unknown integration subnode position: ${nodeId}:${String(index)}`);
  }

  return position;
}

export function buildCurvedPath(from: IntegrationPoint, to: IntegrationPoint, bend = 0.14) {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const length = Math.hypot(deltaX, deltaY) || 1;
  const normalX = -deltaY / length;
  const normalY = deltaX / length;
  const midpointX = from.x + deltaX / 2;
  const midpointY = from.y + deltaY / 2;
  const curveStrength = Math.min(84, length * bend);

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
