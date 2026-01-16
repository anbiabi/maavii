import type { Metadata } from "next";
import { Geologica, Lora } from "next/font/google";
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
  title: "MAAVII | African & Korean Fusion Cuisine",
  description: "Experience the soulful heat of West Africa blended with the refined umami of Korean traditions. Handcrafted daily with premium ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
