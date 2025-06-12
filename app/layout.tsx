import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Floaty',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/s1.png',
    shortcut: '/s1.png'
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
