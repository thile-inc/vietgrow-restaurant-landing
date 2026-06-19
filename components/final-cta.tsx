import { Button } from '@/components/ui/button'

export function FinalCta() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to turn ad clicks into full tables, orders, and inquiries?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Get a free, practical growth plan built for your restaurant — your
            menu, your offers, your local market. No pressure, no obligation.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full px-8 text-base"
          >
            <a href="#lead-form">Get Free Restaurant Growth Plan</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
