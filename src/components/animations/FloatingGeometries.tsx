import { motion } from 'framer-motion'

const shapes = [
  { type: 'ring', left: '8%', top: '12%', size: 48, duration: 14, delay: 0 },
  { type: 'square', left: '88%', top: '18%', size: 32, duration: 18, delay: 1 },
  { type: 'triangle', left: '75%', top: '72%', size: 40, duration: 16, delay: 0.5 },
  { type: 'ring', left: '15%', top: '78%', size: 56, duration: 20, delay: 2 },
  { type: 'square', left: '92%', top: '55%', size: 24, duration: 12, delay: 1.5 },
]

export default function FloatingGeometries() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.15]"
          style={{ left: shape.left, top: shape.top, width: shape.size, height: shape.size }}
          animate={{ y: [0, -16, 0], rotate: [0, 180, 360] }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay }}
        >
          {shape.type === 'ring' ? (
            <div className="h-full w-full rounded-full border border-cyan-400/40" />
          ) : shape.type === 'square' ? (
            <div className="h-full w-full rotate-45 rounded-lg border border-blue-400/30" />
          ) : (
            <svg viewBox="0 0 40 40" className="h-full w-full text-emerald-400/30">
              <polygon points="20,4 36,36 4,36" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
