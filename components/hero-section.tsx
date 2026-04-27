"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

// ─── Slide Visuals ─────────────────────────────────────────────────────────────

function BenchmarkVisual() {
  const bars = [
    { label: "GTM Efficiency", pct: 38, val: "38%",     barColor: "#3b82f6", textColor: "#ef4444" },
    { label: "Gross Margin",   pct: 52, val: "52%",     barColor: "#3b82f6", textColor: "#f97316" },
    { label: "NRR",            pct: 89, val: "89%",     barColor: "#3b82f6", textColor: "#f97316" },
    { label: "Data Moat",      pct: 15, val: "Low",     barColor: "#ef4444", textColor: "#ef4444" },
    { label: "AI Integration", pct: 20, val: "Surface", barColor: "#ef4444", textColor: "#ef4444" },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.18_0.014_255_/_0.92)] p-6 shadow-xl backdrop-blur-md">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7dc4f5]/60">
        Diagnostic — Value Leakage Map
      </p>
      <div className="space-y-3.5">
        {bars.map((b) => (
          <div key={b.label} className="grid items-center gap-3" style={{ gridTemplateColumns: "7rem 1fr 3.5rem" }}>
            <span className="text-xs text-white/55">{b.label}</span>
            <div className="h-1.5 rounded-full bg-white/[0.07]">
              <div className="h-full rounded-full transition-all" style={{ width: `${b.pct}%`, background: b.barColor }} />
            </div>
            <span className="text-right text-xs font-bold" style={{ color: b.textColor }}>{b.val}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/[0.1] px-4 py-2.5 text-xs font-semibold text-[#7dc4f5]">
        → 3 highest-leverage intervention points identified
      </div>
    </div>
  )
}

function RebuildVisual() {
  const engines = [
    { icon: "📈", name: "Revenue Engine", kpi: "GTM · Pricing · Expansion",    tag: "CAC ↓  NRR ↑", tagColor: "#7dc4f5" },
    { icon: "⚙️", name: "Cost Engine",    kpi: "Offshore · AI · Vendor",        tag: "Margin ↑",      tagColor: "#6de8a8" },
    { icon: "🧩", name: "Product Engine", kpi: "AI-Native · Data · Retention",  tag: "Multiple ↑",    tagColor: "#c4a8f5" },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.18_0.014_255_/_0.92)] p-6 shadow-xl backdrop-blur-md">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6de8a8]/60">
        Execution Engine — Layer 2
      </p>
      <div className="space-y-3">
        {engines.map((e) => (
          <div key={e.name} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xl leading-none">
              {e.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-white/90">{e.name}</p>
              <p className="mt-0.5 text-[11px] text-white/35">{e.kpi}</p>
            </div>
            <span className="shrink-0 text-xs font-bold" style={{ color: e.tagColor }}>{e.tag}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-[#1a9c57]/20 bg-[#1a9c57]/[0.1] px-4 py-2.5 text-xs font-semibold text-[#6de8a8]">
        → All three run simultaneously — not sequentially
      </div>
    </div>
  )
}

function CompoundVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.18_0.014_255_/_0.92)] p-6 shadow-xl backdrop-blur-md">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#c4a8f5]/60">
        Exit Valuation — Before vs. After
      </p>
      <div className="mb-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-10 shrink-0 text-xs text-white/40">Entry</span>
          <div className="h-8 flex-1 overflow-hidden rounded-lg bg-white/[0.06]">
            <div className="flex h-full w-[40%] items-center rounded-lg bg-white/15 px-3">
              <span className="text-[10px] text-white/40">Pre-transform</span>
            </div>
          </div>
          <span className="w-9 text-right text-sm font-bold text-white/35">3–4×</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 shrink-0 text-xs text-[#c4a8f5]">Exit</span>
          <div className="h-8 flex-1 overflow-hidden rounded-lg bg-white/[0.06]">
            <div
              className="flex h-full w-[85%] items-center rounded-lg px-3"
              style={{ background: "linear-gradient(90deg,rgba(108,68,201,.45),rgba(196,168,245,.35))" }}
            >
              <span className="text-[10px] text-white/65">AI-native, durable</span>
            </div>
          </div>
          <span className="w-9 text-right text-sm font-bold text-[#c4a8f5]">7–9×</span>
        </div>
      </div>
      <div className="space-y-2.5">
        {[
          "AI-native workflows → switching cost built in",
          "Proprietary data moat → defensibility premium",
          "NRR >110% → compounding equity story",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2 text-[11px] text-white/50">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a8f5]" />
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

function ExitVisual() {
  const items = [
    { title: "Investor-Grade Data Room",     sub: "Audited financials, cohort data, LTV/CAC by segment" },
    { title: "Buyer Narrative Construction", sub: "Strategic vs. financial framing — mapped to each buyer pool" },
    { title: "Management Presentation",      sub: "MBR-ready deck and live-fire CEO/CFO coaching" },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.18_0.014_255_/_0.92)] p-6 shadow-xl backdrop-blur-md">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f5cc7d]/60">
        Exit Readiness Checklist
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 rounded-xl border border-[#e6a032]/20 bg-[#e6a032]/[0.08] p-4"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6a032]/20 text-sm font-bold text-[#f5cc7d]">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-white/90">{item.title}</p>
              <p className="mt-0.5 text-[11px] text-white/40">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-[#e6a032]/20 bg-[#e6a032]/[0.1] px-4 py-2.5 text-xs font-semibold text-[#f5cc7d]">
        → Multiple premium earned before the bank is hired
      </div>
    </div>
  )
}

// ─── Slide definitions ────────────────────────────────────────────────────────

interface SlideAction {
  label: string
  href: string
  primary: boolean
  bg?: string
}

interface Slide {
  phase: string
  accent: string
  glow: string
  h1: () => ReactNode
  sub: string
  actions: SlideAction[]
  Visual: () => ReactNode
}

const slides: Slide[] = [
  {
    phase: "Benchmark",
    accent: "#7dc4f5",
    glow: "rgba(30,115,190,0.2)",
    h1: () => (
      <>
        Benchmark to identify<br />
        revenue, cost and<br />
        <span style={{ color: "#7dc4f5" }}>product gaps.</span>
      </>
    ),
    sub: "A structured six-dimension diagnostic maps value leakage across GTM efficiency, gross margin, NRR, AI adoption, data maturity, and product-market fit — pinpointing the highest-leverage intervention points before any change is made.",
    actions: [
      { label: "Explore the Framework", href: "/framework#diagnose", primary: true,  bg: "#2563eb" },
      { label: "View Portfolio",         href: "/portfolio",          primary: false },
    ],
    Visual: BenchmarkVisual,
  },
  {
    phase: "Rebuild",
    accent: "#6de8a8",
    glow: "rgba(26,156,87,0.2)",
    h1: () => (
      <>
        Rebuild Revenue for<br />
        <span style={{ color: "#6de8a8" }}>AI efficiency,</span> Product for<br />
        outcomes, Cost with automation.
      </>
    ),
    sub: "Three coordinated engines deployed simultaneously — Revenue rebuilt for AI-assisted GTM and pricing, Product rebuilt for measurable outcome delivery, Cost restructured through offshore leverage and deep automation.",
    actions: [
      { label: "Revenue Engine", href: "/modules/revenue-engine", primary: true,  bg: "#1a9c57" },
      { label: "Cost Engine →",  href: "/modules/cost-engine",    primary: false },
    ],
    Visual: RebuildVisual,
  },
  {
    phase: "Compound",
    accent: "#c4a8f5",
    glow: "rgba(108,68,201,0.2)",
    h1: () => (
      <>
        Compound value with<br />
        <span style={{ color: "#c4a8f5" }}>data</span> and workflow<br />
        moats.
      </>
    ),
    sub: "Proprietary data assets and AI-native workflows build compounding defensibility — raising NRR above 110%, deepening switching costs, and constructing the buyer narrative that commands a premium multiple at exit.",
    actions: [
      { label: "Compound Layer", href: "/framework#compound", primary: true,  bg: "#6c44c9" },
      { label: "Case Studies →", href: "/case-studies",       primary: false },
    ],
    Visual: CompoundVisual,
  },
  {
    phase: "Exit Readiness",
    accent: "#f5cc7d",
    glow: "rgba(230,160,50,0.2)",
    h1: () => (
      <>
        Deliver exit readiness<br />
        with clean governance,<br />
        <span style={{ color: "#f5cc7d" }}>KPI</span> and EBITDA.
      </>
    ),
    sub: "Investor-grade data room, auditable KPI dashboards, and clean EBITDA governance — built 12–18 months before process so diligence accelerates rather than derails, and the multiple is earned before the bank is hired.",
    actions: [
      { label: "Exit Readiness", href: "/framework#exit-readiness", primary: true,  bg: "#e6a032" },
      { label: "Case Studies →", href: "/case-studies",             primary: false },
    ],
    Visual: ExitVisual,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 28 })
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (!emblaApi) return
    timerRef.current = setInterval(() => emblaApi.scrollNext(), 5500)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()))
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [emblaApi, resetTimer])

  const prev = () => { emblaApi?.scrollPrev(); resetTimer() }
  const next = () => { emblaApi?.scrollNext(); resetTimer() }
  const goTo = (i: number) => { emblaApi?.scrollTo(i); resetTimer() }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[oklch(0.21_0.014_255)] pt-20">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.013)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.013)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative min-w-full"
              style={{
                background: `radial-gradient(ellipse 65% 80% at 88% 42%, ${slide.glow} 0%, transparent 65%)`,
              }}
            >
              <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-16 lg:px-6 lg:py-24">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

                  {/* Left: text */}
                  <div>
                    <div
                      className="mb-8 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{
                        borderColor: `${slide.accent}35`,
                        color: slide.accent,
                        background: `${slide.accent}12`,
                      }}
                    >
                      {slide.phase}
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.1rem]">
                      {slide.h1()}
                    </h1>

                    <p className="mt-6 max-w-[490px] text-[15px] leading-relaxed text-white/48">
                      {slide.sub}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {slide.actions.map((a) =>
                        a.primary ? (
                          <Link
                            key={a.label}
                            href={a.href}
                            className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
                            style={{ background: a.bg ?? "#2563eb" }}
                          >
                            {a.label}
                          </Link>
                        ) : (
                          <Link
                            key={a.label}
                            href={a.href}
                            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/75 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:text-white"
                          >
                            {a.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* Right: visual */}
                  <div className="hidden lg:block">
                    <slide.Visual />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/50 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/50 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white"
                : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
