import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { InteractivePhoto } from "@/components/home/interactive-photo"

export function HeroSection() {
  return (
    <Section id="about" className="py-20 md:py-32 overflow-hidden relative bg-transparent scroll-mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col items-start gap-8 w-full max-w-[70ch]">
            <FadeIn direction="up">
              <div className="inline-flex items-center rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-primary shadow-sm text-left">
                Available for Product Management, IT Business Analyst, & IT Project Management Internship
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                Hai, saya Vanessa.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Mahasiswi Sistem Informasi semester 5 yang berpengalaman mengerjakan berbagai studi kasus dan proyek digital bersama stakeholder nyata. Terbiasa melakukan user research, requirement gathering, dan menerjemahkan kebutuhan bisnis menjadi solusi digital yang terstruktur. Tertarik berkarier di Product Management, IT Business Analysis, dan IT Project Management.
              </p>
            </FadeIn>
          </div>
          
          {/* Right Column: Abstract Editorial Visual */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden lg:block perspective-[1000px] flex flex-col items-center justify-center">
            <InteractivePhoto />
            <div className="mt-8 flex justify-center">
              <a 
                href="/cv" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                Lihat CV
              </a>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
