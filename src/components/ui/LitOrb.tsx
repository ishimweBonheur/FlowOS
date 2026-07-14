export default function LitOrb() {
  return (
    <div className="relative mx-auto h-72 w-72 rounded-full border border-cyan-400/20 bg-[radial-gradient(circle_at_30%_30%,_rgba(6,182,212,0.45),_rgba(59,130,246,0.12)_35%,_rgba(2,6,23,0)_70%)] shadow-[0_0_140px_rgba(59,130,246,0.25)]">
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,_rgba(6,182,212,0.2),_rgba(59,130,246,0.05),_rgba(16,185,129,0.2),_rgba(59,130,246,0.2))] blur-3xl" />
    </div>
  )
}
