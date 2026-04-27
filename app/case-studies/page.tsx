import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesPageContent } from "@/components/case-studies-page-content"

export const metadata = {
  title: "Case Studies -- Basis Vectors Capital",
  description: "Real transformations with before/after metrics across Revenue, Cost, and Product engines.",
}

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      <CaseStudiesPageContent />
      <Footer />
    </main>
  )
}
