import { Badge, Card, Container, HeadingBlock, Section } from '@mulagroup/ui';

export default function PillarHomePage() {
  return (
    <Section>
      <Container>
        <Badge>Phase 1 Shell</Badge>
        <HeadingBlock
          eyebrow="Pillar"
          title="Mula Group Digital"
          description="Digital pillar application shell."
        />
        <Card>
          <p className="mg-muted">
            This is a technical placeholder shell only. Final page architecture and content are scheduled for later phases.
          </p>
        </Card>
      </Container>
    </Section>
  );
}
