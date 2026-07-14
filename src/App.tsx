import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import PageBackground from './components/animations/PageBackground'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'

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

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
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
  }, [reducedMotion])

  return (
    <div className="relative min-h-screen bg-deep-black text-slate-100">
      <PageBackground />
      <NavBar />
      <main>
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
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
