"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Instagram } from "lucide-react"

const footerLinks = {
  Services: [
    "Strategy & Branding",
    "Corporate Communication",
    "Project Management",
    "Marketing & Digital Communication",
    "Technology & Digital Solutions",
  ],
  Resources: ["Who We Are", "What We Do", "Blog", "Our Clients", "Training & Development"],
  Company: ["About IdealIsa", "Careers", "Our Culture", "Testimonials", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Our Commitment", "Mission & Values", "Our Essence"],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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
            <p className="text-sm text-zinc-500 mb-4">
              Strategy that positions. Communication that strengthens.
            </p>
            <div className="text-sm text-zinc-500 space-y-1">
              <p>Maculusso, Rua Lourenço Mendes da Conceição, Luanda, Angola</p>
              <p>+244 936 499 706 / +244 976 055 956 / +244 937 445 450</p>
              <p>geral@idealisa.ao</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
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
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} IdealIsa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              @idealisa.ao
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
