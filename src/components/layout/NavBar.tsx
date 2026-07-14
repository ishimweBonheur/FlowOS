import { motion } from 'framer-motion'
import { ArrowRight, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
            F
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-white">FLOWOS</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Operating System</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `transition hover:text-white ${isActive ? 'text-white' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 md:flex"
        >
          Launch demo
          <ArrowRight size={16} />
        </motion.button>

        <button className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 md:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
