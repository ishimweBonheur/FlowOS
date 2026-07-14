import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import useMagnetic from '../../hooks/useMagnetic'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  className?: string
  primary?: boolean
  onClick?: () => void
}

export default function MagneticButton({ children, href, className = '', primary = false, onClick }: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.28)
  const reduced = usePrefersReducedMotion()

  const classes = primary
    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.25)] hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]'
    : 'border border-white/10 bg-soft-dark-gray text-white hover:border-cyan-400/30 hover:bg-dark-charcoal'

  const shared = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-300 ${classes} ${className}`

  const ripple = (
    <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-active:scale-150 group-active:opacity-0" />
  )

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={reduced ? undefined : onMouseMove}
        onMouseLeave={reduced ? undefined : onMouseLeave}
        whileHover={reduced ? undefined : { scale: 1.03 }}
        whileTap={reduced ? undefined : { scale: 0.97 }}
        className={shared}
        style={{ transition: 'transform 0.2s ease-out' }}
      >
        {ripple}
        <span className="relative z-10">{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={reduced ? undefined : onMouseMove}
      onMouseLeave={reduced ? undefined : onMouseLeave}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={shared}
      style={{ transition: 'transform 0.2s ease-out' }}
    >
      {ripple}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
