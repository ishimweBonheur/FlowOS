import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'
import SectionReveal, { StaggerContainer, StaggerItem } from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import GlassPanel from '../ui/GlassPanel'

const metrics = [
  { label: 'Active users', value: 24500, suffix: '+', ring: 92 },
  { label: 'Automations run', value: 120000, suffix: '+', ring: 88 },
  { label: 'Projects managed', value: 8900, suffix: '+', ring: 76 },
  { label: 'Uptime SLA', value: 99, suffix: '.9%', ring: 99 },
]

function ProgressRing({ pct }: { pct: number }) {
  const circumference = 2 * Math.PI * 36
  return (
    <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
      <motion.circle
        cx="40" cy="40" r="36" fill="none" stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference - (pct / 100) * circumference }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionReveal variant="rotate">
        <SectionTitle
          eyebrow="By the numbers"
          title="Momentum you can measure."
          description="Real impact across teams, automations, and delivery — the metrics that matter."
          align="center"
        />
      </SectionReveal>

      <StaggerContainer className="mt-14">
        <GlassPanel className="overflow-hidden border-cyan-400/20 bg-almost-black p-8 lg:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-dark-charcoal p-6 text-center">
                  <ProgressRing pct={metric.ring} />
                  <p className="mt-2 font-['Outfit'] text-3xl font-bold text-white">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { label: 'Q1', values: [60, 72, 68, 85] },
              { label: 'Q2', values: [70, 78, 82, 90] },
              { label: 'Q3', values: [80, 88, 92, 96] },
            ].map((q) => (
              <div key={q.label} className="rounded-2xl border border-white/10 bg-soft-dark-gray p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">{q.label} Growth</p>
                <div className="mt-3 flex items-end gap-2">
                  {q.values.map((v, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-blue-500"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${v}px` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.6 }}
                      style={{ maxHeight: '96px' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </StaggerContainer>
    </section>
  )
}
