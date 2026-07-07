'use client'

import { Button } from '@/components/ui/button'
import { CalendarCheck, Phone, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const MEETING_URL = 'https://meet.brevo.com/vietgrowai'

export function LeadForm() {
  const { copy } = useLanguage()

  return (
    <section id="lead-form" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {copy.form.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {copy.form.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {copy.form.body}
          </p>

          <ul className="mt-8 space-y-4">
            {copy.form.expectations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-border bg-card p-6 text-center shadow-lg sm:p-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CalendarCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
            Book your Vietgrow meeting
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-pretty text-muted-foreground">
            Pick a time that works for you and we will review your local growth
            plan together.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full text-base">
            <a href={MEETING_URL} target="_blank" rel="noreferrer">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Now
            </a>
          </Button>
          <a
            href="tel:+17813637322"
            className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {copy.form.callCta}
          </a>
        </div>
      </div>
    </section>
  )
}
