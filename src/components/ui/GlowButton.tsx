import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  className?: string
  primary?: boolean
}

export default function GlowButton({ children, href, className = '', primary = false }: GlowButtonProps) {
  const classes = primary
    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.22)]'
    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'

  const content = (
    <motion.a
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition ${classes} ${className}`}
    >
      {children}
    </motion.a>
  )

  return content
}
