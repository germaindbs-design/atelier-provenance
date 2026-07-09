import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const SITE_URL = "https://atelier-provenance.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Atelier Provenance — Dépôt-vente et documentation de mobilier ancien",
  description:
    "Dépôt-vente en mandataire : prix de reprise fixe garanti, notice documentée de 4 pages incluse, diffusion auprès des acheteurs. Et des fiches professionnelles rédigées pour toutes les plateformes — Proantic, Selency, Catawiki — dès 150 €.",
  keywords: [
    "dépôt-vente mobilier ancien",
    "vendre meuble ancien",
    "notice mobilier de collection",
    "rédaction annonce antiquités",
    "estimation meuble ancien",
    "fiche Proantic",
    "fiche Selency",
    "objets d'art",
    "antiquaire",
    "commode Louis XV",
  ],
  authors: [{ name: "Atelier Provenance" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "Atelier Provenance — Dépôt-vente et documentation de mobilier ancien",
    description:
      "Confiez la pièce : reprise fixe garantie, notice de 4 pages, diffusion. Ou gardez la vente : fiches professionnelles pour toutes les plateformes, dès 150 €.",
    url: SITE_URL,
    siteName: "Atelier Provenance",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/etudes/met-commode.webp", width: 960, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Provenance",
    description:
      "Dépôt-vente et documentation de mobilier ancien et d'objets d'art.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#211C16",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Atelier Provenance",
  url: SITE_URL,
  email: "contact.atelierprovenance@gmail.com",
  telephone: "+33751420733",
  description:
    "Dépôt-vente en mandataire et documentation éditoriale de mobilier ancien et d'objets d'art.",
  areaServed: "FR",
  knowsLanguage: ["fr", "en"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Dépôt-vente en mandataire",
      description:
        "Prix de reprise fixe garanti, notice documentée de 4 pages, diffusion catalogue, plateformes et média. Sans frais pour le vendeur : rémunération sur l'écart de revente, contractualisée.",
    },
    {
      "@type": "Offer",
      name: "Fiche professionnelle à l'unité",
      price: "150",
      priceCurrency: "EUR",
      description:
        "Notice documentée de 4 pages avec versions plateforme et réseaux, pour toute plateforme de vente.",
    },
    { "@type": "Offer", name: "Pack 3 fiches", price: "450", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Pack 10 fiches", price: "1200", priceCurrency: "EUR" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
