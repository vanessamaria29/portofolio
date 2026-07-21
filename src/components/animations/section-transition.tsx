"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface SectionTransitionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
}

export function SectionTransition({
  children,
  className,
  ...props
}: SectionTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.section
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
