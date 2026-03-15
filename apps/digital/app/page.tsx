import { DigitalHomePage } from "@mulagroup/ui/pages";
import { getDigitalManifest } from "@mulagroup/utils";

const site = getDigitalManifest();

export default function Page() {
  return <DigitalHomePage site={site} />;
}
