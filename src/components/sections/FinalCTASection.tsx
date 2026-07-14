import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import SectionReveal from '../ui/SectionReveal'

export default function FinalCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <SectionReveal variant="zoom">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-cyan-400/20 bg-dark-charcoal p-10 text-center lg:p-20">
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_60%)]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-cyan-400/60"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Future-ready teams</p>
            <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white sm:text-5xl">
              Ready to build the future with FlowOS?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Launch faster, automate more, and orchestrate your next great product with clarity and momentum.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href="/pricing" primary>Start building</MagneticButton>
              <MagneticButton href="/features">Explore features</MagneticButton>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
