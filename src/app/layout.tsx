import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { PageTransition } from "@/components/motion/PageTransition";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { isPreview, site } from "@/config/site";
import "./globals.css";

// Fonts are bundled with the site (src/fonts/*.woff2, SIL Open Font License) and
// served from our own domain at build time. No request goes to Google Fonts.
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const instrument = localFont({
  src: "../fonts/instrument-serif-latin-400-normal.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
});

const title = `${site.shortName} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.shortName}` },
  description: site.description,
  alternates: { canonical: "./" },
  robots: isPreview ? { index: false, follow: false } : undefined,
  openGraph: {
    title,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.name} logo` }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og-image.png"] },
};

export const viewport: Viewport = {
  themeColor: "#071525",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrument.variable} grain bg-parchment font-sans text-charcoal antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        <ConsentProvider>
          <Header />
          <main id="main" tabIndex={-1} className="pb-mobile-cta">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <StickyMobileCta />
        </ConsentProvider>
      </body>
    </html>
  );
}
