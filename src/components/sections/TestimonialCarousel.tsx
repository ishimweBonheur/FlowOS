import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { testimonials } from '../../data/home'
import SectionReveal from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  const item = testimonials[active]!

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionReveal variant="fadeUp">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by teams building the future."
          description="The kind of experience that feels as good as it performs."
          align="center"
        />
      </SectionReveal>

      <div
        className="relative mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/10 bg-almost-black/80 p-10 backdrop-blur-sm lg:p-14"
        >
          <p className="text-xl leading-relaxed text-slate-300 lg:text-2xl">"{item.quote}"</p>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-semibold text-slate-950">
              {item.avatar}
            </div>
            <div>
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role} · {item.company}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
