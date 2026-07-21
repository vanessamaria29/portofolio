import * as React from "react"
import { Badge, BadgeProps } from "./badge"
import { cn } from "@/lib/utils"

export interface TagProps extends BadgeProps {}

function Tag({ className, ...props }: TagProps) {
  return (
    <Badge
      className={cn("rounded-full px-3 py-1 font-medium", className)}
      {...props}
    />
  )
}

export { Tag }
