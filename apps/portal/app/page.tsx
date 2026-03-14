import { Badge, Button, Card, Container, HeadingBlock, Section } from '@mulagroup/ui';

const pillars = [
  {
    name: 'Strategy',
    description: 'Business architecture, growth direction and strategic clarity for complex initiatives.',
    hint: 'Direction & structure'
  },
  {
    name: 'Digital',
    description: 'Digital systems, automation and modern execution infrastructure for scalable growth.',
    hint: 'Systems & experience'
  },
  {
    name: 'Commerce',
    description: 'Sales-channel design, market pathways and commercial engine development.',
    hint: 'Revenue pathways'
  },
  {
    name: 'Industry',
    description: 'Operational and technical capability for delivery grounded in real-world execution.',
    hint: 'Operations & reliability'
  },
  {
    name: 'Projects',
    description: 'Venture and project development models for ambitious multi-domain initiatives.',
    hint: 'Project architecture'
  },
  {
    name: 'Lifestyle',
    description: 'Premium and experience-led initiatives connected to long-term brand value.',
    hint: 'Premium initiatives'
  }
];

const operatingModel = ['Discover', 'Design', 'Integrate', 'Execute', 'Scale'];

const capabilities = [
  'Strategic planning and business architecture',
  'Digital systems, product and automation layers',
  'AI-assisted workflows and decision support',
  'Commerce and channel development',
  'Operational execution and delivery frameworks',
  'Cross-pillar integration for scalable growth'
];

const partnershipModels = [
  'Business transformation and systems design',
  'Project and venture co-development',
  'Strategic ecosystem partnerships',
  'Multi-pillar execution programs'
];

export default function PortalHomePage() {
  return (
    <>
      <Section>
        <Container>
          <div className="stack" style={{ maxWidth: 880 }}>
            <Badge>Ecosystem Headquarters</Badge>
            <HeadingBlock
              eyebrow="Mula Group"
              title="Connecting strategy, technology and execution into one integrated ecosystem."
              description="Mula Group is a premium corporate-tech platform designed to turn complexity into coordinated business growth."
            />
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#ecosystem">
                <Button>Explore ecosystem</Button>
              </a>
              <a href="#contact">
                <Button variant="ghost">Partner with us</Button>
              </a>
            </div>
            <Card>
              <p className="mg-muted" style={{ margin: 0 }}>
                One portal. Six pillars. Shared architecture for strategic, digital and operational execution.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="about" className="stack" style={{ maxWidth: 940 }}>
            <HeadingBlock
              eyebrow="About"
              title="More than a single-service company"
              description="Mula Group exists to integrate layers that are often fragmented: strategy, digital, AI, commerce, operations and project execution."
            />
            <p className="mg-muted" style={{ margin: 0 }}>
              Instead of isolated deliverables, we design coordinated systems that make growth clearer, execution stronger and partnerships more effective.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="ecosystem" className="stack">
            <HeadingBlock
              eyebrow="Ecosystem pillars"
              title="Six domains, one coordinated growth system"
              description="Each pillar solves a different layer, but they are designed to work together."
            />
            <div className="grid-3">
              {pillars.map((pillar) => (
                <Card key={pillar.name}>
                  <p className="mg-eyebrow">{pillar.hint}</p>
                  <h3 style={{ marginTop: 0 }}>{pillar.name}</h3>
                  <p className="mg-muted" style={{ marginBottom: 0 }}>
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="stack" style={{ maxWidth: 980 }}>
            <HeadingBlock
              eyebrow="Operating model"
              title="A structured process from first signal to scalable outcome"
              description="Our operating model creates clarity while keeping execution practical and measurable."
            />
            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
              {operatingModel.map((step, idx) => (
                <Card key={step}>
                  <p className="mg-eyebrow">Step {idx + 1}</p>
                  <h3 style={{ margin: 0 }}>{step}</h3>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="capabilities" className="stack">
            <HeadingBlock
              eyebrow="Capabilities"
              title="Integrated capabilities across strategy, systems and execution"
              description="Built to connect business direction with operational reality."
            />
            <div className="grid-3">
              {capabilities.map((capability) => (
                <Card key={capability}>
                  <p style={{ margin: 0 }}>{capability}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="partnerships" className="stack" style={{ maxWidth: 980 }}>
            <HeadingBlock
              eyebrow="Partnerships"
              title="How we collaborate"
              description="We engage through focused partnership models aligned with the scale and complexity of each initiative."
            />
            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {partnershipModels.map((model) => (
                <Card key={model}>
                  <p style={{ margin: 0 }}>{model}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="contact" className="mg-card" style={{ display: 'grid', gap: '1rem' }}>
            <HeadingBlock
              eyebrow="Contact"
              title="Let’s discuss your next strategic move"
              description="Start with a focused conversation about your business, project or partnership direction."
            />
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:hello@mulagroup.eu">
                <Button>Start a conversation</Button>
              </a>
              <a href="#about">
                <Button variant="ghost">Back to overview</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
            }}
          >
            <div>
              <p className="mg-eyebrow">Mula Group</p>
              <p className="mg-muted" style={{ margin: 0 }}>
                Strategic, digital and operational ecosystem for modern business growth.
              </p>
            </div>
            <div>
              <p className="mg-eyebrow">Key links</p>
              <div className="stack" style={{ gap: '0.35rem' }}>
                <a href="#about" className="mg-nav-link">
                  About
                </a>
                <a href="#ecosystem" className="mg-nav-link">
                  Ecosystem
                </a>
                <a href="#capabilities" className="mg-nav-link">
                  Capabilities
                </a>
              </div>
            </div>
            <div>
              <p className="mg-eyebrow">Contact</p>
              <p className="mg-muted" style={{ margin: 0 }}>hello@mulagroup.eu</p>
              <p className="mg-muted" style={{ margin: 0 }}>Warsaw · Europe</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
