// src/app/layout.tsx
import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'My Next App',
  description: 'Next.js 2강 라우팅 연습',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-4xl mx-auto p-8">{children}</main>
      </body>
    </html>
  )
}