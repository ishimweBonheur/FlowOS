import { motion } from 'framer-motion'
import { Award, Compass, Eye, HeartHandshake, Sparkles } from 'lucide-react'
import FinalCTASection from '../components/sections/FinalCTASection'
import SectionReveal, { StaggerContainer, StaggerItem } from '../components/ui/SectionReveal'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'

const values = [
  { title: 'Vision', description: 'Create the calm, intelligent infrastructure for next-generation teams.', icon: Eye },
  { title: 'Mission', description: 'Turn complex collaboration into clear momentum and visible progress.', icon: Compass },
  { title: 'Values', description: 'Design for trust, clarity, delight, and sustained growth.', icon: HeartHandshake },
]

const timeline = [
  { year: '2024', title: 'Idea started', description: 'A vision for a calmer operating layer for modern teams.' },
  { year: '2025', title: 'Platform development', description: 'Core workflows, automations, and premium experiences shaped.' },
  { year: '2026', title: 'Global expansion', description: 'FlowOS becomes trusted by ambitious organizations worldwide.' },
  { year: '2027', title: 'AI-native era', description: 'Deep intelligence woven into every workflow and decision surface.' },
]

const team = [
  { name: 'Aria Chen', role: 'CEO & Co-founder', bio: 'Former VP Product at AtlasAI. Obsessed with operational elegance.' },
  { name: 'Marcus Webb', role: 'CTO & Co-founder', bio: 'Built infrastructure at scale for CloudPeak and Vertex.' },
  { name: 'Sofia Reyes', role: 'Head of Design', bio: 'Award-winning product designer. Human-centered systems thinker.' },
  { name: 'David Okonkwo', role: 'Head of Engineering', bio: 'Full-stack leader focused on performance and developer joy.' },
]

const awards = ['Product Hunt #1', 'SaaS Awards 2026', 'Design Excellence', 'Best B2B Platform']

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <div className="rounded-[2.5rem] border border-white/10 bg-almost-black p-10 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About FlowOS</p>
            <h1 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-semibold text-white sm:text-6xl">
              We build the invisible layer behind beautifully organized work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              FlowOS exists to help modern teams move with less friction and more clarity, from the first spark of an idea to the final launch.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <StaggerItem key={v.title}>
                <GlassCard className="p-8" hover>
                  <Icon size={24} className="mb-4 text-cyan-300" />
                  <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-slate-400">{v.description}</p>
                </GlassCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Timeline" title="Our journey so far." description="A story shaped by clarity, craft, and momentum." />
          <div className="mt-12 space-y-6">
            {timeline.map((item, i) => (
              <SectionReveal key={item.year} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.1}>
                <GlassCard className="flex gap-6 p-6" hover>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">{item.year}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-400">{item.description}</p>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Leadership" title="Meet the team." description="Builders, designers, and operators united by one belief: work should flow." />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <GlassCard className="p-6" hover>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold text-slate-950">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-cyan-300">{member.role}</p>
                <p className="mt-2 text-sm text-slate-400">{member.bio}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Culture" title="How we work." description="Remote-first, async-friendly, and deeply intentional about craft." align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {['Future-forward design', 'Human-centered interaction', 'Operational elegance'].map((item, ) => (
              <motion.div key={item} className="rounded-2xl border border-white/10 bg-dark-charcoal p-6 text-center" whileHover={{ y: -4 }}>
                <Sparkles className="mx-auto mb-3 text-cyan-300" size={24} />
                <p className="text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Recognition" title="Awards & milestones." description="" align="center" />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {awards.map((a) => (
            <span key={a} className="flex items-center gap-2 rounded-full border border-white/10 bg-dark-charcoal px-5 py-3 text-sm text-slate-300">
              <Award size={16} className="text-cyan-300" /> {a}
            </span>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </div>
  )
}
