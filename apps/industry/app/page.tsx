import { IndustryHomePage } from "@mulagroup/ui/pages";
import { getIndustryManifest } from "@mulagroup/utils";

const site = getIndustryManifest();

export default function Page() {
  return <IndustryHomePage site={site} />;
}
