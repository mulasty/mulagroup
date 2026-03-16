import type { IntegrationPoint } from "./types";
import { IntegrationNodeBase } from "./IntegrationNodeBase";

type IntegrationCoreNodeProps = {
  animateSequence: boolean;
  delay: number;
  label: string;
  position: IntegrationPoint;
  revealed: boolean;
};

export function IntegrationCoreNode(props: IntegrationCoreNodeProps) {
  return <IntegrationNodeBase emphasis variant="core" {...props} />;
}
