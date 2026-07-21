import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { MetricCard } from "@/components/cards/metric-card"
import { cn } from "@/lib/utils"

export interface MetricData {
  label: string
  value: string
  trend?: "up" | "down" | "neutral"
  context?: string
}

export interface CSMetricsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  metrics: MetricData[]
}

export function CSMetrics({ title, description, metrics, className, ...props }: CSMetricsProps) {
  return (
    <Section className={cn("py-12 md:py-16", className)} {...props}>
      <Container>
        <Reveal>
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-2">
              {title}
            </h3>
            {description && (
              <p className="text-lg text-text-secondary">
                {description}
              </p>
            )}
          </div>
        </Reveal>

        <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {metrics.map((metric, index) => (
            <StaggerItem key={index}>
              <MetricCard 
                label={metric.label} 
                value={metric.value} 
                className="bg-surface border-border/50 h-full flex flex-col justify-center"
              />
              {metric.context && (
                <p className="text-xs text-text-tertiary mt-2 text-center">
                  {metric.context}
                </p>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
