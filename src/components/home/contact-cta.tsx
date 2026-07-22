import * as React from "react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverLift } from "@/components/animations/hover-lift"
import { ArrowRight, Mail } from "lucide-react"

export function ContactCTA() {
  return (
    <Section className="py-24 md:py-32 lg:py-40 bg-transparent">
      <Container>
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-slate-100 shadow-sm backdrop-blur-sm relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
              Mari bangun produk digital yang berdampak bersama.
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Saya sedang mencari peluang magang di bidang Product Management. Jika tim Anda mencari seseorang yang mampu menjembatani sisi teknis, bisnis, dan kebutuhan pengguna, mari berdiskusi.
            </p>
            <HoverLift>
              <Button size="lg" className="rounded-full px-8 py-6 text-base group bg-slate-900 hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg">
                Mari Berdiskusi
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </HoverLift>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
