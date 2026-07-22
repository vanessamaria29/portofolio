import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Card, CardContent } from "@/components/cards/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, PenTool, Code2 } from "lucide-react"
import Link from "next/link"

export function Capabilities() {
  const capabilities = [
    {
      title: "Product Management",
      icon: <BriefcaseBusiness className="h-6 w-6" />,
      description: "Mendefinisikan arah produk, memprioritaskan fitur, dan berkolaborasi untuk membangun produk digital yang bermakna dan menyelesaikan masalah pengguna.",
      skills: ["Product Discovery", "Product Strategy", "User Story", "PRD", "Roadmapping", "Feature Prioritization", "Agile", "Scrum"],
      href: "#portfolio"
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-6 w-6" />,
      description: "Mengubah insight pengguna menjadi pengalaman intuitif melalui riset, wireframe, prototipe, dan validasi iteratif.",
      skills: ["User Research", "User Interview", "Persona", "Customer Journey Map", "User Flow", "Wireframing", "Prototyping", "Design System", "Usability Testing"],
      href: "#"
    },
    {
      title: "Web Development",
      icon: <Code2 className="h-6 w-6" />,
      description: "Membangun aplikasi web yang responsif, dapat diakses, dan modern dengan memahami batasan teknis implementasi.",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Laravel", "MySQL", "Git"],
      href: "#"
    }
  ]

  return (
    <Section className="py-12 bg-surface">
      <Container>
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <StaggerItem key={index} className="h-full">
              <Link href={cap.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-2xl group">
                <Card className="h-full bg-surface-secondary border-border/50 group-hover:border-accent-primary/30 transition-all shadow-sm">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary/30 transition-colors">
                          {cap.icon}
                        </div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">{cap.title}</h3>
                      </div>
                      {cap.href !== "#" && (
                        <div className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                          →
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {cap.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-surface border-border/50 text-[10px] font-medium text-text-tertiary px-2.5 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
