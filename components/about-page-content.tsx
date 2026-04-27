"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Handshake, Cog, Target, TrendingUp, Building, Globe } from "lucide-react"

const advantages = [
  { icon: Handshake, title: "Equity-aligned fees", desc: "A material portion of BVC fees are tied to EBITDA lift and exit multiple -- same incentive as the sponsor." },
  { icon: Cog, title: "Codified, repeatable operating system", desc: "Four-layer framework with documented playbooks per lever, deployed identically across every engagement." },
  { icon: Target, title: "Operators with execution history", desc: "BVC principals have built, scaled, and exited software businesses. Recommendations grounded in operating experience." },
  { icon: TrendingUp, title: "EBITDA + multiple, simultaneously", desc: "Cost improvements fund revenue investment. Product development generates the NRR profile for a premium exit." },
  { icon: Building, title: "Three engagement configurations", desc: "Full Operating Partner, Targeted Engine, or Pre-Exit Optimization -- scoped to the sponsor's timeline." },
  { icon: Globe, title: "Global delivery infrastructure", desc: "India-based operations layer reduces cost structure while maintaining output quality." },
]

const timeline = [
  { year: "2021", title: "The Idea", desc: "Ambarish Gupta founded BVC on a single observation: the primary constraint is almost never capital -- it is operating capability." },
  { year: "2022", title: "First Acquisitions", desc: "CV3 and Infinita Lab validated the core hypothesis: structured diagnostic first, then simultaneous Revenue, Cost, and Product engine deployment." },
  { year: "2023", title: "Expanding Portfolio", desc: "Cadient (broken system) and Vorro (trapped asset) -- acquired concurrently with materially different intervention sequences." },
  { year: "2024", title: "Accelerating Growth", desc: "Four active companies. AI-native workflows, the Global Ownership Model, and signal-led GTM deployed across the portfolio." },
  { year: "2025", title: "Scaling the System", desc: "Five active companies across two acquisition types, five sectors, and three delivery configurations -- repeatable outcomes." },
]

const leadership = [
  { name: "Ambarish Gupta", role: "CEO & Founder", desc: "Founded Knowlarity, Asia's largest cloud telephony company. 20 years of global experience. MBA Carnegie Mellon; B.Tech IIT Kanpur." },
  { name: "Prateek Shrivastava", role: "CTO", desc: "CTO consultant with 20+ years in edtech, large platforms, and FinTech. Helps portfolio companies modernize legacy systems." },
  { name: "Manish Agarwal", role: "VP of Revenue", desc: "20+ years in financial services, consulting, and software. Leads GTM strategy and AI adoption across portfolio companies." },
  { name: "Thomas Bark", role: "General Counsel", desc: "Former Jones Day partner representing Fortune 500 and PE clients in M&A and venture capital transactions." },
  { name: "Mulesh Kumar Garg", role: "Financial Controller", desc: "15-year track record in financial controllership, FP&A, taxation, and risk management." },
]

const investmentTeam = [
  { name: "Alex Eckelberry", role: "Investor", desc: "Tech CEO, board member, and adviser. Grows companies rapidly and profitably." },
  { name: "Yara Chepa", role: "Investment Associate", desc: "5 years PE experience in deal sourcing and portfolio monitoring." },
]

const advisors = [
  { name: "Riteesh Singh", role: "Advisor", desc: "Software operator with 15+ years at PE-backed companies. Member of TPG's Software Leadership Council." },
  { name: "Ajay Shrivastava", role: "Tech Advisor", desc: "CXO driving business and tech transformation. Led operations at Ocrolus, Knowlarity, HT Media, and OYO." },
  { name: "Sriram Palepu", role: "Finance Advisor", desc: "Seasoned finance leader advising on capital structure, financial strategy, and operational scaling." },
]

function PersonCard({ person }: { person: { name: string; role: string; desc: string } }) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
        {person.name.split(" ").map(n => n[0]).join("")}
      </div>
      <h4 className="mt-4 text-sm font-semibold text-foreground">{person.name}</h4>
      <p className="text-xs font-medium text-primary">{person.role}</p>
      <p className="mt-2 text-xs text-muted-foreground">{person.desc}</p>
    </div>
  )
}

export function AboutPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">About Us</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Operators. Not Advisors.</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/60">
              BVC acquires underperforming PE-backed software companies and applies a four-layer operating framework -- Revenue, Cost, and Product interventions in parallel, with unified accountability for EBITDA expansion and multiple construction.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div><p className="text-xs text-white/40">Founded</p><p className="text-lg font-bold text-white">2021</p></div>
              <div><p className="text-xs text-white/40">Portfolio Companies</p><p className="text-lg font-bold text-white">5+</p></div>
              <div><p className="text-xs text-white/40">Headquarters</p><p className="text-lg font-bold text-white">New York, NY</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Our mission</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Built on the belief that operators outperform advisors.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The most consequential improvements in PE-backed software come from operators inside the business -- accountable to the same equity outcome as the sponsor, not billing by the hour. BVC has deployed that thesis across five portfolio companies since 2021, building a repeatable framework for EBITDA expansion and multiple construction.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Why BVC</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">The Basis Vectors Advantage</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <a.icon className="h-6 w-6 text-primary" />
                <h4 className="mt-3 text-sm font-semibold text-foreground">{a.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Our History</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Built on Execution</h2>
          <div className="mt-10 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{t.year.slice(-2)}</div>
                  <div className="mt-2 w-px flex-1 bg-border" />
                </div>
                <div className="pb-4">
                  <p className="text-xs font-medium text-primary">{t.year}</p>
                  <h4 className="mt-1 text-sm font-semibold text-foreground">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-secondary/40 py-16 lg:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Leadership</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">BVC Leadership Team</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Investment Team */}
      <section id="investment" className="py-16 lg:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Investment</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Investment Team</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {investmentTeam.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section id="advisors" className="bg-secondary/40 py-16 lg:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Advisors</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Advisors</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[oklch(0.17_0.015_260)] py-16 lg:py-24" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{"Let's Build Enduring Value Together."}</h2>
          <p className="mt-4 text-base text-white/60">Reach out for partnership inquiries, investment discussions, or to learn how BVC&apos;s operating model can transform your portfolio company.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
