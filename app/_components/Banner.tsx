"use client"
import ArrowAnimation from "@/components/ArrowAnimation"
import Button from "@/components/Button"
import { GENERAL_INFO } from "@/lib/data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import React from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Banner = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      })

      tl.fromTo(".slide-up-and-fade", { y: 0 }, { y: -150, opacity: 0, stagger: 0.02 })
    },
    { scope: containerRef },
  )

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />
      <div
        className="h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        {/* Left content */}
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] pl-[8%] md:pl-[8%]">
          <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton text-left">
            <span className="text-primary">FRONTEND</span>
            <br /> <span className="">DEVELOPER</span>
          </h1>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground text-left">
            Hi! I&apos;m <span className="font-medium text-foreground">Vamsi Chanumolu</span>. A creative Frontend
            Developer As a Student i gain experience in building high-performance, scalable, and responsive web
            solutions.
          </p>

          {/* Mobile portrait */}
          <div className="md:hidden mt-6 w-full slide-up-and-fade">
            <div className="w-full max-w-[280px] h-[350px] relative rounded-xl overflow-hidden border-2 border-primary/40">
              <Image
                src="/images/profile-vamsi-cutout.png"
                alt="Vamsi Chanumolu"
                fill
                className="object-cover object-[center_45%]"
                priority
              />
            </div>
          </div>

          <Button
            as="link"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${GENERAL_INFO.email}`}
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            HIRE ME
          </Button>

          <div className="absolute bottom-4 left-[8%]">
            <a
              href={`mailto:${GENERAL_INFO.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {GENERAL_INFO.email}
            </a>
          </div>
        </div>

        {/* Right side: Portrait + stats on desktop */}
        <div className="hidden md:flex md:absolute bottom-[10%] right-[4%] flex-col gap-8 text-right items-end">
          {/* Portrait - ALWAYS VISIBLE */}
          <div className="w-[340px] h-[420px] relative rounded-xl overflow-hidden border-2 border-primary/40 slide-up-and-fade">
            <Image
              src="/images/profile-vamsi-cutout.png"
              alt="Vamsi Chanumolu"
              fill
              className="object-cover object-[center_45%]"
              priority
            />
          </div>

          {/* Stats */}
          <div className="flex md:flex-row gap-8 text-center md:text-right">
            <div className="slide-up-and-fade">
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">4+</h5>
              <p className="text-muted-foreground">Certifications</p>
            </div>
            <div className="slide-up-and-fade">
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">7+</h5>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            <div className="slide-up-and-fade">
              <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">10K+</h5>
              <p className="text-muted-foreground">Hours Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
