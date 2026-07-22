import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { ProjectGrid } from "@/components/home/project-grid"

export function PortfolioShowcase() {
  const pmProjects = [
    {
      title: "KONEKIN",
      description: "Platform yang menghubungkan UMKM dengan talenta mahasiswa untuk menyediakan layanan digital secara aman, terverifikasi, dan transparan.",
      imageSrc: "/images/konekin-cover.png",
      href: "/projects/konekin"
    },
    {
      title: "Onium",
      description: "Platform yang membantu pedagang UMKM mengelola transaksi, piutang, dan arus kas melalui pencatatan digital yang sederhana dan mudah digunakan.",
      imageSrc: "/images/onium-ui.png",
      href: "/projects/onium"
    },
    {
      title: "Digital Skill Assessment Platform",
      description: "Platform digital yang membantu siswa SMA memetakan kemampuan digital serta memberikan rekomendasi jurusan yang sesuai.",
      imageSrc: "/images/Logo_UKRIDA_300x300.png",
      href: "/projects/digital-assessment"
    },
    {
      title: "Glacier",
      description: "Platform operasional berbasis web yang membantu Sahabat Mixue Group mengelola stok, menghitung HPP, dan memantau performa cabang secara terintegrasi.",
      imageSrc: "/images/glacier-logo.png",
      href: "/projects/glacier"
    }
  ]

  return (
    <Section id="portfolio" className="py-24 bg-transparent scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Portfolio & Case Studies</h2>
            </FadeIn>
            <ProjectGrid projects={pmProjects} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
