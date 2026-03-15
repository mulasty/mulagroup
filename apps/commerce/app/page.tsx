import { CommerceHomePage } from "@mulagroup/ui/pages";
import { getCommerceManifest } from "@mulagroup/utils";

const site = getCommerceManifest();

export default function Page() {
  return <CommerceHomePage site={site} />;
}
