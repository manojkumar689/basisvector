"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface ModuleData {
  title: string
  subtitle: string
  engine: string
  layer: string
  desc: string
  capabilities: string[]
  related: { title: string; desc: string; href: string }[]
}

export function ModulePageContent({ data }: { data: ModuleData }) {
  const engineColor = data.engine === "Revenue" ? "text-primary" : data.engine === "Cost" ? "text-primary" : "text-primary"

  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">{data.layer}</span>
              <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-medium text-primary">{data.engine} Engine</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{data.title}</h1>
            <p className="mt-4 text-lg text-white/60">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{data.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Capabilities</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.capabilities.map((cap) => (
              <motion.div key={cap} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{cap}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.17_0.015_260)] py-16 lg:py-24" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold text-white">Ready to deploy this engine?</h2>
          <p className="mt-4 text-base text-white/60">Every engagement starts with the Benchmark layer. Scope a diagnostic and see where value is leaking.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90">
              Scope an Engagement <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/framework" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              See the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Related Modules</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.related.map((r) => (
              <Link key={r.title} href={r.href} className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary">{r.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{r.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
