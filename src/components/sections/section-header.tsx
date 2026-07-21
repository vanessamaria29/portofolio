import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  label?: string
  align?: "left" | "center"
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, label, align = "left", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 flex flex-col gap-4",
          align === "center" ? "items-center text-center" : "items-start text-left",
          className
        )}
        {...props}
      >
        {label && (
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary">
            {label}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-[760px] text-lg text-text-secondary">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }
