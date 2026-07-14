import { motion } from 'framer-motion'
import GlassPanel from '../ui/GlassPanel'
import SectionTitle from '../ui/SectionTitle'

const metrics = [
  { label: 'Users', value: '24,500+' },
  { label: 'Automations', value: '120K+' },
  { label: 'Projects', value: '8,900+' },
]

export default function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Product showcase" title="A living command center for modern teams." description="Built to feel cinematic while staying clear, intuitive, and fast." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-dark-charcoal p-4 text-center">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} className="[perspective:1200px]">
          <GlassPanel className="border-cyan-400/20 bg-almost-black p-4 sm:p-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-dark-charcoal p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-soft-dark-gray p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI assistant</p>
                    <p className="mt-2 text-xl font-semibold text-white">Summarize launch</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-soft-dark-gray p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Workflow</p>
                    <p className="mt-2 text-xl font-semibold text-white">3 stages active</p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-almost-black p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Pulse</p>
                      <span className="text-sm text-emerald-300">+14%</span>
                    </div>
                    <div className="flex items-end gap-3">
                      {[36, 60, 72, 88, 96].map((height) => (
                        <div key={height} className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${height}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  )
}
