"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import Link from "next/link"

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20)
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }, { rootMargin: "-20% 0px -50% 0px" })

      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      return () => {
        window.removeEventListener("scroll", handleScroll)
        sections.forEach((section) => observer.unobserve(section))
      }
    }, [])

    const navLinks = [
      { name: "About", href: "/#about", id: "about" },
      { name: "Portofolio", href: "/#portfolio", id: "portfolio" },
      { name: "Experience", href: "/#experience", id: "experience" },
    ]

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-[999] w-full transition-all duration-300",
          scrolled 
            ? "border-b border-border/40 bg-background/80 backdrop-blur-lg shadow-sm" 
            : "border-b-transparent bg-background",
          className
        )}
        {...props}
      >
        <Container className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8 md:gap-12">
            <Link 
              href="/" 
              className="font-heading text-xl font-bold tracking-tight text-text-primary hover:opacity-80 transition-opacity p-2 -ml-2"
            >
              Vanessa.
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={link.href} 
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === link.id 
                      ? "bg-purple-100 text-purple-700 font-bold" 
                      : "text-slate-600 hover:text-purple-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="mailto:vanessa@example.com" 
              className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-accent-primary px-6 text-sm font-bold text-surface transition-colors hover:bg-accent-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 shadow-sm"
            >
              Let's Connect
            </Link>
            {/* Mobile Menu Button placeholder */}
            <button className="md:hidden flex items-center justify-center h-12 w-12 text-text-primary hover:bg-surface-secondary rounded-md transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </Container>
      </header>
    )
  }
)
Navigation.displayName = "Navigation"

export { Navigation }
