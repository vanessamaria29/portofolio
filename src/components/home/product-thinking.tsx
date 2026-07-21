import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Search, LineChart, Target, PenTool, CheckCircle, RefreshCw } from "lucide-react"

export function ProductThinking() {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Discover",
      description: "Identifying market opportunities and defining the core user problem.",
      deliverables: "Problem Statement, User Personas",
      tools: "Miro, Notion"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Research",
      description: "Validating assumptions through user interviews and data analysis.",
      deliverables: "Interview Transcripts, Survey Data",
      tools: "Google Forms, Dovetail"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Prioritize",
      description: "Scoping MVP features using frameworks and business constraints.",
      deliverables: "PRD, Product Roadmap",
      tools: "Jira, Linear"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Prototype",
      description: "Creating wireframes and high-fidelity mockups to visualize solutions.",
      deliverables: "Wireframes, Clickable Prototype",
      tools: "Figma"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Validate",
      description: "Testing prototypes with real users to ensure usability and value.",
      deliverables: "Usability Report",
      tools: "UserTesting"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Iterate",
      description: "Analyzing launch metrics and planning the next cycle of improvements.",
      deliverables: "A/B Test Results, Backlog",
      tools: "Mixpanel, GitHub"
    }
  ]

  return (
    <Section className="py-24 bg-surface-secondary border-t border-border">
      <Container>
        <SectionHeader 
          label="Methodology" 
          title="How I Build Products" 
          description="I follow a structured, iterative approach. A great product is not an accident; it is the result of continuous validation, user empathy, and disciplined prioritization."
          align="center"
        />

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-border -z-10" />
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.title} className="flex flex-col items-center text-center relative group bg-surface lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-border lg:border-none shadow-sm lg:shadow-none">
                <div className="w-24 h-24 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center mb-6 text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary/50 group-hover:bg-accent-primary/5 transition-all duration-300 z-10">
                  {step.icon}
                </div>
                <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-surface border border-border text-[10px] font-bold text-text-tertiary mb-3 absolute top-24 -mt-3 z-20">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3 mt-0 lg:mt-6">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 min-h-[60px]">
                  {step.description}
                </p>
                <div className="w-full flex flex-col gap-2 pt-4 border-t border-border/50">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Deliverables</span>
                    <span className="text-xs font-medium text-text-primary">{step.deliverables}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Tools</span>
                    <span className="text-xs text-text-secondary">{step.tools}</span>
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
