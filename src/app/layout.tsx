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
    default: "Pixarrow — Premium Digital Growth & Web Engineering Agency",
    template: "%s | Pixarrow - Digital Growth Agency"
  },
  description: "Pixarrow is a digital growth agency transforming startups into market leaders with premium next.js engineering, UI/UX design, and motion systems.",
  keywords: ["digital growth agency", "ui ux design", "nextjs development", "motion design agency", "startup growth", "pixarrow", "high performance web", "web engineering agency"],
  authors: [{ name: "Anuj Sharma" }, { name: "Ankit Rajput" }],
  alternates: {
    canonical: 'https://pixarrow.com',
  },
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
    title: 'Pixarrow — Premium Digital Growth & Web Engineering Agency',
    description: 'Pixarrow is a digital growth agency transforming startups into market leaders with premium next.js engineering, UI/UX design, and motion systems.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: "/favicon.png",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S932HTZHLX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S932HTZHLX');
          `}
        </Script>
      </head>
      <body className="relative min-h-screen selection:bg-brand-purple selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pixarrow",
              "url": "https://pixarrow.com",
              "logo": "https://pixarrow.com/logo.png",
              "image": "https://pixarrow.com/og-image.png",
              "sameAs": [
                "https://twitter.com/pixarrow",
                "https://linkedin.com/company/pixarrow",
                "https://instagram.com/pixarrow"
              ],
              "description": "High-performance digital growth agency specializing in UI/UX, Motion Systems, and Next.js Engineering.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "telephone": "+91-7973060924",
              "priceRange": "$$$"
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
