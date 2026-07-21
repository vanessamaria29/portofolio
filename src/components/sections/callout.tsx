import * as React from "react"
import { cn } from "@/lib/utils"
import { Info, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react"

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  type?: "default" | "info" | "success" | "warning" | "error"
  children: React.ReactNode
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, title, type = "default", children, ...props }, ref) => {
    
    const types = {
      default: { wrapper: "bg-surface-secondary border-border text-text-primary", icon: null },
      info: { wrapper: "bg-accent-primary/10 border-accent-primary/20 text-accent-primary", icon: <Info className="h-5 w-5 mt-0.5" /> },
      success: { wrapper: "bg-success/10 border-success/20 text-success", icon: <CheckCircle2 className="h-5 w-5 mt-0.5" /> },
      warning: { wrapper: "bg-warning/10 border-warning/20 text-warning", icon: <AlertTriangle className="h-5 w-5 mt-0.5" /> },
      error: { wrapper: "bg-error/10 border-error/20 text-error", icon: <AlertCircle className="h-5 w-5 mt-0.5" /> },
    }

    const currentType = types[type]

    return (
      <div
        ref={ref}
        className={cn(
          "flex rounded-md border p-4 gap-3",
          currentType.wrapper,
          className
        )}
        {...props}
      >
        {currentType.icon && <div className="shrink-0">{currentType.icon}</div>}
        <div className="flex flex-col gap-1 w-full">
          {title && <h5 className="font-semibold">{title}</h5>}
          <div className={cn("text-sm", type === "default" ? "text-text-secondary" : "opacity-90")}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Callout.displayName = "Callout"

export { Callout }
