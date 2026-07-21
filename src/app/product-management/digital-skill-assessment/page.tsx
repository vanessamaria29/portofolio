"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, ArrowRight, User, Building2, Users, GraduationCap, CheckCircle2, Target, AlertCircle, ListTodo, ClipboardCheck } from "lucide-react"
import Link from "next/link"

const SlideFrame = ({ children, title, index, className = "" }: { children: React.ReactNode, title: string, index: string, className?: string }) => (
  <div className={`bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm my-6 ${className}`}>
    <div className="border-b border-slate-200 pb-4 mb-6">
      <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">{index} / {title.split(' ')[0]}</span>
      <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">{title}</h3>
    </div>
    {children}
  </div>
)

export default function DigitalAssessmentCaseStudy() {
  return (
    <div className="min-h-screen bg-surface-primary selection:bg-slate-200 selection:text-slate-900 relative">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000" />
      </div>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 relative z-0">
        
        <FadeIn>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </FadeIn>

        {/* HERO SECTION */}
        <FadeIn direction="up">
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm mb-12 relative overflow-hidden">
            <div className="flex flex-col gap-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                Case Study
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Digital Skill Assessment Platform
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Platform digital yang membantu siswa SMA memetakan kompetensi digital dan memberikan rekomendasi program studi menggunakan metode Rule-Based Weighted Scoring.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200 mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Peran</span>
                  <span className="font-medium text-slate-900">Product Manager, Full Stack Dev</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Durasi</span>
                  <span className="font-medium text-slate-900">3 Bulan</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-4">Frameworks</span>
                <div className="flex flex-wrap gap-2">
                  {["Requirement Gathering", "Stakeholder Analysis", "User Journey Mapping", "MoSCoW Prioritization", "Rule-Based Weighted Scoring", "Product Roadmap", "Success Metrics"].map((framework) => (
                    <span key={framework} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* SECTION 1: Latar Belakang */}
        <FadeIn delay={0.1}>
          <SlideFrame index="01" title="Latar Belakang">
            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Platform ini dikembangkan berdasarkan observasi terhadap tantangan yang dihadapi oleh berbagai pihak dalam ekosistem pendidikan, khususnya pada tahap transisi dari sekolah menengah ke perguruan tinggi. Terdapat kesenjangan antara pemahaman siswa mengenai potensi diri dengan informasi akademik yang tersedia.
              </p>
              <ul className="mt-4 space-y-2 list-none pl-0">
                <li className="flex items-start gap-3"><span className="text-slate-400 mt-0.5">•</span>Siswa SMA seringkali belum mengetahui secara pasti kemampuan digital yang mereka miliki.</li>
                <li className="flex items-start gap-3"><span className="text-slate-400 mt-0.5">•</span>Mereka mengalami kesulitan dalam menentukan pilihan jurusan perkuliahan yang sesuai dengan potensi tersebut.</li>
                <li className="flex items-start gap-3"><span className="text-slate-400 mt-0.5">•</span>Di sisi institusi, UKRIDA belum memiliki media assessment digital yang interaktif dan mudah diakses.</li>
                <li className="flex items-start gap-3"><span className="text-slate-400 mt-0.5">•</span>Tim Admission kesulitan memperoleh data analitik yang mendalam mengenai profil dan minat calon mahasiswa.</li>
                <li className="flex items-start gap-3"><span className="text-slate-400 mt-0.5">•</span>Strategi promosi kampus yang ada saat ini masih menggunakan pendekatan konvensional dan belum sepenuhnya memanfaatkan data.</li>
              </ul>
              <p className="mt-6 font-medium text-slate-900">
                Digitalisasi proses admission melalui assessment ini merupakan peluang strategis untuk menjaring prospek potensial secara data-driven, sekaligus memberikan nilai tambah yang nyata bagi calon mahasiswa sebelum mereka memutuskan mendaftar.
              </p>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 2: Tujuan Produk */}
        <FadeIn delay={0.2}>
          <SlideFrame index="02" title="Tujuan Produk">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-4"><User className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-2">Untuk Siswa</h4>
                <p className="text-sm text-slate-600">Memberikan visibilitas terhadap potensi digital individu dan memberikan rekomendasi program studi yang presisi dan relevan dengan kemampuan mereka.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-4"><Building2 className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-2">Untuk UKRIDA</h4>
                <p className="text-sm text-slate-600">Meningkatkan brand awareness sebagai kampus teknologi yang inovatif serta memodernisasi saluran interaksi dengan calon mahasiswa baru.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-4"><Users className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-2">Untuk Tim Admission</h4>
                <p className="text-sm text-slate-600">Membangun database prospek (leads) yang terstruktur dan berkualitas untuk strategi pemasaran dan akuisisi mahasiswa baru yang lebih terukur.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-4"><GraduationCap className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-2">Untuk Mahasiswa SI</h4>
                <p className="text-sm text-slate-600">Menyediakan studi kasus pengembangan perangkat lunak secara nyata dan end-to-end yang dapat diimplementasikan di tingkat perguruan tinggi.</p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 3: Stakeholder Analysis */}
        <FadeIn delay={0.3}>
          <SlideFrame index="03" title="Stakeholder Analysis">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: "Siswa SMA", goal: "Mendapatkan arahan karir dan jurusan yang tepat.", pain: "Kebingungan memilih prodi, tidak tahu bakat digital diri.", needs: "Tes yang cepat, hasil instan, dan penjelasan yang mudah dimengerti." },
                { title: "Tim Admission", goal: "Mendapatkan prospek pendaftaran berkualitas.", pain: "Pemasaran door-to-door yang memakan waktu dan kurang tepat sasaran.", needs: "Dashboard analitik untuk mengelompokkan calon mahasiswa berdasarkan minat." },
                { title: "Institusi (UKRIDA)", goal: "Peningkatan citra institusi dan jumlah mahasiswa.", pain: "Kalah saing dengan metode rekrutmen kampus lain yang lebih modern.", needs: "Platform yang dapat diluncurkan dengan cepat dan mencerminkan kemajuan teknologi." },
                { title: "Mahasiswa Developer", goal: "Menyelesaikan proyek nyata dengan impact tinggi.", pain: "Terbatasnya sumber daya dan waktu pengembangan yang ketat.", needs: "Kebutuhan sistem (requirements) yang jelas, prioritas terstruktur, dan ruang eksplorasi teknologi." },
              ].map((stakeholder, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col gap-4">
                  <h4 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">{stakeholder.title}</h4>
                  <div className="flex flex-col gap-4 pt-1">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Goal</span>
                      <p className="text-sm text-slate-700">{stakeholder.goal}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Pain Point</span>
                      <p className="text-sm text-slate-700">{stakeholder.pain}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Needs</span>
                      <p className="text-sm text-slate-700">{stakeholder.needs}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 4: MoSCoW Prioritization */}
        <FadeIn delay={0.4}>
          <SlideFrame index="04" title="Requirement Prioritization (MoSCoW)">
            <p className="text-sm text-slate-600 mb-6">Mengingat produk ini merupakan pengembangan platform institusi, framework MoSCoW digunakan untuk menentukan ruang lingkup prioritas rilis agar nilai utama dapat diserahkan lebih awal.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-900" /> Must Have
                </h4>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Registrasi</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Assessment</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Scoring</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Dashboard</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Recommendation</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600" /> Should Have
                </h4>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Export PDF</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Dashboard Analytics</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> Email Notification</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400" /> Could Have
                </h4>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Badge</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Gamification</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-slate-50 shadow-sm opacity-80">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200 border border-slate-300" /> Won't Have 
                  <span className="font-normal text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">(versi 1)</span>
                </h4>
                <ul className="text-sm text-slate-500 space-y-3 line-through">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-200 shrink-0 mt-0.5" /> Mobile App</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-200 shrink-0 mt-0.5" /> Integrasi PMB</li>
                </ul>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 5: Modul Sistem */}
        <FadeIn delay={0.5}>
          <SlideFrame index="05" title="Modul Sistem">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Authentication", aim: "Mengelola akses kredensial pengguna secara aman.", val: "Mencegah duplikasi akun dan menjaga privasi data." },
                { name: "User Management", aim: "Mengelola profil siswa dan staf admin.", val: "Mempermudah klasifikasi prospek." },
                { name: "Assessment Engine", aim: "Menjalankan logika pertanyaan dan perhitungan.", val: "Core product yang mengukur keterampilan digital." },
                { name: "Scoring System", aim: "Menganalisis hasil tes untuk setiap kategori.", val: "Memberikan bobot ukur yang presisi dan objektif." },
                { name: "Recommendation Logic", aim: "Memetakan skor ke prodi yang relevan.", val: "Membantu siswa memilih jurusan yang tepat." },
                { name: "Result Generation", aim: "Menyajikan hasil akhir dalam format ringkas.", val: "Memberikan wawasan langsung kepada pengguna." },
                { name: "PDF Export", aim: "Menghasilkan laporan yang dapat diunduh.", val: "Nilai tambah bagi siswa sebagai portofolio pribadi." },
                { name: "Lead Capture", aim: "Menyimpan data pendaftar sebelum tes.", val: "Sumber utama akuisisi bagi tim admission." },
                { name: "Admin Dashboard", aim: "Visualisasi data keseluruhan sistem.", val: "Pusat komando pemantauan operasional." },
                { name: "Analytics & Reporting", aim: "Mengolah agregat data demografi & minat.", val: "Insight untuk penentuan strategi promosi kampus." },
                { name: "Email Notification", aim: "Mengirimkan hasil & info otomatis.", val: "Meningkatkan interaksi dan follow-up prospek." },
                { name: "Data Export", aim: "Mengunduh rekap data prospek ke format spreadsheet.", val: "Kemudahan integrasi dengan aktivitas telesales." }
              ].map((modul, idx) => (
                <div key={idx} className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-3">{modul.name}</h4>
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Tujuan</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{modul.aim}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Nilai Bisnis</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{modul.val}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 6: User Journey */}
        <FadeIn delay={0.6}>
          <SlideFrame index="06" title="User Journey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                  <User className="w-5 h-5 text-slate-700" />
                  Journey Siswa
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-slate-200 rounded-full"></div>
                  {[
                    "Registrasi akun dengan data diri dasar",
                    "Mengerjakan soal Assessment",
                    "Melihat hasil analisis kemampuan digital",
                    "Download laporan lengkap",
                    "Menerima rekomendasi jurusan UKRIDA"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center relative z-10 shrink-0 mt-0.5 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-600">{idx + 1}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                  <Users className="w-5 h-5 text-slate-700" />
                  Journey Admission
                </h4>
                <div className="flex flex-col gap-0 relative ml-2">
                  <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-slate-200 rounded-full"></div>
                  {[
                    "Melihat dashboard ringkasan",
                    "Melihat data detail siswa & skor",
                    "Mengelompokkan data prospect/lead",
                    "Melakukan follow up via komunikasi langsung",
                    "Monitoring konversi pendaftaran"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-8 relative">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center relative z-10 shrink-0 mt-0.5 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-600">{idx + 1}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 pt-1">{step}</p>
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
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Sistem rekomendasi pada Digital Skill Assessment tidak menggunakan Artificial Intelligence, tetapi menggunakan metode <strong>Rule-Based Weighted Scoring</strong>. Nilai rekomendasi dihitung berdasarkan hasil assessment kompetensi digital dan minat siswa sehingga proses penilaian bersifat transparan dan mudah dipahami.
            </p>

            {/* Tahap 1 */}
            <div className="mb-10">
              <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Tahap 1: Perhitungan Kompetensi Digital</h4>
              <p className="text-xs text-slate-500 mb-6">
                Setiap jawaban memiliki bobot terhadap empat kompetensi digital. Setelah seluruh assessment selesai, sistem menghitung skor setiap kompetensi dan menormalisasinya ke skala 0–100. Kompetensi yang dinilai meliputi <strong>Literasi Digital, Logika Komputasi, Computational Thinking, dan Digital Problem Solving</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-between bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-xs font-bold text-slate-700 text-center w-full sm:w-auto">Jawaban Assessment</div>
                <div className="text-slate-300 font-bold rotate-90 sm:rotate-0">→</div>
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-xs font-bold text-slate-700 text-center w-full sm:w-auto">Akumulasi Bobot</div>
                <div className="text-slate-300 font-bold rotate-90 sm:rotate-0">→</div>
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-xs font-bold text-slate-700 text-center w-full sm:w-auto">Normalisasi Nilai</div>
                <div className="text-slate-300 font-bold rotate-90 sm:rotate-0">→</div>
                <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-sm text-xs font-bold text-white text-center w-full sm:w-auto">Skor Kompetensi (0–100)</div>
              </div>
            </div>

            {/* Tahap 2 */}
            <div className="mb-10">
              <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Tahap 2: Perhitungan Rekomendasi Program Studi</h4>
              <p className="text-xs text-slate-500 mb-6">
                Setiap program studi memiliki komposisi bobot kompetensi yang berbeda sehingga menghasilkan rekomendasi yang sesuai dengan karakteristik masing-masing program studi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-5 border border-slate-200 bg-white shadow-sm rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-800" /> Sistem Informasi
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Literasi Digital</span><span className="font-bold text-slate-900">35%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Logika Komputasi</span><span className="font-bold text-slate-900">20%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Computational Thinking</span><span className="font-bold text-slate-900">20%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Digital Problem Solving</span><span className="font-bold text-slate-900">25%</span></li>
                  </ul>
                </div>

                <div className="p-5 border border-slate-200 bg-white shadow-sm rounded-xl">
                  <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400" /> Informatika
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Literasi Digital</span><span className="font-bold text-slate-900">15%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Logika Komputasi</span><span className="font-bold text-slate-900">30%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Computational Thinking</span><span className="font-bold text-slate-900">35%</span></li>
                    <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Digital Problem Solving</span><span className="font-bold text-slate-900">20%</span></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Tahap 3 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Tahap 3: Penyesuaian Berdasarkan Minat</h4>
              <p className="text-xs text-slate-500 mb-6">
                Hasil akhir diperoleh dari kombinasi antara skor kompetensi digital (70%) dan hasil asesmen minat siswa (30%).
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
                <div className="flex flex-col items-center bg-slate-800/50 p-4 rounded-lg border border-slate-700 w-full md:w-auto">
                  <span className="text-3xl font-black text-white">70%</span>
                  <span className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Skor Kompetensi</span>
                </div>
                
                <span className="text-2xl font-bold text-slate-500">+</span>
                
                <div className="flex flex-col items-center bg-slate-800/50 p-4 rounded-lg border border-slate-700 w-full md:w-auto">
                  <span className="text-3xl font-black text-white">30%</span>
                  <span className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Skor Minat</span>
                </div>
                
                <span className="text-2xl font-bold text-slate-500">→</span>
                
                <div className="flex flex-col items-center bg-white p-4 rounded-lg w-full md:w-auto">
                  <span className="text-xl font-black text-slate-900 uppercase">Final Recommendation Score</span>
                </div>
              </div>
            </div>
            
          </SlideFrame>
        </FadeIn>

        {/* SECTION 08: Solusi yang Ditawarkan */}
        <FadeIn delay={0.7}>
          <SlideFrame index="08" title="Solusi yang Ditawarkan">
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm text-slate-700 min-w-[800px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="p-4 font-bold text-slate-900 w-1/3">Masalah</th>
                    <th className="p-4 font-bold text-slate-900 w-1/3">Fitur Solusi</th>
                    <th className="p-4 font-bold text-slate-900 w-1/3">Manfaat Bisnis & User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">Siswa tidak tahu potensi spesifik bidang teknologinya.</td>
                    <td className="p-4 font-semibold text-slate-900">Interactive Assessment Engine</td>
                    <td className="p-4 text-slate-600">Memberikan diagnosis skor per kategori skill secara instan dan objektif.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">Sulit memilih program studi yang paling tepat di universitas.</td>
                    <td className="p-4 font-semibold text-slate-900">Rule-Based Recommendation</td>
                    <td className="p-4 text-slate-600">Mengarahkan siswa ke prodi yang relevan, menekan angka putus kuliah.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">Data pendaftar pameran tercecer & tidak terstruktur.</td>
                    <td className="p-4 font-semibold text-slate-900">Lead Capture & Data Export</td>
                    <td className="p-4 text-slate-600">Merapikan database untuk diolah lebih lanjut oleh tim telemarketing.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">Kurangnya daya tarik booth universitas saat pameran.</td>
                    <td className="p-4 font-semibold text-slate-900">Web-based Gamified Assessment</td>
                    <td className="p-4 text-slate-600">Menjadi magnet audiens melalui pendekatan interaktif di lokasi pameran.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">Tidak ada laporan kemajuan minat dari waktu ke waktu.</td>
                    <td className="p-4 font-semibold text-slate-900">Admin Analytics Dashboard</td>
                    <td className="p-4 text-slate-600">Memberi insight berbasis data untuk strategi penerimaan mahasiswa baru.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 8: Success Metrics */}
        <FadeIn delay={0.8}>
          <SlideFrame index="09" title="Success Metrics">
            <div className="flex flex-col gap-6">
              
              <div className="p-6 md:p-8 bg-slate-900 rounded-xl text-white flex flex-col md:flex-row md:items-center gap-6 justify-between shadow-md">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-400" /> North Star Metric
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight">Jumlah Assessment yang Berhasil Diselesaikan</h4>
                  <p className="text-sm text-slate-300 mt-3 max-w-2xl leading-relaxed">
                    Mengindikasikan value nyata yang dinikmati pengguna dan validitas data yang diperoleh institusi secara utuh.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Assessment Completion Rate", desc: "Persentase siswa yang menyelesaikan tes hingga akhir." },
                  { label: "Recommendation View Rate", desc: "Tingkat perhatian pada jurusan yang disarankan oleh sistem." },
                  { label: "Report Download Rate", desc: "Metrik seberapa banyak siswa yang menyimpan laporan hasil tes." },
                  { label: "Lead Conversion Rate", desc: "Tingkat konversi pendaftar tes menjadi calon mahasiswa resmi." },
                  { label: "Monthly Active Users", desc: "Jumlah partisipasi dari kunjungan harian maupun bulanan di event promosi." }
                ].map((metric, idx) => (
                  <div key={idx} className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-900 text-sm mb-2">{metric.label}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 9: Roadmap */}
        <FadeIn delay={0.9}>
          <SlideFrame index="10" title="Roadmap">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden lg:block absolute top-6 left-10 right-10 h-[2px] bg-slate-200 z-0"></div>
              
              {[
                { phase: "Fase 1", title: "Digital Assessment Platform", desc: "Peluncuran engine utama, registrasi, dan hasil tes sederhana (MVP)." },
                { phase: "Fase 2", title: "Recommendation Engine", desc: "Integrasi sistem Rule-Based Weighted Scoring untuk pemetaan jurusan." },
                { phase: "Fase 3", title: "Dashboard & Analytics", desc: "Pengembangan portal admin untuk memantau data lead secara analitik." },
                { phase: "Fase 4", title: "Mobile App & Integrasi PMB", desc: "Adaptasi ke aplikasi seluler dan sinkronisasi dengan sistem admisi kampus." },
              ].map((rd, idx) => (
                <div key={idx} className="flex flex-col relative z-10 pt-1 lg:pt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center mb-4 lg:mx-auto">
                    <span className="font-bold text-slate-900">{idx + 1}</span>
                  </div>
                  <div className="p-5 bg-white border border-slate-200 rounded-xl h-full shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">{rd.phase}</span>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">{rd.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{rd.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideFrame>
        </FadeIn>

        {/* SECTION 10: Refleksi */}
        <FadeIn delay={1.0}>
          <SlideFrame index="11" title="Refleksi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4"><AlertCircle className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-3">Tantangan</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bagaimana merancang platform yang tidak hanya memberikan nilai diagnostik yang akurat dan bermanfaat bagi siswa, namun juga secara simultan mengumpulkan data pemasaran strategis yang dibutuhkan oleh institusi tanpa terkesan eksploitatif.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4"><ListTodo className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-3">Trade-Off</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pada tahap perancangan, saya memilih menggunakan metode Rule-Based Weighted Scoring karena lebih transparan, mudah diimplementasikan, dan sesuai dengan kebutuhan awal platform. Pendekatan ini memungkinkan sistem memberikan rekomendasi secara konsisten tanpa kompleksitas model machine learning.
                </p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4"><ClipboardCheck className="w-5 h-5 text-slate-700" /></div>
                <h4 className="font-bold text-slate-900 mb-3">Rencana Pengembangan</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Apabila platform dikembangkan lebih lanjut, langkah prioritas berikutnya adalah pengemasan ke dalam aplikasi mobile mandiri, gamifikasi, serta integrasi data langsung dengan sistem Penerimaan Mahasiswa Baru (PMB) kampus.
                </p>
              </div>
            </div>
          </SlideFrame>
        </FadeIn>

        {/* FOOTER NAV */}
        <FadeIn delay={1.1}>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/product-management/onium" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Studi Kasus Sebelumnya
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              Ke Halaman Utama <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}
