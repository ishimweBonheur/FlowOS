import { ArrowRight, Building2, Globe2, GraduationCap, Layers, Rocket, Shield } from 'lucide-react'
import { solutionAudiences } from '../data/home'
import FinalCTASection from '../components/sections/FinalCTASection'
import MagneticButton from '../components/ui/MagneticButton'
import SectionReveal from '../components/ui/SectionReveal'
import SectionTitle from '../components/ui/SectionTitle'

const icons = { rocket: Rocket, building: Building2, layers: Layers, globe: Globe2, shield: Shield, graduation: GraduationCap }

const stories: Record<string, { quote: string; author: string }> = {
  Startups: { quote: 'We went from three tools to one and shipped our MVP in half the time.', author: 'Alex Kim, Founder at NovaLabs' },
  Agencies: { quote: 'Client approvals that used to take days now happen in hours.', author: 'Jordan Lee, Director at PixelForge' },
  'Product Teams': { quote: 'Our sprint velocity increased 22% in the first quarter.', author: 'Sarah Johnson, PM at AtlasAI' },
  'Remote Teams': { quote: 'We cut sync meetings by two-thirds without losing alignment.', author: 'Mina Alvarez, Head of Delivery' },
  Enterprise: { quote: 'SOC 2 compliance was seamless — security team approved in week one.', author: 'Elena Rodriguez, VP Ops at CloudPeak' },
  Education: { quote: 'Student engagement jumped 85% with structured team projects.', author: 'Dr. James Walsh, Stanford Design Lab' },
}

export default function SolutionsPage() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <SectionTitle
            eyebrow="Solutions"
            title="A tailored operating layer for every kind of team."
            description="Whether you are building a startup, a studio, or a global enterprise, FlowOS adapts to your rhythm."
          />
        </SectionReveal>
      </section>

      {solutionAudiences.map((solution, index) => {
        const Icon = icons[solution.illustration as keyof typeof icons] ?? Rocket
        const story = stories[solution.title]
        const variants = ['fadeUp', 'fadeLeft', 'fadeRight', 'zoom', 'blur', 'rotate'] as const
        return (
          <section key={solution.title} className={`py-20 ${index % 2 === 0 ? '' : 'bg-almost-black'}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionReveal variant={variants[index % variants.length]}>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={32} />
                    </div>
                    <h2 className="font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">{solution.title}</h2>
                    <p className="mt-4 text-lg text-slate-400">{solution.description}</p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Pain points we solve</p>
                      <ul className="mt-3 space-y-2">
                        {['Scattered tools and lost context', 'Slow handoffs between teams', 'No single source of truth'].map((p) => (
                          <li key={p} className="text-slate-300">· {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">How FlowOS helps</p>
                      <ul className="mt-3 space-y-2">
                        {solution.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-cyan-300">
                            <ArrowRight size={14} /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-6 text-2xl font-semibold text-white">{solution.metric}</p>
                    <MagneticButton href="/contact" primary className="mt-6">Get started</MagneticButton>
                  </div>
                  <div className="space-y-6">
                    <div className="rounded-[2rem] border border-white/10 bg-dark-charcoal p-8">
                      <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                        <Icon size={64} className="text-cyan-400/30" />
                      </div>
                    </div>
                    {story ? (
                      <div className="rounded-2xl border border-cyan-400/20 bg-almost-black p-6">
                        <p className="text-slate-300">"{story.quote}"</p>
                        <p className="mt-4 text-sm text-slate-500">— {story.author}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>
        )
      })}

      <FinalCTASection />
    </div>
  )
}
