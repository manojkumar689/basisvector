"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import {
  getFeaturedImageUrl,
  getAuthorName,
  getPostCategories,
  stripHtml,
  formatDate,
  type WPPost,
} from "@/lib/wordpress"

function estimateReadTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function InsightsPostContent({ post }: { post: WPPost }) {
  const title = stripHtml(post.title.rendered)
  const image = getFeaturedImageUrl(post)
  const author = getAuthorName(post)
  const cats = getPostCategories(post)
  const readTime = estimateReadTime(post.content.rendered)

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.18_0.015_260)] pb-0 pt-28 lg:pt-36">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white/70"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Categories */}
          {cats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {cats.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/insights?category=${cat.id}`}
                  className="inline-flex rounded-full border border-primary/20 bg-primary/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary/[0.18]"
                >
                  {cat.name}
                </Link>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/40 pb-10"
          >
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime} min read
            </span>
          </motion.div>
        </div>

        {/* Featured image — spans full width below header */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mx-auto max-w-5xl px-4 lg:px-6"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={image}
                alt={title}
                className="h-64 w-full object-cover md:h-80 lg:h-96"
                loading="eager"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* ── Content ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="wp-content prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-li:text-slate-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            More Insights
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Explore the full BVC Insights library
          </h2>
          <p className="mt-3 text-slate-500">
            Essays on GTM, Cost, Product, Data, and the CFO layer — grounded in portfolio evidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:brightness-110"
            >
              Browse All Posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-primary/30 hover:text-primary"
            >
              Talk to BVC
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
