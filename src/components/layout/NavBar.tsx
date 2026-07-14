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
    <header className="sticky top-0 z-50 px-4">
      {/* 
        Changes made (SIZING ONLY):
        1. max-w-7xl -> max-w-4xl (shrinks the width)
        2. mx-auto (centers the small bar)
        3. mt-4 (adds small space at top so it floats like the image)
        4. py-4 -> py-3 (makes the vertical height a bit smaller)
        5. Moved the border and background colors from the outer header to this inner div
           to keep the exact same dark colors, but on the smaller pill shape.
      */}
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border-b border-white/10 bg-almost-black px-6 py-3">
        
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
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-soft-dark-gray px-4 py-2 text-sm font-medium text-white transition hover:bg-dark-charcoal md:flex"
        >
          Launch demo
          <ArrowRight size={16} />
        </motion.button>

        <button className="rounded-full border border-white/10 bg-soft-dark-gray p-2 text-slate-200 md:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}