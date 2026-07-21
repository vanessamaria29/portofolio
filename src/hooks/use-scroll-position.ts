"use client"

import * as React from "react"

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    // Initialize
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}
