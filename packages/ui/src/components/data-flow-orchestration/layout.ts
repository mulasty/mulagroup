import { DATA_FLOW_CANVAS, type DataFlowBranchConfig } from "./data";

export type DataFlowPoint = {
  x: number;
  y: number;
};

export type DataFlowSubnodePlacement = {
  angle: number;
  labelAlign: "center" | "end" | "start";
  labelDx: number;
  labelDy: number;
  point: DataFlowPoint;
  subnode: DataFlowBranchConfig["subnodes"][number];
};

export type DataFlowBranchGeometry = {
  branch: DataFlowBranchConfig;
  mainPoint: DataFlowPoint;
  subnodes: DataFlowSubnodePlacement[];
};

export type DataFlowLayoutOptions = {
  maxSubnodesPerBranch?: number;
  mainRadiusScale?: number;
  outerRadiusScale?: number;
};

export type DataFlowLayout = {
  branches: DataFlowBranchGeometry[];
  center: DataFlowPoint;
};

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function normalizeDegrees(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

function expandSector(start: number, end: number) {
  const normalizedStart = normalizeDegrees(start);
  const normalizedEnd = normalizeDegrees(end);

  if (normalizedEnd <= normalizedStart) {
    return { end: normalizedEnd + 360, start: normalizedStart };
  }

  return { end: normalizedEnd, start: normalizedStart };
}

function angleAtProgress(start: number, end: number, progress: number) {
  const sector = expandSector(start, end);

  return normalizeDegrees(sector.start + (sector.end - sector.start) * progress);
}

function polarPoint(angle: number, radius: number): DataFlowPoint {
  const radians = degreesToRadians(angle);

  return {
    x: DATA_FLOW_CANVAS.center.x + Math.cos(radians) * radius,
    y: DATA_FLOW_CANVAS.center.y + Math.sin(radians) * radius,
  };
}

function getTextOffset(angle: number) {
  const radians = degreesToRadians(angle);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  if (Math.abs(cos) <= 0.18) {
    return {
      align: "center" as const,
      dx: 0,
      dy: sin > 0 ? 18 : -12,
    };
  }

  return {
    align: cos >= 0 ? ("start" as const) : ("end" as const),
    dx: cos >= 0 ? 14 : -14,
    dy: sin > 0.72 ? 11 : sin < -0.72 ? -7 : 4,
  };
}

function distributeAngles(start: number, end: number, count: number, offsetFactor = 0) {
  if (count <= 1) {
    return [angleAtProgress(start, end, 0.5)];
  }

  const step = 1 / count;

  return Array.from({ length: count }, (_, index) => {
    const progress = step * (index + 0.5 + offsetFactor);

    return angleAtProgress(start, end, Math.min(Math.max(progress, 0.08), 0.92));
  });
}

function getVisibleSubnodes(branch: DataFlowBranchConfig, maxSubnodesPerBranch?: number) {
  if (!maxSubnodesPerBranch || maxSubnodesPerBranch >= branch.subnodes.length) {
    return branch.subnodes;
  }

  return branch.subnodes.slice(0, maxSubnodesPerBranch);
}

function buildSubnodePlacements(
  branch: DataFlowBranchConfig,
  options: DataFlowLayoutOptions,
): DataFlowSubnodePlacement[] {
  const visibleSubnodes = getVisibleSubnodes(branch, options.maxSubnodesPerBranch);
  const innerCount = Math.ceil(visibleSubnodes.length / 2);
  const outerCount = visibleSubnodes.length - innerCount;
  const innerAngles = distributeAngles(branch.sectorStart, branch.sectorEnd, innerCount, 0.1);
  const outerAngles = distributeAngles(branch.sectorStart, branch.sectorEnd, Math.max(outerCount, 1), -0.1);
  const innerRadius = branch.subRadiusInner * (options.outerRadiusScale ?? 1);
  const outerRadius = branch.subRadiusOuter * (options.outerRadiusScale ?? 1);

  return visibleSubnodes.map((subnode, index) => {
    const useOuter = index >= innerCount;
    const angle = useOuter
      ? (outerAngles[index - innerCount] ?? branch.mainAngle)
      : (innerAngles[index] ?? branch.mainAngle);
    const point = polarPoint(angle, useOuter ? outerRadius : innerRadius);
    const textOffset = getTextOffset(angle);

    return {
      angle,
      labelAlign: textOffset.align,
      labelDx: textOffset.dx,
      labelDy: textOffset.dy,
      point,
      subnode,
    };
  });
}

export function buildDataFlowLayout(
  branches: DataFlowBranchConfig[],
  options: DataFlowLayoutOptions = {},
): DataFlowLayout {
  return {
    branches: branches.map((branch) => ({
      branch,
      mainPoint: polarPoint(branch.mainAngle, branch.mainRadius * (options.mainRadiusScale ?? 1)),
      subnodes: buildSubnodePlacements(branch, options),
    })),
    center: DATA_FLOW_CANVAS.center,
  };
}

export function buildBranchPath(from: DataFlowPoint, to: DataFlowPoint) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  return [
    "M",
    from.x.toFixed(1),
    from.y.toFixed(1),
    "C",
    (from.x + dx * 0.34).toFixed(1),
    (from.y + dy * 0.18).toFixed(1),
    (from.x + dx * 0.72).toFixed(1),
    (from.y + dy * 0.84).toFixed(1),
    to.x.toFixed(1),
    to.y.toFixed(1),
  ].join(" ");
}

export function buildCrossLinkPath(from: DataFlowPoint, to: DataFlowPoint) {
  const midpoint = {
    x: (from.x + to.x) / 2,
    y: (from.y + to.y) / 2,
  };
  const pullX = DATA_FLOW_CANVAS.center.x + (midpoint.x - DATA_FLOW_CANVAS.center.x) * 0.64;
  const pullY = DATA_FLOW_CANVAS.center.y + (midpoint.y - DATA_FLOW_CANVAS.center.y) * 0.64;

  return [
    "M",
    from.x.toFixed(1),
    from.y.toFixed(1),
    "C",
    ((from.x + pullX) / 2).toFixed(1),
    ((from.y + pullY) / 2).toFixed(1),
    ((to.x + pullX) / 2).toFixed(1),
    ((to.y + pullY) / 2).toFixed(1),
    to.x.toFixed(1),
    to.y.toFixed(1),
  ].join(" ");
}

export function buildSectorArcPath(startAngle: number, endAngle: number, radius: number) {
  const start = polarPoint(startAngle, radius);
  const end = polarPoint(endAngle, radius);
  const sector = expandSector(startAngle, endAngle);
  const largeArcFlag = sector.end - sector.start > 180 ? 1 : 0;

  return [
    "M",
    start.x.toFixed(1),
    start.y.toFixed(1),
    "A",
    radius.toFixed(1),
    radius.toFixed(1),
    "0",
    String(largeArcFlag),
    "1",
    end.x.toFixed(1),
    end.y.toFixed(1),
  ].join(" ");
}
