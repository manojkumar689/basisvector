"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Shield, Award, CheckCircle } from "lucide-react"

const footerLinks = [
  {
    title: "Framework",
    links: [
      { label: "Benchmark -- L1", href: "/framework#benchmark" },
      { label: "Rebuild -- L2", href: "/framework#rebuild" },
      { label: "Compound -- L3", href: "/framework#compound" },
      { label: "Exit Readiness -- L4", href: "/framework#exit-readiness" },
      { label: "Full Framework", href: "/framework" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "GTM Efficiency Audit", href: "/diagnose/gtm-efficiency-audit" },
      { label: "Cost Structure Teardown", href: "/diagnose/cost-structure-teardown" },
      { label: "Product Gap Analysis", href: "/diagnose/product-gap-analysis" },
      { label: "Revenue Engine", href: "/modules/revenue-engine" },
      { label: "AI Automation", href: "/modules/ai-automation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "GTM & Revenue", href: "/insights?cat=gtm-and-revenue" },
      { label: "CFO & Metrics", href: "/insights?cat=cfo-and-metrics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Work With Us", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
]

const badges = [
  { icon: Shield, label: "SOC 2", sub: "TYPE II" },
  { icon: CheckCircle, label: "OPERATIONAL", sub: "EXCELLENCE" },
  { icon: Award, label: "PE-GRADE", sub: "GOVERNANCE" },
]

const partners = [
  "Vorro",
  "Cadient",
  "CV3",
  "Infinita Lab",
  "Agrim AI",
  "Relecura",
  "EasyEcom",
]

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.14_0.014_255)]">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 lg:px-6">
        {/* Top row: Brand + Link Columns */}
        <div className="grid gap-10 md:grid-cols-6">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Basis Vectors Capital"
              width={170}
              height={44}
              className="h-10"
              style={{ width: "auto" }}
            />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/30">
              PE operating partner for lower middle market SaaS. Building durable, profitable software businesses
              through structured value creation.
            </p>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-white/30">
                <Mail className="h-3.5 w-3.5 text-primary/50" />
                <span>info@basisvectors.com</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-white/30">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/50" />
                <span>560 Lexington Avenue, New York, NY 10022</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-white/25 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance badges section */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.04] bg-white/[0.015] px-8 py-6 md:flex-row">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            Certified & Compliant
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-5 py-3"
              >
                <b.icon className="h-5 w-5 text-primary/60" />
                <div>
                  <p className="text-xs font-bold text-white/60">{b.label}</p>
                  <p className="text-[9px] font-medium uppercase tracking-wider text-white/25">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-[11px] font-medium text-white/25 transition-colors hover:text-primary">
            {"View all security details "}
            <ArrowRight className="ml-1 inline h-3 w-3" />
          </Link>
        </div>

        {/* Trusted partners row */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/15">
            Trusted by Portfolio Companies
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {partners.map((name) => (
              <span
                key={name}
                className="text-[13px] font-semibold uppercase tracking-wider text-white/12 transition-colors hover:text-white/30"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 md:flex-row">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} Basis Vectors Capital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] text-white/20 transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] text-white/20 transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-[11px] text-white/20 transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
