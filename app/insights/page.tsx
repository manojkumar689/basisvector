import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InsightsPageContent } from "@/components/insights-page-content"

export const metadata: Metadata = {
  title: "BVC Insights — PE Operator Playbooks for SaaS",
  description:
    "Essays on GTM, Cost, Product, Data, and the CFO layer — grounded in evidence from the BVC portfolio of PE-backed SaaS companies.",
  openGraph: {
    title: "BVC Insights — PE Operator Playbooks for SaaS",
    description:
      "Essays on GTM, Cost, Product, Data, and the CFO layer — grounded in evidence from the BVC portfolio.",
    type: "website",
  },
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
