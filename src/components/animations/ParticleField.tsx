import { useState } from 'react'

interface Particle {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
}

function createParticles(): Particle[] {
  return Array.from({ length: 22 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 4,
  }))
}

export default function ParticleField() {
  const [particles] = useState(createParticles)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  )
}
