import { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardTitle } from "@/components/cards/card"
import { ImageContainer } from "@/components/shared/image-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Product Management Case Studies",
  description: "A collection of product management case studies and projects.",
}

export default function ProductManagementPage() {
  const projects = [
    {
      title: "Onium",
      category: "Product Management & UX",
      problem: "Pengguna kesulitan melacak pengeluaran secara real-time karena aplikasi keuangan yang ada terlalu kompleks.",
      role: "Product Manager",
      process: "Melakukan riset pengguna mendalam, merancang wireframe, dan memimpin tim developer dengan metodologi Agile.",
      outcome: "Aplikasi berhasil diluncurkan dengan 10k+ active users di bulan pertama dan mendapat rating 4.8 di App Store.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
      tools: ["Figma", "Jira", "Mixpanel"],
      timeline: "Fall 2023",
      href: "/product-management/onium"
    },
    {
      title: "Campus Ride-Sharing App",
      category: "Product Management & UX",
      problem: "Mahasiswa kesulitan menemukan teman dengan rute searah untuk berbagi biaya transportasi.",
      role: "Lead PM",
      process: "Membangun MVP dengan fitur pencocokan rute otomatis menggunakan algoritma geolocation sederhana.",
      outcome: "Mengurangi biaya transportasi mahasiswa hingga 40% dan mencapai 5k trip di semester pertama.",
      imageSrc: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop", 
      tools: ["Notion", "Figma", "Amplitude"],
      timeline: "Spring 2024",
      href: "#"
    },
    {
      title: "Fintech Onboarding Optimization",
      category: "Product Analytics",
      problem: "Tingkat drop-off pengguna pada proses KYC mencapai 60% karena form yang terlalu panjang.",
      role: "Product Manager",
      process: "Menganalisis data drop-off, melakukan A/B testing pada flow registrasi yang lebih pendek (progressive disclosure).",
      outcome: "Conversion rate meningkat sebesar 25% dan waktu penyelesaian KYC berkurang menjadi rata-rata 3 menit.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", 
      tools: ["Optimizely", "Metabase", "Hotjar"],
      timeline: "Winter 2023",
      href: "#"
    },
    {
      title: "Library Seat Booking System",
      category: "Product Strategy",
      problem: "Saat minggu ujian, mahasiswa membuang waktu mencari kursi kosong di perpustakaan utama.",
      role: "Associate PM",
      process: "Berkolaborasi dengan pihak perpustakaan untuk mengintegrasikan sensor ketersediaan kursi secara real-time.",
      outcome: "Sistem berhasil mengurangi waktu pencarian kursi sebesar 80% dan diadopsi secara resmi oleh universitas.",
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", 
      tools: ["Trello", "Miro", "Analytics"],
      timeline: "Fall 2022",
      href: "#"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-24 bg-surface">
        <Container>
          <div className="max-w-4xl mb-16">
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-text-tertiary hover:text-accent-primary transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>
            <FadeIn direction="up">
              <h1 className="text-4xl font-black tracking-tight text-text-primary md:text-5xl lg:text-6xl mb-6">
                Product Management
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                Studi kasus dan proyek di mana saya memimpin inisiatif produk, mulai dari riset pengguna dan strategi hingga eksekusi dan peluncuran.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn 
                key={project.title} 
                delay={index * 0.1} 
                direction="up" 
              >
                <Card className="h-full flex flex-col group overflow-hidden border-border bg-surface hover:border-accent-primary/30 transition-colors">
                  <div className="flex flex-col h-full">
                    <div className="w-full relative overflow-hidden border-b border-border aspect-video">
                      <ImageContainer 
                        src={project.imageSrc} 
                        alt={project.title} 
                        aspectRatio="video"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                          {project.timeline}
                        </span>
                      </div>

                      <CardTitle className="text-2xl mb-4 leading-tight group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </CardTitle>

                      <div className="flex flex-col gap-4 mb-6 flex-grow">
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Problem</span>
                          <p className="text-sm text-text-secondary leading-relaxed font-medium">{project.problem}</p>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Process</span>
                          <p className="text-sm text-text-secondary leading-relaxed">{project.process}</p>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-1">Outcome</span>
                          <p className="text-sm text-success font-medium">{project.outcome}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                        <div className="flex flex-wrap gap-2 hidden sm:flex">
                          {project.tools.slice(0,3).map(tool => (
                            <Badge key={tool} variant="secondary" className="bg-surface-secondary text-xs">{tool}</Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                          {project.href !== "#" ? (
                            <Button asChild size="sm" className="w-full sm:w-auto group/btn">
                              <Link href={project.href}>
                                Baca Studi Kasus
                                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                              </Link>
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="w-full sm:w-auto cursor-not-allowed opacity-50">
                              Segera Hadir
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
