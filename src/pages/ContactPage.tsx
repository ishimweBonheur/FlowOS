import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-almost-black p-10 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="mt-4 font-['Outfit'] text-4xl font-semibold text-white sm:text-5xl">Let’s build something remarkable together.</h1>
          <p className="mt-6 text-lg text-slate-400">Share your goals and we’ll shape a FlowOS experience that maps to your team’s way of working.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-soft-dark-gray p-4 text-slate-300">
              <Mail size={18} className="text-cyan-300" />
              hello@flowos.ai
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-soft-dark-gray p-4 text-slate-300">
              <Phone size={18} className="text-cyan-300" />
              +1 (800) 555-0198
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-soft-dark-gray p-4 text-slate-300">
              <MapPin size={18} className="text-cyan-300" />
              420 Harbor Avenue, San Francisco, CA
            </div>
          </div>
        </div>
        <GlassCard className="p-8">
          <div className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none" placeholder="Name" />
            <input className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none" placeholder="Email" />
            <textarea className="min-h-36 w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none" placeholder="Tell us about your team" />
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-medium text-slate-950">
              Send enquiry <ArrowRight size={16} />
            </button>
          </div>
        </GlassCard>
      </section>
    </div>
  )
}
