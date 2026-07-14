import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import PageBackground from './components/animations/PageBackground'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import SolutionsPage from './pages/SolutionsPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function AppShell() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#020617_45%,_#06111f_100%)] text-slate-100">
      <PageBackground />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
          >
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 shadow-[0_0_80px_rgba(59,130,246,0.2)] backdrop-blur-xl">
              <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
              <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500 [animation-delay:180ms]" />
              <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 [animation-delay:360ms]" />
              <span className="ml-2 text-sm uppercase tracking-[0.35em] text-slate-300">Loading FlowOS</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <NavBar />
      <motion.main
        key={location.pathname}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
