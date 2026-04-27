"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const companies = [
  {
    name: "Vorro",
    logo: "/images/portfolio/vorro-logo.png",
    sector: "Healthcare SaaS",
    location: "Florida",
    tag: "HEALTHCARE SAAS",
    tagColor: "#3b82f6",
    desc: "AI healthcare solutions that reduce manual work, improve clinical visibility, and enable smarter decision-making through data integration.",
    href: "/portfolio#vorro",
  },
  {
    name: "Cadient",
    logo: "/images/portfolio/cadient-logo.png",
    sector: "HR Tech",
    location: "North Carolina",
    tag: "HR TECH",
    tagColor: "#ef4444",
    desc: "AI-powered high-volume hiring platform with SmartSuite for predictive candidate assessment and hiring quality at scale.",
    href: "/portfolio#cadient",
  },
  {
    name: "CV3",
    logo: "/images/portfolio/cv3-logo.png",
    sector: "eCommerce SaaS",
    location: "Florida",
    tag: "ECOMMERCE SAAS",
    tagColor: "#f59e0b",
    desc: "AI eCommerce platform driving performance-based growth through data intelligence, automation, and continuous optimization.",
    href: "/portfolio#cv3",
  },
  {
    name: "Infinita Lab",
    logo: "/images/portfolio/infinita-logo.png",
    sector: "Materials Science SaaS",
    location: "California",
    tag: "MATERIALS SCIENCE",
    tagColor: "#eab308",
    desc: "Accelerates R&D through fast, accredited materials testing and expert insights for engineering teams.",
    href: "/portfolio#infinita-lab",
  },
  {
    name: "Agrim AI",
    logo: "/images/portfolio/agrim-logo.png",
    sector: "Enterprise AI",
    location: "Global",
    tag: "ENTERPRISE AI",
    tagColor: "#8b5cf6",
    desc: "Custom AI solutions and automation through AgrimOS -- an enterprise transformation platform for AI-native operations.",
    href: "/portfolio#agrim-ai",
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-[oklch(0.19_0.014_255)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Portfolio</h2>
          <div className="mt-3 h-0.5 w-12 rounded-full bg-primary" />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/35">
            Five acquisitions. Five structural theses. The BVC framework deployed across Revenue, Cost, and Product
            levers -- repeatable across sectors, company types, and failure modes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] hover:-translate-y-1"
              >
                {/* Logo */}
                <div className="flex h-16 items-center justify-center rounded-xl bg-white px-4 py-2">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={140}
                    height={50}
                    className="h-8 w-auto object-contain"
                    style={{ width: "auto" }}
                  />
                </div>

                {/* Tag */}
                <div className="mt-4">
                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                    style={{
                      borderColor: `${c.tagColor}30`,
                      color: c.tagColor,
                      background: `${c.tagColor}10`,
                    }}
                  >
                    {c.tag} &middot; {c.location.toUpperCase()}
                  </span>
                </div>

                {/* Desc */}
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-white/35">{c.desc}</p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.08] px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/[0.15]"
          >
            {"View Full Portfolio "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
