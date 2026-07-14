import { ArrowRight, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionDivider from '../global/SectionDivider'
import MagneticButton from '../ui/MagneticButton'

const navigation = {
  product: [
    { to: '/features', label: 'Features' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/pricing', label: 'Pricing' },
  ],
  company: [
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ],
  resources: [
    { to: '/blog', label: 'Documentation' },
    { to: '/contact', label: 'Support' },
    { to: '/pricing', label: 'Enterprise' },
  ],
  solutions: [
    { to: '/solutions', label: 'Startups' },
    { to: '/solutions', label: 'Agencies' },
    { to: '/solutions', label: 'Enterprise' },
  ],
}

const socials = [
  { Icon: FaXTwitter, label: 'X / Twitter' },
  { Icon: FaGithub, label: 'GitHub' },
  { Icon: FaLinkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-almost-black">
      <SectionDivider variant="wave" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2 text-cyan-300">
            <Sparkles size={16} />
            <span className="text-sm uppercase tracking-[0.35em]">FlowOS</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            The operating system for modern teams that want clarity, motion, and momentum from the very first click.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.05 }}
                className="rounded-full border border-white/10 bg-soft-dark-gray p-2 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Product</h3>
          <div className="space-y-3 text-sm text-slate-400">
            {navigation.product.map((l) => (
              <Link key={l.to + l.label} to={l.to} className="block transition hover:text-white">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Solutions</h3>
          <div className="space-y-3 text-sm text-slate-400">
            {navigation.solutions.map((l) => (
              <Link key={l.label} to={l.to} className="block transition hover:text-white">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Company</h3>
          <div className="space-y-3 text-sm text-slate-400">
            {navigation.company.map((l) => (
              <Link key={l.to} to={l.to} className="block transition hover:text-white">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Resources</h3>
          <div className="space-y-3 text-sm text-slate-400">
            {navigation.resources.map((l) => (
              <Link key={l.label} to={l.to} className="block transition hover:text-white">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Stay in flow</h3>
          <p className="mb-4 text-sm text-slate-400">Weekly insights on productivity, automation, and team momentum.</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="you@company.com"
              className="rounded-full border border-white/10 bg-soft-dark-gray px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/30"
            />
            <MagneticButton primary className="!py-2.5 text-sm">
              Subscribe <ArrowRight size={14} className="ml-1 inline" />
            </MagneticButton>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} FlowOS. All rights reserved. · Clarity. Motion. Momentum.
      </div>
    </footer>
  )
}
