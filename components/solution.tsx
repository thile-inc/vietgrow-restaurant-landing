import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  {
    title: 'A complete system, not random posts',
    body: 'Offer strategy, creatives, campaigns, landing page, and booking page — built to work together so every dollar has a job.',
  },
  {
    title: 'Built specifically for food & beverage',
    body: 'Restaurants, cafes, bars, bakeries, catering, and private dining — we speak your customers\u2019 cravings, not generic marketing.',
  },
  {
    title: 'Designed to win locally',
    body: 'We position you against nearby options and reach the right people in your area who are ready to reserve, order, or inquire.',
  },
]

export function Solution() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-2xl">
            <Image
              src="/plated-dish.png"
              alt="A polished plated restaurant dish with fresh ingredients and warm table styling"
              width={680}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            What Vietgrow does for you
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            We build your restaurant&apos;s entire customer-getting machine
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            Vietgrow creates the offer strategy, ad content, video and carousel
            creative, targeted campaign, landing page, booking page, and customer
            acquisition funnel — built for restaurants, cafes, bars, bakeries,
            caterers, and local food brands.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
