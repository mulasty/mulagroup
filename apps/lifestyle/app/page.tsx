import { LifestyleHomePage } from "@mulagroup/ui/pages";
import { getLifestyleManifest } from "@mulagroup/utils";

const site = getLifestyleManifest();

export default function Page() {
  return <LifestyleHomePage site={site} />;
}
