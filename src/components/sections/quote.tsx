import * as React from "react"
import { cn } from "@/lib/utils"
import { Quote as QuoteIcon } from "lucide-react"

export interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  text: string
  author?: string
  role?: string
}

const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, text, author, role, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          "relative border-l-4 border-accent-primary pl-6 py-2 my-8",
          className
        )}
        {...props}
      >
        <QuoteIcon className="absolute -left-3 -top-3 h-8 w-8 text-surface-secondary bg-background rounded-full p-1 border-2 border-background" />
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-text-primary italic mb-4">
          "{text}"
        </p>
        {(author || role) && (
          <footer className="flex flex-col gap-0.5">
            {author && <strong className="font-semibold text-text-primary">{author}</strong>}
            {role && <span className="text-sm text-text-secondary">{role}</span>}
          </footer>
        )}
      </blockquote>
    )
  }
)
Quote.displayName = "Quote"

export { Quote }
