import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2, Play } from "lucide-react"

export interface CSHeroProps {
  title: string
  description: string
  role: string
  timeline: string
  teamSize?: string
  status: string
  links?: {
    liveDemo?: string
    github?: string
    prototype?: string
  }
}

export function CSHero({ title, description, role, timeline, teamSize, status, links }: CSHeroProps) {
  return (
    <Section className="pb-12 pt-24 md:pb-20 md:pt-32 border-b border-border">
      <Container>
        <div className="max-w-[800px] flex flex-col gap-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl leading-tight">
              {title}
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xl text-text-secondary leading-relaxed">
              {description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
            <div>
              <span className="block text-xs uppercase tracking-widest text-text-tertiary mb-2">Role</span>
              <span className="text-sm font-medium text-text-primary">{role}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-text-tertiary mb-2">Timeline</span>
              <span className="text-sm font-medium text-text-primary">{timeline}</span>
            </div>
            {teamSize && (
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-tertiary mb-2">Team</span>
                <span className="text-sm font-medium text-text-primary">{teamSize}</span>
              </div>
            )}
            <div>
              <span className="block text-xs uppercase tracking-widest text-text-tertiary mb-2">Status</span>
              <span className="text-sm font-medium text-text-primary">{status}</span>
            </div>
          </FadeIn>

          {links && (
            <FadeIn direction="up" delay={0.3} className="flex flex-wrap gap-4 mt-2">
              {links.liveDemo && (
                <Button asChild>
                  <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {links.prototype && (
                <Button variant="outline" asChild>
                  <a href={links.prototype} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    View Prototype
                  </a>
                </Button>
              )}
              {links.github && (
                <Button variant="outline" asChild>
                  <a href={links.github} target="_blank" rel="noopener noreferrer">
                    <Code2 className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  )
}
