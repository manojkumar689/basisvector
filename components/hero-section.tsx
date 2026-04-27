"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const rotatingWords = [
  "Revenue Growth",
  "Cost Efficiency",
  "AI Transformation",
  "Exit Readiness",
  "EBITDA Expansion",
]

const hubNodes = [
  { label: "GTM\nEngineering", x: 15, y: 18, color: "#3b82f6", delay: 0 },
  { label: "Revenue\nEngine", x: 78, y: 12, color: "#06b6d4", delay: 0.3 },
  { label: "AI\nAutomation", x: 88, y: 45, color: "#8b5cf6", delay: 0.6 },
  { label: "Cost\nOptimization", x: 80, y: 78, color: "#10b981", delay: 0.9 },
  { label: "Data Moat\nBuild", x: 18, y: 80, color: "#f59e0b", delay: 1.2 },
  { label: "Exit\nNarrative", x: 8, y: 48, color: "#ec4899", delay: 1.5 },
]

function HubDiagram() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Outer rings */}
      <div className="absolute inset-[15%] rounded-full border border-white/[0.04]" />
      <div className="absolute inset-[30%] rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[42%] rounded-full border border-dashed border-primary/15" />

      {/* Animated ring pulse */}
      <motion.div
        className="absolute inset-[30%] rounded-full border border-primary/10"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center hub */}
      <div className="absolute inset-[38%] flex items-center justify-center">
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20">
          <div className="text-center px-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60">Operating System</p>
            <p className="mt-1 text-sm font-bold text-white leading-tight">BVC<br/>Framework</p>
          </div>
        </div>
      </div>

      {/* Connection lines + Nodes */}
      {hubNodes.map((node) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: node.delay + 0.3 }}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-xl blur-xl opacity-20"
            style={{ background: node.color }}
          />
          {/* Card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            className="relative rounded-xl border border-white/[0.1] bg-[oklch(0.22_0.014_254_/_0.9)] px-3.5 py-2.5 backdrop-blur-md shadow-xl"
          >
            <div className="absolute -top-px left-3 right-3 h-px" style={{ background: `linear-gradient(90deg, transparent, ${node.color}, transparent)` }} />
            <p className="whitespace-pre-line text-center text-[11px] font-semibold leading-tight text-white/80">
              {node.label}
            </p>
          </motion.div>
        </motion.div>
      ))}

      {/* Connecting lines via SVG */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100">
        {hubNodes.map((node) => (
          <motion.line
            key={node.label}
            x1="50" y1="50"
            x2={node.x} y2={node.y}
            stroke={node.color}
            strokeWidth="0.3"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ duration: 1, delay: node.delay + 0.1 }}
          />
        ))}
      </svg>
    </div>
  )
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-60 -top-60 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.19_235_/_0.06)_0%,transparent_60%)]" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.19_235_/_0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-1.5 text-xs font-medium text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              PE Operating Partner for SaaS
            </motion.span>

            <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Build Durable,
              <br />
              Profitable{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  SaaS
                </span>
              </span>{" "}
              Businesses
            </h1>

            {/* Rotating text */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-white/30 font-medium">Powered by</span>
              <div className="relative h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block text-sm font-bold text-primary"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/40">
              We acquire underperforming B2B software companies and transform them
              with the BVC Framework -- our operator-led system for disciplined
              growth and profitability.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/framework"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
              >
                See How We Build Value
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:text-white"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-4 text-[11px] text-white/25">
              {["SOC 2 Type II", "Operational Excellence", "PE-Grade Governance"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3 w-3 text-primary/50" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Hub Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HubDiagram />
          </motion.div>
        </div>

        {/* Industry Solutions strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 lg:mt-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
            Industry Solutions
          </p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { label: "Healthcare", sub: "EMR, HIE, HL7, Pharmacy" },
              { label: "HR Tech", sub: "HRIS, Payroll, Benefits, ATS" },
              { label: "eCommerce", sub: "EDI, Inventory, Orders, Retail" },
              { label: "Enterprise AI", sub: "ML Ops, Data, Automation" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all hover:border-primary/20 hover:bg-white/[0.04]"
              >
                <div>
                  <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{item.label}</p>
                  <p className="text-[11px] text-white/25">{item.sub}</p>
                </div>
                <ArrowRight className="ml-auto h-3.5 w-3.5 text-white/15 group-hover:text-primary/50 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
