import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { comparisonFeatures, plans, pricingFaqs } from '../data/pricing'
import FinalCTASection from '../components/sections/FinalCTASection'
import MagneticButton from '../components/ui/MagneticButton'
import SectionReveal, { StaggerContainer, StaggerItem } from '../components/ui/SectionReveal'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} className="mx-auto text-emerald-400" />
  if (value === false) return <span className="text-slate-600">—</span>
  return <span className="text-slate-300">{value}</span>
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <SectionTitle
            eyebrow="Pricing"
            title="A plan for every stage of growth."
            description="Start with clarity, expand with confidence, and keep your team moving."
            align="center"
          />
        </SectionReveal>

        <SectionReveal variant="fadeUp" delay={0.15} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-dark-charcoal p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm transition ${!yearly ? 'bg-soft-dark-gray text-white' : 'text-slate-400'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm transition ${yearly ? 'bg-soft-dark-gray text-white' : 'text-slate-400'}`}
            >
              Yearly <span className="text-cyan-300">-20%</span>
            </button>
          </div>
        </SectionReveal>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <GlassCard className={`h-full p-8 ${plan.highlighted ? 'border-cyan-400/30 ring-1 ring-cyan-400/20' : ''}`} hover>
                {plan.highlighted ? (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                    <Sparkles size={14} />
                    Most popular
                  </div>
                ) : null}
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-3 text-slate-400">{plan.description}</p>
                <div className="mt-6">
                  {plan.monthly ? (
                    <>
                      <span className="font-['Outfit'] text-5xl font-bold text-white">${yearly ? plan.yearly : plan.monthly}</span>
                      <span className="text-slate-400">/mo</span>
                    </>
                  ) : (
                    <span className="font-['Outfit'] text-5xl font-bold text-white">Custom</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={16} className="text-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href={plan.monthly ? '/contact' : '/contact'}
                  primary={plan.highlighted}
                  className="mt-8 w-full"
                >
                  {plan.monthly ? 'Choose plan' : 'Contact sales'}
                </MagneticButton>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal variant="zoom">
            <SectionTitle eyebrow="Compare" title="Feature comparison at a glance." description="See exactly what each plan includes." align="center" />
          </SectionReveal>
          <SectionReveal variant="fadeUp" delay={0.2} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-dark-charcoal">
                  <th className="p-4 text-slate-400">Feature</th>
                  <th className="p-4 text-center text-white">Starter</th>
                  <th className="p-4 text-center text-cyan-300">Professional</th>
                  <th className="p-4 text-center text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="border-b border-white/5">
                    <td className="p-4 text-slate-300">{row.name}</td>
                    <td className="p-4 text-center"><CellValue value={row.starter} /></td>
                    <td className="p-4 text-center"><CellValue value={row.pro} /></td>
                    <td className="p-4 text-center"><CellValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="rotate">
          <div className="rounded-[2.5rem] border border-cyan-400/20 bg-dark-charcoal p-10 text-center lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Enterprise</p>
            <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white">Need custom governance at scale?</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              SSO, custom SLAs, dedicated success teams, and bespoke integrations — built for organizations that cannot compromise on security or speed.
            </p>
            <MagneticButton href="/contact" primary className="mt-8">Talk to sales</MagneticButton>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Pricing questions answered." description="" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pricingFaqs.map((faq, i) => (
            <SectionReveal key={faq.q} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-dark-charcoal p-6">
                <p className="font-medium text-white">{faq.q}</p>
                <p className="mt-2 text-sm text-slate-400">{faq.a}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </div>
  )
}
