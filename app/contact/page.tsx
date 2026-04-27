import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata = {
  title: "Contact Us -- Basis Vectors Capital",
  description: "Reach out for partnership inquiries, investment discussions, or to learn how BVC's operating model can transform your portfolio company.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
