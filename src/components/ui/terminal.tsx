"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalProps {
  className?: string
}

export function Terminal({ className }: TerminalProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState("")
  
  const commands = [
    { command: "whoami", output: "tosif-raza" },
    { command: "cat skills.txt", output: "React Native, Next.js, Node.js, GraphQL, WebRTC, AI/ML, Web3" },
    { command: "ls projects/", output: "ai-trading-bot/  web3-social/  video-collab/  fitness-app/" },
    { command: "cat achievements.txt", output: "🏆 10+ Hackathon Wins\n🚀 50+ Projects Built\n👥 25+ Happy Clients" },
    { command: "echo $LOCATION", output: "Jodhpur, Rajasthan, India (Remote Available)" },
    { command: "git status", output: "On branch main\nYour branch is up to date with 'origin/main'.\nnothing to commit, working tree clean" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < commands.length) {
        const command = commands[currentLine]
        setDisplayText(prev => prev + `$ ${command.command}\n${command.output}\n\n`)
        setCurrentLine(prev => prev + 1)
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [currentLine])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm">tosif@portfolio:~</span>
      </div>
      <div className="p-4 font-mono text-sm text-green-400 h-64 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{displayText}</pre>
        <span className="animate-pulse">█</span>
      </div>
    </motion.div>
  )
}