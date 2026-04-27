"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, AlertTriangle, FileText } from "lucide-react"

interface DiagnosticData {
  title: string
  subtitle: string
  layer: string
  whyTitle: string
  whyDesc: string
  failureModes: { title: string; desc: string }[]
  deliverables: { title: string; desc: string }[]
  nextStep: { title: string; desc: string; primaryLink: { label: string; href: string }; secondaryLink: { label: string; href: string } }
  related: { title: string; desc: string; href: string }[]
}

export function DiagnosticPageContent({ data }: { data: DiagnosticData }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">{data.layer}</span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{data.title}</h1>
            <p className="mt-4 text-lg text-white/60">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Why This Audit */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Why This Audit</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">{data.whyTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{data.whyDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Failure Modes */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">What We Find</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              The failure modes -- and where you&apos;re losing money
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {data.failureModes.map((fm, i) => (
              <motion.div
                key={fm.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{fm.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{fm.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Deliverable</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">What you walk away with</h2>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <FileText className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-sm font-semibold text-foreground">{d.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="bg-[oklch(0.17_0.015_260)] py-16 lg:py-24" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Next Step</span>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{data.nextStep.title}</h2>
            <p className="mt-4 text-base text-white/60">{data.nextStep.desc}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href={data.nextStep.primaryLink.href} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90">
                {data.nextStep.primaryLink.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={data.nextStep.secondaryLink.href} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                {data.nextStep.secondaryLink.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Related</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">After the audit</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.related.map((r) => (
              <Link key={r.title} href={r.href} className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary">{r.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{r.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
