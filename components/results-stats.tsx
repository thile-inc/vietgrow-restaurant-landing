'use client'

import { useLanguage } from '@/components/language-provider'

export function ResultsStats() {
  const { copy } = useLanguage()

  return (
    <section id="results" className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {copy.results.title}
        </h2>

        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-3 sm:p-8">
          {copy.results.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
