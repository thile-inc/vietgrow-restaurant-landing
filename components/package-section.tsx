import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const includes = [
  '12 posts per month',
  'Facebook & Instagram ad campaign setup',
  'Restaurant-focused ad creative design',
  'Video ad and carousel ad concepts',
  'Local audience targeting',
  'Landing page for your restaurant campaign',
  'Lead form setup',
  'Campaign tracking structure',
  'Monthly optimization',
  'Offer and promotion strategy',
  'Consultation and growth recommendations',
]

export function PackageSection() {
  return (
    <section id="package" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What you get
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One complete growth system for your restaurant
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to attract, convert, and bring in more local
            diners, orders, and inquiries — managed for you month after month.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="grid gap-0 sm:grid-cols-5">
            <div className="flex flex-col justify-center gap-3 bg-primary p-8 text-primary-foreground sm:col-span-2">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                Restaurant Growth System
              </p>
              <h3 className="font-heading text-2xl font-semibold leading-tight">
                The done-for-you F&amp;B marketing package
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/75">
                Built, launched, and optimized by the Vietgrow team — so you can
                focus on food, service, and guest experience.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-3 rounded-full"
              >
                <a href="#lead-form">Get my free plan</a>
              </Button>
            </div>

            <div className="p-8 sm:col-span-3">
              <p className="text-sm font-semibold text-foreground">
                Everything included:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-snug text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
