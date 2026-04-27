"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import {
  Search, Cog, TrendingUp, Flag, ArrowRight, BarChart3,
  Wrench, Puzzle, FileText, Target, Award, FolderOpen, Scale, Presentation, ClipboardList, Layers
} from "lucide-react"

const problems = [
  { label: "Revenue", stat: "54%", desc: "of reps spend under 40% of time actually selling. AI automation reclaims 40% of that." },
  { label: "Cost", stat: "50%", desc: "of vendor spend reducible in 90 days. Most stacks are 40-60% redundant." },
  { label: "Product", stat: "3x", desc: "more likely to churn if customers miss week-2 onboarding milestones." },
  { label: "Pricing", stat: "11x", desc: "EBITDA leverage from pricing vs. volume. Most haven't repriced in 2+ years." },
  { label: "Engineering", stat: "30-40%", desc: "of engineering capacity consumed by maintenance with <5% adoption features." },
  { label: "Data", stat: "60%", desc: "of AI initiatives fail due to poor data quality before deployment begins." },
]

const benchmarkModules = [
  { label: "GTM Efficiency Audit", href: "/diagnose/gtm-efficiency-audit", stat: "54%", desc: "Pipeline leakage mapped against 100+ comparable operators." },
  { label: "Cost Structure Teardown", href: "/diagnose/cost-structure-teardown", stat: "50%", desc: "Full vendor and headcount audit with EBITDA impact." },
  { label: "Product Gap Analysis", href: "/diagnose/product-gap-analysis", stat: "3x", desc: "Feature utilization heatmap with churn attribution." },
  { label: "Data Maturity Assessment", href: "/diagnose/data-maturity-assessment", stat: "60%", desc: "AI readiness score across product, sales, and ops." },
  { label: "Technical Diligence", href: "/diagnose/technical-diligence", stat: "30-40%", desc: "Tech debt, architecture risk, and dev velocity." },
  { label: "NRR & Retention Drivers", href: "/diagnose/nrr-retention-drivers", stat: "NRR", desc: "Cohort-level retention analysis with CS capacity model." },
]

const rebuildEngines = [
  {
    engine: "Revenue Engine",
    modules: [
      { label: "GTM Engineering", href: "/modules/gtm-engineering", desc: "AI-enhanced tooling, automated sequences, rep enablement." },
      { label: "Pricing Architecture", href: "/modules/pricing-architecture", desc: "Value-based repricing with minimal churn." },
      { label: "Expansion Playbooks", href: "/modules/expansion-playbooks", desc: "Land-and-expand motion, zero CAC expansion revenue." },
    ],
  },
  {
    engine: "Cost Engine",
    modules: [
      { label: "Offshore Substitution", href: "/modules/offshore-substitution", desc: "Structured offshore deployment for engineering, QA, support." },
      { label: "AI Automation", href: "/modules/ai-automation", desc: "Support deflection, dev acceleration, ops automation." },
      { label: "Vendor Compression", href: "/modules/vendor-compression", desc: "90-day vendor audit and renegotiation program." },
    ],
  },
  {
    engine: "Product Engine",
    modules: [
      { label: "AI-Native Workflows", href: "/modules/ai-native-workflows", desc: "AI embedded into core product workflows." },
      { label: "Data Moat Build", href: "/modules/data-moat-build", desc: "Proprietary data flywheel for competitive advantage." },
      { label: "Retention Loops", href: "/modules/retention-loops", desc: "Onboarding and engagement mechanics for NRR >110%." },
    ],
  },
]

const compoundModules = [
  { label: "Metrics Normalization (CFO Layer)", desc: "Standardizes financial and operating metrics for PE buyers." },
  { label: "NRR >110% Systems", desc: "CS motion, pricing, and product systems for sustained NRR." },
  { label: "Exit Narrative Construction", desc: "Built on structural proof, not projected aspiration." },
  { label: "Multiple Expansion Playbook", desc: "Targets specific buyer signals systematically." },
  { label: "Investor-Grade Reporting", desc: "Clean, consistent, auditable reporting." },
]

const exitModules = [
  { label: "Investor-Grade Data Room", desc: "Financial model, historicals, customer data, tech documentation." },
  { label: "Clean Cap Table & Legal Packaging", desc: "Cap table clean-up, IP ownership, material contract audit." },
  { label: "Buyer Narrative Construction", desc: "Strategic and financial narratives per buyer tier." },
  { label: "Comparable Transaction Benchmarking", desc: "Multiple distribution analysis by growth, NRR, margin band." },
  { label: "Management Presentation & Story Arc", desc: "Story arc design, data visualization, Q&A preparation." },
  { label: "100-Day Post-Acquisition Playbook", desc: "Credible post-acquisition plan to reduce buyer risk." },
]

