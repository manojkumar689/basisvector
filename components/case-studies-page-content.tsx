"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: "cadient",
    company: "Cadient",
    sector: "HR Tech Talent Acquisition",
    headline: "A forensic cost reset that rebuilt the unit economics",
    type: "Cost Engine",
    moves: [
      { label: "Non-People OpEx", value: "down 70-80%", desc: "Zero-based cost reset. Office, subscriptions, vendors, professional fees -- all renegotiated or replaced." },
      { label: "Infrastructure COGS", value: "35% to ~7-8%", desc: "Legacy data center to AWS. COGS collapsed 4-5x. Product velocity increased." },
      { label: "Stack Consolidation", value: "Zoho One", desc: "All internal systems consolidated. Dozens of subscriptions eliminated." },
    ],
    doctrine: "We don't trim costs. We redesign the cost structure. Every dollar must re-earn its place.",
  },
  {
    id: "relecura",
    company: "Relecura",
    sector: "Patent Analytics IP Intelligence",
    headline: "Three moves from losses to break-even to acquisition",
    type: "Turnaround",
    moves: [
      { label: "Move 1: Commitment Test", value: "Equity-for-cash", desc: "Offered equity-for-cash to senior team. Almost all declined and self-selected out. One stayed." },
      { label: "Move 2: Infra & COGS Reset", value: "Break-even", desc: "Modernized tech stack, renegotiated IP data vendors. Company reached break-even and raised capital." },
      { label: "Move 3: Partner-Led GTM", value: "Acquisition", desc: "No sales team -- built aggressive partner channel. One partner acquired Relecura." },
    ],
    doctrine: "The same partner channel built to solve a GTM constraint became the exit pathway.",
  },
  {
    id: "easyecom",
    company: "EasyEcom",
    sector: "eCommerce Inventory SaaS",
    headline: "Near-death survival to $5-10M ARR profitable SaaS",
    type: "Survival & Rebuild",
    moves: [
      { label: "Move 1: Survival Budget", value: "Costs to $10K/mo", desc: "Hard constraint: costs at or below $10K/month. Revenue to $15K. Forced profitability from day one." },
      { label: "Move 2: Founder Expansion", value: "1 to 3 co-owners", desc: "2 engineers granted 10% equity each. Salaries cut 50-60% across the board." },
      { label: "Move 3: Antifragile Build", value: "$5-10M ARR", desc: "Profitable at $180K ARR, secured AWS credits and $100K loan. COVID tailwind captured." },
    ],
    doctrine: "Great companies are not built by scaling first. They are built by surviving correctly.",
  },
]

export function CaseStudiesPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Proof, Not Promises</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Case Studies</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/60">
              Real transformations with specific numbers. Each case study documents the framework applied, the moves made, and the measurable outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-16 px-4 lg:px-6">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              id={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`scroll-mt-24 rounded-2xl border border-border p-8 lg:p-10 ${idx % 2 === 0 ? "bg-white" : "bg-secondary/30"}`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{cs.type}</span>
                <span className="text-xs text-muted-foreground">{cs.sector}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-foreground">{cs.company}</h2>
              <p className="mt-2 text-base text-muted-foreground">{cs.headline}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {cs.moves.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium text-primary">{m.label}</p>
                    <p className="mt-2 text-xl font-bold text-foreground">{m.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-primary/5 px-5 py-3">
                <p className="text-sm font-medium italic text-foreground">&ldquo;{cs.doctrine}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.17_0.015_260)] py-16 lg:py-24" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to write your case study?</h2>
          <p className="mt-4 text-base text-white/60">Every engagement starts with the Benchmark layer. Scope a diagnostic and see where value is leaking.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
