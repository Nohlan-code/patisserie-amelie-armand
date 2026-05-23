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
  metadataBase: new URL("https://patisserie-amelie-armand.vercel.app"),
  title: "Pâtisserie Amélie Armand — Lyon 9ème",
  description:
    "Pâtisserie & chocolaterie artisanale à Lyon 9ème. Pâtisseries, chocolats d'origine, viennoiseries et pause salée. Ouverture officielle le 13 mai.",
  openGraph: {
    title: "Pâtisserie Amélie Armand — Lyon 9ème",
    description:
      "Pâtisseries, chocolats, viennoiseries et pause salée. L'artisanat pâtissier à Lyon 9ème.",
    type: "website",
    locale: "fr_FR",
    images: ["/creations/pavlova-ouverture.webp"],
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
