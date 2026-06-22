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
import { useLanguage } from '@/components/language-provider'

const initialState: SubmitLeadState = { ok: false }

function SubmitButton({
  submitting,
  submit,
}: {
  submitting: string
  submit: string
}) {
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
          {submitting}
        </>
      ) : (
        submit
      )}
    </Button>
  )
}

export function LeadForm() {
  const { copy } = useLanguage()
  const [state, formAction] = useActionState(submitLead, initialState)
  const [businessType, setBusinessType] = useState('')
  const [budget, setBudget] = useState('')
  const [revenueGoal, setRevenueGoal] = useState('')
  const [currentAssets, setCurrentAssets] = useState('')

  const submitted = state.ok

  return (
    <section id="lead-form" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {copy.form.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {copy.form.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {copy.form.body}
          </p>

          <ul className="mt-8 space-y-4">
            {copy.form.expectations.map((item) => (
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
              {copy.form.privacy}
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
                {copy.form.successTitle}
              </h3>
              <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                {copy.form.successBody}
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="businessType" value={businessType} />
              <input type="hidden" name="budget" value={budget} />
              <input type="hidden" name="revenueGoal" value={revenueGoal} />
              <input type="hidden" name="currentAssets" value={currentAssets} />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">{copy.form.labels.fullName}</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder={copy.form.placeholders.fullName}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessName">
                    {copy.form.labels.businessName}
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    required
                    placeholder={copy.form.placeholders.businessName}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">{copy.form.labels.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={copy.form.placeholders.phone}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">{copy.form.labels.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={copy.form.placeholders.email}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="businessType">
                    {copy.form.labels.businessType}
                  </Label>
                  <Select
                    value={businessType}
                    onValueChange={setBusinessType}
                    required
                  >
                    <SelectTrigger id="businessType" className="w-full">
                      <SelectValue
                        placeholder={copy.form.placeholders.businessType}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {copy.form.businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget">{copy.form.labels.budget}</Label>
                  <Select value={budget} onValueChange={setBudget} required>
                    <SelectTrigger id="budget" className="w-full">
                      <SelectValue placeholder={copy.form.placeholders.budget} />
                    </SelectTrigger>
                    <SelectContent>
                      {copy.form.budgets.map((budgetOption) => (
                        <SelectItem
                          key={budgetOption.value}
                          value={budgetOption.value}
                        >
                          {budgetOption.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="revenueGoal">
                    {copy.form.labels.revenueGoal}
                  </Label>
                  <Select
                    value={revenueGoal}
                    onValueChange={setRevenueGoal}
                    required
                  >
                    <SelectTrigger id="revenueGoal" className="w-full">
                      <SelectValue
                        placeholder={copy.form.placeholders.revenueGoal}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {copy.form.revenueGoals.map((goal) => (
                        <SelectItem key={goal.value} value={goal.value}>
                          {goal.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="currentAssets">
                    {copy.form.labels.currentAssets}
                  </Label>
                  <Select
                    value={currentAssets}
                    onValueChange={setCurrentAssets}
                    required
                  >
                    <SelectTrigger id="currentAssets" className="w-full">
                      <SelectValue
                        placeholder={copy.form.placeholders.currentAssets}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {copy.form.currentAssets.map((asset) => (
                        <SelectItem key={asset.value} value={asset.value}>
                          {asset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">
                  {copy.form.labels.message}{' '}
                  <span className="text-muted-foreground">
                    {copy.form.labels.optional}
                  </span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder={copy.form.placeholders.message}
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

              <SubmitButton
                submitting={copy.form.submitting}
                submit={copy.form.submit}
              />
              <p className="text-center text-xs text-muted-foreground">
                {copy.form.footer}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
