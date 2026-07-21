import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { Clock } from "lucide-react"

export interface CSExecutiveSummaryProps {
  problem: string
  solution: string
  impact: string
  readingTime: string
}

export function CSExecutiveSummary({ problem, solution, impact, readingTime }: CSExecutiveSummaryProps) {
  return (
    <Section className="bg-surface-secondary border-b border-border py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="flex items-center gap-2 mb-8 text-text-tertiary text-sm font-medium uppercase tracking-widest">
            <Clock className="h-4 w-4" />
            {readingTime} Read
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-primary">The Problem</h3>
              <p className="text-text-secondary leading-relaxed">{problem}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-success">The Solution</h3>
              <p className="text-text-secondary leading-relaxed">{solution}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-primary">The Impact</h3>
              <p className="text-text-secondary leading-relaxed">{impact}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
