import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixarrow.com'),
  title: {
    default: "Pixarrow — High-Performance Digital Growth Agency",
    template: "%s | Pixarrow"
  },
  description: "Pixarrow is a high-decibel digital growth unit that transforms startups into market leaders through premium engineering, strategic design, and high-conversion motion systems.",
  keywords: ["digital growth agency", "ui ux design", "nextjs development", "motion design agency", "startup growth", "pixarrow", "high performance web"],
  authors: [{ name: "Anuj Sharma" }, { name: "Ankit Rajput" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixarrow.com',
    siteName: 'Pixarrow',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pixarrow — Digital Growth Excellence'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixarrow — Digital Growth Excellence',
    description: 'Engineering systems that scale startups at hyper-speed.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="relative min-h-screen selection:bg-brand-purple selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pixarrow",
              "url": "https://pixarrow.com",
              "logo": "https://pixarrow.com/logo.png",
              "sameAs": [
                "https://twitter.com/pixarrow",
                "https://linkedin.com/company/pixarrow",
                "https://instagram.com/pixarrow"
              ],
              "description": "High-performance digital growth agency specialzing in UI/UX, Motion Systems, and Next.js Engineering.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            })
          }}
        />
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern w-full max-w-7xl mx-auto opacity-50" />
        <Navigation />
        <main className="relative z-10 w-full">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
