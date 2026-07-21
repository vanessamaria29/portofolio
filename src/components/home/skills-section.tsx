import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Card, CardContent } from "@/components/cards/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, MousePointerClick, Code, MessageSquare, GraduationCap } from "lucide-react"

export function SkillsSection() {
  const capabilityGroups = [
    {
      title: "Product Thinking",
      icon: <Target className="h-5 w-5" />,
      description: "Focusing on the 'why' before the 'how' to ensure we build features that actually solve user problems.",
      skills: ["Problem Scoping", "Agile", "RICE Prioritization"]
    },
    {
      title: "UX Research",
      icon: <Lightbulb className="h-5 w-5" />,
      description: "Gathering qualitative data to validate assumptions rather than guessing what users want.",
      skills: ["User Interviews", "Usability Testing", "Journey Mapping"]
    },
    {
      title: "Interaction Design",
      icon: <MousePointerClick className="h-5 w-5" />,
      description: "Translating research insights into intuitive, accessible interfaces that reduce cognitive load.",
      skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Frontend Engineering",
      icon: <Code className="h-5 w-5" />,
      description: "Understanding technical constraints and how to communicate effectively with engineering teams.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Communication",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Bridging the gap between design, engineering, and business stakeholders.",
      skills: ["Documentation", "Presentation", "Active Listening"]
    },
    {
      title: "Continuous Learning",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Constantly exploring new tools and methodologies to improve my product sense.",
      skills: ["Analytics", "AI Tools", "Industry Case Studies"]
    }
  ]

  return (
    <Section className="py-24 bg-surface-secondary border-t border-border">
      <Container>
        <SectionHeader 
          label="Capabilities" 
          title="The Multi-Disciplinary Advantage" 
          description="A great Product Manager doesn't just write PRDs. They understand the language of design and engineering. My diverse skillset allows me to collaborate deeply across all phases of the product lifecycle."
          align="center"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {capabilityGroups.map((group) => (
            <StaggerItem key={group.title}>
              <Card className="h-full bg-surface border-border hover:border-accent-primary/50 hover:shadow-md transition-all">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-accent-primary/5 text-accent-primary rounded-xl border border-accent-primary/20">
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-text-primary text-xl">{group.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary mb-8 leading-relaxed flex-grow">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-surface-secondary text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
