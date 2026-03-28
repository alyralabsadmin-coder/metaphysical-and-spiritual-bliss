import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metaphysicalandspiritualbliss.com"),
  title: {
    default: "Metaphysical & Spiritual Bliss | Gifts for the Mind, Body & Soul",
    template: "%s | Metaphysical & Spiritual Bliss",
  },
  description:
    "A serene metaphysical shop in Clinton, NJ offering healing crystals, tarot readings, spiritual gifts, and more. Visit us Wednesday–Sunday.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metaphysical & Spiritual Bliss",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Metaphysical & Spiritual Bliss",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 ½ East Main Street",
      addressLocality: "Clinton",
      addressRegion: "NJ",
      postalCode: "08809",
      addressCountry: "US",
    },
    telephone: "+19084719698",
    url: "https://metaphysicalandspiritualbliss.com",
    openingHours: ["We-Su 11:00-17:30"],
    sameAs: [
      "https://www.facebook.com/cmatsen11",
      "https://www.instagram.com/cmatsen11/",
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-text-body bg-bg-white antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
