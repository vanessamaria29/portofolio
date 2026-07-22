import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"

export function AboutHero() {
  return (
    <Section className="pb-12 pt-20 md:pb-20 md:pt-32 border-b border-border">
      <Container>
        <div className="flex flex-col gap-8 max-w-[800px]">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              I build digital products because I believe technology should amplify human potential.
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-col gap-6 text-lg text-text-secondary sm:text-xl leading-relaxed">
              <p>
                My name is Vanessa. I am an Information Systems student & Aspiring Product Manager. I don't just manage backlogs; I orchestrate the delivery of meaningful solutions to complex user problems.
              </p>
              <p>
                My current focus is on building B2B SaaS platforms that empower teams to work more efficiently, bringing consumer-grade design to enterprise software.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
