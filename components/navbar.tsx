"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage, useTranslation } from "@/lib/language-context"

const navLinkFontWeight = "font-medium"

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = useTranslation()
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { label: t.navbar.services, href: "#services" },
    { label: t.navbar.company, href: "#company" },
    { label: t.navbar.blog, href: "#blog" },
    { label: t.navbar.contact, href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 rounded-full bg-[#4A3127] backdrop-blur-md border border-zinc-800"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <Image
              src="/idealisa-logo.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain p-0.5"
            />
          </div>
          <span className="notranslate font-semibold text-white hidden sm:block" aria-label="Idealisa" translate="no">
            <span aria-hidden="true">
              <span>Id</span>
              <span className="text-[#F6C744]">e</span>
              <span>al</span>
              <span className="relative inline-block">
                {"ı"}
                <span className="absolute left-1/2 top-[0.2em] h-[0.16em] w-[0.16em] -translate-x-1/2 rounded-full bg-[#F6C744]" />
              </span>
              <span>sa</span>
            </span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors ${navLinkFontWeight}`}
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
                className={`px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${navLinkFontWeight}`}
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
