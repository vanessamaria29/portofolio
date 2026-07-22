import type { Metadata, Viewport } from "next"
import { Sora, Inter, Lora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { MotionProvider } from "@/components/providers/motion-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vanessamaria.dev"),
  title: {
    template: "%s | Vanessa",
    default: "Vanessa | Product Manager Portfolio",
  },
  description: "Portfolio Product Manager yang berfokus pada riset pengguna, strategi produk, dan pengembangan sistem operasional digital.",
  openGraph: {
    title: "Vanessa | Product Manager Portfolio",
    description: "Portfolio Product Manager yang berfokus pada riset pengguna, strategi produk, dan pengembangan sistem operasional digital.",
    url: "https://vanessamaria.dev",
    siteName: "Vanessa Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanessa | Product Manager Portfolio",
    description: "Portfolio Product Manager yang berfokus pada riset pengguna dan strategi produk digital.",
  },
}

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vanessamaria.dev/#person",
      "name": "Vanessa",
      "jobTitle": "Product Manager",
      "url": "https://vanessamaria.dev",
      "sameAs": [
        "https://linkedin.com",
        "https://github.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://vanessamaria.dev/#website",
      "url": "https://vanessamaria.dev",
      "name": "Vanessa | Product Manager Portfolio",
      "description": "Portfolio Product Manager & IT Project Manager yang berfokus pada pengembangan produk digital berbasis riset pengguna."
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`antialiased scroll-smooth ${sora.variable} ${inter.variable} ${lora.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-body text-text-primary flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
        />
        <ThemeProvider>
          <MotionProvider>
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
