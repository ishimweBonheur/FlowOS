import { motion, type TargetAndTransition, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoom' | 'rotate' | 'blur'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const variants: Record<RevealVariant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  fadeUp: { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -48 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: -48 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: 48 }, animate: { opacity: 1, x: 0 } },
  zoom: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  rotate: { initial: { opacity: 0, rotate: -4, y: 24 }, animate: { opacity: 1, rotate: 0, y: 0 } },
  blur: { initial: { opacity: 0, filter: 'blur(12px)', y: 20 }, animate: { opacity: 1, filter: 'blur(0px)', y: 0 } },
}

export default function SectionReveal({ children, className = '', delay = 0, variant = 'fadeUp' }: SectionRevealProps) {
  const v = variants[variant]
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerVariants} className={className}>
      {children}
    </motion.div>
  )
}
