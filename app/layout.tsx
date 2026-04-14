"use client";

import './globals.css';
import { Lora, Inter } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${lora.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
