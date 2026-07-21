"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number
  duration?: number
  distance?: number
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 30,
  className,
  ...props
}: SlideUpProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
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
