import type { RichPillarManifest } from "@mulagroup/content-models";

import {
  Button,
  Card,
  Checklist,
  HeadingBlock,
  InquiryPreviewPanel,
  Section,
} from "../../components";

type PillarContactSectionProps = {
  contactContext: string;
  hostLabel: string;
  site: RichPillarManifest;
  startSignalsLabel: string;
};

export function PillarContactSection({
  contactContext,
  hostLabel,
  site,
  startSignalsLabel,
}: PillarContactSectionProps) {
  return (
    <Section id="contact" tone="panel">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
        <div className="space-y-8">
          <HeadingBlock
            description={site.finalCta.description}
            eyebrow={site.finalCta.eyebrow}
            title={site.finalCta.title}
          />
          <div className="flex flex-wrap gap-3">
            <Button data-cta={`${contactContext}-primary`} href={site.finalCta.primaryCta.href}>
              {site.finalCta.primaryCta.label}
            </Button>
            {site.finalCta.secondaryCta ? (
              <Button
                data-cta={`${contactContext}-secondary`}
                href={site.finalCta.secondaryCta.href}
                variant="secondary"
              >
                {site.finalCta.secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <Card className="space-y-5" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {startSignalsLabel}
            </p>
            <Checklist items={site.finalCta.signals} />
          </Card>
        </div>

        <InquiryPreviewPanel formIdPrefix={site.key} hostLabel={hostLabel} inquiry={site.inquiry} />
      </div>
    </Section>
  );
}
