"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import {
  Search,
  Cog,
  TrendingUp,
  Flag,
  ArrowRight,
  BarChart3,
  Zap,
  ShieldCheck,
  Layers,
} from "lucide-react"

const layers = [
  {
    num: "01",
    tag: "Benchmark",
    title: "Diagnose value leakage across six dimensions.",
    desc: "A structured diagnostic maps gaps across GTM efficiency, gross margin, NRR, AI adoption, data maturity, and product-market fit -- before a single dollar of execution capital is deployed.",
    icon: Search,
    accent: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    borderGlow: "shadow-blue-500/10",
    items: ["GTM Efficiency Audit", "Cost Structure Teardown", "Product Gap Analysis", "NRR & Retention Drivers", "Data Maturity Assessment", "Technical Diligence"],
    stat: { value: "6", label: "Diagnostic Dimensions" },
  },
  {
    num: "02",
    tag: "Rebuild",
    title: "Deploy three engines simultaneously.",
    desc: "Revenue rebuilt for AI-assisted GTM. Cost restructured through offshore leverage. Product rebuilt for outcome delivery. Three coordinated engines -- unified accountability.",
    icon: Cog,
    accent: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    borderGlow: "shadow-cyan-500/10",
    items: ["Revenue Engine", "Cost Engine", "Product Engine"],
    subItems: [
      ["GTM Engineering", "Pricing Architecture", "Expansion Playbooks"],
      ["Offshore Substitution", "AI Automation", "Vendor Compression"],
      ["AI-Native Workflows", "Data Moat Build", "Retention Loops"],
    ],
    stat: { value: "3", label: "Parallel Engines" },
  },
  {
    num: "03",
    tag: "Compound",
    title: "Build compounding value with data moats.",
    desc: "Proprietary data assets and AI-native workflows raise NRR above 110%, deepen switching costs, and construct the narrative that commands a premium multiple.",
    icon: TrendingUp,
    accent: "#8b5cf6",
    gradient: "from-violet-500/20 to-violet-600/5",
    borderGlow: "shadow-violet-500/10",
    items: ["Metrics Normalization (CFO Layer)", "NRR >110% Systems", "Exit Narrative Construction", "Multiple Expansion Playbook", "Investor-Grade Reporting"],
    stat: { value: "110%+", label: "NRR Target" },
  },
  {
    num: "04",
    tag: "Exit Readiness",
    title: "Maximize multiple with clean governance.",
    desc: "Investor-grade data room, auditable KPI dashboards, and clean EBITDA governance -- built 12-18 months before process starts.",
    icon: Flag,
    accent: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-600/5",
    borderGlow: "shadow-amber-500/10",
    items: ["Investor-Grade Data Room", "Buyer Narrative Construction", "Management Presentation"],
    stat: { value: "12-18", label: "Months Pre-Exit" },
  },
]

export function FrameworkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[oklch(0.16_0.014_255)]">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] px-5 py-2">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              The BVC Framework
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance leading-[1.1]">
            Four Layers.{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              One Operating System.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/45 lg:text-lg">
            A sequential architecture where each layer&apos;s output is the precondition for the next --
            designed to transform underperforming SaaS into durable, profitable platforms.
          </p>
        </motion.div>

        {/* Visual progress bar connecting the 4 layers */}
        <div className="relative mb-20 hidden lg:block">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring" }}
                className="relative z-10 flex flex-col items-center"
                onMouseEnter={() => setHoveredLayer(i)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <motion.div
                  animate={hoveredLayer === i ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative cursor-pointer"
                >
                  {/* Glow */}
                  <div
                    className="absolute -inset-3 rounded-full blur-xl transition-opacity duration-500"
                    style={{
                      background: layer.accent,
                      opacity: hoveredLayer === i ? 0.25 : 0.08,
                    }}
                  />
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300"
                    style={{
                      borderColor: hoveredLayer === i ? layer.accent : `${layer.accent}40`,
                      background: `${layer.accent}${hoveredLayer === i ? "25" : "10"}`,
                    }}
                  >
                    <layer.icon className="h-6 w-6" style={{ color: layer.accent }} />
                  </div>
                </motion.div>
                <span
                  className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{ color: hoveredLayer === i ? layer.accent : `${layer.accent}80` }}
                >
                  L{layer.num}
                </span>
                <span className="mt-0.5 text-[10px] text-white/40">{layer.tag}</span>
              </motion.div>
            ))}
          </div>
          {/* Connecting line */}
          <div className="absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-500/30 via-cyan-500/30 via-violet-500/30 to-amber-500/30" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="absolute top-8 left-[15%] right-[15%] h-px origin-left bg-gradient-to-r from-blue-500/60 via-cyan-500/60 via-violet-500/60 to-amber-500/60"
          />
        </div>

        {/* Layer Cards - Bento grid layout */}
        <div className="grid gap-5 lg:grid-cols-2">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] transition-all duration-500 hover:border-white/[0.12] ${layer.borderGlow} hover:shadow-2xl`}
              style={{ background: `oklch(0.20 0.013 254)` }}
            >
              {/* Top accent gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-60 transition-opacity group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${layer.accent}, transparent)` }}
              />

              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative p-7 lg:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${layer.accent}15`, color: layer.accent }}
                    >
                      <layer.icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold" style={{ color: layer.accent }}>
                          L{layer.num}
                        </span>
                        <span className="text-[10px] text-white/25">|</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `${layer.accent}cc` }}>
                          {layer.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-white/90 leading-snug lg:text-xl">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  {/* Stat badge */}
                  <div
                    className="hidden shrink-0 rounded-xl px-4 py-2.5 text-center sm:block"
                    style={{ background: `${layer.accent}10`, border: `1px solid ${layer.accent}20` }}
                  >
                    <p className="text-xl font-bold" style={{ color: layer.accent }}>{layer.stat.value}</p>
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">{layer.stat.label}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/40">{layer.desc}</p>

                {/* Items */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-medium text-white/50 transition-all duration-300 hover:text-white/70"
                      style={{ borderColor: `${layer.accent}15`, background: `${layer.accent}05` }}
                    >
                      <span className="h-1 w-1 rounded-full" style={{ background: layer.accent }} />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Sub-items for Rebuild */}
                {layer.subItems && (
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {layer.subItems.map((group, gi) => (
                      <div key={gi} className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5">
                          {layer.items[gi]}
                        </p>
                        {group.map((sub) => (
                          <p key={sub} className="text-[10px] text-white/30 leading-relaxed">{sub}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-5">
                  <Link
                    href="/framework"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: layer.accent }}
                  >
                    Explore Layer
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="flex items-center gap-3 text-sm text-white/30">
            <BarChart3 className="h-4 w-4 text-primary/50" />
            Sequential dependency: each layer&apos;s output feeds the next
            <Zap className="h-4 w-4 text-primary/50" />
          </p>
          <Link
            href="/framework"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            Read the Full Framework
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
