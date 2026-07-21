import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"

export function ProjectsHero() {
  return (
    <Section className="pb-8 pt-20 md:pb-12 md:pt-32">
      <Container>
        <div className="flex flex-col gap-6 max-w-[800px]">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              Evidence of Impact
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg text-text-secondary sm:text-xl leading-relaxed">
              I don't just design interfaces or write code; I solve complex business problems. Below is a curated selection of projects spanning product strategy, UX design, and frontend execution. Each represents a story of user empathy translated into measurable outcomes.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
