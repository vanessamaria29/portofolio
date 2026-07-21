"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, ArrowRight, User, Building2, Users, CheckCircle2, Target, AlertCircle, ListTodo, ClipboardCheck, Sparkles, BarChart3, Layers, Calculator, Store, Bell, TrendingUp, Kanban } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <section className={`bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xs my-8 ${className}`}>
    <div className="border-b border-slate-200 pb-4 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold tracking-wider uppercase mb-2">
          {index} / {title.split(' ')[0]}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="w-12 h-1 bg-slate-900 rounded-full hidden md:block"></div>
    </div>
    {children}
  </section>
)

export default function GlacierCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative text-slate-900">
      
      {/* Background ambient gradients - Clean Ice Blue */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-sky-100/80 rounded-full blur-[90px] opacity-70" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-100/70 rounded-full blur-[90px] opacity-70" />
      </div>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors mb-8 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* HERO SECTION */}
        <FadeIn direction="up">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-10 shadow-sm mb-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Kolom Kiri: Informasi Case Study */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  Case Study
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none">
                  Glacier
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Platform operasional berbasis web yang membantu <strong className="text-slate-900 font-semibold underline decoration-slate-300">Sahabat Mixue Group</strong> mengelola stok, menghitung HPP, dan memantau performa cabang secara lebih efisien melalui sistem yang terintegrasi.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-slate-200 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Peran</span>
                    <span className="font-bold text-slate-900 text-sm">Product Manager • Project Manager</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Durasi</span>
                    <span className="font-bold text-slate-900 text-sm">3 Bulan</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 mt-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Frameworks & Methodologies</span>
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
                      <span key={framework} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-md border border-slate-200">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Logo Glacier */}
              <div className="lg:col-span-5 flex items-center justify-center p-2 md:p-4">
                <div className="relative flex items-center justify-center w-full">
                  <Image 
                    src="/images/glacier-logo.png"
                    alt="Logo Glacier"
                    width={800}
                    height={800}
                    className="w-full max-w-[440px] md:max-w-[500px] h-auto object-contain relative z-10 drop-shadow-md"
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
            <div className="space-y-5 text-slate-600 font-normal">
              <p className="text-base md:text-lg leading-relaxed text-slate-700 font-medium">
                Sebelum platform Glacier dikembangkan, seluruh kegiatan operasional harian Sahabat Mixue Group masih mengandalkan mekanisme kerja manual dan pengolahan data terpisah melalui spreadsheet. Kondisi ini menciptakan hambatan signifikan dalam menjaga efisiensi operasional dan akurasi data antar cabang.
              </p>
              
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 md:p-6 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider border-b border-slate-200 pb-2.5">Kondisi Operasional Sebelum Glacier:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {[
                    "Pencatatan persediaan bahan baku dan stok produk masih dilakukan secara terpisah menggunakan Microsoft Excel.",
                    "Perhitungan Harga Pokok Penjualan (HPP) dilakukan secara manual sehingga rentan terhadap kesalahan kalkulasi.",
                    "Data persediaan dan transaksi antar cabang tersebar di berbagai file yang tidak saling terintegrasi.",
                    "Supervisor cabang harus merekap laporan operasional secara manual setiap hari sebelum dikirimkan ke pihak manajemen.",
                    "Owner mengalami kesulitan dalam memperoleh informasi terkini secara real-time untuk mengambil keputusan bisnis secara cepat."
                  ].map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/80 text-slate-700 font-normal text-sm leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-slate-800 shrink-0 mt-1.5"></div>
                      <span>{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-900 text-slate-900 rounded-xl shadow-xs flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  Proses operasional manual tersebut membutuhkan sistem berbasis web yang mampu mengintegrasikan seluruh aktivitas operasional dan konsolidasi data cabang dalam satu platform terpusat.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 2: Business Process Analysis */}
        <FadeIn delay={0.2}>
          <SlideFrame index="02" title="Business Process Analysis">
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-sm text-slate-700 min-w-[650px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="px-6 py-5 md:py-6 font-bold uppercase text-xs tracking-wider w-1/2 border-r border-slate-800">Sebelum Glacier (As-Is)</th>
                    <th className="px-6 py-5 md:py-6 font-bold uppercase text-xs tracking-wider w-1/2">Setelah Glacier (To-Be)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-medium border-r border-slate-200 text-slate-600">Pencatatan stok menggunakan Excel</td>
                    <td className="px-6 py-4 md:py-4.5 font-semibold text-slate-900 bg-slate-50/50">Data stok tercatat dalam sistem secara terpusat</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-medium border-r border-slate-200 text-slate-600">Perhitungan HPP dilakukan manual</td>
                    <td className="px-6 py-4 md:py-4.5 font-semibold text-slate-900 bg-slate-50/50">HPP dihitung otomatis oleh sistem</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-medium border-r border-slate-200 text-slate-600">Laporan dikirim melalui file Excel</td>
                    <td className="px-6 py-4 md:py-4.5 font-semibold text-slate-900 bg-slate-50/50">Dashboard menampilkan data secara real-time</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-medium border-r border-slate-200 text-slate-600">Monitoring antar cabang memerlukan rekap manual</td>
                    <td className="px-6 py-4 md:py-4.5 font-semibold text-slate-900 bg-slate-50/50">Owner dapat memantau seluruh cabang dari satu dashboard</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-medium border-r border-slate-200 text-slate-600">Risiko human error tinggi</td>
                    <td className="px-6 py-4 md:py-4.5 font-semibold text-slate-900 bg-slate-50/50">Data lebih konsisten dan mudah ditelusuri</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm font-medium text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
              Digitalisasi alur kerja dari As-Is menuju To-Be memungkinkan eliminasi proses rekapitulasi manual yang memakan waktu, mengurangi tingkat kesalahan input data, serta memberikan visibilitas operasional penuh untuk mendukung pertumbuhan bisnis cabang secara terukur.
            </p>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 3: Product Goals */}
        <FadeIn delay={0.3}>
          <SlideFrame index="03" title="Product Goals">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-200 pb-2.5">Owner</h4>
                  <ul className="space-y-2.5 text-sm font-normal text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Memantau performa seluruh cabang.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Memperoleh data operasional secara real-time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Mendukung pengambilan keputusan bisnis secara cepat.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-200 pb-2.5">Supervisor</h4>
                  <ul className="space-y-2.5 text-sm font-normal text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Mempermudah pengelolaan persediaan stok.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Mempercepat proses pelaporan harian.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Mengurangi kesalahan pencatatan data.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-200 pb-2.5">Bisnis</h4>
                  <ul className="space-y-2.5 text-sm font-normal text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Meningkatkan efisiensi operasional secara keseluruhan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <span>Meningkatkan akurasi dan konsistensi data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                <div key={idx} className="p-5 md:p-6 border border-slate-200 bg-white rounded-xl shadow-xs flex flex-col justify-between h-full gap-4">
                  <h4 className="font-bold text-slate-900 text-lg border-b border-slate-200 pb-2.5">
                    {stakeholder.title}
                  </h4>
                  <div className="flex flex-col gap-3.5 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Goal</span>
                      <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">{stakeholder.goal}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Pain Point</span>
                      <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">{stakeholder.pain}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Needs</span>
                      <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">{stakeholder.need}</p>
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
            <p className="text-base text-slate-700 font-medium mb-5 leading-relaxed">
              Metode MoSCoW digunakan untuk memprioritaskan pengembangan modul operasional inti agar kebutuhan utama pengguna dapat diselesaikan lebih dahulu. Fitur lanjutan diposisikan sebagai pengembangan berikutnya setelah fondasi sistem berjalan dengan baik.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              <div className="p-5 border border-slate-900 rounded-xl bg-white shadow-xs">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Must Have</span>
                  <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded">P0</span>
                </h4>
                <ul className="text-xs font-medium text-slate-700 space-y-2">
                  {["Login & Authentication", "Dashboard Monitoring", "Inventory Management", "Stock Movement", "Automatic HPP Calculator", "Reporting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border border-slate-300 rounded-xl bg-white shadow-xs">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-600" /> Should Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">P1</span>
                </h4>
                <ul className="text-xs font-medium text-slate-700 space-y-2">
                  {["Analytics Dashboard", "Smart Reminder"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-xs">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Could Have</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">P2</span>
                </h4>
                <ul className="text-xs font-medium text-slate-700 space-y-2">
                  {["Export PDF", "Email Notification"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50 shadow-xs">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-300" /> Won't Have</span>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Out of Scope</span>
                </h4>
                <ul className="text-xs font-medium text-slate-600 space-y-2">
                  {["Mobile Application", "AI Forecasting", "ERP Integration"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs md:text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
              <strong className="text-slate-900 font-bold">Rasionalisasi:</strong> Fitur pada kategori Must Have berfokus pada digitalisasi proses operasional utama, yaitu pengelolaan stok, perhitungan HPP, dan pelaporan. Sementara fitur seperti AI Forecasting dan ERP Integration tidak menjadi prioritas awal karena membutuhkan kesiapan data dan kompleksitas implementasi yang lebih tinggi.
            </p>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 6: Key Features */}
        <FadeIn delay={0.6}>
          <SlideFrame index="06" title="Key Features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <div key={idx} className="p-5 md:p-6 border border-slate-200 bg-white rounded-xl shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-2">{feat.title}</h4>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed mb-4">{feat.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Business Value</span>
                      <p className="text-xs font-semibold text-slate-900 leading-snug">{feat.val}</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-xl shadow-xs">
                <h4 className="font-bold text-slate-900 text-base mb-5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <User className="w-4 h-4" />
                  </div>
                  User Journey: Owner
                </h4>
                <div className="flex flex-col gap-0 relative ml-1">
                  <div className="absolute left-[11px] top-3 bottom-6 w-[2px] bg-slate-200"></div>
                  {[
                    { title: "Dashboard Monitoring", desc: "Membuka platform dan masuk ke halaman utama dashboard." },
                    { title: "Melihat KPI", desc: "Memeriksa ringkasan performa finansial dan total stok." },
                    { title: "Memantau Cabang", desc: "Memilih dan melihat detail laporan operasional cabang tertentu." },
                    { title: "Melihat Analisis", desc: "Menganalisis grafik tren penggunaan stok dan margin HPP." },
                    { title: "Mengambil Keputusan", desc: "Menentukan strategi pengadaan barang atau evaluasi cabang." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 pb-6 relative">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center relative z-10 shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs md:text-sm font-bold text-slate-900">{step.title}</h5>
                        <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-xl shadow-xs">
                <h4 className="font-bold text-slate-900 text-base mb-5 flex items-center gap-2.5 border-b border-slate-200 pb-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  User Journey: Supervisor
                </h4>
                <div className="flex flex-col gap-0 relative ml-1">
                  <div className="absolute left-[11px] top-3 bottom-6 w-[2px] bg-slate-200"></div>
                  {[
                    { title: "Login", desc: "Masuk ke dalam sistem menggunakan kredensial akun supervisor." },
                    { title: "Input Perubahan Stok", desc: "Mencatat penerimaan barang masuk atau penggunaan stok harian." },
                    { title: "Validasi Data", desc: "Memeriksa kesesuaian fisik stok dengan angka input sistem." },
                    { title: "Automatic HPP Calculator", desc: "Sistem secara otomatis menghitung nilai HPP berdasarkan stok." },
                    { title: "Generate Laporan", desc: "Menghasilkan laporan harian otomatis untuk dikirim ke manajemen." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 pb-6 relative">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center relative z-10 shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs md:text-sm font-bold text-slate-900">{step.title}</h5>
                        <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">{step.desc}</p>
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
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs md:text-sm text-slate-700 min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="px-5 py-5 md:py-6 font-bold uppercase text-xs tracking-wider">Fitur</th>
                    <th className="px-4 py-5 md:py-6 font-bold uppercase text-xs tracking-wider text-center">Reach</th>
                    <th className="px-4 py-5 md:py-6 font-bold uppercase text-xs tracking-wider text-center">Impact</th>
                    <th className="px-4 py-5 md:py-6 font-bold uppercase text-xs tracking-wider text-center">Confidence</th>
                    <th className="px-4 py-5 md:py-6 font-bold uppercase text-xs tracking-wider text-center">Effort</th>
                    <th className="px-4 py-5 md:py-6 font-bold uppercase text-xs tracking-wider text-center">Score</th>
                    <th className="px-5 py-5 md:py-6 font-bold uppercase text-xs tracking-wider">Alasan Prioritas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 md:py-4.5 font-bold text-slate-900">Inventory Management</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">100%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">3 (High)</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">100%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">2 (Med)</td>
                    <td className="px-4 py-4 md:py-4.5 font-bold text-slate-900 text-center bg-slate-50">150.0</td>
                    <td className="px-5 py-4 md:py-4.5 font-normal text-xs text-slate-600">Fondasi utama seluruh sistem operasional persediaan.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 md:py-4.5 font-bold text-slate-900">Dashboard Monitoring</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">90%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">3 (High)</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">90%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">2 (Med)</td>
                    <td className="px-4 py-4 md:py-4.5 font-bold text-slate-900 text-center bg-slate-50">121.5</td>
                    <td className="px-5 py-4 md:py-4.5 font-normal text-xs text-slate-600">Memberikan visibilitas langsung bagi Owner dan Supervisor.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 md:py-4.5 font-bold text-slate-900">Automatic HPP Calculator</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">80%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">3 (High)</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">90%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">2 (Med)</td>
                    <td className="px-4 py-4 md:py-4.5 font-bold text-slate-900 text-center bg-slate-50">108.0</td>
                    <td className="px-5 py-4 md:py-4.5 font-normal text-xs text-slate-600">Mengeliminasi perhitungan manual HPP yang rawan error.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 md:py-4.5 font-bold text-slate-900">Analytics Dashboard</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">60%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">2 (Med)</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">80%</td>
                    <td className="px-4 py-4 md:py-4.5 font-medium text-center">3 (High)</td>
                    <td className="px-4 py-4 md:py-4.5 font-bold text-slate-900 text-center bg-slate-50">32.0</td>
                    <td className="px-5 py-4 md:py-4.5 font-normal text-xs text-slate-600">Fitur evaluasi sekunder yang memerlukan effort pengembangan lebih besar.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 9: Solusi */}
        <FadeIn delay={0.85}>
          <SlideFrame index="09" title="Solusi">
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs md:text-sm text-slate-700 min-w-[650px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-2 border-slate-900">
                    <th className="px-6 py-5 md:py-6 font-bold uppercase text-xs tracking-wider w-1/3">Masalah</th>
                    <th className="px-6 py-5 md:py-6 font-bold uppercase text-xs tracking-wider w-1/3">Fitur Solusi</th>
                    <th className="px-6 py-5 md:py-6 font-bold uppercase text-xs tracking-wider w-1/3">Manfaat Bisnis & User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-normal text-slate-600">Stok tidak sinkron antar file Excel cabang.</td>
                    <td className="px-6 py-4 md:py-4.5 font-bold text-slate-900">Inventory Management</td>
                    <td className="px-6 py-4 md:py-4.5 text-slate-700 font-medium">Memastikan data stok selalu akurat dan terpusat.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-normal text-slate-600">Perhitungan HPP memakan waktu dan rentan salah hitung.</td>
                    <td className="px-6 py-4 md:py-4.5 font-bold text-slate-900">Automatic HPP Calculator</td>
                    <td className="px-6 py-4 md:py-4.5 text-slate-700 font-medium">Mengurangi proses perhitungan manual secara instan.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-normal text-slate-600">Owner sulit memantau seluruh cabang secara konsisten.</td>
                    <td className="px-6 py-4 md:py-4.5 font-bold text-slate-900">Dashboard Monitoring</td>
                    <td className="px-6 py-4 md:py-4.5 text-slate-700 font-medium">Memudahkan monitoring operasional secara real-time.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 md:py-4.5 font-normal text-slate-600">Stok sering habis tanpa diketahui lebih awal.</td>
                    <td className="px-6 py-4 md:py-4.5 font-bold text-slate-900">Smart Reminder</td>
                    <td className="px-6 py-4 md:py-4.5 text-slate-700 font-medium">Membantu pengisian stok lebih cepat sebelum kehabisan.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 10: Success Metrics */}
        <FadeIn delay={0.9}>
          <SlideFrame index="10" title="Success Metrics">
            <div className="flex flex-col gap-5">
              
              <div className="p-6 md:p-8 bg-white border border-slate-900 rounded-xl text-slate-900 flex flex-col md:flex-row md:items-center gap-5 justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-900" /> North Star Metric
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight">Persentase Cabang yang Aktif Menggunakan Glacier</h4>
                  <p className="text-xs md:text-sm font-medium text-slate-600 mt-2 max-w-2xl leading-relaxed">
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
                  <div key={idx} className="p-5 border border-slate-200 bg-white rounded-xl shadow-xs flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">{metric.label}</h5>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed">{metric.desc}</p>
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
            <div className="flex flex-col gap-5">
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                Proyek Glacier dikelola menggunakan <strong className="text-slate-900 font-bold">Scrum Framework</strong> dengan bantuan <strong className="text-slate-900 font-bold">Trello</strong> sebagai alat manajemen tugas harian.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 p-5 md:p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2.5">Alur Kerja Pengembangan (Agile Scrum):</h4>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 text-center">
                  {[
                    "Requirement Gathering",
                    "Product Backlog",
                    "Sprint Planning",
                    "Sprint Execution",
                    "Sprint Review",
                    "Continuous Improvement"
                  ].map((step, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-slate-900 block mb-1">0{idx + 1}</span>
                      <span className="text-xs font-medium text-slate-700 leading-tight">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trello Board Mockup Display Area */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-slate-900 text-white flex items-center justify-center">
                      <Kanban className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Glacier Project Management - Trello Board</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Sahabat Mixue Group Operational Digitalization Sprint</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[11px] font-semibold border border-slate-200">Scrum Board</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 overflow-x-auto">
                  
                  {/* Column 1 */}
                  <div className="bg-white p-3 rounded-md border border-slate-200 flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-700 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>Product Backlog</span>
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    </span>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs font-medium text-slate-800">Export PDF Report</div>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs font-medium text-slate-800">Notifikasi Email Safety Stock</div>
                  </div>

                  {/* Column 2 */}
                  <div className="bg-white p-3 rounded-md border border-slate-200 flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-700 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>Sprint Backlog</span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    </span>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs font-medium text-slate-800">Stock Movement Inter-Branch</div>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs font-medium text-slate-800">Analytics Trend Chart</div>
                  </div>

                  {/* Column 3 */}
                  <div className="bg-white p-3 rounded-md border border-slate-200 flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-700 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>In Progress</span>
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </span>
                    <div className="p-2 bg-blue-50 rounded border border-blue-200 text-xs font-semibold text-slate-900">Automatic HPP Engine</div>
                    <div className="p-2 bg-blue-50 rounded border border-blue-200 text-xs font-semibold text-slate-900">Smart Reminder Low Stock</div>
                  </div>

                  {/* Column 4 */}
                  <div className="bg-white p-3 rounded-md border border-slate-200 flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-700 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>Review / QA</span>
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    </span>
                    <div className="p-2 bg-purple-50 rounded border border-purple-200 text-xs font-semibold text-slate-900">Multi-Branch KPI Dashboard</div>
                  </div>

                  {/* Column 5 */}
                  <div className="bg-white p-3 rounded-md border border-slate-200 flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-700 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>Done</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-xs font-semibold text-slate-900">Auth & User Role Management</div>
                    <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-xs font-semibold text-slate-900">Inventory Stock Table MVP</div>
                  </div>

                </div>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 12: Refleksi */}
        <FadeIn delay={1.0}>
          <SlideFrame index="12" title="Refleksi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><AlertCircle className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Tantangan</h4>
                <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">
                  Tantangan terbesar adalah menerjemahkan alur kerja operasional manual yang kompleks berbasis Excel menjadi sistem berbasis web yang lebih efisien tanpa mengganggu kebiasaan dan alur kerja harian pengguna yang sudah familiar di lapangan.
                </p>
              </div>
              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><ListTodo className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Trade-Off</h4>
                <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">
                  Fitur-fitur inti seperti pengelolaan persediaan stok, otomatisasi perhitungan HPP, dan dashboard monitoring diprioritaskan penuh dibandingkan fitur lanjutan agar produk dapat memberikan nilai tambah nyata bagi bisnis sejak rilis pertama.
                </p>
              </div>
              <div className="p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4"><ClipboardCheck className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Rencana Pengembangan</h4>
                <p className="text-xs md:text-sm font-normal text-slate-600 leading-relaxed">
                  Apabila Glacier dikembangkan lebih lanjut, fitur seperti forecasting stok, notifikasi yang lebih cerdas, serta analitik operasional yang lebih mendalam dapat dipertimbangkan untuk meningkatkan efisiensi pengelolaan cabang.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/product-management/digital-skill-assessment" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs">
              <ArrowLeft className="w-4 h-4" /> Studi Kasus Sebelumnya
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs">
              Ke Halaman Utama <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}
