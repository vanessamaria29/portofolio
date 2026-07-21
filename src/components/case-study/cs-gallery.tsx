import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/animations/reveal"
import { ImageContainer } from "@/components/shared/image-container"
import { cn } from "@/lib/utils"

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  span?: 1 | 2 // How many columns to span in a 2-col grid
}

export interface CSGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  images: GalleryImage[]
}

export function CSGallery({ title, images, className, ...props }: CSGalleryProps) {
  return (
    <Section className={cn("py-12 md:py-16", className)} {...props}>
      <Container>
        {title && (
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-8 max-w-3xl">
              {title}
            </h3>
          </Reveal>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {images.map((img, index) => (
            <Reveal 
              key={index} 
              delay={index * 0.1}
              className={cn(img.span === 2 ? "md:col-span-2" : "col-span-1")}
            >
              <figure className="flex flex-col gap-3 h-full">
                <ImageContainer 
                  src={img.src} 
                  alt={img.alt} 
                  aspectRatio="auto"
                  className="rounded-lg border border-border bg-surface-secondary shadow-sm"
                />
                {img.caption && (
                  <figcaption className="text-sm text-text-tertiary text-center">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
