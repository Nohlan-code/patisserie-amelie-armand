import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pâtisserie Amélie Armand — Pâtisseries, Chocolats, Viennoiseries",
  description:
    "Pâtisserie artisanale Amélie Armand. Pâtisseries, chocolats, viennoiseries et pause salée. Ouverture officielle le 13 mai.",
  openGraph: {
    title: "Pâtisserie Amélie Armand",
    description:
      "Pâtisseries, chocolats, viennoiseries et pause salée. L'artisanat français à votre table.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
