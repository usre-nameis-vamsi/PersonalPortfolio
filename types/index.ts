export type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link"
  | "no-color"

export interface Skill {
  name: string
  level: number
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface IProject {
  slug: string
  title: string
  description: string
  role?: string
  thumbnail: string
  images: string[]
  techStack: string[]
  sourceCode?: string
  liveUrl?: string
  year: string
  status?: "developing" | "completed"
}

export interface IExperience {
  title: string
  company: string
  duration: string
}

export interface ISkill {
  name: string
  icon: string
}
