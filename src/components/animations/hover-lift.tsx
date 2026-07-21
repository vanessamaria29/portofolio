"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  y?: number
}

export function HoverLift({
  children,
  y = -4,
  className,
  ...props
}: HoverLiftProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
