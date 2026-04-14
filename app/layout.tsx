import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atelier Provenance | Rédaction experte pour le mobilier de collection',
  description: 'Des notices expertes qui justifient le prix, créent le désir et accélèrent la vente de vos pièces anciennes et vintage.',
  keywords: ['mobilier ancien', 'rédaction', 'antiquités', 'notice', 'mobilier de collection', 'objets d\'art'],
  authors: [{ name: 'Atelier Provenance' }],
  openGraph: {
    title: 'Atelier Provenance | Rédaction experte pour le mobilier de collection',
    description: 'Des notices expertes qui justifient le prix, créent le désir et accélèrent la vente de vos pièces anciennes et vintage.',
    url: 'https://atelier-provenance.vercel.app',
    siteName: 'Atelier Provenance',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Provenance',
    description: 'Rédaction experte pour le mobilier de collection et les objets d\'art.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1a1613" />
      </head>
      <body>{children}</body>
    </html>
  )
}
