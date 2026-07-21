import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "base" | "reading"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant = "base", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          variant === "base" ? "max-w-[1200px]" : "max-w-[760px]",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
