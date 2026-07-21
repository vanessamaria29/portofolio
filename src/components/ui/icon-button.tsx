import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "./button"

export interface IconButtonProps extends Omit<ButtonProps, "size"> {
  size?: "sm" | "md" | "lg"
  icon: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", icon, ...props }, ref) => {
    
    const sizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    }

    return (
      <Button
        ref={ref}
        size={size}
        className={cn("p-0 rounded-full", sizes[size], className)}
        {...props}
      >
        {icon}
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
