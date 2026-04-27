"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

// ─── Accent color per column label ───────────────────────────────────────────
const COLUMN_ACCENT: Record<string, string> = {
  "Benchmark":          "#3b82f6",
  "Rebuild":            "#06b6d4",
  "Compound":           "#8b5cf6",
  "Exit Readiness":     "#f59e0b",
  "Companies":          "#3b82f6",
  "Featured Studies":   "#06b6d4",
  "By Stage":           "#8b5cf6",
  "Who We Are":         "#3b82f6",
  "How We Think":       "#8b5cf6",
  "Engagement Models":  "#3b82f6",
  "Process & Pricing":  "#06b6d4",
}

// ─── Nav data ─────────────────────────────────────────────────────────────────
const navItems = [
  {
    label: "Framework",
    href: "/framework",
    mega: {
      cta: {
        eyebrow: "The BVC Framework",
        title: "Four layers. One system.",
        desc: "Benchmark, Rebuild, Compound, and Exit — the playbook used across BVC portfolio companies.",
        btn: { label: "Talk to BVC", href: "/contact" },
        secondary: { label: "Subscribe", href: "/insights" },
        secondaryDesc: "PE operator playbooks, delivered monthly.",
      },
      columns: [
        {
          label: "Benchmark",
          links: [
            { label: "GTM Efficiency Audit",     href: "/diagnose/gtm-efficiency-audit" },
            { label: "Cost Structure Teardown",   href: "/diagnose/cost-structure-teardown" },
            { label: "Product Gap Analysis",      href: "/diagnose/product-gap-analysis" },
            { label: "Data Maturity Assessment",  href: "/diagnose/data-maturity-assessment" },
            { label: "Technical Diligence",       href: "/diagnose/technical-diligence" },
            { label: "NRR & Retention Drivers",   href: "/diagnose/nrr-retention-drivers" },
          ],
        },
        {
          label: "Rebuild",
          links: [
            { label: "Revenue Engine",        href: "/modules/revenue-engine",        isHead: true },
            { label: "GTM Engineering",       href: "/modules/gtm-engineering",       isSub: true },
            { label: "Pricing Architecture",  href: "/modules/pricing-architecture",  isSub: true },
            { label: "Expansion Playbooks",   href: "/modules/expansion-playbooks",   isSub: true },
            { label: "Cost Engine",           href: "/modules/cost-engine",           isHead: true },
            { label: "Offshore Substitution", href: "/modules/offshore-substitution", isSub: true },
            { label: "AI Automation",         href: "/modules/ai-automation",         isSub: true },
            { label: "Vendor Compression",    href: "/modules/vendor-compression",    isSub: true },
            { label: "Product Engine",        href: "/modules/product-engine",        isHead: true },
            { label: "AI-Native Workflows",   href: "/modules/ai-native-workflows",   isSub: true },
            { label: "Data Moat Build",       href: "/modules/data-moat-build",       isSub: true },
            { label: "Retention Loops",       href: "/modules/retention-loops",       isSub: true },
          ],
        },
        {
          label: "Compound",
          links: [
            { label: "Metrics Normalization",       href: "/framework#compound" },
            { label: "NRR >110% Systems",           href: "/framework#compound" },
            { label: "Exit Narrative Construction", href: "/framework#compound" },
            { label: "Multiple Expansion Playbook", href: "/framework#compound" },
            { label: "Investor-Grade Reporting",    href: "/framework#compound" },
          ],
        },
        {
          label: "Exit Readiness",
          links: [
            { label: "Investor-Grade Data Room",     href: "/framework#exit-readiness" },
            { label: "Buyer Narrative Construction", href: "/framework#exit-readiness" },
            { label: "Management Presentation",      href: "/framework#exit-readiness" },
          ],
        },
      ],
    },
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    mega: {
      cta: {
        eyebrow: "BVC Portfolio",
        title: "AI-Native Operators, Scaled.",
        desc: "Seven companies across healthcare, talent, eCommerce, materials, and enterprise AI.",
        btn: { label: "See All Companies", href: "/portfolio" },
      },
      columns: [],
      companyGrid: [
        { label: "Vorro",        href: "/portfolio#vorro",        desc: "AI healthcare workflows",  accent: "#3b82f6" },
        { label: "Cadient",      href: "/portfolio#cadient",      desc: "Predictive hiring",         accent: "#06b6d4" },
        { label: "CV3",          href: "/portfolio#cv3",          desc: "eCommerce growth",          accent: "#10b981" },
        { label: "Infinita Lab", href: "/portfolio#infinita-lab", desc: "Materials testing",         accent: "#f59e0b" },
        { label: "Agrim AI",     href: "/portfolio#agrim-ai",     desc: "Enterprise AI platform",    accent: "#8b5cf6" },
        { label: "Relecura",     href: "/portfolio#relecura",     desc: "Patent analytics",          accent: "#ef4444" },
        { label: "EasyEcom",     href: "/portfolio#easyecom",     desc: "Inventory SaaS",            accent: "#f97316" },
      ],
    },
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    mega: {
      cta: {
        eyebrow: "Proof, Not Promises",
        title: "Real transformations. Specific numbers.",
        desc: "Portfolio case studies with before/after metrics across Revenue, Cost, and Product engines.",
        btn: { label: "Read Case Studies", href: "/case-studies" },
      },
      columns: [
        {
          label: "Featured Studies",
          links: [
            { label: "Cadient",                          href: "/case-studies#cadient",  isHead: true },
            { label: "70-80% non-people OpEx reduction", href: "/case-studies#cadient",  isSub: true },
            { label: "Relecura",                         href: "/case-studies#relecura", isHead: true },
            { label: "Losses to Acquisition",            href: "/case-studies#relecura", isSub: true },
            { label: "EasyEcom",                         href: "/case-studies#easyecom", isHead: true },
            { label: "$5-10M ARR profitable SaaS",       href: "/case-studies#easyecom", isSub: true },
          ],
        },
        {
          label: "By Stage",
          links: [
            { label: "Benchmark",      href: "/framework#benchmark",      isHead: true },
            { label: "Rebuild",        href: "/framework#rebuild",        isHead: true },
            { label: "Compound",       href: "/framework#compound",       isHead: true },
            { label: "Exit Readiness", href: "/framework#exit-readiness", isHead: true },
          ],
        },
      ],
    },
  },
  {
    label: "Insights",
    href: "/insights",
    mega: {
      cta: {
        eyebrow: "Insights Letter",
        title: "PE operator playbooks, delivered monthly.",
        desc: "100+ essays on GTM, Cost, Product, Data, and the CFO layer.",
        btn: { label: "Browse All Insights", href: "/insights" },
        secondary: { label: "Subscribe", href: "/insights#subscribe" },
      },
      columns: [
        {
          label: "Benchmark",
          links: [
            { label: "Technical Diligence", href: "/insights?cat=technical-diligence" },
            { label: "Cost Structure",      href: "/insights?cat=cost-structure" },
            { label: "GTM Diagnostic",      href: "/insights?cat=gtm-diagnostic" },
          ],
        },
        {
          label: "Rebuild",
          links: [
            { label: "GTM & Revenue",         href: "/insights?cat=gtm-and-revenue" },
            { label: "Pricing & Packaging",   href: "/insights?cat=pricing-and-packaging" },
            { label: "Product & Engineering", href: "/insights?cat=product-engineering" },
            { label: "Offshore & Delivery",   href: "/insights?cat=offshore-and-global-delivery" },
          ],
        },
        {
          label: "Compound",
          links: [
            { label: "Customer Success", href: "/insights?cat=customer-success" },
            { label: "CFO & Metrics",    href: "/insights?cat=cfo-and-metrics" },
            { label: "Data & AI",        href: "/insights?cat=data-and-ai" },
          ],
        },
        {
          label: "Exit Readiness",
          links: [
            { label: "M&A Integration", href: "/insights?cat=manda-integration" },
            { label: "Turnaround",      href: "/insights?cat=turnaround-and-execution" },
          ],
        },
      ],
    },
  },
  {
    label: "About Us",
    href: "/about",
    mega: {
      cta: {
        eyebrow: "About Basis Vectors",
        title: "Operators, not advisors.",
        desc: "Veteran PE operators, GTM leaders, and engineers who build durable software businesses.",
        btn: { label: "Our Story", href: "/about" },
      },
      columns: [
        {
          label: "Who We Are",
          links: [
            { label: "About Us",             href: "/about" },
            { label: "BVC Leadership",       href: "/about#leadership" },
            { label: "Investment Team",      href: "/about#investment" },
            { label: "Advisors",             href: "/about#advisors" },
            { label: "Portfolio Leadership", href: "/about#portfolio-leadership" },
          ],
        },
        {
          label: "How We Think",
          links: [
            { label: "Who We Work With",  href: "/about#context",  isHead: true },
            { label: "The BVC Framework", href: "/framework",      isHead: true },
            { label: "Contact Us",        href: "/contact",        isHead: true },
          ],
        },
      ],
    },
  },
  {
    label: "Work With Us",
    href: "/contact",
    mega: {
      cta: {
        eyebrow: "Engage BVC",
        title: "Retainer + outcome-linked upside.",
        desc: "Three engagement models, sized to the mandate. Fees tied to EBITDA lift and exit multiple.",
        btn: { label: "Contact Us", href: "/contact" },
      },
      columns: [
        {
          label: "Engagement Models",
          links: [
            { label: "Full Operating Partner",    href: "/contact", isHead: true },
            { label: "End-to-end value creation", href: "/contact", isSub: true },
            { label: "Targeted Engine",           href: "/contact", isHead: true },
            { label: "Single-engine deployment",  href: "/contact", isSub: true },
            { label: "Pre-Exit Optimization",     href: "/contact", isHead: true },
            { label: "18-24 months out",          href: "/contact", isSub: true },
          ],
        },
        {
          label: "Process & Pricing",
          links: [
            { label: "Engagement Model",  href: "/contact",          isHead: true },
            { label: "Pricing Structure", href: "/contact#pricing",  isHead: true },
          ],
        },
      ],
    },
  },
]

