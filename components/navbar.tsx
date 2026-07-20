"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X, Lightbulb } from "lucide-react"

const navItems = [
  { label: "Our Services", href: "#services" },
  { label: "Company", href: "#company" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
]

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const navRef = useRef<HTMLDivElement>(null)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 rounded-full bg-[#0a0a0a] backdrop-blur-md border border-zinc-800"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <Lightbulb className="text-zinc-950" size={16} />
          </div>
          <span className="font-semibold text-white hidden sm:block">IdealIsa</span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center h-8 p-0.5 bg-white rounded-full border border-zinc-300">
            <button
              onClick={() => setLanguage("pt")}
              className={`h-7 px-2.5 rounded-full text-xs transition-colors ${
                language === "pt" ? "bg-[#2E7D32] text-white font-bold" : "bg-transparent text-zinc-800"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`h-7 px-2.5 rounded-full text-xs transition-colors ${
                language === "en" ? "bg-[#2E7D32] text-white font-bold" : "bg-transparent text-zinc-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-zinc-800 my-2" />
            <div className="flex items-center h-8 p-0.5 bg-white rounded-full border border-zinc-300 self-start">
              <button
                onClick={() => setLanguage("pt")}
                className={`h-7 px-2.5 rounded-full text-xs transition-colors ${
                  language === "pt" ? "bg-[#2E7D32] text-white font-bold" : "bg-transparent text-zinc-800"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`h-7 px-2.5 rounded-full text-xs transition-colors ${
                  language === "en" ? "bg-[#2E7D32] text-white font-bold" : "bg-transparent text-zinc-800"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
