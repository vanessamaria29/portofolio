import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import { ArrowUpRight } from "lucide-react"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn("border-t border-border bg-surface-secondary py-16 md:py-24", className)}
        {...props}
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Left: Brand Statement */}
            <div className="md:col-span-12 lg:col-span-5 flex flex-col pr-8">
              <span className="font-heading text-2xl font-black tracking-tight text-text-primary mb-4">
                Vanessa.
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-primary mb-4">
                Aspiring Product Manager
              </span>
              <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                An Informatics student driven by curiosity. I believe the best products are built at the intersection of deep user empathy, beautiful design, and robust engineering. 
              </p>
            </div>
            
            {/* Center: Navigation */}
            <div className="md:col-span-6 lg:col-span-3 flex flex-col">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-6">Navigation</h4>
              <nav className="flex flex-col gap-4">
                <a href="/about" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium">About Me</a>

                <a href="/#experience" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium">Experience</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium flex items-center">
                  Resume
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </nav>
            </div>

            {/* Right: Social Links */}
            <div className="md:col-span-6 lg:col-span-4 flex flex-col">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-6">Connect</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium flex items-center">
                  LinkedIn <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium flex items-center">
                  GitHub <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
                <a href="mailto:vanessa@example.com" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium flex items-center">
                  Email <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-primary transition-colors font-medium flex items-center">
                  Dribbble <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-text-tertiary max-w-6xl mx-auto">
            <p>Designed and developed by Vanessa.</p>
            <p className="text-center md:text-right">
              Built with Next.js & Tailwind CSS. Hosted on Vercel.
            </p>
          </div>
        </Container>
      </footer>
    )
  }
)
Footer.displayName = "Footer"

export { Footer }
