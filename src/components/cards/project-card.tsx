import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./card"
import { Badge } from "../ui/badge"
import { ImageContainer } from "../shared/image-container"

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  href?: string
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, title, description, imageSrc, tags, href, ...props }, ref) => {
    
    const Wrapper = href ? "a" : "div"
    
    return (
      <Card ref={ref} interactive className={cn("group overflow-hidden", className)} {...props}>
        <Wrapper href={href} className="flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-md">
          <div className="p-4 pb-0">
            <ImageContainer src={imageSrc} alt={title} aspectRatio="video" className="rounded-xs" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl group-hover:text-accent-primary transition-colors">{title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-2">{description}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </CardContent>
        </Wrapper>
      </Card>
    )
  }
)
ProjectCard.displayName = "ProjectCard"

export { ProjectCard }
