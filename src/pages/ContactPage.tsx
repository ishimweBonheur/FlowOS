import { ArrowRight, Clock, Headphones, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import FinalCTASection from '../components/sections/FinalCTASection'
import MagneticButton from '../components/ui/MagneticButton'
import SectionReveal from '../components/ui/SectionReveal'
import GlassCard from '../components/ui/GlassCard'

const supportOptions = [
  { icon: MessageSquare, title: 'Live chat', description: 'Available Mon–Fri, 9am–6pm PT', action: 'Start chat' },
  { icon: Headphones, title: 'Priority support', description: 'Professional & Enterprise plans', action: 'Get help' },
  { icon: Mail, title: 'Email us', description: 'hello@flowos.ai — we reply within 24h', action: 'Send email' },
]

const faqs = [
  { q: 'How quickly can I get started?', a: 'Most teams are fully onboarded within one business day.' },
  { q: 'Do you offer custom demos?', a: 'Yes. Book a personalized walkthrough tailored to your workflow.' },
  { q: 'Is there enterprise support?', a: 'Enterprise customers receive a dedicated success manager and SLA.' },
]

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="mt-4 max-w-2xl font-['Outfit'] text-4xl font-semibold text-white sm:text-5xl">
            Let's build something remarkable together.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">
            Share your goals and we'll shape a FlowOS experience that maps to your team's way of working.
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal variant="fadeLeft">
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'hello@flowos.ai' },
                { icon: Phone, label: '+1 (800) 555-0198' },
                { icon: MapPin, label: '420 Harbor Avenue, San Francisco, CA' },
                { icon: Clock, label: 'Mon–Fri, 9am–6pm PT' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-dark-charcoal p-5">
                  <Icon size={20} className="text-cyan-300" />
                  <span className="text-slate-300">{label}</span>
                </div>
              ))}
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-almost-black">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <MapPin size={48} className="text-cyan-400/40" />
                  <span className="ml-3 text-slate-500">San Francisco HQ</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal variant="fadeRight">
            <GlassCard className="p-8">
              <h2 className="text-xl font-semibold text-white">Send an enquiry</h2>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none focus:border-cyan-400/30" placeholder="Full name" />
                <input className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none focus:border-cyan-400/30" placeholder="Work email" />
                <input className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none focus:border-cyan-400/30" placeholder="Company" />
                <select className="w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-slate-300 outline-none">
                  <option>Team size: 1–10</option>
                  <option>Team size: 11–50</option>
                  <option>Team size: 51–200</option>
                  <option>Team size: 200+</option>
                </select>
                <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none focus:border-cyan-400/30" placeholder="Tell us about your team and goals" />
                <MagneticButton primary className="w-full">
                  Send enquiry <ArrowRight size={16} className="ml-1 inline" />
                </MagneticButton>
              </form>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-['Outfit'] text-2xl font-semibold text-white">Support options</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supportOptions.map((opt) => {
              const Icon = opt.icon
              return (
                <GlassCard key={opt.title} className="p-6 text-center" hover>
                  <Icon size={28} className="mx-auto text-cyan-300" />
                  <h3 className="mt-4 font-semibold text-white">{opt.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{opt.description}</p>
                  <button className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">{opt.action}</button>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="font-['Outfit'] text-2xl font-semibold text-white">Contact FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/10 bg-dark-charcoal p-5">
              <p className="font-medium text-white">{faq.q}</p>
              <p className="mt-2 text-sm text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </div>
  )
}
