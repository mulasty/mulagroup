import type { PortalManifest } from "@mulagroup/content-models";

import { Card, Checklist, HeadingBlock, Section } from "../../components";

type PortalPartnershipsSectionProps = {
  portal: PortalManifest;
};

export function PortalPartnershipsSection({ portal }: PortalPartnershipsSectionProps) {
  return (
    <Section id="partnerships">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="space-y-8">
          <HeadingBlock
            description={portal.partnerships.lead.description}
            eyebrow={portal.partnerships.lead.eyebrow}
            title={portal.partnerships.lead.title}
          />
          <Card className="space-y-5" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              How collaboration starts
            </p>
            <Checklist items={portal.partnerships.principles} />
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portal.partnerships.models.map((model) => (
            <Card
              className="flex h-full flex-col gap-5 transition-transform duration-200 hover:-translate-y-1"
              key={model.title}
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{model.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{model.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {model.tags.map((tag) => (
                  <span className="rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-slate-200" key={tag}>
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
