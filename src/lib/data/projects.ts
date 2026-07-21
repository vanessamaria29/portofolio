export type ProjectCategory = "All" | "Product Management" | "UI/UX Design" | "Frontend Development"

export type ProjectStatus = "Completed" | "In Progress" | "Concept"

export interface ProjectData {
  id: string
  title: string
  category: ProjectCategory
  summary: string
  problemStatement: string
  role: string
  timeline: string
  teamSize?: string
  keyOutcome: string
  technologies: string[]
  skills: string[]
  imageSrc: string
  status: ProjectStatus
  links: {
    caseStudy?: string
    liveDemo?: string
    github?: string
  }
}

export const projectsData: ProjectData[] = [
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Dashboard Redesign",
    category: "Product Management",
    summary: "Led the complete overhaul of a legacy B2B analytics suite, shifting from static reporting to real-time collaborative forecasting.",
    problemStatement: "Enterprise users were exporting data to Excel because the native dashboards lacked custom filtering and real-time collaboration, leading to a 30% drop in DAU.",
    role: "Lead Product Manager",
    timeline: "Q3 2023 - Q1 2024",
    teamSize: "8 Engineers, 2 Designers",
    keyOutcome: "Increased DAU by 45% and reduced customer churn by 12% within 6 months of launch.",
    technologies: ["React", "Snowflake", "GraphQL", "Figma"],
    skills: ["Product Strategy", "User Research", "Roadmapping", "Prioritization"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    status: "Completed",
    links: {
      caseStudy: "/projects/enterprise-analytics",
      liveDemo: "https://demo.example.com"
    }
  },
  {
    id: "fintech-onboarding",
    title: "Frictionless KYC Onboarding Flow",
    category: "UI/UX Design",
    summary: "Designed a dynamic, multi-step onboarding wizard for a consumer fintech application to reduce drop-off during identity verification.",
    problemStatement: "The existing KYC process was a single, overwhelming 40-field form that caused a 60% abandonment rate among mobile users.",
    role: "UX Researcher & UI Designer",
    timeline: "Jan 2023 - Apr 2023",
    teamSize: "3 Engineers, 1 PM",
    keyOutcome: "Increased onboarding completion rate from 40% to 78%, resulting in 15k new verified accounts.",
    technologies: ["Figma", "Framer", "Miro"],
    skills: ["User Flow", "Wireframing", "Usability Testing", "High Fidelity Design"],
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    status: "Completed",
    links: {
      caseStudy: "/projects/fintech-onboarding"
    }
  },
  {
    id: "developer-portal",
    title: "Open Source Developer Portal",
    category: "Frontend Development",
    summary: "Architected and built a highly performant documentation platform for third-party developers integrating with our API.",
    problemStatement: "API documentation was fragmented across PDFs and stale Confluence pages, leading to a high volume of basic support tickets.",
    role: "Senior Frontend Engineer",
    timeline: "Aug 2022 - Nov 2022",
    keyOutcome: "Achieved a 100/100 Lighthouse score and reduced developer support tickets by 40%.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    skills: ["Performance", "Accessibility", "Responsive Design", "Architecture"],
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    status: "Completed",
    links: {
      github: "https://github.com/example/dev-portal",
      liveDemo: "https://docs.example.com"
    }
  },
  {
    id: "ai-copilot",
    title: "Context-Aware AI Writing Assistant",
    category: "Product Management",
    summary: "Spearheading the integration of LLMs into a content management system to assist writers with SEO optimization.",
    problemStatement: "Content creators struggle to balance engaging storytelling with strict SEO requirements, often resulting in subpar search rankings.",
    role: "Product Manager",
    timeline: "Currently Active",
    teamSize: "5 Engineers, 1 AI Researcher",
    keyOutcome: "Targeting a 30% reduction in time-to-publish for SEO-optimized articles.",
    technologies: ["OpenAI API", "Node.js", "React"],
    skills: ["AI Strategy", "Metrics Definition", "MVP Scoping"],
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    status: "In Progress",
    links: {}
  }
]
