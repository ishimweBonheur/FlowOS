import { motion, useMotionValue, useSpring } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import { useState } from 'react'
import GlowButton from '../ui/GlowButton'
import GlassPanel from '../ui/GlassPanel'

const cards = [
  { label: 'Automations', value: '120K+' },
  { label: 'Projects', value: '8,900+' },
  { label: 'Users', value: '24,500+' },
]

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  useSpring(x, { stiffness: 120, damping: 16 })
  useSpring(y, { stiffness: 120, damping: 16 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    x.set(px * 8)
    y.set(py * 8)
    setTilt({ x: py * 6, y: px * 6 })
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Premium AI productivity platform
          </div>
          <h1 className="max-w-3xl font-['Outfit'] text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build smarter.
            <br />
            Move faster.
            <br />
            Scale with FlowOS.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            An intelligent operating system designed to help teams automate workflows, manage products, and build the future.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <GlowButton href="/pricing" primary>
              Start building
            </GlowButton>
            <GlowButton href="/contact">
              <span className="mr-2 inline-flex items-center">
                <PlayCircle size={16} />
              </span>
              Watch demo
            </GlowButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            {['AI automation', 'Real-time sync', 'Frictionless collaboration'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="relative z-10 [perspective:1200px]">
          <GlassPanel hover className="border-cyan-400/20 bg-slate-950/70 p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 shadow-[0_0_80px_rgba(34,211,238,0.2)]">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FlowOS Workspace</p>
                  <p className="mt-1 text-xl font-semibold text-white">Momentum Console</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">Live</div>
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  {cards.map((card) => (
                    <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{card.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Automation health</p>
                      <span className="text-sm text-cyan-300">99.2%</span>
                    </div>
                    <div className="flex items-end gap-3">
                      {[50, 70, 80, 96, 88, 100].map((height) => (
                        <div key={height} className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${height}px` }} />
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                      AI agent preparing launch handoff…
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
          <div className="absolute -left-4 bottom-8 hidden w-40 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl lg:block">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Workflow</p>
            <p className="mt-2 text-lg font-semibold text-white">Ready to run</p>
          </div>
          <div className="absolute -right-2 top-8 hidden w-36 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl lg:block">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sync</p>
            <p className="mt-2 text-lg font-semibold text-white">24/7</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
