import './globals.css'
import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Atelier Provenance | Rédaction experte pour le mobilier de collection',
  description: 'Transformez vos annonces de mobilier ancien en textes qui justifient le prix, créent du désir et accélèrent la vente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
