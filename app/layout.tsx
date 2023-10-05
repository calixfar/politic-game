import SessionProvider from '@/components/SessionProvider'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionValidator from '@/components/SessionValidator'
import Script from 'next/script'

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
      <head>
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_KEY}');
            `
          }}
        />
      </head>
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_KEY}"
                height="0"
                width="0"
                style="display: none; visibility: hidden;"
              />
            `
          }}
        />
      </body>
    </html>
  )
}
