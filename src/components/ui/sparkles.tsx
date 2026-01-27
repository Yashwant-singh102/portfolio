"use client"

import React, { useId } from "react"
import { motion } from "framer-motion"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export function SparklesCore(props: SparklesProps) {
  const {
    id,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    className = "",
    particleColor = "#FFF",
  } = props
  const generateId = useId()
  const sparkleId = id || generateId

  return (
    <div className={className}>
      <svg
        className="animate-pulse"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#clip-${sparkleId})`}>
          <g transform="translate(200,200)">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 400 - 200}
                cy={Math.random() * 400 - 200}
                r={Math.random() * (maxSize - minSize) + minSize}
                fill={particleColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </g>
        </g>
        <defs>
          <clipPath id={`clip-${sparkleId}`}>
            <rect width="100%" height="100%" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}