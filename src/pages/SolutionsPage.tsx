import { ArrowRight, Building2, GraduationCap, Rocket, Users2 } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const solutions = [
  { title: 'Startups', description: 'Move from concept to momentum with lightweight, fast-moving systems.', icon: Rocket },
  { title: 'Agencies', description: 'Coordinate delivery, approvals, and client feedback without friction.', icon: Building2 },
  { title: 'Remote Teams', description: 'Build calm collaboration rituals across distributed work.', icon: Users2 },
  { title: 'Education', description: 'Create learning moments that feel structured, visible, and inspiring.', icon: GraduationCap },
]

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-10 lg:p-16">
        <SectionTitle eyebrow="Solutions" title="A tailored operating layer for every kind of team." description="Whether you are building a startup, a studio, or a global enterprise, FlowOS adapts to your rhythm." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <GlassCard key={solution.title} className="p-8" hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <p className="mt-3 text-slate-400">{solution.description}</p>
                <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Learn more <ArrowRight size={16} />
                </a>
              </GlassCard>
            )
          })}
        </div>
      </section>
    </div>
  )
}
