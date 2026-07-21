"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, ArrowRight, User, Building2, Users, CheckCircle2, Target, AlertCircle, ListTodo, ClipboardCheck, Sparkles, BarChart3, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/75 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 md:p-10 shadow-sm my-8 ${className}`}>
    <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-200 mb-2">
          {index} / {title.split(' ')[0]}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="w-12 h-1 bg-slate-900 rounded-full hidden md:block"></div>
    </div>
    {children}
  </div>
)

export default function DigitalAssessmentCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative text-slate-900">
      
      {/* Background gradients - Vivid Blue, Purple, & Pink */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-[600px] h-[600px] bg-purple-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-pink-300/60 rounded-full blur-[100px] mix-blend-multiply opacity-80 animate-blob animation-delay-4000" />
      </div>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors mb-8 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* HERO SECTION */}
        <FadeIn direction="up">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/90 rounded-2xl p-8 md:p-12 shadow-sm mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Kolom Kiri: Informasi Case Study */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-800 uppercase tracking-widest bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  Case Study
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  Digital Skill Assessment Platform
                </h1>
                
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl">
                  Platform digital yang membantu siswa SMA memetakan kompetensi digital dan memberikan rekomendasi program studi menggunakan metode <strong className="text-slate-900 font-extrabold underline decoration-slate-300">Rule-Based Weighted Scoring</strong>.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Peran</span>
                    <span className="font-bold text-slate-900 text-sm md:text-base">Product Manager, Full Stack Dev</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi</span>
                    <span className="font-bold text-slate-900 text-sm md:text-base">3 Bulan</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">Frameworks & Methodologies</span>
                  <div className="flex flex-wrap gap-2.5">
                    {["Scrum", "Requirement Gathering", "Stakeholder Analysis", "User Journey Mapping", "MoSCoW Prioritization", "Rule-Based Weighted Scoring", "Product Roadmap", "Success Metrics"].map((framework) => (
                      <span key={framework} className="px-3.5 py-2 bg-slate-100/90 text-slate-900 text-xs font-bold rounded-lg border border-slate-200 shadow-sm">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Logo UKRIDA */}
              <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white/90 border border-slate-200/90 rounded-2xl shadow-sm">
                <Image 
                  src="/images/Logo_UKRIDA_300x300.png"
                  alt="Logo UKRIDA"
                  width={300}
                  height={300}
                  className="w-48 md:w-56 h-auto object-contain hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

            </div>
          </div>
        </FadeIn>

        {/* SECTION 1: Latar Belakang */}
        <FadeIn delay={0.1}>
          <SlideFrame index="01" title="Latar Belakang">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-base mb-2 border-b border-slate-200 pb-2">Masalah Siswa</h4>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  Siswa SMA belum mengetahui secara pasti kemampuan digital yang dimiliki serta mengalami kesulitan menentukan jurusan kuliah yang sesuai.
                </p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-base mb-2 border-b border-slate-200 pb-2">Masalah UKRIDA</h4>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  UKRIDA belum memiliki media assessment digital dan tim admission kesulitan memperoleh data analitik calon mahasiswa secara terpusat.
                </p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-900 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-base mb-2 border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-slate-900" /> Peluang Digitalisasi
                </h4>
                <p className="text-sm text-slate-800 font-bold leading-relaxed">
                  Menjaring prospek potensial secara data-driven sekaligus memberikan nilai tambah nyata bagi calon mahasiswa sebelum mendaftar.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 2: Tujuan Produk */}
        <FadeIn delay={0.2}>
          <SlideFrame index="02" title="Tujuan Produk">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: User, title: "Untuk Siswa", desc: "Memberikan visibilitas terhadap potensi digital individu dan memberikan rekomendasi program studi yang presisi dan relevan." },
                { icon: Users, title: "Untuk Tim Admission", desc: "Membangun database prospek (leads) yang terstruktur dan berkualitas untuk strategi akuisisi mahasiswa baru yang terukur." },
                { icon: Building2, title: "Untuk Institusi (UKRIDA)", desc: "Meningkatkan brand awareness sebagai kampus teknologi yang inovatif serta memodernisasi saluran interaksi promosi." }
              ].map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div key={idx} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200/90 rounded-xl hover:border-slate-400 transition-all shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-700 font-semibold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 3: Stakeholder Analysis */}
        <FadeIn delay={0.3}>
          <SlideFrame index="03" title="Stakeholder Analysis">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Siswa SMA", 
                  goal: "Mengetahui kompetensi digital yang dimiliki dan memperoleh rekomendasi jurusan.", 
                  pain: "Kesulitan menentukan program studi yang sesuai setelah lulus.", 
                  need: "Assessment yang cepat dan hasil rekomendasi yang mudah dipahami." 
                },
                { 
                  title: "Tim Admission UKRIDA", 
                  goal: "Memperoleh data calon mahasiswa potensial dan mempermudah tindak lanjut.", 
                  pain: "Proses promosi dan follow-up calon mahasiswa masih dilakukan secara manual.", 
                  need: "Dashboard analitik untuk melihat data peserta secara terstruktur." 
                },
                { 
                  title: "UKRIDA", 
                  goal: "Meningkatkan branding digital institusi dan menarik calon mahasiswa.", 
                  pain: "Belum memiliki media assessment digital interaktif sebagai sarana promosi.", 
                  need: "Platform promosi modern yang mampu meningkatkan citra institusi." 
                },
              ].map((stakeholder, idx) => (
                <div key={idx} className="p-6 border-2 border-slate-200 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm flex flex-col justify-between h-full gap-5">
                  <h4 className="font-extrabold text-slate-900 text-xl border-b-2 border-slate-200 pb-3">
                    {stakeholder.title}
                  </h4>
                  <div className="flex flex-col gap-5 flex-grow">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">Goal</span>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">{stakeholder.goal}</p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">Pain Point</span>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">{stakeholder.pain}</p>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">Needs</span>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">{stakeholder.need}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 4: Requirement Prioritization (MoSCoW) */}
        <FadeIn delay={0.4}>
          <SlideFrame index="04" title="Requirement Prioritization (MoSCoW)">
            <p className="text-base text-slate-800 font-semibold mb-6">
              Mengingat produk ini merupakan pengembangan platform institusi, framework MoSCoW digunakan untuk menentukan ruang lingkup prioritas rilis agar nilai utama dapat diserahkan lebih awal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 border-2 border-slate-900 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-900" /> Must Have</span>
                  <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded">P0</span>
                </h4>
                <ul className="text-sm font-bold text-slate-800 space-y-3">
                  {["Registrasi", "Assessment", "Scoring", "Dashboard", "Recommendation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/90 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-300 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-600" /> Should Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">P1</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-800 space-y-3">
                  {["Export PDF", "Dashboard Analytics", "Email Notification"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/90 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-400" /> Could Have</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">P2</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-700 space-y-3">
                  {["Badge System", "Gamification Elements"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/90 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-200 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300" /> Won't Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">V1 Out</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-700 space-y-3">
                  {["Mobile App Native", "Integrasi PMB Kampus"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/90 p-2 rounded border border-slate-200 text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 5: Key Features (Menggantikan Modul Sistem) */}
        <FadeIn delay={0.5}>
          <SlideFrame index="05" title="Key Features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BarChart3, title: "Digital Competency Assessment", desc: "Mengukur empat kompetensi digital melalui 50 pertanyaan berbobot." },
                { icon: Target, title: "Rule-Based Recommendation", desc: "Memberikan rekomendasi program studi berdasarkan weighted scoring." },
                { icon: ClipboardCheck, title: "PDF Report", desc: "Menghasilkan laporan hasil assessment yang dapat diunduh." },
                { icon: Layers, title: "Admin Dashboard", desc: "Monitoring data peserta dan hasil assessment secara terpusat." },
                { icon: Users, title: "Lead Management", desc: "Mengelola data prospek untuk tindak lanjut admission." }
              ].map((feat, idx) => {
                const IconComp = feat.icon
                return (
                  <div key={idx} className="p-6 border-2 border-slate-200 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{feat.title}</h4>
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 6: User Journey */}
        <FadeIn delay={0.6}>
          <SlideFrame index="06" title="User Journey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <User className="w-5 h-5" />
                  </div>
                  Journey Siswa
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-300 rounded-full"></div>
                  {[
                    "Registrasi akun dengan data diri dasar",
                    "Mengerjakan soal Assessment",
                    "Melihat hasil analisis kemampuan digital",
                    "Download laporan lengkap (PDF)",
                    "Menerima rekomendasi jurusan UKRIDA"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center relative z-10 shrink-0 shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-bold text-slate-800 pt-1 leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  Journey Admission
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-300 rounded-full"></div>
                  {[
                    "Melihat dashboard ringkasan",
                    "Melihat data detail siswa & skor",
                    "Mengelompokkan data prospect/lead",
                    "Melakukan follow up via komunikasi langsung",
                    "Monitoring konversi pendaftaran"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center relative z-10 shrink-0 shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-bold text-slate-800 pt-1 leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 7: Cara Kerja Recommendation Engine */}
        <FadeIn delay={0.65}>
          <SlideFrame index="07" title="Recommendation Engine">
            <p className="text-base text-slate-800 font-semibold mb-8 leading-relaxed">
              Sistem rekomendasi pada Digital Skill Assessment menggunakan metode <strong className="text-slate-900 font-black underline">Rule-Based Weighted Scoring</strong>. Nilai rekomendasi dihitung berdasarkan hasil assessment kompetensi digital dan minat siswa sehingga proses penilaian bersifat 100% transparan dan dapat dipertanggungjawabkan.
            </p>

            {/* Tahap 1 */}
            <div className="mb-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 flex items-center gap-2 border-b border-slate-200 pb-3">
                <span className="w-3 h-3 rounded-full bg-slate-900" />
                Tahap 1: Perhitungan Kompetensi Digital
              </h4>
              <p className="text-sm font-semibold text-slate-700 mb-6 leading-relaxed">
                Setiap jawaban memiliki bobot terhadap empat kompetensi digital. Setelah seluruh assessment selesai, sistem menghitung skor setiap kompetensi dan menormalisasinya ke skala 0–100.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-between bg-white/90 border border-slate-200 p-5 rounded-xl">
                <div className="px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg shadow-sm text-xs font-black text-slate-900 text-center w-full sm:w-auto">Jawaban Assessment</div>
                <div className="bg-slate-900 text-white font-black px-2.5 py-1 rounded-full text-xs shrink-0">→</div>
                <div className="px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg shadow-sm text-xs font-black text-slate-900 text-center w-full sm:w-auto">Akumulasi Bobot</div>
                <div className="bg-slate-900 text-white font-black px-2.5 py-1 rounded-full text-xs shrink-0">→</div>
                <div className="px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg shadow-sm text-xs font-black text-slate-900 text-center w-full sm:w-auto">Normalisasi Nilai</div>
                <div className="bg-slate-900 text-white font-black px-2.5 py-1 rounded-full text-xs shrink-0">→</div>
                <div className="px-4 py-3 bg-slate-900 border-2 border-slate-900 rounded-lg shadow-md text-xs font-black text-white text-center w-full sm:w-auto">Skor Kompetensi (0–100)</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-4 border-t border-slate-200">
                {["Literasi Digital", "Logika Komputasi", "Computational Thinking", "Digital Problem Solving"].map((item, idx) => (
                  <div key={idx} className="bg-white/90 p-3 rounded-lg border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-900 block">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tahap 2 */}
            <div className="mb-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 flex items-center gap-2 border-b border-slate-200 pb-3">
                <span className="w-3 h-3 rounded-full bg-slate-900" />
                Tahap 2: Perhitungan Rekomendasi Program Studi
              </h4>
              <p className="text-sm font-semibold text-slate-700 mb-6 leading-relaxed">
                Setiap program studi memiliki komposisi bobot kompetensi yang berbeda sehingga menghasilkan rekomendasi yang sesuai dengan karakteristik masing-masing program studi.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 border-2 border-slate-300 bg-white/90 shadow-sm rounded-xl">
                  <h5 className="font-extrabold text-slate-900 text-base mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                    <span>Sistem Informasi</span>
                    <span className="text-xs font-bold bg-slate-900 text-white px-2.5 py-1 rounded-full">Prodi A</span>
                  </h5>
                  <div className="space-y-4">
                    {[
                      { name: "Literasi Digital", val: "35%", pct: 35 },
                      { name: "Logika Komputasi", val: "20%", pct: 20 },
                      { name: "Computational Thinking", val: "20%", pct: 20 },
                      { name: "Digital Problem Solving", val: "25%", pct: 25 }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1">
                          <span>{item.name}</span>
                          <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-[11px] font-black">{item.val}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                          <div className="bg-slate-900 h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-2 border-slate-300 bg-white/90 shadow-sm rounded-xl">
                  <h5 className="font-extrabold text-slate-900 text-base mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                    <span>Informatika</span>
                    <span className="text-xs font-bold bg-slate-800 text-white px-2.5 py-1 rounded-full">Prodi B</span>
                  </h5>
                  <div className="space-y-4">
                    {[
                      { name: "Literasi Digital", val: "15%", pct: 15 },
                      { name: "Logika Komputasi", val: "30%", pct: 30 },
                      { name: "Computational Thinking", val: "35%", pct: 35 },
                      { name: "Digital Problem Solving", val: "20%", pct: 20 }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1">
                          <span>{item.name}</span>
                          <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-[11px] font-black">{item.val}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                          <div className="bg-slate-900 h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Tahap 3 */}
            <div className="bg-white/85 backdrop-blur-md border-2 border-slate-900 p-6 rounded-xl shadow-md">
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 flex items-center gap-2 border-b border-slate-200 pb-3">
                <span className="w-3 h-3 rounded-full bg-slate-900" />
                Tahap 3: Penyesuaian Berdasarkan Minat
              </h4>
              <p className="text-sm font-semibold text-slate-700 mb-6 leading-relaxed">
                Hasil akhir diperoleh dari kombinasi antara skor kompetensi digital (70%) dan hasil asesmen minat siswa (30%).
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-slate-100/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-300 shadow-sm">
                <div className="flex flex-col items-center bg-white p-5 rounded-xl border border-slate-300 w-full md:w-auto min-w-[160px] shadow-sm">
                  <span className="text-4xl font-black text-slate-900">70%</span>
                  <span className="text-xs font-bold text-slate-700 mt-2 uppercase tracking-wider">Skor Kompetensi</span>
                </div>
                
                <span className="text-3xl font-black text-slate-800">+</span>
                
                <div className="flex flex-col items-center bg-white p-5 rounded-xl border border-slate-300 w-full md:w-auto min-w-[160px] shadow-sm">
                  <span className="text-4xl font-black text-slate-900">30%</span>
                  <span className="text-xs font-bold text-slate-700 mt-2 uppercase tracking-wider">Skor Minat</span>
                </div>
                
                <span className="text-3xl font-black text-slate-800 font-mono">→</span>
                
                <div className="flex flex-col items-center bg-slate-900 text-white p-6 rounded-xl shadow-md w-full md:w-auto">
                  <span className="text-sm font-black uppercase tracking-widest text-center">Final Recommendation Score</span>
                </div>
              </div>
            </div>
            
          </SlideFrame>
        </FadeIn>

        {/* SECTION 8: Solusi yang Ditawarkan */}
        <FadeIn delay={0.7}>
          <SlideFrame index="08" title="Solusi yang Ditawarkan">
            <div className="overflow-x-auto rounded-xl border-2 border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm text-slate-800 min-w-[800px]">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-900 border-b-2 border-slate-300">
                    <th className="p-4 font-extrabold w-1/3">Masalah</th>
                    <th className="p-4 font-extrabold w-1/3">Fitur Solusi</th>
                    <th className="p-4 font-extrabold w-1/3">Manfaat Bisnis & User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white/80 backdrop-blur-sm">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold">Siswa tidak tahu potensi spesifik bidang teknologinya.</td>
                    <td className="p-4 font-extrabold text-slate-900">Interactive Assessment Engine</td>
                    <td className="p-4 text-slate-800 font-semibold">Memberikan diagnosis skor per kategori skill secara instan dan objektif.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold">Sulit memilih program studi yang paling tepat di universitas.</td>
                    <td className="p-4 font-extrabold text-slate-900">Rule-Based Recommendation</td>
                    <td className="p-4 text-slate-800 font-semibold">Mengarahkan siswa ke prodi yang relevan, menekan angka putus kuliah.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold">Data pendaftar pameran tercecer & tidak terstruktur.</td>
                    <td className="p-4 font-extrabold text-slate-900">Lead Capture & Data Export</td>
                    <td className="p-4 text-slate-800 font-semibold">Merapikan database untuk diolah lebih lanjut oleh tim telemarketing.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold">Kurangnya daya tarik booth universitas saat pameran.</td>
                    <td className="p-4 font-extrabold text-slate-900">Web-based Gamified Assessment</td>
                    <td className="p-4 text-slate-800 font-semibold">Menjadi magnet audiens melalui pendekatan interaktif di lokasi pameran.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold">Tidak ada laporan kemajuan minat dari waktu ke waktu.</td>
                    <td className="p-4 font-extrabold text-slate-900">Admin Analytics Dashboard</td>
                    <td className="p-4 text-slate-800 font-semibold">Memberi insight berbasis data untuk strategi penerimaan mahasiswa baru.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 9: Success Metrics */}
        <FadeIn delay={0.8}>
          <SlideFrame index="09" title="Success Metrics">
            <div className="flex flex-col gap-6">
              
              <div className="p-8 bg-white/85 backdrop-blur-md rounded-2xl text-slate-900 flex flex-col md:flex-row md:items-center gap-6 justify-between shadow-md border-2 border-slate-900">
                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest block mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-900" /> North Star Metric
                  </span>
                  <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight">Jumlah Assessment yang Berhasil Diselesaikan</h4>
                  <p className="text-sm font-semibold text-slate-700 mt-3 max-w-2xl leading-relaxed">
                    Mengindikasikan value nyata yang dinikmati pengguna dan validitas data yang diperoleh institusi secara utuh.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Assessment Completion Rate", desc: "Persentase siswa yang menyelesaikan tes hingga akhir." },
                  { label: "Recommendation View Rate", desc: "Tingkat perhatian pada jurusan yang disarankan oleh sistem." },
                  { label: "Report Download Rate", desc: "Metrik seberapa banyak siswa yang menyimpan laporan hasil tes." },
                  { label: "Lead Conversion Rate", desc: "Tingkat konversi pendaftar tes menjadi calon mahasiswa resmi." }
                ].map((metric, idx) => (
                  <div key={idx} className="p-5 border-2 border-slate-200 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                    <h5 className="font-extrabold text-slate-900 text-base mb-2">{metric.label}</h5>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 10: Roadmap */}
        <FadeIn delay={0.9}>
          <SlideFrame index="10" title="Roadmap">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
              {[
                { phase: "Fase 1", title: "Digital Assessment Platform", desc: "Peluncuran engine utama, registrasi, dan hasil tes sederhana (MVP)." },
                { phase: "Fase 2", title: "Recommendation Engine", desc: "Integrasi sistem Rule-Based Weighted Scoring untuk pemetaan jurusan." },
                { phase: "Fase 3", title: "Dashboard & Analytics", desc: "Pengembangan portal admin untuk memantau data lead secara analitik." },
                { phase: "Fase 4", title: "Analytics Enhancement & Personalization", desc: "Peningkatan kapabilitas analitik dan personalisasi rekomendasi tingkat lanjut." },
              ].map((rd, idx) => (
                <div key={idx} className="flex flex-col relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-black flex items-center justify-center mb-4 shadow-md">
                    {idx + 1}
                  </div>
                  <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl h-full shadow-sm">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-2 block">{rd.phase}</span>
                    <h4 className="font-extrabold text-slate-900 mb-2 text-base">{rd.title}</h4>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">{rd.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 11: Project Management */}
        <FadeIn delay={0.95}>
          <SlideFrame index="11" title="Project Management">
            <p className="text-base text-slate-800 font-semibold mb-6 leading-relaxed">
              Scrum diterapkan menggunakan <strong>Trello</strong> dengan pembagian <strong>Product Backlog, Sprint Backlog, To Do, In Progress, Review, dan Done</strong> untuk memastikan setiap fitur dikembangkan secara iteratif.
            </p>
            <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-md bg-white">
              <Image 
                src="/images/trello-scrum-board.png" 
                alt="Trello Scrum Board Digital Assessment" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 12: Refleksi */}
        <FadeIn delay={1.0}>
          <SlideFrame index="12" title="Refleksi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><AlertCircle className="w-6 h-6" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Tantangan</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Bagaimana merancang platform yang tidak hanya memberikan nilai diagnostik yang akurat dan bermanfaat bagi siswa, namun juga secara simultan mengumpulkan data pemasaran strategis yang dibutuhkan oleh institusi tanpa terkesan eksploitatif.
                </p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><ListTodo className="w-6 h-6" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Trade-Off</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Pada tahap perancangan, saya memilih menggunakan metode Rule-Based Weighted Scoring karena lebih transparan, mudah diimplementasikan, dan sesuai dengan kebutuhan awal platform. Pendekatan ini memungkinkan sistem memberikan rekomendasi secara konsisten tanpa kompleksitas model machine learning.
                </p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><ClipboardCheck className="w-6 h-6" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Rencana Pengembangan</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Apabila platform dikembangkan lebih lanjut, langkah prioritas berikutnya adalah pengemasan ke dalam aplikasi mobile mandiri, gamifikasi, serta integrasi data langsung dengan sistem Penerimaan Mahasiswa Baru (PMB) kampus.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/product-management/onium" className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4" /> Studi Kasus Sebelumnya
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              Ke Halaman Utama <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}
