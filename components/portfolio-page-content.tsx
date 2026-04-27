"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, Heart, Users, ShoppingCart, FlaskConical, Brain, Scale, Package, ClipboardList, Cog } from "lucide-react"

const companies = [
  {
    id: "vorro",
    name: "Vorro",
    icon: Heart,
    website: "vorro.net",
    location: "Florida, USA",
    sector: "Healthcare AI Integration SaaS",
    employees: "25",
    revenue: "<$10M",
    ebitda: "15%",
    headline: "AI healthcare solutions that reduce manual work and improve clinical decisions.",
    desc: "Vorro provides healthcare integration software that enables healthcare organizations to automate data flows, reduce manual processes, and improve operational visibility. The platform addresses the complexity of healthcare data integration across disparate systems.",
    challenge: "Operational complexity at scale",
    framework: "Full SaaSMachine rollout",
    outcome: "Scaled, efficient, AI-driven healthcare data integration with improved throughput and reduced delivery cycle time.",
  },
  {
    id: "cadient",
    name: "Cadient",
    icon: Users,
    website: "cadienttalent.com",
    location: "North Carolina, USA",
    sector: "HR Tech Talent Acquisition SaaS",
    employees: "60",
    revenue: "<$10M",
    ebitda: "25%",
    headline: "A forensic cost reset that rebuilt the unit economics -- then the product and market position.",
    desc: "Cadient arrived with a P&L invisible to its own leadership, a bloated non-people cost structure, and legacy infrastructure running at 35% of revenue. BVC applied a five-move playbook: leadership reset, zero-based cost reset (70-80% non-people cost reduction), global ownership model, AWS migration (COGS 35% to 7-8%), and category repositioning.",
    challenge: "Bloated cost structure and legacy infrastructure",
    framework: "Zero-Based Cost Reset + SaaSMachine",
    outcome: "70-80% non-people OpEx reduction, infrastructure COGS from 35% to 7-8%.",
    stats: [
      { label: "Non-People OpEx", value: "down 70-80%" },
      { label: "Infrastructure COGS", value: "35% to ~7-8%" },
      { label: "Stack", value: "Zoho One" },
    ],
  },
  {
    id: "cv3",
    name: "CV3",
    icon: ShoppingCart,
    website: "commercev3.com",
    location: "Florida, USA",
    sector: "eCommerce AI-Native SaaS",
    employees: "20",
    revenue: "<$10M",
    ebitda: "0%",
    headline: "Performance-based eCommerce growth through data intelligence, automation, and continuous optimization.",
    desc: "CV3 operates in the specialty eCommerce segment -- serving businesses that need more than standard platforms can offer. Its AI-driven approach to merchandising, pricing, and conversion optimization addresses the operational complexity of managing large, dynamic catalogs.",
    challenge: "Scaling operational infrastructure",
    framework: "Cost Engine + Revenue Engine",
    outcome: "Improved year-over-year revenue growth and gross margin through process discipline.",
  },
  {
    id: "infinita-lab",
    name: "Infinita Lab",
    icon: FlaskConical,
    website: "infinitalab.com",
    location: "California, USA",
    sector: "R&D Tech Materials Science SaaS",
    headline: "Fast, accredited materials testing and expert insights for engineers and R&D teams.",
    desc: "Infinita Lab addresses a niche but high-value problem: accessing fast, reliable materials testing without the lead times and costs of traditional lab services. The platform provides accredited testing, data analysis, and expert interpretation.",
    challenge: "Operational discipline at scale",
    framework: "Full SaaSMachine rollout",
    outcome: "Scalable, profitable, AI-driven SaaS business with improved product delivery velocity.",
  },
  {
    id: "agrim-ai",
    name: "Agrim AI",
    icon: Brain,
    website: "agrim.ai",
    location: "Mumbai, India",
    sector: "Enterprise AI Automation SaaS Platform",
    ebitda: "0%",
    headline: "Custom AI solutions and automation to help enterprises accelerate transformation and growth.",
    desc: "Agrim AI delivers enterprise-grade AI implementation through its AgrimOS platform -- enabling organizations to build, deploy, and manage custom AI solutions without requiring deep internal ML expertise.",
    challenge: "Enterprise AI deployment at scale",
    framework: "AgrimOS AI platform",
    outcome: "Custom AI solutions and automation that accelerate enterprise transformation.",
  },
  {
    id: "relecura",
    name: "Relecura",
    icon: Scale,
    website: "relecura.com",
    location: "Bangalore, India",
    sector: "Patent Analytics IP Intelligence SaaS",
    headline: "A founder-funded turnaround -- three moves from losses to break-even to acquisition.",
    desc: "Relecura arrived with a founder personally funding operating losses, a large India team not performing, and legacy infrastructure stack with runaway COGS. BVC forced reality to surface then rebuilt the cost structure and GTM from scratch.",
    challenge: "Founder-funded losses with underperforming team",
    framework: "Commitment Test, Infra Reset, Partner-Led GTM",
    outcome: "Acquired by a strategic partner. The same partner channel built to solve a GTM constraint became the exit pathway.",
    isExited: true,
  },
  {
    id: "easyecom",
    name: "EasyEcom",
    icon: Package,
    website: "easyecom.io",
    location: "India",
    sector: "eCommerce Inventory SaaS",
    headline: "A near-death survival that became a multi-million dollar profitable SaaS business.",
    desc: "EasyEcom hit a near-death moment after exhausting seed capital -- revenue stalled at $180K ARR while costs ran well above that. BVC's intervention was structural: compress to minimum viable size, convert key engineers into equity co-founders, focus on top 20% of customers.",
    challenge: "Near-death cash crisis at $180K ARR",
    framework: "Survival Budget, Founder Expansion, Antifragile Build",
    outcome: "Today EasyEcom is a $5-10M ARR profitable SaaS business that has never been unprofitable since the reset.",
  },
]

