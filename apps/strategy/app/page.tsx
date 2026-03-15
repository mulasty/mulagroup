import { StrategyHomePage } from "@mulagroup/ui/pages";
import { getStrategyManifest } from "@mulagroup/utils";

const site = getStrategyManifest();

export default function Page() {
  return <StrategyHomePage site={site} />;
}
