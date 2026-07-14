import { motion } from 'framer-motion'
import { features } from '../../data/home'
import SectionReveal, { StaggerContainer, StaggerItem } from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'

export default function FeaturesGridSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionReveal variant="zoom">
        <SectionTitle
          eyebrow="Core features"
          title="Everything your team needs, in one flow."
          description="Premium orchestration that turns complexity into momentum — each capability designed to feel as good as it performs."
        />
      </SectionReveal>

      <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <StaggerItem key={feature.title}>
              <TiltCard intensity={10}>
                <motion.div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${feature.accent} p-6`}
                  whileHover={{ boxShadow: '0 0 60px rgba(34,211,238,0.12)' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_50%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <motion.div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-almost-black text-cyan-300"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
                    <div className="mt-4 rounded-xl border border-white/10 bg-almost-black/80 p-3">
                      <p className="text-xs text-slate-500">Preview</p>
                      <p className="mt-1 text-sm text-slate-300">{feature.preview}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.metrics.map((m) => (
                        <span key={m} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2 py-1 text-[10px] uppercase tracking-wider text-cyan-300">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </section>
  )
}
