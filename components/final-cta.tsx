"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/language-context"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslation()

  return (
    <section className="py-24 px-4 bg-[#F4F4F5]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          {t.finalCta.heading}
        </h2>
        <p className="text-lg sm:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto">{t.finalCta.subheading}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-white/20"
          >
            {t.finalCta.ctaPrimary}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium border-zinc-300 text-zinc-700 hover:bg-white hover:text-black hover:border-zinc-400 bg-transparent"
          >
            {t.finalCta.ctaSecondary}
          </Button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">{t.finalCta.finePrint}</p>
      </motion.div>
    </section>
  )
}
