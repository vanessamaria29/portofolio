"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  scale?: number
}

export function HoverScale({
  children,
  scale = 1.02,
  className,
  ...props
}: HoverScaleProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
