import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { SectionHeader } from "@/components/sections/section-header"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardTitle } from "@/components/cards/card"
import { ImageContainer } from "@/components/shared/image-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export function FeaturedProjects() {
  const projects = [
    {
      title: "Campus Ride-Sharing App",
      category: "Product Management & UX",
      problem: "Students lacked a safe, affordable way to coordinate rides home during holidays.",
      role: "Lead PM & UI Designer",
      process: "Conducted 40+ interviews, mapped user journeys, built wireframes in Figma, and managed the engineering backlog.",
      outcome: "Prototyped and tested with 50 students, achieving a 92% task success rate before development handoff.",
      imageSrc: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop", // Abstract wireframe representation
      tools: ["Figma", "Jira", "UserTesting"],
      timeline: "Fall 2023",
      layout: "large"
    },
    {
      title: "Library Seat Booking System",
      category: "Frontend Architecture",
      problem: "During finals, students wasted hours walking through floors looking for empty seats.",
      role: "Frontend Engineer",
      process: "Built a real-time availability dashboard using Next.js, integrating with the library's occupancy sensors API.",
      outcome: "Deployed to Vercel, handling 1k+ daily active users during finals week with zero downtime.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Code/Dashboard
      tools: ["Next.js", "TypeScript", "Tailwind"],
      timeline: "Spring 2023",
      layout: "split"
    },
    {
      title: "Fintech App Redesign",
      category: "UX Research",
      problem: "A local fintech app had a 60% abandonment rate during the KYC onboarding flow.",
      role: "UX Researcher",
      process: "Performed heuristic evaluations and A/B tested a new progressive disclosure form.",
      outcome: "The redesigned flow reduced cognitive load, projecting a 20% increase in conversion.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data/Dashboard
      tools: ["Miro", "Framer", "Analytics"],
      timeline: "Winter 2022",
      layout: "split"
    }
  ]

  return (
    <Section className="py-24">
      <Container>
        <FadeIn>
          <SectionHeader 
            label="Featured Work" 
            title="Evidence of Execution" 
            description="A selection of academic projects and case studies demonstrating my ability to research user needs, design intuitive flows, and build technical solutions."
          />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn 
              key={project.title} 
              delay={index * 0.1} 
              direction="up" 
              className={project.layout === "large" ? "md:col-span-2" : "col-span-1"}
            >
              <Card className="h-full flex flex-col group overflow-hidden border-border bg-surface hover:border-accent-primary/30 transition-colors">
                <div className={`flex flex-col ${project.layout === "large" ? "lg:flex-row" : ""} h-full`}>
                  
                  <div className={`${project.layout === "large" ? "lg:w-5/12" : "w-full"} relative overflow-hidden border-b ${project.layout === "large" ? "lg:border-b-0 lg:border-r" : ""} border-border`}>
                    <ImageContainer 
                      src={project.imageSrc} 
                      alt={project.title} 
                      aspectRatio="video"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.layout === "large" ? "lg:absolute lg:inset-0" : ""}`}
                    />
                  </div>

                  <div className={`${project.layout === "large" ? "lg:w-7/12" : "w-full"} p-6 md:p-8 flex flex-col flex-grow`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                        {project.timeline}
                      </span>
                    </div>

                    <CardTitle className="text-2xl mb-4 leading-tight group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </CardTitle>

                    <div className="flex flex-col gap-4 mb-6 flex-grow">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Problem</span>
                        <p className="text-sm text-text-secondary leading-relaxed font-medium">{project.problem}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Process</span>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.process}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Outcome</span>
                        <p className="text-sm text-success font-medium">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                      <div className="flex flex-wrap gap-2 hidden sm:flex">
                        {project.tools.slice(0,2).map(tool => (
                          <Badge key={tool} variant="secondary" className="bg-surface-secondary text-xs">{tool}</Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                        <Button asChild size="sm" className="w-full sm:w-auto">
                          <a href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            Read Case Study
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
