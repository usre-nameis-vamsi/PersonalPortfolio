"use client"
import { useGSAP } from "@gsap/react"
import type React from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef, useState } from "react"
import { Send, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const LOCATIONS = [
  {
    name: "KL University",
    address: "KL University, Vaddeswaram, Andhra Pradesh",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6209966332!2d80.62088307489!3d16.44193628347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20University!5e0!3m2!1sen!2sin!4v1716142000000!5m2!1sen!2sin",
  },
]

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeLocation, setActiveLocation] = useState(0)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

      tl.from(".contact-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      })
    },
    { scope: containerRef },
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent("Portfolio Contact Form")
      const body = encodeURIComponent(`
        Name: ${formState.name}
        Email: ${formState.email}
        Phone: ${formState.phone}
        
        Message:
        ${formState.message}
      `)

      // Open mailto link
      window.location.href = `mailto:vamsichanumolu72@gmail.com?subject=${subject}&body=${body}`

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20" id="contact" ref={containerRef}>
      <div className="pl-[8%] pr-[4%] w-full">
        <h2 className="text-5xl md:text-6xl font-anton mb-20 text-left">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="contact-item">
            <h3 className="text-3xl font-anton mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-background-light border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-background-light border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-background-light border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-background-light border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 interactive"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {submitSuccess && <p className="text-green-500 text-center">Message sent successfully!</p>}
            </form>
          </div>

          <div className="contact-item space-y-6">
            <h3 className="text-3xl font-anton mb-6">My Location</h3>

            <div className="bg-background-light p-4 rounded-md mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <p>{LOCATIONS[activeLocation].address}</p>
              </div>
            </div>

            <div className="h-[300px] rounded-md overflow-hidden">
              <iframe
                src={LOCATIONS[activeLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${LOCATIONS[activeLocation].name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
