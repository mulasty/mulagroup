import type { PortalManifest } from "@mulagroup/content-models";

import { HeadingBlock, ProcessTimeline, Section } from "../../components";

type PortalOperatingModelSectionProps = {
  portal: PortalManifest;
};

export function PortalOperatingModelSection({ portal }: PortalOperatingModelSectionProps) {
  return (
    <Section tone="light">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 px-5 py-8 shadow-[0_36px_120px_-72px_rgba(15,23,42,0.32)] backdrop-blur sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="muted-grid h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-8 h-40 w-40 rounded-full bg-[color:var(--brand-accent)]/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative space-y-12">
          <HeadingBlock
            description={portal.operatingModelIntro.description}
            eyebrow={portal.operatingModelIntro.eyebrow}
            title={portal.operatingModelIntro.title}
            tone="light"
          />
          <ProcessTimeline steps={portal.operatingModel} tone="light" />
        </div>
      </div>
    </Section>
  );
}
