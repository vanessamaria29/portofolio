import React from "react"
import type { Metadata } from "next"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "KONEKIN | Product Management Case Study | Vanessa",
  description: "Case study mengenai platform yang menghubungkan UMKM dengan mahasiswa untuk menyediakan layanan digital secara aman, terverifikasi, dan transparan.",
  alternates: {
    canonical: "https://vanessamaria.dev/projects/konekin",
  },
  openGraph: {
    title: "KONEKIN | Product Management Case Study | Vanessa",
    description: "Case study mengenai platform yang menghubungkan UMKM dengan mahasiswa untuk layanan digital secara aman, terverifikasi, dan transparan.",
    url: "https://vanessamaria.dev/projects/konekin",
    siteName: "Vanessa Portfolio",
    images: [
      {
        url: "/images/konekin-cover.png",
        width: 1200,
        height: 630,
        alt: "KONEKIN Case Study Cover",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "KONEKIN | Product Management Case Study | Vanessa",
    description: "Case study mengenai platform yang menghubungkan UMKM dengan mahasiswa untuk layanan digital secara aman, terverifikasi, dan transparan.",
    images: ["/images/konekin-cover.png"],
  },
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "name": "KONEKIN Case Study",
      "headline": "KONEKIN - Platform Penghubung UMKM & Mahasiswa",
      "description": "Case study mengenai platform yang menghubungkan UMKM dengan mahasiswa untuk layanan digital secara aman, terverifikasi, dan transparan.",
      "author": {
        "@type": "Person",
        "name": "Vanessa"
      },
      "dateCreated": "2025"
    },
    {
      "@type": "SoftwareApplication",
      "name": "KONEKIN",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "author": {
        "@type": "Person",
        "name": "Vanessa"
      },
      "description": "Platform digital escrow & verifikasi mahasiswa untuk layanan UMKM.",
      "programmingLanguage": "TypeScript, Next.js, Tailwind CSS"
    }
  ]
}

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-8 md:p-10 shadow-lg shadow-slate-200/40 my-8 ${className}`}>
    <div className="border-b border-slate-200 pb-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <span className="text-xs font-bold text-slate-700 tracking-wider uppercase bg-slate-100 px-3 py-1 rounded border border-slate-200">{index} / {title.split(' ')[0]}</span>
        <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">{title}</h3>
      </div>
    </div>
    {children}
  </div>
)

export default function KonekinCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-[600px] h-[600px] bg-purple-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-pink-300/60 rounded-full blur-[100px] mix-blend-multiply opacity-80 animate-blob animation-delay-4000" />
      </div>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-0">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all mb-8 bg-white border border-slate-200 px-4 py-2.5 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 select-none relative z-20"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* 01. PROJECT OVERVIEW */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-8 w-full max-w-[250px] mx-auto flex justify-center relative">
                  <Image 
                    src="/images/konekin-cover.png"
                    alt="KONEKIN Cover"
                    width={800}
                    height={450}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Case Study</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
                  KONEKIN
                </h1>
                <p className="font-sans text-base text-slate-600 leading-relaxed mb-6">
                  Platform yang menghubungkan UMKM dengan mahasiswa untuk menyediakan layanan digital seperti desain promosi, pengelolaan media sosial, dan website sederhana melalui proses yang aman, terverifikasi, dan transparan.
                </p>
                
                <div className="grid grid-cols-[100px_1fr] gap-y-3 text-xs md:text-sm font-medium text-slate-600 bg-white/50 backdrop-blur-sm px-4 py-4 rounded-lg border border-slate-100">
                  <strong className="text-slate-900">Peran:</strong>
                  <span>Product Manager, Ketua Tim</span>
                  
                  <strong className="text-slate-900">Durasi:</strong>
                  <span>1 Bulan</span>
                  
                  <strong className="text-slate-900">Frameworks:</strong>
                  <span className="leading-relaxed">Lean Canvas {" • "} User Persona {" • "} Market Validation {" • "} User Journey Mapping {" • "} RICE Prioritization {" • "} SWOT Analysis {" • "} Product Roadmap {" • "} North Star Metric</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/50 backdrop-blur-sm border border-slate-100 rounded-lg p-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Kajian Produk</h3>
                
                <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <div>
                    <span className="text-slate-500 block mb-1 font-medium">Peluang Pasar</span>
                    <span className="font-medium">Saat ini banyak UMKM yang mulai beralih ke digital, namun terhalang oleh tingginya biaya layanan digital dari agensi profesional.</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-slate-500 block mb-1 font-medium">Permasalahan Pengguna</span>
                    <span className="font-medium">UMKM membutuhkan layanan digital yang terjangkau dan aman. Di sisi lain, talenta mahasiswa membutuhkan proyek nyata untuk membangun portofolio profesional sebelum lulus, tetapi kesulitan menemukan klien yang terpercaya.</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-slate-500 block mb-1 font-medium">Peluang Bisnis</span>
                    <span className="font-medium">Terdapat celah antara kebutuhan UMKM yang tidak memiliki anggaran besar dan kebutuhan mahasiswa akan pengalaman praktis. Platform lokal yang transparan dan terverifikasi sangat dibutuhkan sebagai alternatif dari platform freelance global.</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-slate-500 block mb-1 font-medium">Dampak yang Diharapkan</span>
                    <span className="font-medium">Membantu UMKM mendapatkan layanan digital dengan harga terjangkau melalui proses yang aman, sekaligus memfasilitasi mahasiswa membangun portofolio profesional mereka.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* 02. PROBLEM STATEMENT */}
        <FadeIn direction="up">
          <SlideFrame index="1" title="Pernyataan Masalah">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="border border-slate-200 bg-white p-8 rounded-lg">
                <h4 className="font-semibold text-slate-900 text-sm mb-6 pb-4 border-b border-slate-100">Dari Sisi UMKM</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Akar Masalah</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Dana yang terbatas membuat UMKM sering mencari layanan digital murah di grup media sosial. Namun, cara ini sangat rawan penipuan karena uang muka sering dibawa kabur.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200 mt-2">
                    <span className="text-xs font-semibold text-slate-900 block mb-1">Dampak Bisnis</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Tampilan toko online UMKM kalah menarik dibandingkan pesaing besar, sehingga penjualan tidak maksimal.</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 bg-white p-8 rounded-lg">
                <h4 className="font-semibold text-slate-900 text-sm mb-6 pb-4 border-b border-slate-100">Dari Sisi Mahasiswa</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Akar Masalah</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Perusahaan menetapkan syarat pengalaman kerja bagi pelamar kerja lulusan baru. Mahasiswa butuh portofolio kerja nyata, tapi sulit mendapat klien pertama yang mau percaya.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200 mt-2">
                    <span className="text-xs font-semibold text-slate-900 block mb-1">Dampak Bisnis</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Banyak lulusan baru yang menganggur karena kesulitan membuktikan kemampuan kerja mereka kepada perekrut (HRD).</p>
                  </div>
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* 03. PRODUCT GOALS */}
        <FadeIn direction="up">
          <SlideFrame index="2" title="Tujuan Produk">
            <div className="mb-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                Platform KONEKIN dirancang untuk memberikan keuntungan bagi tiga pihak secara bersamaan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-lg">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 pb-2 border-b border-slate-100">Bagi UMKM</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Menyediakan akses mudah kepada talenta mahasiswa di bidang layanan digital dengan proses yang aman, transparan, dan harga yang terjangkau.</p>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-lg">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 pb-2 border-b border-slate-100">Bagi Mahasiswa</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Memberikan sarana untuk mendapatkan klien pertama dengan kepastian pembayaran, guna membangun portofolio profesional.</p>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-lg">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 pb-2 border-b border-slate-100">Bagi Platform (Bisnis)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Menciptakan ekosistem layanan digital lokal yang mandiri dan menghasilkan pendapatan dari komisi penyelesaian proyek.</p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 04. USER PERSONA */}
        <FadeIn direction="up">
          <SlideFrame index="3" title="User Persona">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 flex flex-col">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Persona 1</span>
                  <h4 className="font-serif text-xl font-semibold text-slate-900 mb-1">Persona Komposit: Pak Aris</h4>
                  <span className="text-sm font-medium text-slate-700 block">Pemilik Usaha Katering — Merupakan gabungan profil, kebiasaan, dan kebutuhan utama dari 5 pemilik UMKM yang kami wawancarai.</span>
                </div>
                
                <div className="mb-6">
                  <strong className="block text-slate-900 mb-2 text-sm">Profil Singkat</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pemilik usaha katering komposit yang merangkum gabungan profil, pola kebutuhan, kendala anggaran promosi, serta kekhawatiran dari 5 pemilik UMKM yang kami wawancarai selama riset lapangan.
                  </p>
                </div>

                <div className="space-y-5 text-sm text-slate-700">
                  <div>
                    <strong className="block text-slate-900 mb-2">Tujuan</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Memperkuat kehadiran bisnis di media digital.</li>
                      <li>Meningkatkan penjualan melalui konten digital yang menarik.</li>
                      <li>Mendapatkan layanan digital dengan biaya yang terjangkau.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-2">Pain Points</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Sulit menemukan penyedia layanan digital yang terpercaya.</li>
                      <li>Khawatir hasil pekerjaan tidak sesuai kebutuhan.</li>
                      <li>Memiliki anggaran promosi yang terbatas.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-2">Kebutuhan</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Proses pemesanan yang sederhana.</li>
                      <li>Sistem pembayaran yang aman.</li>
                      <li>Talenta mahasiswa yang komunikatif dan profesional.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 flex flex-col">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Persona 2</span>
                  <h4 className="font-serif text-xl font-semibold text-slate-900 mb-1">Taneshia</h4>
                  <span className="text-sm font-medium text-slate-700 block">Mahasiswa Sistem Informasi</span>
                </div>
                
                <div className="mb-6">
                  <strong className="block text-slate-900 mb-2 text-sm">Profil Singkat</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mahasiswa semester 5 Program Studi Sistem Informasi yang memiliki kemampuan di bidang layanan digital, seperti desain media sosial, pembuatan website sederhana, serta digital marketing dasar. Taneshia ingin memperoleh pengalaman melalui proyek nyata agar memiliki portofolio profesional sebelum lulus.
                  </p>
                </div>

                <div className="space-y-5 text-sm text-slate-700">
                  <div>
                    <strong className="block text-slate-900 mb-2">Tujuan</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Membangun portofolio profesional.</li>
                      <li>Mendapatkan pengalaman proyek nyata.</li>
                      <li>Mengembangkan keterampilan melalui kolaborasi dengan UMKM.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-2">Pain Points</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Sulit memperoleh proyek nyata pertama.</li>
                      <li>Portofolio masih didominasi tugas perkuliahan.</li>
                      <li>Belum memiliki pengalaman profesional yang dapat ditunjukkan kepada perekrut.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-2">Kebutuhan</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Klien yang terpercaya.</li>
                      <li>Pembayaran yang aman.</li>
                      <li>Portofolio yang dapat digunakan saat melamar pekerjaan.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* 05. PRODUCT SCOPE */}
        <FadeIn direction="up">
          <SlideFrame index="4" title="Cakupan MVP (Minimum Viable Product)">
            <div className="mb-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                Pada tahap awal pengembangan, KONEKIN berfokus pada fitur-fitur yang paling penting untuk menyelesaikan permasalahan utama pengguna, yaitu membangun kepercayaan dalam proses transaksi serta mempermudah UMKM menemukan mahasiswa yang sesuai. Fitur lain yang belum menjadi prioritas akan dipertimbangkan pada tahap pengembangan berikutnya.
              </p>
            </div>
            
            <div className="overflow-x-auto pb-2">
              <table className="w-full text-left border-collapse text-sm text-slate-700 min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <th className="p-4 font-semibold text-slate-900 w-1/2 border-r border-slate-200">IN SCOPE (MVP)</th>
                    <th className="p-4 font-semibold text-slate-900 w-1/2">OUT OF SCOPE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4 align-top border-r border-slate-200">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Registrasi dan Login Pengguna</li>
                        <li>Verifikasi Identitas Mahasiswa</li>
                        <li>Pembuatan Proyek oleh UMKM</li>
                        <li>Pencocokan Talenta Mahasiswa Terverifikasi</li>
                        <li>Sistem Pembayaran Escrow</li>
                        <li>Chat antara UMKM dan Mahasiswa</li>
                        <li>Riwayat Proyek dan Portofolio Mahasiswa</li>
                      </ul>
                    </td>
                    <td className="p-4 align-top bg-slate-50/50">
                      <ul className="list-disc list-inside space-y-2 text-slate-500">
                        <li>Aplikasi Mobile (Android & iOS)</li>
                        <li>Rekomendasi Mahasiswa berbasis AI</li>
                        <li>Video Call dalam Aplikasi</li>
                        <li>Dashboard Analitik untuk UMKM</li>
                        <li>Pembayaran Internasional</li>
                        <li>Integrasi dengan Platform Pihak Ketiga</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic text-center max-w-3xl mx-auto mt-6">
              Penentuan cakupan MVP dilakukan agar proses pengembangan tetap terfokus pada penyelesaian masalah utama pengguna sebelum menambahkan fitur lanjutan.
            </p>
          </SlideFrame>
        </FadeIn>

        {/* 06. MARKET VALIDATION */}
        <FadeIn direction="up">
          <SlideFrame index="5" title="Validasi Pasar & Riset">
            <div className="mb-10">
              <p className="text-sm text-slate-700 leading-relaxed">
                Halaman ini bertujuan menunjukkan proses validasi yang dilakukan sebelum merancang solusi KONEKIN.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-slate-200 p-8 rounded-lg text-center shadow-sm">
                <span className="block text-5xl font-serif font-bold text-slate-900 mb-2">5</span>
                <span className="block text-sm font-semibold text-slate-600 uppercase tracking-widest">UMKM<br/>Diwawancarai</span>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-lg text-center shadow-sm">
                <span className="block text-5xl font-serif font-bold text-slate-900 mb-2">35</span>
                <span className="block text-sm font-semibold text-slate-600 uppercase tracking-widest">Mahasiswa<br/>Mengisi Survei</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-slate-900">Temuan Utama UMKM</h4>
                    <span className="text-xs text-slate-500">(Berdasarkan wawancara)</span>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>Seluruh UMKM yang diwawancarai menyatakan media digital menjadi bagian penting dalam memasarkan usaha.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>Sebagian besar UMKM bersedia menggunakan layanan digital dari talenta mahasiswa apabila kualitas pekerjaan terjamin dan proses transaksi aman.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>Kekhawatiran terbesar UMKM adalah risiko penipuan, hasil pekerjaan yang tidak sesuai, serta sulit menemukan penyedia layanan digital yang dapat dipercaya.</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-slate-900">Temuan Utama Mahasiswa</h4>
                    <span className="text-xs text-slate-500">(Berdasarkan survei)</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
                      <span>Merasa portofolio penting sebelum lulus</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-800 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
                      <span>Belum memiliki proyek komersial pertama</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-800 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
                      <span>Tertarik proyek nyata bersama UMKM</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-800 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 border-t border-slate-100 pt-6">
                  Sebagian besar responden menilai portofolio profesional sangat penting sebelum lulus dan tertarik memperoleh pengalaman melalui proyek nyata bersama UMKM.
                </p>
              </div>
            </div>


          </SlideFrame>
        </FadeIn>

        {/* 07. LEAN CANVAS */}
        <FadeIn direction="up">
          <SlideFrame index="6" title="Lean Canvas">
            <div className="w-full bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <Image 
                src="/images/konekin-lean-canvas.png" 
                alt="Lean Canvas KONEKIN" 
                width={1200}
                height={700}
                className="w-full h-auto rounded-md object-contain border border-slate-100"
              />
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 08. SWOT ANALYSIS */}
        <FadeIn direction="up">
          <SlideFrame index="7" title="Analisis SWOT">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-8 rounded-lg">
                <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block mb-4 border-b border-slate-100 pb-2">Kekuatan (Strengths)</span>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                  <li>Sistem escrow meningkatkan rasa aman dalam proses transaksi.</li>
                  <li>Talenta mahasiswa terverifikasi membantu meningkatkan kepercayaan UMKM.</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-lg">
                <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block mb-4 border-b border-slate-100 pb-2">Kelemahan (Weaknesses)</span>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                  <li>Jumlah talenta aktif masih terbatas pada tahap awal.</li>
                  <li>Kualitas hasil proyek dapat bervariasi sesuai pengalaman mahasiswa.</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-lg">
                <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block mb-4 border-b border-slate-100 pb-2">Peluang (Opportunities)</span>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                  <li>Digitalisasi UMKM meningkatkan kebutuhan layanan digital.</li>
                  <li>Kolaborasi dengan kampus membuka peluang memperoleh talenta baru.</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 rounded-lg">
                <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider block mb-4 border-b border-slate-100 pb-2">Ancaman (Threats)</span>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                  <li>Platform freelance lain memiliki basis pengguna yang lebih besar.</li>
                  <li>Risiko transaksi dilakukan di luar platform setelah kedua pihak saling mengenal.</li>
                </ul>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 09. USER JOURNEY */}
        <FadeIn direction="up">
          <SlideFrame index="8" title="Pemetaan Perjalanan Pengguna">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h4 className="font-semibold text-slate-900 text-lg mb-8 border-b border-slate-100 pb-4">Perjalanan UMKM</h4>
                <div className="space-y-8">
                  {[
                    {
                      phase: "Membuat Proyek", 
                      goal: "Membuat kebutuhan proyek layanan digital dengan cepat.", 
                      pain: "UMKM sering kesulitan menjelaskan kebutuhan proyek secara rinci.", 
                      opp: "Sediakan template brief yang memandu UMKM mengisi tujuan, kebutuhan, anggaran awal, dan tenggat waktu."
                    },
                    {
                      phase: "Meninjau Lamaran Mahasiswa", 
                      goal: "Menemukan talenta mahasiswa yang paling sesuai.", 
                      pain: "Sulit membandingkan kemampuan setiap pelamar hanya dari deskripsi singkat.", 
                      opp: "Tampilkan portofolio, harga penawaran, pengalaman proyek, dan status verifikasi dalam satu halaman sehingga UMKM dapat membandingkan kandidat dengan mudah."
                    },
                    {
                      phase: "Memilih Talenta & Memulai Kolaborasi", 
                      goal: "Memulai proyek dengan mahasiswa yang telah dipilih.", 
                      pain: "Komunikasi baru dapat dimulai setelah mahasiswa dipilih.", 
                      opp: "Aktifkan fitur chat secara otomatis setelah UMKM menerima salah satu pelamar."
                    },
                    {
                      phase: "Pembayaran Escrow & Monitoring Progress", 
                      goal: "Melakukan pembayaran dengan aman tanpa khawatir kehilangan dana.", 
                      pain: "UMKM khawatir proyek berhenti di tengah jalan setelah pembayaran dilakukan.", 
                      opp: "Dana disimpan di escrow dan dicairkan secara bertahap berdasarkan milestone yang telah diselesaikan."
                    },
                    {
                      phase: "Review & Penyelesaian", 
                      goal: "Menyelesaikan proyek dan memberikan penilaian kepada mahasiswa.", 
                      pain: "Sulit mengetahui kualitas mahasiswa jika tidak ada riwayat pekerjaan sebelumnya.", 
                      opp: "Setelah proyek selesai, UMKM memberikan rating dan ulasan yang akan tampil pada profil mahasiswa sebagai referensi bagi UMKM lainnya."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="border-l-2 border-slate-200 pl-6 relative">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-400" />
                      <h5 className="font-semibold text-slate-900 text-sm mb-3">{idx+1}. {step.phase}</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-slate-800">Tujuan:</strong> <span className="text-slate-600">{step.goal}</span></p>
                        <p><strong className="text-slate-800">Kendala:</strong> <span className="text-slate-600">{step.pain}</span></p>
                        <p><strong className="text-slate-800">Peluang:</strong> <span className="text-slate-600">{step.opp}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h4 className="font-semibold text-slate-900 text-lg mb-8 border-b border-slate-100 pb-4">Perjalanan Mahasiswa</h4>
                <div className="space-y-8">
                  {[
                    {
                      phase: "Registrasi", 
                      goal: "Membuat akun sebagai talenta mahasiswa.", 
                      pain: "Harus membuktikan bahwa benar merupakan mahasiswa aktif.", 
                      opp: "Sediakan proses registrasi sederhana dengan verifikasi identitas mahasiswa."
                    },
                    {
                      phase: "Verifikasi Akun", 
                      goal: "Memperoleh akses untuk melamar proyek.", 
                      pain: "Mahasiswa perlu melalui proses verifikasi sebelum dapat menggunakan platform.", 
                      opp: "Seluruh mahasiswa yang lolos verifikasi dapat langsung melamar proyek, sedangkan Badge Talenta Terverifikasi diberikan kepada mahasiswa yang melampirkan surat rekomendasi dosen sebagai bentuk validasi tambahan."
                    },
                    {
                      phase: "Melamar Proyek", 
                      goal: "Mengajukan penawaran pada proyek yang sesuai.", 
                      pain: "Harus menentukan harga penawaran yang kompetitif.", 
                      opp: "Mahasiswa dapat mengirim proposal singkat beserta harga penawaran sesuai ruang lingkup pekerjaan."
                    },
                    {
                      phase: "Kolaborasi & Update Progress", 
                      goal: "Menyelesaikan proyek sesuai kesepakatan.", 
                      pain: "Klien dapat meminta revisi di luar ruang lingkup proyek.", 
                      opp: "Komunikasi dilakukan melalui fitur chat dan setiap progres dikirim berdasarkan milestone yang telah disepakati."
                    },
                    {
                      phase: "Pembayaran & Reputasi", 
                      goal: "Menerima pembayaran dan membangun reputasi profesional.", 
                      pain: "Mahasiswa membutuhkan bukti pengalaman agar lebih mudah memperoleh proyek berikutnya.", 
                      opp: "Setelah setiap milestone disetujui, dana escrow dicairkan. Setelah proyek selesai, mahasiswa menerima rating dan ulasan dari UMKM, sementara hasil proyek otomatis ditambahkan ke portofolio."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="border-l-2 border-slate-200 pl-6 relative">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-400" />
                      <h5 className="font-semibold text-slate-900 text-sm mb-3">{idx+1}. {step.phase}</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-slate-800">Tujuan:</strong> <span className="text-slate-600">{step.goal}</span></p>
                        <p><strong className="text-slate-800">Kendala:</strong> <span className="text-slate-600">{step.pain}</span></p>
                        <p><strong className="text-slate-800">Peluang:</strong> <span className="text-slate-600">{step.opp}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* 10. RICE PRIORITIZATION */}
        <FadeIn direction="up">
          <SlideFrame index="9" title="Prioritas Fitur (RICE)">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm text-slate-700 min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-300 text-slate-900">
                    <th className="p-4 font-semibold w-1/4">Fitur Minimum (MVP)</th>
                    <th className="p-4 font-semibold text-center">Reach (1-10)</th>
                    <th className="p-4 font-semibold text-center">Impact (1-3)</th>
                    <th className="p-4 font-semibold text-center">Conf. (%)</th>
                    <th className="p-4 font-semibold text-center">Effort (1-5)</th>
                    <th className="p-4 font-semibold text-center bg-slate-100 border-l border-slate-200">Skor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4">
                      <span className="font-semibold text-slate-900 block mb-1">Pembayaran Escrow</span>
                      <span className="text-xs text-slate-500">Alasan: Syarat wajib agar pengguna berani mencoba layanan.</span>
                    </td>
                    <td className="p-4 text-center">10</td>
                    <td className="p-4 text-center">3</td>
                    <td className="p-4 text-center">90%</td>
                    <td className="p-4 text-center">4</td>
                    <td className="p-4 text-center font-semibold text-slate-900 bg-slate-50 border-l border-slate-200">6.8</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <span className="font-semibold text-slate-900 block mb-1">Formulir Pesanan Praktis</span>
                      <span className="text-xs text-slate-500">Alasan: Membantu UMKM yang gaptek agar mudah memesan desain.</span>
                    </td>
                    <td className="p-4 text-center">9</td>
                    <td className="p-4 text-center">2</td>
                    <td className="p-4 text-center">85%</td>
                    <td className="p-4 text-center">2</td>
                    <td className="p-4 text-center font-semibold text-slate-900 bg-slate-50 border-l border-slate-200">7.6</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <span className="font-semibold text-slate-900 block mb-1">Verifikasi Identitas Mahasiswa</span>
                      <span className="text-xs text-slate-500">Alasan: Meningkatkan kepercayaan UMKM terhadap talenta mahasiswa yang bergabung di platform.</span>
                    </td>
                    <td className="p-4 text-center">10</td>
                    <td className="p-4 text-center">3</td>
                    <td className="p-4 text-center">95%</td>
                    <td className="p-4 text-center">3</td>
                    <td className="p-4 text-center font-semibold text-slate-900 bg-slate-50 border-l border-slate-200">9.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 11. VALUE-DRIVEN SOLUTIONS */}
        <FadeIn direction="up">
          <SlideFrame index="10" title="Solusi yang Ditawarkan">
            <div className="mb-8">
              <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                Setiap fitur dirancang untuk menjawab keluhan utama pengguna agar produk benar-benar bermanfaat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              <div className="bg-white border border-slate-200 p-5 rounded-lg flex flex-col gap-3">
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Masalah</span>
                  <p className="text-sm text-slate-700">Takut tertipu saat menggunakan layanan digital dari penyedia yang belum terpercaya.</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Fitur Solusi</span>
                  <p className="text-sm font-semibold text-slate-900">Sistem Escrow</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Manfaat</span>
                  <p className="text-sm text-slate-700">Uang aman ditahan platform, UMKM tenang, mahasiswa pasti dibayar.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-lg flex flex-col gap-3">
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Masalah</span>
                  <p className="text-sm text-slate-700">Sering terjadi miskomunikasi karena kebutuhan proyek tidak dijelaskan secara rinci.</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Fitur Solusi</span>
                  <p className="text-sm font-semibold text-slate-900">Brief Proyek Terstruktur</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Manfaat</span>
                  <p className="text-sm text-slate-700">Membantu UMKM menjelaskan kebutuhan proyek secara lebih jelas sehingga mengurangi miskomunikasi dan revisi.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-lg flex flex-col gap-3">
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Masalah</span>
                  <p className="text-sm text-slate-700">Mahasiswa butuh bukti pengalaman nyata.</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Fitur Solusi</span>
                  <p className="text-sm font-semibold text-slate-900">Riwayat Portofolio Publik</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Manfaat</span>
                  <p className="text-sm text-slate-700">Mahasiswa bisa memakai tautan profil mereka sebagai lampiran saat mencari pekerjaan resmi.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-lg flex flex-col gap-3">
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Masalah</span>
                  <p className="text-sm text-slate-700">Sulit membedakan mahasiswa yang benar-benar serius dan memiliki kemampuan dasar.</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Fitur Solusi</span>
                  <p className="text-sm font-semibold text-slate-900">Verifikasi Identitas Mahasiswa</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Manfaat</span>
                  <p className="text-sm text-slate-700">Meningkatkan kepercayaan UMKM bahwa mahasiswa yang bergabung memiliki identitas yang jelas dan dapat dipertanggungjawabkan.</p>
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* 12. PRODUCT ROADMAP */}
        <FadeIn direction="up">
          <SlideFrame index="11" title="Peta Jalan Produk (Product Roadmap)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Fase 1: Peluncuran MVP (Bulan 1–2)",
                  focus: "Fokus pada fitur utama: Registrasi, Verifikasi Mahasiswa, Pembuatan Proyek, dan Pembayaran Escrow.",
                  metric: "Metrik Sukses: 20 UMKM aktif dan 50 mahasiswa terverifikasi."
                },
                {
                  phase: "Fase 2: Peningkatan Pengalaman (Bulan 3–4)",
                  focus: "Menambahkan fitur ulasan, rating, dan perbaikan tampilan antarmuka.",
                  metric: "Metrik Sukses: Tingkat penyelesaian proyek mencapai 80%."
                },
                {
                  phase: "Fase 3: Pengembangan Lanjutan (Bulan 5–6)",
                  focus: "Eksplorasi fitur rekomendasi talenta dan paket langganan bagi UMKM.",
                  metric: "Metrik Sukses: Pertumbuhan jumlah transaksi bulanan sebesar 30%."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-3 pb-2 border-b border-slate-100">{item.phase}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.focus}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-medium text-slate-800">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 13. SUCCESS METRICS */}
        <FadeIn direction="up">
          <SlideFrame index="12" title="Ukuran Keberhasilan (Success Metrics)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "Tingkat Penyelesaian Proyek",
                  target: "Target: > 85%",
                  reason: "Menunjukkan bahwa sebagian besar proyek yang dimulai berhasil diselesaikan dengan baik."
                },
                {
                  metric: "Tingkat Kepuasan UMKM",
                  target: "Target: > 4.5 / 5.0",
                  reason: "Menandakan bahwa layanan digital yang diberikan mahasiswa memenuhi harapan UMKM."
                },
                {
                  metric: "Jumlah Proyek per Mahasiswa",
                  target: "Target: Rata-rata 2 Proyek",
                  reason: "Menunjukkan bahwa mahasiswa benar-benar memperoleh pengalaman proyek nyata untuk membangun portofolio mereka."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base mb-2">{item.metric}</h4>
                    <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded mb-3">{item.target}</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <strong className="text-slate-900">Fokus:</strong> {item.reason}
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* 14. REFLECTION */}
        <FadeIn direction="up">
          <SlideFrame index="13" title="Refleksi dan Pembelajaran">
            <div className="bg-white border border-slate-200 p-8 rounded-lg space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <strong className="text-slate-900 block mb-2">Tantangan</strong>
                Tantangan terbesar dalam merancang KONEKIN adalah menjaga keseimbangan antara jumlah UMKM dan mahasiswa sebagai platform dua sisi. Produk hanya dapat memberikan nilai apabila kedua kelompok pengguna bertumbuh secara seimbang.
              </div>
              <div>
                <strong className="text-slate-900 block mb-2">Trade-Off</strong>
                Pada tahap awal, saya memilih memprioritaskan fitur yang membangun kepercayaan, seperti verifikasi identitas dan sistem escrow, dibandingkan fitur yang lebih kompleks seperti AI Recommendation atau Video Call.
              </div>
              <div>
                <strong className="text-slate-900 block mb-2">Rencana Perbaikan</strong>
                Apabila KONEKIN dikembangkan lebih lanjut, saya akan mengeksplorasi fitur seperti penyelesaian sengketa, sistem refund, dan dashboard analitik untuk meningkatkan pengalaman pengguna.
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20">
            <Link 
              href="/projects/digital-assessment" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white border border-slate-200 px-5 py-3 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 select-none"
            >
              <ArrowLeft className="w-4 h-4 text-slate-500" />
              <span>Studi Kasus Sebelumnya: <strong className="text-slate-900">Digital Skill Assessment</strong></span>
            </Link>

            <Link 
              href="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white border border-slate-200 px-5 py-3 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 select-none"
            >
              Ke Halaman Utama
            </Link>

            <Link 
              href="/projects/onium" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white border border-slate-200 px-5 py-3 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 select-none"
            >
              <span>Studi Kasus Selanjutnya: <strong className="text-slate-900">Onium</strong></span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  );
}
