"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGridProps {
  className?: string
  children: React.ReactNode
}

export function AnimatedGrid({ className, children }: AnimatedGridProps) {
  return (
    <motion.div
      className={cn("grid gap-6", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export function AnimatedCard({ className, children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm p-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  )
}