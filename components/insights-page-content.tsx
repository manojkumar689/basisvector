"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Benchmark", "Rebuild", "Compound", "Exit Readiness"]

const articles = [
  { layer: "Benchmark", sub: "GTM", title: "GTM Is Inefficient Not Broken", desc: "AI-powered workflow automation reclaims 40% of rep time, enabling AI-native GTM teams to operate 3x leaner." },
  { layer: "Rebuild", sub: "Revenue", title: "Execution Matters More Than Strategy", desc: "AI-powered OKR tracking and execution monitoring create real-time accountability, turning strategy into measurable progress." },
  { layer: "Rebuild", sub: "Revenue", title: "Lead Response Time Kills Conversion", desc: "AI-powered instant lead response and routing enable sub-minute response times 24/7, increasing conversion by 9x." },
  { layer: "Rebuild", sub: "Revenue", title: "Pipeline Stages Lack Discipline", desc: "AI deal scoring and pipeline hygiene surface stuck deals and predict close probability with 85%+ accuracy." },
  { layer: "Rebuild", sub: "Revenue", title: "Marketing and Sales Are Misaligned", desc: "AI-powered unified lead scoring and shared attribution align both teams on revenue signal." },
  { layer: "Rebuild", sub: "Revenue", title: "No Structured Outbound Engine", desc: "AI sequencing and prospecting engines create scalable outbound that doesn't depend on individual rep talent." },
  { layer: "Rebuild", sub: "Revenue", title: "Sales Cycles Are Unnecessarily Long", desc: "AI deal acceleration and proposal automation cut proposal time from days to hours." },
  { layer: "Rebuild", sub: "Revenue", title: "No RevOps Function", desc: "AI-powered RevOps platforms provide automated data operations and unified revenue intelligence." },
  { layer: "Benchmark", sub: "GTM", title: "GTM & Revenue Framework Article", desc: "Signal-led GTM tells you who is buying now. The difference is a different operating model." },
  { layer: "Benchmark", sub: "GTM", title: "Five Whys of Sales Failure", desc: "Sales is weak is never the answer -- it is the starting point. The Five Whys drills through five structural layers." },
  { layer: "Rebuild", sub: "Revenue", title: "Product-Sales Unity System", desc: "Product and sales operate as separate optimization functions. Closing that gap is a structural fix." },
  { layer: "Rebuild", sub: "Revenue", title: "Distribution Memory", desc: "The most valuable GTM asset -- buyer relationships, channel partnerships, and institutional deal knowledge -- is rarely captured." },
  { layer: "Rebuild", sub: "Pricing", title: "Pricing Is the Fastest EBITDA Lever", desc: "A 1% price increase drives 11% EBITDA improvement; AI identifies pricing power pockets without churning customers." },
  { layer: "Rebuild", sub: "Pricing", title: "Packaging Drives Expansion Economics", desc: "AI analyzes product usage patterns to identify natural upsell triggers and optimal tier boundaries." },
  { layer: "Rebuild", sub: "Pricing", title: "Discounts Are Unmanaged", desc: "AI deal desk tools enforce discount guardrails and optimize discount strategy, recovering 8-15% of discounted revenue." },
  { layer: "Benchmark", sub: "Tech", title: "Product Overbuilt But Unfocused", desc: "AI usage analytics reveal the brutal truth: 60% of engineered features are rarely used." },
  { layer: "Benchmark", sub: "Tech", title: "Technical Debt And Growth", desc: "Technical debt is now manageable via AI coding tools; the real question is data poverty." },
  { layer: "Rebuild", sub: "Product", title: "Engineering Inefficiency", desc: "AI coding assistants increase individual output 30-55%; companies that deploy Copilot see 40% faster delivery." },
  { layer: "Rebuild", sub: "AI & Auto", title: "AI For Productivity", desc: "AI-first engineering culture requires tooling strategy + team norms + measurement." },
  { layer: "Rebuild", sub: "Offshore", title: "Offshore Execution Inconsistency", desc: "AI-powered project tracking eliminates blind spots in offshore delivery quality." },
  { layer: "Rebuild", sub: "Offshore", title: "Cost Arbitrage Underutilization", desc: "AI coding assistants enable offshore teams to graduate from maintenance to architecture." },
  { layer: "Rebuild", sub: "Vendor", title: "Vendor Sprawl", desc: "AI spend analytics platforms automatically discover, categorize, and rationalize SaaS spend." },
  { layer: "Rebuild", sub: "Vendor", title: "Cloud Cost Control", desc: "AI FinOps platforms identify 25-40% infrastructure waste automatically." },
  { layer: "Compound", sub: "CS & NRR", title: "Reactive Churn Management", desc: "AI churn models predict churn 90+ days out. Companies intervening at 90 days recover 35-40% of at-risk accounts." },
  { layer: "Compound", sub: "Data & AI", title: "Data Moat Construction", desc: "Proprietary data assets create compounding defensibility and premium exit multiples." },
  { layer: "Exit Readiness", sub: "Post-Acq", title: "First 100 Days", desc: "AI-powered diagnostic tools compress 60 days of discovery into 2 weeks." },
  { layer: "Exit Readiness", sub: "Governance", title: "100-Day Plan Discipline", desc: "AI-powered planning tools transform static 100-day documents into living execution systems." },
  { layer: "Rebuild", sub: "Execution", title: "Execution Bottleneck", desc: "AI-powered execution management creates cross-functional accountability infrastructure." },
  { layer: "Rebuild", sub: "Org", title: "Skin-in-the-Game Test", desc: "Equity sacrifice reveals team commitment faster than any interview." },
  { layer: "Rebuild", sub: "Cost", title: "Zero-Based Cost Reset (ZBCR)", desc: "The fastest way to cut costs is to rebuild the cost structure from zero. Every line re-earns its place." },
]

export function InsightsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.layer === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-12 pt-32 lg:pb-16 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-white md:text-5xl">BVC Insights</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/60">
              {articles.length}+ articles organized around the BVC four-layer framework -- Benchmark, Rebuild, Compound, and Exit Readiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Articles */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Showing {filtered.length} articles</p>

          {/* Articles Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <motion.div
                key={`${a.title}-${i}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                className="group cursor-pointer rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-primary">{a.layer}</span>
                  <span className="text-[11px] text-muted-foreground">&middot; {a.sub}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground leading-snug">{a.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-3">{a.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
