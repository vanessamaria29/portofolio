"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, ArrowRight, User, Building2, Users, CheckCircle2, Target, AlertCircle, ListTodo, ClipboardCheck, Sparkles, BarChart3, Layers, Calculator, Store, Bell, TrendingUp, ShieldAlert, Check, Kanban } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-6 md:p-10 shadow-sm my-8 transition-all hover:border-slate-300 ${className}`}>
    <div className="border-b border-slate-200/80 pb-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-xs">
          {index} / {title.split(' ')[0]}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="w-16 h-1.5 bg-slate-900 rounded-full hidden md:block"></div>
    </div>
    {children}
  </div>
)

export default function GlacierCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative text-slate-900">
      
      {/* Background ambient gradients - Deep Ice Blue & Cool Slate */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[700px] h-[700px] bg-sky-200/70 rounded-full blur-[100px] mix-blend-multiply opacity-90 animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-blue-200/70 rounded-full blur-[100px] mix-blend-multiply opacity-90 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-[750px] h-[750px] bg-indigo-200/60 rounded-full blur-[110px] mix-blend-multiply opacity-80 animate-blob animation-delay-4000" />
      </div>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-all mb-8 bg-white/90 backdrop-blur-md border border-slate-200/90 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* HERO SECTION */}
        <FadeIn direction="up">
          <div className="bg-white/85 backdrop-blur-xl border-2 border-slate-200/90 rounded-3xl p-8 md:p-12 shadow-md mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Kolom Kiri: Informasi Case Study */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full w-fit shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 animate-pulse" />
                  Case Study
                </span>
                
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
                  Glacier
                </h1>
                
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl">
                  Platform operasional berbasis web yang membantu <strong className="text-slate-900 font-black underline decoration-slate-300">Sahabat Mixue Group</strong> mengelola stok, menghitung HPP, dan memantau performa cabang secara lebih efisien melalui sistem yang terintegrasi.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Peran</span>
                    <span className="font-extrabold text-slate-900 text-sm md:text-base">Product Manager • Project Manager</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi</span>
                    <span className="font-extrabold text-slate-900 text-sm md:text-base">3 Bulan</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3.5">Frameworks & Methodologies</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Requirement Gathering",
                      "Business Process Analysis (As-Is & To-Be)",
                      "Stakeholder Analysis",
                      "User Journey Mapping",
                      "MoSCoW Prioritization",
                      "RICE Prioritization",
                      "Scrum",
                      "Product Roadmap",
                      "Success Metrics"
                    ].map((framework) => (
                      <span key={framework} className="px-3.5 py-1.5 bg-slate-100/90 text-slate-900 text-xs font-bold rounded-lg border border-slate-200/90 shadow-xs hover:bg-slate-200 transition-colors">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Logo Glacier (BESAR BANGEET) */}
              <div className="lg:col-span-5 flex items-center justify-center p-2 md:p-4">
                <div className="relative group flex items-center justify-center w-full">
                  {/* Soft ambient glow behind logo */}
                  <div className="absolute inset-0 bg-sky-200/50 rounded-full blur-3xl group-hover:bg-sky-300/70 transition-all duration-500 transform group-hover:scale-110"></div>
                  
                  <Image 
                    src="/images/glacier-logo.png"
                    alt="Logo Glacier"
                    width={800}
                    height={800}
                    className="w-full max-w-[480px] md:max-w-[550px] lg:max-w-[580px] h-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105 filter drop-shadow-lg"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* SECTION 1: Latar Belakang */}
        <FadeIn delay={0.1}>
          <SlideFrame index="01" title="Latar Belakang">
            <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-slate-800 font-medium">
                Sebelum platform Glacier dikembangkan, seluruh kegiatan operasional harian Sahabat Mixue Group masih mengandalkan mekanisme kerja manual dan pengolahan data terpisah melalui spreadsheet. Kondisi ini menciptakan hambatan signifikan dalam menjaga efisiensi operasional dan akurasi data antar cabang.
              </p>
              
              <div className="bg-white/90 backdrop-blur-md border-2 border-slate-200/90 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-widest border-b-2 border-slate-200 pb-3">Kondisi Operasional Sebelum Glacier:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {[
                    "Pencatatan persediaan bahan baku dan stok produk masih dilakukan secara terpisah menggunakan Microsoft Excel.",
                    "Perhitungan Harga Pokok Penjualan (HPP) dilakukan secara manual sehingga rentan terhadap kesalahan kalkulasi.",
                    "Data persediaan dan transaksi antar cabang tersebar di berbagai file yang tidak saling terintegrasi.",
                    "Supervisor cabang harus merekap laporan operasional secara manual setiap hari sebelum dikirimkan ke pihak manajemen.",
                    "Owner mengalami kesulitan dalam memperoleh informasi terkini secara real-time untuk mengambil keputusan bisnis secara cepat."
                  ].map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50/90 p-4 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900 shrink-0 mt-1.5"></div>
                      <span>{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white/90 backdrop-blur-md border-2 border-slate-900 text-slate-900 rounded-2xl shadow-md flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-sm md:text-base font-extrabold leading-relaxed">
                  Proses operasional manual tersebut membutuhkan sistem berbasis web yang mampu mengintegrasikan seluruh aktivitas operasional dan konsolidasi data cabang dalam satu platform terpusat.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 2: Business Process Analysis */}
        <FadeIn delay={0.2}>
          <SlideFrame index="02" title="Business Process Analysis">
            <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm mb-6 bg-white/80">
              <table className="w-full text-left border-collapse text-sm text-slate-800 min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="p-4 md:p-5 font-black uppercase text-xs tracking-wider w-1/2 border-r border-slate-800">Sebelum Glacier (As-Is)</th>
                    <th className="p-4 md:p-5 font-black uppercase text-xs tracking-wider w-1/2">Setelah Glacier (To-Be)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50/90 transition-colors">
                    <td className="p-4 font-semibold border-r border-slate-200 text-slate-700">Pencatatan stok menggunakan Excel</td>
                    <td className="p-4 font-extrabold text-slate-900 bg-slate-50/50">Data stok tercatat dalam sistem secara terpusat</td>
                  </tr>
                  <tr className="hover:bg-slate-50/90 transition-colors">
                    <td className="p-4 font-semibold border-r border-slate-200 text-slate-700">Perhitungan HPP dilakukan manual</td>
                    <td className="p-4 font-extrabold text-slate-900 bg-slate-50/50">HPP dihitung otomatis oleh sistem</td>
                  </tr>
                  <tr className="hover:bg-slate-50/90 transition-colors">
                    <td className="p-4 font-semibold border-r border-slate-200 text-slate-700">Laporan dikirim melalui file Excel</td>
                    <td className="p-4 font-extrabold text-slate-900 bg-slate-50/50">Dashboard menampilkan data secara real-time</td>
                  </tr>
                  <tr className="hover:bg-slate-50/90 transition-colors">
                    <td className="p-4 font-semibold border-r border-slate-200 text-slate-700">Monitoring antar cabang memerlukan rekap manual</td>
                    <td className="p-4 font-extrabold text-slate-900 bg-slate-50/50">Owner dapat memantau seluruh cabang dari satu dashboard</td>
                  </tr>
                  <tr className="hover:bg-slate-50/90 transition-colors">
                    <td className="p-4 font-semibold border-r border-slate-200 text-slate-700">Risiko human error tinggi</td>
                    <td className="p-4 font-extrabold text-slate-900 bg-slate-50/50">Data lebih konsisten dan mudah ditelusuri</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base font-semibold text-slate-800 leading-relaxed bg-white/90 p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
              Digitalisasi alur kerja dari As-Is menuju To-Be memungkinkan eliminasi proses rekapitulasi manual yang memakan waktu, mengurangi tingkat kesalahan input data, serta memberikan visibilitas operasional penuh untuk mendukung pertumbuhan bisnis cabang secara terukur.
            </p>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 3: Product Goals */}
        <FadeIn delay={0.3}>
          <SlideFrame index="03" title="Product Goals">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <User className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-4 border-b-2 border-slate-200 pb-3">Owner</h4>
                  <ul className="space-y-3 text-sm font-semibold text-slate-800">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Memantau performa seluruh cabang.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Memperoleh data operasional secara real-time.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Mendukung pengambilan keputusan bisnis secara cepat.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-4 border-b-2 border-slate-200 pb-3">Supervisor</h4>
                  <ul className="space-y-3 text-sm font-semibold text-slate-800">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Mempermudah pengelolaan persediaan stok.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Mempercepat proses pelaporan harian.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Mengurangi kesalahan pencatatan data.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-4 border-b-2 border-slate-200 pb-3">Bisnis</h4>
                  <ul className="space-y-3 text-sm font-semibold text-slate-800">
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Meningkatkan efisiensi operasional secara keseluruhan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Meningkatkan akurasi dan konsistensi data.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-slate-900 font-black">•</span>
                      <span>Menyediakan informasi yang lebih cepat untuk pengambilan keputusan.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 4: Stakeholder Analysis */}
        <FadeIn delay={0.4}>
          <SlideFrame index="04" title="Stakeholder Analysis">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Owner", 
                  goal: "Memantau kesehatan finansial dan operasional seluruh cabang secara terpusat.", 
                  pain: "Laporan fisik/Excel terlambat masuk dan informasi antar cabang sering tidak konsisten.", 
                  need: "Dashboard eksekutif dengan matriks KPI real-time dan ringkasan HPP yang akurat." 
                },
                { 
                  title: "Supervisor", 
                  goal: "Memastikan ketersediaan stok bahan baku dan kelancaran proses operasional cabang.", 
                  pain: "Menghabiskan waktu berjam-jam merekap data stok dan menghitung HPP secara manual.", 
                  need: "Sistem pencatatan persediaan yang otomatis dan alat kalkulasi HPP yang cepat." 
                },
                { 
                  title: "Admin Cabang", 
                  goal: "Mencatat transaksi masuk dan keluar barang harian secara tepat.", 
                  pain: "Form pencatatan spreadsheet yang rumit dan rentan salah ketik angka stok.", 
                  need: "Antarmuka pencatatan mutasi stok yang intuitif, cepat, dan mudah digunakan." 
                },
              ].map((stakeholder, idx) => (
                <div key={idx} className="p-6 md:p-8 border-2 border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full gap-5">
                  <h4 className="font-extrabold text-slate-900 text-xl border-b-2 border-slate-200 pb-3">
                    {stakeholder.title}
                  </h4>
                  <div className="flex flex-col gap-4 flex-grow">
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

        {/* SECTION 5: Requirement Prioritization (MoSCoW) */}
        <FadeIn delay={0.5}>
          <SlideFrame index="05" title="Requirement Prioritization (MoSCoW)">
            <p className="text-base text-slate-800 font-semibold mb-6">
              Metode MoSCoW digunakan untuk memprioritaskan pengembangan modul operasional inti agar kebutuhan utama pengguna dapat diselesaikan lebih dahulu. Fitur lanjutan diposisikan sebagai pengembangan berikutnya setelah fondasi sistem berjalan dengan baik.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-6 border-2 border-slate-900 rounded-2xl bg-white/90 backdrop-blur-md shadow-md">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-900" /> Must Have</span>
                  <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded">P0</span>
                </h4>
                <ul className="text-sm font-bold text-slate-800 space-y-2.5">
                  {["Login & Authentication", "Dashboard Monitoring", "Inventory Management", "Stock Movement", "Automatic HPP Calculator", "Reporting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-300 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-600" /> Should Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">P1</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-800 space-y-2.5">
                  {["Analytics Dashboard", "Smart Reminder"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-200 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-400" /> Could Have</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">P2</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-700 space-y-2.5">
                  {["Export PDF", "Email Notification"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-2 border-slate-200 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm">
                <h4 className="font-extrabold text-slate-900 mb-4 flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300" /> Won't Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Out of Scope</span>
                </h4>
                <ul className="text-sm font-semibold text-slate-700 space-y-2.5">
                  {["Mobile Application", "AI Forecasting", "ERP Integration"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 text-slate-700 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs md:text-sm font-semibold text-slate-700 bg-white/90 p-5 rounded-2xl border-2 border-slate-200 shadow-sm">
              <strong>Rasionalisasi:</strong> Fitur pada kategori Must Have berfokus pada digitalisasi proses operasional utama, yaitu pengelolaan stok, perhitungan HPP, dan pelaporan. Sementara fitur seperti AI Forecasting dan ERP Integration tidak menjadi prioritas awal karena membutuhkan kesiapan data dan kompleksitas implementasi yang lebih tinggi.
            </p>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 6: Key Features */}
        <FadeIn delay={0.6}>
          <SlideFrame index="06" title="Key Features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: BarChart3, 
                  title: "Dashboard Monitoring", 
                  desc: "Menampilkan ringkasan KPI operasional, kondisi stok, dan performa setiap cabang dalam satu dashboard.",
                  val: "Memudahkan owner memantau seluruh cabang secara real-time."
                },
                { 
                  icon: Layers, 
                  title: "Inventory Management", 
                  desc: "Mengelola data stok bahan baku secara terpusat mulai dari pencatatan hingga pembaruan stok.",
                  val: "Meningkatkan akurasi data persediaan dan mengurangi human error."
                },
                { 
                  icon: Store, 
                  title: "Stock Movement", 
                  desc: "Mencatat perpindahan stok antar cabang beserta riwayat transaksi sehingga distribusi stok lebih mudah dipantau.",
                  val: "Membantu pengelolaan distribusi stok antar cabang secara lebih efisien."
                },
                { 
                  icon: Calculator, 
                  title: "Automatic HPP Calculator", 
                  desc: "Menghitung Harga Pokok Penjualan secara otomatis berdasarkan data bahan baku dan transaksi.",
                  val: "Mempercepat proses perhitungan serta meningkatkan akurasi biaya operasional."
                },
                { 
                  icon: TrendingUp, 
                  title: "Analytics Dashboard", 
                  desc: "Menyajikan tren penggunaan bahan baku, performa penjualan, dan indikator operasional dalam bentuk visual.",
                  val: "Mendukung pengambilan keputusan berbasis data."
                },
                { 
                  icon: Bell, 
                  title: "Smart Reminder", 
                  desc: "Memberikan notifikasi ketika stok berada di bawah batas minimum yang telah ditentukan.",
                  val: "Mengurangi risiko kehabisan stok dan menjaga kelancaran operasional."
                }
              ].map((feat, idx) => {
                const IconComp = feat.icon
                return (
                  <div key={idx} className="p-6 md:p-8 border-2 border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{feat.title}</h4>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">{feat.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Business Value</span>
                      <p className="text-xs font-extrabold text-slate-900">{feat.val}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 7: User Journey */}
        <FadeIn delay={0.7}>
          <SlideFrame index="07" title="User Journey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-white/90 backdrop-blur-md border-2 border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-3 border-b-2 border-slate-200 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-white shadow-xs">
                    <User className="w-5 h-5" />
                  </div>
                  User Journey: Owner
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-300 rounded-full"></div>
                  {[
                    { title: "Dashboard Monitoring", desc: "Membuka platform dan masuk ke halaman utama dashboard." },
                    { title: "Melihat KPI", desc: "Memeriksa ringkasan performa finansial dan total stok." },
                    { title: "Memantau Cabang", desc: "Memilih dan melihat detail laporan operasional cabang tertentu." },
                    { title: "Melihat Analisis", desc: "Menganalisis grafik tren penggunaan stok dan margin HPP." },
                    { title: "Mengambil Keputusan", desc: "Menentukan strategi pengadaan barang atau evaluasi cabang." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center relative z-10 shrink-0 shadow-md mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-slate-900">{step.title}</h5>
                        <p className="text-xs font-semibold text-slate-700 leading-relaxed mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md border-2 border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-3 border-b-2 border-slate-200 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-white shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  User Journey: Supervisor
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-300 rounded-full"></div>
                  {[
                    { title: "Login", desc: "Masuk ke dalam sistem menggunakan kredensial akun supervisor." },
                    { title: "Input Perubahan Stok", desc: "Mencatat penerimaan barang masuk atau penggunaan stok harian." },
                    { title: "Validasi Data", desc: "Memeriksa kesesuaian fisik stok dengan angka input sistem." },
                    { title: "Automatic HPP Calculator", desc: "Sistem secara otomatis menghitung nilai HPP berdasarkan stok." },
                    { title: "Generate Laporan", desc: "Menghasilkan laporan harian otomatis untuk dikirim ke manajemen." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center relative z-10 shrink-0 shadow-md mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-slate-900">{step.title}</h5>
                        <p className="text-xs font-semibold text-slate-700 leading-relaxed mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 8: Prioritas Fitur (RICE) */}
        <FadeIn delay={0.8}>
          <SlideFrame index="08" title="Prioritas Fitur (RICE)">
            <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm mb-4 bg-white/90">
              <table className="w-full text-left border-collapse text-sm text-slate-800 min-w-[750px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="p-4 font-black uppercase text-xs tracking-wider">Fitur</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider text-center">Reach</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider text-center">Impact</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider text-center">Confidence</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider text-center">Effort</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider text-center">Score</th>
                    <th className="p-4 font-black uppercase text-xs tracking-wider">Alasan Prioritas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-extrabold text-slate-900">Inventory Management</td>
                    <td className="p-4 font-bold text-center">100%</td>
                    <td className="p-4 font-bold text-center">3 (High)</td>
                    <td className="p-4 font-bold text-center">100%</td>
                    <td className="p-4 font-bold text-center">2 (Med)</td>
                    <td className="p-4 font-black text-slate-900 text-center bg-slate-100">150.0</td>
                    <td className="p-4 font-semibold text-xs text-slate-700">Fondasi utama seluruh sistem operasional persediaan.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-extrabold text-slate-900">Dashboard Monitoring</td>
                    <td className="p-4 font-bold text-center">90%</td>
                    <td className="p-4 font-bold text-center">3 (High)</td>
                    <td className="p-4 font-bold text-center">90%</td>
                    <td className="p-4 font-bold text-center">2 (Med)</td>
                    <td className="p-4 font-black text-slate-900 text-center bg-slate-100">121.5</td>
                    <td className="p-4 font-semibold text-xs text-slate-700">Memberikan visibilitas langsung bagi Owner dan Supervisor.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-extrabold text-slate-900">Automatic HPP Calculator</td>
                    <td className="p-4 font-bold text-center">80%</td>
                    <td className="p-4 font-bold text-center">3 (High)</td>
                    <td className="p-4 font-bold text-center">90%</td>
                    <td className="p-4 font-bold text-center">2 (Med)</td>
                    <td className="p-4 font-black text-slate-900 text-center bg-slate-100">108.0</td>
                    <td className="p-4 font-semibold text-xs text-slate-700">Mengeliminasi perhitungan manual HPP yang rawan error.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-extrabold text-slate-900">Analytics Dashboard</td>
                    <td className="p-4 font-bold text-center">60%</td>
                    <td className="p-4 font-bold text-center">2 (Med)</td>
                    <td className="p-4 font-bold text-center">80%</td>
                    <td className="p-4 font-bold text-center">3 (High)</td>
                    <td className="p-4 font-black text-slate-900 text-center bg-slate-100">32.0</td>
                    <td className="p-4 font-semibold text-xs text-slate-700">Fitur evaluasi sekunder yang memerlukan effort pengembangan lebih besar.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 9: Solusi */}
        <FadeIn delay={0.85}>
          <SlideFrame index="09" title="Solusi">
            <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm bg-white/90">
              <table className="w-full text-left border-collapse text-sm text-slate-800 min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="p-4 md:p-5 font-black uppercase text-xs tracking-wider w-1/3">Masalah</th>
                    <th className="p-4 md:p-5 font-black uppercase text-xs tracking-wider w-1/3">Fitur Solusi</th>
                    <th className="p-4 md:p-5 font-black uppercase text-xs tracking-wider w-1/3">Manfaat Bisnis & User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-slate-700">Stok tidak sinkron antar file Excel cabang.</td>
                    <td className="p-4 font-extrabold text-slate-900">Inventory Management</td>
                    <td className="p-4 text-slate-800 font-semibold">Memastikan data stok selalu akurat dan terpusat.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-slate-700">Perhitungan HPP memakan waktu dan rentan salah hitung.</td>
                    <td className="p-4 font-extrabold text-slate-900">Automatic HPP Calculator</td>
                    <td className="p-4 text-slate-800 font-semibold">Mengurangi proses perhitungan manual secara instan.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-slate-700">Owner sulit memantau seluruh cabang secara konsisten.</td>
                    <td className="p-4 font-extrabold text-slate-900">Dashboard Monitoring</td>
                    <td className="p-4 text-slate-800 font-semibold">Memudahkan monitoring operasional secara real-time.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-slate-700">Stok sering habis tanpa diketahui lebih awal.</td>
                    <td className="p-4 font-extrabold text-slate-900">Smart Reminder</td>
                    <td className="p-4 text-slate-800 font-semibold">Membantu pengisian stok lebih cepat sebelum kehabisan.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 10: Success Metrics */}
        <FadeIn delay={0.9}>
          <SlideFrame index="10" title="Success Metrics">
            <div className="flex flex-col gap-6">
              
              <div className="p-8 md:p-10 bg-white/90 backdrop-blur-md rounded-2xl text-slate-900 flex flex-col md:flex-row md:items-center gap-6 justify-between shadow-md border-2 border-slate-900">
                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest block mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-900" /> North Star Metric
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black tracking-tight">Persentase Cabang yang Aktif Menggunakan Glacier</h4>
                  <p className="text-sm font-semibold text-slate-700 mt-3 max-w-2xl leading-relaxed">
                    Mengukur tingkat adopsi nyata platform oleh seluruh jaringan toko sebagai indikator keberhasilan digitalisasi operasional.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { 
                    label: "Inventory Accuracy", 
                    desc: "Tingkat kesesuaian antara jumlah stok fisik di toko dengan pencatatan di dalam sistem." 
                  },
                  { 
                    label: "HPP Calculation Time", 
                    desc: "Waktu yang dibutuhkan untuk mengalkulasi total HPP cabang (dari jam menjadi hitungan detik)." 
                  },
                  { 
                    label: "Monthly Active Branch", 
                    desc: "Jumlah cabang yang konsisten menginput transaksi persediaan secara aktif setiap bulan." 
                  },
                  { 
                    label: "Report Completion Rate", 
                    desc: "Persentase ketepatan waktu pengiriman laporan operasional harian cabang." 
                  },
                  { 
                    label: "Stock Discrepancy Rate", 
                    desc: "Persentase selisih/kehilangan stok barang yang dapat ditekan melalui pencatatan terpusat." 
                  }
                ].map((metric, idx) => (
                  <div key={idx} className="p-6 border-2 border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-base mb-2">{metric.label}</h5>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed">{metric.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 11: Project Management */}
        <FadeIn delay={0.95}>
          <SlideFrame index="11" title="Project Management">
            <div className="flex flex-col gap-6">
              <p className="text-base text-slate-800 font-semibold leading-relaxed">
                Proyek Glacier dikelola menggunakan <strong>Scrum Framework</strong> dengan bantuan <strong>Trello</strong> sebagai alat manajemen tugas harian.
              </p>
              
              <div className="bg-white/90 backdrop-blur-md border-2 border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-5 border-b-2 border-slate-200 pb-3">Alur Kerja Pengembangan (Agile Scrum):</h4>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
                  {[
                    "Requirement Gathering",
                    "Product Backlog",
                    "Sprint Planning",
                    "Sprint Execution",
                    "Sprint Review",
                    "Continuous Improvement"
                  ].map((step, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-100/90 rounded-xl border border-slate-200 flex flex-col items-center justify-center shadow-xs">
                      <span className="text-xs font-black text-slate-900 block mb-1">0{idx + 1}</span>
                      <span className="text-xs font-extrabold text-slate-800 leading-tight">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trello Board Mockup Display Area (DIBAGUSIN) */}
              <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md bg-white p-6">
                <div className="flex items-center justify-between mb-5 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Kanban className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base">Glacier Project Management - Trello Board</h4>
                      <p className="text-xs text-slate-500 font-bold">Sahabat Mixue Group Operational Digitalization Sprint</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-extrabold border border-slate-200">Scrum Board</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-slate-100/80 p-4 rounded-xl border border-slate-200 overflow-x-auto">
                  
                  {/* Column 1 */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-slate-700 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>Product Backlog</span>
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    </span>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs font-bold text-slate-800">Export PDF Report</div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs font-bold text-slate-800">Notifikasi Email Safety Stock</div>
                  </div>

                  {/* Column 2 */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-slate-700 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>Sprint Backlog</span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    </span>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs font-bold text-slate-800">Stock Movement Inter-Branch</div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs font-bold text-slate-800">Analytics Trend Chart</div>
                  </div>

                  {/* Column 3 */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-slate-700 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>In Progress</span>
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                    <div className="p-2.5 bg-blue-50 rounded border border-blue-200 text-xs font-bold text-slate-900">Automatic HPP Engine</div>
                    <div className="p-2.5 bg-blue-50 rounded border border-blue-200 text-xs font-bold text-slate-900">Smart Reminder Low Stock</div>
                  </div>

                  {/* Column 4 */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-slate-700 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>Review / QA</span>
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    </span>
                    <div className="p-2.5 bg-purple-50 rounded border border-purple-200 text-xs font-bold text-slate-900">Multi-Branch KPI Dashboard</div>
                  </div>

                  {/* Column 5 */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-slate-700 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span>Done</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200 text-xs font-bold text-slate-900">Auth & User Role Management</div>
                    <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200 text-xs font-bold text-slate-900">Inventory Stock Table MVP</div>
                  </div>

                </div>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 12: Refleksi */}
        <FadeIn delay={1.0}>
          <SlideFrame index="12" title="Refleksi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm"><AlertCircle className="w-7 h-7" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Tantangan</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Tantangan terbesar adalah menerjemahkan alur kerja operasional manual yang kompleks berbasis Excel menjadi sistem berbasis web yang lebih efisien tanpa mengganggu kebiasaan dan alur kerja harian pengguna yang sudah familiar di lapangan.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm"><ListTodo className="w-7 h-7" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Trade-Off</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Fitur-fitur inti seperti pengelolaan persediaan stok, otomatisasi perhitungan HPP, dan dashboard monitoring diprioritaskan penuh dibandingkan fitur lanjutan agar produk dapat memberikan nilai tambah nyata bagi bisnis sejak rilis pertama.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm"><ClipboardCheck className="w-7 h-7" /></div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Rencana Pengembangan</h4>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  Apabila Glacier dikembangkan lebih lanjut, fitur seperti forecasting stok, notifikasi yang lebih cerdas, serta analitik operasional yang lebih mendalam dapat dipertimbangkan untuk meningkatkan efisiensi pengelolaan cabang.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/product-management/digital-skill-assessment" className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md">
              <ArrowLeft className="w-4 h-4" /> Studi Kasus Sebelumnya
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md">
              Ke Halaman Utama <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}
