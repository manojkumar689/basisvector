// ─── WordPress REST API service ───────────────────────────────────────────────

export const WP_BASE = "https://basisvectors.com/wp-json/wp/v2"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPFeaturedMedia {
  source_url: string
  alt_text: string
  media_details?: {
    sizes?: {
      medium_large?: { source_url: string }
      medium?: { source_url: string }
      thumbnail?: { source_url: string }
      full?: { source_url: string }
    }
  }
}

export interface WPAuthor {
  name: string
  avatar_urls?: Record<string, string>
}

export interface WPTerm {
  id: number
  name: string
  slug: string
}

export interface WPPost {
  id: number
  slug: string
  status: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  link: string
  date: string
  modified: string
  categories: number[]
  tags: number[]
  author: number
  featured_media: number
  _embedded?: {
    author?: WPAuthor[]
    "wp:term"?: WPTerm[][]
    "wp:featuredmedia"?: WPFeaturedMedia[]
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
  description: string
}

export interface PostsResponse {
  posts: WPPost[]
  total: number
  totalPages: number
}

// ─── Fetch helpers ────────────────────────────────────────────────────────────

/** Call from server components with ISR revalidation */
export async function getPosts({
  page = 1,
  perPage = 9,
  search = "",
  categoryId,
  revalidate = 3600,
}: {
  page?: number
  perPage?: number
  search?: string
  categoryId?: number
  revalidate?: number
} = {}): Promise<PostsResponse> {
  const params = new URLSearchParams({
    _embed: "1",
    per_page: String(perPage),
    page: String(page),
    orderby: "date",
    order: "desc",
  })
  if (search.trim()) params.set("search", search.trim())
  if (categoryId && categoryId > 0) params.set("categories", String(categoryId))

  const res = await fetch(`${WP_BASE}/posts?${params}`, {
    next: { revalidate },
  })
  if (!res.ok) throw new Error(`WP API ${res.status}`)

  const posts: WPPost[] = await res.json()
  return {
    posts,
    total: Number(res.headers.get("X-WP-Total") ?? posts.length),
    totalPages: Number(res.headers.get("X-WP-TotalPages") ?? 1),
  }
}

/** Call from server components for a single post by slug */
export async function getPostBySlug(
  slug: string,
  revalidate = 3600,
): Promise<WPPost | null> {
  const res = await fetch(`${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
    next: { revalidate },
  })
  if (!res.ok) return null
  const posts: WPPost[] = await res.json()
  return posts[0] ?? null
}

/** Call from server for category list */
export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WP_BASE}/categories?per_page=100&hide_empty=true&orderby=count&order=desc`,
    { next: { revalidate: 86400 } },
  )
  if (!res.ok) return []
  return res.json()
}

/** Fetch all post slugs (for generateStaticParams) */
export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = []
  let page = 1
  while (true) {
    const res = await fetch(
      `${WP_BASE}/posts?per_page=100&page=${page}&_fields=slug`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) break
    const posts: { slug: string }[] = await res.json()
    if (!posts.length) break
    slugs.push(...posts.map((p) => p.slug))
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1)
    if (page >= totalPages) break
    page++
  }
  return slugs
}

// ─── Client-side fetch (no next cache options) ────────────────────────────────

export async function fetchPostsClient({
  page = 1,
  perPage = 9,
  search = "",
  categoryId,
}: {
  page?: number
  perPage?: number
  search?: string
  categoryId?: number
} = {}): Promise<PostsResponse> {
  const params = new URLSearchParams({
    _embed: "1",
    per_page: String(perPage),
    page: String(page),
    orderby: "date",
    order: "desc",
  })
  if (search.trim()) params.set("search", search.trim())
  if (categoryId && categoryId > 0) params.set("categories", String(categoryId))

  const res = await fetch(`${WP_BASE}/posts?${params}`)
  if (!res.ok) throw new Error(`WP API ${res.status}`)

  const posts: WPPost[] = await res.json()
  return {
    posts,
    total: Number(res.headers.get("X-WP-Total") ?? posts.length),
    totalPages: Number(res.headers.get("X-WP-TotalPages") ?? 1),
  }
}

export async function fetchCategoriesClient(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WP_BASE}/categories?per_page=100&hide_empty=true&orderby=count&order=desc`,
  )
  if (!res.ok) return []
  return res.json()
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

export function getFeaturedImageUrl(post: WPPost): string {
  const media = post._embedded?.["wp:featuredmedia"]?.[0]
  if (!media) return ""
  return (
    media.media_details?.sizes?.medium_large?.source_url ??
    media.media_details?.sizes?.medium?.source_url ??
    media.source_url
  )
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? "BVC"
}

export function getPostCategories(post: WPPost): WPTerm[] {
  return post._embedded?.["wp:term"]?.[0] ?? []
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#x2019;/g, "’")
    .replace(/&#8216;|&#x2018;/g, "‘")
    .replace(/&#8220;|&#x201C;/g, "“")
    .replace(/&#8221;|&#x201D;/g, "”")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/\[&hellip;\]/g, "…")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
