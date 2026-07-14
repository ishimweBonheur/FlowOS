import { motion } from 'framer-motion'
import { BarChart3, Bot, Layers3, MessageSquareText, ShieldCheck, Zap } from 'lucide-react'
import FAQSection from '../components/sections/FAQSection'
import FinalCTASection from '../components/sections/FinalCTASection'
import HeroSection from '../components/sections/HeroSection'
import ShowcaseSection from '../components/sections/ShowcaseSection'
import SolutionsSection from '../components/sections/SolutionsSection'
import StatsSection from '../components/sections/StatsSection'
import StorySection from '../components/sections/StorySection'
import WorkflowSection from '../components/sections/WorkflowSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const logos = ['NovaLabs', 'CloudPeak', 'PixelForge', 'QuantumTech', 'AtlasAI', 'Vertex', 'BlueOcean', 'SkyScale']
const features = [
  { icon: Bot, title: 'AI Assistant', description: 'Turn requests into actions across your workspace with intelligent copilots.', accent: 'from-cyan-500/20 to-blue-500/20' },
  { icon: Zap, title: 'Workflow Automation', description: 'Automate handoffs, approvals, and reminders with elegant flows.', accent: 'from-violet-500/20 to-cyan-500/20' },
  { icon: Layers3, title: 'Project Tracking', description: 'Keep every sprint, milestone, and launch visible in one motion-rich board.', accent: 'from-emerald-500/20 to-cyan-500/20' },
  { icon: MessageSquareText, title: 'Real-Time Collaboration', description: 'Bring designers, developers, and stakeholders into one shared rhythm.', accent: 'from-blue-500/20 to-slate-500/20' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Understand performance at a glance with immersive reporting.', accent: 'from-fuchsia-500/20 to-cyan-500/20' },
  { icon: ShieldCheck, title: 'Enterprise Security', description: 'Protect every workspace with role-based governance and audits.', accent: 'from-amber-500/20 to-emerald-500/20' },
]

const testimonials = [
  {
    quote: 'FlowOS transformed the way our team collaborates. The experience feels effortless and strikingly premium.',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'NovaLabs',
  },
  {
    quote: 'Our team stopped managing chaos and started moving with intention. It feels like a true operating system.',
    name: 'Mina Alvarez',
    role: 'Head of Delivery',
    company: 'AtlasAI',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="border-y border-white/10 bg-slate-950/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-slate-400 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trusted by ambitious teams</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-semibold tracking-[0.25em] text-slate-300">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Features" title="Everything your team needs, in one flow." description="Premium orchestration that turns complexity into momentum." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }}>
                <GlassCard className={`h-full p-6 bg-gradient-to-br ${feature.accent}`} hover>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </section>

      <ShowcaseSection />
      <WorkflowSection />
      <SolutionsSection />
      <WhyChooseSection />
      <StorySection />
      <StatsSection />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="Trusted by teams building the future." description="The kind of experience that feels as good as it performs." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="p-8">
              <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold text-slate-950">
                  {item.name.split(' ').map((name) => name[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role} • {item.company}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <FAQSection />
      <FinalCTASection />
    </div>
  )
}
