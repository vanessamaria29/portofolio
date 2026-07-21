import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Quote } from "@/components/sections/quote"
import { FadeIn } from "@/components/animations/fade-in"

export function FutureGoals() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary block mb-4">
              Looking Forward
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">
              The Next Chapter
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 text-left md:text-center">
              I am looking for a team that values transparency, rigorous user research, and technical excellence. My goal is to lead the product strategy for a platform that has a tangible, positive impact on how people work or live. 
            </p>
            
            <div className="text-left w-full">
              <Quote 
                text="The best product managers are the ones who can abstract complexity into a simple user experience without losing the power of the underlying technology." 
                author="My Product Philosophy"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
