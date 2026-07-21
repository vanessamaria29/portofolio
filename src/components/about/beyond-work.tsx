import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { BookOpen, Camera, TerminalSquare } from "lucide-react"

export function BeyondWork() {
  return (
    <Section className="bg-surface-secondary border-t border-border">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary block mb-4">
              Beyond The Roadmap
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              When I'm Not Shipping
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              My curiosity doesn't stop at 5 PM. I spend my free time exploring disciplines that inadvertently make me a better product thinker.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="flex gap-4">
              <BookOpen className="h-6 w-6 text-text-primary shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Behavioral Economics</h4>
                <p className="text-sm text-text-secondary">Fascinated by how irrational humans can be. I read heavily on behavioral psychology to better understand user motivation.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex gap-4">
              <TerminalSquare className="h-6 w-6 text-text-primary shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Open Source</h4>
                <p className="text-sm text-text-secondary">I occasionally contribute to open-source UI libraries, helping refine component APIs and documentation.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex gap-4">
              <Camera className="h-6 w-6 text-text-primary shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Street Photography</h4>
                <p className="text-sm text-text-secondary">Learning to observe the world quietly and anticipate moments before they happen. It's an exercise in patience and perspective.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
