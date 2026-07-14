import {
  BarChart3,
  Bot,
  Layers3,
  MessageSquareText,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface Problem {
  id: string
  title: string
  description: string
  stat: string
  statLabel: string
  icon: LucideIcon
  color: string
}

export const problems: Problem[] = [
  {
    id: 'fragmentation',
    title: 'Tool Fragmentation',
    description: 'Teams lose hours switching between disconnected apps. Context gets lost and updates fall through the cracks.',
    stat: '47',
    statLabel: 'avg. tools per team',
    icon: Puzzle,
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'chaos',
    title: 'Operational Chaos',
    description: 'Without a shared operating layer, approvals stall, handoffs break, and priorities blur into reactive firefighting.',
    stat: '62%',
    statLabel: 'time on coordination',
    icon: Zap,
    color: 'from-violet-500/20 to-cyan-500/20',
  },
  {
    id: 'invisible',
    title: 'Invisible Progress',
    description: 'When work is scattered, progress is hard to see — for teams and for leadership making critical decisions.',
    stat: '3.2x',
    statLabel: 'more status meetings',
    icon: BarChart3,
    color: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    id: 'manual',
    title: 'Manual Repetitive Work',
    description: 'Knowledge workers spend disproportionate time on reminders, routing, and follow-ups that should be automated.',
    stat: '28hrs',
    statLabel: 'lost per week',
    icon: Bot,
    color: 'from-fuchsia-500/20 to-cyan-500/20',
  },
  {
    id: 'collaboration',
    title: 'Collaboration Friction',
    description: 'Designers, developers, and stakeholders work in silos without a shared rhythm or single source of truth.',
    stat: '54%',
    statLabel: 'context switching daily',
    icon: MessageSquareText,
    color: 'from-blue-500/20 to-slate-500/20',
  },
  {
    id: 'ux',
    title: 'Exhausting Enterprise UX',
    description: 'Most productivity tools feel utilitarian at best. FlowOS reduces cognitive load with human-centered design.',
    stat: '71%',
    statLabel: 'report tool fatigue',
    icon: Sparkles,
    color: 'from-amber-500/20 to-emerald-500/20',
  },
  {
    id: 'governance',
    title: 'Scaling Without Governance',
    description: 'Growing teams need security and auditability — but enterprise controls often come at the cost of speed.',
    stat: '89%',
    statLabel: 'need better governance',
    icon: ShieldCheck,
    color: 'from-rose-500/20 to-cyan-500/20',
  },
]

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  preview: string
  accent: string
  metrics: string[]
}

