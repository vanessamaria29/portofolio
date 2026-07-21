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
    className="flex-none w-[280px] sm:w-[320px] md:w-[360px] h-full flex flex-col group overflow-hidden border border-slate-100/80 bg-white/60 backdrop-blur-md hover:border-purple-300 transition-colors snap-start rounded-2xl shadow-sm"
  >
    <Link href={project.href} className="flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-2xl">
      <div className="w-full relative overflow-hidden border-b border-border aspect-[4/3]">
        <ImageContainer 
          src={project.imageSrc} 
          alt={project.title} 
          aspectRatio="video"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <CardTitle className="text-lg mb-2 leading-tight group-hover:text-accent-primary transition-colors">
          {project.title}
        </CardTitle>
        <p className="text-xs text-slate-600 line-clamp-3 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center text-xs font-bold text-accent-primary mt-auto pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
          Lihat Detail <ArrowRight className="ml-1 h-3 w-3" />
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
      title: "Campus Ride-Sharing",
      description: "MVP platform pencocokan rute otomatis untuk mahasiswa yang menghemat biaya transportasi harian hingga 40%.",
      imageSrc: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Fintech Onboarding",
      description: "Optimasi alur KYC melalui progressive disclosure yang meningkatkan tingkat konversi pengguna sebesar 25%.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Library Booking",
      description: "Sistem reservasi kursi perpustakaan real-time menggunakan sensor IoT untuk mengurangi waktu pencarian kursi.",
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      href: "#"
    }
  ]

  const uxProjects = [
    {
      title: "E-Commerce Checkout Redesign",
      description: "Riset dan desain ulang alur pembayaran yang memangkas waktu checkout hingga 30 detik.",
      imageSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Health App Dashboard",
      description: "Merancang visualisasi data metrik kesehatan harian dengan fokus pada aksesibilitas dan kemudahan baca pengguna lansia.",
      imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "EdTech Learning Flow",
      description: "Wireframing dan user testing untuk modul pembelajaran interaktif yang meningkatkan tingkat penyelesaian kursus.",
      imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
      href: "#"
    }
  ]

  const webProjects = [
    {
      title: "University Portal",
      description: "Mengembangkan dashboard akademik responsif menggunakan Next.js dan Tailwind CSS.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Event Ticketing System",
      description: "Aplikasi web full-stack untuk manajemen dan penjualan tiket acara tahunan kampus.",
      imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
      href: "#"
    },
    {
      title: "Company Profile Generator",
      description: "Platform pembuat landing page dinamis berbasis React dengan fitur drag-and-drop.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop",
      href: "#"
    }
  ]

  return (
    <Section id="portfolio" className="py-24 bg-transparent scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-16">
          
          {/* Product Management */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Product Management</h2>
              <p className="text-lg text-slate-600 mt-2">Strategi, riset, dan eksekusi produk digital.</p>
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

          {/* UI/UX Design */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">UI/UX Design</h2>
              <p className="text-lg text-slate-600 mt-2">Riset pengguna, wireframing, dan desain antarmuka.</p>
            </FadeIn>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar"
            >
              {uxProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </motion.div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Web Development</h2>
              <p className="text-lg text-slate-600 mt-2">Implementasi teknis menggunakan teknologi web modern.</p>
            </FadeIn>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar"
            >
              {webProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
