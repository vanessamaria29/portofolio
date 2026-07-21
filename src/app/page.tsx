import { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { PortfolioShowcase } from "@/components/home/portfolio-showcase"
import { ExperiencePreview } from "@/components/home/experience-preview"

import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Vanessa | Product Management Portfolio",
  description: "Portofolio Product Management dari Vanessa, mahasiswi Sistem Informasi semester 5 yang mencari kesempatan magang di bidang Product Management & IT Project Management.",
  openGraph: {
    title: "Vanessa | Product Management Portfolio",
    description: "Portofolio Product Management dari Vanessa, mahasiswi Sistem Informasi semester 5.",
    url: "https://portfolio.com",
    siteName: "Vanessa Portfolio",
    images: [
      {
        url: "https://portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vanessa - Product Management Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanessa | Product Management Portfolio",
    description: "Portofolio Product Management dari Vanessa.",
    images: ["https://portfolio.com/twitter-image.jpg"],
  },
}

import { GlobalAmbientBackground } from "@/components/layout/global-ambient"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vanessa",
    jobTitle: "Product Management Intern",
    url: "https://portfolio.com",
    sameAs: [
      "https://linkedin.com/in/vanessa",
      "https://github.com/vanessa",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative flex flex-col min-h-screen">
        <GlobalAmbientBackground />
        <HeroSection />
        <PortfolioShowcase />
        <ExperiencePreview />
        <ContactCTA />
      </div>
    </>
  )
}
