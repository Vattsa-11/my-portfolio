import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Playfair_Display, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { VisitorTracker } from "@/components/visitor-tracker"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://vattsa-portfolio.vercel.app/"
  ),
  title: {
    default: "Srivattsa — Developer",
    template: "%s | Srivattsa",
  },
  description: "Building compilers, systems, and open-source tools.",
  generator: 'my-portfolio',
  authors: [{ name: "Srivattsa", url: "https://github.com/Vattsa-11" }],
  creator: "Srivattsa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vattsa-portfolio.vercel.app/",
    siteName: "Srivattsa",
    title: "Srivattsa — Developer",
    description: "Building Design Apps, Websites and open-source tools.",
    images: [
      {
        url: "https://vattsa-portfolio.vercel.app/api/og?title=Vattsa%20Sharma&description=Developer",
        width: 1200,
        height: 630,
        alt: "srivattsa - Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "srivattsa — Developer",
    description: "Building Design Apps, Websites and open-source tools.",
    images: ["https://vattsa-portfolio.vercel.app/api/og?title=Magi%20Sharma&description=Developer"],
    creator: "@Vattsa-11",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <BackToTop />
          <VisitorTracker />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
