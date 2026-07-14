
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'

function Orb() {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.15
    ref.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={ref} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  )
}

export default function FloatingOrbScene({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -5, 5]} intensity={0.6} color="#3b82f6" />
        <Suspense fallback={null}>
          <Orb />
        </Suspense>
      </Canvas>
    </div>
  )
}
