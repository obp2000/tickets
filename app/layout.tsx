import './globals.css'
import "react-datepicker/dist/react-datepicker.css"

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['cyrillic'], weight: '400' })

export const metadata: Metadata = {
  title: 'Tickets',
  description: 'Avia Tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="container mx-auto h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
