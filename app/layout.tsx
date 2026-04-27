import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Basis Vectors Capital — Build Durable, Profitable SaaS Businesses",
  description:
    "PE operating partner for lower middle market SaaS. Benchmark, Rebuild, Compound, and Exit — the playbook used across BVC portfolio companies.",
  icons: {
    icon: "/images/logo-dark.png",
    apple: "/images/logo-dark.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#2a2a3e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
