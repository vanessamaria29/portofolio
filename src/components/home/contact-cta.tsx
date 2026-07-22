import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverLift } from "@/components/animations/hover-lift"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

export function ContactCTA() {
  return (
    <Section className="py-24 md:py-32 lg:py-40 bg-transparent">
      <Container>
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-slate-100 shadow-sm backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
              Mari bangun produk digital yang berdampak bersama.
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Saya sedang mencari peluang magang di bidang Product Management & IT Project Management. Jika tim Anda mencari seseorang yang mampu menjembatani sisi teknis, bisnis, dan kebutuhan pengguna, mari berdiskusi.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <HoverLift>
                <a 
                  href="https://wa.me/6285695886864" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg active:scale-95 select-none"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </HoverLift>

              <HoverLift>
                <a 
                  href="mailto:vanessapardedemaria@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg active:scale-95 select-none"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim Email</span>
                </a>
              </HoverLift>

              <HoverLift>
                <a 
                  href="https://www.linkedin.com/in/vanessa-maria-2a630b362" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs active:scale-95 select-none"
                >
                  <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </HoverLift>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
