import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { Callout } from "@/components/sections/callout"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function ProductMindset() {
  const mindsets = [
    {
      title: "1. Problem Framing Over Solution Jumping",
      description: "I spend 80% of my time ensuring we are solving the right problem before allowing a single line of code to be written. A perfect solution to the wrong problem is waste.",
      type: "info" as const
    },
    {
      title: "2. Validation Through Prototypes",
      description: "Assumptions are dangerous. I rely heavily on low-fidelity wireframes and clickable prototypes to validate concepts with actual users before committing engineering resources.",
      type: "success" as const
    },
    {
      title: "3. Continuous Iteration",
      description: "The launch is just the starting line. I establish clear feedback loops and success metrics (KPIs) to measure adoption and iterate based on actual usage data, not just intuition.",
      type: "warning" as const
    }
  ]

  return (
    <Section className="bg-surface-secondary border-y border-border">
      <Container>
        <SectionHeader 
          align="center"
          label="Methodology" 
          title="My Product Mindset" 
          description="A framework for turning ambiguity into clarity."
        />

        <StaggerChildren className="flex flex-col gap-6 max-w-4xl mx-auto">
          {mindsets.map((mindset, index) => (
            <StaggerItem key={index}>
              <Callout title={mindset.title} type={mindset.type} className="bg-surface shadow-sm p-6 md:p-8">
                <span className="text-base text-text-secondary leading-relaxed">
                  {mindset.description}
                </span>
              </Callout>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
