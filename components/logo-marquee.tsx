"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useTranslation } from "@/lib/language-context"

type Logo = {
  name: string
  width: number
  src?: string
}

const logos: Logo[] = [
  { name: "Coroa Azul Piscinas", width: 80 },
  { name: "MALAMU", width: 100, src: "/malamu.png" },
  { name: "O Leme Educare", width: 90 },
  { name: "AZORIA", width: 100, src: "/azoria.png" },
  { name: "Fundação AHAVE", width: 100 },
  { name: "EJS GLOBAL", width: 100, src: "/ejs-global.png" },
  { name: "The Wine Court", width: 70 },
  { name: "Rio Branco Diamantes", width: 100, src: "/rio-branco.png" },
  { name: "Diesel Barbershop", width: 90 },
  { name: "FCKS", width: 100, src: "/fcks.png" },
  { name: "Angola Sessions", width: 100 },
  { name: "JBDM", width: 100, src: "/jbdm.png" },
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
              className="flex items-center justify-center min-w-[160px] h-16 mx-8"
            >
              {logo.src ? (
                <div className="relative h-10 w-[140px]">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="140px"
                    className="object-contain brightness-0 invert opacity-100"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-white opacity-100">
                  <span className="font-medium" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                    {logo.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
