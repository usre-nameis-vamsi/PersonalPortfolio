import type { Experience, Skill, IProject, IExperience, ISkill } from "@/types"

export const GENERAL_INFO = {
  name: "Vamsi Chanumolu",
  role: "Frontend Developer",
  email: "vamsichanumolu72@gmail.com",
  emailSubject: "Project Inquiry",
  emailBody: "Hi Tajmirul, I'd like to discuss a project with you.",
  location: "Gangineni, Vijayawada, Andhra Pradesh",
  bio: "I'm a passionate Frontend Developer with expertise in React, Next.js, and TypeScript. I love building beautiful, responsive, and user-friendly web applications.",
  about: `I'm a Frontend Developer with experience in web development. I specialize in building modern web applications using React, Next.js, and TypeScript. I'm passionate about creating clean, efficient, and scalable code.

I have a strong foundation in front-end technologies like React, TypeScript, and Tailwind CSS. I'm also experienced in working with REST APIs, GraphQL, and various third-party services.

When I'm not coding, I enjoy reading tech blogs, contributing to open-source projects, and exploring new technologies.`,
}

export const SOCIAL_LINKS = [
  {
    name: "github",
    url: "https://github.com/usre-nameis-vamsi",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vamsi-mohan-krishna-chanumolu-8ab364257/",
  },
]

export const SKILLS: Skill[] = [
  {
    name: "React",
    level: 90,
  },
  {
    name: "Next.js",
    level: 85,
  },
  {
    name: "TypeScript",
    level: 80,
  },
  {
    name: "GSAP",
    level: 75,
  },
  {
    name: "Tailwind CSS",
    level: 90,
  },
  {
    name: "Node.js",
    level: 70,
  },
]

