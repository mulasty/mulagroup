import type { IntegrationPoint } from "./types";
import { IntegrationNodeBase } from "./IntegrationNodeBase";

type IntegrationMainNodeProps = {
  animateSequence: boolean;
  delay: number;
  emphasis?: boolean;
  label: string;
  position: IntegrationPoint;
  revealed: boolean;
  secondaryLabel?: string;
};

export function IntegrationMainNode(props: IntegrationMainNodeProps) {
  return <IntegrationNodeBase variant="main" {...props} />;
}
