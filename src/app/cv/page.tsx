"use client"
import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const cvUrl = "/documents/CV_Vanessa.pdf" // Placeholder path for the CV document

  return (
    <Section className="py-20 md:py-32 bg-slate-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </Link>
              
              <a
                href={cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-accent-primary text-white font-medium text-sm hover:bg-accent-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden w-full h-[80vh] flex flex-col items-center justify-center relative">
              <object
                data={cvUrl}
                type="application/pdf"
                className="w-full h-full absolute inset-0 z-10"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-50/50">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Dokumen CV Belum Tersedia</h3>
                  <p className="text-slate-500 text-sm max-w-md mb-6">
                    Mohon pastikan file PDF telah diunggah ke folder <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-mono">public/documents/CV_Vanessa.pdf</code>
                  </p>
                  <a
                    href={cvUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Coba Download Langsung
                  </a>
                </div>
              </object>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
