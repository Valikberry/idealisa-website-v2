"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starters",
    description: "Perfect for Small Companies in Angola",
    price: "183.600,00 Kz",
    features: ["Consultation", "Positioning", "Diagnose", "Discover", "Understand", "Assess", "Listen"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Perfect for Medium-Size Companies in Angola",
    price: "383.600,00 Kz",
    priceSuffix: "/month",
    features: [
      "Everything in Starters",
      "Website Setup",
      "Social Media Management",
      "SEO Basics",
      "Marketing Materials",
      "Sales Team Training",
    ],
    cta: "Let's Build Together",
    highlighted: true,
  },
  {
    name: "Established",
    description: "Perfect for Enterprise / Organisation-Size Companies in Angola",
    price: "683.600,00 Kz",
    priceSuffix: "/month",
    features: [
      "Everything in Starters & Growth",
      "Full Marketing Strategy",
      "Advanced SEO & Digital Advertising",
      "Brand Communication Planning",
      "Ongoing Social Media Management",
      "Sales Team Development",
    ],
    cta: "Let's Build Together",
    highlighted: false,
  },
]

const customPlan = {
  name: "Custom Solutions",
  price: "Let's Talk",
  description:
    "Every business is different. Tell us what your company needs, and we'll build a plan around it — no fixed packages, no guesswork. We'll discuss your goals and send you a proposal built specifically for you.",
  features: ["Tailored Strategy", "Custom Scope", "Direct Consultation", "Flexible Pricing"],
  cta: "Contact on WhatsApp",
}

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
            Our Pricing and Offer for Our Basic Services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            We help all sort of business with minimum offer to custom so all business can benefit
          </p>

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
              <span className="relative z-10">Basic</span>
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
              <span className="relative z-10">Custom</span>
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
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-zinc-900 border-zinc-700"
                    : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600"
                }`}
              >
                {plan.highlighted && <BorderBeam />}

                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-zinc-950 text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.priceSuffix && <span className="text-zinc-400 text-sm">{plan.priceSuffix}</span>}
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
                    plan.highlighted
                      ? "shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
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
                <h3 className="text-xl font-semibold text-white mb-2">{customPlan.name}</h3>
                <p className="text-zinc-400 text-sm">{customPlan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{customPlan.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {customPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-full shimmer-btn bg-white text-zinc-950 hover:bg-zinc-200">
                {customPlan.cta}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
