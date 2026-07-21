import * as React from "react"
import { cn } from "@/lib/utils"

export interface ImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  aspectRatio?: "video" | "square" | "portrait" | "auto"
}

const ImageContainer = React.forwardRef<HTMLDivElement, ImageContainerProps>(
  ({ className, src, alt, aspectRatio = "video", ...props }, ref) => {
    
    const aspectRatios = {
      video: "aspect-video",
      square: "aspect-square",
      portrait: "aspect-[3/4]",
      auto: "aspect-auto",
    }

    return (
      <div
        ref={ref}
        className={cn("overflow-hidden rounded-sm bg-surface-secondary", aspectRatios[aspectRatio], className)}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    )
  }
)
ImageContainer.displayName = "ImageContainer"

export { ImageContainer }
