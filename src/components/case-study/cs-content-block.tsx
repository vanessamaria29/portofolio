import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { cn } from "@/lib/utils"

export interface CSContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  children: React.ReactNode
  alignment?: "left" | "center"
}

export function CSContentBlock({ title, subtitle, children, alignment = "left", className, ...props }: CSContentBlockProps) {
  return (
    <Section className={cn("py-12 md:py-16", className)} {...props}>
      <Container>
        <Reveal>
          <div className={cn("max-w-3xl", alignment === "center" ? "mx-auto text-center" : "mr-auto text-left")}>
            {subtitle && (
              <span className="block text-sm font-semibold uppercase tracking-widest text-accent-primary mb-4">
                {subtitle}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-6">
              {title}
            </h2>
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-text-secondary leading-loose">
              {children}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
