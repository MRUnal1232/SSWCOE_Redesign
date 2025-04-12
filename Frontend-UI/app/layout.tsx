import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import TopHeader from "@/components/top-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SSWCOE - Engineering College",
  description: "A premier engineering institution committed to academic excellence and innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TopHeader />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'