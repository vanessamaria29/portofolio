import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { Layers, PenTool, Terminal } from "lucide-react"

export function CrossDiscipline() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary block mb-4">
              The Intersection
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Working Across Disciplines
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              The best products are built when strategy, design, and engineering operate as a single cohesive unit. My background across all three disciplines allows me to act as the ultimate translator between teams.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Product Strategy</h3>
              <p className="text-text-secondary leading-relaxed">
                Defining the vision, setting OKRs, and ensuring every feature built ties back directly to a measurable business outcome and a verified user need.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center text-warning">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">UX Design</h3>
              <p className="text-text-secondary leading-relaxed">
                Mapping user journeys, building information architecture, and creating prototypes to validate usability before development begins.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center text-success">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Frontend Execution</h3>
              <p className="text-text-secondary leading-relaxed">
                Understanding React, architecture, and API design allows me to accurately scope technical complexity and unblock engineers quickly.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
