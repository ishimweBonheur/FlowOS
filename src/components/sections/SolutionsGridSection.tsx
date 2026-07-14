import { ArrowRight, Building2, Globe2, GraduationCap, Layers, Rocket, Shield } from 'lucide-react'
import { solutionAudiences } from '../../data/home'
import MagneticButton from '../ui/MagneticButton'
import SectionReveal, { StaggerContainer, StaggerItem } from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'

const icons = { rocket: Rocket, building: Building2, layers: Layers, globe: Globe2, shield: Shield, graduation: GraduationCap }

export default function SolutionsGridSection() {
  return (
    <section className="border-y border-white/10 bg-almost-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal variant="fadeLeft">
          <SectionTitle
            eyebrow="Solutions"
            title="A tailored operating layer for every kind of team."
            description="Whether you are building a startup, a studio, or a global enterprise, FlowOS adapts to your rhythm."
          />
        </SectionReveal>

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutionAudiences.map((solution, index) => {
            const Icon = icons[solution.illustration as keyof typeof icons] ?? Rocket
            const isEven = index % 2 === 0
            return (
              <StaggerItem key={solution.title}>
                <TiltCard>
                  <div className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-dark-charcoal p-8 transition hover:border-cyan-400/20 lg:flex-row lg:gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-['Outfit'] text-2xl font-semibold text-white">{solution.title}</h3>
                      <p className="mt-3 text-slate-400">{solution.description}</p>
                      <ul className="mt-4 space-y-2">
                        {solution.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="h-1 w-1 rounded-full bg-cyan-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm font-medium text-cyan-300">{solution.metric}</p>
                      <MagneticButton href="/solutions" className="mt-6 !px-4 !py-2 text-sm">
                        Explore <ArrowRight size={14} className="ml-1 inline" />
                      </MagneticButton>
                    </div>
                    <div className="mt-6 flex items-center justify-center lg:mt-0 lg:w-40">
                      <div className="relative h-32 w-32 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
                        <Icon size={48} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400/40" />
                        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
