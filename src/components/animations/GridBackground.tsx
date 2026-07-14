export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </div>
  )
}
