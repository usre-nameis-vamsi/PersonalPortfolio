"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useEffect } from "react"

gsap.registerPlugin(useGSAP)

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  // Helper to end preloader safely
  const finish = () => {
    // Re-enable scrolling
    document.body.style.overflow = ""
    // Hide preloader
    if (preloaderRef.current) {
      preloaderRef.current.style.opacity = "0"
      preloaderRef.current.style.pointerEvents = "none"
      // remove from layout after fade
      setTimeout(() => {
        if (preloaderRef.current) preloaderRef.current.style.display = "none"
      }, 400)
    }
  }

  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = "hidden"

    // Absolute fallback: hide preloader after 6s no matter what
    const failSafe: number = window.setTimeout(finish, 6000)

    return () => {
      // Re-enable scrolling after unmount
      document.body.style.overflow = ""
      window.clearTimeout(failSafe)
    }
  }, [])

  useGSAP(() => {
    // Guard: if no DOM (or ref missing), bail fast
    if (!preloaderRef.current) return

    try {
      const counter = { value: 0 }

      // Show preloader immediately
      gsap.set(preloaderRef.current, { autoAlpha: 1 })
      // Show name/message immediately
      gsap.set([".first-name", ".last-name", ".loading-message"], { y: 0, opacity: 1 })

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })

      // Animate counter 0 -> 100 over exactly 5s
      tl.to(counter, {
        value: 100,
        duration: 5,
        onUpdate: () => {
          if (progressRef.current) progressRef.current.style.width = counter.value + "%"
          if (counterRef.current) {
            const remaining = Math.max(0, Math.round(5 - (counter.value / 100) * 5))
            counterRef.current.textContent = `${remaining} sec`
          }
        },
      })

      // Hide the preloader at the end
      tl.to(preloaderRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        onComplete: finish,
      })
    } catch (err) {
      // If anything goes wrong with GSAP, finish quickly
      finish()
    }
  }, [])

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div ref={nameRef} className="text-center mb-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="first-name text-6xl md:text-8xl font-anton mb-2 text-white">vamsi</h2>
          <h2 className="last-name text-6xl md:text-8xl font-anton text-primary">chanumolu</h2>
        </div>
      </div>

      <div className="w-64 h-1 bg-foreground/10 rounded-full overflow-hidden mb-2">
        <div ref={progressRef} className="h-full bg-primary rounded-full w-0"></div>
      </div>

      <p className="loading-message text-sm text-foreground/70 mt-4">
        Wait portfolio will load in <span ref={counterRef}>5 sec</span>
      </p>
    </div>
  )
}

export default Preloader
