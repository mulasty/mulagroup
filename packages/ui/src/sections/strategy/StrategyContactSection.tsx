import type { StrategyManifest } from "@mulagroup/content-models";

import {
  Button,
  Card,
  Checklist,
  HeadingBlock,
  InquiryFormPanel,
  Section,
} from "../../components";

type StrategyContactSectionProps = {
  signalsLabel: string;
  site: StrategyManifest;
};

export function StrategyContactSection({ signalsLabel, site }: StrategyContactSectionProps) {
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
            <Button data-cta="strategy-contact-primary" href={site.finalCta.primaryCta.href}>
              {site.finalCta.primaryCta.label}
            </Button>
            {site.finalCta.secondaryCta ? (
              <Button
                data-cta="strategy-contact-secondary"
                href={site.finalCta.secondaryCta.href}
                variant="secondary"
              >
                {site.finalCta.secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <Card className="space-y-5" variant="subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              {signalsLabel}
            </p>
            <Checklist items={site.finalCta.signals} />
          </Card>
        </div>
        <InquiryFormPanel
          formIdPrefix="strategy"
          hostLabel={new URL(site.url).host}
          inquiry={site.inquiry}
        />
      </div>
    </Section>
  );
}
