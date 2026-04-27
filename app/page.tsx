import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FrameworkSection } from "@/components/framework-section"
import { TransformationSection } from "@/components/transformation-section"
import { LayersSection } from "@/components/layers-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ResultsSection } from "@/components/results-section"
import { ContextSection } from "@/components/context-section"
import { InsightsSection } from "@/components/insights-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FrameworkSection />
      <TransformationSection />
      <LayersSection />
      <PortfolioSection />
      <ResultsSection />
      <ContextSection />
      <InsightsSection />
      <Footer />
    </main>
  )
}
