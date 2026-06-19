'use client'

import { useActionState, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitLead, type SubmitLeadState } from '@/app/actions/submit-lead'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AlertCircle, CheckCircle2, Loader2, Lock, Sparkles } from 'lucide-react'

const businessTypes = [
  'Full-Service Restaurant',
  'Cafe / Coffee Shop',
  'Bar / Lounge',
  'Bakery / Dessert Shop',
  'Fast Casual / QSR',
  'Catering / Private Events',
  'Food Truck / Pop-Up',
  'Other Food & Beverage Business',
]

const budgets = [
  'Under $500/month',
  '$500–$1,000/month',
  '$1,000–$2,500/month',
  '$2,500+/month',
  'Not sure yet',
]

const expectations = [
  'A review of your restaurant, menu, audience & local market',
  'Offer & ad creative ideas tailored to your best-margin items',
  'A clear, practical plan to attract more local customers',
]

const initialState: SubmitLeadState = { ok: false }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full text-base"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Submitting...
        </>
      ) : (
        'Get Free Restaurant Growth Plan'
      )}
    </Button>
  )
}

export function LeadForm() {
  const [state, formAction] = useActionState(submitLead, initialState)
  const [businessType, setBusinessType] = useState('')
  const [budget, setBudget] = useState('')

  const submitted = state.ok

  return (
    <section id="lead-form" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Free, no pressure
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get Your Free Restaurant Growth Plan
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us about your restaurant and goals. We&apos;ll review your
            business, menu, location, and local market, then recommend a
            practical plan for attracting more customers, orders, and inquiries.
          </p>

          <ul className="mt-8 space-y-4">
            {expectations.map((item) => (
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

          <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-border bg-card p-4">
            <Lock
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Your information is only used to prepare your restaurant growth
              plan. No spam. No pressure.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Thank you!
              </h3>
              <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                We&apos;ve received your details and will prepare your free
                restaurant growth plan. Our team will reach out shortly with
                your next steps.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="businessType" value={businessType} />
              <input type="hidden" name="budget" value={budget} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" name="fullName" required placeholder="Jane Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessName">Business name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    required
                    placeholder="Lotus Kitchen"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@restaurant.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="businessType">Business type</Label>
                  <Select
                    value={businessType}
                    onValueChange={setBusinessType}
                    required
                  >
                    <SelectTrigger id="businessType" className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget">Monthly ad budget</Label>
                  <Select value={budget} onValueChange={setBudget} required>
                    <SelectTrigger id="budget" className="w-full">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">
                  Anything else? <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your goals, location, or current challenges."
                />
              </div>

              {state.error ? (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{state.error}</span>
                </div>
              ) : null}

              <SubmitButton />
              <p className="text-center text-xs text-muted-foreground">
                No spam. No pressure. Just your free plan.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
