import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Card, CardContent } from "@/components/cards/card"

export interface ResearchInsight {
  title: string
  description: string
}

export interface CSResearchProps {
  methods: string[]
  insights: ResearchInsight[]
  painPoints: string[]
}

export function CSResearch({ methods, insights, painPoints }: CSResearchProps) {
  return (
    <Section className="py-12 md:py-16 bg-surface-secondary">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-border pb-8">
              <h3 className="text-xl font-bold text-text-primary">Research Methods</h3>
              <div className="flex flex-wrap gap-3">
                {methods.map(method => (
                  <span key={method} className="px-3 py-1 bg-surface border border-border rounded-md text-sm font-medium text-text-secondary">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <Reveal>
                <h3 className="text-xl font-bold text-text-primary mb-2">Key Pain Points</h3>
              </Reveal>
              <StaggerChildren staggerDelay={0.1} className="flex flex-col gap-4">
                {painPoints.map((point, index) => (
                  <StaggerItem key={index}>
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error/10 text-error text-xs font-bold">
                        {index + 1}
                      </span>
                      <p className="text-sm text-text-secondary leading-relaxed">{point}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal>
                <h3 className="text-xl font-bold text-text-primary mb-2">Core Insights</h3>
              </Reveal>
              <StaggerChildren staggerDelay={0.1} className="flex flex-col gap-4">
                {insights.map((insight, index) => (
                  <StaggerItem key={index}>
                    <Card className="bg-surface shadow-sm border-border h-full">
                      <CardContent className="p-5 flex flex-col gap-2">
                        <h4 className="font-semibold text-text-primary">{insight.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{insight.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
