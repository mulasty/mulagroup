import { ProjectsHomePage } from "@mulagroup/ui/pages";
import { getProjectsManifest } from "@mulagroup/utils";

const site = getProjectsManifest();

export default function Page() {
  return <ProjectsHomePage site={site} />;
}
