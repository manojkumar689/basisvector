"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, FileText, TrendingUp, ChevronRight, BarChart3 } from "lucide-react"

interface DiagnosticData {
  title: string
  subtitle: string
  layer: string
  whyTitle: string
  whyDesc: string
  failureModes: { title: string; desc: string }[]
  deliverables: { title: string; desc: string }[]
  nextStep: {
    title: string
    desc: string
    primaryLink: { label: string; href: string }
    secondaryLink: { label: string; href: string }
  }
  related: { title: string; desc: string; href: string }[]
}

const ACCENTS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981"]
// Illustrative PE-portfolio baseline scores per failure mode slot
const BASELINE_PCT = [32, 28, 47, 35, 41, 30]

export function DiagnosticPageContent({ data }: { data: DiagnosticData }) {
  const layerLabel = data.layer.replace(/\s*--\s*Layer\s*\d+/i, "")

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[oklch(0.17_0.015_260)] pb-0 pt-32 lg:pt-44">
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pb-16 lg:pb-24"
            >
              {/* Breadcrumb */}
              <div className="mb-5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-white/30">
                <Link href="/framework" className="transition-colors hover:text-white/55">Framework</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-primary">{layerLabel}</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-[2.85rem] lg:text-5xl">
                {data.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/50">{data.subtitle}</p>

              {/* Stats row */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { val: "2 wks", label: "Typical turnaround" },
                  { val: `${data.failureModes.length}`, label: "Areas measured" },
                  { val: `${data.deliverables.length}`, label: "Deliverables" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.val}</div>
                    <div className="text-[11px] text-white/35">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110"
                >
                  Scope This Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/framework"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/65 transition-all hover:border-white/30 hover:text-white"
                >
                  See the Framework
                </Link>
              </div>
            </motion.div>

            {/* Right: benchmark card visual */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="hidden pb-16 lg:block lg:pb-24"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
                <div className="mb-1 flex items-center gap-2">
                  <BarChart3 className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                    PE Portfolio Baseline
                  </span>
                </div>
                <p className="mb-5 text-[11px] text-white/30">Typical gap scores before BVC engagement</p>

                <div className="space-y-3.5">
                  {data.failureModes.slice(0, 5).map((fm, i) => {
                    const pct = BASELINE_PCT[i % BASELINE_PCT.length]
                    const accent = ACCENTS[i % ACCENTS.length]
                    return (
                      <div key={fm.title}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-[11px] text-white/45 truncate max-w-[160px]">{fm.title}</span>
                          <span className="ml-2 shrink-0 text-[11px] font-semibold" style={{ color: accent }}>
                            {pct}%
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: accent }}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 1.1, delay: 0.5 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5 rounded-xl bg-primary/10 p-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/35">Post-audit average recovery</p>
                      <p className="text-[13px] font-bold text-white">Quantified in week 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why This Audit ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                Why This Audit
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-[1.75rem]">
                {data.whyTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500">{data.whyDesc}</p>
            </motion.div>

            {/* Key areas sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-primary/12 bg-primary/[0.03] p-5"
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.13em] text-primary">
                Key Gaps Measured
              </p>
              <div className="space-y-3">
                {data.failureModes.slice(0, 4).map((fm, i) => (
                  <div key={fm.title} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                      style={{ background: ACCENTS[i % ACCENTS.length] }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-slate-800">{fm.title}</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">{fm.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Failure Modes ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              What We Find
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-[1.75rem]">
              The failure modes — and where you&apos;re losing money
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.failureModes.map((fm, i) => {
              const accent = ACCENTS[i % ACCENTS.length]
              return (
                <motion.div
                  key={fm.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  {/* Numbered badge */}
                  <div
                    className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                    style={{ background: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Left accent bar on hover */}
                  <div
                    className="mb-2 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-10"
                    style={{ background: accent }}
                  />
                  <h4 className="text-sm font-semibold text-slate-900">{fm.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{fm.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Deliverables ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              Deliverable
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-[1.75rem]">
              What you walk away with
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.deliverables.map((d, i) => {
              const accent = ACCENTS[i % ACCENTS.length]
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  {/* Large watermark number */}
                  <div
                    className="pointer-events-none absolute -right-1 -top-1 select-none text-[88px] font-black leading-none"
                    style={{ color: accent, opacity: 0.055 }}
                  >
                    {i + 1}
                  </div>
                  {/* Top accent line */}
                  <div
                    className="mb-5 h-1 w-10 rounded-full"
                    style={{ background: accent }}
                  />
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${accent}18` }}
                  >
                    <FileText className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{d.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{d.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Next Step CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[oklch(0.17_0.015_260)] py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              Next Step
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{data.nextStep.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">{data.nextStep.desc}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={data.nextStep.primaryLink.href}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                {data.nextStep.primaryLink.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={data.nextStep.secondaryLink.href}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/65 transition-all hover:border-white/35 hover:text-white"
              >
                {data.nextStep.secondaryLink.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Related</span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-[1.75rem]">After the audit</h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {data.related.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={r.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
                >
                  <div
                    className="mb-4 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: ACCENTS[i % ACCENTS.length] }}
                  />
                  <h4 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-primary">
                    {r.title}
                  </h4>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{r.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
