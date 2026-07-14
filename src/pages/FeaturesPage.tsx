import { motion } from 'framer-motion'
import { Bot, Check, Layers3, ShieldCheck, Workflow } from 'lucide-react'
import { features } from '../data/home'
import FinalCTASection from '../components/sections/FinalCTASection'
import MagneticButton from '../components/ui/MagneticButton'
import SectionReveal, { StaggerContainer, StaggerItem } from '../components/ui/SectionReveal'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import TiltCard from '../components/ui/TiltCard'

const pillars = [
  { title: 'AI Assistant', description: 'Transform requests into execution threads with contextual autonomy.', icon: Bot },
  { title: 'Workflow Automation', description: 'Create smart sequences that trigger with zero friction.', icon: Workflow },
  { title: 'Project Intelligence', description: 'Observe every milestone and dependency in real time.', icon: Layers3 },
  { title: 'Secure by design', description: 'From permissions to compliance, protection is built in.', icon: ShieldCheck },
]

const comparison = [
  { feature: 'AI Assistant', flowos: true, others: 'Limited' },
  { feature: 'Visual Workflows', flowos: true, others: 'Add-on' },
  { feature: 'Real-time Analytics', flowos: true, others: true },
  { feature: 'Enterprise SSO', flowos: true, others: 'Enterprise only' },
  { feature: 'Unified Workspace', flowos: true, others: false },
]

const faqs = [
  { q: 'How is FlowOS different from project management tools?', a: 'FlowOS is an operating layer — not just tasks. It unifies planning, automation, collaboration, and analytics.' },
  { q: 'Does FlowOS require coding?', a: 'No. Workflows, automations, and dashboards are built visually with optional API access for developers.' },
  { q: 'Can I migrate from existing tools?', a: 'Yes. Import from Notion, Jira, Asana, and more with guided migration wizards.' },
]

export default function FeaturesPage() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <div className="rounded-[2.5rem] border border-white/10 bg-almost-black p-10 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Features overview</p>
            <h1 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-semibold text-white sm:text-6xl">
              Built to make complexity feel elegant.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              FlowOS combines planning, collaboration, automation, and insight into a single operating layer for ambitious teams.
            </p>
            <div className="mt-8 flex gap-4">
              <MagneticButton href="/pricing" primary>Start free trial</MagneticButton>
              <MagneticButton href="/contact">Book a demo</MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </section>

      {features.map((feature, index) => {
        const Icon = feature.icon
        const variants = ['fadeLeft', 'fadeRight', 'zoom', 'blur', 'rotate', 'fadeUp'] as const
        return (
          <section key={feature.title} className={`py-16 ${index % 2 === 1 ? 'bg-almost-black' : ''}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionReveal variant={variants[index % variants.length]}>
                <div className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={28} />
                    </div>
                    <h2 className="font-['Outfit'] text-3xl font-semibold text-white">{feature.title}</h2>
                    <p className="mt-4 text-lg text-slate-400">{feature.description}</p>
                    <ul className="mt-6 space-y-2">
                      {feature.metrics.map((m) => (
                        <li key={m} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check size={16} className="text-cyan-300" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <TiltCard className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${feature.accent} p-6`}>
                      <div className="rounded-xl border border-white/10 bg-almost-black p-4">
                        <p className="text-xs text-slate-500">Live preview</p>
                        <p className="mt-2 text-white">{feature.preview}</p>
                        <div className="mt-4 flex gap-2">
                          {[60, 80, 70, 95].map((h, i) => (
                            <motion.div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-blue-500" initial={{ height: 0 }} whileInView={{ height: `${h / 2}px` }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </SectionReveal>
            </div>
          </section>
        )
      })}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Feature pillars" title="Designed for clarity at every layer." description="Every experience centers on momentum, abstraction, and visible control." />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <GlassCard className="p-8" hover>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400">{item.description}</p>
                </GlassCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Comparison" title="Why teams switch to FlowOS." description="See how FlowOS stacks up against fragmented tool stacks." align="center" />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-dark-charcoal">
                  <th className="p-4 text-slate-400">Feature</th>
                  <th className="p-4 text-cyan-300">FlowOS</th>
                  <th className="p-4 text-slate-400">Typical stack</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="p-4 text-white">{row.feature}</td>
                    <td className="p-4">{row.flowos === true ? <Check className="text-emerald-400" size={18} /> : row.flowos}</td>
                    <td className="p-4 text-slate-400">{typeof row.others === 'boolean' ? (row.others ? <Check size={18} /> : '—') : row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Common questions about features." description="" />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/10 bg-dark-charcoal p-6">
              <p className="font-medium text-white">{faq.q}</p>
              <p className="mt-2 text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </div>
  )
}
