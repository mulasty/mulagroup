import type { IntegrationPoint } from "./types";
import { IntegrationNodeBase } from "./IntegrationNodeBase";

type IntegrationSubNodeProps = {
  animateSequence: boolean;
  delay: number;
  emphasis?: boolean;
  label: string;
  position: IntegrationPoint;
  revealed: boolean;
  secondaryLabel?: string;
};

export function IntegrationSubNode(props: IntegrationSubNodeProps) {
  return <IntegrationNodeBase variant="sub" {...props} />;
}
