import './globals.css'
import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// Configuration des polices Google Fonts
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atelier Provenance | Rédaction experte pour le mobilier de collection',
  description: 'Transformez vos annonces en textes qui justifient le prix, créent du désir et accélèrent la vente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
