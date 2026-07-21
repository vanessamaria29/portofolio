import * as React from "react"
import { cn } from "@/lib/utils"

export interface AccordionProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  title: string
  children: React.ReactNode
}

const Accordion = React.forwardRef<HTMLDetailsElement, AccordionProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <details
        ref={ref}
        className={cn("group border-b border-border py-4 [&_summary::-webkit-details-marker]:hidden", className)}
        {...props}
      >
        <summary className="flex cursor-pointer items-center justify-between text-text-primary font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm">
          {title}
          <svg className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </summary>
        <div className="mt-4 text-text-secondary text-sm">
          {children}
        </div>
      </details>
    )
  }
)
Accordion.displayName = "Accordion"

export { Accordion }
