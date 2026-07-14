import { Check, Sparkles } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For solo operators and small launches.',
    features: ['Workspace essentials', 'Unlimited docs', 'Core automations'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For product teams that need clarity and speed.',
    features: ['Advanced analytics', 'Multi-team orchestration', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex organizations with premium governance.',
    features: ['Security controls', 'Custom integrations', 'Dedicated success team'],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="Pricing" title="A plan for every stage of growth." description="Start with clarity, expand with confidence, and keep your team moving." align="center" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.name} className={`p-8 ${plan.highlighted ? 'border-cyan-400/30 bg-cyan-400/10' : ''}`} hover>
            {plan.highlighted ? (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                <Sparkles size={14} />
                Most popular
              </div>
            ) : null}
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-3 text-slate-400">{plan.description}</p>
            <div className="mt-6 text-4xl font-semibold text-white">{plan.price}</div>
            <p className="mt-2 text-sm text-slate-400">per month</p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check size={16} className="text-cyan-300" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-full px-5 py-3 font-medium ${plan.highlighted ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950' : 'border border-white/10 bg-soft-dark-gray text-white'}`}>
              Choose plan
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
