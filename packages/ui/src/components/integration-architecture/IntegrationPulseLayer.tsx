"use client";

import type { IntegrationPoint } from "./types";

type IntegrationPulseLayerProps = {
  animateSequence: boolean;
  branchPoints: IntegrationPoint[];
  center: IntegrationPoint;
  revealed: boolean;
};

// Legacy placeholder kept to preserve the public component surface for this
// feature area while the new tree-based canvas owns its own pulse logic.
export function IntegrationPulseLayer(_: IntegrationPulseLayerProps) {
  return null;
}
