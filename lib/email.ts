// Brevo (Sendinblue) transactional email.
// Set BREVO_API_KEY in your project env vars:
//   https://app.brevo.com/settings/keys/api
// Sender (leads@vietgrow.ai) must be a verified sender/domain in Brevo.
const BREVO_API_KEY = process.env.BREVO_API_KEY ?? ''

const FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? 'leads@vietgrow.ai'
const FROM_NAME = 'Vietgrow Leads'
const TO_EMAIL = process.env.LEAD_NOTIFY_TO ?? 'hello@vietgrow.ai'

export type LeadEmailPayload = {
  fullName: string
  businessName: string
  phone: string
  email: string
  businessType: string
  budget: string
  message?: string
}

export async function sendLeadNotification(lead: LeadEmailPayload) {
  if (!BREVO_API_KEY) {
    console.warn('[v0] BREVO_API_KEY not set. Skipping email notification.')
    return { sent: false as const }
  }

  const rows: Array<[string, string]> = [
    ['Name', lead.fullName],
    ['Business', lead.businessName],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Business type', lead.businessType],
    ['Current monthly revenue', lead.budget],
    ['Message', lead.message?.trim() || '—'],
  ]

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">
      <h2 style="color:#8b2f24;margin:0 0 4px">New Restaurant Growth Plan request</h2>
      <p style="color:#666;margin:0 0 16px">A new lead just submitted the Vietgrow form.</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f8faf8;font-weight:bold;width:160px">${label}</td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb">${value}</td>
          </tr>`,
          )
          .join('')}
      </table>
    </div>
  `

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { email: FROM_EMAIL, name: FROM_NAME },
      to: [{ email: TO_EMAIL }],
      replyTo: { email: lead.email, name: lead.fullName },
      subject: `New lead: ${lead.businessName} (${lead.fullName})`,
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`Brevo API error ${res.status}: ${detail}`)
  }

  return { sent: true as const }
}
