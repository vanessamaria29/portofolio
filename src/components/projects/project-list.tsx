"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/cards/card"
import { Tag } from "@/components/ui/tag"
import { Badge } from "@/components/ui/badge"
import { Divider } from "@/components/ui/divider"
import { ImageContainer } from "@/components/shared/image-container"
import { EmptyState } from "@/components/sections/empty-state"
import { ArrowRight, ExternalLink, Code2, CheckCircle2, Clock, Lightbulb, Briefcase } from "lucide-react"
import { projectsData, ProjectCategory, ProjectData } from "@/lib/data/projects"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

const CATEGORIES: ProjectCategory[] = ["All", "Product Management", "UI/UX Design", "Frontend Development"]

function StatusIcon({ status }: { status: ProjectData["status"] }) {
  switch (status) {
    case "Completed":
      return <CheckCircle2 className="h-4 w-4 text-success mr-1" />
    case "In Progress":
      return <Clock className="h-4 w-4 text-warning mr-1" />
    case "Concept":
      return <Lightbulb className="h-4 w-4 text-accent-primary mr-1" />
  }
}

export function ProjectList() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const prefersReducedMotion = usePrefersReducedMotion()

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <Section className="pt-0 bg-surface">
      <Container>
        <div className="flex flex-wrap gap-2 mb-12 sticky top-[72px] z-20 bg-surface/80 backdrop-blur-md py-4 border-b border-border">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "primary" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout={!prefersReducedMotion} className="flex flex-col gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout={!prefersReducedMotion}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Card className="overflow-hidden border-border bg-surface">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      
                      {/* Image Section */}
                      <div className="lg:col-span-5 h-64 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-border">
                        <ImageContainer 
                          src={project.imageSrc} 
                          alt={project.title} 
                          className="h-full w-full object-cover" 
                          aspectRatio="auto"
                        />
                        <div className="absolute top-4 left-4">
                          <Tag className="bg-surface/90 backdrop-blur-sm text-text-primary border-border shadow-sm">
                            <StatusIcon status={project.status} />
                            {project.status}
                          </Tag>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:col-span-7 flex flex-col p-6 md:p-8">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary">
                            {project.category}
                          </span>
                          <span className="text-xs font-medium text-text-tertiary hidden sm:block">
                            {project.timeline}
                          </span>
                        </div>
                        
                        <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                          {project.title}
                        </CardTitle>
                        
                        <p className="text-lg text-text-secondary mb-6 font-medium">
                          {project.summary}
                        </p>

                        <div className="bg-surface-secondary rounded-lg p-4 md:p-5 mb-6 border border-border">
                          <h4 className="text-sm font-bold uppercase tracking-wide text-text-primary mb-2">The Problem</h4>
                          <p className="text-sm text-text-secondary">{project.problemStatement}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                          <div>
                            <span className="block text-xs uppercase tracking-wide text-text-tertiary mb-1">Role</span>
                            <span className="text-sm font-medium text-text-primary">{project.role}</span>
                          </div>
                          <div>
                            <span className="block text-xs uppercase tracking-wide text-text-tertiary mb-1">Outcome</span>
                            <span className="text-sm font-medium text-success">{project.keyOutcome}</span>
                          </div>
                          {project.teamSize && (
                            <div>
                              <span className="block text-xs uppercase tracking-wide text-text-tertiary mb-1">Team</span>
                              <span className="text-sm font-medium text-text-primary">{project.teamSize}</span>
                            </div>
                          )}
                        </div>

                        <Divider className="my-6" />

                        <div className="mb-8">
                          <span className="block text-xs uppercase tracking-wide text-text-tertiary mb-3">Key Skills & Tech</span>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map(skill => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                            {project.technologies.map(tech => (
                              <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-4">
                          {project.links.caseStudy && (
                            <Button asChild>
                              <a href={project.links.caseStudy}>
                                View Case Study
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.liveDemo && (
                            <Button variant="outline" asChild>
                              <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button variant="outline" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Code2 className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                layout={!prefersReducedMotion}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmptyState
                  icon={<Briefcase className="h-6 w-6" />}
                  title={`No ${activeCategory} projects yet`}
                  description="I'm constantly working on new things. Check back soon for detailed case studies in this category."
                  action={
                    <Button onClick={() => setActiveCategory("All")}>
                      View All Projects
                    </Button>
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  )
}
