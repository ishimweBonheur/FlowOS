import { motion } from 'framer-motion'
import { Blocks, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import GlassPanel from '../ui/GlassPanel'
import SectionTitle from '../ui/SectionTitle'

const benefits = [
  { title: 'Powerful Automation', description: 'Remove noise and let the platform handle the repetitive work.', icon: Sparkles },
  { title: 'Real-time Insights', description: 'Monitor operations with live signals that help teams move with confidence.', icon: Gauge },
  { title: 'Scalable Infrastructure', description: 'Grow across teams and regions without compromising clarity.', icon: Blocks },
  { title: 'Developer Friendly', description: 'Work with a system that feels fast, modular, and pleasant to build on.', icon: ShieldCheck },
]

export default function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="Why choose FlowOS" title="Built for teams that want to move with intention." description="Every surface is shaped to reduce friction and elevate momentum." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div key={benefit.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <GlassPanel className="p-8" hover>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-slate-400">{benefit.description}</p>
              </GlassPanel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
