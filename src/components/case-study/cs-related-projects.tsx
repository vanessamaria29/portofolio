import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { ArrowLeft, ArrowRight } from "lucide-react"

export interface RelatedProject {
  title: string
  category: string
  href: string
}

export interface CSRelatedProjectsProps {
  prev?: RelatedProject
  next?: RelatedProject
}

export function CSRelatedProjects({ prev, next }: CSRelatedProjectsProps) {
  if (!prev && !next) return null

  return (
    <Section className="border-t border-border py-16 md:py-24 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          <div className="flex-1 flex flex-col items-start">
            {prev && (
              <Reveal className="w-full">
                <a href={prev.href} className="group flex flex-col gap-2 p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface-secondary transition-all w-full max-w-sm">
                  <div className="flex items-center text-sm font-semibold uppercase tracking-widest text-text-tertiary group-hover:text-accent-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Project
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mt-2">{prev.title}</h4>
                  <span className="text-sm text-text-secondary">{prev.category}</span>
                </a>
              </Reveal>
            )}
          </div>
          
          <div className="flex-1 flex flex-col items-end text-right">
            {next && (
              <Reveal className="w-full flex justify-end" delay={0.1}>
                <a href={next.href} className="group flex flex-col items-end gap-2 p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface-secondary transition-all w-full max-w-sm">
                  <div className="flex items-center text-sm font-semibold uppercase tracking-widest text-text-tertiary group-hover:text-accent-primary transition-colors">
                    Next Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mt-2">{next.title}</h4>
                  <span className="text-sm text-text-secondary">{next.category}</span>
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
