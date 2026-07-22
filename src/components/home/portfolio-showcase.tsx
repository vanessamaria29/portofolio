"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { CardTitle } from "@/components/cards/card"
import { ImageContainer } from "@/components/shared/image-container"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div 
    whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    variants={{
      hidden: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    }}
    className="flex-none w-[280px] sm:w-[320px] md:w-[360px] h-full flex flex-col group overflow-hidden border border-slate-200/80 bg-white/70 backdrop-blur-md hover:border-slate-400 transition-all snap-start rounded-2xl shadow-xs"
  >
    <Link href={project.href} className="flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-2xl cursor-pointer active:scale-[0.99] transition-transform">
      {project.imageSrc && (
        <div className="w-full relative overflow-hidden border-b border-slate-100 aspect-[4/3]">
          <ImageContainer 
            src={project.imageSrc} 
            alt={project.title} 
            aspectRatio="video"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <CardTitle className="text-lg mb-2 font-bold text-slate-900 leading-tight">
          {project.title}
        </CardTitle>
        <p className="text-xs text-slate-600 line-clamp-3 mb-4 flex-grow leading-relaxed font-normal">
          {project.description}
        </p>
        <div className="flex items-center text-xs font-bold text-slate-900 mt-auto pt-3 border-t border-slate-100">
          <span>Lihat Detail</span>
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  </motion.div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function PortfolioShowcase() {
  const pmProjects = [
    {
      title: "KONEKIN",
      description: "Platform yang menghubungkan UMKM dengan talenta mahasiswa untuk menyediakan layanan digital secara aman, terverifikasi, dan transparan.",
      imageSrc: "/images/konekin-cover.png",
      href: "/product-management/konekin"
    },
    {
      title: "Onium",
      description: "Platform yang membantu pedagang UMKM mengelola transaksi, piutang, dan arus kas melalui pencatatan digital yang sederhana dan mudah digunakan.",
      imageSrc: "/images/onium-ui.png",
      href: "/product-management/onium"
    },
    {
      title: "Digital Skill Assessment Platform",
      description: "Platform digital yang membantu siswa SMA memetakan kemampuan digital serta memberikan rekomendasi jurusan yang sesuai.",
      imageSrc: "/images/Logo_UKRIDA_300x300.png",
      href: "/product-management/digital-skill-assessment"
    },
    {
      title: "Glacier",
      description: "Platform operasional berbasis web yang membantu Sahabat Mixue Group mengelola stok, menghitung HPP, dan memantau performa cabang secara terintegrasi.",
      imageSrc: "/images/glacier-logo.png",
      href: "/product-management/glacier"
    }
  ]

  return (
    <Section id="portfolio" className="py-24 bg-transparent scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-16">
          
          {/* Product Management */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Case Studies</h2>
            </FadeIn>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar"
            >
              {pmProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
