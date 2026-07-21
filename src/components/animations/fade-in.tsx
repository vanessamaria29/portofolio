"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  distance = 20,
  className,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  }

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directionOffset[direction] }

  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Out Expo
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
