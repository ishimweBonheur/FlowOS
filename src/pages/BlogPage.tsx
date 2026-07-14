import { ArrowRight, Clock, Search, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import FinalCTASection from '../components/sections/FinalCTASection'
import MagneticButton from '../components/ui/MagneticButton'
import SectionReveal, { StaggerContainer, StaggerItem } from '../components/ui/SectionReveal'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'

const categories = ['All', 'Product', 'Strategy', 'Engineering', 'Culture', 'Automation']
const trending = ['AI workflows', 'Remote ops', 'Team velocity', 'Enterprise scale']

const articles = [
  { title: 'Why every team needs an operating layer in 2026', excerpt: 'The shift from tool stacks to unified systems is accelerating. Here is what it means for your team.', category: 'Strategy', author: 'Aria Chen', readTime: '8 min', featured: true },
  { title: 'Building calm collaboration for distributed teams', excerpt: 'Async-first rituals that reduce meetings without losing alignment.', category: 'Culture', author: 'Sofia Reyes', readTime: '6 min' },
  { title: 'Automating the invisible work', excerpt: 'How FlowOS handles routing, reminders, and handoffs so humans focus on judgment.', category: 'Automation', author: 'Marcus Webb', readTime: '10 min' },
  { title: 'From sprint chaos to visible momentum', excerpt: 'Project tracking that actually reflects how modern teams ship.', category: 'Product', author: 'David Okonkwo', readTime: '7 min' },
  { title: 'Security without sacrificing speed', excerpt: 'Enterprise governance that teams actually want to use.', category: 'Engineering', author: 'Elena Rodriguez', readTime: '5 min' },
  { title: 'The anatomy of a perfect workflow', excerpt: 'Triggers, conditions, AI decisions, and actions — demystified.', category: 'Automation', author: 'Sarah Johnson', readTime: '9 min' },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const featured = articles.find((a) => a.featured)!
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase())
    return !a.featured && matchCat && matchSearch
  })

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionReveal variant="blur">
          <SectionTitle eyebrow="Blog" title="Insights for teams in motion." description="Product thinking, operational strategy, and stories from teams building the future." />
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-white/10 bg-soft-dark-gray py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400/30"
              />
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <SectionReveal variant="zoom">
          <GlassCard className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8">
                <span className="font-['Outfit'] text-6xl font-bold text-cyan-400/20">Featured</span>
              </div>
              <div className="p-8 lg:p-12">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{featured.category}</span>
                <h2 className="mt-4 font-['Outfit'] text-2xl font-semibold text-white lg:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-slate-400">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <span>{featured.author}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                </div>
                <MagneticButton href="/blog" className="mt-6">Read article</MagneticButton>
              </div>
            </div>
          </GlassCard>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm transition ${activeCategory === cat ? 'bg-cyan-400/20 text-cyan-300' : 'bg-dark-charcoal text-slate-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <TrendingUp size={16} className="text-cyan-300" />
          {trending.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-soft-dark-gray px-3 py-1 text-xs text-slate-400">{t}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <StaggerItem key={article.title}>
              <GlassCard className="flex h-full flex-col p-6" hover>
                <span className="text-xs uppercase tracking-wider text-cyan-300">{article.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                <a href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                  Read more <ArrowRight size={14} />
                </a>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-y border-white/10 bg-almost-black py-16">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h3 className="font-['Outfit'] text-2xl font-semibold text-white">Stay in flow</h3>
          <p className="mt-2 text-slate-400">Weekly insights delivered to your inbox.</p>
          <div className="mt-6 flex gap-2">
            <input placeholder="you@company.com" className="flex-1 rounded-full border border-white/10 bg-soft-dark-gray px-4 py-3 text-white outline-none" />
            <MagneticButton primary>Subscribe</MagneticButton>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  )
}
