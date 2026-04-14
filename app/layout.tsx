import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atelier Provenance | Rédaction experte pour le mobilier de collection',
  description: 'Des notices expertes qui justifient le prix, créent le désir et accélèrent la vente de vos pièces anciennes et vintage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
