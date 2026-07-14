import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'beam' | 'dots'
}

export default function SectionDivider({ variant = 'beam' }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className="flex justify-center gap-2 py-8" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="h-1 w-1 rounded-full bg-cyan-400/50"
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className="relative h-px w-full overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8" aria-hidden="true">
      <div className="relative h-px bg-white/5">
        <motion.div
          className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4], width: ['20%', '40%', '20%'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  )
}
