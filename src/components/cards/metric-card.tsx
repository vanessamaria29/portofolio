import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  label: string
  trend?: "up" | "down" | "neutral"
  trendValue?: string
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, value, label, trend, trendValue, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <CardContent className="p-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-text-secondary">{label}</p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-4xl font-bold tracking-tight text-text-primary">{value}</h4>
              {trend && trendValue && (
                <span
                  className={cn(
                    "text-xs font-semibold",
                    trend === "up" && "text-success",
                    trend === "down" && "text-error",
                    trend === "neutral" && "text-text-secondary"
                  )}
                >
                  {trend === "up" && "↑ "}
                  {trend === "down" && "↓ "}
                  {trendValue}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)
MetricCard.displayName = "MetricCard"

export { MetricCard }
