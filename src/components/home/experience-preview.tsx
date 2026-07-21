"use client"
import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"

export function ExperiencePreview() {
  const achievements = [
    "Juara 3 (3rd Winner) | UKRIDA Solve-It Challenge National Competition 2026",
    "Juara 3 (3rd Winner) | Visual Identity Design Competition for Disability Service Unit",
    "Top 5 Finalist | National Oxygrants Competition 2025",
    "Top Finalist (Harapan 3) | National Business Model Canvas Competition (AILEC) 2026",
    "IPK Kumulatif 3.84 (Meraih IPK Sempurna 4.0 pada Semester 3)"
  ]

  const workExperience = [
    {
      title: "Marketing & School Outreach Intern",
      company: "TU FTIK UKRIDA",
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
    "Divisi Acara | RAKORSI UKRIDA (2025) – Menyusun rundown dan script presidium",
    "Divisi Acara | PKKMB Universitas & PKKMB Fakultas UKRIDA (2025)",
    "Panitia Pelaksana | Engineering & Computer Science Expo 2026 (Junction Kampus 2)",
    "Koordinator Registrasi & Usher | Peresmian PSPPI (2025)",
    "Divisi Konsumsi | Kuliah Umum FTIK UKRIDA (2025)",
    "Anggota Aktif | UKM Samaritan"
  ]

  return (
    <Section id="experience" className="py-24 scroll-mt-20 bg-transparent">
      <Container>
        <div className="flex flex-col gap-8 mb-16 max-w-4xl mx-auto text-center items-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary mb-6">
              Akademik, Karir & Kepemimpinan
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch] mx-auto">
              Sebagai mahasiswi Sistem Informasi, saya aktif menyelaraskan keunggulan akademik, kompetisi nasional, pengalaman kerja praktis, dan manajemen organisasi secara terstruktur.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Prestasi Utama */}
            <div className="flex flex-col gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow rounded-full px-6 py-3 border border-slate-100">
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Prestasi Utama</h3>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                {achievements.map((item, index) => {
                  const [title, ...descArr] = item.split(" | ")
                  const desc = descArr.join(" | ")
                  return (
                    <div key={index} className="flex flex-col gap-1.5">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
                      {desc && <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Pengalaman Kerja */}
            <div className="flex flex-col gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow rounded-full px-6 py-3 border border-slate-100">
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Pengalaman Kerja</h3>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                {workExperience.map((work, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex flex-col gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-snug">{work.title}</h4>
                        <p className="text-sm font-semibold text-slate-700 mt-1">{work.company}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{work.date}</span>
                    </div>
                    <ul className="flex flex-col gap-2 mt-2">
                      {work.points.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex items-start gap-3">
                          <span className="text-slate-400 mt-0.5 flex-shrink-0 text-base leading-none">•</span>
                          <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Organisasi */}
            <div className="flex flex-col gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow rounded-full px-6 py-3 border border-slate-100">
                  <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Organisasi</h3>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {organizations.map((item, index) => {
                  const [role, ...descArr] = item.split(" | ")
                  const desc = descArr.join(" | ")
                  return (
                    <div key={index} className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{role}</h4>
                      {desc && <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
