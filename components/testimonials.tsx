import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We stopped boosting random food photos and finally had a clear path from ad to reservation. Our slow weeknights became much easier to promote.',
    name: 'Marco T.',
    role: 'Owner, Neighborhood Trattoria',
    initials: 'MT',
  },
  {
    quote:
      'The landing page made our catering offer simple to understand. Instead of random DMs, we started getting details we could actually quote.',
    name: 'Alyssa R.',
    role: 'Cafe & Catering Director',
    initials: 'AR',
  },
  {
    quote:
      'The campaign gave our brunch menu a real push. People clicked through, saw the offer, and booked without us chasing every message manually.',
    name: 'Daniel P.',
    role: 'Restaurant General Manager',
    initials: 'DP',
  },
  {
    quote:
      'We used it for private dining and holiday parties. The inquiries were more organized and came from people already looking for a venue.',
    name: 'Vivian L.',
    role: 'Bar & Private Events Owner',
    initials: 'VL',
  },
]

const stats = [
  { value: '+50%', label: 'more reservation and inquiry volume in month one' },
  { value: '24/7', label: 'campaigns working between service rushes' },
  { value: 'Done-for-you', label: 'creative, ads & booking page' },
]

export function Testimonials() {
  return (
    <section id="results" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Proof &amp; results
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Food and beverage owners who switched to a real system
          </h2>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-3 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Illustrative examples. Results vary by restaurant, offer, location,
          operations, and ad budget.
        </p>
      </div>
    </section>
  )
}
