import { motion } from 'framer-motion'
import { Bell, Bot, Calendar, CheckCircle2, PlayCircle, Sparkles, TrendingUp } from 'lucide-react'
import FloatingOrbScene from '../three/FloatingOrbScene'
import useMouseParallax from '../../hooks/useMouseParallax'
import MagneticButton from '../ui/MagneticButton'
import GlassPanel from '../ui/GlassPanel'

const floatingCards = [
  { label: 'Automation', value: '12 running', icon: Sparkles, position: 'top-4 -left-6', delay: 0 },
  { label: 'AI Assistant', value: 'Ready', icon: Bot, position: 'top-16 -right-4', delay: 0.2 },
  { label: 'Tasks', value: '8 due today', icon: CheckCircle2, position: 'bottom-24 -left-8', delay: 0.4 },
  { label: 'Calendar', value: '3 meetings', icon: Calendar, position: 'bottom-8 -right-6', delay: 0.6 },
  { label: 'Analytics', value: '+14% velocity', icon: TrendingUp, position: 'top-1/2 -right-10', delay: 0.8 },
  { label: 'Alerts', value: '2 new', icon: Bell, position: 'bottom-1/3 left-0', delay: 1 },
]

export default function HeroSection() {
  const { x, y } = useMouseParallax(12)

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
      {/* Light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-px bg-gradient-to-b from-cyan-400/40 to-transparent"
          animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/3 top-0 h-[400px] w-px bg-gradient-to-b from-blue-500/30 to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div style={{ x, y }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-cyan-300"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Premium AI productivity platform
          </motion.div>

          <motion.h1
            className="max-w-3xl font-['Outfit'] text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {['Build smarter.', 'Move faster.', 'Scale with FlowOS.'].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            An intelligent operating system designed to help teams automate workflows, manage products, and build the future — with clarity, motion, and momentum.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <MagneticButton href="/pricing" primary>Start building</MagneticButton>
            <MagneticButton href="/contact">
              <span className="mr-2 inline-flex"><PlayCircle size={16} /></span>
              Watch demo
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { label: 'Automations', value: '120K+' },
              { label: 'Teams', value: '24,500+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-dark-charcoal px-4 py-3"
              >
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[480px] lg:min-h-[560px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-1/2 top-8 z-0 h-48 w-48 -translate-x-1/2 lg:h-56 lg:w-56">
            <FloatingOrbScene className="h-full w-full" />
          </div>

          <GlassPanel className="relative z-10 mx-auto mt-24 max-w-md border-cyan-400/20 p-4 sm:p-5 lg:mt-28">
            <div className="rounded-[1.5rem] border border-white/10 bg-soft-dark-gray p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-500">Momentum Console</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[72, 88, 96].map((h) => (
                  <div key={h} className="rounded-xl border border-white/10 bg-almost-black p-2">
                    <div className="flex items-end gap-0.5">
                      {[40, 60, h].map((bar, j) => (
                        <div key={j} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${bar / 4}px` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-cyan-400/20 bg-dark-charcoal p-3 text-xs text-slate-300">
                <Bot size={12} className="mb-1 inline text-cyan-300" /> AI preparing launch handoff…
              </div>
            </div>
          </GlassPanel>

          {floatingCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                className={`absolute hidden rounded-2xl border border-white/10 bg-almost-black/90 p-3 shadow-2xl backdrop-blur-sm lg:block ${card.position}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
                style={{ animation: `float ${5 + card.delay}s ease-in-out infinite` }}
              >
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-cyan-300" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">{card.label}</p>
                    <p className="text-sm font-medium text-white">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
