"use client"

import type React from "react"

import Image from "next/image"
import { useState, useCallback } from "react"
import { Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  src?: string
  alt?: string
}

export default function ProfileCard({ className, src = "/images/vamsi-profile.jpg", alt = "Vamsi Chanumolu" }: Props) {
  const [flipped, setFlipped] = useState(false)

  const toggle = useCallback(() => setFlipped((v) => !v), [])
  const onKey = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggle()
      }
    },
    [toggle],
  )

  return (
    <div className={cn("slide-up-and-fade", className)}>
      <div className="rounded-2xl p-1 bg-gradient-to-b from-primary/40 to-secondary/40">
        <div className="rounded-2xl p-1 bg-background" style={{ perspective: "1000px" }}>
          <div
            role="button"
            tabIndex={0}
            aria-label="Flip profile card"
            aria-pressed={flipped}
            onClick={toggle}
            onKeyDown={onKey}
            className={cn(
              "relative rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary",
              "transition-transform duration-500 ease-out",
            )}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className={cn(
                "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
                flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]",
              )}
            >
              {/* FRONT: Photo */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 320px, 340px"
                    className="object-center select-none"
                    priority
                  />
                </div>

                <div className="absolute inset-0 rounded-xl ring-1 ring-border/40 pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground/60 bg-background/40 px-2 py-0.5 rounded-full">
                  Click to flip
                </div>
              </div>

              {/* BACK: Contact Details */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="absolute inset-0 rounded-xl bg-background-light/80 backdrop-blur-sm border border-border p-4 flex items-center justify-center">
                  <div className="text-left space-y-3">
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="text-xl font-anton leading-tight">Vamsi Mohan Krishna Chanumolu</p>
                    <a href="tel:6300565465" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={16} /> 6300565465
                    </a>
                    <a
                      href="mailto:vamsichanumolu72@gmail.com"
                      className="flex items-center gap-2 hover:text-primary transition-colors break-all"
                    >
                      <Mail size={16} /> vamsichanumolu72@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={toggle}
                      className="mt-2 text-xs text-muted-foreground hover:text-foreground underline"
                    >
                      Flip back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
