"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, ArrowUp, Shield, Target, Zap, Award } from "lucide-react"

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, motionVal, value])

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v))
    return unsub
  }, [rounded])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

const stats = [
  {
    value: 2,
    suffix: "x",
    label: "Median equity value increase",
    sub: "over 18 months",
    accent: "#3b82f6",
    icon: TrendingUp,
    bar: 85,
  },
  {
    value: 38,
    suffix: "%",
    label: "Typical COGS reduction",
    sub: "within 90 days",
    accent: "#06b6d4",
    icon: Target,
    bar: 65,
  },
  {
    value: 110,
    suffix: "%+",
    label: "NRR target across portfolio",
    sub: "compounding equity story",
    accent: "#8b5cf6",
    icon: Zap,
    bar: 92,
  },
  {
    value: 7,
    suffix: "",
    label: "Portfolio companies",
    sub: "across 5 sectors",
    accent: "#f59e0b",
    icon: Award,
    bar: 70,
  },
]

const logic = [
  {
    label: "EBITDA grows via",
    value: "Revenue up + Cost down",
    icon: TrendingUp,
    accent: "#3b82f6",
    desc: "Simultaneous engine deployment across all three levers",
  },
  {
    label: "Multiple expands via",
    value: "NRR >110% + Exit narrative",
    icon: ArrowUp,
    accent: "#06b6d4",
    desc: "Compounding data moats and investor-grade governance",
  },
  {
    label: "AI-native product adds",
    value: "Switching cost + defensibility",
    icon: Shield,
    accent: "#8b5cf6",
    desc: "Proprietary workflows that deepen with every customer interaction",
  },
]

export function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[oklch(0.16_0.014_255)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <TrendingUp className="h-3.5 w-3.5" />
            Framework Outcomes
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Real Numbers.{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Real Transformations.
            </span>
          </h2>
          <p className="mt-4 text-base text-white/40 lg:text-lg">
            Measured outcomes from portfolio companies running the BVC Framework.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[oklch(0.20_0.013_254)] p-6 transition-all duration-500 hover:border-white/[0.12]"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-50 transition-opacity group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
              />

              <div className="flex items-start justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${s.accent}12`, color: s.accent }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 text-4xl font-bold tracking-tight" style={{ color: s.accent }}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
              <p className="mt-1 text-[11px] text-white/30">{s.sub}</p>

              {/* Animated bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${s.bar}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${s.accent}60, ${s.accent})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equation + Logic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          {/* Central equation */}
          <div className="mb-8 rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">The Underlying Logic</p>
            <p className="mt-3 text-2xl font-bold text-white lg:text-3xl">
              Equity Value ={" "}
              <span className="text-primary">EBITDA</span>
              {" x "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Multiple</span>
            </p>
          </div>

          {/* Logic cards */}
          <div className="grid gap-4 lg:grid-cols-3">
            {logic.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="group rounded-2xl border border-white/[0.07] bg-[oklch(0.20_0.013_254)] p-5 transition-all hover:border-white/[0.12]"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${item.accent}12`, color: item.accent }}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-white/30">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-white/85">{item.value}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/35">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
