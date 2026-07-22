"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import Link from "next/link"
import { Menu, X, ArrowRight, Home, Briefcase, User, Sparkles } from "lucide-react"

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20)
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { rootMargin: "-20% 0px -50% 0px" }
      )

      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      return () => {
        window.removeEventListener("scroll", handleScroll)
        sections.forEach((section) => observer.unobserve(section))
      }
    }, [])

    // Lock body scroll when mobile drawer is open
    useEffect(() => {
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }
      return () => {
        document.body.style.overflow = "unset"
      }
    }, [mobileMenuOpen])

    const navLinks = [
      { name: "About", href: "/#about", sectionId: "about", icon: User },
      { name: "Portofolio", href: "/#portfolio", sectionId: "portfolio", icon: Sparkles },
      { name: "Experience", href: "/#experience", sectionId: "experience", icon: Briefcase },
    ]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
      setMobileMenuOpen(false)
      if (pathname === "/") {
        e.preventDefault()
        const el = document.getElementById(link.sectionId)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        } else {
          router.push(link.href)
        }
      }
    }

    return (
      <>
        <header
          ref={ref}
          className={cn(
            "sticky top-0 z-[999] w-full transition-all duration-300",
            scrolled 
              ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs" 
              : "border-b border-transparent bg-white/60 backdrop-blur-xs",
            className
          )}
          {...props}
        >
          <Container className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-8 md:gap-12">
              <Link 
                href="/" 
                className="font-heading text-xl font-bold tracking-tight text-slate-900 hover:opacity-80 transition-all p-2 -ml-2 select-none active:scale-95 cursor-pointer"
              >
                Vanessa.
              </Link>
              
              <nav className="hidden md:flex items-center gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === "/" && activeSection === link.sectionId
                  return (
                    <Link 
                      key={link.sectionId}
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link)}
                      className={cn(
                        "px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-95",
                        isActive 
                          ? "bg-slate-900 text-white shadow-xs font-bold" 
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="mailto:vanessa.maria2905@gmail.com" 
                className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-xs active:scale-95 cursor-pointer select-none"
              >
                Let's Connect
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden flex items-center justify-center h-11 w-11 text-slate-900 bg-slate-100 hover:bg-slate-200 active:scale-95 rounded-xl transition-all border border-slate-200 cursor-pointer select-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </Container>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[1000] md:hidden flex flex-col">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Drawer */}
            <div className="relative z-10 bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-bold text-lg text-slate-900">Navigation</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    if (pathname === "/") {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  }}
                  className="flex items-center gap-3 p-3.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-100 transition-all active:scale-98 cursor-pointer"
                >
                  <Home className="w-5 h-5 text-slate-500" />
                  <span>Home</span>
                </Link>

                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.sectionId}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="flex items-center gap-3 p-3.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-100 transition-all active:scale-98 cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-slate-500" />
                      <span>{link.name}</span>
                    </Link>
                  )
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="mailto:vanessa.maria2905@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-xs hover:bg-slate-800 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
)
Navigation.displayName = "Navigation"

export { Navigation }
