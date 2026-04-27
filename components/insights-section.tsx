"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

const articles = [
  {
    category: "GTM & Revenue",
    title: "GTM Is Inefficient Not Broken",
    desc: "54% of sales reps spend less than 40% of their time selling. AI workflow automation reclaims 40% of rep time -- enabling 3x leaner GTM teams.",
    href: "/insights",
    accent: "#3b82f6",
  },
  {
    category: "Pricing & Packaging",
    title: "Pricing Is the Fastest EBITDA Lever",
    desc: "A 1% price increase drives 11% EBITDA improvement. Most PE-backed SaaS haven&apos;t repriced in 2+ years.",
    href: "/insights",
    accent: "#06b6d4",
  },
  {
    category: "Customer Success",
    title: "Reactive Churn Management",
    desc: "AI churn models predict churn 90+ days out. Companies intervening at 90 days recover 35-40% of at-risk accounts.",
    href: "/insights",
    accent: "#8b5cf6",
  },
]

export function InsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              Research
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">BVC Insights</h2>
            <p className="mt-3 max-w-xl text-base text-white/35">
              100 essays on value creation in PE-backed SaaS -- one per operating problem, grounded in portfolio evidence.
            </p>
          </div>
          <Link
            href="/insights"
            className="mt-6 hidden items-center gap-2 text-sm font-semibold text-primary transition-all hover:brightness-110 md:inline-flex"
          >
            Browse All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.05] hover:-translate-y-1"
              >
                {/* Top accent */}
                <div className="h-0.5 w-12 rounded-full mb-5" style={{ background: a.accent }} />
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" style={{ color: a.accent }} />
                  <span className="text-xs font-bold" style={{ color: a.accent }}>{a.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white leading-tight">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/35">{a.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:brightness-110">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Browse All 100 Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
