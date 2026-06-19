import { Sparkles, Target, MousePointerClick, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Create F&B Offers & Ad Creatives',
    description:
      'We turn your menu, signature dishes, catering packages, happy hours, brunches, and seasonal promos into clear, click-worthy campaign concepts with short-form video ideas, carousel creatives, and polished food visuals.',
    tags: ['Offer strategy', 'Video & carousel ads', 'Food-first visuals'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Run Targeted Local Ads',
    description:
      'We launch and manage Facebook & Instagram campaigns focused on reaching nearby diners, families, office teams, tourists, and event planners most likely to reserve, order, or inquire.',
    tags: ['Local targeting', 'FB & IG campaigns', 'Budget control'],
  },
  {
    number: '03',
    icon: MousePointerClick,
    title: 'Convert Clicks Into Orders & Leads',
    description:
      'Traffic lands on an F&B-specific page with a clear action path built to turn clicks into reservations, online orders, catering leads, and private-event opportunities.',
    tags: ['Landing page', 'Lead form', 'Order path'],
  },
]

const flow = [
  'Menu Offer + Ad Creative',
  'Local Traffic',
  'Landing Page + Lead Form',
  'Reservation / Order / Inquiry',
]

export function GrowthSystem() {
  return (
    <section id="system" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Vietgrow Restaurant Growth System
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A simple 3-step system that fills tables and order queues
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            No random boosted posts. Just a clear, repeatable path from ad to
            paying customer.
          </p>
        </div>

        {/* Step cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-3xl font-semibold text-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow strip */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-5">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {flow.map((label, i) => (
              <div
                key={label}
                className="flex items-center gap-3 sm:flex-1 sm:justify-center"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {label}
                </span>
                {i < flow.length - 1 && (
                  <ArrowRight
                    className="ml-auto hidden h-4 w-4 shrink-0 text-muted-foreground sm:ml-0 sm:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
