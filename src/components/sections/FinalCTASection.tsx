import GlowButton from '../ui/GlowButton'

export default function FinalCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-cyan-400/20 bg-dark-charcoal p-10 text-center lg:p-16">
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Future-ready teams</p>
          <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">Ready to build the future with FlowOS?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">Launch faster, automate more, and orchestrate your next great product with clarity and momentum.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlowButton href="/pricing" primary>Start building</GlowButton>
            <GlowButton href="/features">Explore features</GlowButton>
          </div>
        </div>
      </div>
    </section>
  )
}
