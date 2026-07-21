"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/animations/fade-in"

// The Interactive Photo component
function InteractivePhoto() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for parallax
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Calculate rotation based on mouse position
  const rotateX = useTransform(springY, [-200, 200], [15, -15]);
  const rotateY = useTransform(springX, [-200, 200], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full aspect-square max-w-md mx-auto perspective-[1000px] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background blobs and SVG curves have been moved to GlobalAmbientBackground */}
      
      {/* Interactive Particles (Kept local to the photo for direct interaction) */}
      <motion.div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-slate-300 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.2), y: useTransform(springY, (y) => -y * 0.2) }} />
      <motion.div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-blue-200 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.15), y: useTransform(springY, (y) => -y * 0.15) }} />
      <motion.div className="absolute top-1/2 -right-4 w-5 h-5 rounded-full bg-fuchsia-200/80 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.3), y: useTransform(springY, (y) => -y * 0.3) }} />
      <motion.div className="absolute bottom-10 left-20 w-2 h-2 rounded-full bg-purple-200 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.1), y: useTransform(springY, (y) => -y * 0.1) }} />

      {/* Main Photo Frame */}
      <motion.div
        initial={{ opacity: 0, y: -180, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 11, delay: 0.15 }}
        className="relative z-10 w-full h-full max-w-[320px] max-h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.25}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl border border-white/40 relative"
        >
          {/* Profile Photo */}
          <img 
            src="/images/profile.jpeg" 
            alt="Vanessa" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  return (
    <Section id="about" className="py-20 md:py-32 overflow-hidden relative bg-transparent scroll-mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col items-start gap-8 w-full max-w-[70ch]">
            <FadeIn direction="up">
              <div className="inline-flex items-center rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-primary shadow-sm">
                Available for Product Management Internship
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                Hai, saya Vanessa.
              </h1>
    
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
               Mahasiswi Sistem Informasi semester 5 di Universitas Kristen Krida Wacana yang berfokus pada Product Management dan IT Project Management. Memiliki pengalaman mengembangkan solusi digital melalui riset pengguna, observasi lapangan, dan kolaborasi lintas tim dalam proyek akademik, kompetisi, organisasi, serta magang. Saat ini sedang mencari kesempatan magang untuk berkontribusi dalam pengembangan produk digital sekaligus memperdalam pengalaman di bidang Product Management.
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
