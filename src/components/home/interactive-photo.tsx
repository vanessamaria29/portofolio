"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function InteractivePhoto() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

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
      <motion.div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-slate-300 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.2), y: useTransform(springY, (y) => -y * 0.2) }} />
      <motion.div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-blue-200 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.15), y: useTransform(springY, (y) => -y * 0.15) }} />
      <motion.div className="absolute top-1/2 -right-4 w-5 h-5 rounded-full bg-fuchsia-200/80 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.3), y: useTransform(springY, (y) => -y * 0.3) }} />
      <motion.div className="absolute bottom-10 left-20 w-2 h-2 rounded-full bg-purple-200 shadow-lg z-20 pointer-events-none" style={{ x: useTransform(springX, (x) => -x * 0.1), y: useTransform(springY, (y) => -y * 0.1) }} />

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
          <img 
            src="/images/profile.jpeg" 
            alt="Vanessa - Product Manager Portfolio" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
