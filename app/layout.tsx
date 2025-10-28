import type { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Script from "next/script";


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
        <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68fb46d1511129194ce13778/1j8aop9im';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
