import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import BackgroundGlow from './BackgroundGlow'
import FloatingSvgIcons from './FloatingSvgIcons'
import GridBackground from './GridBackground'
import ParticleField from './ParticleField'

export default function PageBackground() {
  const reducedMotion = usePrefersReducedMotion()
  const [showDecorations, setShowDecorations] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    const idle = window.requestIdleCallback?.(
      () => setShowDecorations(true),
      { timeout: 800 },
    )

    if (idle !== undefined) {
      return () => window.cancelIdleCallback?.(idle)
    }

    const timer = window.setTimeout(() => setShowDecorations(true), 300)
    return () => window.clearTimeout(timer)
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <BackgroundGlow />
      <GridBackground />
      {showDecorations ? (
        <>
          <FloatingSvgIcons />
          <ParticleField />
        </>
      ) : null}
    </div>
  )
}
