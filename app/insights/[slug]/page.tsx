import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InsightsPostContent } from "@/components/insights-post-content"
import {
  getPostBySlug,
  getAllPostSlugs,
  getFeaturedImageUrl,
  stripHtml,
} from "@/lib/wordpress"

// ─── ISR revalidation ─────────────────────────────────────────────────────────
export const revalidate = 3600

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post Not Found — BVC Insights" }

  const title = stripHtml(post.title.rendered)
  const description = stripHtml(post.excerpt.rendered).slice(0, 160)
  const image = getFeaturedImageUrl(post)

  return {
    title: `${title} — BVC Insights`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function InsightsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main>
      <Navbar />
      <InsightsPostContent post={post} />
      <Footer />
    </main>
  )
}
