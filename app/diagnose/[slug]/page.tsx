import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DiagnosticPageContent } from "@/components/diagnostic-page-content"
import { diagnostics } from "@/lib/diagnostic-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return Object.keys(diagnostics).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = diagnostics[slug]
  if (!data) return { title: "Not Found" }
  return {
    title: `${data.title} -- Benchmark -- BVC`,
    description: data.subtitle,
  }
}

export default async function DiagnosticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = diagnostics[slug]
  if (!data) notFound()

  return (
    <main>
      <Navbar />
      <DiagnosticPageContent data={data} />
      <Footer />
    </main>
  )
}
