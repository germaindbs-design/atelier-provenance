import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Provenance — La valeur de vos objets, rendue lisible",
  description:
    "Atelier éditorial pour maisons de vente, galeries et marchands : audit de catalogue, fiches premium, direction éditoriale. De l'Audit Express au Système Premium.",
  keywords: [
    "mobilier ancien",
    "rédaction",
    "antiquités",
    "notice",
    "catalogue",
    "galerie",
    "objets d'art",
    "storytelling",
  ],
  authors: [{ name: "Atelier Provenance" }],
  openGraph: {
    title: "Atelier Provenance — La valeur de vos objets, rendue lisible",
    description:
      "Atelier éditorial pour maisons de vente, galeries et marchands : audit de catalogue, fiches premium, direction éditoriale.",
    url: "https://atelier-provenance.vercel.app",
    siteName: "Atelier Provenance",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Provenance",
    description:
      "Atelier éditorial pour le mobilier de collection et les objets d'art.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#211C16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}
