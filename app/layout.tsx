import SessionProvider from '@/components/SessionProvider'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionValidator from '@/components/SessionValidator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Como votar',
  description: 'App para aprender como votar por el mister',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <SessionValidator>
              {children}
            </SessionValidator>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
