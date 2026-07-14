import { ArrowRight, CalendarDays, PenTool } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const posts = [
  { title: 'Designing calm systems for fast-moving teams', date: 'July 8, 2026', tag: 'Design' },
  { title: 'The new operating layer for product delivery', date: 'July 3, 2026', tag: 'Product' },
  { title: 'How automation creates more room for strategy', date: 'June 24, 2026', tag: 'Automation' },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-almost-black p-10 lg:p-16">
        <SectionTitle eyebrow="Blog" title="Stories, strategy, and signals from the front edge of work." description="Thoughtful perspectives for teams designing what comes next." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-8" hover>
            <div className="mb-4 flex items-center gap-2 text-cyan-300">
              <PenTool size={16} />
              <span className="text-sm uppercase tracking-[0.3em]">Featured article</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">The future of collaboration is invisible, intelligent, and beautiful.</h3>
            <p className="mt-4 text-slate-400">A look at how premium interfaces help teams focus, coordinate, and ship with less friction.</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> July 10, 2026</span>
              <span className="rounded-full border border-white/10 bg-soft-dark-gray px-3 py-1">Strategy</span>
            </div>
          </GlassCard>
          <div className="space-y-4">
            {posts.map((post) => (
              <GlassCard key={post.title} className="p-6" hover>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-cyan-300">{post.tag}</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">{post.title}</h4>
                  </div>
                  <a href="/blog" className="rounded-full border border-white/10 bg-soft-dark-gray p-3 text-slate-200">
                    <ArrowRight size={16} />
                  </a>
                </div>
                <p className="mt-3 text-sm text-slate-400">{post.date}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
