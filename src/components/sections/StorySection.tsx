import { motion } from 'framer-motion'
import GlassPanel from '../ui/GlassPanel'

const timeline = [
  { year: '2024', title: 'Idea started', description: 'A vision for a calmer operating layer for modern teams.' },
  { year: '2025', title: 'Platform development', description: 'Core workflows, automations, and premium product experiences were shaped.' },
  { year: '2026', title: 'Global expansion', description: 'FlowOS became a trusted platform for ambitious organizations worldwide.' },
]

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2.5rem] border border-white/10 bg-almost-black p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Our journey</p>
          <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">A story shaped by clarity, craft, and momentum.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <GlassPanel className="p-8">
            <p className="text-lg leading-8 text-slate-300">FlowOS began with a simple question: what if modern teams could operate from a truly elegant system that felt as good as it worked?</p>
            <p className="mt-4 text-slate-400">Today, that vision continues into every product surface, interaction, and workflow the platform enables.</p>
          </GlassPanel>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
                <GlassPanel className="p-6" hover>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300">{item.year}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
