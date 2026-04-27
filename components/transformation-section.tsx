"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Search, Cog, TrendingUp, Flag, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    label: "BENCHMARK",
    desc: "Quantifies value leakage across GTM, cost structure, NRR, and product defensibility -- producing a prioritized intervention agenda weighted by EBITDA impact.",
    output: "Value Leakage Map",
    metric: "6 dimensions analyzed",
    accent: "#3b82f6",
  },
  {
    icon: Cog,
    label: "REBUILD",
    desc: "Revenue, Cost, and Product engines deployed simultaneously -- each targeting a distinct lever, with unified accountability for outcomes.",
    output: "EBITDA Expansion",
    metric: "3 engines in parallel",
    accent: "#06b6d4",
  },
  {
    icon: TrendingUp,
    label: "COMPOUND",
    desc: "Normalizes metrics, sustains NRR above 110%, and builds the exit narrative that earns a multiple premium -- before process begins.",
    output: "Exit-Ready Asset",
    metric: "NRR >110% target",
    accent: "#8b5cf6",
  },
  {
    icon: Flag,
    label: "EXIT READINESS",
    desc: "Investor-grade data room, management presentation, and buyer-specific narrative -- calibrated to maximize multiple realization.",
    output: "Maximum Multiple",
    metric: "12-18 mo pre-exit",
    accent: "#f59e0b",
  },
]

export function TransformationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-[oklch(0.15_0.013_255)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            BVC Transformation Framework
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl text-balance">
            Legacy SaaS to AI-Native Platform
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/35">
            A sequential dependency architecture where each layer&apos;s output is the precondition for the next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          {/* Step tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {steps.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActiveStep(i)}
                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300"
                style={{
                  background: activeStep === i ? `${step.accent}20` : "rgba(255,255,255,0.03)",
                  color: activeStep === i ? step.accent : "rgba(255,255,255,0.4)",
                  borderWidth: "1px",
                  borderColor: activeStep === i ? `${step.accent}30` : "rgba(255,255,255,0.06)",
                }}
              >
                <step.icon className="h-4 w-4" />
                {step.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div
              className="rounded-2xl border p-8 backdrop-blur-sm"
              style={{
                borderColor: `${steps[activeStep].accent}15`,
                background: `${steps[activeStep].accent}05`,
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: `${steps[activeStep].accent}15`, color: steps[activeStep].accent }}
                >
                  {(() => {
                    const Icon = steps[activeStep].icon
                    return <Icon className="h-7 w-7" />
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{steps[activeStep].label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">{steps[activeStep].desc}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold"
                      style={{ background: `${steps[activeStep].accent}15`, color: steps[activeStep].accent }}
                    >
                      Output: {steps[activeStep].output}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/40 border border-white/[0.05]">
                      {steps[activeStep].metric}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? "32px" : "6px",
                      background: i === activeStep ? steps[activeStep].accent : "rgba(255,255,255,0.15)",
                    }}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:brightness-110"
            >
              Read the Full Framework
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
