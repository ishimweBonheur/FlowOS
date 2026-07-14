import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01, rotateX: 2, rotateY: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      className={`glass-panel ${className}`}
    >
      {children}
    </motion.div>
  )
}
