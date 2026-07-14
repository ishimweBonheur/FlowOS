import type { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export default function SectionTitle({ eyebrow, title, description, align = 'left', children }: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-['Outfit'] text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-400">{description}</p>
      {children}
    </div>
  )
}
