"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "@/lib/language-context"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const t = useTranslation()

  return (
    <footer ref={ref} className="border-t border-white/20 bg-[#4A3127] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5"
        >
          <div>
            <p className="mb-4 text-xl font-semibold text-white">Idealisa</p>
            <p className="max-w-48 text-sm leading-6 text-white">{t.footer.tagline}</p>
          </div>

          {Object.entries(t.footer.columns).map(([key, column]) => (
            <div key={key}>
              <h4 className="mb-4 text-sm font-semibold text-white">{column.header}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link} className="text-sm leading-5 text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-white/20 pt-8 text-sm text-white lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] lg:items-start"
        >
          <p className="text-white">
            &copy; {new Date().getFullYear()} IdealIsa. {t.footer.copyrightSuffix}
          </p>

          <div className="space-y-2 text-white lg:text-center">
            <p>Maculusso, Rua Lourenço Mendes da Conceição, Luanda, Angola</p>
            <p>+244 936 499 706 / +244 976 055 956 / +244 937 445 450</p>
            <p>geral@idealisa.ao</p>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-normal text-white lg:justify-end"
            aria-label="Idealisa social networks"
          >
            <a
              href="https://www.linkedin.com/company/139724042/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Idealisa on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/IdealIsamkt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Idealisa on Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/idealisa.ao/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Idealisa on Instagram"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
