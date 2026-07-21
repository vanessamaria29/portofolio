import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { TimelineItem } from "@/components/sections/timeline-item"
import { Reveal } from "@/components/animations/reveal"

export function JourneyTimeline() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader 
            label="The Journey" 
            title="How I Got Here" 
            description="My path wasn't linear. It was driven by a constant curiosity to understand how things work and, more importantly, why people use them."
          />
        </Reveal>

        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <TimelineItem 
              date="2022" 
              title="The Shift to Product Leadership" 
              subtitle="Embracing the 'Why'"
            >
              <p>
                After years of building products as an engineer, I realized that the hardest part of software development wasn't writing the code—it was deciding what code to write. I transitioned into Product Management to focus entirely on user validation, market strategy, and aligning cross-functional teams around a shared vision.
              </p>
            </TimelineItem>
          </Reveal>

          <Reveal delay={0.2}>
            <TimelineItem 
              date="2019" 
              title="The Engineering Foundation" 
              subtitle="Learning the 'How'"
            >
              <p>
                As a Frontend Engineer, I fell in love with React and component-driven architecture. Building complex, performant UIs taught me the reality of technical debt, scoping constraints, and the true cost of edge cases. This period cemented my ability to communicate effectively with engineering teams.
              </p>
            </TimelineItem>
          </Reveal>

          <Reveal delay={0.3}>
            <TimelineItem 
              date="2017" 
              title="The UX Awakening" 
              subtitle="Discovering the 'Who'"
              isLast
            >
              <p>
                My career started in design. I spent my early days conducting user interviews, drawing wireframes, and running usability tests. It was here that I learned the foundational rule of product development: empathy for the user is the only metric that guarantees long-term success.
              </p>
            </TimelineItem>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
