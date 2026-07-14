import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-almost-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2 text-cyan-300">
            <Sparkles size={16} />
            <span className="text-sm uppercase tracking-[0.35em]">FlowOS</span>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            The operating system for modern teams that want clarity, motion, and momentum from the very first click.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Navigate</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <Link to="/features" className="block hover:text-white">Features</Link>
            <Link to="/solutions" className="block hover:text-white">Solutions</Link>
            <Link to="/pricing" className="block hover:text-white">Pricing</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Resources</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <Link to="/blog" className="block hover:text-white">Blog</Link>
            <Link to="/about" className="block hover:text-white">About</Link>
            <Link to="/contact" className="block hover:text-white">Support</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Stay in flow</h3>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-soft-dark-gray px-4 py-3 text-sm text-slate-300">
            <span>Join the newsletter</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </footer>
  )
}
