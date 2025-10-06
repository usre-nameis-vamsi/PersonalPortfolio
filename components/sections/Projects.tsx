"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"
import { PROJECTS } from "@/lib/data"
import SectionTitle from "../SectionTitle"
import Button from "../Button"
import { Github, ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  const featuredProjects = PROJECTS.filter((project) => project.featured)

  return (
    <section className="py-20 bg-background-light" ref={sectionRef} id="selected-projects">
      <div className="container mx-auto px-4">
        <SectionTitle title="Selected Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-background-active text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button as="link" href={project.liveUrl} target="_blank" className="flex-1">
                    <ExternalLink size={16} />
                    Live
                  </Button>
                  <Button as="link" href={project.githubUrl} target="_blank" variant="secondary" className="flex-1">
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button as="link" href="https://github.com/tajmirul" target="_blank" variant="secondary">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
