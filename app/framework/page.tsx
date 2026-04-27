import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FrameworkPageContent } from "@/components/framework-page-content"

export const metadata = {
  title: "BVC Transformation Framework",
  description: "A four-layer operating system for PE-backed SaaS -- EBITDA growth, margin improvement, and equity value expansion.",
}

export default function FrameworkPage() {
  return (
    <main>
      <Navbar />
      <FrameworkPageContent />
      <Footer />
    </main>
  )
}
