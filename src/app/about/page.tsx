import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { JourneyTimeline } from "@/components/about/journey-timeline"
import { ProductMindset } from "@/components/about/product-mindset"
import { CrossDiscipline } from "@/components/about/cross-discipline"
import { CoreValues } from "@/components/about/core-values"
import { LearningAndGrowth } from "@/components/about/learning-and-growth"
import { BeyondWork } from "@/components/about/beyond-work"
import { FutureGoals } from "@/components/about/future-goals"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my professional journey, product mindset, core values, and what drives me to build meaningful digital products.",
  openGraph: {
    title: "About Vanessa | Product Manager",
    description: "Learn more about my professional journey, product mindset, and core values.",
    url: "https://vanessamaria.dev/about",
  }
}

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Vanessa",
      "jobTitle": "Product Manager",
      "description": "Product Manager with a background in UX design and frontend engineering.",
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col min-h-screen">
        <AboutHero />
        <JourneyTimeline />
        <ProductMindset />
        <CrossDiscipline />
        <CoreValues />
        <LearningAndGrowth />
        <BeyondWork />
        <FutureGoals />
      </div>
    </>
  )
}
