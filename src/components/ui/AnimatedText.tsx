import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
}

export default function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className={className}>
      {children}
    </motion.div>
  )
}
