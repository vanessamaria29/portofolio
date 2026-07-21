import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  date: string
  isLast?: boolean
  children?: React.ReactNode
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, title, subtitle, date, isLast = false, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-8 sm:pl-32 py-6 group", className)} {...props}>
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-[11px] sm:left-[111px] top-[36px] bottom-[-24px] w-[2px] bg-divider group-hover:bg-border transition-colors" />
        )}
        
        {/* Timeline Dot */}
        <div className="absolute left-[5px] sm:left-[105px] top-[26px] h-3 w-3 rounded-full border-2 border-surface bg-divider ring-2 ring-transparent group-hover:bg-accent-primary transition-colors" />

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0">
          {/* Date (Left side on desktop, top on mobile) */}
          <div className="sm:absolute sm:left-0 sm:w-[85px] sm:text-right mt-1 sm:mt-0">
            <span className="text-sm font-medium text-text-secondary">{date}</span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 w-full">
            <h4 className="text-xl font-semibold text-text-primary">{title}</h4>
            <span className="text-base text-accent-primary font-medium">{subtitle}</span>
            {children && (
              <div className="mt-4 text-text-secondary leading-relaxed">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export { TimelineItem }
