import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreativeAI Studio',
  description: 'AI-powered content creation platform for creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
