"use client"
import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { Award, Briefcase, Users, Star } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

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
    <Section id="experience" className="py-24 scroll-mt-20 bg-transparent relative">
      <Container>
        <div className="flex flex-col gap-12 mb-12 max-w-4xl mx-auto text-center items-center">
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
          <Tabs defaultValue="prestasi" className="w-full max-w-5xl mx-auto">
            
            <TabsList className="grid w-full grid-cols-3 mb-10 bg-white/50 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-slate-200/60 h-16">
              <TabsTrigger value="prestasi" className="rounded-xl text-sm md:text-base font-semibold py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm">
                <Award className="w-4 h-4 md:w-5 md:h-5 md:mr-2" /> 
                <span className="hidden md:inline">Prestasi Utama</span>
              </TabsTrigger>
              <TabsTrigger value="pengalaman" className="rounded-xl text-sm md:text-base font-semibold py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 md:mr-2" /> 
                <span className="hidden md:inline">Pengalaman Kerja</span>
              </TabsTrigger>
              <TabsTrigger value="organisasi" className="rounded-xl text-sm md:text-base font-semibold py-2.5 transition-all data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm">
                <Users className="w-4 h-4 md:w-5 md:h-5 md:mr-2" /> 
                <span className="hidden md:inline">Organisasi</span>
              </TabsTrigger>
            </TabsList>

            {/* KONTEN PRESTASI */}
            <TabsContent value="prestasi" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((item, index) => {
                  const [title, ...descArr] = item.split(" | ")
                  const desc = descArr.join(" | ")
                  return (
                    <div key={index} className="flex gap-5 items-start bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center border border-purple-100 group-hover:scale-110 transition-transform">
                        <Star className="w-5 h-5 text-purple-600 fill-purple-100" />
                      </div>
                      <div className="flex flex-col gap-1 pt-0.5">
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{title}</h4>
                        {desc && <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
            
            {/* KONTEN PENGALAMAN */}
            <TabsContent value="pengalaman" className="mt-0 outline-none">
              <div className="space-y-6">
                {workExperience.map((work, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{work.title}</h4>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{work.company}</p>
                      </div>
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100 whitespace-nowrap">
                        {work.date}
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {work.points.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* KONTEN ORGANISASI */}
            <TabsContent value="organisasi" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizations.map((item, index) => {
                  const [role, ...descArr] = item.split(" | ")
                  const desc = descArr.join(" | ")
                  return (
                    <div key={index} className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-center group">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{role}</h4>
                      {desc && <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>}
                    </div>
                  )
                })}
              </div>
            </TabsContent>

          </Tabs>
        </FadeIn>
      </Container>
    </Section>
  )
}
