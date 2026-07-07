'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function FinalCta() {
  const { copy } = useLanguage()
  return <section className="py-20 lg:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6"><div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16"><h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{copy.cta.title}</h2><p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">{copy.cta.body}</p><Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8 text-base"><a href="https://meet.brevo.com/vietgrowai" target="_blank" rel="noreferrer">{copy.cta.button}</a></Button></div></div></section>
}
