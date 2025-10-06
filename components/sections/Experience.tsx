"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { EXPERIENCES } from "@/lib/data"
import SectionTitle from "../SectionTitle"
import { Briefcase } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".experience-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section className="py-20" ref={sectionRef} id="my-experience">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Experience" icon={<Briefcase className="text-primary" />} />

        <div className="relative pl-8 border-l-2 border-primary space-y-12" ref={timelineRef}>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="experience-item relative">
              <div className="absolute -left-[41px] size-8 bg-primary rounded-full flex items-center justify-center">
                <div className="size-3 bg-background rounded-full"></div>
              </div>

              <div className="bg-background-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex justify-between mb-4">
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.duration}</p>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
