import { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { PortfolioShowcase } from "@/components/home/portfolio-showcase"
import { ExperiencePreview } from "@/components/home/experience-preview"
import { ContactCTA } from "@/components/home/contact-cta"
import { GlobalAmbientBackground } from "@/components/layout/global-ambient"

export const metadata: Metadata = {
  title: "Vanessa | Product Manager & IT Business Analyst Portfolio",
  description: "Mahasiswi Sistem Informasi semester 5 yang berpengalaman mengerjakan berbagai studi kasus dan proyek digital bersama stakeholder nyata. Tertarik berkarier di Product Management, IT Business Analysis, dan IT Project Management.",
  openGraph: {
    title: "Vanessa | Product Manager Portfolio",
    description: "Portofolio Product Management dari Vanessa, mahasiswi Sistem Informasi semester 5 di UKRIDA.",
    url: "https://vanessamaria.dev",
    siteName: "Vanessa Portfolio",
    images: [
      {
        url: "https://vanessamaria.dev/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Vanessa - Product Manager Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanessa | Product Manager Portfolio",
    description: "Portofolio Product Management dari Vanessa.",
    images: ["https://vanessamaria.dev/images/profile.jpeg"],
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vanessa",
    jobTitle: "Product Management Intern",
    url: "https://vanessamaria.dev",
    sameAs: [
      "https://www.linkedin.com/in/vanessa-maria-2a630b362",
      "https://wa.me/6285695886864",
      "https://github.com/vanessamaria29",
      "mailto:vanessapardedemaria@gmail.com",
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
