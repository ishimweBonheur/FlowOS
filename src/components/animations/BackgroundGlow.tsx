import { motion } from 'framer-motion'

interface BackgroundGlowProps {
  className?: string
}

export default function BackgroundGlow({ className = '' }: BackgroundGlowProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[140px]"
        animate={{ scale: [1, 1.12, 0.96, 1.08, 1], opacity: [0.7, 1, 0.75, 0.95, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-5%] top-[15%] h-96 w-96 rounded-full bg-emerald-400/15 blur-[160px]"
        animate={{ scale: [1, 0.92, 1.1, 1, 1], opacity: [0.6, 0.85, 0.65, 0.8, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]"
        animate={{ scale: [1, 1.08, 0.94, 1.05, 1], opacity: [0.65, 0.9, 0.7, 0.85, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
    </div>
  )
}
