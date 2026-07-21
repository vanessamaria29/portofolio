import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {}

export function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

export interface PaginationContentProps extends React.HTMLAttributes<HTMLUListElement> {}

export function PaginationContent({ className, ...props }: PaginationContentProps) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

export interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export function PaginationItem({ className, ...props }: PaginationItemProps) {
  return (
    <li className={cn("", className)} {...props} />
  )
}

export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
  size?: "sm" | "md" | "lg"
}

export function PaginationLink({
  className,
  isActive,
  size = "md",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4 py-2",
        size === "lg" && "h-12 px-8 text-lg",
        isActive 
          ? "border border-border bg-surface-secondary text-text-primary" 
          : "bg-transparent hover:bg-surface-secondary text-text-primary",
        className
      )}
      {...props}
    />
  )
}
