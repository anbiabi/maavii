import type { Metadata } from "next";
import { Geologica, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import MainLayout from "@/components/MainLayout";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAAVII | African Cultural Hub & Fusion Cuisine Busan",
  description: "Authentic African ingredients and fusion cuisine in Busan, South Korea. Experience West African flavors blended with Korean traditions. Shop African groceries nationwide.",
  keywords: ["African Food Busan", "Korean Fusion", "African Grocery Korea", "Miondo Korea", "Cultural Hub Busan", "MAAVII"],
  openGraph: {
    title: "MAAVII | African Cultural Hub in Busan",
    description: "Soulful heat of West Africa meets Korean traditions. Restaurant, Marketplace, and Cultural Center.",
    type: "website",
    locale: "en_US",
    url: "https://maavii.com",
    siteName: "MAAVII",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "MAAVII",
    "image": "https://maavii.com/images/logo.png",
    "@id": "https://maavii.com",
    "url": "https://maavii.com",
    "telephone": "+82-10-4409-2301",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Busan, South Korea",
      "addressLocality": "Busan",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.1796,
      "longitude": 129.0756
    },
    "servesCuisine": ["African", "Korean Fusion"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense Script Placeholder */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-0000000000000000"
        />
      </head>
      <body className={`${geologica.variable} ${lora.variable} antialiased bg-cream text-charcoal`}>
        <LanguageProvider>
          <CartProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
