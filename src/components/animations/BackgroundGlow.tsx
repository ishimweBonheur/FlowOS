interface BackgroundGlowProps {
  className?: string
}

export default function BackgroundGlow({ className = '' }: BackgroundGlowProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute right-[-5%] top-[15%] h-96 w-96 rounded-full bg-emerald-400/15 blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />
    </div>
  )
}
