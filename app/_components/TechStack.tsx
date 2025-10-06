"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TECH_STACK = {
  frontend: [
    {
      name: "JavaScript",
      logo: "/images/tech/javascript-new.png",
    },
    {
      name: "TypeScript",
      logo: "/images/tech/typescript-new.png",
    },
    {
      name: "React",
      logo: "/images/tech/react.png",
    },
    {
      name: "Tailwind CSS",
      logo: "/images/tech/tailwindcss.png",
    },
  ],
  database: [
    {
      name: "MySQL",
      logo: "/images/tech/mysql-new.png",
    },
    {
      name: "PostgreSQL",
      logo: "/images/tech/postgresql.png",
    },
    {
      name: "MongoDB",
      logo: "/images/tech/mongodb.png",
    },
    {
      name: "Supabase",
      logo: "/images/tech/supabase-new.png",
    },
    {
      name: "Firebase",
      logo: "/images/tech/firebase.png",
    },
  ],
  tools: [
    {
      name: "Git",
      logo: "/images/tech/github-new.png",
    },
    {
      name: "Netlify",
      logo: "/images/tech/netlify.png",
    },
  ],
}

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 1,
        },
      })

      tl.from(".tech-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      })
    },
    { scope: containerRef },
  )

  return (
    <section className="py-20" id="tech-stack" ref={containerRef}>
      <div className="pl-[8%] pr-[4%] w-full">
        <h2 className="text-5xl md:text-6xl font-anton mb-20 text-left">MY STACK</h2>

        {Object.entries(TECH_STACK).map(([category, technologies]) => (
          <div key={category} className="mb-20">
            <h3 className="text-5xl md:text-7xl font-anton mb-12 text-left uppercase">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {technologies.map((tech) => (
                <div key={tech.name} className="tech-item flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-transparent">
                    <Image
                      src={tech.logo || `/placeholder.svg?height=40&width=40&text=${tech.name[0]}`}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
