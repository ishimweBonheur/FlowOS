import { motion } from 'framer-motion'
import { useMemo } from 'react'

type IconKind = 'plus' | 'minus' | 'percent' | 'grid' | 'bolt' | 'node' | 'chart' | 'circle'

interface FloatingIcon {
  id: number
  kind: IconKind
  left: string
  top: string
  size: number
  opacity: number
  blur: number
  duration: number
  delay: number
  rotate: number
}

function createIcons(): FloatingIcon[] {
  const kinds: IconKind[] = ['plus', 'minus', 'percent', 'grid', 'bolt', 'node', 'chart', 'circle']
  return Array.from({ length: 18 }, (_, index) => ({
    id: index,
    kind: kinds[index % kinds.length]!,
    left: `${4 + Math.random() * 92}%`,
    top: `${4 + Math.random() * 92}%`,
    size: 18 + Math.random() * 36,
    opacity: 0.06 + Math.random() * 0.14,
    blur: Math.random() > 0.55 ? 1 + Math.random() * 2 : 0,
    duration: 14 + Math.random() * 18,
    delay: Math.random() * 6,
    rotate: -25 + Math.random() * 50,
  }))
}

function IconShape({ kind, size }: { kind: IconKind; size: number }) {
  const stroke = 'rgba(148, 163, 184, 0.9)'
  const fill = 'rgba(148, 163, 184, 0.15)'

  switch (kind) {
    case 'plus':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'minus':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'percent':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <circle cx="17" cy="17" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <path d="M19 5 5 19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'grid':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
    case 'bolt':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6" cy="12" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <circle cx="18" cy="6" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <path d="M8.5 11 15.5 7M8.5 13l6.5 4" stroke={stroke} strokeWidth="1.5" />
        </svg>
      )
    case 'chart':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 15v-4M12 15V8M16 15v-6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7" stroke={stroke} strokeWidth="1.5" fill={fill} />
        </svg>
      )
  }
}

export default function FloatingSvgIcons() {
  const icons = useMemo(() => createIcons(), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          style={{
            left: icon.left,
            top: icon.top,
            opacity: icon.opacity,
            filter: icon.blur ? `blur(${icon.blur}px)` : undefined,
            rotate: icon.rotate,
          }}
          animate={{
            y: [0, -18, 6, -12, 0],
            x: [0, 8, -6, 4, 0],
            rotate: [icon.rotate, icon.rotate + 8, icon.rotate - 6, icon.rotate + 4, icon.rotate],
            scale: [1, 1.06, 0.96, 1.03, 1],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <IconShape kind={icon.kind} size={icon.size} />
        </motion.div>
      ))}
    </div>
  )
}
