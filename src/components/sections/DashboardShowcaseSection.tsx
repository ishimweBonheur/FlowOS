import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, User } from 'lucide-react'
import { useRef } from 'react'
import SectionReveal from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'

const floatingElements = [
  { label: 'Revenue', value: '$2.4M', position: 'top-8 -right-4', delay: 0 },
  { label: 'Active users', value: '12.8K', position: 'top-1/3 -left-6', delay: 0.2 },
  { label: 'Comments', value: '847', icon: MessageCircle, position: 'bottom-1/4 -right-8', delay: 0.4 },
  { label: 'Team online', value: '24', icon: User, position: 'bottom-8 left-4', delay: 0.6 },
]

export default function DashboardShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98])

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal variant="blur">
          <SectionTitle
            eyebrow="Product showcase"
            title="A living command center for modern teams."
            description="Built to feel cinematic while staying clear, intuitive, and fast — your entire operation in one immersive view."
            align="center"
          />
        </SectionReveal>

        <motion.div style={{ rotate, scale }} className="relative mx-auto mt-16 max-w-4xl">
          <TiltCard intensity={6}>
            <div className="overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-almost-black p-4 shadow-[0_0_100px_rgba(34,211,238,0.1)] sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-sm text-slate-500">FlowOS Dashboard</span>
              </div>
              <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-dark-charcoal p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">Tasks</p>
                    {['Review Q3 roadmap', 'Approve design system', 'Ship v2.4 release'].map((task, i) => (
                      <div key={task} className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                        <div className={`h-4 w-4 rounded border ${i < 2 ? 'border-cyan-400 bg-cyan-400/20' : 'border-white/20'}`} />
                        {task}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-dark-charcoal p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">Progress</p>
                    <div className="mt-3 space-y-2">
                      {[{ label: 'Engineering', pct: 78 }, { label: 'Design', pct: 92 }, { label: 'Marketing', pct: 64 }].map((p) => (
                        <div key={p.label}>
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>{p.label}</span>
                            <span>{p.pct}%</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-soft-dark-gray">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${p.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Analytics</p>
                  <div className="mt-4 flex items-end gap-2">
                    {[45, 62, 58, 78, 85, 92, 88, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-blue-500"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}px` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-almost-black p-3 text-center">
                      <p className="text-lg font-semibold text-white">+14%</p>
                      <p className="text-[10px] text-slate-500">Velocity</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-almost-black p-3 text-center">
                      <p className="text-lg font-semibold text-emerald-300">99.2%</p>
                      <p className="text-[10px] text-slate-500">Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {floatingElements.map((el) => {
            const Icon = el.icon
            return (
              <motion.div
                key={el.label}
                className={`absolute hidden rounded-2xl border border-white/10 bg-almost-black/95 p-3 shadow-xl lg:block ${el.position}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: el.delay }}
                style={{ animation: `float ${4 + el.delay}s ease-in-out infinite` }}
              >
                {Icon ? <Icon size={14} className="mb-1 text-cyan-300" /> : null}
                <p className="text-[10px] text-slate-500">{el.label}</p>
                <p className="text-sm font-semibold text-white">{el.value}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
