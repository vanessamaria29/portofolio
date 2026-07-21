"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface StaggerChildrenProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className,
  ...props
}: StaggerChildrenProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReducedMotion = usePrefersReducedMotion()
  
  const variants: any = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
    },
  }

  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  )
}
