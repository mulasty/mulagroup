import type { PortalManifest } from "@mulagroup/content-models";

import { Card, HeadingBlock, Section } from "../../components";

type PortalCapabilitiesSectionProps = {
  portal: PortalManifest;
};

export function PortalCapabilitiesSection({ portal }: PortalCapabilitiesSectionProps) {
  return (
    <Section id="capabilities" tone="light">
      <div className="space-y-12">
        <HeadingBlock
          description={portal.capabilitiesIntro.description}
          eyebrow={portal.capabilitiesIntro.eyebrow}
          title={portal.capabilitiesIntro.title}
          tone="light"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {portal.capabilityClusters.map((cluster) => (
            <Card
              className="flex h-full flex-col gap-5 transition-transform duration-200 hover:-translate-y-1"
              key={cluster.title}
              variant="light"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{cluster.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{cluster.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {cluster.tags.map((tag) => (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