export const features: Feature[] = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Turn natural-language requests into actions across your workspace with intelligent copilots that understand context.',
    preview: 'Summarize sprint blockers and draft stakeholder update',
    accent: 'from-cyan-500/20 to-blue-500/20',
    metrics: ['98% accuracy', '3s avg response', '24/7 available'],
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate handoffs, approvals, and reminders with elegant visual flows that adapt as your team evolves.',
    preview: 'Launch approval → QA → Deploy pipeline',
    accent: 'from-violet-500/20 to-cyan-500/20',
    metrics: ['120K+ automations', '99.2% uptime', 'Zero-code setup'],
  },
  {
    icon: Layers3,
    title: 'Project Tracking',
    description: 'Keep every sprint, milestone, and launch visible on a motion-rich board designed for clarity at speed.',
    preview: 'Q3 Launch — 78% complete, 4 days ahead',
    accent: 'from-emerald-500/20 to-cyan-500/20',
    metrics: ['8,900+ projects', 'Real-time sync', 'Custom views'],
  },
  {
    icon: MessageSquareText,
    title: 'Real-Time Collaboration',
    description: 'Bring designers, developers, and stakeholders into one shared rhythm with live presence and threaded context.',
    preview: '12 teammates active · 3 threads resolved today',
    accent: 'from-blue-500/20 to-slate-500/20',
    metrics: ['Instant sync', 'Thread context', 'Live cursors'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Understand performance at a glance with immersive reporting that turns data into decisive action.',
    preview: 'Velocity up 14% · Cycle time down 22%',
    accent: 'from-fuchsia-500/20 to-cyan-500/20',
    metrics: ['Live KPIs', 'Custom reports', 'Export ready'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Protect every workspace with role-based governance, SSO, audit logs, and compliance-ready controls.',
    preview: 'SOC 2 Type II · SSO · RBAC enabled',
    accent: 'from-amber-500/20 to-emerald-500/20',
    metrics: ['SOC 2', 'SSO/SAML', 'Audit trails'],
  },
]

export const trustedBrands = [
  'NovaLabs', 'CloudPeak', 'PixelForge', 'QuantumTech', 'AtlasAI', 'Vertex', 'BlueOcean', 'SkyScale',
  'Meridian', 'PulseWorks', 'OrbitStack', 'Flowline',
]

export const testimonials = [
  {
    quote: 'FlowOS transformed the way our team collaborates. The experience feels effortless and strikingly premium — we shipped our last three releases ahead of schedule.',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'NovaLabs',
    avatar: 'SJ',
  },
  {
    quote: 'Our team stopped managing chaos and started moving with intention. It feels like a true operating system for how modern work should flow.',
    name: 'Mina Alvarez',
    role: 'Head of Delivery',
    company: 'AtlasAI',
    avatar: 'MA',
  },
  {
    quote: 'We consolidated six tools into FlowOS. Our onboarding time dropped 40% and client delivery became visibly smoother.',
    name: 'James Chen',
    role: 'Creative Director',
    company: 'PixelForge',
    avatar: 'JC',
  },
  {
    quote: 'The analytics alone changed how we plan quarters. Leadership finally sees the same live picture the team operates from every day.',
    name: 'Elena Rodriguez',
    role: 'VP Operations',
    company: 'CloudPeak',
    avatar: 'ER',
  },
]

export const integrations = [
  { name: 'Slack', color: '#E01E5A' },
  { name: 'GitHub', color: '#ffffff' },
  { name: 'Google Drive', color: '#4285F4' },
  { name: 'Notion', color: '#ffffff' },
  { name: 'Discord', color: '#5865F2' },
  { name: 'Figma', color: '#A259FF' },
]

export const solutionAudiences = [
  {
    title: 'Startups',
    description: 'Move from concept to momentum with lightweight systems that scale as you grow.',
    benefits: ['Rapid setup', 'Founder-friendly pricing', 'All-in-one workspace'],
    metric: '3x faster launches',
    illustration: 'rocket',
  },
  {
    title: 'Agencies',
    description: 'Coordinate delivery, approvals, and client feedback without friction across every account.',
    benefits: ['Client portals', 'Approval workflows', 'Multi-project views'],
    metric: '40% faster delivery',
    illustration: 'building',
  },
  {
    title: 'Product Teams',
    description: 'Unify planning, engineering, design, and launch in one continuous flow.',
    benefits: ['Sprint boards', 'Roadmap sync', 'Stakeholder visibility'],
    metric: '22% cycle time reduction',
    illustration: 'layers',
  },
  {
    title: 'Remote Teams',
    description: 'Build calm collaboration rituals across time zones and disciplines.',
    benefits: ['Async-first', 'Live presence', 'Timezone-aware'],
    metric: '67% fewer sync meetings',
    illustration: 'globe',
  },
  {
    title: 'Enterprise',
    description: 'Scale with security controls, governance, and custom integrations.',
    benefits: ['SSO/SAML', 'Custom SLAs', 'Dedicated success'],
    metric: '99.99% uptime SLA',
    illustration: 'shield',
  },
  {
    title: 'Education',
    description: 'Create structured, visible, and inspiring learning experiences for students and faculty.',
    benefits: ['Course templates', 'Progress tracking', 'Team projects'],
    metric: '85% engagement lift',
    illustration: 'graduation',
  },
]
