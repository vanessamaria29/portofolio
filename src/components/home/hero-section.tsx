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
                Terbuka untuk Magang Product Management
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                Hai, saya Vanessa.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Mahasiswi Sistem Informasi yang berfokus pada Product Management & IT Business Analysis. Berpengalaman dalam product discovery, riset pengguna, wireframing, dan eksekusi agile. Memiliki passion untuk menjembatani kebutuhan pengguna, tujuan bisnis, dan batasan teknis demi membangun solusi digital yang berdampak tinggi.
              </p>
            </FadeIn>
          </div>
          
          {/* Right Column: Abstract Editorial Visual */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden lg:block perspective-[1000px]">
            <InteractivePhoto />
          </div>

        </div>
      </Container>
    </Section>
  )
}
