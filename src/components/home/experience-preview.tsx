import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { Briefcase, Trophy, Users, ArrowRight, Award, GraduationCap, FolderKanban } from "lucide-react"
import Link from "next/link"

export function ExperiencePreview() {
  const professionalExperiences = [
    {
      title: "Marketing & School Outreach Intern",
      subtitle: "TU FTIK UKRIDA",
      badge: "Internship",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      date: "Januari 2026 – Sekarang",
      points: [
        "Menyusun strategi sosialisasi dan mengelola pipeline kemitraan dengan sekolah mitra SMA/SMK di wilayah Jakarta & Tangerang.",
        "Berkoordinasi dengan stakeholder lintas fungsi (pihak sekolah dan dosen universitas) untuk mendorong inisiatif kemitraan edukasi.",
        "Mempresentasikan program akademik FTIK kepada prospective students serta mengevaluasi data konversi pendaftaran untuk strategi institusi."
      ],
      href: null
    }
  ]

  const productCaseStudies = [
    {
      title: "Lead Product Manager & Front-End Developer",
      subtitle: "Digital Skill Assessment Platform",
      badge: "Case Study",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      date: "Januari 2026",
      points: [
        "Memimpin product discovery dan riset pengguna untuk menyusun dokumen kebutuhan produk (BRD/PRD) platform rekomendasi jurusan SMA berbasis AI.",
        "Merancang alur UI/UX high-fidelity dan membangun antarmuka front-end yang responsif menggunakan Laravel dan Tailwind CSS.",
        "Melakukan usability testing bersama siswa dan pengajar untuk memvalidasi akurasi algoritma serta kemudahan antarmuka."
      ],
      href: "/projects/digital-assessment"
    },
    {
      title: "Product Manager",
      subtitle: "Glacier (Sahabat Mixue Group Digitalization)",
      badge: "Case Study",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      date: "2025",
      points: [
        "Merancang arsitektur dashboard operasional terpusat untuk mengotomatisasi kalkulasi HPP dan pemantauan stok di berbagai cabang.",
        "Mentransformasi alur kerja spreadsheet manual menjadi aplikasi web real-time untuk mempermudah rekonsiliasi stok antarcabang.",
        "Mengelola sprint backlog dan alur pengembangan iteratif menggunakan kerangka kerja Scrum dan Trello."
      ],
      href: "/projects/glacier"
    },
    {
      title: "Product Manager & Business Analyst",
      subtitle: "Onium",
      badge: "Case Study",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      date: "2026",
      points: [
        "Mencetuskan konsep Progressive Web App (PWA) offline-first untuk membantu pedagang pasar tradisional mengelola arus kas harian dan pencatatan piutang.",
        "Mendefinisikan arsitektur sistem berbasis logika aturan regex dan IndexedDB sisi klien demi keandalan penggunaan secara offline.",
        "Menyusun dokumen kebutuhan fungsional secara komprehensif serta diagram alur data (ERD/PlantUML) untuk diimplementasikan oleh tim developer."
      ],
      href: "/projects/onium"
    }
  ]

  const achievements = [
    {
      title: "Juara 3 UKRIDA Solve-It Challenge",
      subtitle: "National Competition 2026",
      highlight: true
    },
    {
      title: "Juara 3 Disability Design Competition",
      subtitle: "Visual Identity Design 2026",
      highlight: false
    },
    {
      title: "Top 5 Oxygrants",
      subtitle: "National Innovation 2025",
      highlight: false
    },
    {
      title: "Finalist AILEEC",
      subtitle: "Business Model Canvas 2026",
      highlight: false
    },
    {
      title: "GPA 3.84",
      subtitle: "IPS Sempurna 4.00 (Semester 3)",
      badge: "Academic",
      highlight: true
    }
  ]

  const leadershipRoles = [
    {
      role: "Sekretaris Umum",
      organization: "BEM FTIK UKRIDA",
      period: "2025 – 2026",
      desc: "Memimpin operasional organisasi, standar dokumentasi, dan komunikasi lintas fungsi di 5 divisi internal untuk berbagai inisiatif tingkat fakultas."
    },
    {
      role: "Sekretaris Pelaksana & Operasional Acara",
      organization: "PKKMB FTIK & BEM Muda",
      period: "2025",
      desc: "Mengelola dokumentasi operasional, panduan kepatuhan acara, dan alur kerja logistik untuk rangkaian program orientasi universitas."
    },
    {
      role: "Divisi Acara",
      organization: "RAKORSI & PKKMB UKRIDA",
      period: "2025",
      desc: "Menyusun rundown teknis, script presidium, dan mengendalikan jalannya panggung orientasi kampus."
    },
    {
      role: "Panitia Event & Logistik",
      organization: "Engineering Expo 2026 & PSPPI",
      period: "2025 – 2026",
      desc: "Memimpin tim registrasi, konsumsi, dan operasional panggung pada peresmian & pameran sains."
    }
  ]

  return (
    <Section id="experience" className="py-24 scroll-mt-20 bg-transparent">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-14 max-w-4xl mx-auto text-center items-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-slate-700" />
              Career & Track Record
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
              Pengalaman, Studi Kasus & Kepemimpinan
            </h2>
          </FadeIn>
        </div>

        {/* 3-Column Layout (55% / 22% / 23%) */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            
            {/* COLUMN 1: Experience & Case Studies (55% width) */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8 bg-white/70 backdrop-blur-md border border-slate-200/90 p-6 md:p-8 rounded-2xl shadow-xs">
              
              {/* Category A: Pengalaman Profesional */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">Pengalaman Profesional</h3>
                      <p className="text-xs font-medium text-slate-500">Magang & Pengalaman Kerja</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Internship
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {professionalExperiences.map((exp, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col gap-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${exp.badgeColor} mb-1.5`}>
                            {exp.badge}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {exp.title}
                          </h4>
                          <p className="text-xs font-semibold text-slate-700 mt-0.5">
                            {exp.subtitle}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                          {exp.date}
                        </span>
                      </div>

                      <ul className="flex flex-col gap-2 pt-1 border-t border-slate-100">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                            <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category B: Studi Kasus Produk Unggulan */}
              <div className="flex flex-col gap-5 pt-2 border-t border-slate-200/80">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow-xs">
                      <FolderKanban className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">Studi Kasus Produk Unggulan</h3>
                      <p className="text-xs font-medium text-slate-500">Proyek Utama Product Management</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    PM Projects
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {productCaseStudies.map((exp, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col gap-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${exp.badgeColor} mb-1.5`}>
                            {exp.badge}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {exp.title}
                          </h4>
                          <p className="text-xs font-semibold text-slate-700 mt-0.5">
                            {exp.subtitle}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                          {exp.date}
                        </span>
                      </div>

                      <ul className="flex flex-col gap-2 pt-1 border-t border-slate-100">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                            <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.href && (
                        <div className="pt-2">
                          <Link 
                            href={exp.href}
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg shadow-2xs hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group/btn"
                          >
                            <span>Lihat Studi Kasus</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLUMN 2: Achievements (22% width) - Compact & Clean */}
            <div className="w-full lg:w-[22%] flex flex-col gap-5 bg-white/70 backdrop-blur-md border border-slate-200/90 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">Achievements</h3>
                  <p className="text-[11px] font-medium text-slate-500">Kompetisi & Akademik</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {achievements.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border transition-all ${
                      item.highlight 
                        ? 'bg-amber-50/70 border-amber-200 shadow-2xs' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${
                        item.badge === 'Academic' ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.badge === 'Academic' ? <GraduationCap className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-xs font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-medium text-slate-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: Leadership & Organization (23% width) - Grouped & Structured */}
            <div className="w-full lg:w-[23%] flex flex-col gap-5 bg-white/70 backdrop-blur-md border border-slate-200/90 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight">Leadership</h3>
                  <p className="text-[11px] font-medium text-slate-500">Organisasi & Kepanitiaan</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {leadershipRoles.map((lead, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all flex flex-col gap-1.5"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {lead.role}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 flex-shrink-0">
                        {lead.period}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-700">
                      {lead.organization}
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {lead.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
