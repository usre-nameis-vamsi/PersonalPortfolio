"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { GENERAL_INFO } from "@/lib/data"
import ArrowAnimation from "../ArrowAnimation"
import Button from "../Button"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    })

    tl.fromTo(nameRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 2 })

    tl.fromTo(roleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")

    tl.fromTo(".banner-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")

    // Parallax effect on scroll
    gsap.to(".banner-content", {
      y: 200,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section className="h-[100svh] flex items-center justify-center relative overflow-hidden" ref={bannerRef}>
      <div className="banner-content text-center z-[1]">
        <h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-anton leading-none mb-4" ref={nameRef}>
          {GENERAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8" ref={roleRef}>
          {GENERAL_INFO.role}
        </p>
        <div className="banner-cta flex justify-center gap-4">
          <Button as="link" href="#about-me">
            About Me
          </Button>
          <Button as="link" href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
      <ArrowAnimation />
    </section>
  )
}

export default Banner
