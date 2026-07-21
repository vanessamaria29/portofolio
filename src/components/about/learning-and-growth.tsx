import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { FadeIn } from "@/components/animations/fade-in"

export function LearningAndGrowth() {
  const topics = [
    { title: "AI-Assisted Product Development", desc: "Exploring how LLMs can accelerate user research synthesis and automate PRD generation." },
    { title: "Advanced SQL & Analytics", desc: "Deepening my ability to run complex cohort analyses without relying heavily on data science teams." },
    { title: "Accessibility (a11y) Standards", desc: "Ensuring that the products I manage are universally usable, exceeding WCAG AA minimums." }
  ]

  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeader 
            label="Continuous Learning" 
            title="Always Improving" 
            description="The tech landscape moves too fast to remain stagnant. Here is what I am actively studying right now."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {topics.map((topic, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col gap-2 p-6 rounded-lg border border-border h-full">
                <h4 className="font-semibold text-text-primary">{topic.title}</h4>
                <p className="text-sm text-text-secondary">{topic.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
