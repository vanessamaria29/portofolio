"use client"

import * as React from "react"
import { useMediaQuery } from "./use-media-query"

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
