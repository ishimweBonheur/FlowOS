import BackgroundGlow from './BackgroundGlow'
import FloatingSvgIcons from './FloatingSvgIcons'
import GridBackground from './GridBackground'
import ParticleField from './ParticleField'

export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <BackgroundGlow />
      <GridBackground />
      <FloatingSvgIcons />
      <ParticleField />
    </div>
  )
}
