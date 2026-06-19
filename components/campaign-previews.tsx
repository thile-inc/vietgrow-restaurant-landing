import Image from 'next/image'
import { Heart, MessageCircle, Send, CalendarCheck, Play } from 'lucide-react'

const campaigns = [
  'Signature dish launch',
  'Weekday lunch fill',
  'Brunch reservation push',
  'Happy hour promotion',
  'Catering inquiry campaign',
  'Private dining leads',
  'Holiday menu promotion',
  'Online ordering campaign',
  'New customer tasting offer',
]

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] border-[6px] border-foreground/90 bg-foreground/90 p-1 shadow-2xl">
      <div className="overflow-hidden rounded-[1.7rem] bg-card">{children}</div>
    </div>
  )
}

export function CampaignPreviews() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Campaign previews
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See what your ad-to-order journey looks like
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From a scroll-stopping ad to a finished reservation, order, or event
            inquiry — here&apos;s the experience we build for your customers.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
          {/* Video ad preview */}
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <div className="relative">
                <Image
                  src="/restaurant-ad-preview.png"
                  alt="Video ad preview for a restaurant dinner promotion"
                  width={260}
                  height={340}
                  className="h-[340px] w-full object-cover"
                  style={{ width: '100%', height: '340px' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/85 text-primary shadow-lg">
                    <Play className="h-6 w-6 fill-primary" aria-hidden="true" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <p className="text-sm font-semibold text-background">
                    Dinner for Two Feature
                  </p>
                  <p className="text-xs text-background/80">
                    Chef&apos;s special menu · Reserve this week
                  </p>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Short-form video ad
            </p>
          </div>

          {/* Carousel / offer preview */}
          <div className="flex flex-col items-center gap-4 md:mt-8">
            <PhoneFrame>
              <div className="p-3">
                <Image
                  src="/menu-flatlay.png"
                  alt="Carousel ad preview showing a restaurant menu offer"
                  width={240}
                  height={220}
                  className="h-[200px] w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  New Guest Tasting Menu
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Limited tables for first-time guests this month.
                </p>
                <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <Send className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="mt-3 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
                  Reserve my table
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Carousel &amp; offer creative
            </p>
          </div>

          {/* Lead form preview */}
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">
                  Request your booking
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {['Full name', 'Phone number', 'Dining goal'].map(
                    (label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-xs text-muted-foreground"
                      >
                        {label}
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-3 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
                  Send request
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/5 p-2.5">
                  <CalendarCheck
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-medium text-foreground">
                    Request captured &amp; sent to your inbox
                  </p>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Restaurant landing page &amp; lead form
            </p>
          </div>
        </div>

        {/* Campaign examples */}
        <div className="mt-14">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Campaign concepts we build for F&amp;B brands:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {campaigns.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
