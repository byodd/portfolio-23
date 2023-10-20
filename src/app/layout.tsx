import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gatta Ba - Aspiring Software Developer',
  description: 'Gatta is a Computer Science Student that wants to become a Software Developer, yet capable of full stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='box-border'>{children}</body>
    </html>
  )
}