// ─── Types ────────────────────────────────────────────────────────────────────
type CompanyEntry = { label: string; href: string; desc: string; accent: string }

// ─── Component ────────────────────────────────────────────────────────────────
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const clearTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const openMenu = (label: string) => {
    clearTimer()
    setActiveItem(label)
  }

  const scheduleClose = () => {
    clearTimer()
    timeoutRef.current = setTimeout(() => setActiveItem(null), 200)
  }

  const activeNavItem = navItems.find((i) => i.label === activeItem)

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-slate-200"
          : "bg-[oklch(0.18_0.015_255_/_0.65)] backdrop-blur-md"
      }`}
    >
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={scrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
              alt="Basis Vectors Capital"
              width={160}
              height={40}
              className="h-8 lg:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => openMenu(item.label)}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-150 ${
                  scrolled
                    ? activeItem === item.label
                      ? "text-primary"
                      : "text-slate-600 hover:text-slate-900"
                    : activeItem === item.label
                    ? "text-primary"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    activeItem === item.label ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:brightness-110 lg:inline-flex"
            >
              Contact Us
            </Link>
            <button
              className={`flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
                scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Full-width mega menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeItem && activeNavItem?.mega && (
          <motion.div
            key={activeItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onMouseEnter={clearTimer}
            className="border-t border-slate-100 bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 py-7 lg:px-6">
              <div className="flex gap-8">

                {/* CTA panel */}
                <div className="w-52 shrink-0 rounded-xl bg-slate-50 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                    {activeNavItem.mega.cta.eyebrow}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-slate-900 leading-snug">
                    {activeNavItem.mega.cta.title}
                  </h4>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                    {activeNavItem.mega.cta.desc}
                  </p>
                  <Link
                    href={activeNavItem.mega.cta.btn.href}
                    onClick={() => setActiveItem(null)}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition-all hover:brightness-110"
                  >
                    {activeNavItem.mega.cta.btn.label}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  {activeNavItem.mega.cta.secondary && (
                    <div className="mt-3 border-t border-slate-200 pt-3">
                      {activeNavItem.mega.cta.secondaryDesc && (
                        <p className="text-[10px] text-slate-400">{activeNavItem.mega.cta.secondaryDesc}</p>
                      )}
                      <Link
                        href={activeNavItem.mega.cta.secondary.href}
                        onClick={() => setActiveItem(null)}
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 transition-colors hover:text-primary"
                      >
                        {activeNavItem.mega.cta.secondary.label}
                        <ArrowRight className="h-2.5 w-2.5" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Columns or company grid */}
                <div className="flex-1">
                  {"companyGrid" in activeNavItem.mega && activeNavItem.mega.companyGrid ? (
                    /* ── Portfolio company card grid ── */
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-sm shrink-0" style={{ background: "#3b82f6" }} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                          Portfolio Companies
                        </span>
                      </div>
                      <div
                        className="mb-1 h-px"
                        style={{ background: "linear-gradient(90deg, #3b82f640, transparent)" }}
                      />
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {(activeNavItem.mega.companyGrid as CompanyEntry[]).map((co) => (
                          <Link
                            key={co.label}
                            href={co.href}
                            onClick={() => setActiveItem(null)}
                            className="group/co flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-all hover:border-slate-200 hover:bg-slate-50"
                          >
                            {/* Initial circle */}
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                              style={{ background: co.accent }}
                            >
                              {co.label.charAt(0)}
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-[12.5px] font-semibold text-slate-800 group-hover/co:text-slate-900">
                                {co.label}
                              </p>
                              <p className="truncate text-[10.5px] text-slate-400">
                                {co.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* ── Standard column grid ── */
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${activeNavItem.mega.columns.length}, minmax(0, 1fr))`,
                        gap: "1.5rem",
                      }}
                    >
                      {activeNavItem.mega.columns.map((col) => {
                        const accent = COLUMN_ACCENT[col.label] ?? "#3b82f6"
                        return (
                          <div key={col.label} className="min-w-0">
                            <div className="mb-3 flex items-center gap-2">
                              <span className="h-2 w-2 rounded-sm shrink-0" style={{ background: accent }} />
                              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                                {col.label}
                              </span>
                            </div>
                            <div
                              className="mb-3 h-px"
                              style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
                            />
                            <div className="flex flex-col gap-0.5">
                              {col.links.map((link, i) => (
                                <Link
                                  key={i}
                                  href={link.href}
                                  onClick={() => setActiveItem(null)}
                                  className={`group/link rounded-md px-2 py-1.5 text-[12.5px] transition-colors hover:bg-slate-50 ${
                                    link.isHead
                                      ? "font-semibold text-slate-800 hover:text-slate-900"
                                      : link.isSub
                                      ? "pl-4 text-slate-400 hover:text-slate-600"
                                      : "text-slate-600 hover:text-slate-900"
                                  }`}
                                >
                                  {link.label}
                                  {"desc" in link && link.desc && (
                                    <span className="ml-1.5 text-[10px] text-slate-400">
                                      {String(link.desc)}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto px-4 py-3">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-slate-700"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && item.mega && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-2">
                          {item.mega.columns.map((col) => {
                            const accent = COLUMN_ACCENT[col.label] ?? "#3b82f6"
                            return (
                              <div key={col.label} className="mb-4">
                                <div className="mb-1.5 flex items-center gap-1.5">
                                  <span className="h-1.5 w-1.5 rounded-sm" style={{ background: accent }} />
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    {col.label}
                                  </span>
                                </div>
                                <div className="space-y-0.5">
                                  {col.links.map((link, i) => (
                                    <Link
                                      key={i}
                                      href={link.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={`block rounded py-1.5 text-xs ${
                                        link.isHead
                                          ? "font-medium text-slate-700"
                                          : link.isSub
                                          ? "pl-3 text-slate-400"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                          <Link
                            href={item.mega.cta.btn.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary"
                          >
                            {item.mega.cta.btn.label}
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pb-2 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg bg-primary py-3 text-sm font-semibold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
