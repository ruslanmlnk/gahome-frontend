import type { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'GAHome',
  description: 'Frontend for GAHome using Payload GraphQL',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
