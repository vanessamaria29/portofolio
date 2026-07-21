"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/70 backdrop-blur-md border border-slate-200 rounded-xl p-8 md:p-10 shadow-sm my-8 ${className}`}>
    <div className="border-b border-slate-200 pb-4 mb-8">
      <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">{index} / {title.split(' ')[0]}</span>
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mt-2">{title}</h3>
    </div>
    {children}
  </div>
)

export default function KonekinCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50/50 relative">
      
      {/* Latar Belakang Minimalis */}
      <div className="fixed top-0 left-0 w-full h-full bg-slate-50 -z-10 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/30 to-transparent -z-10 pointer-events-none" />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-0">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* =========================================
            01. PROJECT OVERVIEW
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-8 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 shadow-sm relative aspect-video">
                  <Image 
                    src="/images/konekin-cover.png"
                    alt="KONEKIN Cover"
                    fill
                    className="object-cover"
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
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Kajian Produk</h3>
                
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

        {/* =========================================
            02. PROBLEM STATEMENT
            ========================================= */}
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

        {/* =========================================
            03. PRODUCT GOALS
            ========================================= */}
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

        {/* =========================================
            04. USER PERSONA
            ========================================= */}
        <FadeIn direction="up">
          <SlideFrame index="3" title="User Persona">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              
              {/* Persona 1 */}
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 flex flex-col">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Persona 1</span>
                  <h4 className="font-serif text-xl font-semibold text-slate-900 mb-1">Paijo</h4>
                  <span className="text-sm font-medium text-slate-700 block">Pemilik UMKM Bakso</span>
                </div>
                
                <div className="mb-6">
                  <strong className="block text-slate-900 mb-2 text-sm">Profil Singkat</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pemilik Bakso Paijo yang telah menjalankan usaha sejak tahun 2015. Awalnya berjualan menggunakan gerobak di depan Polsek, kemudian berkembang menjadi usaha yang dikenal luas. Saat ini telah memanfaatkan GoFood, GrabFood, ShopeeFood, serta Instagram sebagai media pemasaran dan pernah beberapa kali diliput oleh televisi.
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

              {/* Persona 2 */}
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

        {/* =========================================
            05. PRODUCT SCOPE
            ========================================= */}
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

        {/* =========================================
            06. MARKET VALIDATION
            ========================================= */}
        <FadeIn direction="up">
          <SlideFrame index="5" title="Validasi Pasar & Riset">
            <div className="mb-10">
              <p className="text-sm text-slate-700 leading-relaxed">
                Halaman ini bertujuan menunjukkan proses validasi yang dilakukan sebelum merancang solusi KONEKIN.
              </p>
            </div>

            {/* Statistik Utama */}
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
              {/* Temuan UMKM */}
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

              {/* Temuan Mahasiswa */}
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
                
                {/* Visual Grafik Sederhana (Tailwind) */}
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

            {/* Kesimpulan */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg text-sm text-slate-700 leading-relaxed">
              <span className="block text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">Kesimpulan Validasi</span>
              "Hasil wawancara terhadap 5 UMKM dan survei kepada 35 mahasiswa menunjukkan adanya kebutuhan dari kedua sisi. UMKM membutuhkan layanan digital yang aman, terpercaya, dan terjangkau, sedangkan mahasiswa membutuhkan proyek nyata untuk membangun portofolio profesional. Temuan ini menjadi dasar dalam merancang solusi KONEKIN."
            </div>

          </SlideFrame>
        </FadeIn>

        {/* =========================================
            07. LEAN CANVAS
            ========================================= */}
        <FadeIn direction="up">
          <SlideFrame index="6" title="Lean Canvas">
            <div className="w-full bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <img 
                src="/images/konekin-lean-canvas.png" 
                alt="Lean Canvas KONEKIN" 
                className="w-full h-auto rounded-md object-contain border border-slate-100"
              />

            </div>
          </SlideFrame>
        </FadeIn>

        {/* =========================================
            08. SWOT ANALYSIS
            ========================================= */}
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

        {/* =========================================
            09. USER JOURNEY
            ========================================= */}
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

        {/* =========================================
            10. RICE PRIORITIZATION
            ========================================= */}
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

        {/* =========================================
            11. VALUE-DRIVEN SOLUTIONS
            ========================================= */}
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
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">Fitur Solusi</span>
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
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">Fitur Solusi</span>
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
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">Fitur Solusi</span>
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
                  <p className="text-sm text-slate-700">UMKM sulit memilih talenta yang sesuai dengan anggaran.</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">Fitur Solusi</span>
                  <p className="text-sm font-semibold text-slate-900">Sistem Penawaran (Bidding)</p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider block mb-1">Manfaat</span>
                  <p className="text-sm text-slate-700">Mahasiswa dapat mengajukan harga sesuai ruang lingkup proyek, sehingga UMKM memiliki beberapa alternatif sebelum menentukan pilihan.</p>
                </div>
              </div>

            </div>
          </SlideFrame>
        </FadeIn>

        {/* =========================================
            12. SUCCESS METRICS
            ========================================= */}
        <FadeIn direction="up">
          <SlideFrame index="11" title="Indikator Keberhasilan">
            <div className="bg-slate-900 rounded-lg p-8 mb-8 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">North Star Metric</span>
              <h4 className="text-2xl font-semibold text-white mb-4">Jumlah Proyek yang Berhasil Diselesaikan</h4>
              <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Semakin banyak proyek yang berhasil diselesaikan, semakin besar nilai yang diberikan KONEKIN kepada UMKM maupun mahasiswa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col">
                <span className="font-semibold text-slate-900 block mb-2 text-sm">Tingkat Pencocokan Berhasil</span>
                <p className="text-sm text-slate-600 mb-4 border-b border-slate-100 pb-4 flex-1">Persentase proyek yang berhasil menemukan mahasiswa yang sesuai.</p>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col">
                <span className="font-semibold text-slate-900 block mb-2 text-sm">Tingkat Penyelesaian Proyek</span>
                <p className="text-sm text-slate-600 mb-4 border-b border-slate-100 pb-4 flex-1">Persentase proyek yang selesai hingga pembayaran berhasil dicairkan.</p>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col">
                <span className="font-semibold text-slate-900 block mb-2 text-sm">Tingkat Penggunaan Kembali</span>
                <p className="text-sm text-slate-600 mb-4 border-b border-slate-100 pb-4 flex-1">Persentase UMKM yang kembali menggunakan KONEKIN.</p>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col">
                <span className="font-semibold text-slate-900 block mb-2 text-sm">Rata-rata Waktu Mendapatkan Talenta</span>
                <p className="text-sm text-slate-600 mb-4 border-b border-slate-100 pb-4 flex-1">Rata-rata waktu yang dibutuhkan UMKM hingga memperoleh mahasiswa yang sesuai.</p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* =========================================
            13. PRODUCT ROADMAP
            ========================================= */}
        <FadeIn direction="up">
          <SlideFrame index="12" title="Rencana Pengembangan (Roadmap)">
            <div className="space-y-4">
              {[
                { 
                  phase: "Fase 1: Transaksi Aman (MVP)", 
                  title: "Membangun Kepercayaan", 
                  reason: "Registrasi, verifikasi identitas, pencocokan talenta, escrow, dan chat."
                },
                { 
                  phase: "Fase 2: Pengembangan Portofolio", 
                  title: "Meningkatkan Daya Tarik Profil", 
                  reason: "Portofolio Digital, Sistem Ulasan, dan Badge Talenta Terverifikasi."
                },
                { 
                  phase: "Fase 3: Monetisasi Platform", 
                  title: "Pertumbuhan Bisnis Jangka Panjang", 
                  reason: "Premium UMKM, dashboard analitik, dan fitur pendukung bisnis."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{item.phase}</span>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <div className="md:w-2/3 md:border-l md:border-slate-200 md:pl-6 text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Fokus:</strong> {item.reason}
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* =========================================
            14. REFLECTION
            ========================================= */}
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

      </main>
    </div>
  );
}
