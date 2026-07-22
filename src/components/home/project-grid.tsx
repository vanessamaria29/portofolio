"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { CardTitle } from "@/components/cards/card"
import { ImageContainer } from "@/components/shared/image-container"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  imageSrc: string
  href: string
  isDevelopment?: boolean
}

const ProjectCard = ({ project }: { project: Project }) => {
  const isDev = project.isDevelopment || project.title.includes("Digital Skill Assessment")

  return (
    <motion.div 
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      variants={{
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
      }}
      className="flex-none w-[280px] sm:w-[320px] md:w-[360px] h-full flex flex-col group overflow-hidden border border-slate-200/80 bg-white/70 backdrop-blur-md hover:border-slate-400 transition-all snap-start rounded-2xl shadow-xs"
    >
      <Link href={project.href} className="flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-2xl cursor-pointer active:scale-[0.99] transition-transform">
        {isDev ? (
          <div className="w-full relative overflow-hidden border-b border-slate-800 aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-700">
            <div className="flex justify-between items-start z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Dalam Pengembangan
              </span>
            </div>
            <div className="z-10 flex items-center gap-2 text-slate-300">
              <Code2 className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-bold tracking-wide text-white">Preview Studi Kasus</span>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        ) : (
          project.imageSrc && (
            <div className="w-full relative overflow-hidden border-b border-slate-100 aspect-[4/3]">
              <ImageContainer 
                src={project.imageSrc} 
                alt={project.title} 
                aspectRatio="video"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )
        )}
        <div className="p-5 flex flex-col flex-grow">
          <CardTitle className="text-lg mb-2 font-bold text-slate-900 leading-tight">
            {project.title}
          </CardTitle>
          <p className="text-xs text-slate-600 line-clamp-3 mb-4 flex-grow leading-relaxed font-normal">
            {project.description}
          </p>
          <div className="flex items-center text-xs font-bold text-slate-900 mt-auto pt-3 border-t border-slate-100">
            <span>Lihat Detail</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar"
    >
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </motion.div>
  )
}
