import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./card"
import { ImageContainer } from "../shared/image-container"
import { ArrowRight } from "lucide-react"

export interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  imageSrc: string
  category: string
  href?: string
}

const CaseStudyCard = React.forwardRef<HTMLDivElement, CaseStudyCardProps>(
  ({ className, title, description, imageSrc, category, href, ...props }, ref) => {
    
    const Wrapper = href ? "a" : "div"
    
    return (
      <Card ref={ref} interactive className={cn("group overflow-hidden bg-surface", className)} {...props}>
        <Wrapper href={href} className="flex flex-col md:flex-row h-full outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md">
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-primary mb-4">
              {category}
            </span>
            <CardTitle className="text-2xl md:text-3xl lg:text-4xl group-hover:text-accent-primary transition-colors mb-4 leading-tight">
              {title}
            </CardTitle>
            <CardDescription className="text-base md:text-lg mb-8 line-clamp-3">
              {description}
            </CardDescription>
            <div className="mt-auto inline-flex items-center text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-6 pl-4 md:pl-0">
            <ImageContainer src={imageSrc} alt={title} aspectRatio="auto" className="h-full min-h-[300px] w-full object-cover rounded-sm" />
          </div>
        </Wrapper>
      </Card>
    )
  }
)
CaseStudyCard.displayName = "CaseStudyCard"

export { CaseStudyCard }
