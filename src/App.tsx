import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import PageBackground from './components/animations/PageBackground'
import CursorGlow from './components/global/CursorGlow'
import LoadingScreen from './components/global/LoadingScreen'
import MouseSpotlight from './components/global/MouseSpotlight'
import NoiseOverlay from './components/global/NoiseOverlay'
import PageTransition from './components/global/PageTransition'
import ScrollProgress from './components/global/ScrollProgress'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'
import { ScrollTrigger } from './lib/gsap'

import HomePage from './pages/HomePage'

const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function AppShell() {
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)
    ScrollTrigger.refresh()

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [reducedMotion, location.pathname])

  return (
    <>
      <LoadingScreen done={!loading} />
      <ScrollProgress />
      <CursorGlow />
      <MouseSpotlight />
      <NoiseOverlay />
      <div className="relative min-h-screen bg-deep-black text-slate-100">
        <PageBackground />
        <NavBar />
        <main>
          <AnimatePresence mode="wait">
            <Suspense fallback={null}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/features" element={<PageTransition><FeaturesPage /></PageTransition>} />
                <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
                <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
