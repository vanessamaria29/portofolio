"use client"
import * as React from "react"
import { motion } from "framer-motion"

export function GlobalAmbientBackground() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full">
      
      {/* 1. Top Blob (Behind Hero) */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[2%] right-[10%] w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl opacity-25 bg-purple-300"
        style={{ transformOrigin: "40% 40%" }}
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[0%] right-[5%] w-[45vw] max-w-[500px] aspect-square rounded-full blur-3xl opacity-25 bg-blue-300"
        style={{ transformOrigin: "60% 60%" }}
      />
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[3%] right-[15%] w-[40vw] max-w-[450px] aspect-square rounded-full blur-3xl opacity-25 bg-fuchsia-300"
        style={{ transformOrigin: "50% 50%" }}
      />

      {/* 2. Middle Blob (Behind UI/UX & Web Dev - Left Side) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] -left-[10%] w-[60vw] max-w-[700px] aspect-square rounded-full blur-3xl opacity-20 bg-blue-300"
        style={{ transformOrigin: "50% 50%" }}
      />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[45%] -left-[5%] w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl opacity-15 bg-purple-300"
        style={{ transformOrigin: "40% 60%" }}
      />

      {/* 3. Bottom Blob (Behind Academic Grid - Right Side) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute top-[75%] -right-[10%] w-[55vw] max-w-[650px] aspect-square rounded-full blur-3xl opacity-20 bg-fuchsia-300"
        style={{ transformOrigin: "50% 40%" }}
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute top-[80%] right-[0%] w-[50vw] max-w-[550px] aspect-square rounded-full blur-3xl opacity-20 bg-blue-300"
        style={{ transformOrigin: "60% 50%" }}
      />

      {/* Vector Orbital Curves flowing down across the page */}
      {/* We use a very tall SVG that scales down. ViewBox creates a flexible coordinate system. */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1000 3000">
         <motion.path 
          d="M 100 -100 C 600 500, -200 1500, 500 2000 S -300 2800, 200 3200" 
          fill="none" 
          stroke="url(#grad1)" 
          strokeWidth="3"
          strokeDasharray="40 80"
          animate={{ strokeDashoffset: [0, -1000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 900 -100 C 400 600, 1200 1600, 400 2100 S 1400 2900, 800 3200" 
          fill="none" 
          stroke="url(#grad2)" 
          strokeWidth="2"
          strokeDasharray="30 70"
          animate={{ strokeDashoffset: [0, 1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(147,197,253,0.1)" />
            <stop offset="50%" stopColor="rgba(196,181,253,0.5)" />
            <stop offset="100%" stopColor="rgba(240,171,252,0.1)" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(240,171,252,0.1)" />
            <stop offset="50%" stopColor="rgba(147,197,253,0.4)" />
            <stop offset="100%" stopColor="rgba(196,181,253,0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
