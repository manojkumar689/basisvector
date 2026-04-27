"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Search, ArrowRight, Calendar, ChevronLeft, ChevronRight, RefreshCw, X } from "lucide-react"
import { useWordPressPosts, useWordPressCategories } from "@/hooks/use-wordpress-posts"
import {
  getFeaturedImageUrl,
  getPostCategories,
  stripHtml,
  formatDateShort,
  type WPPost,
} from "@/lib/wordpress"

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function PostSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-48 w-full animate-pulse bg-slate-100" />
      <div className="flex flex-col gap-3 p-5">
        <div className="h-3 w-20 animate-pulse rounded-full bg-slate-100" />
        <div className="h-5 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
        <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100" />
        <div className="mt-2 flex items-center justify-between">
          <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-16 animate-pulse rounded bg-slate-100" />
        </div>
      </div>
    </div>
  )
}

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: WPPost; index: number }) {
  const image = getFeaturedImageUrl(post)
  const cats = getPostCategories(post)
  const category = cats[0]
  const title = stripHtml(post.title.rendered)
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Featured image */}
      <Link href={`/insights/${post.slug}`} className="block overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="text-4xl font-black text-primary/20">BVC</span>
          </div>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category + date */}
        <div className="flex items-center justify-between gap-2">
          {category ? (
            <span className="inline-flex items-center rounded-full bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              {category.name}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Insights
            </span>
          )}
          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <Calendar className="h-3 w-3" />
            {formatDateShort(post.date)}
          </span>
        </div>

        {/* Title */}
        <Link href={`/insights/${post.slug}`}>
          <h2 className="mt-3 line-clamp-2 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-primary">
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 flex-1 line-clamp-3 text-[13px] leading-relaxed text-slate-500">
          {excerpt}{excerpt.length >= 150 ? "…" : ""}
        </p>

        {/* Read more */}
        <Link
          href={`/insights/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:gap-2"
        >
          Read more <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  )
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number
  totalPages: number
  onPageChange: (p: number) => void
}) {
  if (totalPages <= 1) return null

  const pages: (number | "…")[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (page > 3) pages.push("…")
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i)
    if (page < totalPages - 2) pages.push("…")
    pages.push(totalPages)
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="flex h-9 w-9 items-center justify-center text-slate-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-all ${
              p === page
                ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                : "border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function InsightsPageContent() {
  const {
    posts, total, totalPages, page, setPage,
    search, setSearch, categoryId, setCategoryId,
    loading, error, refresh,
  } = useWordPressPosts({ perPage: 9 })

  const { categories } = useWordPressCategories()

  const handleCategoryClick = (id: number) => {
    setCategoryId(id === categoryId ? 0 : id)
  }

  const handlePageChange = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      {/* ── Hero (dark) ──────────────────────────────────────────────────────── */}
      <section className="bg-[oklch(0.18_0.015_260)] pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              Research &amp; Insights
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              BVC Insights
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              Essays on value creation in PE-backed SaaS — GTM, Cost, Product,
              Data, and the CFO layer.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-lg"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input
                type="search"
                placeholder="Search insights…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.07] py-3 pl-11 pr-10 text-sm text-white placeholder:text-white/30 backdrop-blur-sm transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid (light) ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">

          {/* Category pills */}
          {categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              <button
                onClick={() => setCategoryId(0)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  categoryId === 0
                    ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    categoryId === cat.id
                      ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat.name}
                  <span className="ml-1.5 text-[11px] opacity-60">({cat.count})</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Results count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {loading ? (
                <span className="animate-pulse">Loading…</span>
              ) : error ? (
                ""
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {Math.min((page - 1) * 9 + 1, total)}–{Math.min(page * 9, total)}
                  </span>{" "}
                  of <span className="font-semibold text-slate-700">{total}</span> posts
                  {search && (
                    <> for <span className="font-semibold text-slate-700">&ldquo;{search}&rdquo;</span></>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-12 text-center"
                >
                  <p className="text-red-600 font-medium">{error}</p>
                  <button
                    onClick={refresh}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                  </button>
                </motion.div>
              ) : loading ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <PostSkeleton key={i} />
                  ))}
                </motion.div>
              ) : posts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-16 text-center"
                >
                  <Search className="h-8 w-8 text-slate-300" />
                  <p className="font-medium text-slate-600">No posts found</p>
                  <button
                    onClick={() => { setSearch(""); setCategoryId(0) }}
                    className="text-sm text-primary hover:brightness-110"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`grid-${page}-${categoryId}-${search}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {posts.map((post, i) => (
                    <PostCard key={post.id} post={post} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {!loading && !error && (
            <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </div>
      </section>
    </div>
  )
}
