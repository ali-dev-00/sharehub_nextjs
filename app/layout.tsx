import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StarryBackground } from "@/components/starry-background"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ShareHub - Your Personal Data Saver",
  description: "Save and share your files securely with ShareHub",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <StarryBackground />
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

