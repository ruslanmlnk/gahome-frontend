'use server'

import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'

export async function submitLead(formData: FormData) {
  const fullName = String(formData.get('fullName') ?? '')
  const email = String(formData.get('email') ?? '')
  const phone = String(formData.get('phone') ?? '')
  const message = String(formData.get('message') ?? '')

  const sdk = getSdk(graphqlClient)
  await sdk.CreateLead({ fullName, email, phone, message })
}
