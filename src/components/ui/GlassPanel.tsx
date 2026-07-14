import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassPanel({ children, className = '', hover = false }: GlassPanelProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark-charcoal shadow-[0_20px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
