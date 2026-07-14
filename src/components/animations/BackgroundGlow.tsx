interface BackgroundGlowProps {
  className?: string
}

export default function BackgroundGlow({ className = '' }: BackgroundGlowProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14)_0%,transparent_70%)] animate-glow-pulse" />
      <div
        className="absolute right-[-5%] top-[15%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.1)_0%,transparent_70%)] animate-glow-pulse"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] animate-glow-pulse"
        style={{ animationDelay: '0.8s' }}
      />
    </div>
  )
}