const causalChain = [
  { q: "What determines sponsor return?", a: "Equity value at exit = EBITDA x Multiple x Governance. All three are tractable. None is automatic." },
  { q: "What drives EBITDA expansion?", a: "Revenue growth and cost reduction must operate simultaneously -- with NRR retention as a third condition." },
  { q: "What expands the exit multiple?", a: "NRR above 110% and an exit narrative grounded in structural proof -- not projected growth." },
  { q: "Why does multi-vendor execution underperform?", a: "Specialists optimize within their scope. Integration costs offset local gains." },
  { q: "The BVC structural advantage", a: "One operating system. Revenue, Cost, and Product engines deployed against a shared diagnostic baseline." },
]

function SectionHeader({ label, id, title, desc }: { label: string; id: string; title: string; desc: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} id={id} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="scroll-mt-24">
      <span className="text-xs font-medium uppercase tracking-wider text-primary">{label}</span>
      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-base text-muted-foreground">{desc}</p>
    </motion.div>
  )
}

export function FrameworkPageContent() {
  const [activeBenchmark, setActiveBenchmark] = useState(0)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-20 pt-32 lg:pb-28 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">BVC Transformation Framework</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl text-balance">Benchmark. Rebuild. Compound.</h1>
            <p className="mt-6 max-w-3xl text-lg text-white/60">
              A four-layer operating system for PE-backed SaaS -- EBITDA growth, margin improvement, and equity value expansion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
              <p className="text-sm font-medium text-white">Equity Value = EBITDA x Multiple x Governance</p>
              <div className="hidden h-6 w-px bg-white/20 sm:block" />
              <p className="text-xs text-white/50">EBITDA via Revenue up + Cost down</p>
              <div className="hidden h-6 w-px bg-white/20 sm:block" />
              <p className="text-xs text-white/50">Multiple via NRR &gt;110% + Narrative</p>
              <div className="hidden h-6 w-px bg-white/20 sm:block" />
              <p className="text-xs text-white/50">Governance via Board + Reporting</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader label="Lower Middle Market SaaS" id="problems" title="The Same Problems, Every Portfolio" desc="These patterns appear within the first 5-15 discovery conversations. Operational, measurable, fixable." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div key={p.label} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-medium text-primary">{p.label}</p>
                <p className="mt-2 text-3xl font-bold text-foreground">{p.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark Layer */}
      <section className="py-20 lg:py-28" id="benchmark">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader label="Layer 01 -- Benchmark" id="" title="Truth Engine" desc="Map value leakage before deploying a dollar. Click any module to see what it covers." />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* Module List */}
            <div className="space-y-2">
              {benchmarkModules.map((m, i) => (
                <button
                  key={m.label}
                  onClick={() => setActiveBenchmark(i)}
                  className={`flex w-full items-center justify-between rounded-lg px-5 py-4 text-left transition-all ${
                    activeBenchmark === i ? "bg-primary text-white shadow-md" : "bg-white border border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  <span className="text-sm font-medium">{m.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
            </div>
            {/* Detail Panel */}
            <motion.div key={activeBenchmark} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <p className="text-3xl font-bold text-primary">{benchmarkModules[activeBenchmark].stat}</p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{benchmarkModules[activeBenchmark].label}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{benchmarkModules[activeBenchmark].desc}</p>
              <Link href={benchmarkModules[activeBenchmark].href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
                Read full diagnostic <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rebuild Layer */}
      <section className="py-20 lg:py-28 bg-[oklch(0.17_0.015_260)]" id="rebuild" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="scroll-mt-24">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Layer 02 -- Rebuild</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Execution Engine</h2>
            <p className="mt-3 max-w-3xl text-base text-white/60">Three sub-engines deployed in parallel. Revenue, Cost, and Product.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {rebuildEngines.map((eng) => (
              <div key={eng.engine} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white">{eng.engine}</h3>
                <div className="mt-4 space-y-3">
                  {eng.modules.map((m) => (
                    <Link key={m.label} href={m.href} className="group block rounded-lg bg-white/5 px-4 py-3 transition-colors hover:bg-white/10">
                      <p className="text-sm font-medium text-white group-hover:text-primary">{m.label}</p>
                      <p className="mt-1 text-xs text-white/50">{m.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compound Layer */}
      <section className="py-20 lg:py-28" id="compound">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader label="Layer 03 -- Compound" id="" title="Equity Engine" desc="Convert gains into structural equity value. Metrics normalization, NRR systems, and exit narrative." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compoundModules.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-foreground">{m.label}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Readiness */}
      <section className="py-20 lg:py-28 bg-secondary/40" id="exit-readiness">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader label="Layer 04 -- Exit Readiness" id="" title="Multiple Engine" desc="Maximum multiple in the final 18 months. Investor-grade data room, buyer narrative, management presentation." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exitModules.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-foreground">{m.label}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causal Chain */}
      <section className="py-20 lg:py-28 bg-[oklch(0.17_0.015_260)]" data-dark-section>
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">The Causal Chain</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">From Mandate to Multiple</h2>
          </div>
          <div className="mt-12 space-y-6">
            {causalChain.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="text-sm font-bold text-white">{item.q}</h4>
                <p className="mt-2 text-sm text-white/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
