"use client"
import ArrowAnimation from "@/components/ArrowAnimation"
import TransitionLink from "@/components/TransitionLink"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ArrowLeft, Award, ExternalLink } from "lucide-react"
import { useRef } from "react"

interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  description: string
  verificationUrl: string
  certId: string
  validUntil: string
}

interface Props {
  certification: Certification
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CertificationDetails = ({ certification }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.set(".fade-in-later", {
        autoAlpha: 0,
        y: 30,
      })
      const tl = gsap.timeline({
        delay: 0.5,
      })

      tl.to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      })
    },
    { scope: containerRef },
  )

  return (
    <section className="pt-5 pb-14">
      <div className="pl-[8%] pr-[4%] w-full" ref={containerRef}>
        <TransitionLink back href="/" className="mb-16 inline-flex gap-2 items-center group h-12">
          <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
          Back
        </TransitionLink>

        <div className="top-0 min-h-[calc(100svh-100px)] flex">
          <div className="relative w-full">
            <div className="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
              <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden flex items-center gap-4">
                <Award className="text-primary h-12 w-12" />
                <span className="inline-block">{certification.name}</span>
              </h1>
            </div>

            <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Issuer</p>
                <div className="text-lg">{certification.issuer}</div>
              </div>

              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Year</p>
                <div className="text-lg">{certification.year}</div>
              </div>

              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Certificate ID</p>
                <div className="text-lg">{certification.certId}</div>
              </div>

              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Valid Until</p>
                <div className="text-lg">{certification.validUntil}</div>
              </div>

              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Description</p>
                <div className="text-lg">{certification.description}</div>
              </div>

              <div className="fade-in-later opacity-0">
                <p className="text-muted-foreground font-anton mb-3">Verification</p>
                <div className="text-lg">
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    Verify Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <ArrowAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationDetails
