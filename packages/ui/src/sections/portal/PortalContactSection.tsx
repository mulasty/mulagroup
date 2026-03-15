import type { PortalManifest } from "@mulagroup/content-models";

import {
  Button,
  Card,
  Checklist,
  HeadingBlock,
  InquiryPreviewPanel,
  Section,
} from "../../components";

type PortalContactSectionProps = {
  portal: PortalManifest;
};

export function PortalContactSection({ portal }: PortalContactSectionProps) {
  return (
    <Section id="contact" tone="panel">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
        <div className="space-y-8">
          <HeadingBlock
            description={portal.finalCta.description}
            eyebrow={portal.finalCta.eyebrow}
            title={portal.finalCta.title}
          />
          <div className="flex flex-wrap gap-3">
            <Button data-cta="portal-contact-primary" href={portal.finalCta.primaryCta.href}>
              {portal.finalCta.primaryCta.label}
            </Button>
          </div>
          <Card className="space-y-5" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Typical starting points
            </p>
            <Checklist items={portal.finalCta.signals} />
          </Card>
        </div>
        <InquiryPreviewPanel
          formIdPrefix="portal"
          hostLabel="mulagroup.eu"
          inquiry={portal.partnershipPrompt}
        />
      </div>
    </Section>
  );
}