export const MY_STACK: Record<string, ISkill[]> = {
  frontend: [
    {
      name: "React",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Next.js",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "TypeScript",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Tailwind CSS",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "GSAP",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Framer Motion",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Express",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Firebase",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "VS Code",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Figma",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Docker",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export const MY_EXPERIENCE: IExperience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators",
    duration: "2022 - Present",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Inc.",
    duration: "2020 - 2022",
  },
  {
    title: "Junior Developer",
    company: "WebCraft Agency",
    duration: "2018 - 2020",
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: "Acme Corp",
    position: "Frontend Developer",
    duration: "2021 - Present",
    description: "Developed and maintained the company's website using React and Next.js.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Beta Co",
    position: "Software Engineer",
    duration: "2019 - 2021",
    description: "Worked on a team to build a web application using Angular and Node.js.",
    technologies: ["Angular", "Node.js", "JavaScript", "HTML", "CSS"],
  },
]

export const PROJECTS: IProject[] = [
  {
    slug: "github-profile-explorer",
    title: "GitHub Profile Explorer",
    description:
      "A modern web application to discover and explore GitHub profiles with enhanced features. Users can search for GitHub profiles, view detailed statistics, repositories, and get insights into developer activities with a beautiful, responsive interface.",
    thumbnail: "/images/github-profile-explorer.png",
    images: ["/images/github-profile-explorer.png", "/images/github-profile-explorer-2.png"],
    techStack: ["React", "JavaScript", "GitHub API", "CSS3", "Responsive Design"],
    sourceCode: "https://github.com/usre-nameis-vamsi/github-profile-explorer",
    liveUrl: "https://githubprofileexplore.netlify.app/",
    year: "2024",
    role: "Full-stack developer responsible for UI/UX design, API integration, and deployment.",
  },
  {
    slug: "ai-resume-screener",
    title: "AI Resume Screener with RAG",
    description:
      "An intelligent resume screening system powered by AI and Retrieval-Augmented Generation (RAG) technology. The system automatically analyzes resumes, extracts key information, matches candidates with job requirements, and provides detailed scoring and recommendations for HR teams.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=AI+Resume+Screener",
    images: ["/placeholder.svg?height=400&width=600&text=AI+Resume+Screener"],
    techStack: ["Python", "RAG", "LangChain", "OpenAI", "React", "FastAPI", "Vector Database"],
    sourceCode: "https://github.com/usre-nameis-vamsi/ai-resume-screener",
    liveUrl: "",
    year: "2024",
    role: "AI/ML developer working on RAG implementation and frontend interface. Currently in development.",
    status: "developing",
  },
  {
    slug: "stylehub-ecommerce",
    title: "StyleHub Ecommerce",
    description:
      "A modern e-commerce platform for clothing and fashion accessories with a clean, user-friendly interface. Features include product filtering, user accounts, shopping cart, and secure checkout.",
    thumbnail: "/images/stylehub-ecommerce.png",
    images: ["/images/stylehub-ecommerce.png"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    sourceCode: "https://github.com/tajmirul/stylehub",
    liveUrl: "https://example.com/stylehub",
    year: "2023",
    role: "Lead frontend developer responsible for UI/UX implementation and integration with payment systems.",
  },
  {
    slug: "corporate-recruitment-system",
    title: "Corporate Recruitment System",
    description:
      "A comprehensive recruitment platform for corporate HR departments to streamline hiring processes, including applicant tracking, interview scheduling, and candidate evaluation. Currently in active development with advanced features being implemented.",
    thumbnail: "/images/corporate-recruitment.png",
    images: ["/images/corporate-recruitment.png"],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "AWS"],
    sourceCode: "https://github.com/tajmirul/recruitment",
    liveUrl: "",
    year: "2024",
    role: "Lead developer responsible for frontend architecture and implementation. Currently in development.",
    status: "developing",
  },
  {
    slug: "ecommerce-predictive-analysis",
    title: "Ecommerce Predictive Analysis",
    description:
      "Data-driven solution that provides predictive analytics for ecommerce businesses to optimize sales, inventory management, and customer targeting.",
    thumbnail: "/images/ecommerce-analytics.png",
    images: ["/images/ecommerce-analytics.png"],
    techStack: ["Python", "TensorFlow", "React", "D3.js", "Flask", "PostgreSQL"],
    sourceCode: "https://github.com/tajmirul/ecommerce-analytics",
    liveUrl: "https://v0-cloud-security-analysis-kixmis.vercel.app/",
    year: "2022",
    role: "Frontend developer responsible for data visualization and user interface.",
  },
  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    description:
      "A full-featured hotel booking platform with room management, reservations, and payment processing capabilities.",
    thumbnail: "/images/hotel-booking.png",
    images: ["/images/hotel-booking.png"],
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    sourceCode: "https://github.com/tajmirul/hotel-booking",
    liveUrl: "https://perfectaccommodation.netlify.app/",
    year: "2023",
    role: "Full-stack developer handling both frontend and backend implementation.",
  },
  {
    slug: "airline-reservation-system",
    title: "Airline Reservation System",
    description:
      "Comprehensive flight booking system with seat selection, ticket management, and user profiles. Currently under active development with enhanced features and improved user experience being implemented.",
    thumbnail: "/images/airline-reservation.png",
    images: ["/images/airline-reservation.png"],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    sourceCode: "https://github.com/tajmirul/airline",
    liveUrl: "",
    year: "2024",
    role: "Lead developer responsible for system architecture and implementation. Currently in development.",
    status: "developing",
  },
  {
    slug: "ai-phishing-detection",
    title: "AI Phishing Detection",
    description:
      "Advanced AI-powered system to detect and prevent phishing attacks in real-time, protecting users from malicious websites and emails.",
    thumbnail: "/images/ai-phishing.png",
    images: ["/images/ai-phishing.png"],
    techStack: ["Python", "Machine Learning", "React", "Flask", "TensorFlow", "Docker"],
    sourceCode: "https://github.com/tajmirul/phishing-detection",
    liveUrl: "https://aiphishingdetections.netlify.app/",
    year: "2023",
    role: "Machine learning engineer and frontend developer.",
  },
]
