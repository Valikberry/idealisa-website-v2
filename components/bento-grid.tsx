"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Palette, MessageSquare, ClipboardList, TrendingUp, Award } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

const strategyStats = [
  { key: "identity", value: 89 },
  { key: "positioning", value: 93 },
  { key: "voice", value: 95 },
  { key: "branding", value: 95 },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, false, true])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-zinc-700"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslation()

  return (
    <section id="features" className="py-24 px-4 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-black mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            {t.bentoGrid.heading}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{t.bentoGrid.subheading}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - System Status */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-[#4A3127] border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="p-2 rounded-full bg-black w-fit mb-4">
                  <Palette className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.bentoGrid.strategy.title}</h3>
                <p className="text-white text-sm">{t.bentoGrid.strategy.description}</p>
              </div>
              <SystemStatus />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {strategyStats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}%</div>
                  <div className="text-xs text-white">{t.bentoGrid.strategy.stats[stat.key]}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Command Palette */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-[#4A3127] border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-black w-fit mb-4">
              <MessageSquare className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t.bentoGrid.communication.title}</h3>
            <p className="text-white text-sm mb-6">{t.bentoGrid.communication.description}</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-black border border-zinc-700 rounded text-white font-mono">
                {t.bentoGrid.communication.badgeAvailability}
              </span>
              <span className="px-2 py-1 text-xs bg-black border border-zinc-700 rounded text-white font-mono">
                {t.bentoGrid.communication.badgeVoice}
              </span>
            </div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-[#4A3127] border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-black w-fit mb-4">
              <ClipboardList className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t.bentoGrid.projectManagement.title}</h3>
            <p className="text-white text-sm mb-4">{t.bentoGrid.projectManagement.description}</p>
          </motion.div>

          {/* Performance */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-[#4A3127] border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-black w-fit mb-4">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t.bentoGrid.marketing.title}</h3>
            <p className="text-white text-sm mb-4">{t.bentoGrid.marketing.description}</p>
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="font-mono">{t.bentoGrid.marketing.statNumber}</span>
              <span className="text-white">{t.bentoGrid.marketing.statLabel}</span>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-[#4A3127] border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-black w-fit mb-4">
              <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t.bentoGrid.whyChoose.title}</h3>
            <p className="text-white text-sm mb-4">{t.bentoGrid.whyChoose.description}</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-black rounded text-white">
                {t.bentoGrid.whyChoose.badgeConsistency}
              </span>
              <span className="px-2 py-1 text-xs bg-black rounded text-white">
                {t.bentoGrid.whyChoose.badgeImpact}
              </span>
              <span className="px-2 py-1 text-xs bg-black rounded text-white">
                {t.bentoGrid.whyChoose.badgeInnovation}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
