import type { PillarManifest } from "@mulagroup/content-models";

import {
  Button,
  Card,
  HeadingBlock,
  Input,
  Label,
  Section,
  Textarea
} from "../components";

export function PillarHomePage({ site }: { site: PillarManifest }) {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24" id="overview">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-[color:var(--brand-accent)] bg-[color:var(--brand-accent-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
              {site.hero.eyebrow}
            </span>
            <div className="space-y-5">
              <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {site.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{site.hero.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={site.hero.primaryCta.href} size="lg">
                {site.hero.primaryCta.label}
              </Button>
              {site.hero.secondaryCta ? (
                <Button href={site.hero.secondaryCta.href} size="lg" variant="secondary">
                  {site.hero.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <Card className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Core focus</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{site.tagline}</h2>
              <p className="text-sm leading-7 text-slate-300">{site.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {site.services.flatMap((service) => service.tags).slice(0, 6).map((tag) => (
                <span className="rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-slate-200" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section id="services" tone="panel">
        <HeadingBlock
          description="Each pillar stays focused, but it remains designed to plug into the wider Mula Group system when the brief requires more than one capability."
          eyebrow="Capability areas"
          title={`What ${site.name} activates`}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {site.services.map((service) => (
            <Card className="flex h-full flex-col gap-5" key={service.title}>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{service.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span className="rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-slate-200" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="process" tone="light">
        <HeadingBlock
          description="A calm, structured process that starts with understanding and ends with a clearer execution route."
          eyebrow="Operating sequence"
          title="How this pillar works inside the ecosystem"
          tone="light"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {site.process.map((step) => (
            <Card className="flex h-full flex-col gap-4" key={step.step} variant="light">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">{step.step}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="connections">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <HeadingBlock
            description="The pillar is intentionally strong on its own, but it is designed to cross-link into the ecosystem when the opportunity becomes multi-layered."
            eyebrow="Cross-pillar leverage"
            title="Built to connect with the rest of the system"
          />
          <div className="grid gap-6">
            {site.integrations.map((integration) => (
              <Card className="flex h-full flex-col gap-4" key={integration.title}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {integration.pillar}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{integration.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{integration.description}</p>
                <Button className="self-start" href={integration.href} variant="secondary">
                  Open related pillar
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" tone="panel">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <HeadingBlock
            description={site.inquiry.description}
            eyebrow="Inquiry architecture"
            title={site.inquiry.title}
          />
          <Card>
            <form className="space-y-5">
              <div>
                <Label htmlFor={`${site.key}-name`}>{site.inquiry.fields.nameLabel}</Label>
                <Input id={`${site.key}-name`} placeholder={site.inquiry.fields.namePlaceholder} />
              </div>
              <div>
                <Label htmlFor={`${site.key}-email`}>{site.inquiry.fields.emailLabel}</Label>
                <Input id={`${site.key}-email`} placeholder={site.inquiry.fields.emailPlaceholder} type="email" />
              </div>
              <div>
                <Label htmlFor={`${site.key}-message`}>{site.inquiry.fields.messageLabel}</Label>
                <Textarea id={`${site.key}-message`} placeholder={site.inquiry.fields.messagePlaceholder} />
              </div>
              <Button disabled type="button">
                {site.inquiry.buttonLabel}
              </Button>
              <p className="text-sm leading-7 text-slate-400">{site.inquiry.note}</p>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
