import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { Tag } from "@/components/ui/tag"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export function CoreValues() {
  const values = [
    { name: "Extreme Ownership", description: "I don't just own the successes; I own the failures, the edge cases, and the technical debt." },
    { name: "Radical Empathy", description: "Every metric represents a human being. If we don't understand their pain, we can't build a solution." },
    { name: "Simplicity First", description: "Complexity is the enemy of execution. I constantly push teams to find the simplest viable solution." },
    { name: "Continuous Iteration", description: "Perfection is a myth. Shipping to learn is the only reliable way to find product-market fit." },
    { name: "Ego-less Collaboration", description: "The best idea wins, regardless of whose title is attached to it." }
  ]

  return (
    <Section className="bg-surface-secondary border-y border-border">
      <Container>
        <SectionHeader 
          align="center"
          label="Guiding Principles" 
          title="Core Values" 
          description="The professional principles that dictate how I communicate, prioritize, and lead teams."
        />

        <StaggerChildren staggerDelay={0.1} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {values.map((value, index) => (
            <StaggerItem key={index} className="flex flex-col items-center text-center p-6 bg-surface rounded-xl border border-border flex-1 min-w-[250px]">
              <Tag variant="secondary" className="mb-4">{value.name}</Tag>
              <p className="text-sm text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
