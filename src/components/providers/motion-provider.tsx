"use client"

import * as React from "react"
import { MotionConfig } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  )
}
