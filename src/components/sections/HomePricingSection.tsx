import { Check } from 'lucide-react'
import { useState } from 'react'
import MagneticButton from '../ui/MagneticButton'
import SectionReveal, { StaggerContainer, StaggerItem } from '../ui/SectionReveal'
import SectionTitle from '../ui/SectionTitle'
import GlassCard from '../ui/GlassCard'

const plans = [
  {
    name: 'Starter',
    monthly: 19,
    yearly: 15,
    description: 'For solo operators and small launches.',
    features: ['Workspace essentials', 'Unlimited docs', 'Core automations', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    monthly: 79,
    yearly: 63,
    description: 'For product teams that need clarity and speed.',
    features: ['Advanced analytics', 'Multi-team orchestration', 'AI assistant', 'Priority support', 'Integrations'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    description: 'For complex organizations with premium governance.',
    features: ['Security controls', 'Custom integrations', 'Dedicated success team', 'SSO/SAML', 'Custom SLA'],
    highlighted: false,
  },
]

const faqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes. Upgrade or downgrade at any time — changes apply on your next billing cycle.' },
  { q: 'Is there a free trial?', a: 'Professional includes a 14-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards, ACH for Enterprise, and invoicing for annual contracts.' },
]

export default function HomePricingSection() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="border-y border-white/10 bg-almost-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal variant="zoom">
          <SectionTitle
            eyebrow="Pricing"
            title="A plan for every stage of growth."
            description="Start with clarity, expand with confidence, and keep your team moving."
            align="center"
          />
        </SectionReveal>

        <SectionReveal variant="fadeUp" delay={0.2} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-dark-charcoal p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm transition ${!yearly ? 'bg-soft-dark-gray text-white' : 'text-slate-400'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm transition ${yearly ? 'bg-soft-dark-gray text-white' : 'text-slate-400'}`}
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
                  <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Most popular</span>
                ) : null}
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                <div className="mt-6">
                  {plan.monthly ? (
                    <>
                      <span className="font-['Outfit'] text-4xl font-bold text-white">${yearly ? plan.yearly : plan.monthly}</span>
                      <span className="text-slate-400">/mo</span>
                    </>
                  ) : (
                    <span className="font-['Outfit'] text-4xl font-bold text-white">Custom</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check size={16} className="text-cyan-300" />
                      {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href={plan.monthly ? '/pricing' : '/contact'}
                  primary={plan.highlighted}
                  className="mt-8 w-full"
                >
                  {plan.monthly ? 'Choose plan' : 'Contact sales'}
                </MagneticButton>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal variant="blur" delay={0.3} className="mt-16">
          <h3 className="text-center font-['Outfit'] text-xl font-semibold text-white">Pricing FAQ</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-dark-charcoal p-5">
                <p className="font-medium text-white">{faq.q}</p>
                <p className="mt-2 text-sm text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
