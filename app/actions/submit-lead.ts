'use server'

import { sql } from '@/lib/db'
import { sendLeadNotification } from '@/lib/email'

export type SubmitLeadState = {
  ok: boolean
  error?: string
}

function str(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim()
}

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData,
): Promise<SubmitLeadState> {
  const lead = {
    fullName: str(formData, 'fullName'),
    businessName: str(formData, 'businessName'),
    phone: str(formData, 'phone'),
    email: str(formData, 'email'),
    businessType: str(formData, 'businessType'),
    budget: str(formData, 'budget'),
    revenueGoal: str(formData, 'revenueGoal'),
    currentAssets: str(formData, 'currentAssets'),
    message: str(formData, 'message'),
  }

  // Basic server-side validation.
  if (
    !lead.fullName ||
    !lead.businessName ||
    !lead.phone ||
    !lead.email ||
    !lead.businessType ||
    !lead.budget ||
    !lead.revenueGoal ||
    !lead.currentAssets
  ) {
    return { ok: false, error: 'Please fill in all required fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const structuredMessage = [
    `12-month revenue goal: ${lead.revenueGoal}`,
    `Current marketing assets: ${lead.currentAssets}`,
    lead.message ? `Notes: ${lead.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  let savedToDatabase = false
  let notificationSent = false

  try {
    // Store in Neon (parameterized query — safe from SQL injection).
    await sql`
      insert into leads
        (full_name, business_name, phone, email, business_type, budget, message)
      values
        (${lead.fullName}, ${lead.businessName}, ${lead.phone}, ${lead.email},
         ${lead.businessType}, ${lead.budget}, ${structuredMessage || null})
    `
    savedToDatabase = true
  } catch (err) {
    console.error('[v0] Failed to save lead to database:', err)
  }

  // Send the Brevo notification. A lead is accepted if either DB or email succeeds.
  try {
    const notification = await sendLeadNotification({
      ...lead,
      message: structuredMessage,
    })
    notificationSent = notification.sent
  } catch (err) {
    console.error('[v0] Failed to send lead notification email:', err)
  }

  if (!savedToDatabase && !notificationSent) {
    return {
      ok: false,
      error:
        'We could not submit your request. Please try again or call Stillen at 781-363-7322.',
    }
  }

  return { ok: true }
}
