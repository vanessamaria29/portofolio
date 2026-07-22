import * as React from "react"

export function GlobalAmbientBackground() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full transform-gpu">
      {/* 1. Top Ambient Glow (Behind Hero) */}
      <div 
        className="absolute top-[2%] right-[10%] w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl opacity-20 bg-purple-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute top-[0%] right-[5%] w-[45vw] max-w-[500px] aspect-square rounded-full blur-3xl opacity-20 bg-blue-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute top-[3%] right-[15%] w-[40vw] max-w-[450px] aspect-square rounded-full blur-3xl opacity-20 bg-fuchsia-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* 2. Middle Ambient Glow (Left Side) */}
      <div 
        className="absolute top-[40%] -left-[10%] w-[60vw] max-w-[700px] aspect-square rounded-full blur-3xl opacity-15 bg-blue-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute top-[45%] -left-[5%] w-[50vw] max-w-[600px] aspect-square rounded-full blur-3xl opacity-15 bg-purple-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* 3. Bottom Ambient Glow (Right Side) */}
      <div 
        className="absolute top-[75%] -right-[10%] w-[55vw] max-w-[650px] aspect-square rounded-full blur-3xl opacity-15 bg-fuchsia-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div 
        className="absolute top-[80%] right-[0%] w-[50vw] max-w-[550px] aspect-square rounded-full blur-3xl opacity-15 bg-blue-300 pointer-events-none transform-gpu"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* Lightweight Vector Orbital Curves */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 3000">
        <path 
          d="M 100 -100 C 600 500, -200 1500, 500 2000 S -300 2800, 200 3200" 
          fill="none" 
          stroke="url(#grad1)" 
          strokeWidth="3"
          strokeDasharray="40 80"
        />
        <path 
          d="M 900 -100 C 400 600, 1200 1600, 400 2100 S 1400 2900, 800 3200" 
          fill="none" 
          stroke="url(#grad2)" 
          strokeWidth="2"
          strokeDasharray="30 70"
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
