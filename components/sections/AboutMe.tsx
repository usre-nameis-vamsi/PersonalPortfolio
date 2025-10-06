"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { GENERAL_INFO, SKILLS } from "@/lib/data"
import SectionTitle from "../SectionTitle"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate bio text
    gsap.fromTo(
      bioRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate skills
    gsap.fromTo(
      ".skill-item",
      { width: 0 },
      {
        width: "100%",
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section className="py-20 bg-background-light" ref={sectionRef} id="about-me">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg whitespace-pre-line" ref={bioRef}>
              {GENERAL_INFO.about}
            </p>
          </div>

          <div ref={skillsRef}>
            <h3 className="text-xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="skill-item h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
