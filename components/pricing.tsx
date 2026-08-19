"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/language-context"

const serviceLevels = ["starters", "growth", "established"] as const

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslation()

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-black mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            {t.pricing.heading}
          </h2>
          <p className="text-black max-w-2xl mx-auto">{t.pricing.subheading}</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6"
        >
          {serviceLevels.map((serviceLevel, index) => {
            const service = t.pricing.plans[serviceLevel]

            return (
              <motion.div
                key={serviceLevel}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative h-full flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  serviceLevel === "growth"
                    ? "bg-zinc-100/90 border-[#4A3127]/60"
                    : "bg-zinc-100/70 border-[#4A3127]/25 hover:border-[#4A3127]/50"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{service.name}</h3>
                  <p className="text-black text-sm">{service.focus}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-black">
                      <Check className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" strokeWidth={1.5} />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="lg"
                  className="mt-auto w-full rounded-full px-8 h-12 text-base font-medium bg-[#2E7D32] text-white border border-[#2E7D32] hover:bg-[#256428] hover:border-[#256428] dark:bg-[#2E7D32] dark:border-[#2E7D32] dark:hover:bg-[#256428] dark:hover:border-[#256428]"
                >
                  {t.pricing.cta}
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