export function PortfolioPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Portfolio</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Current Portfolio Companies</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/60">
              Seven B2B SaaS and technology companies at various stages of the BVC Transformation Framework -- from PE-backed rebuilds to early-stage survival stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 lg:px-6">
          {companies.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`scroll-mt-24 rounded-2xl border border-border p-8 lg:p-10 ${i % 2 === 0 ? "bg-white" : "bg-secondary/30"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-foreground">{c.name}</h2>
                      {c.isExited && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Acquired</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{c.sector}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href={`https://${c.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary">
                    {c.website} <ExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-xs text-muted-foreground">{c.location}</span>
                </div>
              </div>

              {/* Stats Row */}
              {(c.employees || c.revenue || c.ebitda) && (
                <div className="mt-6 flex flex-wrap gap-6">
                  {c.employees && <div><p className="text-xs text-muted-foreground">Employees</p><p className="text-sm font-semibold text-foreground">{c.employees}</p></div>}
                  {c.revenue && <div><p className="text-xs text-muted-foreground">Revenue</p><p className="text-sm font-semibold text-foreground">{c.revenue}</p></div>}
                  {c.ebitda && <div><p className="text-xs text-muted-foreground">EBITDA</p><p className="text-sm font-semibold text-foreground">{c.ebitda}</p></div>}
                </div>
              )}

              <h3 className="mt-6 text-lg font-bold text-foreground">{c.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

              {/* Challenge + Framework */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-primary">Challenge</p>
                  <p className="mt-1 text-sm text-foreground">{c.challenge}</p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-xs font-medium text-primary">Framework Applied</p>
                  <p className="mt-1 text-sm text-foreground">{c.framework}</p>
                </div>
              </div>

              {/* Special Stats for Cadient */}
              {c.stats && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {c.stats.map((s) => (
                    <div key={s.label} className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-lg font-bold text-primary">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-4 text-sm text-muted-foreground italic">{c.outcome}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Operating System */}
      <section className="bg-[oklch(0.17_0.015_260)] py-16 lg:py-24" data-dark-section>
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Operating System</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">How BVC operates across portfolio companies.</h2>
          <p className="mt-4 text-base text-white/60">All portfolio transformations apply two connected operating systems that work in sequence.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-white">ValueOps Playbook</h3>
              <p className="mt-2 text-sm text-white/60">The diagnostic and foundational layer. ValueOps systematically identifies value leakage across GTM, cost structure, and product before any execution begins.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm">
              <Cog className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-bold text-white">SaaSMachine</h3>
              <p className="mt-2 text-sm text-white/60">The execution layer. SaaSMachine deploys operational systems across revenue, cost, and product functions -- covering GTM infrastructure, offshore optimization, and product outcome design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
