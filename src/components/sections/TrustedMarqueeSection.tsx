import { motion } from 'framer-motion'
import { trustedBrands } from '../../data/home'
import Marquee from '../ui/Marquee'
import SectionReveal from '../ui/SectionReveal'

export default function TrustedMarqueeSection() {
  return (
    <section className="border-y border-white/10 bg-almost-black py-10">
      <SectionReveal variant="blur" className="mx-auto mb-6 max-w-7xl px-6 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trusted by ambitious teams worldwide</p>
      </SectionReveal>
      <Marquee speed={40}>
        {trustedBrands.map((brand) => (
          <motion.span
            key={brand}
            className="flex items-center gap-3 px-4 font-['Outfit'] text-lg font-semibold tracking-[0.2em] text-slate-400 transition hover:text-cyan-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            {brand}
          </motion.span>
        ))}
      </Marquee>
    </section>
  )
}
