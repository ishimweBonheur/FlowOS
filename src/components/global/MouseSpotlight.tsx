import { useEffect } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function MouseSpotlight() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
      document.documentElement.style.setProperty('--spot-x', `${(e.clientX / window.innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--spot-y', `${(e.clientY / window.innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced])

  if (reduced) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-40"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(34,211,238,0.08), transparent 60%)`,
      }}
    />
  )
}
