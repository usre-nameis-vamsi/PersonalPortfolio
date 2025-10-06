"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const CERTIFICATIONS = [
  {
    id: "redhat",
    name: "RedHat Certified Developer",
    issuer: "RedHat",
    year: "2024",
    description: "Certified as a Red Hat Certified Enterprise Application Developer",
    verificationUrl: "https://rhtapps.redhat.com/verify?certId=240-187-393",
    certId: "240-187-393",
    validUntil: "November 10, 2026",
  },
  {
    id: "aviatrix",
    name: "Aviatrix Multi Cloud",
    issuer: "Aviatrix",
    year: "2024",
    description: "Aviatrix Certified Engineer - Multicloud Network Associate",
    verificationUrl: "https://www.credly.com/badges/2518dfea-b7c4-4e39-a19e-ca649ee88537",
    certId: "2024-21870",
    validUntil: "September 10, 2027",
  },
  {
    id: "automation-anywhere",
    name: "Automation Anywhere Certification",
    issuer: "Automation Anywhere",
    year: "2024",
    description: "Automation Anywhere Certified Professional",
    verificationUrl: "https://certificates.automationanywhere.com/757fd6d1-ebd6-4bc8-9721-5505e69425a0#acc.dKB1eQYy",
    certId: "AAESSE2024A360 - 122113677",
    validUntil: "November 10, 2026",
  },
  {
    id: "salesforce",
    name: "Salesforce AI Associate",
    issuer: "Salesforce",
    year: "2024",
    description: "Salesforce Certified AI Associate",
    verificationUrl: "https://www.salesforce.com/trailblazer/dqv5hhxruerin9tsz4",
    certId: "Salesforce AI Associate",
    validUntil: "2026",
  },
]

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      })

      tl.from(".certification-item", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      })
    },
    { scope: containerRef },
  )

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      })

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      })
    },
    { scope: containerRef },
  )

  return (
    <section className="py-section" id="certifications">
      <div className="pl-[8%] pr-[4%] w-full" ref={containerRef}>
        <h2 className="text-5xl md:text-6xl font-anton mb-20 text-left">Certifications</h2>

        <div className="grid gap-14">
          {CERTIFICATIONS.map((cert, index) => (
            <Link href={`/certifications/${cert.id}`} key={index} className="certification-item group">
              <div className="flex items-center gap-4 mb-3">
                <Award className="text-primary h-8 w-8 group-hover:scale-110 transition-transform" />
                <p className="text-5xl font-anton leading-none group-hover:text-primary transition-colors">
                  {cert.name}
                </p>
              </div>
              <div className="ml-12 flex justify-between items-end">
                <div>
                  <p className="text-xl text-muted-foreground">{cert.issuer}</p>
                  <p className="text-lg text-muted-foreground">{cert.year}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary">
                  View details <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
