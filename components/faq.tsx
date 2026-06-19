'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLanguage } from '@/components/language-provider'

export function Faq() {
  const { copy } = useLanguage()
  return <section id="faq" className="py-20 lg:py-28"><div className="mx-auto max-w-3xl px-4 sm:px-6"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-wider text-primary">{copy.faq.eyebrow}</p><h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{copy.faq.title}</h2></div><Accordion className="mt-10 w-full">{copy.faq.items.map((faq, i) => <AccordionItem key={faq.q} value={`item-${i}`}><AccordionTrigger className="text-left font-heading text-base font-medium text-foreground">{faq.q}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
}
