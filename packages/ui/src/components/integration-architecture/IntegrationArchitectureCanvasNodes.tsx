import { INTEGRATION_SCENE_DELAYS } from "./data";
import { getMainNodePosition, INTEGRATION_CANVAS } from "./layout";
import { IntegrationCoreNode } from "./IntegrationCoreNode";
import { IntegrationMainNode } from "./IntegrationMainNode";
import { IntegrationSubNode } from "./IntegrationSubNode";
import type { IntegrationArchitectureModel, IntegrationPoint } from "./types";

type IntegrationArchitectureCanvasNodesProps = {
  animateSequence: boolean;
  architecture: IntegrationArchitectureModel;
  revealed: boolean;
  subNodes: {
    delay: number;
    id: string;
    label: string;
    position: IntegrationPoint;
  }[];
};

export function IntegrationArchitectureCanvasNodes({
  animateSequence,
  architecture,
  revealed,
  subNodes,
}: IntegrationArchitectureCanvasNodesProps) {
  return (
    <>
      <IntegrationCoreNode
        animateSequence={animateSequence}
        delay={INTEGRATION_SCENE_DELAYS.core}
        label={architecture.core.label}
        position={INTEGRATION_CANVAS.center}
        revealed={revealed}
      />

      {architecture.primaryNodes.map((node) => (
        <IntegrationMainNode
          animateSequence={animateSequence}
          delay={INTEGRATION_SCENE_DELAYS[node.scene]}
          emphasis={node.id === "sales" || node.id === "ai" || node.id === "reporting"}
          key={node.id}
          label={node.label}
          position={getMainNodePosition(node.id)}
          revealed={revealed}
        />
      ))}

      {subNodes.map((node) => (
        <IntegrationSubNode
          animateSequence={animateSequence}
          delay={node.delay}
          emphasis={node.id === "crmPipeline" || node.id === "orders" || node.id === "aiSummaries"}
          key={node.id}
          label={node.label}
          position={node.position}
          revealed={revealed}
        />
      ))}
    </>
  );
}
