import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ModulePageContent } from "@/components/module-page-content"
import { modules } from "@/lib/module-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return Object.keys(modules).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = modules[slug]
  if (!data) return { title: "Not Found" }
  return {
    title: `${data.title} -- ${data.layer} -- BVC`,
    description: data.subtitle,
  }
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = modules[slug]
  if (!data) notFound()

  return (
    <main>
      <Navbar />
      <ModulePageContent data={data} />
      <Footer />
    </main>
  )
}
