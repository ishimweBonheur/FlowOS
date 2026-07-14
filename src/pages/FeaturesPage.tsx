import { motion } from 'framer-motion'
import { ArrowRight, Bot, BrainCircuit, Layers3, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const pillars = [
  { title: 'AI Assistant', description: 'Transform requests into execution threads with contextual autonomy.', icon: Bot },
  { title: 'Workflow Automation', description: 'Create smart sequences that trigger with zero friction.', icon: Workflow },
  { title: 'Project Intelligence', description: 'Observe every milestone and dependency in real time.', icon: Layers3 },
  { title: 'Secure by design', description: 'From permissions to compliance, protection is built in.', icon: ShieldCheck },
]

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-10 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">Features overview</p>
            <h1 className="font-['Outfit'] text-4xl font-semibold text-white sm:text-5xl">Built to make complexity feel elegant.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">FlowOS combines planning, collaboration, automation, and insight into a single operating layer for ambitious teams.</p>
            <div className="mt-8 flex gap-4">
              <a href="/solutions" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-slate-950">Explore solutions</a>
              <a href="/pricing" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white">See pricing</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Flow intelligence</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Your workspace, supercharged</p>
                </div>
                <div className="rounded-full bg-cyan-400/15 p-3 text-cyan-300">
                  <BrainCircuit size={20} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {['Context aware', 'Live automations', 'Smart sync', 'Premium metrics'].map((label) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{label}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Feature pillars" title="Designed for clarity at every layer." description="Every experience centers on momentum, abstraction, and visible control." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <GlassCard key={item.title} className="p-8" hover>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
                  <Sparkles size={16} />
                  Premium capability {index + 1}
                </div>
              </GlassCard>
            )
          })}
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-10 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Benefits</p>
            <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white">A single source of truth for fast-moving teams.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Unified planning', 'Instant visibility', 'Adaptive automations', 'Enterprise-grade governance'].map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">{benefit}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Ready to launch</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">See how FlowOS fits your team.</h3>
        </div>
        <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-medium text-slate-950">
          Book a demo <ArrowRight size={16} />
        </a>
      </section>
    </div>
  )
}
