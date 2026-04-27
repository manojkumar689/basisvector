"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const navItems = [
  {
    label: "Framework",
    href: "/framework",
    mega: {
      cta: {
        eyebrow: "The BVC Framework",
        title: "Four layers. One system.",
        desc: "Benchmark, Rebuild, Compound, and Exit -- the playbook used across BVC portfolio companies.",
        btn: { label: "Talk to BVC", href: "/contact" },
        secondary: { label: "Subscribe", href: "/insights" },
        secondaryDesc: "PE operator playbooks, delivered monthly.",
      },
      columns: [
        {
          label: "Benchmark -- L1",
          links: [
            { label: "GTM Efficiency Audit", href: "/diagnose/gtm-efficiency-audit" },
            { label: "Cost Structure Teardown", href: "/diagnose/cost-structure-teardown" },
            { label: "Product Gap Analysis", href: "/diagnose/product-gap-analysis" },
            { label: "Data Maturity Assessment", href: "/diagnose/data-maturity-assessment" },
            { label: "Technical Diligence", href: "/diagnose/technical-diligence" },
            { label: "NRR & Retention Drivers", href: "/diagnose/nrr-retention-drivers" },
          ],
        },
        {
          label: "Rebuild -- L2",
          links: [
            { label: "Revenue Engine", href: "/modules/revenue-engine", isHead: true },
            { label: "GTM Engineering", href: "/modules/gtm-engineering", isSub: true },
            { label: "Pricing Architecture", href: "/modules/pricing-architecture", isSub: true },
            { label: "Expansion Playbooks", href: "/modules/expansion-playbooks", isSub: true },
            { label: "Cost Engine", href: "/modules/cost-engine", isHead: true },
            { label: "Offshore Substitution", href: "/modules/offshore-substitution", isSub: true },
            { label: "AI Automation", href: "/modules/ai-automation", isSub: true },
            { label: "Vendor Compression", href: "/modules/vendor-compression", isSub: true },
            { label: "Product Engine", href: "/modules/product-engine", isHead: true },
            { label: "AI-Native Workflows", href: "/modules/ai-native-workflows", isSub: true },
            { label: "Data Moat Build", href: "/modules/data-moat-build", isSub: true },
            { label: "Retention Loops", href: "/modules/retention-loops", isSub: true },
          ],
        },
        {
          label: "Compound -- L3",
          links: [
            { label: "Metrics Normalization (CFO Layer)", href: "/framework#compound" },
            { label: "NRR >110% Systems", href: "/framework#compound" },
            { label: "Exit Narrative Construction", href: "/framework#compound" },
            { label: "Multiple Expansion Playbook", href: "/framework#compound" },
            { label: "Investor-Grade Reporting", href: "/framework#compound" },
          ],
        },
        {
          label: "Exit Readiness -- L4",
          links: [
            { label: "Investor-Grade Data Room", href: "/framework#exit-readiness" },
            { label: "Buyer Narrative Construction", href: "/framework#exit-readiness" },
            { label: "Management Presentation", href: "/framework#exit-readiness" },
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
      columns: [
        {
          label: "Companies",
          links: [
            { label: "Vorro", href: "/portfolio#vorro", isHead: true, desc: "AI healthcare workflows" },
            { label: "Cadient", href: "/portfolio#cadient", isHead: true, desc: "Predictive hiring" },
            { label: "CV3", href: "/portfolio#cv3", isHead: true, desc: "eCommerce growth" },
            { label: "Infinita Lab", href: "/portfolio#infinita-lab", isHead: true, desc: "Materials testing" },
            { label: "Agrim AI", href: "/portfolio#agrim-ai", isHead: true, desc: "Enterprise AI" },
            { label: "Relecura", href: "/portfolio#relecura", isHead: true, desc: "Patent analytics" },
            { label: "EasyEcom", href: "/portfolio#easyecom", isHead: true, desc: "Inventory SaaS" },
          ],
        },
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
            { label: "Cadient", href: "/case-studies#cadient", isHead: true },
            { label: "70-80% non-people OpEx reduction", href: "/case-studies#cadient", isSub: true },
            { label: "Relecura", href: "/case-studies#relecura", isHead: true },
            { label: "Losses to Acquisition", href: "/case-studies#relecura", isSub: true },
            { label: "EasyEcom", href: "/case-studies#easyecom", isHead: true },
            { label: "$5-10M ARR profitable SaaS", href: "/case-studies#easyecom", isSub: true },
          ],
        },
        {
          label: "By Stage",
          links: [
            { label: "Benchmark -- L1", href: "/framework#benchmark", isHead: true },
            { label: "Rebuild -- L2", href: "/framework#rebuild", isHead: true },
            { label: "Compound -- L3", href: "/framework#compound", isHead: true },
            { label: "Exit Readiness -- L4", href: "/framework#exit-readiness", isHead: true },
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
          label: "Benchmark -- L1",
          links: [
            { label: "Technical Diligence", href: "/insights?cat=technical-diligence" },
            { label: "Cost Structure", href: "/insights?cat=cost-structure" },
            { label: "GTM Diagnostic", href: "/insights?cat=gtm-diagnostic" },
          ],
        },
        {
          label: "Rebuild -- L2",
          links: [
            { label: "GTM & Revenue", href: "/insights?cat=gtm-and-revenue" },
            { label: "Pricing & Packaging", href: "/insights?cat=pricing-and-packaging" },
            { label: "Product & Engineering", href: "/insights?cat=product-engineering" },
            { label: "Offshore & Delivery", href: "/insights?cat=offshore-and-global-delivery" },
          ],
        },
        {
          label: "Compound -- L3",
          links: [
            { label: "Customer Success", href: "/insights?cat=customer-success" },
            { label: "CFO & Metrics", href: "/insights?cat=cfo-and-metrics" },
            { label: "Data & AI", href: "/insights?cat=data-and-ai" },
          ],
        },
        {
          label: "Exit Readiness -- L4",
          links: [
            { label: "M&A Integration", href: "/insights?cat=manda-integration" },
            { label: "Turnaround", href: "/insights?cat=turnaround-and-execution" },
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
            { label: "About Us", href: "/about" },
            { label: "BVC Leadership", href: "/about#leadership" },
            { label: "Investment Team", href: "/about#investment" },
            { label: "Advisors", href: "/about#advisors" },
            { label: "Portfolio Leadership", href: "/about#portfolio-leadership" },
          ],
        },
        {
          label: "How We Think",
          links: [
            { label: "Who We Work With", href: "/about#context", isHead: true },
            { label: "The BVC Framework", href: "/framework", isHead: true },
            { label: "Contact Us", href: "/contact", isHead: true },
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
            { label: "Full Operating Partner", href: "/contact", isHead: true },
            { label: "End-to-end value creation", href: "/contact", isSub: true },
            { label: "Targeted Engine", href: "/contact", isHead: true },
            { label: "Single-engine deployment", href: "/contact", isSub: true },
            { label: "Pre-Exit Optimization", href: "/contact", isHead: true },
            { label: "18-24 months out", href: "/contact", isSub: true },
          ],
        },
        {
          label: "Process & Pricing",
          links: [
            { label: "Engagement Model", href: "/contact", isHead: true },
            { label: "Pricing Structure", href: "/contact#pricing", isHead: true },
          ],
        },
      ],
    },
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveItem(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveItem(label)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveItem(null), 200)
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.20_0.014_254_/_0.92)] backdrop-blur-2xl border-b border-white/[0.08] shadow-xl shadow-black/20"
          : "bg-[oklch(0.18_0.015_255_/_0.6)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="relative flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Basis Vectors Capital"
              width={170}
              height={44}
              className="h-8 lg:h-10"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
                    activeItem === item.label
                      ? "text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${activeItem === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeItem === item.label && item.mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2"
                    >
                      <div className="w-max max-w-[900px] overflow-hidden rounded-2xl border border-white/[0.1] bg-[oklch(0.22_0.013_254_/_0.95)] shadow-2xl shadow-black/30 backdrop-blur-xl">
                        <div className="flex">
                          <div className="w-56 bg-[oklch(0.17_0.015_255)] p-5">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                              {item.mega.cta.eyebrow}
                            </span>
                            <h4 className="mt-2 text-sm font-bold text-white leading-snug">{item.mega.cta.title}</h4>
                            <p className="mt-2 text-[11px] leading-relaxed text-white/45">{item.mega.cta.desc}</p>
                            <Link
                              href={item.mega.cta.btn.href}
                              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110"
                            >
                              {item.mega.cta.btn.label}
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                            {item.mega.cta.secondary && (
                              <div className="mt-3 border-t border-white/[0.06] pt-3">
                                {item.mega.cta.secondaryDesc && (
                                  <p className="text-[10px] text-white/25">{item.mega.cta.secondaryDesc}</p>
                                )}
                                <Link
                                  href={item.mega.cta.secondary.href}
                                  className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-white/50 transition-colors hover:text-primary"
                                >
                                  {item.mega.cta.secondary.label}
                                  <ArrowRight className="h-2.5 w-2.5" />
                                </Link>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-5 p-5">
                            {item.mega.columns.map((col) => (
                              <div key={col.label} className="min-w-[150px]">
                                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary/70">
                                  {col.label}
                                </span>
                                <div className="mt-2 flex flex-col gap-px">
                                  {col.links.map((link, i) => (
                                    <Link
                                      key={i}
                                      href={link.href}
                                      className={`rounded-md px-2 py-1.5 text-[12px] transition-colors hover:bg-white/[0.05] ${
                                        link.isHead
                                          ? "font-semibold text-white/80 hover:text-white"
                                          : link.isSub
                                          ? "pl-4 text-white/35 hover:text-white/60"
                                          : "text-white/40 hover:text-white/70"
                                      }`}
                                    >
                                      {link.label}
                                      {"desc" in link && link.desc && (
                                        <span className="ml-1.5 text-[10px] text-white/20">
                                          {String(link.desc)}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110 lg:inline-flex"
            >
              Contact Us
            </Link>
            <button
              className="flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.08] bg-[oklch(0.19_0.014_254_/_0.98)] backdrop-blur-xl lg:hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/[0.04]">
                  <button
                    className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-white/70"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && item.mega && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-3">
                          {item.mega.columns.map((col) => (
                            <div key={col.label} className="mb-3">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">
                                {col.label}
                              </span>
                              <div className="mt-1 space-y-0.5">
                                {col.links.map((link, i) => (
                                  <Link
                                    key={i}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block rounded py-1.5 text-xs ${
                                      link.isHead ? "font-medium text-white/60" : "pl-3 text-white/30"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            href={item.mega.cta.btn.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary"
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
              <div className="pt-4">
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
