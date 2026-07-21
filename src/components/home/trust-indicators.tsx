import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Tag } from "@/components/ui/tag"

export function TrustIndicators() {
  const focuses = [
    "Product Management",
    "UI/UX Design",
    "Frontend Development",
    "Agile Methodologies",
    "Data Analytics",
    "Semester 5 Informatics",
    "Available for Internship",
    "Hackathon Winner"
  ]

  return (
    <Section className="py-12 bg-surface-secondary border-y border-border overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-text-tertiary">
            Current Focus & Context
          </span>
          <StaggerChildren staggerDelay={0.05} className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {focuses.map((focus, index) => (
              <StaggerItem key={index}>
                <Tag className="text-sm font-medium px-4 py-2 bg-surface border-border shadow-sm hover:border-accent-primary/30 transition-colors">
                  {focus}
                </Tag>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  )
}
