import {
  Badge,
  Button,
  Card,
  Container,
  HeadingBlock,
  Input,
  Section,
  Textarea
} from '@mulagroup/ui';

export default function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <div className="stack">
            <Badge>Phase 1 Foundation</Badge>
            <HeadingBlock
              eyebrow="Mula Group"
              title="Corporate-tech ecosystem foundation"
              description="Core shell, shared tokens and reusable UI primitives are in place for phased development."
            />
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button>Explore Ecosystem</Button>
              <Button variant="ghost">View Pillars</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-3">
            <Card>
              <h3>Strategy</h3>
              <p className="mg-muted">Blueprint-ready architecture for strategic services and growth mapping.</p>
            </Card>
            <Card>
              <h3>Digital</h3>
              <p className="mg-muted">Technical base for digital products, automation and AI-assisted execution.</p>
            </Card>
            <Card>
              <h3>Operations</h3>
              <p className="mg-muted">Modular packages prepared for future CMS, CRM and analytics integrations.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <HeadingBlock
            eyebrow="Placeholder"
            title="Foundation contact block"
            description="UI primitives are ready for Phase 2 content implementation."
          />
          <div className="stack" style={{ maxWidth: 680, marginTop: '1rem' }}>
            <Input placeholder="Name" aria-label="Name" />
            <Input placeholder="Business email" aria-label="Business email" />
            <Textarea placeholder="Project context" aria-label="Project context" />
            <Button>Send (placeholder)</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
