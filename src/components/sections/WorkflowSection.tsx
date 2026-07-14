import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Sparkles, Workflow as WorkflowIcon } from 'lucide-react'
import GlassPanel from '../ui/GlassPanel'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  { title: 'Connect', description: 'Integrate your tools and workflows in minutes.', icon: Sparkles },
  { title: 'Automate', description: 'Let FlowOS handle repetitive processes with calm intelligence.', icon: WorkflowIcon },
  { title: 'Scale', description: 'Grow operations with insights that guide every next move.', icon: Cpu },
]

export default function WorkflowSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="How FlowOS works" title="Three movements that turn work into momentum." description="From connection to scale, each step is designed to feel effortless." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <GlassPanel className="p-8" hover>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-400">{step.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
                  Continue <ArrowRight size={16} />
                </div>
              </GlassPanel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
