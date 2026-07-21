"use client"
import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { motion } from "framer-motion"
import { Award, Briefcase, Users } from "lucide-react"

export function ExperiencePreview() {
  const achievements = [
    "Juara 3 (3rd Winner) | UKRIDA Solve-It Challenge National Competition 2026",
    "Juara 3 (3rd Winner) | Visual Identity Design Competition for Disability Service Unit (Hari Disabilitas Sedunia)",
    "Top 5 Finalist | National Oxygrants Competition 2025",
    "Top Finalist (Harapan 3) | National Business Model Canvas Competition (AILEC) 2026 (UMS)",
    "IPK Kumulatif 3.84 (Meraih IPK Sempurna 4.0 pada Semester 3)"
  ]

  const workExperience = [
    {
      title: "Marketing & School Outreach Intern | TU FTIK UKRIDA",
      date: "Januari 2026 – Sekarang",
      points: [
        "Menyusun jadwal dan target school outreach ke berbagai SMA/SMK.",
        "Berkoordinasi dengan pihak sekolah untuk mengatur pertemuan dengan stakeholder.",
        "Mempresentasikan program pendidikan dan membangun hubungan dengan sekolah.",
        "Menyusun laporan hasil kunjungan dan potensi kerja sama."
      ]
    }
  ]

  const organizations = [
    "Sekretaris Umum | BEM Fakultas Teknologi Cerdas (FTIK) UKRIDA (2025 – 2026)",
    "Sekretaris II & Event Coordinator | Kelas Mentoring BEM Muda FTC (2025)",
    "Sekretaris Pelaksana | PKKMB FTIK UKRIDA & Pertemuan Orang Tua FTC (2025)",
    "Divisi Acara | RAKORSI UKRIDA (2025) – Menyusun rundown dan script presidium sidang",
    "Divisi Acara | PKKMB Universitas & PKKMB Fakultas UKRIDA (2025)",
    "Panitia Pelaksana | Engineering & Computer Science Expo 2026 (Junction Kampus 2)",
    "Koordinator Registrasi & Usher | Peresmian PSPPI (2025)",
    "Divisi Konsumsi | Kuliah Umum FTIK UKRIDA (2025)",
    "Anggota Aktif | UKM Samaritan"
  ]

  const CardGlassmorphism = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <div id={id} className={`h-full bg-white/40 backdrop-blur-md border border-slate-100/50 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  )

  return (
    <Section id="experience" className="py-24 scroll-mt-20 bg-transparent relative">
      <Container>
        <div className="flex flex-col gap-12 mb-16 max-w-4xl mx-auto text-center items-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary mb-6">
              Akademik, Karir & Kepemimpinan
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch] mx-auto">
              Sebagai mahasiswi Sistem Informasi, saya aktif menyelaraskan keunggulan akademik, kompetisi nasional, pengalaman kerja praktis, dan manajemen organisasi secara terstruktur.
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolom 1: Prestasi Utama */}
          <StaggerItem>
            <CardGlassmorphism id="achievements" className="scroll-mt-24">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200/50 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">Prestasi Utama</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {achievements.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-purple-400 mt-1 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardGlassmorphism>
          </StaggerItem>

          {/* Kolom 2: Pengalaman Kerja & Magang */}
          <StaggerItem>
            <CardGlassmorphism>
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200/50 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide leading-tight">Pengalaman Kerja & Magang</h3>
              </div>
              <div className="flex flex-col gap-8">
                {workExperience.map((work, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">{work.title}</h4>
                      <span className="text-xs font-semibold text-purple-500/80 uppercase tracking-widest">{work.date}</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {work.points.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex gap-3 items-start">
                          <span className="text-purple-400 mt-1 flex-shrink-0 text-lg leading-none">•</span>
                          <span className="text-sm text-slate-700 leading-relaxed font-medium">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardGlassmorphism>
          </StaggerItem>

          {/* Kolom 3: Organisasi & Kepanitiaan */}
          <StaggerItem>
            <CardGlassmorphism id="organisasi" className="scroll-mt-24">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200/50 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide leading-tight">Organisasi & Kepanitiaan</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {organizations.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardGlassmorphism>
          </StaggerItem>

        </StaggerChildren>
      </Container>
    </Section>
  )
}
