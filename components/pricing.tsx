"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/language-context"

const planConfigs = [
  { id: "starters", price: "183.600,00 Kz", hasSuffix: false, highlighted: false },
  { id: "growth", price: "383.600,00 Kz", hasSuffix: true, highlighted: true },
  { id: "established", price: "683.600,00 Kz", hasSuffix: true, highlighted: false },
] as const

function BorderBeam() {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <div
        className="absolute w-24 h-24 bg-white/20 blur-xl border-beam"
        style={{
          offsetPath: "rect(0 100% 100% 0 round 16px)",
        }}
      />
    </div>
  )
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [planType, setPlanType] = useState<"basic" | "custom">("basic")
  const t = useTranslation()

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            {t.pricing.heading}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">{t.pricing.subheading}</p>

          {/* Plan Type Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setPlanType("basic")}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                planType === "basic" ? "text-white" : "text-zinc-400"
              }`}
            >
              {planType === "basic" && (
                <motion.div
                  layoutId="billing-toggle"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.pricing.toggleBasic}</span>
            </button>
            <button
              onClick={() => setPlanType("custom")}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                planType === "custom" ? "text-white" : "text-zinc-400"
              }`}
            >
              {planType === "custom" && (
                <motion.div
                  layoutId="billing-toggle"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.pricing.toggleCustom}</span>
            </button>
          </div>
        </motion.div>

        {planType === "basic" ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {planConfigs.map((config, index) => {
              const plan = t.pricing.plans[config.id]
              return (
                <motion.div
                  key={config.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                    config.highlighted
                      ? "bg-zinc-900 border-zinc-700"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  {config.highlighted && <BorderBeam />}

                  {config.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-zinc-950 text-xs font-medium rounded-full">
                      {t.pricing.mostPopular}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-zinc-400 text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{config.price}</span>
                      {config.hasSuffix && (
                        <span className="text-zinc-400 text-sm">{t.pricing.priceSuffixMonth}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full ${
                      config.highlighted
                        ? "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full max-w-sm p-6 rounded-2xl border bg-zinc-900 border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <BorderBeam />

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.custom.name}</h3>
                <p className="text-zinc-400 text-sm">{t.pricing.custom.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{t.pricing.custom.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {t.pricing.custom.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-full shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200">
                {t.pricing.custom.cta}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
