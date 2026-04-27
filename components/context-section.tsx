"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { DollarSign, Building2, Gauge, ArrowRight } from "lucide-react"

const cards = [
  {
    icon: DollarSign,
    title: "$5M — $30M ARR",
    desc: "B2B SaaS with validated product-market fit but operational infrastructure not yet built for margin expansion, NRR compounding, or exit multiple construction.",
    accent: "#3b82f6",
    iconBg: "#eff6ff",
  },
  {
    icon: Building2,
    title: "PE-Backed or Sponsor-Led",
    desc: "Institutional ownership creates the alignment and time-bound accountability that makes a structural operating engagement commercially rational.",
    accent: "#06b6d4",
    iconBg: "#ecfeff",
  },
  {
    icon: Gauge,
    title: "Measurable Performance Gaps",
    desc: "Growth below 20% YoY, margins below 65%, or NRR below 105% — quantifiable headroom across at least two levers that the BVC framework is calibrated to close.",
    accent: "#8b5cf6",
    iconBg: "#f5f3ff",
  },
]

export function ContextSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Context
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Lower Middle Market SaaS Operating Model
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
            The BVC framework is calibrated for a specific profile of PE-backed software business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }}
              />
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: c.iconBg, color: c.accent }}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/about#context"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/[0.06] px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/[0.12]"
          >
            How We Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
