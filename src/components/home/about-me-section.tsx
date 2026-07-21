import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Card, CardContent } from "@/components/cards/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, PenTool, Code2 } from "lucide-react"

export function AboutMeSection() {
  const capabilities = [
    {
      title: "Product Management",
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      description: "Understanding user problems, defining product direction, prioritizing features, and collaborating to build meaningful digital products.",
      skills: ["Product Discovery", "Product Strategy", "User Story", "PRD", "Roadmapping", "Feature Prioritization", "Agile", "Scrum"]
    },
    {
      title: "UX Research & Design",
      icon: <PenTool className="h-6 w-6" />,
      description: "Transforming user insights into intuitive experiences through research, wireframes, prototypes, and iterative validation.",
      skills: ["User Research", "User Interview", "Persona", "Customer Journey Map", "User Flow", "Wireframing", "Prototyping", "Design System", "Usability Testing"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      description: "Building responsive, accessible, and modern web applications while understanding technical implementation constraints.",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Laravel", "MySQL", "Git"]
    }
  ]

  const tools = {
    "Product": ["Jira", "Notion", "Trello"],
    "Design": ["Figma", "FigJam", "Miro"],
    "Development": ["VS Code", "GitHub", "Postman", "Vercel"]
  }

  return (
    <Section id="about" className="py-24 bg-surface border-t border-border">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16">
          
          {/* Left Column: Profile & Description */}
          <div className="lg:w-5/12 flex flex-col gap-10">
            <FadeIn direction="up">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-text-primary">
                Tentang Saya
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-primary/5 border border-accent-primary/20 shadow-sm">
                  <span className="text-3xl font-black text-accent-primary">V</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold uppercase tracking-widest text-text-tertiary">
                    Future Product Manager
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="prose prose-lg prose-neutral dark:prose-invert max-w-[70ch] leading-loose text-text-secondary">
              <p>
                Mahasiswi Sistem Informasi semester 5 yang berfokus pada Product Management dengan pengalaman mengembangkan solusi digital melalui proyek akademik, kompetisi, organisasi, dan magang. Tertarik pada product discovery dan user research, serta didukung kemampuan UI/UX design dan web development untuk membangun produk yang berpusat pada pengguna.
              </p>
            </FadeIn>
          </div>
          
          {/* Right Column: Capability Cards */}
          <div className="lg:w-7/12">
            <StaggerChildren className="flex flex-col gap-6">
              {capabilities.map((cap, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-surface-secondary border-border/50 hover:border-accent-primary/30 transition-all shadow-sm group">
                    <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary/30 transition-colors">
                          {cap.icon}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-text-primary">{cap.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {cap.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {cap.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-surface border-border/50 text-[10px] font-medium text-text-tertiary px-2.5 py-0.5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        {/* Bottom Section: Tools */}
        <FadeIn direction="up" delay={0.3} className="pt-16 border-t border-border">
          <h3 className="text-xl font-bold text-text-primary mb-8 text-center md:text-left">
            Tools I Use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(tools).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4 items-center md:items-start">
                <span className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  {category}
                </span>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {items.map(tool => (
                    <Badge key={tool} variant="secondary" className="bg-surface-secondary border border-border/50 px-3 py-1 text-sm text-text-secondary rounded-full">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
