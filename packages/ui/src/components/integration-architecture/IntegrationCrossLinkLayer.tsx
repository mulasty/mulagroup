import type { IntegrationRenderablePath } from "./types";
import { IntegrationLineLayer } from "./IntegrationLineLayer";

type IntegrationCrossLinkLayerProps = {
  animateSequence: boolean;
  paths: IntegrationRenderablePath[];
  revealed: boolean;
};

export function IntegrationCrossLinkLayer(props: IntegrationCrossLinkLayerProps) {
  return <IntegrationLineLayer {...props} />;
}
