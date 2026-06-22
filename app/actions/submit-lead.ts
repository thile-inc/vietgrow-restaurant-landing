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

  try {
    // Store in Neon (parameterized query — safe from SQL injection).
    await sql`
      insert into leads
        (full_name, business_name, phone, email, business_type, budget, message)
      values
        (${lead.fullName}, ${lead.businessName}, ${lead.phone}, ${lead.email},
         ${lead.businessType}, ${lead.budget}, ${structuredMessage || null})
    `
  } catch (err) {
    console.error('[v0] Failed to save lead to database:', err)
    return {
      ok: false,
      error:
        'We could not save your request. Please try again or contact us directly.',
    }
  }

  // Send the Brevo notification. Email failures should not block the submission.
  try {
    await sendLeadNotification({ ...lead, message: structuredMessage })
  } catch (err) {
    console.error('[v0] Failed to send lead notification email:', err)
  }

  return { ok: true }
}
