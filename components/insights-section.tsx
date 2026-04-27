"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"

interface WPPost {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  link: string
  date: string
  _embedded?: {
    "wp:term"?: Array<Array<{ name: string; slug: string }>>
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>
  }
}

const ACCENT_COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6"]

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…")
    .replace(/\[&hellip;\]/g, "…")
    .trim()
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function PostSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 animate-pulse">
      <div className="h-0.5 w-12 rounded-full bg-white/10 mb-5" />
      <div className="h-3 w-24 rounded bg-white/10 mb-3" />
      <div className="h-5 w-full rounded bg-white/10 mb-2" />
      <div className="h-5 w-3/4 rounded bg-white/10 mb-3" />
      <div className="space-y-1.5 mt-2">
        <div className="h-3 w-full rounded bg-white/[0.06]" />
        <div className="h-3 w-5/6 rounded bg-white/[0.06]" />
        <div className="h-3 w-4/6 rounded bg-white/[0.06]" />
      </div>
    </div>
  )
}

export function InsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [posts, setPosts] = useState<WPPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://basisvectors.com/wp-json/wp/v2/posts?_embed&per_page=3")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed")
        return r.json()
      })
      .then((data: WPPost[]) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              Research
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">BVC Insights</h2>
            <p className="mt-3 max-w-xl text-base text-white/35">
              Essays on value creation in PE-backed SaaS — grounded in portfolio evidence.
            </p>
          </div>
          <Link
            href="https://basisvectors.com/insights"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 hidden items-center gap-2 text-sm font-semibold text-primary transition-all hover:brightness-110 md:inline-flex"
          >
            Browse All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {loading ? (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          ) : error ? (
            <div className="col-span-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center text-white/40 text-sm">
              Unable to load posts. Visit{" "}
              <Link href="https://basisvectors.com" target="_blank" className="text-primary hover:brightness-110">
                basisvectors.com
              </Link>{" "}
              to read the latest insights.
            </div>
          ) : (
            posts.map((post, i) => {
              const category =
                post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Insights"
              const excerpt = stripHtml(post.excerpt.rendered).slice(0, 160)
              const title = stripHtml(post.title.rendered)
              const accent = ACCENT_COLORS[i % ACCENT_COLORS.length]

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.05] hover:-translate-y-1"
                  >
                    <div className="h-0.5 w-12 rounded-full mb-5" style={{ background: accent }} />

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                        <span className="text-xs font-bold truncate" style={{ color: accent }}>
                          {category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-white/25 shrink-0">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-white leading-tight line-clamp-2">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/35 line-clamp-3">{excerpt}</p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:brightness-110">
                      Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              )
            })
          )}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="https://basisvectors.com/insights"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Browse All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
