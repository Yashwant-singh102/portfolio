"use client"

import { cn } from "@/lib/utils"

export function GridBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div className="absolute inset-0 bg-black bg-grid-white/[0.05]" />
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  )
}

export function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div className="absolute inset-0 bg-black bg-dot-white/[0.2]" />
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  )
}