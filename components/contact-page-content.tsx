"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, MapPin, Mail, Linkedin } from "lucide-react"

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.17_0.015_260)] pb-16 pt-32 lg:pb-24 lg:pt-44" data-dark-section>
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-white md:text-5xl">{"Let's Build Enduring Value Together."}</h1>
            <p className="mt-4 text-lg text-white/60">
              Reach out for partnership inquiries, investment discussions, or to learn how BVC&apos;s operating model can transform your portfolio company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {submitted ? (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Message sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{"We'll be in touch within 1 business day."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-foreground" htmlFor="firstName">First Name *</label>
                      <input id="firstName" required className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground" htmlFor="lastName">Last Name *</label>
                      <input id="lastName" required className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground" htmlFor="company">Company Name</label>
                    <input id="company" className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground" htmlFor="email">Business Email *</label>
                    <input id="email" type="email" required className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground" htmlFor="purpose">Purpose of Inquiry</label>
                    <select id="purpose" className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <option>Select a reason...</option>
                      <option>Request a demo</option>
                      <option>Book an introduction meeting</option>
                      <option>Partnership inquiry</option>
                      <option>Careers inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-sm font-semibold text-foreground">New York, United States</h4>
                <p className="mt-1 text-xs text-muted-foreground">Basis Vectors Inc.<br />560 Lexington Avenue<br />New York, NY 10022</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-sm font-semibold text-foreground">Gurugram, India</h4>
                <p className="mt-1 text-xs text-muted-foreground">Basis Vectors SS (India)<br />Forum DLF Cyber City, Phase III<br />Gurugram, India - 122002</p>
              </div>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:info@basisvectors.com" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
