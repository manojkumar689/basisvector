import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioPageContent } from "@/components/portfolio-page-content"

export const metadata = {
  title: "Portfolio -- Basis Vectors Capital",
  description: "Seven B2B SaaS and technology companies at various stages of the BVC Transformation Framework.",
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioPageContent />
      <Footer />
    </main>
  )
}
