"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ y: prefersReducedMotion ? 0 : "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}
