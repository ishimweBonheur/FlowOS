import { motion } from 'framer-motion'

export type IllustrationType =
  | 'ai'
  | 'automation'
  | 'analytics'
  | 'security'
  | 'collaboration'
  | 'tracking'
  | 'workflow'
  | 'developer'

interface FeatureIllustrationProps {
  type: IllustrationType
  className?: string
}

export default function FeatureIllustration({ type, className = '' }: FeatureIllustrationProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
      <motion.div
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <svg viewBox="0 0 200 200" className="relative h-full w-full max-h-48 max-w-48 text-cyan-400/50">
        {type === 'ai' && (
          <>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <motion.circle cx="100" cy="100" r="24" fill="none" stroke="currentColor" strokeWidth="1" animate={{ r: [22, 28, 22] }} transition={{ duration: 3, repeat: Infinity }} />
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <line key={i} x1="100" y1="100" x2={100 + 50 * Math.cos((deg * Math.PI) / 180)} y2={100 + 50 * Math.sin((deg * Math.PI) / 180)} stroke="currentColor" strokeWidth="1" opacity="0.4" />
            ))}
            <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.8" />
          </>
        )}
        {type === 'automation' && (
          <>
            {[40, 100, 160].map((x, i) => (
              <g key={i}>
                <rect x={x - 20} y={80} width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {i < 2 ? <path d={`M${x + 20} 100 H${x + 60}`} stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" /> : null}
              </g>
            ))}
            <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="currentColor" /></marker></defs>
          </>
        )}
        {type === 'analytics' && (
          <>
            {[30, 60, 90, 120, 150].map((x, i) => (
              <motion.rect key={i} x={x} y={160 - [50, 80, 65, 110, 95][i]!} width="20" height={[50, 80, 65, 110, 95][i]!} rx="4" fill="currentColor" opacity="0.3" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} style={{ transformOrigin: 'bottom' }} />
            ))}
            <path d="M40 130 Q80 90 120 100 T180 60" fill="none" stroke="currentColor" strokeWidth="2" />
          </>
        )}
        {type === 'security' && (
          <>
            <path d="M100 40 L160 70 V120 Q160 160 100 175 Q40 160 40 120 V70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <motion.path d="M75 100 L95 120 L130 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
          </>
        )}
        {type === 'collaboration' && (
          <>
            {[[70, 90], [130, 90], [100, 130]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            ))}
            <line x1="88" y1="90" x2="112" y2="90" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="108" x2="100" y2="112" stroke="currentColor" strokeWidth="1" />
          </>
        )}
        {type === 'tracking' && (
          <>
            <rect x="50" y="50" width="100" height="100" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {[70, 100, 130].map((y, i) => (
              <g key={i}>
                <rect x="65" y={y} width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="85" y1={y + 6} x2="140" y2={y + 6} stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </g>
            ))}
          </>
        )}
        {type === 'workflow' && (
          <>
            <circle cx="60" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="85" y="85" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="140" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M75 100 H85 M115 100 H125" stroke="currentColor" strokeWidth="1" />
          </>
        )}
        {type === 'developer' && (
          <>
            <rect x="45" y="55" width="110" height="90" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="55" y="85" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.7">{'{ flow }'}</text>
            <line x1="55" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="55" y1="110" x2="100" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <line x1="55" y1="125" x2="130" y2="125" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </>
        )}
      </svg>
    </div>
  )
}
