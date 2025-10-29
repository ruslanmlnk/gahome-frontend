'use server'

import nodemailer from 'nodemailer'
import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'

function requireEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing required env: ${name}`)
  return v
}

export async function submitLead(formData: FormData) {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!fullName) return

  // Persist lead via backend SDK (kept as requested)
  const sdk = getSdk(graphqlClient)
  await sdk.CreateLead({ fullName, email, phone, message })

  const host = requireEnv('SMTP_HOST')
  const port = Number(requireEnv('SMTP_PORT'))
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true'
  const user = requireEnv('SMTP_USER')
  const pass = requireEnv('SMTP_PASS')
  const to = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || user

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const subject = `New contact message from ${fullName}`
  const textLines = [
    `Name: ${fullName}`,
    email ? `Email: ${email}` : undefined,
    phone ? `Phone: ${phone}` : undefined,
    message ? '\nMessage:' : undefined,
    message || undefined,
  ].filter(Boolean) as string[]

  await transporter.sendMail({
    from: { name: 'Contact Form', address: user },
    to,
    subject,
    text: textLines.join('\n'),
    replyTo: email || undefined,
  })
}
