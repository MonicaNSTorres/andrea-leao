import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "psicóloga em São José dos Campos",
    "psicóloga Jardim Aquarius",
    "psicoterapia em São José dos Campos",
    "terapia online",
    "psicóloga online",
    "Andréa Leão psicóloga",
    "psicóloga para brasileiros no exterior",
    "terapia para expatriados",
    "psicóloga brasileira online exterior",
    "terapia online brasileiros fora do Brasil",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Andréa Leão Psicóloga",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/andrea/andrea-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Psicóloga Andréa Leão",
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}