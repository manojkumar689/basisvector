import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata = {
  title: "About Us -- Basis Vectors Capital",
  description: "Operators. Not Advisors. BVC acquires underperforming PE-backed software companies and applies a four-layer operating framework.",
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
