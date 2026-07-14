import { motion } from 'framer-motion'

export default function LoadingScreen({ done }: { done: boolean }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-black"
      initial={false}
      animate={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-almost-black"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-2 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
        <span className="font-['Outfit'] text-xl font-bold tracking-[0.2em] text-cyan-300">F</span>
      </motion.div>
      <motion.p
        className="mt-8 font-['Outfit'] text-sm uppercase tracking-[0.5em] text-slate-400"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        FlowOS
      </motion.p>
      <motion.div className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-soft-dark-gray">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: '0%' }}
          animate={{ width: done ? '100%' : '85%' }}
          transition={{ duration: done ? 0.3 : 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
