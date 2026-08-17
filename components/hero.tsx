"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/language-context"

const avatars = [
  "/professional-headshot-1.png",
  "/professional-headshot-2.png",
  "/professional-headshot-3.png",
  "/professional-headshot-4.png",
  "/professional-headshot-5.png",
]

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export function Hero() {
  const t = useTranslation()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#ffffff] pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-zinc-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f4f5] border border-[#e5e5e5]"
        >
          <span className="w-2 h-2 rounded-full bg-[#16a34a] pulse-glow" />
          <span className="text-sm text-[#3f3f46]">{t.hero.badge}</span>
        </motion.div>

        <div className="relative pt-8 pb-6">
          {/* Decorative watermark */}
          <img
            src="/idealisa-hero-watermark.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 pointer-events-none select-none"
          />

          {/* Headline with text mask animation */}
          <h1
            className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0a0a] mb-6"
            style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
          >
            <span className="block overflow-hidden">
              <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
                {t.hero.headlineLine1}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[#71717a]"
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                {t.hero.headlineLine2}
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative z-10 text-lg sm:text-xl text-[#52525b] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="shimmer-btn bg-[#d97706] text-[#ffffff] hover:bg-[#b45309] rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-white/10"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium bg-[#2E7D32] text-[#ffffff] border border-[#2E7D32] hover:bg-[#256428] hover:border-[#256428] dark:bg-[#2E7D32] dark:border-[#2E7D32] dark:hover:bg-[#256428] dark:hover:border-[#256428]"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4 mt-10"
        >
          <div className="flex items-center -space-x-3">
            {avatars.map((avatar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                <img
                  src={avatar || "/placeholder.svg"}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-[#ffffff] ring-2 ring-[#e5e5e5] object-cover"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#71717a]">
            {t.hero.trustPrefix && <>{t.hero.trustPrefix} </>}
            <span className="text-[#0a0a0a] font-bold">{t.hero.trustNumber}</span>{" "}
            {t.hero.trustSuffix}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
