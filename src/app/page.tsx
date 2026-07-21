import { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { PortfolioShowcase } from "@/components/home/portfolio-showcase"
import { ExperiencePreview } from "@/components/home/experience-preview"

import { ContactCTA } from "@/components/home/contact-cta"

export const metadata: Metadata = {
  title: "Alex | Senior Product Manager & UX Strategist",
  description: "Portfolio of Alex, a Senior Product Manager specializing in user experience and frontend execution. Available for new opportunities.",
  openGraph: {
    title: "Alex | Product Manager Portfolio",
    description: "Portfolio of Alex, a Senior Product Manager specializing in user experience and frontend execution.",
    url: "https://portfolio.com",
    siteName: "Alex Portfolio",
    images: [
      {
        url: "https://portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex - Product Manager Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex | Product Manager Portfolio",
    description: "Building products that balance business goals with user needs.",
    images: ["https://portfolio.com/twitter-image.jpg"],
  },
}

import { GlobalAmbientBackground } from "@/components/layout/global-ambient"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex",
    jobTitle: "Senior Product Manager",
    url: "https://portfolio.com",
    sameAs: [
      "https://linkedin.com/in/alex",
      "https://github.com/alex",
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
