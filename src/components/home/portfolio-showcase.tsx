import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { ProjectGrid } from "@/components/home/project-grid"

export function PortfolioShowcase() {
  const pmProjects = [
    {
      title: "Onium",
      description: "Progressive Web App (PWA) offline-first untuk membantu pedagang pasar tradisional mengelola arus kas harian dan pencatatan piutang.",
      imageSrc: "/images/onium-ui.png",
      href: "/projects/onium"
    },
    {
      title: "Glacier",
      description: "Dashboard operasional terpusat untuk mengotomatisasi kalkulasi HPP dan pemantauan stok real-time di jaringan cabang Sahabat Mixue Group.",
      imageSrc: "/images/glacier-logo.png",
      href: "/projects/glacier"
    },
    {
      title: "Digital Skill Assessment Platform",
      description: "Platform digital rekomendasi jurusan SMA berbasis AI dengan pengujian kognitif dan pembobotan kompetensi digital.",
      imageSrc: "/images/Logo_UKRIDA_300x300.png",
      href: "/projects/digital-assessment"
    },
    {
      title: "KONEKIN",
      description: "Platform yang menghubungkan UMKM dengan talenta mahasiswa untuk menyediakan layanan digital secara aman, terverifikasi, dan transparan.",
      imageSrc: "/images/konekin-cover.png",
      href: "/projects/konekin"
    }
  ]

  return (
    <Section id="portfolio" className="py-24 bg-transparent scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Portofolio & Studi Kasus</h2>
            </FadeIn>
            <ProjectGrid projects={pmProjects} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
