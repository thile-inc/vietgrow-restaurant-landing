import {
  Users,
  CalendarCheck,
  Palette,
  Route,
  PiggyBank,
  MapPin,
  Clock,
  LayoutGrid,
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'More qualified local leads',
    body: 'Reach nearby diners, office teams, and event planners who are ready to order.',
  },
  {
    icon: CalendarCheck,
    title: 'More reservations & order requests',
    body: 'Turn interest into table bookings, online orders, catering leads, and private-event inquiries.',
  },
  {
    icon: Palette,
    title: 'Better ad creatives',
    body: 'Premium short-form video and carousel creative built around your food, menu, and atmosphere.',
  },
  {
    icon: Route,
    title: 'A clear ad-to-order journey',
    body: 'Every click follows a path designed to convert into a booking, order, or inquiry.',
  },
  {
    icon: PiggyBank,
    title: 'Less wasted ad spend',
    body: 'A real funnel means your budget works harder, not just louder.',
  },
  {
    icon: LayoutGrid,
    title: 'A page built for F&B offers',
    body: 'A landing page made for menus, limited-time offers, catering packages, and events.',
  },
  {
    icon: MapPin,
    title: 'Stronger local positioning',
    body: 'Stand out from nearby restaurants and win customers in your trade area.',
  },
  {
    icon: Clock,
    title: 'Busier slow periods',
    body: 'Fill weekday lunches, early dinners, brunch windows, and off-peak order gaps.',
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What you can expect
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Real outcomes for your restaurant
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
