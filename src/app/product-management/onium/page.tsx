"use client"

import React from "react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Zap, Database, 
  MessageSquare, Smartphone, Layers, BarChart3,
  FileText, ArrowDown, ChevronRight, CornerDownRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/40 my-6 ${className}`}>
    <div className="border-b border-slate-200 pb-4 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div>
        <span className="text-xs font-bold text-slate-700 tracking-wider uppercase bg-slate-100 px-3 py-1 rounded border border-slate-200">{index} / {title.split(' ')[0]}</span>
        <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">{title}</h3>
      </div>
    </div>
    {children}
  </div>
)

export function MeetThePartnersTable() {
  return (
    <div className="relative overflow-x-auto rounded-lg border border-slate-200 mt-2">
      <table className="w-full text-left border-collapse text-[10px] md:text-sm text-slate-700 min-w-[800px]">
        <thead>
          {/* BARIS 1: FOTO DOKUMENTASI NYATA (BERADA DI PALING ATAS TABEL) */}
          <tr className="border-b border-slate-200 bg-slate-50/50">
            <th className="p-3 font-semibold text-slate-900 w-1/5">Foto Dokumentasi</th>
            <th className="p-3 w-4/15">
              <div className="w-full h-36 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 relative shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src="/images/onium-evidence-1.jpeg" 
                  alt="Wawancara Ibu Rikky di Los H 153" 
                  className="w-full h-full object-cover"
                />
              </div>
            </th>
            <th className="p-3 w-4/15">
              <div className="w-full h-36 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 relative shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src="/images/onium-evidence-2.jpeg" 
                  alt="Observasi Lapak Bang Jefry di Los H 205" 
                  className="w-full h-full object-cover"
                />
              </div>
            </th>
            <th className="p-3 w-4/15">
              <div className="w-full h-36 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 relative shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src="/images/onium-evidence-3.jpeg" 
                  alt="Diskusi Sistem PO Kak Miran di Los H 147" 
                  className="w-full h-full object-cover"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {/* BARIS 2: NAMA MITRA (BERADA TEPAT DI BAWAH FOTO) */}
          <tr className="bg-slate-100/80 font-semibold text-slate-900">
            <td className="p-3 font-bold">Nama Mitra</td>
            <td className="p-3 text-slate-900 font-bold text-base">Mitra 1: Ibu Rikky Simbolon</td>
            <td className="p-3 text-slate-900 font-bold text-base">Mitra 2: Bang Jefry Munthe</td>
            <td className="p-3 text-slate-900 font-bold text-base">Mitra 3: Kak Miran Simbolon</td>
          </tr>

          {/* BARIS 3 DAN SETERUSNYA: ANALISIS KARAKTERISTIK MITRA */}
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Lokasi Lapak</td>
            <td className="p-3 font-medium text-slate-800">Los H No. 153</td>
            <td className="p-3 font-medium text-slate-800">Los H No. 205 (UD. Jefeery Munthe)</td>
            <td className="p-3 font-medium text-slate-800">Los H No. 147 (BL. Miran Simbolon)</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Profil & Pengalaman</td>
            <td className="p-3 text-slate-600">Usia sekitar 60 tahun, sudah 40 tahun mengelola lapak secara mandiri.</td>
            <td className="p-3 text-slate-600">Usia sekitar 42 tahun, sudah 10 tahun berjualan bawang merah secara mandiri.</td>
            <td className="p-3 text-slate-600">Usia 30 tahun, mengelola usaha warisan keluarga (lapak berdiri 35 tahun).</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Komoditas Utama</td>
            <td className="p-3 text-slate-600">Bawang merah, bawang putih, dan bawang kupas.</td>
            <td className="p-3 text-slate-600">Bawang merah Brebes saja.</td>
            <td className="p-3 text-slate-600">Bawang merah dan bawang putih (utuh dan kupas).</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Skala Volume Harian</td>
            <td className="p-3 text-slate-600">Sekitar 25 karung per hari.</td>
            <td className="p-3 text-slate-600">20 sampai 25 karung per hari.</td>
            <td className="p-3 text-slate-600">Pre-Order skala besar: 7 kwintal sampai 2 ton per hari.</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Estimasi Omzet Harian</td>
            <td className="p-3 text-slate-800 font-medium">Rp15.000.000 sampai Rp50.000.000.</td>
            <td className="p-3 text-slate-800 font-medium">Rp12.000.000 sampai Rp35.000.000.</td>
            <td className="p-3 text-slate-800 font-medium">Rp25.000.000 sampai Rp80.000.000.</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Sistem Bayar ke Bandar</td>
            <td className="p-3 text-slate-600">Tempo atau Kasbon selama 1 minggu.</td>
            <td className="p-3 text-slate-600">Tempo atau Kasbon selama 1 minggu.</td>
            <td className="p-3 text-slate-600">Tempo atau Kasbon selama 1 sampai 2 minggu.</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold bg-slate-50/40">Struktur Operasional</td>
            <td className="p-3 text-slate-600">Sewa lapak Rp7.000.000 per bulan, dibantu 4 karyawan.</td>
            <td className="p-3 text-slate-600">Lapak milik sendiri, dibantu 3 karyawan harian.</td>
            <td className="p-3 text-slate-600">Lapak milik sendiri (warisan), dibantu 16 karyawan harian.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function FieldAnalysisTable() {
  return (
    <div className="relative mt-8 pt-8 border-t border-slate-200">
      {/* Glow Effect */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-300/10 to-blue-300/10 blur-3xl -z-10 -top-10 -right-10" />

      {/* Header Section */}
      <div className="border-b border-slate-200 pb-4 mb-8">
        <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">2.1 / SARINGAN DATA LAPANGAN</span>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Memisahkan Gejala, Keluhan, & Pain Utama</h3>
        <p className="font-sans text-sm text-slate-500 mt-2 leading-relaxed">
          Bagaimana kami menyaring temuan acak di Blok Los H Pasar Induk Kramat Jati untuk menemukan krisis likuiditas harian sesungguhnya yang mengancam kelangsungan modal pedagang.
        </p>
      </div>

      {/* McKinsey High-Density Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200/80">
        <table className="w-full text-left border-collapse text-xs md:text-sm text-slate-700 min-w-[900px]">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-100/80">
              <th className="p-4 font-semibold text-slate-900 w-1/5">Temuan Lapangan</th>
              <th className="p-4 font-semibold text-slate-900 w-1/6">Jenis Temuan</th>
              <th className="p-4 font-semibold text-slate-900 w-1/4">Mengapa Penting / Tidak Penting?</th>
              <th className="p-4 font-semibold text-slate-900 w-3/10">Bukti Konkret Lapangan (Triangulasi Data)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Stok masuk hanya dicek sekilas jumlah karungnya, tidak ditimbang ulang.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                  Keluhan Permukaan
                </span>
              </td>
              <td className="p-4 text-slate-600">
                Mengurangi akurasi, tetapi pedagang menyebut ini sebagai bentuk <strong>kepercayaan sosial</strong> yang sudah lama berjalan ke bandar, bukan masalah operasional yang kritis.
              </td>
              <td className="p-4 text-slate-500 italic">
                "Cuma dicek jumlah karungnya saja sekilas karena sudah percaya sama bandar," lalu surat jalannya langsung dilempar ke laci meja kasir tanpa dicatat. (Ibu Rikky, Los H No. 153)
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Susut berat bawang setelah disimpan 2 sampai 3 hari.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                  Keluhan Permukaan
                </span>
              </td>
              <td className="p-4 text-slate-600">
                Dianggap sebagai <strong>risiko alamiah</strong> komoditas basah. Ketiga narasumber secara konsisten menolak hal ini sebagai kerugian terbesar perusak modal harian mereka.
              </td>
              <td className="p-4 text-slate-500 italic">
                "Menyusutnya memang terasa... tapi itu risiko komoditas yang sudah biasa, Dek. Bukan itu yang bikin sesak dada harian." (Bang Jefry, Los H No. 205)
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Catatan utang di kertas nota sering hilang, basah, atau robek karena air bawang.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-amber-50 text-slate-900 border border-amber-100">
                  Gejala Fisik (Symptom)
                </span>
              </td>
              <td className="p-4 text-slate-600">
                Mengganggu administrasi, namun ini hanya gejala dari media pencatatan fisik yang rapuh, bukan sumber utama kepanikan krisis finansial sore hari.
              </td>
              <td className="p-4 text-slate-500 italic">
                Coretan nota kertas manual berserakan berdebu dan tintanya luntur. "Kalau hilang terpaksa diikhlaskan atau ditanya seingatnya saja ke pembeli." (Ibu Rikky, Los H No. 153)
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="bg-purple-50/20 hover:bg-purple-50/40 transition-colors">
              <td className="p-4 font-bold text-slate-900">Laci kas kosong/menipis di sore hari padahal laku keras, menyulitkan tebusan modal esok hari.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                   PAIN UTAMA
                </span>
              </td>
              <td className="p-4 text-slate-700 font-medium">
                Momen krisis nyata yang langsung mengancam kelangsungan hidup modal harian. Pedagang terpaksa memohon kelonggaran tempo baru ke bandar, mengikis kredibilitas mereka.
              </td>
              <td className="p-4 text-slate-900 italic">
                Pukul 15.30-16.15 WIB wajah pedagang tegang saat bandar datang menagih bulanan. "Pas buka laci cash, uang tunai tipis sekali. Isinya kertas bon pelanggan semua menumpuk." (Ibu Rikky)
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="bg-purple-50/20 hover:bg-purple-50/40 transition-colors">
              <td className="p-4 font-bold text-slate-900">Pola laci kosong muncul identik pada ketiga narasumber lintas skala usaha.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-purple-100 text-slate-900 border border-purple-200">
                  PAIN UTAMA (Triangulasi)
                </span>
              </td>
              <td className="p-4 text-slate-700 font-medium">
                Membuktikan masalah ini bukan kasus individual pedagang kecil saja, melainkan <strong>pola sistemik/struktural</strong> di seluruh ekosistem transaksi pasar induk.
              </td>
              <td className="p-4 text-slate-900 italic">
                Lapak katering besar Kak Miran (omzet Rp80jt/hari, 16 karyawan) tetap kena krisis ini: "Sore-sore laci kas fisik kami sering kosong... Terpaksa mengemis kasbon tempo ke bandar."
              </td>
            </tr>

            {/* Row 6 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Sistem bon berjalan atas asas kekeluargaan & kepercayaan, bukan kontrak tertulis formal.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-blue-100 text-slate-900 border border-blue-200">
                  AKAR MASALAH (Root Cause)
                </span>
              </td>
              <td className="p-4 text-slate-600">
                Sistem bon ini bukan pilihan, melainkan <strong>keharusan kompetitif</strong> untuk menjaga loyalitas pelanggan agar tidak kabur ke lapak sebelah. Kontrak formal tertulis ditolak keras.
              </td>
              <td className="p-4 text-slate-500 italic">
                "Kalau katering lama kita sodorkan surat perjanjian hukum, mereka tersinggung dan menganggap kita curiga. Relasi bisa rusak dan bisnis malah hilang dibeli kompetitor." (Kak Miran)
              </td>
            </tr>

            {/* Row 7 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-4 font-bold text-slate-800">Semua uang modal, piutang, dan keuntungan bercampur baur di satu laci tanpa rekapan total.</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-blue-100 text-slate-900 border border-blue-200">
                  AKAR MASALAH (Lapis 2)
                </span>
              </td>
              <td className="p-4 text-slate-600">
                Menyebabkan pedagang buta terhadap total piutang aktif yang beredar harian, sehingga keputusan memberikan bon dilakukan tanpa tahu apakah sudah melewati batas aman kas.
              </td>
              <td className="p-4 text-slate-500 italic">
                "Mana ada waktu Nak. Ibu sudah terlanjur capek fisik layanin orang dari subuh... Gak pernah direkap total keseluruhannya ada berapa puluh juta tertahan di luar." (Ibu Rikky)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function HypothesisPivot() {
  return (
    <div className="relative mt-8 pt-8 border-t border-slate-200">
      {/* Glow Effect */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-rose-300/10 to-purple-300/10 blur-3xl -z-10 -bottom-10 -left-10" />

      {/* Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">2.2 / THE PRODUCT PIVOT</span>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Mematahkan Asumsi: Fisik Bawang vs Kepercayaan Sosial</h3>
      </div>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* ASUMSI AWAL (SALAH) */}
        <div className="border border-rose-100 bg-rose-50/20 p-5 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2"> ASUMSI AWAL KAMI (HIPOTESIS)</span>
            <h4 className="font-serif text-lg font-bold text-slate-800 mb-2">Kerugian Terbesar Disebabkan Oleh Susut Fisik Komoditas</h4>
            <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
              Kami menduga margin keuntungan pedagang hancur karena penyusutan kadar air bawang basah (20% hingga 40%) selama penyimpanan di pasar induk harian.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-rose-100 italic text-[10px] md:text-xs text-slate-900 font-medium">
            "Menyusut memang ada, namanya komoditas basah... Tapi itu mah risiko biasa, tinggal diakali jual murah ke warteg. Gak bikin pusing." — Ibu Rikky
          </div>
        </div>

        {/* KENYATAAN RIIL (BENAR) */}
        <div className="border border-purple-100 bg-purple-50/20 p-5 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2"> KENYATAAN LAPANGAN (DATA RIIL)</span>
            <h4 className="font-serif text-lg font-bold text-slate-800 mb-2">Kerugian Terbesar Terjadi Akibat Kebutaan Likuiditas Kas</h4>
            <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
              Penyusutan riil di lapak ternyata sangat kecil (1.5% sampai 8%). Krisis sesungguhnya adalah pedagang buta terhadap batas aman kas tunai harian mereka akibat modal tersangkut di tumpukan bon kertas pelanggan.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-100 italic text-[10px] md:text-xs text-slate-900 font-medium font-semibold">
            "Masalah terbesar bukan gagal menjaga fisik barang, melainkan ketidakberdayaan mengukur batas aman dari akumulasi bon kepercayaan sosial harian." — Kesimpulan Riset
          </div>
        </div>

      </div>
    </div>
  );
}

export function ShadowingDiary() {
  const logActivities = [
    {
      time: "10:30 – 12:00 WIB (Siang)",
      title: "Siklus Masuk & Bongkar Muat Subuh",
      desc: "Lapak sangat ramai melayani pembeli eceran dan katering. Surat jalan dari sopir truk bandar diletakkan berserakan di laci bercampur debu kulit bawang tanpa diverifikasi ulang.",
      observation: "Pedagang terlihat sangat kelelahan, mengantuk karena kurang tidur sejak pukul 02.00 subuh. Mereka sama sekali tidak sempat membuka handphone atau memegang buku catatan."
    },
    {
      time: "15:00 – 16:30 WIB (Sore)",
      title: "Titik Krisis Likuiditas Sore",
      desc: "Lapak mulai sepi, sisa bawang menipis. Bandar pengirim datang membawa nota tagihan belanja mingguan, sementara pemilik lapak harus membayar upah tunai harian karyawan kupas.",
      observation: "Wajah pedagang berubah tegang saat membuka laci kasir fisik yang ternyata isinya didominasi kertas bon kumuh. Muncul kepanikan finansial mendadak karena sisa kas tunai sangat tipis."
    }
  ];

  return (
    <div className="relative mt-8 pt-8 border-t border-slate-200">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">2.3 / SHADOWING DIARY</span>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Satu Hari di Lapak Los H: Kronologi Krisis Likuiditas</h3>
        <p className="font-sans text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
          Log observasi langsung mengamati siklus kerja fisik pedagang yang menguras kapasitas mental mereka untuk melakukan pembukuan.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-6">
        {logActivities.map((log, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-l-2 border-purple-200 pl-4 md:pl-6 ml-2">
            <div className="md:col-span-3">
              <span className="text-xs font-bold text-slate-900 bg-purple-50 px-2 py-1 rounded-md border border-purple-100 block w-max">
                {log.time}
              </span>
            </div>
            <div className="md:col-span-9">
              <h4 className="font-serif text-sm md:text-base font-bold text-slate-800">{log.title}</h4>
              <p className="font-sans text-xs md:text-sm text-slate-600 mt-1">{log.desc}</p>
              <div className="mt-2 text-[10px] md:text-xs text-slate-500 bg-slate-50 border border-slate-100 p-3 rounded-lg italic">
                <span className="font-semibold text-slate-700 not-italic block mb-1">Catatan Perilaku & Kondisi Nyata:</span>
                "{log.observation}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ValuePropositionCanvas() {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm my-8 relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 mb-6">
        <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">3.1 / STRATEGI VALUE PROPOSITION</span>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Value Proposition Canvas (VPC)</h3>
        <p className="font-sans text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
          Menghubungkan profil sosiologis pedagang pasar induk secara jujur dengan desain kapabilitas fungsional aplikasi ONIUM.
        </p>
      </div>

      {/* VPC Grid 2-Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* CUSTOMER PROFILE */}
        <div className="border border-slate-200 bg-slate-50/30 p-5 rounded-xl space-y-4">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wider">
             Customer Profile (Sisi Manusia)
          </span>
          
          <div className="space-y-3 text-xs">
            <div>
              <h5 className="font-bold text-slate-800 uppercase text-[10px] md:text-xs tracking-wider mb-1">Customer Jobs</h5>
              <p className="text-slate-600 leading-relaxed">
                Mengamankan modal kas harian di sore hari untuk tebusan stok esok subuh harian tanpa merusak asas kekeluargaan dan kepercayaan dagang jangka panjang.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 uppercase text-[10px] md:text-xs tracking-wider mb-1">Pains</h5>
              <p className="text-slate-600 leading-relaxed">
                Kepanikan saat laci kas kosong di sore hari meskipun penjualan terlihat ramai, rasa malu harus meminta tambahan tempo kepada bandar, serta kekhawatiran kehilangan pelanggan jika menagih piutang terlalu agresif.
                </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 uppercase text-[10px] md:text-xs tracking-wider mb-1">Gains</h5>
              <p className="text-slate-600 leading-relaxed">
              Tetap dipercaya pelanggan, mengetahui batas aman kas secara instan, dan memahami kondisi keuntungan usaha tanpa perlu rekap manual.
              </p>
            </div>
          </div>
        </div>

        {/* VALUE MAP */}
        <div className="border border-purple-100 bg-purple-50/10 p-5 rounded-xl space-y-4">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-purple-100 text-slate-900 border border-purple-200 uppercase tracking-wider">
             Value Map (Sisi Solusi)
          </span>

          <div className="space-y-3 text-xs">
            <div>
              <h5 className="font-bold text-slate-900 uppercase text-[10px] md:text-xs tracking-wider mb-1">Products & Services</h5>
              <p className="text-slate-700 leading-relaxed font-medium">
    Asisten finansial berbasis chatbot yang membantu pedagang mencatat kas, piutang, dan kewajiban pembayaran dalam satu alur percakapan sederhana.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 uppercase text-[10px] md:text-xs tracking-wider mb-1">Pain Relievers</h5>
              <p className="text-slate-700 leading-relaxed">
               Mencatat transaksi secara sederhana melalui percakapan chatbot sekaligus menampilkan posisi kas dan piutang secara real-time tanpa perlu rekap manual.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 uppercase text-[10px] md:text-xs tracking-wider mb-1">Gain Creators</h5>
              <p className="text-slate-700 leading-relaxed">
               Memberikan peringatan dini ketika akumulasi piutang mulai mendekati batas aman kas sehingga pedagang dapat mengambil keputusan lebih cepat tanpa mengganggu hubungan dengan pelanggan.
                </p>
            </div>
          </div>
        </div>

      </div>

      {/* ELEVATOR PITCH STATEMENT */}
      <div className="mt-6 border border-purple-200 bg-purple-50/30 p-4 rounded-xl">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Onium Value Proposition Statement</h4>
        <p className="font-serif text-xs md:text-sm text-slate-900 italic leading-relaxed">
          "Onium membantu pedagang grosir bawang yang menjalankan usahanya berdasarkan asas kekeluargaan untuk tetap bisa memberikan bon kepada pelanggan dengan lebih percaya diri, melalui sinyal dini otomatis saat piutang mendekati batas aman kas tunai mereka langsung di dalam Chatbot harian."
        </p>
      </div>
    </div>
  );
}

export default function OniumCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-[600px] h-[600px] bg-purple-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-300/70 rounded-full blur-[90px] mix-blend-multiply opacity-90 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-pink-300/60 rounded-full blur-[100px] mix-blend-multiply opacity-80 animate-blob animation-delay-4000" />
      </div>

      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6 relative z-0">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* =========================================
            01. EXECUTIVE SUMMARY (HERO & DASHBOARD)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Kolom Kiri */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Case Study</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
                  ONIUM: Cash Visibility for Traditional Merchants
                </h1>
                <p className="font-sans text-base text-slate-600 leading-relaxed mb-6">
                  PWA Chatbot Berbasis Voice-to-Text untuk Solusi Pencatatan Keuangan Pedagang Bawang Grosir di Pasar Induk Kramat Jati.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-900">Role:</span> Product Manager
                  <span className="text-slate-300">|</span>
                  <span className="font-bold text-slate-900">Timeline:</span> 4 Bulan
                  <span className="text-slate-300">|</span>
                  <span className="font-bold text-slate-900">Frameworks:</span> 5 Whys dan MoSCoW
                </div>
              </div>

              {/* Kolom Kanan (Project Dashboard) */}
              <div className="lg:col-span-5 bg-white/50 backdrop-blur-sm border border-slate-100 rounded-lg p-6">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Project Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Target User</span>
                    <span className="font-bold text-slate-800">3 Mitra UMKM (Pasar Induk)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Daily Trans. Vol</span>
                    <span className="font-bold text-slate-800">7 Kuintal - 2 Ton</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Est. Piutang</span>
                    <span className="font-bold text-slate-800">Rp50–150 Juta</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Key Insight</span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      "Skala transaksi tinggi tidak mencerminkan ketersediaan kas riil."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* =========================================
            1. STRATEGIC ASSESSMENT (CONTEXT)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">1 / LATAR BELAKANG</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Strategic Assessment & Business Context</h3>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
              <p><strong>• Skala Transaksi Harian:</strong> Pembelian stok mencapai puluhan juta rupiah per hari.</p>
              <p><strong>• Dominasi Bon (Tempo):</strong> Sebagian besar transaksi pelanggan dilakukan secara tempo, menciptakan ilusi kas.</p>
              <p><strong>• Piutang Tidak Terpantau:</strong> Piutang pelanggan bernilai masif namun sulit dilacak karena pencatatan tersebar.</p>
              <p><strong>• Blind Spot Keuangan:</strong> Kondisi kas riil yang bisa diputar kembali sangat sulit diketahui setiap saat.</p>
              <p><strong>• Keputusan Subjektif:</strong> Restocking barang didasarkan pada intuisi dan ingatan, bukan data faktual.</p>
            </div>
          </div>
        </FadeIn>

        {/* =========================================
            2. RISET LAPANGAN & MARKET MATRIX
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">2 / RISET LAPANGAN</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Matriks Analisis Karakteristik Mitra</h3>
            </div>

            <MeetThePartnersTable />

            <FieldAnalysisTable />
            <HypothesisPivot />
            <ShadowingDiary />
          </div>
        </FadeIn>

        {/* =========================================
            3. DIAGNOSIS SLIDE (FINDINGS, REFRAMING, 5 WHYS)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-slate-900 tracking-wider uppercase">3 / DIAGNOSIS</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Problem Discovery & Root Cause Analysis</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              
              {/* Kolom Kiri: Findings & Reframing */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-8">
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-2">Key Findings</h4>
                  <ul className="flex flex-col gap-2 text-[13px] text-slate-600 leading-relaxed">
                    <li><strong className="text-slate-800">• False Sense of Security:</strong> Transaksi tinggi dianggap aman, padahal tertahan sebagai piutang.</li>
                    <li><strong className="text-slate-800">• Fragmented Records:</strong> Catatan tersebar di berbagai buku.</li>
                    <li><strong className="text-slate-800">• Intuition-Based:</strong> Pengadaan stok bergantung ingatan.</li>
                    <li><strong className="text-slate-800">• Low Friction Needed:</strong> Ingin pencatatan sesimpel kirim pesan di Chatbot.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-100 pb-2">Problem Reframing</h4>
                  <div className="bg-white/50 p-4 rounded-lg border border-slate-200 text-sm">
                    <p className="line-through text-slate-400 mb-2">Asumsi: Kurangnya sistem Inventory Management.</p>
                    <p className="font-bold text-slate-900">Realitas: Lemahnya Cash Visibility. Fokus harus beralih ke manajemen arus kas berbasis percakapan (Chat-based Cash Flow).</p>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Horizontal 5 Whys (Original Data) */}
              <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-center pt-8 lg:pt-0">
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center border-b border-slate-100 pb-2">5 Whys Causal Chain</h4>
                
                <div className="flex flex-col gap-3">
                  {/* Gejala Masalah */}
                  <div className="flex items-center gap-3">
                    <div className="w-[85px] text-right text-[10px] font-bold uppercase text-slate-400 leading-tight">Gejala Masalah</div>
                    <div className="bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-md flex-1">
                      Pedagang grosir sering kali mengalami kepanikan finansial akibat laci kas kosong di sore hari, padahal sepanjang hari lapak terasa laku keras.
                    </div>
                  </div>
                  
                  {/* Whys - Horizontal Chain */}
                  {[
                    "Sebagian besar penjualan harian masih berupa piutang bon yang belum berubah menjadi kas tunai.",
                    "Pedagang tidak pernah mengetahui total piutang yang masih beredar sehingga hanya mengandalkan isi laci kas dan intuisi.",
                    "Kas, piutang, utang, dan modal dicatat secara terpisah sehingga kondisi keuangan tidak pernah terlihat secara utuh.",
                    "Rekapitulasi manual terlalu memakan waktu dan tenaga di tengah operasional pasar."
                  ].map((why, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-[85px] text-right text-[10px] font-bold uppercase text-slate-400">Why {idx+1}</div>
                      <CornerDownRight className="w-4 h-4 text-slate-300 shrink-0" />
                      <div className="bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-600 text-[13px] py-2 px-3 rounded-md flex-1 shadow-sm">
                        {why}
                      </div>
                    </div>
                  ))}

                  {/* Root Cause (Why 5) */}
                  <div className="flex items-center gap-3 mt-2 pt-2 border-t border-slate-100">
                    <div className="w-[85px] text-right text-[10px] font-bold uppercase text-slate-900 leading-tight">Akar Masalah (Why 5)</div>
                    <CornerDownRight className="w-5 h-5 text-slate-900 shrink-0" />
                    <div className="bg-purple-50 border border-purple-200 text-slate-900 text-xs font-bold py-2.5 px-4 rounded-md flex-1 shadow-sm uppercase tracking-wide leading-relaxed">
                      Pedagang tidak memiliki cara yang cepat dan sederhana untuk mengetahui kapan total piutang telah melewati batas aman kas operasional.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <ValuePropositionCanvas />
        </FadeIn>

        {/* =========================================
            4. PRODUCT SCOPING (MoSCoW MATRIX)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm mb-12">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-slate-900 tracking-wider uppercase">4 / PRIORITISASI FITUR</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">MoSCoW Prioritization Matrix</h3>
              <div className="mt-4 p-4 border border-blue-100 bg-blue-50/50 rounded-lg">
                <h4 className="text-xs font-bold text-slate-900 mb-1">Why MoSCoW?</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  Berdasarkan hasil wawancara, saya memprioritaskan fitur menggunakan framework MoSCoW agar solusi tetap fokus pada pain utama pengguna dan tidak mengalami feature creep.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MUST HAVE */}
              <div className="border border-red-100 bg-red-50/30 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-red-700 text-sm mb-3"> MUST HAVE (Fitur Utama Wajib)</h4>
                <ul className="list-disc list-inside text-xs space-y-3 text-slate-700 font-medium">
                  <li>Cash visibility</li>
                  <li>Piutang tracking</li>
                  <li>Reminder jatuh tempo</li>
                </ul>
              </div>

              {/* SHOULD HAVE */}
              <div className="border border-blue-100 bg-blue-50/30 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm mb-3"> SHOULD HAVE (Sangat Penting)</h4>
                <ul className="list-disc list-inside text-xs space-y-3 text-slate-700 font-medium">
                  <li>Dashboard tren transaksi</li>
                </ul>
              </div>

              {/* COULD HAVE */}
              <div className="border border-amber-100 bg-amber-50/30 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm mb-3"> COULD HAVE (Fitur Pendukung)</h4>
                <ul className="list-disc list-inside text-xs space-y-3 text-slate-700 font-medium">
                  <li>Voice input</li>
                </ul>
              </div>

              {/* WON'T HAVE */}
              <div className="border border-slate-200 bg-slate-50/50 p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-600 text-sm mb-3"> WON'T HAVE (v1)</h4>
                <ul className="list-disc list-inside text-xs space-y-3 text-slate-600 font-medium">
                  <li>AI forecasting</li>
                  <li>Multi-user role</li>
                  <li>Inventory prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =========================================
            05. SOLUTION ARCHITECTURE (MAPPING & MOCKUP)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden mb-12">
            {/* 1. Header Section */}
            <div className="border-b border-slate-200 pb-4 mb-8">
              <span className="text-[10px] md:text-xs font-semibold text-slate-900 tracking-wider uppercase">5 / SOLUSI & ARSITEKTUR</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Solution Architecture & Interactive Mockup</h3>
            </div>

            {/* PM LENS DEFINITION */}
            <div className="mb-8 p-6 border border-purple-100 bg-purple-50/50 rounded-xl shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Definisi Produk:</h4>
              <p className="text-sm md:text-base text-slate-800 font-bold mb-6">PWA (Progressive Web App) dengan integrasi Chatbot.</p>
              
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-purple-200 pb-2">Alasan Teknis & Desain (PM Lens):</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-900 mt-0.5"></span>
                  <div className="text-xs md:text-sm text-slate-700">
                    <strong className="text-slate-900">Zero Learning Curve:</strong> Menggunakan kenyamanan antarmuka percakapan (conversational interface / chatbot) untuk meminimalkan friksi kognitif bagi pedagang yang sudah sangat kelelahan fisik.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-900 mt-0.5"></span>
                  <div className="text-xs md:text-sm text-slate-700">
                    <strong className="text-slate-900">Standalone PWA:</strong> Bertindak sebagai aplikasi web mandiri yang bisa diakses tanpa instalasi langsung di layar HP pedagang, tanpa bergantung pada restriksi, aturan kaku, atau biaya mahal dari API WhatsApp Business resmi.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-900 mt-0.5"></span>
                  <div className="text-xs md:text-sm text-slate-700">
                    <strong className="text-slate-900">Offline-First Capability:</strong> Memastikan sistem pencatatan tetap dapat mendata transaksi secara instan di dalam pasar induk yang bising meskipun koneksi internet sedang tidak stabil atau terputus harian menggunakan IndexedDB dan Service Worker.
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Container Konten Utama */}
            <div className="flex flex-col space-y-8">
              
              {/* BARIS 1 (FULL WIDTH): PRODUCT ARCHITECTURE OVERVIEW (Gambar Horizontal) */}
              <div className="w-full">
                <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Product Architecture Overview</h4>
                <div className="bg-white/40 backdrop-blur-md border border-slate-200/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <Image 
                    src="/images/onium-architecture.png" 
                    alt="Product Architecture Overview - Onium"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg object-contain"
                    priority
                  />
                </div>
              </div>

              {/* BARIS 2 (GRID 12-KOLOM): DUA ASSET PORTRAIT BERDAMPINGAN */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* KOLOM KIRI (7/12): USER & SYSTEM WORKFLOW MAPPING (Gambar Vertikal) */}
                <div className="lg:col-span-7 flex flex-col h-full">
                  <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">User & System Workflow Mapping</h4>
                  <div className="bg-white/40 backdrop-blur-md border border-slate-200/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-grow flex flex-col justify-center">
                    <Image 
                      src="/images/onium-workflow.png" 
                      alt="User & System Workflow Mapping - Onium"
                      width={800}
                      height={1200}
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </div>
                </div>

                {/* KOLOM KANAN (5/12): MOCKUP (Gambar Vertikal) */}
                <div className="lg:col-span-5 flex flex-col h-full relative">
                  <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Mockup</h4>
                  <div className="bg-white/40 backdrop-blur-md border border-slate-200/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-grow flex items-center justify-center relative w-full overflow-hidden">
                    
                    {/* Glow effect di belakang HP */}
                    <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-purple-200/20 to-blue-200/20 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
                    
                    {/* Mockup HP Interaktif (Dilengkapi Drag & Floating Animation) */}
                    <motion.div 
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.2}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="max-w-[280px] md:max-w-[360px] w-full filter drop-shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <Image 
                        src="/images/onium-ui.png" 
                        alt="Onium Chat Mockup" 
                        width={360}
                        height={720}
                        className="w-full h-auto object-contain rounded-xl"
                        priority
                      />
                    </motion.div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </FadeIn>

        {/* =========================================
            6. RETROSPECTIVE (LESSONS LEARNED)
            ========================================= */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-slate-900 tracking-wider uppercase">6 / PENUTUP</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">Lessons Learned (Retrospective)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/50 border border-slate-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <span className="text-lg font-black text-slate-300 block mb-2">1</span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>Validasi vs Asumsi:</strong> Validasi lapangan lebih penting daripada asumsi awal. Hipotesis di atas kertas sering runtuh saat berhadapan dengan operasional lapangan yang *messy*.
                </p>
              </div>

              <div className="bg-white/50 border border-slate-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <span className="text-lg font-black text-slate-300 block mb-2">2</span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>Akar Masalah Bisnis:</strong> Keluhan pengguna bukan selalu akar masalah. Mereka mengeluh stok, padahal masalah aslinya visibilitas kas.
                </p>
              </div>

              <div className="bg-white/50 border border-slate-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <span className="text-lg font-black text-slate-300 block mb-2">3</span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>Behavior Change:</strong> Mengubah kebiasaan B2B tradisional sangat sulit. Solusi terbaik adalah menyusup ke dalam workflow yang sudah ada (contoh: Chatbot percakapan yang familiar).
                </p>
              </div>

              <div className="bg-white/50 border border-slate-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <span className="text-lg font-black text-slate-300 block mb-2">4</span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  <strong>Less is More:</strong> Memotong fitur yang "keren" demi fitur yang "berfungsi" sangat penting agar MVP dapat langsung divalidasi dengan cepat.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/product-management/konekin" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Studi Kasus Sebelumnya: <strong className="text-slate-900">KONEKIN</strong></span>
            </Link>

            <Link 
              href="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50"
            >
              Ke Halaman Utama
            </Link>

            <Link 
              href="/product-management/digital-skill-assessment" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-full shadow-xs hover:border-slate-300 hover:bg-slate-50"
            >
              <span>Studi Kasus Selanjutnya: <strong className="text-slate-900">Digital Skill Assessment</strong></span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}
