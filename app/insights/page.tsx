import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InsightsPageContent } from "@/components/insights-page-content"

export const metadata = {
  title: "Insights -- BVC",
  description: "134 articles organized around the BVC four-layer framework -- Benchmark, Rebuild, Compound, and Exit Readiness.",
}

export default function InsightsPage() {
  return (
    <main>
      <Navbar />
      <InsightsPageContent />
      <Footer />
    </main>
  )
}
