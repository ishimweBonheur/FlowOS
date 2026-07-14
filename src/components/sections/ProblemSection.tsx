import { motion } from 'framer-motion'
import { problems } from '../../data/home'
import SectionReveal, { StaggerContainer, StaggerItem } from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionReveal variant="fadeUp">
        <SectionTitle
          eyebrow="The problem"
          title="Seven structural failures slowing modern teams."
          description="FlowOS targets the systemic friction that costs organizations clarity, speed, and wellbeing — not just individual inconveniences."
        />
      </SectionReveal>

      <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem, index) => {
          const Icon = problem.icon
          return (
            <StaggerItem key={problem.id}>
              <TiltCard intensity={8}>
                <motion.div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${problem.color} p-6`}
                  whileHover={{ borderColor: 'rgba(34,211,238,0.3)' }}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-almost-black text-cyan-300">
                        <Icon size={22} />
                      </div>
                      <div className="text-right">
                        <p className="font-['Outfit'] text-2xl font-bold text-white">{problem.stat}</p>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">{problem.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{problem.description}</p>
                    <motion.div
                      className="mt-4 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full"
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  {/* Mini illustration */}
                  <svg className="absolute bottom-4 right-4 h-16 w-16 opacity-20" viewBox="0 0 64 64" aria-hidden="true">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
                    <motion.circle
                      cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400"
                      animate={{ r: [16, 20, 16] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </svg>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
