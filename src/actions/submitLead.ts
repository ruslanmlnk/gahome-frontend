'use server'

import nodemailer from 'nodemailer'
import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'
import { headers } from 'next/headers'

// Basic in-memory rate limiter by IP (per process)
const lastByIP = new Map<string, number>()
const RATE_WINDOW_MS = 60_000 // 1 minute

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
  const honey = String(formData.get('website') ?? '').trim()

  // Honeypot: if filled, silently drop
  if (honey) return

  if (!fullName) return

  // Throttle by cookie and IP
  try {
    const hs = await headers()
    const ip = (hs.get('x-forwarded-for') || hs.get('x-real-ip') || '').split(',')[0].trim() || 'unknown'
    const now = Date.now()
    const lastIpTs = lastByIP.get(ip) ?? 0
    if (now - lastIpTs < RATE_WINDOW_MS) {
      return
    }
    lastByIP.set(ip, now)
  } catch {}

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
