import { motion } from 'framer-motion'
import { Compass, Eye, HeartHandshake, Sparkles } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const values = [
  { title: 'Vision', description: 'Create the calm, intelligent infrastructure for next-generation teams.', icon: Eye },
  { title: 'Mission', description: 'Turn complex collaboration into clear momentum and visible progress.', icon: Compass },
  { title: 'Values', description: 'Design for trust, clarity, delight, and sustained growth.', icon: HeartHandshake },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-almost-black p-10 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About FlowOS</p>
            <h1 className="mt-4 font-['Outfit'] text-4xl font-semibold text-white sm:text-5xl">We build the invisible layer behind beautifully organized work.</h1>
            <p className="mt-6 text-lg text-slate-400">FlowOS exists to help modern teams move with less friction and more clarity, from the first spark of an idea to the final launch.</p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <div className="flex items-center gap-3 text-cyan-300">
              <Sparkles size={18} />
              <span className="text-sm uppercase tracking-[0.3em]">Crafted with intent</span>
            </div>
            <div className="mt-6 space-y-3 text-slate-300">
              {['Future-forward product design', 'Human-centered interaction', 'Operational elegance'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-dark-charcoal p-4">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Principles" title="A company built around clarity, trust, and momentum." description="The way we design is as important as what we build." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <GlassCard key={value.title} className="p-8" hover>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-slate-400">{value.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </section>
    </div>
  )
}
