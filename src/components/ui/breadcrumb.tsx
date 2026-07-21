import * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex text-sm text-text-secondary", className)}
      {...props}
    />
  )
}

export interface BreadcrumbListProps extends React.OlHTMLAttributes<HTMLOListElement> {}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn("flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5", className)}
      {...props}
    />
  )
}

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrentPage?: boolean
}

export function BreadcrumbLink({ className, isCurrentPage, ...props }: BreadcrumbLinkProps) {
  return (
    <a
      aria-current={isCurrentPage ? "page" : undefined}
      className={cn(
        "transition-colors hover:text-text-primary",
        isCurrentPage ? "font-normal text-text-primary" : "",
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbSeparator({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("opacity-50", className)}
      {...props}
    >
      /
    </span>
  )
}
