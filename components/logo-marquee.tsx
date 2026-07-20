"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "@/lib/language-context"

const logos = [
  { name: "Rio Branco Diamantes", width: 100 },
  { name: "Coroa Azul Piscinas", width: 80 },
  { name: "O Leme Educare", width: 90 },
  { name: "Fundação AHAVE", width: 100 },
  { name: "The Wine Court", width: 70 },
  { name: "Diesel Barbershop", width: 90 },
  { name: "Angola Sessions", width: 100 },
  { name: "Café Baía", width: 90 },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslation()

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">{t.logoMarquee.heading}</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] h-16 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="font-medium" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
