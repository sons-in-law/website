import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'liam-is-an.ai | AI Automation for Small & Medium Business',
  description: 'AI automation consultancy helping Australian SMBs streamline operations, reduce manual work, and scale intelligently.',
  keywords: ['AI automation', 'small business', 'consultancy', 'Australia', 'SMB'],
  authors: [{ name: 'Liam Wynne' }],
  openGraph: {
    title: 'liam-is-an.ai | AI Automation for SMBs',
    description: 'AI automation consultancy helping Australian SMBs streamline operations and scale intelligently.',
    url: 'https://liam-is-an.ai',
    siteName: 'liam-is-an.ai',
    locale: 'en_AU',
    type: 'website',
  },
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment-100/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-medium text-ink-900 tracking-tight hover:text-terracotta-600 transition-colors duration-300"
        >
          liam-is-an.ai
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/#about"
            className="font-sans text-sm text-ink-600 link-refined hover:text-ink-900 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sm text-ink-600 link-refined hover:text-ink-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink-900/10 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-4">
              liam-is-an.ai
            </h3>
            <p className="font-sans text-ink-600 leading-relaxed max-w-sm">
              AI automation consultancy helping Australian small and medium businesses
              work smarter, not harder.
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-sans text-sm uppercase tracking-wide-custom text-ink-500 mb-4">
              Get in touch
            </p>
            <a
              href="tel:+61431901458"
              className="font-sans text-ink-900 link-refined block mb-2"
            >
              0431 901 458
            </a>
            <address className="font-sans text-ink-600 not-italic leading-relaxed">
              22/51-57 Railway Parade<br />
              Engadine NSW 2233<br />
              Australia
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="hr-refined mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-ink-500">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} liam-is-an.ai. All rights reserved.
          </p>
          <p className="font-sans">
            ABN: 94 885 368 933
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col grain-overlay">
        <SplashScreen />
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
