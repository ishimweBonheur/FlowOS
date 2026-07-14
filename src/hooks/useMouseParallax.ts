import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export default function useMouseParallax(strength = 20) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 80, damping: 20 })
  const springY = useSpring(y, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const onMove = (event: globalThis.MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      x.set(((event.clientX - cx) / cx) * strength)
      y.set(((event.clientY - cy) / cy) * strength)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [strength, x, y])

  return { x: springX, y: springY }
}
