'use client'

import { Sparkles, Target, MousePointerClick, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Sparkles, Target, MousePointerClick]

export function GrowthSystem() {
  const { copy } = useLanguage()

  return (
    <section id="system" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{copy.system.eyebrow}</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.system.title}</h2>
          <p className="mt-4 text-pretty text-muted-foreground">{copy.system.body}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.system.steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <div key={step.number} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                    <span className="font-heading text-3xl font-semibold text-border">{step.number}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tag}</li>)}
                  </ul>
                </div>
                {i < copy.system.steps.length - 1 && <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 md:block"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm"><ArrowRight className="h-5 w-5" aria-hidden="true" /></span></div>}
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-5">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {copy.system.flow.map((label, i) => (
              <div key={label} className="flex items-center gap-3 sm:flex-1 sm:justify-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">{i + 1}</span>
                <span className="text-sm font-medium text-foreground">{label}</span>
                {i < copy.system.flow.length - 1 && <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-muted-foreground sm:ml-0 sm:block" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
