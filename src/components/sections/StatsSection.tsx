import { motion } from 'framer-motion'
import GlassPanel from '../ui/GlassPanel'

const metrics = [
  { value: '50K+', label: 'Users' },
  { value: '120+', label: 'Integrations' },
  { value: '99.9%', label: 'Reliability' },
  { value: '24/7', label: 'Support' },
]

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <GlassPanel className="overflow-hidden border-cyan-400/20 bg-almost-black p-8 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Growth analytics</p>
            <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">Built to scale with remarkable reliability.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-[1.5rem] border border-white/10 bg-soft-dark-gray p-6">
                <p className="text-4xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}
