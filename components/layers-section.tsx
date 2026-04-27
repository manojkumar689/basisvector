"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import {
  BarChart3,
  Wrench,
  Puzzle,
  TrendingUp,
  Cog,
  ArrowRight,
  FileText,
  Target,
  Award,
} from "lucide-react"

const layerSections = [
  {
    num: "01",
    tag: "Benchmark",
    title: "Diagnose before you deploy.",
    desc: "Six structured diagnostics quantify value leakage before any execution capital is committed.",
    accent: "#3b82f6",
    bg: "oklch(0.21 0.014 254)",
    cards: [
      { icon: BarChart3, label: "GTM Diagnostics", links: ["GTM Efficiency Audit", "NRR & Retention Drivers"] },
      { icon: Wrench, label: "Cost & Technical", links: ["Cost Structure Teardown", "Technical Diligence"] },
      { icon: Puzzle, label: "Product & Data", links: ["Product Gap Analysis", "Data Maturity Assessment"] },
    ],
    cta: { label: "Full Benchmark Layer", href: "/framework#benchmark" },
  },
  {
    num: "02",
    tag: "Rebuild",
    title: "The Execution Engine.",
    desc: "Revenue, Cost, and Product engines deployed simultaneously -- each targeting a distinct lever.",
    accent: "#06b6d4",
    bg: "oklch(0.22 0.014 254)",
    cards: [
      { icon: TrendingUp, label: "Revenue up", links: ["GTM Engineering", "Pricing Architecture", "Expansion Playbooks"] },
      { icon: Cog, label: "Cost down", links: ["Offshore Substitution", "AI Automation", "Vendor Compression"] },
      { icon: Puzzle, label: "Multiple up", links: ["AI-Native Workflows", "Data Moat Build", "Retention Loops"] },
    ],
    cta: { label: "Full Rebuild Layer", href: "/framework#rebuild" },
  },
  {
    num: "03",
    tag: "Compound",
    title: "Build the multiple before the process.",
    desc: "Metrics normalization, NRR above 110%, and the exit narrative that commands a multiple premium.",
    accent: "#8b5cf6",
    bg: "oklch(0.23 0.014 254)",
    cards: [
      { icon: BarChart3, label: "Metrics & Reporting", links: ["Metrics Normalization", "Investor-Grade Reporting"] },
      { icon: TrendingUp, label: "NRR & Multiple", links: ["NRR >110% Systems", "Multiple Expansion Playbook"] },
      { icon: Target, label: "Exit Narrative", links: ["Exit Narrative Construction"] },
    ],
    cta: { label: "Full Compound Layer", href: "/framework#compound" },
  },
  {
    num: "04",
    tag: "Exit Readiness",
    title: "Diligence-ready. Narrative-tight.",
    desc: "Investor-grade data room, buyer-specific narrative, and management presentation.",
    accent: "#f59e0b",
    bg: "oklch(0.24 0.014 254)",
    cards: [
      { icon: FileText, label: "Audited Financials", links: ["LTV/CAC by segment", "Cohort & retention data"] },
      { icon: Target, label: "Buyer Framing", links: ["Buyer-pool mapping", "Category narrative"] },
      { icon: Award, label: "CEO/CFO Readiness", links: ["MBR-ready deck", "Management coaching"] },
    ],
    cta: { label: "Full Exit Layer", href: "/framework#exit-readiness" },
  },
]

function StickyLayerCard({ layer, index }: { layer: (typeof layerSections)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div
      ref={ref}
      className="sticky"
      style={{
        top: `${100 + index * 20}px`,
        zIndex: 10 + index,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/[0.08] p-8 shadow-2xl shadow-black/20 backdrop-blur-sm lg:p-10"
        style={{ background: layer.bg }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${layer.accent}40, transparent)` }}
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left: text */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: layer.accent }}>
                {layer.tag}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">{layer.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/35">{layer.desc}</p>
            <Link
              href={layer.cta.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: layer.accent }}
            >
              {layer.cta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Right: cards */}
          <div className="flex-1 grid gap-3 sm:grid-cols-3">
            {layer.cards.map((card) => (
              <div
                key={card.label}
                className="group rounded-xl border border-white/[0.05] bg-white/[0.03] p-5 transition-all hover:bg-white/[0.06] hover:border-white/[0.1]"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                  style={{ background: `${layer.accent}12`, color: layer.accent }}
                >
                  <card.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white/80">{card.label}</h4>
                <div className="mt-2.5 space-y-1.5">
                  {card.links.map((l) => (
                    <p key={l} className="flex items-center gap-1.5 text-xs text-white/30">
                      <span className="h-1 w-1 rounded-full" style={{ background: layer.accent }} />
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function LayersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Deep Dive
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Explore Each Layer
          </h2>
          <p className="mt-3 text-base text-white/35">
            Every diagnostic, module, and playbook -- organized by the four transformation layers.
          </p>
        </motion.div>

        {/* Sticky scrolling layers */}
        <div className="space-y-8">
          {layerSections.map((layer, i) => (
            <StickyLayerCard key={layer.num} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
