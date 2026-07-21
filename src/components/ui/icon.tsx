import * as React from "react"
import { icons } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: keyof typeof icons
  size?: 16 | 20 | 24 | 32
  color?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color = "currentColor", className, ...props }, ref) => {
    const LucideIcon = icons[name]

    if (!LucideIcon) {
      return null
    }

    const sizeClasses = {
      16: "w-4 h-4",
      20: "w-5 h-5",
      24: "w-6 h-6",
      32: "w-8 h-8",
    }

    return (
      <LucideIcon
        ref={ref}
        color={color}
        className={cn(sizeClasses[size], className)}
        strokeWidth={2}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon }
