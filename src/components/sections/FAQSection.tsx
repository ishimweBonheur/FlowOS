import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const items = [
  {
    question: 'What is FlowOS?',
    answer: 'FlowOS is a premium operating layer for teams that want to plan, automate, and ship with clarity across product, design, engineering, and operations.',
  },
  {
    question: 'Who can use FlowOS?',
    answer: 'It is built for startups, agencies, product teams, designers, developers, and growing enterprises that want a more elegant way to work together.',
  },
  {
    question: 'How does FlowOS improve productivity?',
    answer: 'By consolidating planning, automations, communication, analytics, and delivery into one calm and intelligent experience that reduces friction.',
  },
  {
    question: 'Can FlowOS integrate with existing tools?',
    answer: 'Yes. FlowOS is designed to fit into modern stacks through flexible integrations and a modular operating experience.',
  },
  {
    question: 'Is FlowOS scalable?',
    answer: 'Absolutely. The platform is designed to scale from early-stage teams to large organizations without losing responsiveness or clarity.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2.5rem] border border-white/10 bg-almost-black p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">FAQ</p>
          <h2 className="mt-4 font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">Questions teams ask before they launch with FlowOS.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const expanded = openIndex === index
            return (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-dark-charcoal">
                <button
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                  onClick={() => setOpenIndex(expanded ? null : index)}
                >
                  <span className="text-lg font-medium text-white">{item.question}</span>
                  <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="rounded-full border border-white/10 p-2 text-cyan-300">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-400">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
