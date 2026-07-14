export const plans = [
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
    monthly: null as number | null,
    yearly: null as number | null,
    description: 'For complex organizations with premium governance.',
    features: ['Security controls', 'Custom integrations', 'Dedicated success team', 'SSO/SAML', 'Custom SLA'],
    highlighted: false,
  },
]

export const comparisonFeatures = [
  { name: 'AI Assistant', starter: false, pro: true, enterprise: true },
  { name: 'Visual Workflows', starter: 'Basic', pro: true, enterprise: true },
  { name: 'Analytics Dashboard', starter: false, pro: true, enterprise: true },
  { name: 'Team Members', starter: 'Up to 5', pro: 'Up to 50', enterprise: 'Unlimited' },
  { name: 'Integrations', starter: '5', pro: 'Unlimited', enterprise: 'Custom' },
  { name: 'SSO / SAML', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated Support', starter: false, pro: 'Priority', enterprise: 'Dedicated CSM' },
  { name: 'Custom SLA', starter: false, pro: false, enterprise: true },
]

export const pricingFaqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes. Upgrade or downgrade at any time — changes apply on your next billing cycle.' },
  { q: 'Is there a free trial?', a: 'Professional includes a 14-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards, ACH for Enterprise, and invoicing for annual contracts.' },
  { q: 'Do you offer discounts for nonprofits?', a: 'Yes. Contact our team for special pricing for educational and nonprofit organizations.' },
]
