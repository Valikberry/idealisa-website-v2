"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Instagram, Facebook, Linkedin } from "lucide-react"
import { useTranslation } from "@/lib/language-context"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const t = useTranslation()

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Lightbulb className="text-zinc-950" size={16} />
              </div>
              <span className="font-semibold text-white">IdealIsa</span>
            </a>
            <p className="text-sm text-zinc-500 mb-4">{t.footer.tagline}</p>
            <div className="text-sm text-zinc-500 space-y-1">
              <p>Maculusso, Rua Lourenço Mendes da Conceição, Luanda, Angola</p>
              <p>+244 936 499 706 / +244 976 055 956 / +244 937 445 450</p>
              <p>geral@idealisa.ao</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(t.footer.columns).map(([key, column]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold text-white mb-4">{column.header}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} IdealIsa. {t.footer.copyrightSuffix}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              @idealisa.ao
            </a>
            <a
              href="#"
              aria-label="Idealisa on Facebook"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Idealisa on LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
