import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function CursorGlow() {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[55] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-cyan-400/10 mix-blend-screen md:block"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        left: 'var(--cursor-x, -100px)',
        top: 'var(--cursor-y, -100px)',
      }}
    />
  )
}
