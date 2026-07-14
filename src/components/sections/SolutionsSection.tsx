import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Sparkles } from 'lucide-react'
import GlassPanel from '../ui/GlassPanel'
import SectionTitle from '../ui/SectionTitle'

const solutions = [
  { title: 'Business Automation', description: 'Automate everyday operations and keep teams aligned with intelligent systems.', icon: Sparkles },
  { title: 'Developer Platform', description: 'Build and manage products in a space designed for speed and precision.', icon: Code2 },
  { title: 'AI Intelligence', description: 'Use smart automations to turn insights into action in real time.', icon: BrainCircuit },
]

export default function SolutionsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="Solutions" title="Tailored for the teams building what comes next." description="From operations to product, FlowOS brings calm intelligence to every motion." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <motion.div key={solution.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <GlassPanel className="p-8" hover>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <p className="mt-3 text-slate-400">{solution.description}</p>
                <button className="mt-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">Explore</button>
              </GlassPanel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
