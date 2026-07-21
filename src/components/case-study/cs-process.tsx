import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export interface ProcessStep {
  title: string
  description: string
}

export interface CSProcessProps {
  title: string
  subtitle?: string
  steps: ProcessStep[]
}

export function CSProcess({ title, subtitle, steps }: CSProcessProps) {
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="max-w-3xl mb-12">
            {subtitle && (
              <span className="block text-sm font-semibold uppercase tracking-widest text-accent-primary mb-4">
                {subtitle}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <StaggerChildren className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="md:w-1/4 flex-shrink-0 pt-1">
                  <div className="text-5xl font-black text-border group-hover:text-accent-primary/20 transition-colors">
                    0{index + 1}
                  </div>
                </div>
                <div className="md:w-3/4 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                  <div className="prose prose-neutral dark:prose-invert text-text-secondary leading-relaxed max-w-none">
                    {step.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  )
}
