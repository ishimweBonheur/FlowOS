import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, GitBranch, Link2, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { integrations } from '../../data/home'
import SectionReveal from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    id: 'connect',
    title: 'Connect',
    subtitle: 'Integrate your stack in minutes',
    description: 'Plug FlowOS into the tools your team already loves. One unified layer, zero disruption.',
    icon: Link2,
    color: 'from-cyan-500/20 to-blue-500/20',
    content: (
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {integrations.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-almost-black p-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, borderColor: 'rgba(34,211,238,0.3)' }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft-dark-gray text-xs font-bold" style={{ color: tool.color }}>
              {tool.name[0]}
            </div>
            <span className="text-[10px] text-slate-400">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 'automate',
    title: 'Automate',
    subtitle: 'Build intelligent workflows',
    description: 'Visual workflow builder with AI decisions, conditions, triggers, and actions — no code required.',
    icon: Zap,
    color: 'from-violet-500/20 to-cyan-500/20',
    content: (
      <div className="mt-6 space-y-3">
        {[
          { label: 'Trigger', value: 'New task in Sprint Board', color: 'border-emerald-400/30' },
          { label: 'Condition', value: 'Priority = High AND Assignee empty', color: 'border-amber-400/30' },
          { label: 'AI Decision', value: 'Suggest best assignee based on workload', color: 'border-cyan-400/30' },
          { label: 'Action', value: 'Notify team · Create calendar block', color: 'border-blue-400/30' },
        ].map((node, i) => (
          <motion.div
            key={node.label}
            className={`flex items-center gap-3 rounded-xl border ${node.color} bg-almost-black p-3`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GitBranch size={16} className="shrink-0 text-cyan-300" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500">{node.label}</p>
              <p className="text-sm text-slate-300">{node.value}</p>
            </div>
            {i < 3 ? <ArrowRight size={14} className="ml-auto text-slate-600" /> : null}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 'scale',
    title: 'Scale',
    subtitle: 'Grow with confidence',
    description: 'Real-time analytics, growth charts, and KPIs that guide every strategic decision.',
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-cyan-500/20',
    content: (
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          { label: 'Revenue', value: '$4.2M', change: '+18%', icon: BarChart3 },
          { label: 'Performance', value: '99.2%', change: '+2.1%', icon: Sparkles },
        ].map((kpi, i) => {
          const Icon = kpi.icon
          return (
            <motion.div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-almost-black p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center justify-between">
                <Icon size={18} className="text-cyan-300" />
                <span className="text-sm text-emerald-300">{kpi.change}</span>
              </div>
              <p className="mt-2 text-2xl font-semibold text-white">{kpi.value}</p>
              <p className="text-xs text-slate-500">{kpi.label}</p>
              <div className="mt-3 flex items-end gap-1">
                {[40, 55, 48, 72, 68, 85, 92].map((h, j) => (
                  <div key={j} className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/60 to-cyan-500/60" style={{ height: `${h / 3}px` }} />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section className="border-y border-white/10 bg-almost-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal variant="fadeUp">
          <SectionTitle
            eyebrow="How FlowOS works"
            title="Connect. Automate. Scale."
            description="Three movements that turn work into momentum — from integration to intelligence to growth."
          />
        </SectionReveal>

        <div className="mt-16 space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const variants = ['fadeLeft', 'fadeRight', 'zoom'] as const
            return (
              <SectionReveal key={step.id} variant={variants[index % 3]} delay={index * 0.1}>
                <div className={`overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${step.color} p-8 lg:p-10`}>
                  <div className="flex flex-wrap items-start gap-6 lg:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-almost-black text-cyan-300">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">0{index + 1} · {step.title}</p>
                      <h3 className="mt-2 font-['Outfit'] text-2xl font-semibold text-white sm:text-3xl">{step.subtitle}</h3>
                      <p className="mt-2 max-w-2xl text-slate-400">{step.description}</p>
                    </div>
                  </div>
                  {step.content}
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
